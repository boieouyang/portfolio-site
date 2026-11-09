---
title: "Bridge"
summary: "Helping students find the words when speaking is hard: an AI-supported communication tool for college office hours, co-designed with Perkins School for the Blind in two days."
category: "Inclusive AI Design"
context: "AI+ Learning Differences Hackathon · Harvard GSE"
date: "2026"
order: 1.5
cover: "/images/bridge-team.webp"
coverAlt: "Team 15 holding their certificates of participation in front of a Harvard Graduate School of Education backdrop and an AI+ Learning Differences banner"
role: "UX/UI Design Lead · Research"
timeline: "2.5 days: a half-day site visit at Perkins, then a 2-day build"
team: "7-person interdisciplinary team of designers, educators, researchers, and a Perkins co-designer"
tools: ["Lovable", "Figma", "Claude", "Google Slides"]
highlights:
  - "Learning Design Excellence award"
  - "Co-designed with Perkins School for the Blind"
  - "Working prototype in 2 days"
prototypes:
  - label: "Open the Bridge prototype"
    url: "https://bridge-beyond-the-label.lovable.app/"
---

## Overview

Bridge is an AI-supported communication tool for college office hours. It's for students who know what they want to ask but can't get the words out in the moment, because they're overwhelmed, anxious, or stuck between mind and speech. Bridge turns fragments, picks, speech, or sketches into a message the student approves and controls. Students never need to share a diagnosis.

Our team received the **Learning Design Excellence** award at the AI+ Learning Differences Hackathon, hosted by Harvard GSE with Perkins School for the Blind and other partners, November 7–8, 2026.

## Reframing the problem

**We thought** we were designing for people who can't speak, so we'd build a better AAC board.

**We heard** co-designers describe a *feeling*, not a diagnosis: knowing what you need, but being unable to say it when you're overwhelmed. They also pointed out that many people who struggle this way are undiagnosed or choose not to disclose.

**So we changed** our user and our scope.

> How might we help students who find it hard to speak when overwhelmed during office hours ask for what they need, without having to disclose a diagnosis?

- **11%** of students skipped office hours because they felt intimidating or stigmatizing (Hsu et al., 2022).
- **74%** of faculty say students need to feel safe before asking for help (Hudgens et al., 2024).
- **Half** of disabled college students are first diagnosed in college, and **36%** tell no one at their school (NDCSS, 2025).

## The solution

**Check in → Say it → Send → Live session → Recap**

![Slide 'How Bridge works' with five prototype screens: 1 Set it up, picking an emoji for today's feeling and a class; 2 Say it, sentence starters to formulate thoughts; 3 Send messages, choosing communication forms and booking a time; 4 Live session, one-tap replies like 'Can you write that down?'; 5 Recap, what you asked, key points, next steps, and 'Did you feel heard?'. Below, the educator side: reads the message first, sees only what the student shares, and has quick tools](/images/bridge-how-it-works.webp)

- **Check in with a feeling.** The student's emotional state adapts the language level and the number of choices. Fewer, shorter options appear when they're overwhelmed.
- **Pick a class.** Suggestions become specific to what they're studying.
- **"I'm stuck."** Bridge asks one gentle question at a time for students who aren't yet sure what they need.
- **AI drafts, the student decides.** For example, *"chain rule… lost after step 2… maybe the dx part"* becomes a clear question the student can edit, redo, or discard.
- **Many ways in.** Students can type, pick, speak, sketch, or have their message read aloud, and mix these freely.
- **Educator side.** Educators read the message before the session. During it, they have quick tools such as *Write it down*, *Show an example*, and *Check understanding*.
- **Privacy by default.** Nothing is shared without consent, every use is logged, and every share can be revoked.

## My contribution

**Research.** I led the scan of existing tools: AAC apps, hidden-disability signals, emotion check-ins, and AI writing tools. The key gap I found was that these tools help students *signal* or *cope*, but students still have to know what they need and build the sentence themselves, at the moment that's hardest.

**UX/UI redesign.** Once the low-fidelity prototype worked, I led a full redesign focused on **reducing cognitive load** for users who may be overwhelmed:

- **Less text, more visuals:** one question and one main action per screen.
- **Emotion-adaptive flow:** each feeling routes to different suggestions and a different language level.
- **A visible journey:** a step bar shows where you are, what you chose, and what comes next.
- **Inclusive color:** WCAG AA contrast throughout, meaning never carried by color alone, and no red for emotions. I checked contrast ratios for both light and dark themes.
- **Grown-up aesthetics:** an editorial collage style designed for college students rather than children, with a "Simple look" toggle for users who want no decoration.

## Reflection

- **Co-design changed our direction.** Our most important decision, broadening from "can't speak" to "can't speak *in the moment*," came from listening to people with lived experience, not from our own assumptions.
- **Restraint is a design choice.** The value of AI here came from limiting what it does and keeping the student in charge of every word.
- **Accessibility belongs in the foundation.** Color, typography, motion, and input modes shaped the product from the start rather than being added at the end.
- **Honest limits:** some of our evidence comes from small samples, and the AI in our prototype was simulated. Real validation needs testing with students and TAs, starting with a pilot in one course's office hours.

![Certificate of Recognition for Learning Design Excellence, 'the clearest, most usable design for how learners actually learn or teachers actually teach', presented to Team 15 at the AI+ Learning Differences Hackathon, November 7–8, 2026, at Harvard University](/images/bridge-award.webp)
