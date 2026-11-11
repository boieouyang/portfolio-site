---
title: "Production Automation Workflow"
summary: "Training a LoRA so AI-generated course images share one consistent visual style, as one phase of a workflow that turns a course script into learning media."
category: "AI Workflow"
context: "Teaching and Learning Lab, HGSE"
date: "2026"
order: 6
cover: "/images/tll03-classroom.webp"
coverAlt: "Black-and-white line-art storyboard frame: a teacher writes the day's lessons and simple sums on a chalkboard while a crowded classroom of students raise their hands"
role: "Workflow designer"
timeline: "Sep 2026 – present · Gallery Walk on Dec 3"
team: "Individual work, with a partner in shared advisor meetings"
tools: ["ComfyUI", "LoRA training", "n8n", "Claude", "Harvard AI Sandbox", "Figma"]
highlights:
  - "LoRA trained on 180 line drawings of 6 characters"
  - "4 training lengths compared"
  - "13 storyboard frames for a real case study"
reflection: "many-small-judgments"
---

## The challenge

Our project advisor is building a Production Automation Workflow (PAW) that turns a faculty member's course script into learning media: an LLM extracts style, character, and setting from the script, then image, video, and audio tools generate the pieces, and n8n ties every step together on the HGSE server. The tools at the center of it, n8n, ComfyUI, and LoRA training, were all new to me, and the brief was open: explore, and find what's worth building.

![Concept map of the Production Automation Workflow: a course script flows to script metadata, then to image generation (our semester focus), video generation, and audio, and finally to course media, with a transcript tool for accessibility and an n8n backbone orchestrating every step](/images/paw-concept-map.webp)

## Scoping the semester

Writing a project charter turned that openness into a plan. Building the whole workflow is out of scope. We focus on one phase: training a LoRA so that course images keep a consistent character, icon, and color style, with ComfyUI–n8n integration as a later milestone. Working back from the December 3 Gallery Walk gave the exploration edges.

## Training the LoRA

Getting to a first result took more troubleshooting than training. The server's ComfyUI was too old to support LoRA training, the models went missing after the update, and workflows couldn't be saved because of a "405 Method Not Allowed" error. Our workaround, exporting workflows as zipped JSON files to a shared folder, also means the project won't live only on the server.

I trained LoRAs on 180 black-and-white line drawings of six characters and compared versions trained for 50, 600, 1,000, and 1,500 steps with the same prompt and seed. 50 steps changed almost nothing, 600 was weak, and 1,500 became rigid and stopped following new instructions. **1,000 steps balanced style and flexibility best.** A second sampling pass that upscales and redraws details made faces clearer, though backgrounds still sometimes filled with gray textures or random objects.

![Part of the training set: small black-and-white line drawings of several characters in head turns and full-body poses on white backgrounds](/images/tll03-lora-dataset.webp)

The real skill turned out to be judgment. Changing one variable at a time, and naming criteria such as style consistency, line quality, background cleanliness, and prompt following, turned a vague "not good enough" into evidence I could act on.

## From one character to a whole story

Next, our advisor invited us to build the visual layer for a real case study he had turned into an AI-assisted audio piece. Our LoRA had learned from single characters on white backgrounds, but the story needs crowded classrooms, market streets, and meeting rooms. So I described the line-art style in words (a "style block") and used Harvard's AI Sandbox and Figma's AI image generation to create 13 storyboard frames in 16:9.

![Two-panel line-art storyboard frame: on the left, students in uniforms line up with bowls for a school meal; on the right, young children build with wooden blocks under a 'Small Steps Big Dreams' poster](/images/tll03-meals-and-play.webp)

Turning the script's metadata into images took many small decisions. I rewrote every photorealistic prompt in the line-art style, fixed prompts that didn't match their narration, avoided real flags and logos, and checked every generated sign for misspellings.

## Designing for people, not defaults

- **Faculty choose the style.** We plan to show faculty three style options before training, so the model's defaults don't become the aesthetic.
- **Representation is a design decision.** Our training images leave skin unfilled in white. For a story set in a sub-Saharan African country, keeping or changing that convention shapes how learners see the people in it.
- **Accessibility in the pipeline.** I'd like the image phase to generate alt text alongside every image, the way the advisor's transcript tool already builds captions into the workflow.

## What's next

Use the storyboard frames as structural references for our LoRA, so scenes keep their composition but match our trained style, then explore animating them. I'm also setting up a fixed set of test prompts so every LoRA version can be compared fairly, ahead of the December 3 Gallery Walk.

Earlier reflection: [From Confusion to Scaffolding](/writing/from-confusion-to-scaffolding).
