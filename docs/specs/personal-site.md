# Personal Site Specification

Status: Proposed  
Audience: Site owner and implementers  
Source context: `random_stuff.md` plus direct review of the referenced
`navier_stokes`, `recurve`, `auths`, `auths-proof`, and `capsec` repositories.

## 1. Purpose

Build a personal site that presents its owner as both a deeply technical builder
and a thoughtful writer. The unifying idea is **making power and truth
legible**: identity should be verifiable, authority should be bounded, software
behavior should be explicit, and technical claims should carry evidence.

The site has two primary modes:

- **Profile** — a concise account of interests, selected work, and point of view.
- **Blog** — long-form technical and humanistic writing with first-class support
  for code, mathematics, diagrams, quotations, and prose.

The experience should feel calm, precise, literary, and durable. It should not
look like a résumé template, product landing page, or documentation portal.

## 2. Goals

- Make sophisticated technical essays pleasant to write and read.
- Support multiple programming-language versions of the same example in one
  tabbed code group.
- Render LaTeX mathematics, syntax-highlighted code, and Mermaid diagrams.
- Make topics discoverable through tags and a compact archive.
- Communicate the relationship between the owner's technical work and broader
  interests in agency, trust, institutions, language, and human behavior.
- Represent the referenced projects accurately, including their boundaries,
  assurance models, and honest limitations—not merely their technologies.
- Establish the online pseudonym as the site's complete public identity without
  implying, exposing, or requiring a connection to a legal identity.
- Keep maintenance file-based, type-safe, and component-driven.
- Produce a fast, accessible, responsive site with little or no client-side
  JavaScript outside interactive article elements.

## 3. Non-goals

- A full CMS or database-backed publishing system.
- Accounts, comments, likes, or other community features.
- A project management dashboard or exhaustive résumé.
- Publishing private biographical details that the source notes explicitly
  mark as unnecessary.
- “Hacker” styling: neon-on-black palettes, glitch effects, scanlines, code rain,
  cyberpunk stock imagery, padlock motifs, fake terminals, or theatrical
  security language.
- Custom code editors or executable playgrounds in the initial release.

## 4. Audience and success criteria

### Primary readers

- Engineers and researchers exploring the owner's technical work.
- Collaborators or hiring managers seeking a concise sense of craft and
  intellectual direction.
- General readers interested in essays about people, systems, trust, and
  meaning.

### Success criteria

- A new post can be published by adding one typed MDX file and its optional
  local assets.
- Authors can use all rich-content primitives without page-specific code.
- Every post is reachable from the blog index, tag pages, and its canonical URL.
- Core pages remain usable without client-side JavaScript; only enhanced
  interactions such as code tabs and diagram controls may depend on it.
- The profile is understandable within two minutes, while offering paths into
  deeper work.
- Lighthouse targets on production builds: at least 95 for accessibility, SEO,
  and best practices, and at least 90 for performance on mobile.

## 5. Information architecture

```text
/
├── /profile
├── /work
├── /blog
│   ├── /[slug]
│   └── /tags/[tag]
├── /rss.xml
├── /sitemap-index.xml
└── /404
```

### Global navigation

- Site name or wordmark links to the home page.
- Primary links: Profile, Work, Writing, Lab.
- Optional external links: GitHub and one professional/social destination.
- The active section is visually and programmatically identified.
- On narrow screens, navigation wraps or condenses without hiding primary links
  behind a JavaScript-only menu.

## 6. UX

### 6.1 Visual and editorial direction

- Editorial rather than promotional: generous whitespace, strong typography,
  quiet color, restrained motion.
- Body copy uses a highly readable serif; navigation, metadata, code, and
  utility labels use a complementary sans or mono face.
- Reading width is approximately 68–75 characters. Full-width content is
  reserved for code groups, wide tables, and diagrams.
- Light and dark themes follow the system setting and can be overridden by a
  persistent theme control.
