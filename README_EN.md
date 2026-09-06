# Droit · Notes

A Jekyll blog at `/blog`, matching the Droit personal homepage in the `optimization-patch` branch of `Right202209.github.io`.

Chinese version: [README.md](README.md)

## Current Theme

- Shared Droit portrait, name, and signature, with charcoal gradients, gray text, fine rules, and orange interactions
- Centered profile, latest note, paginated feed, selected notes, topics, and year links
- Reading metadata, an active-section TOC, dark code blocks, and previous/next navigation
- Archives by year and notes by topic, with search, distinct result counts, and empty states
- Local SVG icons, system fonts, keyboard navigation, mobile layouts, reading without JavaScript, and reduced motion
- Optional MathJax and lazy Utterances / Gitalk / Disqus comments

## Theme Structure

- `_layouts/default.html`: background, navigation, skip link, main content, footer, and local script
- `index.html` and `_includes/post-card.html`: homepage and paginated notes
- `_layouts/post.html`: articles, metadata, optional TOC, and comments
- `_sass/_shell.scss`: shared palette, typography, layout tokens, and components
- `_sass/_home.scss`, `_content.scss`, and `_about.scss`: page layouts
- `_sass/_highlights.scss` and `_responsive.scss`: syntax colors and responsive behavior
- `assets/js/site.js`: filtering and TOC interactions

See [DESIGN.md](DESIGN.md) for design rules and [CONTRIBUTING.md](docs/CONTRIBUTING.md) for development.

## Local Development

With Ruby and Bundler installed, run:

```bash
bundle install
bundle exec jekyll serve --baseurl /blog
```

Open `http://localhost:4000/blog/`. Validate the build with:

```bash
bundle exec jekyll build --strict_front_matter
```

The Gemfile uses GitHub Pages-compatible Jekyll 3.10 and the existing plugins.

## Configuration

In `_config.yml`:

- `name`, `description`, `tagline`: shared profile identity
- `home_url`: main personal homepage
- `url`, `baseurl`: production origin and blog path
- `avatar`, `favicon`: local portrait and icon
- `footer-links`: social links
- `utteranc.repo`: comment repository; the default theme is dark

## Update via GitHub Issue

You can use a GitHub Issue with the `Content Update` template to create, update, or delete content.

### Fields

- `Action`: `create` / `update` / `delete`
- `Type`: `post` / `page` / `file`
- `Path`: target file path, optional when creating a post
- `Title` / `Date`: required for post creation or update
- `Tags`: comma-separated
- `Published`: `true` / `false`
- `Content`: Markdown body

### Auto-generation Rules

- If `Type=post` and `Path` is empty, the workflow creates `_posts/YYYY-MM-DD-<slug>-<issue号>.md`
- `<slug>` is derived from the title in lowercase and sanitized
- Common front matter is auto-filled, such as `layout`, `title`, `date`, `author`, `tags`, `toc`, and `pinned`

## Recent Updates

- 2026-09-06: matched the Droit homepage, refreshed reading and list layouts, fixed feed pagination, and added a Bundler build setup

- 2026-06-27: synchronized Ink & Paper theme docs and added frontend style token relationships
- 2026-03-22: updated repository docs, verification notes, and codemap coverage for the homepage and post theme refinements
- 2026-03-13: homepage upgraded to a two-column layout with an info rail
- 2026-03-13: article TOC now tracks the active section while scrolling
- 2026-03-13: full visual refresh with canvas-like background and card-based UI
- 2026-02-09: issue-driven content update workflow added

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
