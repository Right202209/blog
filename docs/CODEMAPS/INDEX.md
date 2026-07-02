# Codemap Index

**Last Updated:** 2026-06-27
**Entry Points:** `/home/azureuser/blog/index.html`, `/home/azureuser/blog/_layouts/default.html`, `/home/azureuser/blog/_layouts/post.html`, `/home/azureuser/blog/style.scss`

## Architecture

```text
_config.yml + _data/i18n.yml
          |
          v
_layouts/default.html -> _includes/nav.html + _includes/footer.html
          |
          +-> index.html (homepage folio)
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
| Frontend shell | Shared Ink & Paper page shell, paper effects, nav, footer, style tokens | `/home/azureuser/blog/_layouts/default.html`, `/home/azureuser/blog/_includes/nav.html`, `/home/azureuser/blog/_includes/footer.html`, `/home/azureuser/blog/_sass/_shell.scss` |
| Homepage folio | Hero, latest post, pinned ledger, feed ledger, directory rail | `/home/azureuser/blog/index.html`, `/home/azureuser/blog/_includes/post-card.html`, `/home/azureuser/blog/_sass/_home.scss` |
| Post reading mode | Focused article layout, metadata, comments, sticky TOC | `/home/azureuser/blog/_layouts/post.html`, `/home/azureuser/blog/_includes/toc.html`, `/home/azureuser/blog/_sass/_content.scss` |
| List pages | Archive and tag browsing with inline filters | `/home/azureuser/blog/archive/index.html`, `/home/azureuser/blog/tags/index.html`, `/home/azureuser/blog/_sass/_content.scss` |
| Responsive behavior | Named breakpoints, layout collapse, compact mobile behavior | `/home/azureuser/blog/_sass/_responsive.scss` |

## Data Flow

- `_config.yml` supplies site metadata, permalink behavior, pagination size, comment integrations, and footer text.
- `_data/i18n.yml` supplies localized labels consumed by the homepage, nav, footer, post metadata, and TOC label.
- Jekyll collections (`site.posts`, `site.tags`) drive homepage ledgers, post navigation, archive rows, and tag groups.
- `style.scss` composes the Sass partials into the generated site stylesheet.

## Related Areas

- [frontend.md](./frontend.md)
- [content-and-posts.md](./content-and-posts.md)
- [operations.md](./operations.md)
