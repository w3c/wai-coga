---
title: Design Guide
permalink: /coga-draft/guide
github:
  repository: w3c/wai-coga
layout: cogadesign
feedbackmail: wai@w3.org
inline_css: "main#main {
  grid-column-start: 2;
  }
  details[open].sidedetails > summary {
  background-color: #ddd;
  width: 48%;
  }
  details.sidedetails > div {
  position: absolute;
  top: 0px;
  left:50%;
  margin-left:1rem;
  }
  "
doc-note-type: draft
doc-note-message-md: |
  **Outline:**
  
    - Introduction
    - Relationship to WCGA, UAAG & Personalization
    - Themes - Interective content using TF voted format with tweaks based on TF mockup [Themes list](./plan#detailed-design-guide-themes-and-methods)
    
  [See page details in plan](./plan#design-guide)

---
## Overview

Making websites and applications that are friendly for people with cognitive impairments affects every part of design and development.

Traditionally accessibility has been most focused on the interface, and making that usable for people with sensory and physical impairments in vision, hearing and/or mobility. Some accessibility features will help people with cognitive impairments, but often the issues are about context, language, usability, and other more general factors that impact everyone to some degree.

This document aims to provide guidance on how to make websites and applications that are friendly for people with cognitive impairments by providing guidance for your designs, and design process.

This guide is divided into design themes. There are also user stories, testing methodologies, and design checkpoints for each theme. Just understanding the themes and user stories may help make your content more accessible to some users with cognitive and learning disabilities. Please see the section on user testing for guidance on how to perform COGA user testing.

{% include excol.html type="all" %}

{% include excol.html type="start" %}

## Objective 1: Ensure user can understand what each element is and how to use it

{% include excol.html type="middle" %}

{% include excol.html type="start" %}

### Introduction

{% include excol.html type="middle" %}

To be able to use a site or application, people need to know what all controls and element are on your page and how to use them.

Not everyone finds learning new things easy, and not everyone can remember new designs.

The more people need to figure things out, the less people can use your site.

Many users cannot easily learn new design metaphors, or remember things they learned, such as users with mild cognitive impairment or dementia. Without these skills, it can be much harder or impossible to find what they need, work out what the items do and how to use them.

Many users can be overwhelmed by too many options, or too much information. If reading is slow, then too much information mixed together will make it difficult or impossible to use the site.

Using familiar design, familiar terms and familiar symbols are key to being able to use the web for users who will struggle to remember new symbols and design. Users need the following to be familiar:

- Where to find elements: For example, people may look for the search on the top right hand corner of a page. If it - is somewhere else it will be hard to find.
- Symbols: For example, people may look for a question mark for help. If you use a different symbol less people - will know what it is.
- Text: Use text people know, including people with a limited vocabulary.
- How to get help: Always make it easy to find the help.

The use of personalization can be extremely useful in offering both familiarity as well as other benefits for users with cognitive and learning disabilities. This is important as what is familiar for one user may not be familiar to another. Familiarity is often based on the needs of the individual user.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### User testing

{% include excol.html type="middle" %}

Make sure your user testing has all the different cognitive disabilities represented. (Make sure people don't just ask these as questions, but ask something that demonstrates it.)

Test for the following:

- Does the user know what the page is about (frame to make sure people don't just ask these as questions, but ask something that demonstrates it.)
- Does the user know what actions they can take on a page
- Does the user know where they are in a website, an application or a multistep process
- Can the user easily find the different sections of content
- Identify the different activities that the user may want to complete on the page.
  - Can they achieve the activities without asking for help
  - Does the user make errors trying to achieve the activities
  - Does they user find them easy to achieve

{% include excol.html type="end" %}
{% include excol.html type="start" %}

### User stories

{% include excol.html type="middle" %}

This leads to the following user stories:

- I am familiar with the user interface (such as menus, buttons and design components) where everything happens, and I know how to work it and what will happen when I work it.
- I know what to click to make things happen
- I like content delivered in an easy-to-understand mode.
- I like simple content with few options and consistent text.
- I know what this page does
- I know how to do each task

{% include excol.html type="end" %}

### Patterns

{% include excols.html type="start" %}

### Make the purpose of your page clear

{% include excols.html type="middle" %}

Use a clear title or heading that summarizes the purpose of a page, or other clear signposts that have been tested by users with cognitive disabilities. 

#### How it helps

This helps many people, including those with poor memory, attention, or anyone who is easily distracted. This includes people with age-appropriate forgetfulness, or Attention Deficit Disorder (ADD).

For example, someone with mild dementia is using online shopping. They get distracted and then when they look at the screen again they have forgotten what they were doing. Put a clear heading at the top of each page that shows clearly what the page is about and what they are doing. 

#### More details

Heading needed to clarify the purpose of this specific page   

#### Examples

**Success** example: Headings tell me exactly where I am

**Failure** example: Heading that doesn't clarify the step in a form

#### Technical Resources

WCGA resource links
Personalisation resource linksl

{% include excols.html type="end" %}

{% include excols.html type="start" %}

### Make each step clear

{% include excols.html type="middle" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% include excols.html type="end" %}

{% include excol.html type="end" %}

{% include excol.html type="start" %}

## Objective 7: Provide help and support

{% include excol.html type="middle" %}

{% include excol.html type="start" %}

### Introduction

{% include excol.html type="middle" %}

Users with cognitive impairments may need different levels and forms of help, depending on their circumstances. Note that a lot can be achieved through supporting personalization.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### User Testing

{% include excol.html type="middle" %}

Make sure your user testing has all the different cognitive disabilities represented. (Make sure people don't just   ask these as questions, but ask something that demonstrates it.)

Test for the following  :

- Identify the different activities
  - Test that the users can achieve the activities without asking for help
  - Does the user make errors trying to achieve the activities
  - Does the user find them easy to achieve
  - Ask the users if they would find this easy to do if under stress or tiered
  - Ask the user what might help if they were stressed or tired. If they do not have ideas ask them about the design guidance bellow and if any of them would help them for this content. Ask them for other idea
- Can the user find help?
  - Does the user make errors trying to find help?
  - Does the user find them easy to achieve?
  
{% include excol.html type="end" %}

{% include excol.html type="start" %}

### User Stories

{% include excol.html type="middle" %}

This leads to the following user stories.

- I know how to find out more, such as context-sensitive help or tooltips.
- I need to easily get human help.
- I need symbols that help me understand.
- Help and main content should be clearly differentiated so I do not confuse them.
- I need contextually-relevant graphs and pictures to supplement text so I can understand a point without a lot of - reading.
- I need speech support, with synchronized highlighting, so I can follow as I go.
- I need rapid feedback.
- I need more space between letters, words, sentences, and/or lines of text.
- I need more space between letters, words, sentences, and/or lines of text.● I need more space between letters, - words, sentences, and/or lines of text.
- I need reminders, or I will forget appointments and when I was meant to do things.
- I do not want too many reminders as I will be distracted.
- I want to be confident that I can manage my tasks.

{% include excol.html type="end" %}

### Patterns

{% include excols.html type="start" %}

### Provide human help

{% include excols.html type="middle" %}

- Ensure easy access to a human who can provide help and support.
- Support can be on accessibility, technical, process or domain based.
- Access to human help should never require the user to manage complex menu systems such as voice menus with different options.

#### How it helps

In cases where the user gets stuck or confused for any reason, contact with a human is usually the most effective and suitable solution. Otherwise the user may abandon the process and be left with negative attitude towards the service or supplier.

One or more contact mechanisms should be easy to locate and use from any page or any step in a process.

#### More details

Examples include

- An option for live chat or video call help. Note: It must be full accessible and easy to close new windows that open as part of live help functionality.
- A phone number, ideally with a feature to automatically call via an interoperable Voice over IP specification.
- A simple site contact form.
- An email link using the ‘mailto’ protocol with prefilled “to” and “subject” fields. Note will not work on all platforms or depending of the users mail client
- Use available standards to get human help for example, using the 0 digit on voice menu systems

It is important that voice communication is easy and this implies the person providing help can both be easily understood and is able to understand others, allowing for a range of vocal and verbal characteristics. Sensitivity to the requirements of people with learning cognitive disabilities is also important.

#### Examples

**Success** example:

**Failure** example:

#### Technique and resources

##### Techniques to consider

- Live chat or video call help
- A phone number or link (eq VOIP phone)
- A simple contact form

Full Details in the COGA Design Guide [8.3.4 Provide human help](https://w3c.github.io/coga/design/#provide-human-help)

##### WCAG

- [WCAG 3.3.5 Help: Context-sensitive help is available](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-context-help) (Level AAA)] Note for coga global help should be provided as well as context sensitive [?]
- [WCAG G71: Providing a help link on every Web page](https://www.w3.org/TR/WCAG20-TECHS/complete.html#G71) Note for coga, help should be available on every page, not just forms.
- WCAG G193 Providing help by an assistant in the Web page](https://www.w3.org/TR/WCAG20-TECHS/G193.htmlhttps://www.w3.org/TR/WCAG20-TECHS/G193.html) NB !!! There is often a mixture of suitable WCAG links (SC, quick ref, Techniques & Understanding). I picked the SC plus others even though they can all be found via the SC

##### Personalisation

- P999 Select default help mode</li>

{% include excols.html type="end" %}

{% include excols.html type="start" %}

### Provide help for forms and non-standard controls

{% include excols.html type="middle" %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% include excols.html type="end" %}

{% include excol.html type="end" %}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
.