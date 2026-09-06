# Codemap Index

**Last Updated:** 2026-09-06
**Entry Points:** `index.html`, `_layouts/default.html`, `_layouts/post.html`, `style.scss`

## Architecture

```text
_config.yml + _data/i18n.yml
          |
          v
_layouts/default.html -> _includes/nav.html + _includes/footer.html
          |
          +-> index.html (profile and paginated notes)
          |
          +-> _layouts/post.html (read-mode posts + TOC)
          |
          +-> archive/index.html + tags/index.html

style.scss
  |- _sass/_reset.scss
  |- _sass/_shell.scss
  |- _sass/_home.scss
  |- _sass/_content.scss
  |- _sass/_about.scss
  |- _sass/_highlights.scss
  \- _sass/_responsive.scss
```

## Areas

| Area | Purpose | Primary Files |
| --- | --- | --- |
| Frontend shell | Shared Droit dark theme, profile identity, nav, footer, style tokens | `_layouts/default.html`, `_includes/nav.html`, `_includes/footer.html`, `_sass/_shell.scss` |
| Homepage | Profile, latest note, paginator, pinned sidebar, topics, years | `index.html`, `_includes/post-card.html`, `_sass/_home.scss` |
| Post reading mode | Focused article layout, metadata, comments, sticky TOC | `_layouts/post.html`, `_includes/toc.html`, `_sass/_content.scss` |
| List pages | Archive and tag browsing with shared JavaScript filters | `archive/index.html`, `tags/index.html`, `_sass/_content.scss` |
| Responsive behavior | Named breakpoints, layout collapse, compact mobile behavior | `_sass/_responsive.scss` |

## Data Flow

- `_config.yml` supplies site metadata, permalink behavior, pagination size, comment integrations, and footer text.
- `_data/i18n.yml` supplies localized labels consumed by the homepage, nav, footer, post metadata, and TOC label.
- Jekyll collections (`site.posts`, `site.tags`) drive homepage lists, post navigation, archive rows, and tag groups.
- `style.scss` composes the Sass partials into the generated site stylesheet.

## Related Areas

- [frontend.md](./frontend.md)
- [content-and-posts.md](./content-and-posts.md)
- [operations.md](./operations.md)
