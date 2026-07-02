# Frontend Codemap

**Last Updated:** 2026-06-27
**Entry Points:** `/home/azureuser/blog/_layouts/default.html`, `/home/azureuser/blog/index.html`, `/home/azureuser/blog/style.scss`

## Architecture

```text
_layouts/default.html
  |- body.layout-* / body.page-* state classes
  |- .paper-grain + .paper-columns + .paper-motes
  |- .site-shell
  |   |- _includes/nav.html
  |   |- page content
  |   \- _includes/footer.html
  \- homepage slogan script + _includes/animations.html

index.html
  |- .content-wrap.home-folio
  |  \- .container
  |     |- .folio-hero
  |     |- .folio-stats
  |     |- .folio-section.spotlight
  |     |- pinned .ledger-list
  |     \- .index-grid
  |        |- .index-feed
  |        \- .index-aside
```

## Key Modules

| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `/home/azureuser/blog/_layouts/default.html` | Shared page wrapper, page-state classes, paper background layers | Page shell markup | `_includes/head.html`, `_includes/nav.html`, `_includes/footer.html`, `_includes/animations.html`, `page.layout`, `page.url` |
| `/home/azureuser/blog/index.html` | Homepage folio composition | Hero, latest post, pinned ledger, feed ledger, directory rail | `site.posts`, `site.tags`, `_data/i18n.yml`, `_includes/post-card.html` |
| `/home/azureuser/blog/_includes/nav.html` | Top navigation with active link state and seal brand | Nav markup | `page.url`, `site.baseurl`, `_data/i18n.yml` |
| `/home/azureuser/blog/_includes/footer.html` | Footer metadata and Busuanzi counters | Footer markup | `_data/i18n.yml`, `site.footer-text` |
| `/home/azureuser/blog/_includes/post-card.html` | Reusable ledger row for posts | Ledger entry markup | `post.excerpt`, `post.content`, `post.tags` |
| `/home/azureuser/blog/_sass/_shell.scss` | Global tokens, base typography, paper effects, nav, shared ledger, footer | CSS custom properties and shared styles | `style.scss` import order |
| `/home/azureuser/blog/_sass/_home.scss` | Homepage folio visuals and directory rail | Homepage-specific styles | Classes defined in `index.html`, tokens from `_shell.scss` |
| `/home/azureuser/blog/_sass/_content.scss` | Article typography, archive/tags, sticky TOC | Content and list-page styles | `_layouts/post.html`, `archive/index.html`, `tags/index.html` |
| `/home/azureuser/blog/_sass/_highlights.scss` | Rouge code highlighting | Code color rules | Code tokens from `_shell.scss` |
| `/home/azureuser/blog/_sass/_responsive.scss` | Named breakpoint behavior | Responsive overrides | Sass breakpoint variables and CSS tokens |

## Style Layers

```text
style.scss
  |- _sass/_reset.scss
  |- _sass/_shell.scss       # tokens + base + shared shell/components
  |- _sass/_home.scss        # homepage folio
  |- _sass/_content.scss     # posts/pages/archive/tags/TOC
  |- _sass/_about.scss       # about page cards and seal
  |- _sass/_highlights.scss  # Rouge highlighting
  \- _sass/_responsive.scss  # breakpoint overrides
```

## Data Flow

- `default.html` computes `page_kind` and adds `layout-*` / `page-*` body classes for layout-aware styling.
- `index.html` selects `latest_post`, `pinned_posts`, and `feed_posts` from `site.posts`, then passes each post to `_includes/post-card.html`.
- `_sass/_shell.scss` owns global token relationships; page partials consume those tokens rather than defining new global values.
- `_sass/_responsive.scss` uses named Sass breakpoints for content collapse, nav/hero collapse, and compact mobile behavior.

## External Dependencies

- `jekyll-paginate` - Limits homepage feed length using `site.paginate`
- `busuanzi` - Footer and page-view counters embedded via remote script include
- Optional comments: Utterances, Gitalk, or Disqus depending on `_config.yml`

## Related Areas

- [INDEX.md](./INDEX.md)
- [content-and-posts.md](./content-and-posts.md)
