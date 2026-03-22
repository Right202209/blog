# Frontend Codemap

**Last Updated:** 2026-03-22
**Entry Points:** `/home/arch1/blog/_layouts/default.html`, `/home/arch1/blog/index.html`, `/home/arch1/blog/style.scss`

## Architecture

```text
_layouts/default.html
  |- body.layout-home / body.read-mode state classes
  |- .background + .cover
  |- .site-shell
  |   \- .shell-frame
  |       |- _includes/nav.html
  |       |- page content
  |       \- _includes/footer.html
  \- rotating slogan script (#slogan on homepage)

index.html
  |- .dashboard-hero
  |- .dashboard-main
  |   |- spotlight panel
  |   |- pinned highlight grid
  |   \- feed list
  \- .dashboard-aside
      |- overview panel
      \- topics panel
```

## Key Modules
| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `/home/arch1/blog/_layouts/default.html` | Shared page wrapper and runtime page-state classes | Page shell markup | `_includes/head.html`, `_includes/nav.html`, `_includes/footer.html`, `page.layout`, `page.url` |
| `/home/arch1/blog/index.html` | Homepage dashboard composition | Homepage content tree | `site.posts`, `site.tags`, `_data/i18n.yml`, `_includes/post-card.html` |
| `/home/arch1/blog/_includes/nav.html` | Sticky top navigation with active link state | Nav markup | `page.url`, `site.baseurl`, `_data/i18n.yml` |
| `/home/arch1/blog/_includes/footer.html` | Footer metadata and Busuanzi counters | Footer markup | `_data/i18n.yml`, `site.footer-text` |
| `/home/arch1/blog/_includes/post-card.html` | Reusable homepage card for posts | Card markup include | `post.excerpt`, `post.content`, `post.tags` |
| `/home/arch1/blog/_sass/_shell.scss` | CRT shell, shell frame, navigation, shared panel styling | Global shell styles | CSS variables, layout state classes |
| `/home/arch1/blog/_sass/_home.scss` | Homepage panel and dashboard visuals | Homepage-specific styles | Classes defined in `index.html` |
| `/home/arch1/blog/_sass/_responsive.scss` | Responsive collapse and accessibility fallbacks | Media-query behavior | Shared classes from shell/home/content partials |

## Data Flow
- `default.html` computes `is_home` and `is_post`, then adds `layout-home` and `read-mode` body classes that Sass uses to switch layout behavior.
- `index.html` selects `latest_post`, `pinned_posts`, and `feed_posts` from `site.posts`, then passes each post to `_includes/post-card.html`.
- `_sass/_shell.scss` provides the shared CRT visuals; `_sass/_home.scss` layers homepage-specific spacing, panel sizing, and dashboard card presentation.
- `_sass/_responsive.scss` collapses the two-column dashboard and read-mode layouts below 1100px and simplifies effects for reduced motion/transparency preferences.

## External Dependencies
- `jekyll-paginate` - Limits homepage feed length using `site.paginate`
- `busuanzi` - Footer and page-view counters embedded via remote script include

## Related Areas
- [INDEX.md](./INDEX.md)
- [content-and-posts.md](./content-and-posts.md)
