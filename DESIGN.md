# Design System

This document extracts the active visual system from the Jekyll theme source, primarily `_sass/_shell.scss`, `_sass/_home.scss`, `_sass/_content.scss`, `_sass/_about.scss`, `_sass/_highlights.scss`, and `_sass/_responsive.scss`.

## Visual Atmosphere

The site uses an "Ink & Paper" editorial atmosphere: quiet, evidence-led, and text-first. The visual reference is a classical manuscript or research folio rather than a modern card dashboard.

Core traits:

- Warm off-white paper base with subtle radial light and shade.
- Fixed paper grain overlay with multiplied SVG noise.
- Faint vertical ruled columns in vermilion, like manuscript paper.
- Low-opacity background glyphs and ink-wash motes that drift with GSAP parallax.
- Vermilion seal marks, marginal labels, section ordinals, and small stamp-like badges.
- Thin hairline dividers and dashed rules instead of heavy containers.
- Minimal rounded corners, usually irregular seal-like radii from `2px` to `10px`.
- Motion is restrained: content rises softly, rules draw in, seals stamp into place, and reduced-motion users get static behavior.

The system should feel scholarly, archival, and tactile. Prefer evidence, reading flow, and typographic detail over decorative density.

## Color Palette

The active palette is defined as CSS custom properties in `_sass/_shell.scss`.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#fefefb` | Main page background and card surface |
| `--paper-deep` | `#f5f4ec` | Deeper paper shade |
| `--paper-shade` | `#eae8dc` | Recessed surfaces, code block background |
| `--ink` | `#28231a` | Primary text |
| `--ink-soft` | `#6e6553` | Secondary text, excerpts, nav links |
| `--ink-faint` | `#9c917a` | Metadata, quiet labels, inactive marks |
| `--vermilion` | `#b23a27` | Primary accent, links, seals, active states |
| `--vermilion-deep` | `#8c2b1c` | Accent hover, seal gradients, errors |
| `--hairline` | `rgba(40, 35, 26, 0.22)` | Primary dividers and borders |
| `--hairline-soft` | `rgba(40, 35, 26, 0.11)` | Secondary dividers and dashed rules |
| `--column-rule` | `rgba(178, 58, 39, 0.065)` | Faint manuscript column rules |

Additional highlight colors:

- Code surface: `#eae8dc`
- Code text: `#3a342a`
- Code comments: `#9a8d72`
- Code type/function blue: `#275f73`
- Code string olive: `#58702d`
- Code names/builtins ochre: `#6b4a12`, `#7a5418`
- Code numbers amber: `#9a6515`

Usage principles:

- Keep paper and ink dominant.
- Use vermilion sparingly for interaction, hierarchy, and seals.
- Use borders, dividers, and shaded paper instead of filled panels.
- Avoid introducing saturated colors unless they have semantic meaning in code highlighting or error states.

## Typography

The type system is serif-led and optimized for Chinese/English mixed writing.

| Token | Stack | Use |
| --- | --- | --- |
| `--font-display` | `"Noto Serif SC", "Songti SC", "SimSun", serif` | Headings, seals, nav, labels, section titles |
| `--font-body` | `"LXGW WenKai Screen", "Noto Serif SC", "Songti SC", serif` | Body copy and long-form reading |
| `--font-mono` | `"IBM Plex Mono", "Menlo", "Courier New", monospace` | Metadata, dates, code, technical labels |

Global settings:

- `html` base size: `17px`, reduced to `16px` under `480px`.
- Body line-height: `1.9`.
- Article entry line-height: `2`.
- Body text color: `--ink`.
- Font smoothing and `text-rendering: optimizeLegibility` are enabled.

Scale and weight:

- Home hero slogan: `2.35rem`, `900`, line-height `1.5`.
- Post title: `2rem`, `900`, line-height `1.55`.
- Entry headings: `h1 1.6rem`, `h2 1.4rem`, `h3 1.2rem`, smaller headings around `1rem`.
- Section headings: compact, display serif, wide letter spacing around `0.34em`.
- Metadata: mono, usually `0.7rem` to `0.8rem`, faint ink color.

Typographic motifs:

- `h2` and `h3` inside articles get a vermilion section mark before the text.
- Ordered lists use `cjk-ideographic` markers.
- Ledger numbers are converted to Chinese numerals in the post card include.
- Labels often use vertical writing on large screens and flatten on small screens.

## Component Styles

### Page Shell

- `.site-shell` sits above fixed paper effects with `z-index: 3`.
- `.container` uses `max-width: 1080px`, centered, with `28px` side padding.
- `.content-wrap` gives main content `40px 0 72px` vertical spacing.

### Background Effects

- `.paper-grain`: fixed full-screen SVG noise, `opacity: 0.5`, `mix-blend-mode: multiply`.
- `.paper-columns`: fixed repeating vertical rules every `72px`, masked at top and bottom.
- `.paper-motes`: fixed glyph and wash layers, animated with slow drift and scroll parallax.

### Navigation

- `.site-nav` is a horizontal flex row with a bottom hairline and `30px 28px 22px` padding.
- Brand combines a rotated vermilion `.brand-seal` with stacked name/subtitle.
- Nav links use display serif, letter spacing, soft ink color, and a vermilion underline that expands on hover or active state.
- Below `760px`, nav stacks vertically.

### Hero

