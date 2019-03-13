---
title: Gap Analysis of user Barriers
permalink: /coga-draft/gapanalysis
github:
  repository: w3c/wai-coga
layout: default
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  **Outline:**
  
  - Introduce where technology & techniques fall short of user requirements
  - Pointer to Gap Analysis TR

  [See page details in plan](./plan#gap-analysis)

---

## Introduction

The Cognitive and Learning Disabilities Accessibility Task Force's aim is to improve web accessibility for people with cognitive and learning disabilities.

This document contains a gap analysis and review of key issues

It is designed for standards groups and policy makers. However, it has useful information for anyone trying to understand the topic. There is also an appendix on how to make content usable for people with leaning and cognitive disabilities. Content developers may find this section the most useful.

This is being done as part of the Web Content Accessibility Guidelines (WCAG) and Accessible Platform Architecture Working Group (APA WG), part of the Web Accessibility Initiative (WAI) of the W3C. Challenges facing this work include:

- Lack of availability of open research: Research on this topic tends to be behind a “paywall” which means that - developers and policy makers may be unable to find out what techniques are proven to work to address the needs of - people with disabilities
- There is a wide range of cognitive disabilities; each type of impairment is different, with diverse symptoms and - particular digital accessibility requirements. This adds to the complexity of knowing how to address user needs.
- The advice given in the research and available guidance is often vague and is not testable. So, even if - developers read the research they would not know exactly what to do or when they have reached an acceptable level - of accessibility.
- Another major challenge is capturing difficulties related to cognitive disabilities that may be undeclared. - People with cognitive disabilities may be embarrassed about their disabilities and may be less likely to request - accommodations. They may be afraid of discrimination, especially in the work place. Others are not aware of their - disability or of the impact it has on their functioning.
- Attitudes and misinformation can also become a barrier to inclusion for people with cognitive disabilities. For - example, developers that may feel people with cognitive disabilities are not in their "target audience" and so - have no interest in their inclusion. Also, studies of usability often over-sample college students. This can mean - that the results work less well for those inadequately represented among sub-groups of college students (such the - aging population).
- Attitudes and misinformation can also become a barrier to inclusion for people with cognitive disabilities. For - example, developers that may feel people with cognitive disabilities are not in their “target audience” and so - have no interest in their inclusion. Also, studies of usability often over-sample college students. Thus the - results work less well for groups who are not well represented among sub-groups of college students (such the - aging population).
- Accessibility has typically been based upon the assumption that any website can be designed to be usable by - people with disabilities. However, when making a website usable for people with cognitive disabilities, the - content itself may need to be changed (e.g. simplified), or support adaptability (e.g. multi-modal delivery).

Addressing these issues requires us to make a broader view of solutions for accessibility, such as a content focused approach and to explore personalization solutions that incorporate inclusive design. To address these issues we have adopted the following strategies:

- Select a phased approach. In our first phase we looked at eight different disabilities or categories that cut - across types of cognitive impairment in terms of severity and brain function. Although some user needs might not - have been identified in this phase, this approach made the work involved practical and it is likely that most key - needs will have been identified. Other cognitive disabilities and emotional disabilities may be included in phase - 2 and the current user groups may be re-examined.
- Compile user research and literature reviews on the selected disability groups. These literature reviews mean - that key findings are in the public domain and are easily available.
- Compile a list of authoring techniques that include the most useful strategies from all the different user group - research 
- Create testable and widely adoptable sets of success criteria that let authors know exactly what they need to do - and when they have completed the task. (This might then be added to WCAG [WCAG20] for cognitive disabilities)
- Author a series of issue papers [coga-issue-papers] that explore topics beyond simple content such as security or - personalization.
- Review the techniques and issue papers to identify the gaps between what is currently supported in accessibility - guidelines and in the web architecture and what is needed to enable accessibility for people with cognitive - disabilities

### Assumptions

There is a huge number of cognitive disabilities and variations of them. If we attempt an analysis of all the possibilities, the job will be too big, and nothing will be achieved. Therefore, we are adopting a phased approach, selecting in phase one a limited scope of eight diverse disabilities, and hope to achieve something useful within that scope. Also note that helping users improve skills, and emotional disabilities, are out of scope for phase one. We anticipate this analysis will continue to a second or third phase where more user groups are analyzed, and the existing analyses are updated with new research and with new technologies and scenarios. 

## Topic 1: Authentication and Safety

About users: People with cognitive and learning disabilities may be not able use a Web site becuse they can not use the login or authenitification process.

Many users (most COGA groups) have memory issues that can make transcribing text or remembering passwords difficult or impossible. Other contributing issues include impaired executive function.

Sometimes security and authentication put a barrier between users and the tasks they are doing. For example, requiring remembering and/or transcribing passwords often bar users with cognitive disabilities from accessing content or using a service.

Many users without cognitive and learning disabilities find these tasks hard. However, when the user also has a disability such as a memory disability, these tasks are not just annoying but impossible, and they are prevented from using these services.

For example, a person with an early stage of dementia may be able to check whether they have made a payment. (This is a task that is more important for people with memory impairment to ensure they do not double pay.) Their banking system requires long password and coping codes from the a phone to their laptop. Because they can not do these tasks they can not check their account. The result is often that people require a caregiver to help them and lose their autonomy years before it would otherwise be necessary.

This leads to the following user stories.

- As a user who has memory impairments and often forgets passwords, I need to be able to use a site, without remembering or transcribing passwords and user names, so I can use its service.
- As a user who has impairments, I need to use a site without being required to transcribe items in the correct sequence.
- As a user who has weak executive function, I need the login process to be simple, and not multi-step, so I can use it.
- As a symbol user, I need a login process I can use.

[See full details in the TR](https://raw.githack.com/w3c/coga/making-the-tables-smaller/gap-analysis/index.html#topic-1-authentication-and-safety)