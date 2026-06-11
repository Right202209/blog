# Codemap Index

**Last Updated:** 2026-03-22
**Entry Points:** `/home/arch1/blog/index.html`, `/home/arch1/blog/_layouts/default.html`, `/home/arch1/blog/_layouts/post.html`, `/home/arch1/blog/style.scss`

## Architecture

```text
_config.yml + _data/i18n.yml
          |
          v
_layouts/default.html -> _includes/nav.html + _includes/footer.html
          |
          +-> index.html (homepage dashboard)
          |
          +-> _layouts/post.html (read-mode posts + TOC)
          |
          +-> archive/index.html + tags/index.html

style.scss
  |- _sass/_shell.scss
  |- _sass/_home.scss
  |- _sass/_content.scss
  |- _sass/_highlights.scss
  \- _sass/_responsive.scss
```

## Areas
| Area | Purpose | Primary Files |
| --- | --- | --- |
| Frontend shell | Shared CRT frame, nav, footer, background | `/home/arch1/blog/_layouts/default.html`, `/home/arch1/blog/_includes/nav.html`, `/home/arch1/blog/_includes/footer.html`, `/home/arch1/blog/_sass/_shell.scss` |
| Homepage dashboard | Hero, featured latest post, pinned cards, feed, info rail | `/home/arch1/blog/index.html`, `/home/arch1/blog/_includes/post-card.html`, `/home/arch1/blog/_sass/_home.scss` |
| Post reading mode | Focused article layout, metadata, comments, sticky TOC | `/home/arch1/blog/_layouts/post.html`, `/home/arch1/blog/_includes/toc.html`, `/home/arch1/blog/_sass/_content.scss` |
| List pages | Archive and tag browsing with inline filters | `/home/arch1/blog/archive/index.html`, `/home/arch1/blog/tags/index.html`, `/home/arch1/blog/_sass/_content.scss` |
| Responsive behavior | Breakpoints and reduced-motion/transparency fallbacks | `/home/arch1/blog/_sass/_responsive.scss` |

## Data Flow
- `_config.yml` supplies site metadata, permalink behavior, pagination size, comment integrations, and footer text.
- `_data/i18n.yml` supplies localized labels consumed by the homepage, nav, footer, post metadata, and TOC label.
- Jekyll collections (`site.posts`, `site.tags`) drive homepage panels, post navigation, archive rows, and tag groups.
- `style.scss` composes the Sass partials into the generated site stylesheet.

## Related Areas
- [frontend.md](./frontend.md)
- [content-and-posts.md](./content-and-posts.md)
- [operations.md](./operations.md)