- `.folio-hero` is a three-column grid: side label, main copy, seal.
- `.hero-side-label` is vertical on desktop with a left rule.
- `.hero-slogan` is large, heavy, and text-led rather than image-led.
- `.hero-actions a` are restrained outline buttons with `3px` radius, display serif, and slight upward hover motion.
- `.hero-seal` is a rotated vermilion stamp with inset highlights and a dark pressed shadow.

### Section Headings

- `.section-heading` pairs a small bordered ordinal seal with a heading and a trailing gradient rule.
- Use this for major homepage or index sections.
- Keep letter spacing wide but compact enough to avoid crowding on mobile.

### Ledger Entries

- `.ledger-entry` is the primary post-list item.
- Layout: `64px 1fr` grid, with the number in the first column.
- Rows use dashed soft dividers and a faint vermilion hover wash.
- Titles get a vermilion underline reveal on hover.
- Excerpts are soft ink, `0.92rem`, `1.85` line-height, clamped to two lines on desktop and three on narrow mobile.
- Optional `.entry-seal` is a small rotated outlined label.

### Article Pages

- `.post-layout` uses a main column plus `240px` sticky aside at desktop sizes.
- `.post-side-label` hangs in the left margin as a vertical vermilion stamp.
- `.header-rule` is a double hairline rule below the title/meta block.
- `.entry` owns long-form content styles: links, lists, blockquotes, images, tables, horizontal rules, and description lists.

Article content patterns:

- Links use vermilion underline and a faint vermilion hover background.
- Unordered list bullets are custom rotated vermilion diamonds.
- Blockquotes use a vermilion left border and a transparent linear wash.
- Images are centered with a hairline border, `2px` radius, `6px` padding, and translucent paper background.
- Horizontal rules render as three small vermilion diamonds.
- Tables use strong top and bottom ink rules with light internal dividers.

### Table of Contents

- `.content-aside` is sticky at `top: 32px`.
- `.toc-box` is a left-rule panel with no enclosing card.
- The summary label is display serif, vermilion, and uses triangle markers for collapsed/open states.
- TOC links use soft ink and become vermilion when active.
- Under `980px`, the TOC moves above content, loses the left rule, gains top/bottom rules, and starts collapsed through script.

### Archive, Tags, and Filters

- `.list-filter` is a compact inline label plus transparent search input.
- Inputs use only a bottom border; focus changes the border to vermilion.
- `.archive-row` is a baseline-aligned row with mono date, title, dashed divider, and faint vermilion hover wash.
- `.tags-nav a` are small outlined tag chips with `3px` radius.
- `.tag-group h2` uses a mono `#` prefix and a trailing gradient line.

### About Page

- `.about-stats` is a ruled statistics strip.
- `.stat-num` uses display serif, `900`, `1.8rem`, tabular numerals, and vermilion.
- `.about-grid` uses auto-fit cards with `minmax(180px, 1fr)`.
- `.about-card` is one of the few true card surfaces: paper background, soft hairline border, slight shadow, and irregular `6px 3px 6px 3px` radius.
- `.card-glyph` and `.about-seal` reuse the seal vocabulary.

### Code

- Inline code uses mono type, vermilion-deep text, faint vermilion background, hairline accent border, and `3px` radius.
- Code blocks are recessed paper sheets with `--paper-shade`, a hairline border, `3px` vermilion left rule, and horizontal scrolling.
- Rouge syntax colors stay muted and ink-like.

### Footer

- Footer shares the `1080px` max width and side padding with the main container.
- A double `.footer-rule` separates content from the footer.
- Footer links use mono type and soft ink, shifting to vermilion on hover.

## Layout Principles

Spacing and width:

- Use a single centered content width of `1080px`.
- Keep page sections unframed; use rules and whitespace for grouping.
- Prefer `40px` to `72px` vertical page rhythm and `52px` to `58px` section separation on desktop.
- Use narrow, readable text measures for excerpts and body copy instead of full-width text.

Grid behavior:

- Home index uses `minmax(0, 1fr) 260px` with `60px` column gap.
- Post pages use `minmax(0, 1fr) 240px` with `60px` column gap.
- Content falls back to a single column below `980px`.
- Sidebar modules become horizontal/wrapping groups on tablet.

Responsive breakpoints:

- `980px`: collapse post/index two-column layouts, move sticky asides into normal flow, simplify TOC borders.
- `760px`: stack nav, collapse hero to one column, shrink and absolutely position the hero seal, reduce title scale, tighten ledger rows.
- `480px`: reduce base font size, reduce side padding to `18px`, hide paper columns and motes, shrink hero seal and slogan.

Interaction and motion:

- Standard transitions are short, around `0.18s` to `0.25s`.
- Hover movement should be subtle, usually `translateY(-2px)` or a small seal rotation reset.
- Reveal animation uses `folio-rise`: opacity from `0` to `1`, `translateY(14px)` to `0`, duration `0.7s`.
- Always respect `prefers-reduced-motion: reduce`.

Implementation guidance:

- Extend the CSS custom properties in `:root` before adding unrelated colors.
- Reuse existing structural classes for posts, archive rows, tags, sections, and seals.
- Use hairlines, dashed rules, and paper shading before adding boxed cards.
- Cards are acceptable for repeated about-style content, but avoid wrapping whole page sections in card containers.
- Keep new UI quiet, typographic, and readable; vermilion should mark importance, not fill the page.
