---
title: Provide help for complex information
permalink: /coga-draft/guide/helpful/complex-information
github:
  repository: w3c/wai-coga
layout: guide
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  Testing an expanded format that builds on the current CogaA TF DG template.
  Possibly also useful for [Supplemental Guidance](https://github.com/w3c/wai-website/issues/132)

  [See page details in plan](../../plan#design-guide)

---
## Description

Provide additional explanatory content for information that is complex, especially if it is data or explains a process.

## User Story

*! This needs some work. 1st is vague (what is 'complex').  Others should probably be split to keep the section singular. !*

- I can understand complex content as contextually-relevant graphs, pictures and tables are provided to supplement it
- I can understand complex tables or graphs as extra help is provided to explain the important features
- I can understand a multi stage process as help is provided for all stages and the sequence to be followed

## Intent

WCAG provides a number of Success Criteria related to providing help and effective presentation mechanisms. The intent of this pattern is to build on these to ensure help is used to effectively support a user in understanding more complex content.

Users should be able understand the content they find and successfully complete any tasks it describes without requiring further external assistance. If content is sufficiently complex then it may be inaccessible without the provision of additional supporting help designed to minimize the need to ask for assistance.

Users are likely to find more complex content accessible when help is provided through additional explanatory text, pictures, graphs or tables.

Complex graphs or data tables may not be correctly understood by users unless the key features are clearly explained.

When reading content that explains a multistep process the user may require additional help for the entire sequence as well as each individual step. This will ensure the user fully understands each step and also how to progress from one to the next.

## What To Do

Provide additional help content that explains any complex information, data and processes. It may be provided in various forms, for example:

- Text "asides" providing explanation and help
- Popup on hover explanations of keywords.
- A supporting chart or graph to illuminate text content
- A guide to interpreting data in a chart or graph
- A supplemental table – as long as it is not itself complex
- A flow chart of steps in a process

## More details

The complexity may be inherent in the information itself, for example the language used, the quantity of information, or the subject matter. In this case, it is likely to need very careful explanation and organisation for all users to be able to understand without any mistakes, confusion or need of assistance. 

Alternatively, the presentation mode of information such as a graph or table may obscure it’s meaning through complexity. Here, a supporting description and guided interpretation will highlight the the key features the user needs to understand.

## Benefits

Improves understanding of content and so there are no unresolved questions or errors the confuse the user or that could prevent the user performing a task without external support..

## Examples

*? Replace this with inline example not an extern reference ?*

The UK Gov provide an online facility to [apply for a study visa](https://www.gov.uk/study-visit-visa). The information and process are very complex, with many conditions but are clearly written. Even so, a [step by step help guide](https://www.gov.uk/apply-short-term-study-visa) is provided to guide the user through the complexities and successfully complete the process from start to finish.

## Related Resources

Other patterns that are closely related to understanding content

- [Important information is conspicuous](../findable/conspicuous-primary)
- [Provide a summary of long documents](../clear/summary-text)
- [Avoid too much content on page](../focused/limit-content)
- [? Use clear labels and instructions](../certain/clear-labels)
- [Support Simplification](../adaptable/support-simplification)

The following WCAG Success Criteria cover various techniques that can be useful in presenting help for complex information:

- [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus)
- [3.1.3 Unusual Words](https://www.w3.org/WAI/WCAG21/quickref/#unusual-words)
- [3.1.4 Abbreviations](https://www.w3.org/WAI/WCAG21/quickref/#abbreviations)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions)
- [3.3.5 Help](https://www.w3.org/WAI/WCAG21/quickref/#help)
- [4.1.2 Status Messages](https://www.w3.org/WAI/WCAG21/quickref/#status-messages)

## Techniques

Successes:

Tooltips provide help for keywords and jargon

Failures:

A complex graph of data with no guide to interpretation.

## Key Terms

*? Coga is developing a list of terms so should we repeat here or simple link to it ?*