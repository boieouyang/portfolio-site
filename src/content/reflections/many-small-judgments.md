---
title: "Many Small Judgments Behind One Button"
summary: "Training my first LoRAs and building a storyboard for a real case study showed me how much human judgment sits behind the dream of a one-button workflow."
course: "T127 Teaching and Learning Lab · Reflection 03"
date: "2026-11-05"
cover: "/images/tll03-classroom.webp"
coverAlt: "Black-and-white line-art storyboard frame: a teacher writes the day's lessons and simple sums on a chalkboard while a crowded classroom of students raise their hands"
---

In my last post, I described how our project charter turned an open-ended exploration into a focused goal: training a LoRA so that AI-generated course images share one consistent visual style. Three weeks later, I have trained my first LoRAs on our school server, compared several versions, and started generating storyboard frames for a real case study. But the most important thing I learned is not technical. It is how many human judgments sit behind what our project advisor calls the dream of a "one-button push."

## What I built, and what broke

Getting to a first result took more troubleshooting than training. The server's version of ComfyUI was too old to support LoRA training, and after it was updated, all the models were missing. Later, workflows could not be saved on the server because of a "405 Method Not Allowed" error, and this week my access to the GSE VPN stopped working. Each problem was small, but together they showed me that "the workflow" includes servers, permissions, and people, not only nodes on a canvas. Our workaround for saving, exporting workflows as zipped JSON files to a shared SharePoint folder, also addresses a risk we named in our charter: that the project might live only on the server, with nothing the team could carry forward.

Once training worked, I trained LoRAs on our dataset of 180 black-and-white line drawings of six characters, and compared versions trained for 50, 600, 1,000, and 1,500 steps using the same prompt and seed. The 50-step version changed almost nothing, the 600-step version was weak, and the 1,500-step version became rigid and stopped following new instructions. The 1,000-step version balanced style and flexibility best. Adding a second sampling pass that upscales the image and redraws its details made faces clearer. Still, backgrounds sometimes filled with gray textures or random objects, and expressions could look strange.

<figure>
  <img src="/images/tll03-lora-dataset.webp" alt="Grid of small black-and-white line drawings from the LoRA training set: head turns and full-body poses of several characters on white backgrounds" loading="lazy" />
  <figcaption>Part of the training set: single characters drawn in line art on white backgrounds.</figcaption>
</figure>

## Judgment as the real skill

In our last meeting, our advisor said that when AI produces many options, choosing which ones work still comes down to human experience. He encouraged us to practice that judgment, and when we prefer one result over another without knowing why, to interrogate that feeling until we can explain it.

At first, my comparisons were inconsistent: I changed prompts and models at the same time, so I could not tell what caused a difference. Learning to change one variable at a time, and to name criteria such as style consistency, line quality, background cleanliness, and whether the image follows the prompt, turned a vague feeling of "not good enough" into evidence I could act on. This connects to cognitive apprenticeship (Collins, 2006): I am starting to articulate the tacit standards that an expert media designer applies without thinking. I used Claude throughout, mostly by sharing screenshots and asking what to change. It was helpful and usually accurate, but deciding whether an image was "better" was always my job.

## From one character to a whole story

Our advisor then invited us into a new direction. He had turned a faculty member's case study about a fictional country into an AI-assisted audio piece, using a "metadata builder" that splits the script into scenes and generates prompts for narration, music, sound effects, and images. Our task is to build the visual layer: storyboard frames for each clip, eventually combined with his audio into an animatic.

This exposed a gap I had not noticed. Our LoRA learned from single characters on white backgrounds, but the storyboard needs crowded classrooms, market streets, and meeting rooms. So, while my server access was down, I tried another route: describing the line-art style in words (a "style block") and using general-purpose image tools, Harvard's AI Sandbox and Figma's AI image generation, to create 13 storyboard frames in a 16:9 format.

<figure>
  <img src="/images/tll03-market-street.webp" alt="Black-and-white line-art storyboard frame of a busy market street, with vendors, women carrying baskets on their heads, and a district administration building in the background" loading="lazy" />
  <figcaption>A storyboard frame of a market street, generated from a style block rather than the trained LoRA.</figcaption>
</figure>

Translating the metadata into images required more decisions than I expected. The original image prompts were written for photorealism, so I rewrote all of them in the line-art style. Some prompts did not match their narration: one described a "dim, empty classroom" for a shot meant to show older students, and another showed foreign flags while the narration was about delayed school funding. I adjusted these so each image supported what learners would hear at that moment. I also chose to avoid real flags and logos, and to check every generated sign and banner, because image models often misspell text. These were small decisions, but no metadata file could have made them for me.

<figure>
  <img src="/images/tll03-meals-and-play.webp" alt="Two-panel line-art storyboard frame: on the left, students in uniforms line up with bowls for a school meal; on the right, young children build with wooden blocks under a 'Small Steps Big Dreams' poster" loading="lazy" />
  <figcaption>A two-panel frame showing school meals and early-years play.</figcaption>
</figure>

## What the readings added

Mayer's coherence principle warns that extraneous material increases cognitive load (Mayer, 2001; Digital Learning Institute, n.d.). Seen this way, random objects in a background are not only an aesthetic flaw but a learning problem, and an image that contradicts the narration is worse, because it splits attention. Guo et al. (2014) found that students engaged more with informal videos and hand-drawn, Khan-style explanations than with polished studio production, which supports a simple line-art style. But McConachie and Schmidt (2015) warn against treating engagement as learning, and against making video simply because a team is built to make it. A workflow that makes media faster could also make it easier to produce media nobody needed.

The storyboard also raised a representation question from earlier readings (Hill et al., 2016). Our training images leave skin unfilled, in pure white. For a story set in a sub-Saharan African country, I had to decide whether to keep that convention or render skin in a flat gray, which breaks the pure black-and-white style. There is no neutral default here: either choice shapes how learners see the people in the story.

## Looking ahead

Next, I want to bring the storyboard back into our own pipeline: using the generated frames as structural references for our LoRA, so the scenes keep their composition but match our trained style more closely, and then exploring how to animate them. I also plan to set up a fixed set of test prompts so each LoRA version can be compared fairly.

The question I am carrying forward is the one our advisor raised about his own work: if a single button could assemble a first draft, the human role would shift from assembling to reviewing and refining. This project is teaching me how much of that reviewing is really design.

## References

- Collins, A. (2006). Cognitive apprenticeship. In R. K. Sawyer (Ed.), *The Cambridge handbook of the learning sciences* (pp. 47–60). Cambridge University Press.
- Digital Learning Institute. (n.d.). *Mayer's 12 principles of multimedia learning*. [digitallearninginstitute.com](https://www.digitallearninginstitute.com/blog/mayers-principles-multimedia-learning)
- Guo, P. J., Kim, J., & Rubin, R. (2014). How video production affects student engagement: An empirical study of MOOC videos. In *Proceedings of the First ACM Conference on Learning @ Scale* (pp. 41–50). ACM. [doi.org/10.1145/2556325.2566239](https://doi.org/10.1145/2556325.2566239)
- Hill, C., Molitor, M., & Ortiz, C. (2016). Racism and inequity are products of design. They can be redesigned. *Medium*. [medium.com](https://medium.com/equity-design/racism-and-inequity-are-products-of-design-they-can-be-redesigned-12188363cc6a)
- Mayer, R. E. (2001). *Multimedia learning*. Cambridge University Press.
- McConachie, K., & Schmidt, P. (2015, June 17). Why there are so many video lectures in online learning, and why there probably shouldn't be. *MIT Media Lab on Medium*.
