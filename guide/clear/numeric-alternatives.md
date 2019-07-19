---
title: Provide alternatives for numbers
permalink: /coga-draft/guide/clear/numeric-alternatives
github:
  repository: w3c/wai-coga
layout: guide
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  .
---

## Description

Provide alternatives for numbers and numerical concepts

## User Story

<blockquote class="pull">As someone with dyscalculia I can easily understand content that avoids the use of numbers and maths by providing alternatives.</blockquote>

## What To Do

Avoid use of numbers when they are not critical and provide replacements. For example:

- Use familiar value names names rather than numbers
- Avoid requiring mental calculations - even if they appear to be trivial
- Be consistent with units

## How It Helps

Not all people can easily understand numbers and numerical concepts. In particular, people with dyscalculia experience significant problems but otherwise have little difficulty with content.

When data is presented only in numerical format it can be much harder for some to understand than when non-numeric values are provided eg "cold", "warm", "hot".

Even relatively common calculations such decimal unit conversions can be very hard for some people and may be a distraction for anyone. For example, the need to calculate that 0.9m is the same as 900mm should be avoided by always using tha same unit.

## More details

??? It should be noted that different users may find math easier to understand than long text.

Types of content that may need extra support include:

- size
- quantity
- distance
- time
- date
- temperature
- positive/negative
- calculation
- sequencing
- memory

Provide reading support when math skills are essential for understanding the content. For example,

- Prefer digital math that can be programmatically manipulated ie not numbers in images
- Break numerical content up enable highlighting of sections
- Link sections of numbers to extra help
- Enable replacing math sections with words or summaries for users who prefer this.

You may also need to take into account cultural differences as well.

## Examples

### Sufficient

A weather chart uses non-numerical values such as "Cold", "Mild" and "Hot" as well as specific numbers.

### Insufficient

A train schedule has a long list of times relative to the hour rather than actual timess.

## Related Guidelines and Techniques

None.

## Related Patterns

- [Make it easy to find help](../helpful/help-feedback)

## Key Terms

_? Coga is developing a list of terms so should we repeat here or simple link to it ?_
