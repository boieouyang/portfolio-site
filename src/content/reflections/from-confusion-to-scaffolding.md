---
title: "From Confusion to Scaffolding: Learning AI Workflows as a Cognitive Apprentice"
summary: "How a project charter turned an open-ended AI workflow project into a plan, and why the people a design serves should shape it, not the model's defaults."
course: "T127 Teaching and Learning Lab · Reflection 02"
date: "2026-10-16"
cover: "/images/paw-concept-map.webp"
coverAlt: "Concept map of the Production Automation Workflow: a course script flows to script metadata, where an LLM extracts style, character, and setting as prompts; then to image generation (our semester focus: ComfyUI with a LoRA trained on a style faculty choose), video generation, and audio; and finally to course media, with a transcript tool for accessibility. An n8n backbone on the HGSE server orchestrates every step."
---

When our team first met with our project advisor in late September, I walked in with a strange mix of confidence and unease. I am comfortable with video editing and media production. I know how a timeline works, how to pace a clip, and what makes a visual feel consistent across a series. But the tools at the center of our Production Automation Workflow (PAW) project, n8n, ComfyUI, and LoRA training, were completely new to me. This is a real hard-skill challenge, and for the first few weeks, I was honestly confused about what we were even supposed to be building.

## Why the early weeks felt so unclear

Looking back at our meeting notes, the confusion makes sense. Our first two meetings were about onboarding: our project advisor walked us through the current workflow, the tools in use, and the problems PAW is trying to solve. In our third meeting, instead of assigning us a task, our advisor encouraged us to identify what interested us and what we wanted to make. He mentioned many directions, including Adobe, ComfyUI, LoRA, script writing, and a background-removal problem he was working through. When we asked where to start, his suggestion was to try training a LoRA and to use AI to help us work through problems along the way.

That openness was generous, but without a frame for it, I felt lost. Every direction seemed possible, and I could not tell which ones were realistic for a semester.

This week's reading on cognitive apprenticeship helped me name what was happening. Collins (2006) describes a sequence of teaching methods that begins with modeling and coaching, adds scaffolding that gradually fades, and moves toward articulation, reflection, and finally exploration, where learners frame and pursue their own problems. In a sense, we were invited to explore very early, before we had the scaffolds to do it confidently. Collins also describes sequencing learning from global to local skills, so that learners first see the shape of the whole task before practicing its parts (Collins, 2006). Our onboarding did this well: seeing our advisor's full workflow gave me a conceptual map. What I was missing was the bridge from that big picture to a specific starting point.

## The charter as a scaffold

That bridge turned out to be the project charter. Writing it forced us to say clearly what is in scope and, just as importantly, what is not. Building the entire production workflow is out of scope. We are focusing on one phase: training a LoRA so that course images keep a consistent character, icon, and color style, with ComfyUI–n8n integration as a later milestone. Working back from the December 3 Gallery Walk gave the exploration edges.

Once the scope was on paper, my confusion turned into a to-do list. I now see the charter as a scaffold in Collins' (2006) sense. It did not tell us the answers, but it structured the problem enough that we could work on it independently. My background in media production also became more useful once the scope was narrower, because a consistent visual style across course media is exactly the kind of problem I already understand from editing. The AI tools are new, but the design goal is familiar.

## Who is the design for?

This week's readings also pushed me to ask a question our technical discussions had mostly skipped: who are the users of this workflow? There are at least two groups. Faculty and course teams will use the workflow to produce media, and learners will experience what it produces. Human-centered design asks us to start from the needs of those people, not from what the tools can do (IDEO.org, n.d.; Thomsen, 2013). Our plan to show faculty three style options before training a LoRA is one small way of keeping the people who will use the output in the decision, rather than letting the model's defaults become the aesthetic.

Hill et al. (2016) argue that inequity is a product of design and can therefore be redesigned, and their argument made me think about this more critically. The models we use are open weights, not fully open source, so we cannot see the data they were trained on. If we generate characters for course media, whose faces and cultures show up by default, and whose are missing? Gronseth et al. (2021) reinforce that designing for diverse learners means attending to who is represented and who can access the material, not treating it as decoration. If our LoRA locks in a consistent character, we are also locking in a choice about who learners see.

Accessibility connects here too. My working definition of accessibility is that every learner can perceive, understand, and engage with the material without needing to ask for an exception. Burgstahler (2017) makes a similar case for designing online courses to be accessible from the start rather than fixing problems after the fact. In a media workflow, that means captions, transcripts, and descriptive alt text should be built into the pipeline, not added at the end. Our advisor's existing caption-to-transcript converter already points in this direction, and I would like our image phase to carry the same principle, for example by generating alt text alongside every image.

## Looking ahead

Next, we will research how to train a LoRA inside the server-hosted ComfyUI and start working with the captioned image dataset our advisor shared. My partner and I are also starting a Tuesday check-in to reflect on our Thursday sessions before group meetings, which feels like our own version of articulation and reflection (Collins, 2006).

The question I am carrying forward: as the scaffolds fade and we move into real exploration, how do we make sure our design choices stay centered on learners and faculty, rather than on what the AI happens to produce?

## References

- Burgstahler, S. (2017). ADA compliance for online course design. *EDUCAUSE Review*. [er.educause.edu](https://er.educause.edu/articles/2017/1/ada-compliance-for-online-course-design)
- Collins, A. (2006). Cognitive apprenticeship. In R. K. Sawyer (Ed.), *The Cambridge handbook of the learning sciences* (pp. 47–60). Cambridge University Press.
- Gronseth, S. L., Michela, E., & Ugwu, L. O. (2021). Designing for diverse learners. In J. K. McDonald & R. E. West (Eds.), *Design for learning: Principles, processes, and praxis*. EdTech Books. [edtechbooks.org](https://edtechbooks.org/id/designing_for_diverse_learners)
- Hill, C., Molitor, M., & Ortiz, C. (2016). Racism and inequity are products of design. They can be redesigned. *Medium*. [medium.com](https://medium.com/equity-design/racism-and-inequity-are-products-of-design-they-can-be-redesigned-12188363cc6a)
- IDEO.org. (n.d.). *Design kit*. [designkit.org](https://www.designkit.org/)
- Thomsen, D. (2013, December). Why human-centered design matters. *Wired*. [wired.com](https://www.wired.com/2013/12/why-human-centered-design-matters/)
