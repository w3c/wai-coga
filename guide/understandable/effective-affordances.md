---
title: Clearly identify controls and their use
permalink: /coga-draft/guide/understandable/effective-affordances
github:
  repository: w3c/wai-coga
layout: guide
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  Some content here could be removed as it repeats advice in referenced guidelines.
---

## Description

Ensure controls can be readily identified and their use is easily understood.

## User Story

<blockquote class="pull">As someone who easily forgets things I can quickly and easily identify which elements I can interact with and am confident about what will happen when I do.</blockquote>

## What To Do

Use standard HTML controls where possible and minimize changes to styling or behavior. Otherwise:

- Ensure items that are interactive are clearly so (eg take care with "flat design");
- Ensure items that are not interactive do not look like links or controls;
- Use a consistent visual style on controls that behave the same (for example: all links being underlined);
- Use clear borders on all controls (other than inline textual links);
- Use a common interaction design pattern that builds on standard control behavior;
- Ensure focus visuals are consistent.

If you are designing new controls, make them easy to identify (I know they are there), understand (I know what they do), and use (I know how to use them).

## How It Helps

Some users, for example those with memory difficulties, have trouble locating and using controls if they are unfamiliar or do no obviously appear to be interactive. For example, when links do not have underlines and blue or purple text or these only appear with focus or hover.

Controls that behave slightly differently to others that look similar or look different to others that behave the same can cause the user to become confused, or anxious and have to relearn to how use them each time.

## More details

Ensure all controls have clear Affordances (the properties that indicate how users might interact with them). For example, a button looks like it may be "pressed" or an Assistive Technology gets a list of possible actions. Use clear and consistent visual design and interaction patterns, along with well tested accessibility design.

Use standard HTML controls which have carefully designed visuals and behavior to ensure easy identification and use. Users are likely to be familiar with these and know how to use them. Avoid large changes to styling or behavior in ways that may be confusing to users.

Ensure custom controls have rigorous design and testing. Avoid completely novel controls unless there is a good justification. Do not assume custom controls are obvious to see or use and provide easy to find and understand instructions on their use.

Regardless of how a user chooses to interact (pointer, keyboard, touch, vision, auditory, voice input or a combination) it should be easy to identify, understand and use controls.

## Examples

### Sufficient

Links with an underline and/or blue text color (or purple for already visited links), or both clearly identify links. Once a color is selected to be the primary link text color, other text on the page does not use this.

### Insufficient

Links without an underline or usual blue text color (or purple for already visited links), even those that become clear when they receive focus are more difficult to use. Some users may not know they are there.

## Related Guidelines and Techniques

- WCAG Guideline [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color)
- WCAG Guideline [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/quickref/#keyboard)
- WCAG Guideline [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible)
- WCAG Guideline [2.5.6 Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms)
- WCAG Guideline [3.2.1 On Focus](https://www.w3.org/WAI/WCAG21/quickref/#on-focus)
- WCAG Guideline [3.2.1 On Input](https://www.w3.org/WAI/WCAG21/quickref/#on-input)
- WCAG Guideline [3.2.1 Consistent Identification](https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification)

## Related Patterns

- [Sub-menu items are easy to identify](./findable-controls)
- [Sub-menu items are logical](./menu-structure)
- [Use a design that is likely to be familiar](./familiar-design)
- [Use a consistent visual design](./internally-consistent)

## Key Terms

_? Coga is developing a list of terms so should we repeat here or simple link to it ?_