- Color is used sparingly for links, tags, focus states, and technical
  annotation—not as decoration.
- Quotations and dialogues receive typographic treatment suitable for extended
  humanistic writing, not only short pull quotes.

### 6.2 Design language: subtle power

The design thesis is **subtle power**: a quiet, highly resolved surface with
unusually deep capability beneath it. The site should feel obvious to read
before the reader notices how much it can do.

“Simple” describes the interface, not the feature set. Advanced code groups,
mathematics, diagrams, dialogue, footnotes, and technical annotations must feel
like native parts of one editorial system—not plugins bolted onto a minimal
blog.

#### Core principles

| Principle | Requirement |
|---|---|
| **Restraint creates authority** | Use few colors, strong alignment, deliberate scale, and generous negative space. Nothing competes with the writing. |
| **Capability appears in context** | Controls appear where they are useful: language tabs on code, zoom on dense diagrams, anchors near headings. Do not advertise the feature set through dashboard-like chrome. |
| **Complexity is layered** | The default view is calm prose. Metadata, citations, source views, and technical controls are progressively disclosed without hiding essential content. |
| **Precision is decoration** | Baselines, optical spacing, syntax colors, mathematical rhythm, focus states, and transitions receive more attention than ornamental graphics. |
| **Confidence without spectacle** | Avoid gradients, oversized effects, excessive cards, glassmorphism, parallax, and animated flourishes. The work should feel powerful because it is exact. |
| **Durability over fashion** | The visual system should still feel appropriate in five years. Prefer editorial and typographic references over current SaaS conventions. |

#### Visual vocabulary

- Use a warm or neutral near-white canvas in light mode and an ink-like
  near-black in dark mode; neither theme uses pure white or pure black across
  large surfaces.
- Choose one restrained accent with enough chroma to signal action and
  identity. A muted electric blue, mineral green, or oxidized copper is
  appropriate; fluorescent “matrix green” is not.
- Treat typography as the primary visual material:
  - a precise, characterful serif for long-form prose;
  - a clean grotesk for navigation and metadata;
  - a technically excellent mono face for code, identifiers, and small
    cryptographic details.
- Use thin, high-contrast rules and tonal surface changes instead of shadows.
  Borders should feel engraved or architectural, not card-like.
- Corners are modestly softened, never bubbly. Dense technical surfaces may be
  squarer than navigation and buttons.
- Icons are rare, optically balanced, and never used when a short label is
  clearer.
- Motion communicates state change only. Transitions are short, low-distance,
  and fully removed under `prefers-reduced-motion`.

#### Feature expression

Rich technical elements share one visual grammar:

- Code groups use a minimal header rail for filename, language tabs, and copy.
  The rail should resemble a finely made instrument panel, not an IDE window.
- LaTeX sits naturally on the prose baseline and uses the surrounding text
  color; display equations gain space, not a decorative container.
- Mermaid diagrams use the site's type, line weights, spacing, and restrained
  accent palette. Default Mermaid styling must never leak into production.
- Tables favor alignment and hierarchy over boxed cells.
- Callouts are signaled by a quiet rule, label, and tonal shift rather than
  saturated backgrounds.
- Quotations and dialogue are as carefully designed as code. Technical content
  must not visually overpower humanistic writing.
- Wide content may temporarily break the reading column, but the prose returns
  to the same stable measure immediately afterward.

The quality bar is comparable to a tightly integrated premium consumer product,
but with the expressive range of a serious technical publishing system. A
reader should never have to understand the machinery in order to enjoy the
page.

#### Pseudonymous cypherpunk character

The pseudonym is the canonical public identity, not a coy placeholder for a
legal name. The site should project continuity, authorship, and accountability
without deanonymizing its owner.

Cypherpunk influence is expressed through **behavior and structure**:

- publish static, inspectable pages with minimal runtime code;
- use no trackers, ads, invasive analytics, fingerprinting, or third-party font
  requests;
