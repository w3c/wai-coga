---
title: Research Findings
permalink: /coga-draft/research
github:
  repository: w3c/wai-coga
layout: default
feedbackmail: wai@w3.org
doc-note-type: draft
doc-note-message-md: |
  **Outline:**
  
  - Overview of research collected by the COGA TF
  - Move content over from Research TR
  - Move content over from Issue Papers on GitHub
    
  [See page details in plan](./plan#research-findings)

---
{::nomarkdown}
{% include box.html type="start" h="2" title="Summary" class="full" %}
{:/}

The User research carried out by COGA  TF.

This page introduces our resources.

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

## Introduction

This document provides background research on user groups with learning disabilities and cognitive disabilities; and challenges they face when using Web technologies. We aim to identify and describe the current situation so subsequent publications can contrast it to what we want to happen.

This document will be used as a base document to enable the task force to perform a gap analysis; suggest techniques; and create a road-map for improving accessibility for people with learning disabilities and cognitive disabilities.

### Importance of This Document

This document is important because enabling people with learning and cognitive disabilities to use the Web and Web technologies is of critical importance to both individuals and society.

More and more, the Internet and the Web have become the main way people stay informed and current on news and health information; keep in touch with friends and family; and provide independence such as convenient shopping etc. People who cannot use these interfaces will have an increased feeling of having a disability and of being alienated from society.

Further, with the advent of the Web of Things, everyday physical objects are connected to the Internet and have Web interfaces. Being able to use these interfaces now is an essential component of allowing people to maintain their independence, stay in the work force for longer, and stay safe.  

Consider that the population is aging. By 2050, it is projected there will be 115 million people with dementia worldwide. It is essential to the economy and society that people with mild and moderate levels of dementia stay as active as possible, and participate in society for as long as possible. However, at the moment, even people with only a mild cognitive decline may find standard applications impossible to use. That means more and more people are dependent on care givers for things that they could do themselves, increasing the crippling cost of care and reducing human dignity.

We therefore invite you to review this draft; and comment and consider how your technologies and work may be affected by these issues.

### Assumptions

There is a huge number of cognitive disabilities and variations of them. If we attempt an analysis of all the possibilities, the job will be too big, and nothing will be achieved. Therefore, we are adopting a phased approach, selecting in phase one a limited scope of eight diverse disabilities, and hope to achieve something useful within that scope. Also note that helping users improve skills, and emotional disabilities, are out of scope for phase one. We anticipate this analysis will continue to a second or third phase where more user groups are analyzed, and the existing analyses are updated with new research and with new technologies and scenarios.
  
## Summary of User Groups and Cognitive Function

Different people with cognitive disabilities may have problems in the following areas:

- Memory - Including: Working Memory, Short-Term Memory, Long-Term Memory, Visual Memory, Visuo-spatial Memory, - Auditory Memory (memory for sound patterns and others).
- Executive Functions - Including: Emotional Control and Self-Monitoring; Planning/Organization and Execution; and - Judgment.
- Reasoning - Including: Fluid Reasoning (logical reasoning), Mathematical Intelligence, Seriation, Crystallized - Intelligence, and Abstraction.
- Attention - Including: Selective Attention, and Sustained Attention.
- Language - Including: Speech Perception, Auditory Discrimination, Naming Skills, and Morphosyntax.
- Understanding Figurative Language - Including: similes, personification, oxymorons, idioms, and puns.
- Literacy - Depends upon functions including: Speech Perception, Visual Perception, Phoneme Processing, and - Cross-Modal Association (association of sign and concept).
- Other Perception - Including: Motor Perception, Psychomotor Perception.
- Knowledge - Including: Cultural Knowledge, Jargon (subject matter); Web Jargon and Technology; Metaphors and - Idioms; Symbols Knowledge (such as icons); and Mathematical Knowledge.
- Behavioral - Including: Understanding Social Cues.

It is important to note that people may have limitations in one area and not in other areas. For example, a person with dyslexia may have above-average reasoning, but impaired visual memory and literacy skills. A person with Intellectual Disability may have an above-average visual memory, but impaired judgment. 

## Research on User Groups

This section describes the state of the art in classification of cognitive function.

{% include excol.html type="all" %}

{% include excol.html type="start" %}

### Dyslexia

Dyslexia is a syndrome best known for its effect on the development of literacy and language-related skills. There are a number of different definitions and descriptions of dyslexia. The syndrome of dyslexia is now widely recognized as being a specific learning disability of neurological origin. It does not imply low intelligence or poor educational potential. It is independent of race and social background.

{% include excol.html type="middle" %}

#### Cognitive Functions

This section is a technical reference. Jump to the next section on #Symptoms for more practical information.

**Overview:** Mainstream credible research in behavioral neurology agrees that dyslexia is a consequence of an altered neural substrate in the various regions of the brain responsible for the reading process. fMRI scans [Friston-1], [Talairach-1] have shown different subgroups of dyslexia exhibit under-activity in areas such as:

- V5/MT (BA Area 19) - resulting in visual discriminatory problems [Eden-1], [Henderson-1], possibly disturbing - magnocellular function [Stein-1];
- auditory cortex (BA areas 41 and 42) - resulting in low auditory-discrimination skills [Tallal-1];
- superior-temporal gyrus (BA Area 22) Wernike's area and striate cortex or V1 (Area 17) - resulting in a phoneme - processing problem [Shaywitz-1], ([Black-1], pages 331–376), [Geschwind-1], and pattern recognition;
- the angular gyrus (Area 39) in the inferior parietal lobule - causing poor cross-modal associations ([Black-1], - pages 331–376), [Benson-1], [Dejerine-1], ( [Friedman-1], pages 37–62).

Other studies [Cao-1] using PET have shown less activation than the controls in left-inferior frontal gyrus (BA areas 45, 44, 47, 9), left-inferior parietal lobule (BA area 40), left-inferior temporal gyrus/fusiform gyrus (BA areas 20/37), and left-middle temporal gyrus (BA area 21). There are also studies with different approaches, such as identifying ectopias clustered round the left temporoparietal language areas. [Stein-1]

Different schools of research have championed different neurological bases of dyslexia and its resulting subgroups.

##### Auditory Discrimination

(Main research - see Tallal et all [Tallal-1].) This body of research has shown that many people with dyslexia have defects in the left-auditory cortex. The auditory cortex is responsible for sound naming and identification; and temporal processing (such as interval, duration, and motion discrimination).

Note that dyslexia does not affect hearing, but the identification and differentiation of sounds.

##### Visual Recognition Skills

(Main school of research Livingstone (1993) and Martin and Lovegrove 1988). See [Eden-1], [Henderson-1].) People with dyslexia have reduced synaptic activity in the V5 area (also known as visual area MT, middle temporal), which is a region of extra-striate visual cortex thought to play a major role in the perception of motion.

