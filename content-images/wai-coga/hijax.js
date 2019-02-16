// Enhance the design guide with Ajax
// NB Uses so ES6 so need a moder browser - https://caniuse.com/#search=es6 
function getParentLocationNode(node) {
    const newLocation = node.parentNode.parentNode.parentNode.firstElementChild
    return newLocation ? newLocation.className == 'page-link' ? newLocation : null : null
}  

function updateNavigation(newNode) {
    const current = newNode.getAttribute('aria-current')

    const navList = document.getElementsByClassName('sidenav--list')[0]
    const currentPage = navList.querySelector(':scope a[aria-current=page]')

    // how do we tell AT users about the change?
    if (currentPage) {
        currentPage.removeAttribute('aria-current')
    }
    newNode.setAttribute('aria-current', 'page')

    const currentLocation = navList.querySelector(':scope > li > a[aria-current=location]')
    const location = getParentLocationNode(newNode)
    if (currentLocation && currentLocation != location) {
        currentLocation.removeAttribute('aria-current')
    }
    if (location) {
        location.setAttribute('aria-current', 'location')
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
    }
}

function navigate(target, href) {
    updateNavigation(target)
    updatePage(href)
}

function navigateToURL(url) {
    const target = document.querySelector(`.sidenav--list li > a[href="${url}"]`)
    navigate(target, url)
}

function hijax() {
    function onClick(event) {
        event.preventDefault()

        const target = event.currentTarget;
        const href = target.getAttribute('href')
        navigate(target, href)

        history.pushState(null, null, href);
    }

    function onPopstate(event) {
        const path = document.location.pathname
        navigateToURL(path)
    }

    const navList = document.getElementsByClassName('sidenav--list')[0]
    const locations = navList.querySelectorAll(':scope li > a')
    locations.forEach((node) => { node.addEventListener('click', onClick, false) })
    console.info(`Hijaxed ${locations.length} page links`)

    window.onpopstate = onPopstate
}

var supportsES6 = function() {
    try {
      new Function("(a = 0) => a");
      return true;
    }
    catch (err) {
      return false;
    }
  }()
  
if (supportsES6) {
    window.addEventListener("load", hijax)
}