- self-host essential assets and minimize third-party execution;
- make canonical source, publication dates, revisions, and repository links
  visible;
- support optional cryptographic verification of authored releases or a
  signed content manifest, presented as a quiet “Verify” detail rather than a
  security badge;
- expose an optional `/.well-known/` proof that binds the pseudonym only to
  intentionally public keys and accounts;
- clearly distinguish verified authorship from claims about legal identity.

The influence must **not** be expressed through hacker cosplay. Prohibited
motifs include green monospace body copy, fake shell prompts, hexadecimal
texture, glitch typography, skulls, masks, locks, anonymous silhouettes,
surveillance imagery, or aggressive “trust no one” copy.

The emotional tone is sovereign, private, literate, and composed. It should
suggest that the author understands cryptography deeply enough not to use it as
decoration.

#### Identity and privacy rules

- Use the pseudonym consistently in the wordmark, page titles, bylines, RSS,
  social cards, and structured data.
- Do not publish the legal name, school, exact childhood location, personal
  email address, image metadata, or cross-account identifiers unless explicitly
  approved for disclosure.
- External profile links are allowlisted individually after checking whether
  they expose unwanted identity connections.
- Strip EXIF and other metadata from published images and generated downloads.
- `Person` structured data identifies the pseudonymous public persona and
  includes only deliberately linked `sameAs` accounts.
- Contact uses an alias address or intentionally public channel associated with
  the pseudonym.
- Build and deployment output must not leak local filesystem paths, commit
  author emails, private repository URLs, or source-note content.

### 6.3 Home/profile page

The home page is the canonical profile page; `/profile` resolves to it or
contains the same content without duplication.

```text
+------------------------------------------------------------------+
| Name / mark                    Profile  Work  Writing  Lab  ◐    |
|------------------------------------------------------------------|
| I make consequential claims and powers explicit enough to       |
| inspect, constrain, and verify.                                  |
|                                                                  |
| [Read the writing]  [Explore the work]                           |
|------------------------------------------------------------------|
| About                                                            |
| Economics, language, institutions, philosophy, and the ways      |
| people relate to one another.                                    |
|------------------------------------------------------------------|
| Recent writing                                      [View all →] |
| Essay title                  tags                  date · 8 min   |
| Essay title                  tags                  date · 12 min  |
|------------------------------------------------------------------|
| Colophon / RSS / source / contact                                |
+------------------------------------------------------------------+
```

Content requirements:

- Open with a plain-language thesis, not a job title.
- Use this positioning direction: “I make consequential claims and powers
  explicit enough to inspect, constrain, and verify.” The final copy may be
  refined, but must retain its concrete meaning.
- Organize the technical work around five escalating questions:
  **Who acted? What were they allowed to do? What can the code do? What evidence
  makes a claim trustworthy? How far can this discipline reach?**
- Curate representative repositories instead of mirroring every repository.
- Connect economics, language, philosophy, and psychology to the technical
  themes through the shared questions of trust, agency, reciprocity,
  institutions, and bounded power. Do not force a false equivalence between
  social trust and cryptographic verification.
- Mention Japanese language/cultural interest only where it adds genuine
  context.
- Do not publish the school name, childhood location, or selective admissions
  details identified as unnecessary in the source notes.
- Include a small recent-writing section and an RSS link.
- Keep the selected-work collection on `/work`; the home page links to it
  without duplicating the project list.

#### Selected-work narrative

The project cards are not generic portfolio tiles. Each answers a question,
names a concrete mechanism, shows the evidence model, and states an honest
boundary.

