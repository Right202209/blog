# Frontend

The blog is a Jekyll site whose current visual reference is the Droit personal homepage on `optimization-patch`.

## Rendering

- `_layouts/default.html` provides the dark background, skip link, navigation, main landmark, footer, and local script.
- `index.html` renders the centered profile, latest note, chronological paginator, pinned sidebar, topics, and years.
- `_includes/post-card.html` renders a dated note excerpt with author, tags, and pinned marker.
- `_layouts/post.html` renders reading metadata, the article, optional TOC, lazy comments, and previous/next posts.
- `_layouts/page.html` provides the common page header for archive, tags, about, and 404.
- `archive/index.html` groups posts by year; `tags/index.html` groups them by topic.
- `_includes/list-filter.html` supplies accessible search controls and a live result message.
- `_includes/icon.html` supplies local inline SVG icons.

## Styles and interactions

`style.scss` imports reset, shell, home, content, about, highlights, and responsive partials. Active tokens live in `_sass/_shell.scss`; see [DESIGN.md](../../DESIGN.md) for the palette and layout rules.

`assets/js/site.js` handles archive/tag filtering, clears filters when selecting a topic, collapses the TOC on mobile, and tracks the current section. CSS supplies motion with a reduced-motion fallback. No GSAP or remote font is required.

MathJax is configured before its asynchronous script and loads on posts or pages with `math: true`. Comment providers load only after the reader requests them.

## Data and routes

Identity and the main homepage URL come from `_config.yml`. Interface translations live in `_data/i18n.yml`. Posts and tags remain driven by Jekyll collections. Local links use `relative_url` so nested pages and `/blog` assets resolve consistently.

## Validation

Use `bundle exec jekyll build --strict_front_matter` and inspect the generated site at desktop and mobile widths. Cover subsequent feed pages, filter results, tag/year anchors, long code and tables, math, TOC navigation, keyboard focus, and reduced motion.
