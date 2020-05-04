---
title: Cognitive and Learning Disability Resources Overview
permalink: /coga-draft/
github:
  repository: w3c/wai-coga
layout: default
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  [See page details in plan](./plan#new-pages)
footer: >   # Translate words below, including "Date:" and "Editor:". (Do not update the date.)
   <p><strong>Date:</strong> Draft, Updated 04 May 2020. CHANGELOG.</p>
   <p><strong>Editor:</strong> <a href="https://www.w3.org/People/#stevelee">Steve Lee</a>.</p>
   <p>Drafted by the Cognitive and Learning Disabilities Task Force (<a href="https://www.w3.org/WAI/GL/task-forces/coga/">CoGa TF</a>) for the Accessible Platform Architecture Working Group (<a href="https://www.w3.org/WAI/GL/">APA</a>) and Accessibility Guidelines Working Group (<a href="https://www.w3.org/WAI/APA/">AGWG</a>) with support from the <abbr title="European Commission">EC</abbr> <a href="https://www.w3.org/WAI/about/projects/easy-reading/">Easy Reading project</a>.</p>
---

{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

This page introduces:

- cognitive and learning disabilities and related barriers to using technology
- designing and testing for people with cognitive and learning disabilities
- finding relevant W3C research and design documentation
- W3C activity for cognitive and learning disabilities

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{::nomarkdown}
{% include_cached toc.html type="start" title="Page Contents" class="simple" %}
{:/}

{::options toc_levels="2" /}

- This text will be replaced by the TOC.
  {:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}

## Cognitive and Learning Disabilities

Cognitive and learning disabilities include long-term and and sometimes permanent difficulties relating to cognitive functions, such as:

- perception, memory and attention
- learning and orientation
- visual, verbal and numerical thinking

These are usually hidden difficulties and may be age related. The terminology and definitions used for cognitive disabilities varies between countries and users are less likely to have a formal diagnosis of a disability than individuals with physical and sensory difficulties. Cognitive disabilities may include intellectual impairments affecting comprehension alongside written and spoken expression. People may also experience a co-occurrence of difficulties such as dyspraxia / developmental coordination difficulties and ADHD should also be taken into account.

It should be noted that by addressing barriers to accessibility for users with cognitive and learning disabilities, improvements to digital technologies can be achieved and there is the potential to improve user experience for everyone.

## Barriers faced

People with cognitive and learning disabilities may be unable to use web content because of the design choices of the author. Examples include:

- People with impaired short term memory are unlikely to be able to remember passwords and access codes. They may have trouble or be unable to remember new symbols and interface paradigms.
- People with language related disabilities may need simple clear language and instructions. They may also need supporting graphics and familiar symbols
- People with communication disabilities may need clear literal language and may not understand metaphors or non-literal text and symbols.
- People with dyscalculia may not understand numerical references such as percentages.
- People who struggle with keeping and regaining focus, may be unable to focus on a task if there are lots of distractions and interruptions. They may need headers and signposts to help them regain the context after their attention has been lost (including in multi-media).
- Many groups will need support to minimize errors and complete their task. They will struggle with complex, multi-stage processes that were not necessary for the task at hand such as filling out forms or entering data correctly or finding the content or feature that they need.

## Designing for Cognitive and Learning Disabilities

The wide variation of user requirements of people with cognitive and learning disabilities requires extra in design to avoid introducing access blocking barriers. In particular, care is needed with, structure, navigation, dynamics and especially content.

- There are many useful techniques which can be grouped into the following Themes so they are more manageable:
- Ensure design is easy to understand and use
- Help the user find what they need
- Use clear and understandable content
- Prevent mistakes and provide easy correction
- Help the user focus and restore context if distracted
- Avoid creating cognitive barriers
- Provide Help and Support
- Provide feedback that is usable by everyone
- The Design page covers these in detail.

Any individual is likely to have their own personal requirements for good cognitive accessibility. In addition, they may require other accessibility considerations such as those for low vision. In order to have any possibility of providing a workable personal experience some form personalisation according to user preferences is required. Personalisation is thus particularly import when designing accessibility for cognitive and learning disabilities. This will allow all users to select how they individually experience and interact with the design, better matching their personal coping mechanisms and other requirements.

### Design Guide

The [Design Guide](./guide) provides a number of Design Patterns that help web content providers meet the needs of people with cognitive and learning disabilities.

### Personas

The [Personas](./personas) provide some context and help understanding by outlining fictional people with various cognitive issues and the challenges they face.

### Glossary of Terms

We are compiling a [Glossary ](./glossary) for the terms used around Cognitive and Learning Disabilities.

## Usability testing notes

There are some differences when testing for cognitive accessibility, and that includes when testing with people who have cognitive impairments:

- Ensure that the participation forms are easy to understand, send them to the participant in advance, and allow plenty of time for the participant to ask questions and fill in forms;

- Allow the participant to bring a carer, family member or friend to attend with them. If your tester has a guardian you should get informed consent from both the tester and their guardian;

- It helps to provide easy methods of assessing mood, rather than asking for the participant to verbalise, try asking them to select a smiley face, such as:
  a set of 5 smiley faces from happy, through neutral, to sad.

- Ensure the person does not feel like they are at fault for making mistakes; this is a likely scenario for people with cognitive impairments

## Find Resources for Cognitive and Learning Disability {#finder}

Select the guides from below according to what you want to do:

{% include excol.html type="all" %}

{% include excol.html type="start" %}

### Develop Web sites that are inclusive of people with cognitive disabilities

{% include excol.html type="middle" %}

These resources are useful for procurers, designers and developers

- [Introducing Cognitive and Learning Disabilities](./about)
- [Developer Resources for ensuring websites are accessible to People With Cognitive Learning Disabilities](./guide)
- [Design Guide For Making Content For People With Cognitive Learning Disabilities](./guide)

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Develop policies that are fully inclusive of people with cognitive disabilities

{% include excol.html type="middle" %}

These resources are useful when creating policy

- [Developer Resources for ensuring websites are accessible to People With Cognitive Learning Disabilities](./guide)
- [Gap Analysis highlighting the barriers people can face in using technology](./gapanalysis)
- [User research into all issues relevant to people using technology](./research)

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Create technical standards that include cognitive disability requirements

{% include excol.html type="middle" %}

These resources are useful for procurers, designers and developers

- [Gap Analysis highlighting the barriers people can face in using technology](./gapanalysis)
- [User Research into issues relevant to people using technology](./research)

{% include excol.html type="end" %}

## Cognitive Accessibility at W3C {#activity}

[Summary of the W3C activity on Cognitive Accessibility](https://www.w3.org/WAI/cognitive/)

Other WAI Standards that are relevant for cognitive and learning disabilities include:

### User Agent Accessibility Guidelines (UAAG)

The [UAAG](https://www.w3.org/WAI/standards-guidelines/uaag/)) explains how to make web browsers and media players accessible. Some browser features are particularly important to people with cognitive and learning disabilities as the distinction between chrome and document may not be understood. For example, allowing personalization through specifying preferences.

### Authoring Tool Accessibility Guidelines (ATAG)

The [ATAG](<](https://www.w3.org/WAI/standards-guidelines/atag/)>) covers tools used to create web content. Examples include HTML editors and Web content management systems (CMS). These need to be both accessible to people with cognitive disabilities, and also must create content that is also fully accessible. In addition, the ability to allow authors to provide content alternatives supporting personalisation. (!!!)

### General Standards that provide benefits

Some other standards are highly relevant - eg [Web Authentication](https://www.w3.org/TR/webauthn/) can be a barrier if passwords are required.