| Order | Project | Question and accurate positioning |
|---|---|---|
| 1 | **Auths** | **Who acted?** Decentralized identity and signing for developers, software supply chains, and budgeted agents. KERI key-event histories and Git-carried attestations make key rotation and device authority independently verifiable; the MCP gateway signs, scopes, meters, and receipts tool calls so spend can be re-derived offline. |
| 2 | **Auths Proof** | **What were they allowed to do?** A strictly offline, effect-free reference kernel for proof-carrying authorization. It transforms untrusted bytes through sealed verification stages into a non-constructible `VerifiedAction`, with trust anchors, time, registries, limits, and adapter commitments supplied as explicit immutable input. Delegation must attenuate permissions, validity, audience, action constraints, budget, depth, status, and assurance rather than widen them. |
| 3 | **capsec** | **What can the code do?** Behavioral safety for Rust in three complementary layers: static discovery of ambient I/O, zero-cost capability proof types that expose permissions in function signatures, and revocable or expiring runtime capabilities. Its Lean model verifies core permission-lattice properties; the profile must also state that direct standard-library calls, unsafe code, and FFI remain boundaries addressed by auditing rather than erased by the type system. |
| 4 | **recurve** | **What evidence makes a claim trustworthy?** A framework that turns product promises into claims with executable probes and drives agent work from RED to GREEN behind a regression gate. A probe is admitted only after rejecting a retained known-bad trap; BROKEN is never treated as a verdict. The deterministic controller owns stopping while agents supply judgment inside bounded cycles. |
| 5 | **Navier–Stokes proof map** | **How far can the discipline reach?** A Lean 4, Mathlib, and recurve project building a machine-checked dependency map for the Clay Navier–Stokes problem. It deliberately does **not** claim to solve the Millennium problem: Clay-side nodes remain open, while proved 1D-model results validate parts of the method and gate. The central artifact is an honest, auditable map of what a proof or disproof would require. |

Each card includes:

- a one-sentence summary understandable without domain expertise;
- the central mechanism or invariant;
- one evidence link, such as documentation, a paper, formal proof, or
  representative source;
- technology labels only after the idea (`Rust`, `Lean 4`, `Python`, `KERI`,
  `Wasm`, etc.);
- maturity/status language taken from the repository rather than inferred;
- repository and documentation links;
- an optional “Read the story” link to a local project essay.

Do not use unstable numeric claims—such as test counts, claim counts, or current
open/closed totals—in profile copy unless generated from versioned project data.
Do not collapse Auths and Auths Proof into a single card: one is the broader
identity/signing system; the other is a deliberately pure offline authorization
kernel with a narrower trust boundary.

#### Humanistic through-line

The About section should make the connection by subject, not by résumé:

- Economics informs an interest in how rules and incentives shape action.
- Language and Japanese study inform an interest in context, interpretation,
  and relationships.
- Philosophy and psychology inform questions of trust, openness, judgment, and
  reciprocity.
- The personal dialogue in `random_stuff.md` can become an essay about
  vulnerability and sharing. It should be carefully edited to remove the
  captured Medium UI text and preserve the dialogue's unfinished, exploratory
  quality.

The key editorial distinction is that technical verification and human trust
are related concerns, not substitutes. The work bounds what a machine may claim
or do; the essays can explore what remains irreducibly social and human.

### 6.4 Blog index

```text
+------------------------------------------------------------------+
| Writing                                                          |
| Technical notes, essays, and unfinished ideas worth sharing.     |
|                                                                  |
| Tags: [All] [Authority] [Identity] [Types] [Math] [Human systems] |
|------------------------------------------------------------------|
| Featured                                                         |
| Title and two-line summary                         12 min · 2026 |
|------------------------------------------------------------------|
| All writing                                                      |
| 2026  Title                          tag, tag       date · 8 min  |
|       Title                          tag            date · 6 min  |
| 2025  Title                          tag, tag       date · 11 min |
+------------------------------------------------------------------+
```

- Default order is reverse chronological.
- One optional featured post appears before the archive.
- Tag links navigate to stable tag pages; filtering is not JavaScript-only.
- Each result includes title, description, publication date, reading time, and
  no more than three visible tags.
- Empty tag routes return a proper 404 rather than an empty archive.
- Pagination begins only when the archive exceeds 30 published posts.

