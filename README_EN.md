# Right's Blog

A Jekyll-based personal blog for GitHub Pages deployment.

Chinese version: `README.md`

## Current Features

- Ink & Paper editorial theme with warm paper, ruled columns, grain, faint ink motes, and vermilion seal accents
- Folio-style homepage with opening note, latest post, pinned entries, ledger feed, and directory rail
- Read-mode post layout with a focused content column plus sticky TOC that tracks the active heading while scrolling
- Pinned posts, tags, archive timeline, and pagination
- Optional integrations: MathJax 3, Utterances / Gitalk / Disqus, Busuanzi stats

## Theme Structure Overview

- `_layouts/default.html`: injects the paper background layers, shared `site-shell`, top navigation, footer, and homepage slogan script
- `index.html`: homepage folio composed of hero, latest post, pinned entries, ledger feed, and directory rail
- `_layouts/post.html`: read-mode post template with back link, reading time, tags, and optional TOC rail
- `_sass/_shell.scss`: global tokens, base typography, paper effects, navigation, shared ledger components, and footer
- `_sass/_home.scss`: homepage folio, opening note, seal, stats row, and directory rail styling
- `_sass/_content.scss`: post typography, archive/tag list styling, and TOC presentation
- `_sass/_highlights.scss`: Rouge code highlighting
- `_sass/_responsive.scss`: responsive column collapse, compact mobile behavior, and reduced-motion handling

## Project Structure

- `index.html`: homepage folio hero, ledger feed, and directory rail
- `style.scss`: global Sass entry point for partials, motion, and responsive layout
- `_layouts/`: default, page, and post layouts
- `_includes/`: nav, footer, TOC, comments, and metadata fragments
- `_posts/`: blog posts
- `_config.yml`: site metadata and feature configuration

## Local Development

This repository currently does not include a `Gemfile`, so local preview depends on your machine-wide Jekyll setup.

1. Install Ruby
2. Install Jekyll:
   ```bash
   gem install jekyll bundler
   ```
3. Start the site:
   ```bash
   jekyll serve --baseurl /blog
   ```
4. Open `http://localhost:4000/blog`

If you prefer `bundle exec jekyll serve`, add your own `Gemfile` first.

## Configuration

Main settings are in `_config.yml`:

- `name`: site name
- `description`: homepage headline / site description
- `url`: production domain
- `baseurl`: base path, currently `/blog`
- `avatar`: sidebar avatar
- `footer-links`: footer social links
- `utteranc.repo`: Utterances comment repository

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

- 2026-06-27: synchronized Ink & Paper theme docs and added frontend style token relationships
- 2026-03-22: updated repository docs, verification notes, and codemap coverage for the homepage and post theme refinements
- 2026-03-13: homepage upgraded to a two-column layout with an info rail
- 2026-03-13: article TOC now tracks the active section while scrolling
- 2026-03-13: full visual refresh with canvas-like background and card-based UI
- 2026-02-09: issue-driven content update workflow added

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
