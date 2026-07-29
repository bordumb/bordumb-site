# Repository guide

## Purpose

This repository contains the personal site for the pseudonymous identity
`bordumb`.

The site has three public surfaces:

- a profile and selected-work page;
- a technical blog with tags;
- interactive visual studies under `/labs`.

The design language is quiet and exact. Typography and spacing carry the visual
hierarchy. Technical depth appears where the subject requires it: language-
switching code groups, mathematics, Mermaid diagrams, formal-proof excerpts,
and interactive explanations.

Read `docs/specs/personal-site.md` before changing the information architecture,
identity treatment, visual language, or publishing model.

## Runtime and commands

Use Bun for dependency management and scripts.

```sh
bun install
bun run dev
bun run build
```

`bun run build` runs Astro diagnostics, generates the static site, and prepares
the hosting output. Run it after changing components, pages, styles, or content.

## Architecture

- `src/pages/` contains Astro routes.
- `src/content/blog/` contains typed MDX posts.
- `src/components/content/` contains reusable technical-writing primitives.
- `src/components/labs/` contains interactive visual explanations.
- `src/layouts/` contains shared page and article shells.
- `src/styles/global.css` contains the global design tokens and prose system.
- `src/data/projects.ts` contains selected-work data.
- `src/content.config.ts` defines the blog schema.
- `public/` contains static public assets.
- `docs/specs/` contains product and design decisions.

Prefer a reusable component when the same semantic or interactive pattern could
appear twice. Keep page files responsible for composition and page-specific
content, not general UI behavior.

## Content capabilities

Blog posts are MDX files with frontmatter shaped like:

```yaml
---
title: "Post title"
description: "Specific description of the post's subject and conclusion."
publishedAt: 2026-07-29
tags: [formal-methods, mathematics]
draft: false
featured: false
---
```

Use the existing content components:

- `CodeGroup` for equivalent examples in multiple languages;
- `Mermaid` for dependency graphs, state transitions, and proof structure;
- `Callout` for an invariant, constraint, caveat, or consequence;
- `Dialogue` for extended conversational passages.

Use Markdown display math for important equations and inline math for symbols
inside prose. Introduce every symbol before relying on it. A diagram should
make a relationship easier to see; it should not duplicate the adjacent
paragraph.

## Language and prose

### Governing rule

Every substantive sentence should identify at least one of the following:

- a condition;
- a mechanism;
- an observable consequence;
- a constraint;
- a concrete example;
- a verified relationship between two claims.

Prefer statements whose truth can be checked. If a sentence merely announces a
tone, attitude, simplicity, rigor, importance, or sophistication, replace it
with the fact that creates that impression.

### Show the logic

Write the actual relationship:

> A child grant is valid only when each component stays equal or becomes more
> restrictive.

Then name the components and comparisons:

> Its permissions must remain a subset of the parent permissions, its expiry
> cannot move later, and its budget cannot increase.

Use connective words when they expose reasoning: `if`, `only when`, `because`,
`therefore`, `implies`, `requires`, and `cannot`. Do not hide the causal chain
behind an evocative summary.

### Avoid vague declarations

Do not use slogans that tell the reader how to feel about the material.

Avoid:

- “Boundary, not magic.”
- “The snippets are intentionally boring.”
- “This is where things get interesting.”
- “The real power is…”
- “This is deceptively simple.”
- “A subtle but important point…”
- “This changes everything.”
- “The system works as designed.”

Replace each one with the relevant mechanism or result.

| Avoid | Prefer |
|---|---|
| “Boundary, not magic.” | “Delegation can remove permissions, shorten expiry, or reduce budget; it cannot widen any of them.” |
| “The snippets are intentionally boring.” | “Each implementation performs the same three comparisons, so differences between languages do not change the authorization rule.” |
| “The real power is in the gate.” | “The gate blocks certification unless the current claim passes and every retained counterexample still fails.” |
| “The system worked as designed.” | “The parent remained RED while either child was open; after both children passed, the checked assembly discharged the parent.” |

### Avoid commentary about the writing

Do not describe a passage, example, interface, or equation as elegant,
beautiful, simple, sophisticated, intuitive, approachable, impressive, or
boring. Make it possess those qualities.

Avoid phrases such as:

- “This example demonstrates…”
- “The following diagram makes this clear…”
- “In plain English…”
- “ELI5…”
- “Without the ceremony…”
- “The key takeaway is…”

State the explanation directly. Place the concrete image before the abstraction
when the subject is difficult, but do not announce that the language has been
simplified.

### Headers and callouts

Headers should name the subject, transition, or conclusion.

Prefer:

- “Delegation cannot widen authority”
- “Viscosity smooths directional disagreement”
- “Two open estimates remain”
- “A failed probe produces no verdict”

Avoid:

- “Boundary, not magic”
- “Where it gets interesting”
- “The hard part”
- “Why this matters”
- “A powerful idea”

Callout labels should name the rule they contain, such as `Attenuation
invariant`, `Failure condition`, `Open dependency`, or `Scope`. Do not use them
as taglines.

### Technical explanations

Start from a concrete object the reader can picture, then introduce notation,
then show what changes.

For mathematical passages:

1. define the object;
2. define the quantity being measured;
3. state the equation or inequality;
4. explain each term through its effect;
5. show the implication used by the larger argument;
6. distinguish proved steps from open steps.

Do not imply that a decomposition solves its parent. State whether the parent,
children, and assembly are `GREEN`, `RED`, or `BROKEN`. For the Navier–Stokes
material, distinguish:

- a theorem proved in Lean;
- a checked implication between claims;
- a measured conjecture;
- an open analytic estimate;
- the unresolved regularity apex.

When describing local repositories, verify claims against their source,
ledgers, probes, or history. Do not infer a stronger result from a suggestive
name.

### Tone

Use calm, declarative prose. Prefer concrete nouns and active verbs. Remove
throat-clearing, promotional emphasis, and attempts to sound formidable.

The cypherpunk character comes from bounded authority, inspectable evidence,
pseudonymous continuity, and deliberate disclosure. Do not announce it through
“hacker” language, security theatre, anti-establishment slogans, or claims
about privacy features that are not relevant to the subject.

“Subtle power” is a design criterion, not site copy. The site should never
describe itself with that phrase.

## Visual language

- Reuse the color, type, spacing, and surface tokens in `global.css`.
- Preserve both light and dark themes.
- Keep reading columns narrow; let diagrams, code groups, and labs use the wider
  page measure when needed.
- Use restrained borders and tonal changes instead of card-heavy layouts.
- Use motion to reveal state or mechanism. Respect `prefers-reduced-motion`.
- Avoid neon palettes, fake terminals, scanlines, glitch effects, padlock
  imagery, and decorative cryptography.
- Keep interactive controls keyboard-accessible and label canvases or diagrams
  with a useful text alternative.

## Change discipline

- Preserve the Bun lockfile and the existing Astro architecture.
- Do not add a framework or client runtime for an interaction that can be
  implemented with an Astro component and scoped browser script.
- Do not expose private biographical data, filesystem paths, private repository
  locations, or cross-account identity links in published content.
- Keep unrelated working-tree changes intact.
- Run `bun run build` before considering a change complete.