### 6.5 Article page

```text
+------------------------------------------------------------------+
| Writing / Authority                                              |
|                                                                  |
| Article title that may wrap gracefully                           |
| Standfirst or concise description                                |
| 29 Jul 2026 · 12 min · Authority, Types                          |
|------------------------------------------------------------------|
| On this page                         (desktop, long posts only)    |
|------------------------------------------------------------------|
| Essay body: headings, prose, quotes, equations, diagrams, code   |
|                                                                  |
| +---------------- Code example -------------------------------+  |
| | [Rust] [TypeScript] [Python]                  [Copy]          |  |
| | syntax-highlighted content                                   |  |
| +--------------------------------------------------------------+  |
|------------------------------------------------------------------|
| Previous / Next                         Related writing          |
+------------------------------------------------------------------+
```

- Use semantic heading order, visible anchor links, and a generated table of
  contents for posts with at least three level-two headings.
- The title, description, and first paragraph should remain visually dominant;
  metadata is secondary.
- Footnotes, inline code, tables, task lists, callouts, and external links have
  consistent styles.
- External links are identified accessibly and do not forcibly open new tabs.
- Previous/next links follow publication order. Related posts are selected by
  shared tags, then recency, capped at three.

## 7. Content model

Use Astro Content Collections with a Zod schema. Posts live beside their local
images when practical.

```text
src/content/
├── blog/
│   └── article-slug/
│       ├── index.mdx
│       └── diagram.png
├── projects/
│   └── project-slug.mdx
└── config.ts
```

### Blog frontmatter

```yaml
title: "Bounded authority as a design material"
description: "A concise, plain-language summary used in archives and metadata."
publishedAt: 2026-07-29
updatedAt: 2026-08-02       # optional
tags: [authority, capability-security]
draft: false
featured: false
canonicalUrl:               # optional, only for cross-posted work
image: ./cover.png           # optional
imageAlt: "..."              # required when image is present
```

Validation rules:

- `title`: 1–90 characters.
- `description`: 50–180 characters.
- `tags`: 1–5 canonical, lowercase kebab-case values.
- `publishedAt`: required date; `updatedAt` cannot precede it.
- Drafts are excluded in production and visible with a clear banner in
  development.
- Duplicate slugs and unknown tags fail the build.
- A single tag registry owns display labels, descriptions, and ordering.

### Project frontmatter

```yaml
title: "Project name"
summary: "The problem and central idea."
question: "What evidence makes a claim trustworthy?"
mechanism: "Claims, falsifiable probes, retained traps, and a fleet-wide gate."
themes: [verification, agents]
technologies: [Python]
repository: "https://github.com/..."
documentation: "https://..."
evidence:
  - label: "Architecture"
    url: "https://..."
boundaries:
  - "Assurance is only as strong as the probe and its underlying oracle."
status: "active"             # canonical display value from a small registry
externalUrl:                 # optional project home
featured: true
order: 1
```

Project entries are editorial data, not a live mirror of README files. Claims
must be traceable to reviewed repository material. Time-sensitive facts are
either omitted, dated, or generated during a deliberate content-update step.

### Editorial conventions

- Use sentence case for titles and headings.
- Prefer descriptive link text.
- Every image has meaningful alt text or is explicitly marked decorative.
- Long quotations cite their author/source when applicable.
- Dialogue uses a dedicated `Dialogue` component rather than ad hoc bold labels.
- Dates are stored as ISO values and displayed in a consistent human-readable
  format.

## 8. Reusable content components

All components must work in MDX and inherit theme tokens.

### Required components

- `CodeGroup` and `Code` — synchronized language tabs, copy action, filename,
  optional highlighted lines, and accessible fallback.
- `Figure` — responsive image, caption, attribution, and optional wide layout.
- `Mermaid` — diagram source, rendered output, accessible label/description,
  theme support, and source fallback.
