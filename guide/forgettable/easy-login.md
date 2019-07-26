---
title: Ensure log in does not require good memory or cognitive skills
permalink: /coga-draft/guide/forgettable/easy-login
github:
  repository: w3c/wai-coga
layout: guide
feedbackmail: wai@w3.org
---

## Description

Ensure users easily log in and register without using advanced cognitive skills.

## User Story

<blockquote class="pull">I can easily log in without using skills like memorizing characters or performing calculations</blockquote>

## What To Do

Users can login and register without having more cognitive abilities then they need to use a simple web page. For example, they are not required to:

- memorizing individual or strings of characters,
- perform calculations
- answer puzzles or recognising object types
- reliably produce gestures
- recognize characters presented on screen, and then enter them into an input field

## How It Helps

Many people with weak memory often lose the password and not be able to login and use their applications. Their solutions often are only sometimes helpful and have security risks:

- may have to look at or listen to text several times to copy or type it into a form field;
- may reuse a single passwords; or a simple-to-remember passwords, which they can remember. This is a security risk
- If they need to change their password or use a complicated password they may keep passwords insecurely, such as written on pieces of paper which people can see.

The may also struggle with other steps of login

- enter characters in the correct order;
- enter characters correctly on the first try (resulting in being locked out).Some people with cognitive disabilities may not be able to:
- find a PIN;
- work out puzzles or distorted letters
- They can also give up after getting frustrated with time-limited procedures or presentations of digital security tokens;

Without this design requirement, many people cannot use an application or content at all. See Security and Privacy Technologies issue paper for the full description of this issue, and how it stops people from using web services that are often critical. Many people cannot make doctors’ appointments, etc., by themselves. This may be partly responsible for the reduced life expectancy of people with learning and cognitive disabilities.

## More details

There are many ways to meet this design guidance item.

- Use Web Authentication: An API for accessing Public Key Credentials
- Automatic user authentication based upon the use of a trusted device (to which the user has already logged in with their own identity);
- Biometrics
- being already logged in to third-party authentication services (e.g., OAuth, Facebook, etc.).
- Methods of meeting requirements for alternative user authentication would include:
  - Clicking a link sent to an email address or a phone number; (Note that this is easy to implement and may be useful for minimal security, such as allowing comments on a blog)
  - Logging in by using information present in users' personal documentation, such as the total number of a current account balance, with explanation on how to find this information

## Examples

### Sufficient

- A login form is compatible with password managers that fill in passwords
- A web site supports [Web Authentication](https://www.w3.org/TR/webauthn/): An API for accessing Public Key Credentials
- A login form has buttons to log in with an existing OpenID provider account.
- Two step authentication and bluetooth link
- Using a QR Code

### Insufficient

- Two step authentication that requires "coping"
- Using a password

## Related Guidelines and Techniques

_! TODO Add related Personalisation and UAAG topics here !_

## Related Patterns

- [Do not rely on users memorizing information](avoid-recall)
- [Build forms so people make less mistakes](../certain/prevent-mistakes)

## Key Terms

_? Coga is developing a list of terms so should we repeat here or simple link to it ?_
