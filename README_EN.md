# Right's Blog

A Jekyll-based personal blog for GitHub Pages deployment.

Chinese version: `README.md`

## Current Features

- Canvas-like background with layered gradients, grid lines, and soft light blobs
- Rich homepage layout with a main article column and an auxiliary info rail
- Homepage focus mode that collapses side content into a cleaner single-column view
- Scroll-following TOC for article pages
- Pinned posts, tags, archive timeline, and pagination
- Optional integrations: MathJax 3, Utterances / Gitalk / Disqus, Busuanzi stats

## Project Structure

- `index.html`: homepage hero, article stream, and info rail
- `style.scss`: global styles, motion, responsive layout, and canvas background
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

- 2026-03-13: homepage upgraded to a two-column layout with focus mode
- 2026-03-13: article TOC now tracks the active section while scrolling
- 2026-03-13: full visual refresh with canvas-like background and card-based UI
- 2026-02-09: issue-driven content update workflow added

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