- `Math` — powered by remark/rehype processing and KaTeX for inline and display
  mathematics.
- `Callout` — `note`, `idea`, `warning`, and `aside` variants.
- `Quote` — short quotation with citation.
- `Dialogue` — speaker-aware long-form conversation.
- `Sidenote` / standard Markdown footnote — responsive annotation.
- `Tabs` — generic accessible tabs only when content semantics require them.
- `ProjectCard`, `PostCard`, `TagList`, `TableOfContents`, `ThemeToggle`,
  `PrevNext`, and `RelatedPosts`.

### Multi-language code contract

Authoring syntax:

```mdx
<CodeGroup label="Parse a capability">
  <Code language="rust" filename="src/lib.rs">
    {`fn parse(input: &str) -> Result<Capability> { ... }`}
  </Code>
  <Code language="typescript" filename="capability.ts">
    {`function parse(input: string): Capability { ... }`}
  </Code>
</CodeGroup>
```

Behavior:

- The first language is active by default.
- Selecting a language updates every code group on the current page that offers
  the same language; the preference persists locally.
- Tabs use the WAI-ARIA tabs pattern and support arrow-key navigation.
- All code remains in the generated HTML or a non-JavaScript fallback, so content
  is printable and recoverable when scripts fail.
- Copy copies only the active source, announces success through an `aria-live`
  region, and never includes line numbers.
- Long lines scroll horizontally; code never forces the page viewport wider.
- Syntax highlighting is performed at build time with Shiki.

### Mermaid contract

- Mermaid source is stored in the MDX document for version control.
- Rendering occurs at build time when the selected integration supports it;
  otherwise a small isolated client component renders after load.
- Diagram styling derives from site CSS variables in both themes.
- Every diagram requires an accessible title and prose description.
- Failed rendering displays the source and a readable error in development; the
  production build fails so broken diagrams are not published.
- Optional zoom/pan is enabled only for diagrams that overflow the reading
  column.

### Math contract

- `$...$` renders inline math and `$$...$$` renders display math.
- `remark-math` and `rehype-katex` render at build time.
- Display equations scroll horizontally on small screens.
- Equation numbering is opt-in; referenced equations require stable explicit
  identifiers.

## 9. Architecture

### 9.1 Technology decisions

- **Framework:** Astro in static-output mode.
- **Content:** MDX plus Astro Content Collections and Zod validation.
- **Styling:** scoped component CSS plus a small global design-token layer.
- **Code:** Shiki, rendered during build.
- **Math:** `remark-math`, `rehype-katex`, and KaTeX CSS.
- **Diagrams:** a Mermaid Astro/remark integration with a small custom wrapper
  for accessibility and theming.
- **Search:** no search in the initial release; tag and archive navigation are
  sufficient. Add a generated local index later if the archive grows.
- **Deployment:** static host with atomic deploys, immutable hashed assets, and
  preview builds for pull requests.

### 9.2 System diagram

```text
+----------------------+       +--------------------------+
| MDX posts & projects | ----> | Astro content validation |
+----------------------+       +-------------+------------+
                                             |
                  +--------------------------+-------------------+
                  |                          |                   |
                  v                          v                   v
       +-------------------+      +------------------+  +----------------+
       | Remark / Rehype   |      | Shiki code      |  | Mermaid render |
       | Markdown + KaTeX  |      | highlighting    |  | + validation   |
       +---------+---------+      +--------+---------+  +--------+-------+
                 |                         |                     |
                 +-------------------------+---------------------+
                                           |
                                           v
                              +-------------------------+
                              | Astro pages/components  |
                              +------------+------------+
                                           |
                                           v
                              +-------------------------+
                              | Static HTML/CSS/assets  |
                              | + minimal JS islands    |
                              +------------+------------+
                                           |
                                           v
                              +-------------------------+
                              | CDN / static hosting    |
                              +-------------------------+
```

### 9.3 Suggested source structure

