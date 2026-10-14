# Baoyi Ouyang — portfolio site

Personal portfolio for job applications (learning design / AI). Built with Astro, deployed on Vercel from GitHub. Every push to `main` goes live automatically.

## Where things live
- `src/data/site.json` — name, intro, About paragraphs, education/experience, skills, tools, email, LinkedIn/Instagram/résumé links (leave a link "" to hide it).
- `src/content/projects/*.md` — one file per project. Frontmatter: title, summary, category, context, date, order (position on the homepage, 1 = featured), cover, coverAlt, optional highlights, prototypes, reflection, draft.
- `src/content/reflections/*.md` — one file per reflection/article. Frontmatter: title, summary, course, date (YYYY-MM-DD), cover, coverAlt, optional draft.
- `public/images/` — all images, as .webp, max 2000px on the long side.
- `src/styles/global.css` — all styling. Colors and type scale are tokens at the top.

## House rules
- Write in US English, first person, plain and specific. Lead with outcomes and numbers.
- Every image needs a real alt text that describes what is in it.
- Keep project covers 4:3-friendly (important content centered); they are cropped to 4:3 on the homepage.
- Don't add new fonts or colors; use the tokens in global.css.
- Before committing, run `npm run build` and fix any errors.

## Common tasks
- Update a project: edit its .md file (add a section, new numbers, new images).
- Add a project: copy an existing file in src/content/projects, change the frontmatter, set `order`.
- Hide something without deleting it: add `draft: true` to its frontmatter.
- Add images: convert to .webp (max 2000px) into public/images, reference as /images/name.webp.
- Publish: `git add -A && git commit -m "..." && git push`.