V5 is part of the broader "magno-cellular -- large cell -- system" that processes fast-moving objects, and brightness contrasts. One interpretation is that a specific magno-cellular cell type develops abnormally in people with dyslexia (3).

For results of clinical tests see (1).

##### Phoneme Processing

Main research from Shaymitz (1998) and Rumsy (1996). (See [Eden-1], [Paulesu-1], [Rumsey-1], [Henderson-1], [Demonet-1], [Pugh-1], [Petersen-1].) The language regions in the superior-temporal gyrus (Wernike's area) and striate cortex are found to underachieve in people with dyslexia. These areas respond to simple phoneme processing tasks. (Areas that respond to more complex language tasks, an anterior region, the IFG, displayed relative over-activation in people with dyslexia.)

Games involving nonsense words, rhyme, and sound manipulation will be enhanced by special auditory effects: Consonants are recorded louder while the adjacent vowel is lengthened and its sound softened. All games are carefully leveled by the complexity of the manipulations involved. (For results of clinical tests, see Ojemann 1989, Bertoncini et. al., 1989).

##### Cross-modal Association

Main research from Leon (1996) and Shaymitz (1998). (See [Lyon-1], ( [Black-1], pages 331–376), [Benson-1], [Dejerine-1], 30.)

The angular gyrus, a brain region considered pivotal in carrying out cross-modal (e.g., vision and language) associations necessary for reading, is involved. Current findings of under-activation in the angular gyrus of readers with dyslexia coincide with earlier studies of those who lost the ability to read due to brain damage centered in that same area of the brain.

The ability to link visual stimuli to auditory interpretation can be stimulated by multimedia implementation of the coming together of these separate disciplines. Activities are all carefully leveled to correlate a current ability level.

##### Working Memory

(Main school of research Beneventi et. al., 2008.)

Reduced activity in the pre-frontal and parietal cortex may result in working memory deficits. [Berninger-1]

#### Symptoms

Common symptoms are:

- slow and laborious reading (If people are undiagnosed or diagnosed late, they may be illiterate or barely - literate.);
- Concentration tends to fluctuate.
- poor and unusual spelling and grammar (Handwriting is unusable or very messy.);
- poor physical coordination;
- difficulty remembering information (tends to fluctuate);
- difficulty with organizing and planning.
- difficulty working within time limits;
- difficulty thinking and working in sequences, which can make planning difficult;
- visual processing difficulties, which can affect reading and recognizing places;
- poor auditory processing skills, which can make listening to oral instructions difficult, tiring and confusing.

#### Challenges

##### Memory

- Poor short term memory for facts, events, times, dates, symbols.
- Poor working memory, i.e., difficulty holding on to several pieces of information at the same time. This is - especially challenging while undertaking a task, e.g., taking notes while listening, addressing compound - questions.
- Mistakes with routine information, e.g., providing age, phone number, or ages of children.
- Inability to hold on to information without referring to notes.

##### Automatizing Skills

People with dyslexia do not tend to automatize skills very well. A high degree of mental effort is required in carrying out tasks that typical individuals generally do not feel requires effort. This is particularly true when the skill is composed of several sub-skills (e.g., reading, writing, driving).
Information Processing.

- Difficulties with taking in information efficiently (could be written or auditory).
- Slow speed of information processing, such as a 'penny dropping' delay between hearing or reading something and understanding and responding to it.

##### Communication Skills

- Lack of verbal fluency and lack of precision in speech (relevant for voice systems).
- Word-finding problems.
- Inability to work out what to say quickly enough.
- Misunderstandings or misinterpretations during oral exchanges.
- Sometimes, mispronunciations or a speech impediment may be evident.

##### Literacy

- Difficulty in acquiring reading and writing skills. Reading is likely to be slow.
- If people are undiagnosed or diagnosed late, they may be illiterate or barely literate.
- Where literacy has been mastered, problems continue, such as poor spelling; difficulty extracting meaning from - written material; difficulty with unfamiliar words; and difficulty with scanning or skimming text.
- Particular difficulty with unfamiliar or new language, such as jargon.

##### Organization, Sequencing

- Difficulty organizing a sequence of events.
- Incorrect sequencing of strings of numbers and letters (passwords, phone numbers).
- Chronic disorganization and misplacing/losing items.
- Difficulty with time management and passage of time.

##### Navigation

- Difficulty with finding the way to places or navigating - even in the context of a building. Often get lost.

##### Lack of Awareness

- Failure to notice body language.
- Failure to realize consequences of their speech or actions.

##### Visual Stress

- Some people with dyslexic difficulties may experience visual stress when reading especially when dealing with large amounts of text. So, breaks are often needed.

##### Coping Strategies

It must be emphasized that individuals vary greatly in their learning difficulties. Key variables are the severity of the difficulties; the ability to identify and understand their difficulties; and successfully developing and implementing coping strategies.

By adulthood, many people with dyslexia are able to compensate through technology, reliance on others, and an array of self-help mechanisms, the operation of which requires sustained effort and energy. Unfortunately, these strategies are prone to break down under stressful conditions, which impinge on areas of weakness.

##### Effects of Stress

People are particularly susceptible to stress (compared with the ordinary population) with the result that their impairments increase.

#### Scenarios and User Stories

##### Scenario: Online Research

A is a high school student with dyslexia. Although he can read, his level is slow and he finds it difficult. A has a school project and needs to do online research. A does not use a screen reader because he is afraid it will stop him from reading and improving his skills. A needs to be able to find content he needs easily. This includes finding the right resource and the right information inside that resource with minimal reading. He will then read the sections that he needs. He will do a web search, and a quick review of different pages to find the pages he needs.

Table of ICT Steps and challenges Step 	Challenge
Search query 	
Scanning results 	
Doing a short review of different options and finding the most appropriate. 	
Finding the right content in the right document. 	
Reading the right content. 	
Collecting the information. 	
Copying for citing resources and collecting them with the right information. 	
Saving the work. 	
Putting it together and writing the paper. 	Out of scope of this use case.

##### Scenario: Finding Out About a Change Event in an Email

B is a mother with young children. She has dyslexia. B reads words, then stops to understand them. B is also a slow reader. B receives many emails. Important emails often are below or behind the scroll bar. Reading summaries of each email takes time. B has set her email app to tag emails from her child's school as important. However, B still needs to differentiate between emails from her child’s school that are crucial, and emails that are just informative. B needs to be able to find important content (such as school finishing at a different time next Monday) in a long school newsletter.

B’s email application changes, and she no longer knows how to tag senders as important. At the same time, her child starts at a new school. B has difficulty finding the information on how to tag emails from the new school as important. Also, the school starts sending many emails about projects her child is doing, and what is happening in class, so B does not have time to read each email as soon as it arrives. She postpones this task and important emails get lost.

Table of ICT Steps and challenges Step 	Challenge
Finding out how to tag/label this from a sender as important (first time). 	
Remembering the process (re-finding it next time). 	
Tagging/labeling the new teacher. 	
Identifying important emails from the teacher, and distinguishing them from general interest-emails. 	
Finding important content in long emails. 	

##### Scenario: Using a Electronic Interface

C is an adult living alone. He has dyslexia. C has impaired vision and auditory memory; and finds remembering sequences extremely challenging. C has a garden with an automatic watering system that has a one line (electronic) interface. The interface is not user friendly. C needs to select which sprinkler he is setting using an arrow key; then set the first time it should go on (using the arrow key in the number mode); then press enter; and then set the duration the sprinkler should run. He then needs to repeat the steps for the second time (or leave it blank). He then needs to repeat the process for the next sprinkler in the correct order. C has been shown how to use the system many times. However, each time the system needs to be adjusted, he makes mistakes and gets confused. Ten years later C still needs to call the gardener to change the settings, and is consonantly relearning the interface.
Table of ICT Steps and challenges Step 	Challenge
Learning the steps involved. 	Learning the sequence.
Performing the steps correctly. 	Remembering the sequence. Performing it in the correct order.
Undoing mistakes. 	Remembering at which point he is in the sequence. Going back a step, and tracking the step he is at now.

##### Scenario: Using a Phone Menu

D is looking after his elderly father. D has dyslexia and impaired working memory; and impaired auditory discrimination. D can do one mental process at a time. D is weak at remembering numbers. He can remember one number at a time. D typically makes mistakes when dialing numbers. Often he will dial a number 3 or 4 times before he gets it right. D needs to speak to a doctor about his father who is sick. The doctor's office has a phone system with multi-layers. It takes D two attempts to dial the office. When faced with the menu system, D needs to listen to several similar options, understand the words, process the words, make a choice, identify the correct number, and enter the correct number into the keypad. Because he is trying to remember numbers whilst he is trying to listen to the next option, he misunderstands the options. He makes an incorrect choice. When trying to recover from the error he enters an invalid number and gets thrown off the line. D needs to redial this number but, as he is now upset, it takes him four attempts to dial it correctly. He is then faced with the same phone system. D makes more mistakes. After half an hour, he asks a neighbor to help him. D is very upset, which in turn upsets his sick father. D's self confidence at being able to look after his father is shattered.

Table of ICT Steps and challenges Step 	Challenge
Identifying the option he needs and remembering the right number associated with that option. 	Auditory discrimination under pressure; memory of the correct number whilst listening and processing other options.
Entering the correct number. 	Mapping the symbol to the number under pressure; eye-hand coordination.
Undoing mistakes. 	Staying calm so his skills do not further deteriorate.
3.1.5 How They Use The Web and ICT

People with dyslexia tend to use mainstream technologies (e.g., a spell checker) to help them. They may use screen readers that highlight text as they read. They may use other assistive technology, such as Dragon or a Daisy reader, though they seem to be used more as teaching aids rather than typical Web access. Special software to help dyslexics includes Text Help.

#### Characteristics of Content Optimized For This Group

Content made for people with dyslexia tends to have:

- icons to visually reinforce structure and what each section is (such as examples, tips etc.);
- diagrams that illustrate the point of the content;
- short paragraphs, short sentences;
- a beginning-summary of the point. (This can also be true at the document or paragraph level, where the first sentence raises the main point of the paragraph.);
- well-structured text with headings (reducing reading of irrelevant text);
- use of bold on key terms (helps finding of relevant text);
- a "read it to me" button, that highlights text as it is read, and is simple to use;
- a clear, well-structured, minimalistic-navigation system, which is free from confusing steps and a complex user-interface flow.

In general, content for people with dyslexia helps users find the text they are looking for via visual aids, and reduces the need to read though irrelevant text to find the information that they are looking for.

#### Specific Technologies

Assistive technologies include (incomplete list):

- Text help
- Dragon
- Kurzweil
- Ghotit
- Learning Ally
- Zoomreader
- Speak-it
- Read2Go

#### Summary of Existing Research and Guidelines

There are organizations that have produced guidelines for creating content for people with dyslexia, such as The British Dyslexia Association, and The Irish Dyslexia Association. Note that we are not recommending them, just summarizing them for further review.
 
##### Summary/Exerts of The British Dyslexia Association Guidelines and Dyslexia Style Guide

This Guide is in three parts: 1. Dyslexia Friendly Text. 2. Accessible Formats. 3. Website design.
Dyslexia-Friendly Text

The aim is to ensure that written material takes into account the visual stress experienced by some people with dyslexia, and to facilitate ease of reading. Adopting best practices for readers with dyslexia has the advantage of making documents easier on the eye for everyone.

###### Media

- Use a plain, evenly-spaced, sans-serif font, such as Arial. See the BDA New Technologies Committee website: - http://bdatech.org/what-technology/typefaces-for-dyslexia/
- Font size should be 12-14 point. Text should be expandable.
- Use dark-colored text on a light (not white) background. (Avoid pure white backgrounds because of glare.)

###### Headings and Emphasis

- For Headings, use a larger-font size in bold, lower case.
- Boxes and borders can be used for effective emphasis.
- Avoid underlining and italics. These tend to make the text appear to run together. Use bold instead.
- AVOID TEXT IN BLOCK CAPITALS. It is much harder to read.

###### Layout

- Use left-justified text with a ragged-right edge.
- Avoid narrow columns (as used in newspapers).
- Use lines of text that are not too long: 60 to 70 characters.
- Avoid cramping material and using long, dense paragraphs: space it out.
- Use text line spacing of 1.5.
- Avoid starting a sentence at the end of a line.
- Use bullet points and numbering rather than continuous prose.

###### Writing Style

- Use short, simple sentences in a direct style.
- Give instructions clearly.
- Avoid long sentences of explanation.
- Use active rather than passive voice.
- Avoid double negatives.
- Be concise.

###### Increasing Accessibility

- Flow charts are ideal for explaining procedures.
- Pictograms and graphics help locate information.
- Lists of do's and don't's are more useful than continuous text to highlight aspects of good practice.
- Avoid abbreviations if possible, or provide a glossary of abbreviations and jargon.
- For long documents, include a contents page at the beginning and an index at the end.

###### Checking Readability

Note: The spell checker in MS Word can be set to automatically check readability. MS Word will then show the readability score every time spelling is checked.

- Check long documents in sections to determine which parts are too hard to read.
- Flesch Reading Ease score: Rates text on a 100-point scale. The higher the score, the easier it is to understand - the document. For most standard documents, aim for a score of approximately 70 to 80.
- Flesch-Kincaid Grade Level score: Rates text on a U.S. grade-school level. For example, a score of 5.0 means that - a fifth grader, i.e., a Year 6, average 10 years old, can understand the document. For most standard documents, - aim for a score of approximately 5.0 by using short sentences, not by simplifying vocabulary.

##### Accessible Formats

Use an accessible format so content can be read by screen-reading software.

- Offer both the source MS Word files and derived PDF files where possible.
- Publicize availability of accessible formats.

###### Preparing a Document for Text-Reading Software

- Listening to a document using a text reader will take longer than visual reading.
- Place semi-colons, commas, or periods after bullet points and headings to make the screen-reader voice drop and - pause. (A pale tint similar to the background color will make the punctuation less visually distracting.)
- Use Styles in MS Word to organize headings and formatting.
- Use hyperlinks for Contents-Page listings.
- Number menu items.
- Use internal and external hyperlinks for ease of navigation.
- Avoid capital letters in mid-line, as they may be read as single letters.
- Include as few signs and symbols as are absolutely necessary, e.g., asterisks or dashes (both short and long), as - these will be spoken.
- Long dashes should be avoided. Use colons to make the voice pause.
- Use straight quotation marks. Curly or slanting ones may be read as ‘back quote’ by some screen readers.
- Avoid Roman Numerals and 'No.' for number.
- Consider whether abbreviations and acronyms need periods.
- Use hyphens in compound words to aid text-reading pronunciation.
- Chunk phone numbers to avoid being read as millions or hundreds of thousands.

###### Website Design

Research shows that readers with dyslexia access text at a 25% slower rate on a computer. This should be taken into account when putting information on the web. When a website is completed, check the site and information for accessibility by carrying out these simple checks.

- Navigation should be easy. A site map is helpful.
- Use graphics, images, and pictures to break up text, while bearing in mind that graphics and tables may take a - long time to download.
- Very-large graphics make pages harder to read.
- Offer alternate-download pages in a text-reader-friendly style.
- Where possible, design web pages that can be downloaded and read off-line.
- Don't use moving text, which creates problems for people with visual difficulties. Text-reading software is - unable to read moving text.
- In a table of contents, set hyperlinks so they show which pages have been accessed.
- Encourage the use of hyperlinks at the end of sentences.
- Make sure it is possible for users to set their own choices of font style and size and background and print - colors.

###### See Also

- Distilled design of B.D.A. web
- BBC: My web, my way. Making the web easier to use

###### Other Guidelines

Tips found across the web include the following. Dyslexia.com

- Keep paragraphs short, and use a small amount of text on each page.
- If a long article is posted, create a topic index at the beginning so that a reader with dyslexia can quickly - narrow in on the parts that interest him or her.
- Use default-font settings, or provide a way for users to choose their own styles.
- Use small icons to help with navigation between frequently-used web pages.
- Avoid using background images behind text. Make sure there is a good contrast between the color of the background - and the color of the text.
- Do not set up background music to play, unless the site gives the user a choice whether to turn it on.

#### Extent To Which Current Needs Are Met

WCAG does help in that content can be used by a screen reader and headings should be used. Many of the most useful checkpoints are AAA, and hence not implemented, or are advisory techniques and hence, likewise, not adopted.

AA level conformance to WCAG does not significantly help reduce cognitive load or reduce dependency on text by formatting and pictorial aids. Other guidelines (non W3C such as British Dyslexia Association Guidelines) fill in some of the gaps in WCAG.

None of the reviewed guidelines help ICT interfaces of voice-mail systems. They also do not address getting additional help.

#### Potentials and Possibilities

Added to brainstorming section

#### Prevalence

Dyslexia is a hidden disability thought to affect around 10% of the population, 4% severely.

Note that recent studies indicate dyslexia is particularly prevalent among small-business owners, with roughly 20 to 35 percent of US and British entrepreneurs being affected. This is important, as often people feel people with dyslexia are not in their user audience. With the exception of a scrabble game site, that is very unlikely. [39]
3.1.12 Sources and References

http://www2.open.ac.uk/study/support/disability/orientation

http://www.bdadyslexia.org.uk/dyslexic/adult

##### References to Research

1. Bakker, (1990) Neurophysiological Treatment of Dyslexia, Oxford University Press,.

3. Getting the Message Across, published by the Questions Publishing Company, Birmingham, England, 1996, on behalf of the British Dyslexia Association.

30. Friedman, R. F., Ween, J. E. & Albert, M. L. (1993) in Clinical Neuropsychology, eds. Heilman, K. M., Valenstein, E. (Oxford Univ. Press, New York), pp. 37–62.

39. Brent Bowers (2007-12-06). "Tracing Business Acumen to Dyslexia". New York Times.Cites a study by Julie Logan, professor of entrepreneurship at Cass Business School in London, among other literature.

{% include excol.html type="end" %}

{% include excol.html type="start" %}

### Aphasia

Communication difficulties may arise as the result of what is commonly known as a stroke. The type of impairment that results is known as Aphasia due to brain damage, which may cause receptive (comprehension) and expressive (speech and language) difficulties, dysarthria and dyspraxia where words can become unintelligible and a wide range of other difficulties that make articulation of accurate sounds difficult, and even vocalization impossible.

Aphasia can also impair an individual's ability to name items (finding the right word to refer to something), use correct grammar, cope with numerical calculations,and compose written language.

{% include excol.html type="middle" %}

#### Cognitive Functions

##### Memory

Receptive and Expressive Aphasia may result in impaired short term memory which can impact on re-learning language as can the impairment of auditory memory for relearning correct articulation and visual memory that affects reading and writing. Visuo-spatial Memory maybe an issue with the inability to remember how to get to places and recall locations, not helped if procedural memory is also involved where the order of doing things is affected. This is usually automatic but actions may have to be relearnt and there can be involvement of prospective memory that involves being aware of when certain activities have to be performed. 
{% include excol.html type="end" %}
