---
title: Coga Resource Plan
permalink: /coga-draft/plan/
github:
  repository: w3c/wai-coga
layout: default
feedbackmail: wai@w3.org
inline_css: "
  #twofotos {
    display: flex;
    justify-content: space-evenly;
  }
  #twofotos > figure {
    flex: 1 1 1;
    margin: 0.5rem  
  }
  "
doc-note-type: draft
doc-note-message-md: |
  This is the overall plan for moving coga resources to the WAI Website. 
  
  Each proposed page also has it's own Design Box at the top of the page.

---
{::nomarkdown}
{% include_cached toc.html type="start" title="Page Contents" class="simple" %}
{:/}

{::options toc_levels="2" /}

- This text will be replaced by the TOC.
{:toc}

{::nomarkdown}
{% include_cached toc.html type="end" %}
{:/}

## Related Information

- Spreadsheet of [all Coga TF resources](https://docs.google.com/spreadsheets/d/1bLXDIAsmgiySY6uqW2OAOYH7U_Lwh0oUU24etofpYrc/edit?usp=sharing) (Google Doc)
- Coga TF [Planning page on wiki](https://www.w3.org/WAI/PF/cognitive-a11y-tf/wiki/PlanningPage)
- Coga TF [F2F meeting information](https://www.w3.org/WAI/PF/cognitive-a11y-tf/wiki/Meetings/Jan_2019)
- [Source on GitHub](https://github.com/w3c/wai-coga)
- [Deployment on GitHub](https://w3c.github.io/wai-coga/coga-draft/)

## Reasoning

Currently, the many Coga resources are a mixture of TR Notes, GitHub Issues and more.
Several are very large and the fixed document format of TR Notes can be difficult to read.
Moving to the WAI Web site offers the following opportunities

- Easily discovered resources as they coexist with other accessibility information where people are looking
- Better organise existing content, including taking advantage of existing WAI information architecture
- Flexibility to provide better formats. For example can be interactive so easier to navigate and read
- Links can enhance the user experience without cuaing a jump between the very different web and TR document formats
- More control over editoral process including review access and publishing cadence
- Can 'dog food' coga and personalisation

## Primary Stakeholders

### Creators & Consultants

- Understand broad user requirements
- Meet SCs required for desired conformance
- Learn techniques and best practices
- Able to evaluate and remediate short comings

### Standard Makers

- Gain detailed understanding of user requirements, both specific and commonalities
- Identify techniques and technologies that support users as well as gaps that need to be filled
- Be confident that existing and newly developed standard clauses successfully meet coga user requirements 

### Researchers

- Gain an overview of current corpus
- Identify opportunities for further research
- Confident of evidence base for stated requirements and approaches

## Secondary Stakeholders

### Policy Makers

- Confident in understanding key user requirements
- Ensure Policy is representative and fit for purpose

### Procurers

- Know what to put in contracts to ensure inclusive and legal

### Evaluators

- Know what to test and how best to do so.
- Ensure reports are accurate and informative
- Design enhanced evaluations

### Practitioners and End Users

- Be confident needs are accurately recorded and encourage new solutions
- Find techniques and tools they can use

## New Pages

### [Exploring]({{ "/coga-draft/" | relative_url }})

- **Purpose:** A interactive overview with links to the various coga resources
- **Primary audience:** Someone who wants to learn about coga in general or in order to perform a task
- **Work to complete** New content. Integrate into WAI
- **Site Path:** Accessibility Fundamentals / Cognitive Disabilities
- **Current doc:** New content
- **Estimated effort:** medium
- **Priority** high

### [About]({{ "/coga-draft/about" | relative_url }})

- **Purpose:** Introduce cognitive and learning disabilities
- **Primary audience:** Someone new to coga and wanting understand the general issues user face
- **Work to complete** Find or create content. Integrate into WAI
- **Site Path:** Accessibility Fundamentals / Cognitive Disabilities / About
- **Estimated effort:** medium
- **Current doc:** ???
- **Priority** low

### [Developer Resources]({{ "/coga-draft/resources" | relative_url }})

- **Purpose:** Provide high level info on user needs, barriers, personas, testing.
- **Primary audience:** Someone wanting to learning how to develop coga inclusive
- **Work to complete** Copy content from Content Usable and more. Integrate into WAI
- **Site Path:** Accessibility Fundamentals / Cognitive Disabilities / Design Guide
- **Current doc:** [Working Draft](https://w3c.github.io/coga/content-usable/)
- **Estimated effort:** medium
- **Priority** high

### [Design Guide]({{ "/coga-draft/guide" | relative_url }})

- **Purpose:** Provide detailed techniques and best practices to address requirements
- **Primary audience:** Someone wanting specific techniques that address coga requirements
- **Work to complete** Clean up Design Guide. Create interactive access with links based on [TF Mockup](https://docs.google.com/document/d/1vajEx9BCv02snDwP7XRcUrB3mbJlz_4qkeBEto3Unqs/edit?usp=sharing). Integrate into WAI
- **Site path:** Accessibility Fundamentals / Cognitive Disabilities / Design Guide
- **Current doc:** [Working Draft](https://w3c.github.io/coga/design/)
- **Estimated effort:** large (x-large)
- **Priority** high

### [Gap Analysis]({{ "/coga-draft/gapanalysis" | relative_url }})

- **Purpose:** Provide insight into barriers currently faced by users.
- **Primary audience:** Someone wanting to learning about technical barriers that are not yet addressed.
- **Work to complete** Clean Up and move content from Gap Analysis. Ignore road map content. For WCAG. Integrate into WAI
- **Site path:** Accessibility Fundamentals / Cognitive Disabilities / Gap Analysis
- **Current doc:** [Working Draft](https://w3c.github.io/coga/gap-analysis/)
- **Estimated effort:** large
- **Priority** high

### [Research Findings]({{ "/coga-draft/research" | relative_url }})

- **Purpose:** Present Coga TF research in to user requirements Issues Papers on specific barriers faced.
- **Primary audience:** Someone wanting to understand the barriers faced by users when using technology
- **Work to complete** Clean up and copy content from User Reseach and Issue Papers. Integrate into WAI
- **Site path:** Accessibility Fundamentals / Cognitive Disabilities / Research
- **Current doc** [User Research Working Draft](https://w3c.github.io/coga/issue-papers/) & [Issue Papers Working Draft](https://w3c.github.io/coga/issue-papers/)
- **Estimated effort:** x-large
- **Priority** low

### [Personas]({{ "/coga-draft/personas" | relative_url }})

- **Purpose:** Provide representative and accurate personas usefull for design activities
- **Primary audience:** Someone wanting to understand the barriers faced by users when using technology.
- **Work to complete** Move to existing WAI page, replacing current personas
- **Site path:** TBD existing persona page?
- **Current doc:** [Working Draft](http://w3c.github.io/coga/persona/)
- **Estimated effort:** medium
- **Priority** low

### [Glossary]({{ "/coga-draft/glossary" | relative_url }})

- **Purpose:** Provide definitive definition of terms
- **Primary audience:** Someone wanting to understand a particular term.
- **Work to complete** Needs to be created
- **Site path:** ? - might remain as a doc
- **Current doc:** [Google Doc](https://docs.google.com/document/d/1poEoQjuWdAfWM3aOGPCwJRx7EvBsAtQ_99sGyS9Jlgc/edit)
- **Estimated effort:** low
- **Priority** high

### [Taskforce]({{ "/coga-draft/taskforce" | relative_url }})

- **Purpose:** Provide information about the Coga Task Force. To replace the [old TF page](https://www.w3.org/WAI/PF/cognitive-a11y-tf/)
- **Primary audience:** Someone wanting info about the TF, including how to participate.
- **Site path:** https://www.w3.org/WAI/APA/task-forces/coga and https://www.w3.org/WAI/APA/task-forces/coga/work-statement
- **Work to complete** Add 2 new pages based on old page. Link from APA WG pages
- **Current doc:** [Taskforce page](https://www.w3.org/WAI/PF/cognitive-a11y-tf/)
- **Estimated effort:** low
- **Priority** medium

{% include figure.html
  alt="Picture of rectangles with arrow between them"
  src="https://www.w3.org/Team/wiki/images/5/5d/Coga.svg"
  caption="Coga Pages and the links between them"
  top-caption=true %}

<div id="twofotos"> 
{% include figure.html
  alt="Photograph of whiteboard drawing"
  src="design-guide.jpg"
  caption="Structure of the Design Guide"
  top-caption=true %}
{% include figure.html
  alt="Photograph of whiteboard drawing"
  src="content-usable.jpg"
  caption="Structure of the Content Usable"
  top-caption=true %}
</div>

## Editoral process

- Source in GitHub repository - wai-coga
- TF will provide updates via a coga-fiendly contribution channel
  - Could be google docs
- Editor (Steve) will take input from TF and merge into source
  - Use feature branch and PR to isolate changes
  - Commit to master causes push to w3c.github.io
  - Provide previews for TF review with links to https://w3c.github.io/wai-coga/
  - Local dev & view are possible for faster development
- Publish to live semi manual process
  - ping Eric
  - TF to decide cadence