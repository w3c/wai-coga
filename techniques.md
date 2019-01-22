---
title: Design Techniques
permalink: /coga-draft/techniques
github:
  repository: w3c/wai-coga
layout: default
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  **Purpose:** Provide detailed techniques and best practices to address requirements

  **Primary audience:** Someone wanting specific techniques that address coga requirements.

  **Path:* Accessibility Fundamentals / Cognitive Disabilities / Techniques

  **Outline:**
  
    - Introduction
    - Relationship to WCGA, UAAG & Personalization
    - Link to Themes
    - Link to Personas
    - Link to Testing guide
    - Themes - Interective content using TF voted format with tweaks [Themes list](https://w3c.github.io/wai-coga/fundamentals/coga/design-notes#design-guide-themes-and-methods)
      -  Title
      -  Description
      -  Methods
         -   Title
         -   Relevant WCAG 2.0 SCs and Techniques
         -   Relevant Personalization verbs and Techniques
         -   Details

  [See plan](./plan)

---
## Theme: Provide help and support

Users with cognitive impairments may need different levels and forms of help, depending on their circumstances.<br />

{% include excol.html type="start" %}

### Provide human help

{% include excol.html type="middle" %}

- Ensure easy access to a human who can provide help and support. Support can be on accessibility, technical, process or domain based.
- Access to human help should never require the user to manage complex menu systems such as voice menus with different options. 

#### Relevent WCAG 2.0 SCs and Techniques

- [3.3.5 Help: Context-sensitive help is available](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-context-help) (Level AAA)] Note for coga global help should be provided as well as context sensitive [?]
- [G71: Providing a help link on every Web page](https://www.w3.org/TR/WCAG20-TECHS/complete.html#G71) Note for coga, help should be available on every page, not just forms.
- G193 Providing help by an assistant in the Web page](https://www.w3.org/TR/WCAG20-TECHS/G193.htmlhttps://www.w3.org/TR/WCAG20-TECHS/G193.html) NB !!! There is often a mixture of suitable WCAG links (SC, quick ref, Techniques & Understanding). I picked the SC plus others even though they can all be found via the SC

#### Example Techniques to consider

- Live chat or video call help
- A phone number or link (eq VOIP phone)
- A simple contact form

Full Details in the Coga Design Guide [8.3.4 Provide human help](https://w3c.github.io/coga/design/#provide-human-help)

#### Example Personalisation techniques to consider

- P999 Select default help mode</li>

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Provide help for forms and non-standard controls

{% include excol.html type="middle" %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Provide help for complex information

{% include excol.html type="middle" %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{% include excol.html type="end" %}

## Theme: Use clear and understandable content and text

{% include excol.html type="start" %}

### Use clear words

{% include excol.html type="middle" %}

- Use common and clear words. Look at the most common 1500 words or phrases. These are the terms that people with severe language impairments are most likely to know.
- Remove unnecessary words
- Do not invent new words or give words new meanings in your application. Do not expect people to learn new meanings for words just to use your content. If you must make a new terms make sure the user has access to an explanation within one click or event.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Do not use double negatives or clauses inside clauses

{% include excol.html type="middle" %}

- Use a simple sentence structure. Do not use a double negative to express a positive. Do not use clauses inside clauses that can be confusing.
- For example, more people will understand “You must get the agency’s approval before we can answer your claim”: rather than “No approval of any claims can be achieved without the agency’s approval”.

{% include excol.html type="end" %}

