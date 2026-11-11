---
title: "Production Automation Workflow"
summary: "My capstone: a proof-of-concept animatic that turns a real course case study into a storyboarded video, with every AI-assisted step and human decision behind it made visible."
category: "AI Workflow · Capstone"
context: "Teaching and Learning Lab, HGSE"
date: "2026"
order: 6
cover: "/images/tll03-classroom.webp"
coverAlt: "Black-and-white line-art storyboard frame: a teacher writes the day's lessons and simple sums on a chalkboard while a crowded classroom of students raise their hands"
role: "Workflow designer"
timeline: "Sep – Dec 2026 · Gallery Walk on Dec 3"
team: "Partner project, advised by TLL's senior educational media designer"
tools: ["n8n", "ComfyUI", "LoRA training", "Gemma (local LLM)", "Harvard AI Sandbox", "Figma", "Claude"]
highlights:
  - "1 animatic built from a real case study"
  - "2 metadata versions compared side by side"
  - "LoRA trained on 180 line drawings"
reflection: "many-small-judgments"
---

## The capstone in one sentence

A **proof-of-concept animatic**, a short, low-fidelity animated storyboard built from a real course case study, paired with a **process showcase** that shows each AI-assisted step behind it and the human decision made at each one.

## Why this project

The Teaching and Learning Lab's Production Automation Workflow (PAW) aims to turn a faculty member's course script into learning media: a language model breaks the script into scenes and writes prompts for narration, images, sound, and music, and n8n connects every step on the HGSE server. The long-term vision is a "one-button push" that produces a first draft, so producers can spend their time reviewing and refining instead of assembling.

That workflow will keep evolving long after this semester. So rather than promise a finished tool, my capstone runs **one complete pass** through the process and documents where automation helps, and where human judgment still matters.

![Concept map of the Production Automation Workflow: a course script flows to script metadata, then to image generation, video generation, and audio, and finally to course media, with a transcript tool for accessibility and an n8n backbone orchestrating every step](/images/paw-concept-map.webp)

## The case study

The source is a faculty member's case study about **Nambara, a fictional low-income country** working through challenges in school access, funding, and equity. Our advisor has already produced it as a roughly two-and-a-half-minute audio piece with AI-generated narration, music, and sound effects. My task is the visual layer.

## What I'm building

1. **Animatic versions of the Nambara audio.** One storyboard frame per clip, timed to the narration, with simple motion such as slow zooms and pans. At least two styles, our black-and-white line art and a contrasting style, so viewers can compare how style changes the feel of the same content.
2. **A metadata comparison.** The workflow's language model is non-deterministic: the same script produces different scene prompts each run. I'm comparing two versions of the metadata, and the images generated from each.
3. **A bias investigation.** One metadata run described Nambara as a "sub-Saharan African" setting, although the script never says where Nambara is. The model inferred a location, and that guess shaped every image prompt downstream, like a game of telephone. I'll trace where it happens, revise the workflow's style-extraction prompt, and compare the outputs before and after.
4. **A LoRA training record.** The story of trying to give TLL a consistent house style, including what didn't work.
5. **Process annotations.** Workflow screenshots, side-by-side comparisons, and short notes on each decision.

## Where it stands

**Training a house style.** I trained LoRAs on 180 black-and-white line drawings of six characters and compared versions trained for 50, 600, 1,000, and 1,500 steps with the same prompt and seed. **1,000 steps balanced style and flexibility best.** The style transferred, but faces sometimes melted, and a model that learned from single characters on white backgrounds struggled with crowded scenes. Getting there also meant working around an outdated server, missing models, and a save error, so every workflow is now exported to a shared folder and doesn't live only on the server.

![Part of the training set: small black-and-white line drawings of several characters in head turns and full-body poses on white backgrounds](/images/tll03-lora-dataset.webp)

**Storyboarding the case study.** To cover the scenes the LoRA couldn't, I described the line-art style in words and used Harvard's AI Sandbox and Figma's AI image generation to create 13 storyboard frames in 16:9. Along the way I rewrote every photorealistic prompt, fixed prompts whose images didn't match their narration, and checked every generated sign for misspellings and flags that resembled real ones.

![Line-art storyboard frame of a busy semi-rural market street with stalls, people carrying baskets, and a government building in the background](/images/tll03-market-street.webp)

![Two-panel line-art storyboard frame: on the left, students line up with bowls for a school meal; on the right, young children build with wooden blocks](/images/tll03-meals-and-play.webp)

## Design principles

- **Every frame supports what learners hear.** Images are checked against their narration, following Mayer's coherence and temporal contiguity principles.
- **Low fidelity on purpose.** Critiques of default "video-first" online learning remind me to ask whether a richer visual layer actually adds value, so the animatic stays simple until it earns more.
- **Defaults are design decisions.** A model's unstated assumptions, about place, faces, or skin tone, become what learners see. Checking for them is part of the job, not an extra.
- **Accessibility in the pipeline.** Alt text and captions should be generated alongside the media, not added at the end.
- **Make judgment visible.** Working alongside an expert media producer, I'm learning to name the criteria he applies intuitively: style consistency, line quality, clean backgrounds, and fidelity to the script.

## What success looks like

- One complete animatic synchronized with the Nambara audio
- A clear side-by-side comparison of two metadata versions and their images
- At least one documented change to the workflow's prompt, with evidence of its effect
- Annotations that show which steps were automated, which were done by hand, and why

## Timeline

- **Mid-November:** run the production-script workflow, compare metadata versions, revise the style-extraction prompt
- **Late November:** finalize storyboard frames and build the animatic versions
- **Early December:** prepare the Gallery Walk display, slides, and annotations

## Open questions

Which parts of production can safely be handed to automation, and which, like checking for bias or deciding whether an image supports learning, should always stay with people? The capstone won't settle that, but it gives TLL a concrete first pass to ask it with.

Earlier reflection: [From Confusion to Scaffolding](/writing/from-confusion-to-scaffolding).
