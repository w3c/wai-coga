// Enhance the design guide with Ajax
// NB Uses so ES6 so need a moder browser - https://caniuse.com/#search=es6 

function normalisePathname(pathname) {
    const curPathname = `${window.location.origin}${window.location.pathname}`
    const url = new URL(pathname, curPathname)
    return url.pathname
}

function getPotentialLocationNode(node) {
    const newLocation = node.parentNode.parentNode.parentNode.firstElementChild
    return newLocation ? newLocation.className == 'page-link' ? newLocation : null : null
}

var g_navLinkNodes = []

function isPathnameInNavLinks(pathname) {
    const normalPath = normalisePathname(pathname)
    const index = g_navLinkNodes.findIndex((node) => node.getAttribute('href') == normalPath)
    return index != -1
}

function isHijaxablePageLink(node) {
    const href = node.getAttribute('href')
    const isLinkable =
        normalisePathname(href) != document.location.pathname &&
        isPathnameInNavLinks(href)
    return isLinkable
}

function getChildList(node) {
    const sibling = node.nextElementSibling
    return (sibling && sibling.nodeName == 'UL') ? sibling : null
}

function updateNavigation(newNode) {
    const navList = document.getElementsByClassName('sidenav--list')[0]
    const current = navList.querySelector(':scope a[aria-current]')
    const currentPage = navList.querySelector(':scope a[aria-current=page]')
    const currentLocation = navList.querySelector(':scope a[aria-current=location]')
    const potentialLocation = getPotentialLocationNode(newNode)

    // Do we need tell AT users about the change?
    currentPage.removeAttribute('aria-current')
    if (currentLocation) {
        currentLocation.removeAttribute('aria-current')
    }
    newNode.setAttribute('aria-current', 'page')
    if (potentialLocation) {
        potentialLocation.setAttribute('aria-current', 'location')
    }

    const currentChildListNode = getChildList(current)
    const childListNode = getChildList(newNode)
    if (currentChildListNode && !potentialLocation && currentChildListNode != childListNode) {
        currentChildListNode.setAttribute('aria-expanded', 'false')
    }
    if (childListNode) {
        const expanded = childListNode.getAttribute('aria-expanded') == 'true' ? 'false' : 'true'
        childListNode.setAttribute('aria-expanded', expanded)
    }
}


async function updatePage(url) {
    const response = await fetch(url);
    if (response.ok) {
        const html = await response.text()
        const re = /<main.*>([\s\S]*?)<\/main>/i
        const m = re.exec(html)
        const page = m ? m[1] : null

        const main = document.querySelector('main#main')
        if (main) {
            main.innerHTML = page
        }

        const pageLinkNodes = Array(...main.querySelectorAll('a'))
        const linkableNodes = pageLinkNodes.filter(isHijaxablePageLink)
        linkableNodes.forEach((node) => { node.addEventListener('click', onPageClick, false) })
        console.info(`Hijaxed ${linkableNodes.length} page links`)
    }
}

function navigate(navNode) {
    updateNavigation(navNode)
    const pathname = navNode.getAttribute('href')
    updatePage(pathname)

    return pathname
}

function navigateToURL(url) {
    const target = document.querySelector(`.sidenav--list li > a[href="${url}"]`)
    navigate(target)
}

function onNavClick(event) {
    event.preventDefault()

    const target = event.currentTarget;
    const pathname = navigate(target)

    history.pushState(null, null, pathname);
}

function onPageClick(event) {
    event.preventDefault()

    const target = event.currentTarget;
    const pathname = normalisePathname(target.getAttribute('href'))
    navigateToURL(pathname)

    history.pushState(null, null, pathname);
}

function onPopstate(event) {
    const pathname = document.location.pathname
    navigateToURL(pathname)
}

function hijax() {
    const navLinkNodes = document.querySelectorAll('.sidenav--list li > a')
    g_navLinkNodes = Array(...navLinkNodes)
    navLinkNodes.forEach((node) => { node.addEventListener('click', onNavClick, false) })
    console.info(`Hijaxed ${navLinkNodes.length} nav links`)

    navChildLists = document.querySelectorAll('.sidenav--list > li > a + ul')
    navChildLists.forEach((node) => { node.setAttribute('aria-expanded', 'false') })

    window.onpopstate = onPopstate
}

function supportsES6() {
    try {
        new Function("(a = 0) => a");
        return true;
    }
    catch (err) {
        return false;
    }
}

if (supportsES6()) {
    window.addEventListener("load", hijax)
}