```text
src/
├── components/
│   ├── content/            CodeGroup, Mermaid, Dialogue, Callout
│   ├── navigation/         Header, Footer, PrevNext
│   └── cards/              PostCard, ProjectCard
├── content/                blog and project MDX
├── data/                   tag registry and profile data
├── layouts/                BaseLayout, ArticleLayout
├── pages/                  routes, RSS, and generated tag pages
├── styles/                 tokens, global, prose, and code
└── utils/                  dates, reading time, related posts, slugs
public/
└── fonts/                  self-hosted, subset fonts
```

### 9.4 Rendering and hydration

- Pages, prose, code highlighting, metadata, RSS, and tag indexes are generated
  at build time.
- Hydrate only `ThemeToggle`, `CodeGroup`, and optional Mermaid zoom controls.
- Components default to server-rendered HTML and progressively enhance.
- Avoid a shared client bundle for components that do not require interaction.

## 10. APIs and internal interfaces

The initial release has no runtime application API. Its stable interfaces are
build-time content and component contracts.

### Routes

| Method | Route | Result |
|---|---|---|
| `GET` | `/` | Profile, selected work, recent posts |
| `GET` | `/profile` | Redirect to `/` |
| `GET` | `/blog` | Writing archive |
| `GET` | `/blog/[slug]` | Published article |
| `GET` | `/blog/tags/[tag]` | Posts for a canonical tag |
| `GET` | `/projects/[slug]` | Optional project narrative |
| `GET` | `/rss.xml` | Full or summary RSS feed |
| `GET` | `/sitemap-index.xml` | Generated sitemap |

### Component interfaces

```ts
type CodeGroupProps = {
  label: string;
  syncSelection?: boolean; // default true
  children: CodeInstance[];
};

type CodeProps = {
  language: string;
  filename?: string;
  highlight?: string; // e.g. "1,3-5"
  children: string;
};

type MermaidProps = {
  title: string;
  description: string;
  source: string;
  wide?: boolean;
};

type DialogueTurn = {
  speaker: string;
  children: MDXContent;
};
```

Component props are validated in development and documented through examples in
an internal `/style-guide` route that is excluded from the production sitemap.

## 11. Design system

Define semantic tokens rather than one-off values:

- Color: `canvas`, `surface`, `text`, `muted`, `border`, `accent`,
  `accent-contrast`, `code-canvas`, and status variants.
- Type: `display`, `body`, `utility`, and `mono` families with a fluid scale.
- Space: a compact modular scale shared by prose and layout components.
- Width: `reading`, `wide`, and `page`.
- Motion: short transition tokens, disabled by `prefers-reduced-motion`.

Typography and syntax themes must meet WCAG AA contrast in both light and dark
modes. The site should use no more than three font families and should self-host
subset WOFF2 files to avoid layout shift and third-party tracking.

## 12. Accessibility

- Meet WCAG 2.2 AA for all first-party pages and components.
- Provide a skip link, visible keyboard focus, landmarks, and a single `h1`.
- Respect reduced motion, increased contrast where available, and browser zoom
  up to 200%.
- All tab interfaces are fully keyboard-operable and announce state.
- Do not rely on color alone for active tags, warnings, or code highlights.
- Tables receive captions or nearby context and scroll within their own
  container on narrow screens.
- Mermaid diagrams include equivalent prose; mathematics keeps accessible MathML
  when supported by the rendering pipeline.

## 13. SEO, syndication, and privacy

- Generate canonical URLs, Open Graph metadata, social images, sitemap, RSS,
  and JSON-LD `Person` / `BlogPosting` data.
- Treat the pseudonym as the author name everywhere. Metadata must not infer or
  embed a legal identity.
- Social cards use a deterministic template and never block publication if no
  custom image is supplied.
- Set descriptive page titles and unique meta descriptions.
- Preserve stable post URLs; use redirects when a slug must change.
- Use privacy-preserving, cookieless analytics only if measurement becomes
  necessary. The default release has no analytics, ads, trackers, or cookie
  banner.

