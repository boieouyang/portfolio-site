---
title: "Production Automation & AI Transcripts"
summary: "Designing n8n workflows that streamline educational media production, starting with AI-generated transcripts and a human review step."
category: "AI Workflow"
context: "Teaching and Learning Lab, HGSE"
date: "2026"
order: 6
cover: "/images/JSYjEEzS2VYkOSoJ6lNmyzxf9w0.webp"
coverAlt: "Video player beside a searchable transcript panel with the word 'feedback' highlighted"
role: "Workflow designer"
timeline: "Sep 2026 – present"
team: "Individual work, with a partner in shared advisor meetings"
tools: ["n8n", "AI transcription"]
reflection: "from-confusion-to-scaffolding"
---

## The challenge

Producing educational media involves many small, repetitive steps that quietly take up a team's time: transcribing recordings, cleaning up text, preparing captions, and moving files between tools. My goal is to free the team from repetitive work so they can focus on the creative and pedagogical decisions that actually need people.

## My approach

Before automating anything, I mapped the team's production process step by step to understand where time is lost and which tasks are truly repetitive. Not every step should be automated: anything that needs judgment, like editorial choices or teaching quality, stays with people. The tasks worth automating follow clear rules and happen every time, and transcription was the clearest place to start.

![Diagram 'Automate the routine, keep the judgment': rules that repeat every time are automated, decisions that need judgment stay with people](/images/6xWBQPqb593oTqThawEg5o4B4A.webp)

## The workflow

I'm building the workflow in n8n, a visual automation tool that connects apps and AI services. When a new recording is added, the pipeline generates an AI transcript, formats it for the team, and delivers it to the right place for review. A human review step stays in the loop, because AI transcripts still need checking for names, terms, and accuracy.

![Pipeline from new recording to AI transcription, formatting, human review, and delivery to the team](/images/sqpeGJAgBZwKliNuOU2AVaDVo.webp)

## What I'm learning

Transcripts do more than save time. They make media more accessible to learners who rely on captions or prefer reading, and they turn video into searchable, reusable content. Building this workflow has also shaped how I think about AI in products: the best automation isn't the one that removes people entirely, but the one that hands people exactly the work that needs their judgment.

![Video player beside a searchable, timestamped transcript with the word 'feedback' highlighted](/images/JSYjEEzS2VYkOSoJ6lNmyzxf9w0.webp)
