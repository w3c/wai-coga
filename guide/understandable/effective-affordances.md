---
title: Clearly identify controls and their use
permalink: /coga-draft/guide/understandable/effective-affordances
github:
  repository: w3c/wai-coga
layout: guide
feedbackmail: wai@w3.org
---

## Description

Ensure controls can be easily identified and their use is easily understood.

## User Story

<blockquote class="pull">I can clearly identify which elements I can interact with and am confident about what will happen.</blockquote>

## What To Do

Use standard HTML controls where possible and minimize changes to styling or behavior. Otherwise:

- Ensure items that are interactive are clearly so (eg take care with "flat design");
- Ensure items that are not interactive do not look like links or controls;
- Use a consistent visual style on controls that behave the same (for example: all links being underlined);
- Use clear borders on all controls (other than inline textual links);
- Use a common interaction design pattern that builds on standard control behavior.

If you are designing new controls, make them easy to identify (I know they are there), understand (I know what they do), and use (I know how to use them). Try to ensure obvious interactions and behavior or have easy to find and follow instructions that explain their use. Test with people with different cognitive and learning disabilities.

## How It Helps

Some users with memory difficulties have trouble locating and using controls when they have a different visual appearance to those they have used before. For example, when links do not have underlines and blue or purple text (or they only appear with focus or hover).

Users can also find it hard to learn to use a custom control that they have not been seen before or is not obviously interactive.. Controls that behave slightly differently to others that look similar can cause the user to become confused, or anxious and have to relearn to how use them each time. The user will benefit from easy to follow instructions for custom controls. This will remind them how to use the control but they must be easy to find.

## More details

Ensure all controls have clear Affordances (the properties of objects' that indicate how users might interact them). For example, a button looks like it may be pressed or an Assistive Technology gets a list of possible actions. Use clear and consistent visual design and interaction patterns, along with well tested accessibility design.

Use standard HTML controls which have carefully designed visuals and behavior to ensure easy identification and use. Users are likely to be familiar with these and know how to use them. Avoid large changes to styling or behavior in ways that may be confusing to users. Ensure custom controls have rigorous design and testing. Avoid completely novel controls unless there is a good justification. Do not assume custom controls are obvious to see or use and provide easy to find instructions. For example:

Regardless of how a user uses the page (pointer, keyboard, touch, vision, auditory, voice input) it should be easy to identify, understand and use all the controls.

## Examples

### Sufficient

Links with an underline and/or blue text color (or purple for already visited links), or both clearly identify links. Once a color is selected to be the primary link text color, other text on the page does not use this.

### Insufficient

Links without an underline or usual blue text color (or purple for already visited links), even those that become clear when they receive focus are more difficult to use. Some users may not know they are there.

## Related Accessibility Guidelines and Techniques

-

## Related Patterns

## Key Terms

_? Coga is developing a list of terms so should we repeat here or simple link to it ?_