## 14. Performance and reliability

- Ship no JavaScript on pages that contain no interactive islands.
- Target less than 100 KB compressed first-party JavaScript on article pages;
  Mermaid may be lazy-loaded and isolated.
- Optimize responsive images at build time and always reserve their dimensions.
- Subset and preload only the critical font files.
- Cache fingerprinted assets for one year; HTML uses host-appropriate
  revalidation.
- CI fails on content-schema errors, broken internal links, malformed Mermaid,
  type errors, lint errors, or build failures.

## 15. Testing and verification

- Unit tests: tag normalization, reading time, related-post selection, date
  formatting, and code-language synchronization logic.
- Component tests: keyboard and screen-reader semantics for tabs, copy feedback,
  theme control, and navigation.
- Build tests: representative MDX fixture containing every content primitive.
- End-to-end tests: home → archive → tag → article; theme persistence; code tab
  synchronization; draft exclusion; 404 behavior.
- Automated checks: typecheck, lint, Astro build, broken links, accessibility
  smoke tests, and Lighthouse CI on core routes.
- Visual regression at desktop and mobile widths for the profile, archive,
  technical article, and prose-heavy article.
- Privacy checks scan production output for local absolute paths, private source
  URLs, non-allowlisted email addresses, and image metadata.
- Network inspection confirms that a normal page load makes no tracking,
  analytics, advertising, or third-party font requests.

## 16. Delivery sequence

1. **Foundation:** Astro project, tokens, typography, layouts, content schemas,
   metadata, and global navigation.
2. **Publishing:** blog/archive/tag routes, RSS, sitemap, drafts, article layout,
   and core Markdown styles.
3. **Technical content:** `CodeGroup`, Shiki, math, Mermaid, tables, callouts,
   footnotes, and the content fixture.
4. **Profile:** selected project data, profile narrative, recent writing, and
   project cards.
5. **Quality:** accessibility, responsive behavior, tests, performance budgets,
   social cards, and deployment previews.

## 17. Acceptance criteria

- `/`, `/blog`, at least one `/blog/[slug]`, and at least one
  `/blog/tags/[tag]` route build successfully as static HTML.
- The profile presents the five selected projects through the shared themes of
  identity, bounded authority, behavioral safety, falsifiable evidence, and
  formal verification, with a concise humanistic through-line and without
  exposing excluded personal details.
- The profile includes distinct, source-accurate cards for Auths, Auths Proof,
  capsec, recurve, and the Navier–Stokes proof map. Each card states a mechanism,
  evidence source, and boundary; the Navier–Stokes card explicitly disclaims a
  solution to the Clay problem.
- One fixture article demonstrates headings, paragraphs, a long quotation,
  dialogue, inline and display math, footnotes, a table, a Mermaid diagram,
  a callout, and a three-language code group.
- Code tabs work with mouse, keyboard, touch, and JavaScript-disabled fallback;
  copy and cross-group language synchronization behave as specified.
- Light and dark themes correctly style prose, code, diagrams, math, and focus
  states.
- At 390 px, 768 px, and 1440 px widths, the full technical-content fixture
  preserves a calm reading hierarchy: advanced controls appear only on their
  relevant component and never turn the article into an IDE or dashboard.
- The production design contains none of the prohibited hacker or cyberpunk
  motifs in Section 6.2. Its cypherpunk character is conveyed through
  pseudonymity, privacy, inspectability, provenance, and optional verification.
- The pseudonym is the only author identity in visible copy, feeds, social
  cards, and structured data; a production-output privacy scan finds no
  unapproved legal name, email, local path, private URL, or image metadata.
- Tags are schema-validated and generate navigable archive pages.
- Draft content is absent from production output.
- RSS, sitemap, canonical metadata, and structured data validate.
- The automated quality checks in Section 15 pass, including the Lighthouse
  targets in Section 4.
