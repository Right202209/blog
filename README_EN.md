# Right's Blog

A Jekyll-based personal blog hosted on GitHub Pages.

Chinese version: README.md

## Highlights

- Lightweight Jekyll setup
- Performance optimizations (Sass compression, MathJax 3, on-demand scripts)
- SEO-friendly metadata and canonical URLs
- Full features: pinned posts, TOC, tags, archive, optional comments

## Quick Start

### Local Development

Make sure Ruby and Bundler are installed.

1. Clone the repo
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000/blog`

### Config

Main settings live in `_config.yml`:
- `name`: your name
- `description`: blog description
- `url`: site domain
- `baseurl`: base path (default: `/blog`)

## Update via GitHub Issue

Open a GitHub Issue using the `Content Update` template to create, update, or delete content.

### Fields
- `Action`: `create` / `update` / `delete`
- `Type`: `post` / `page` / `file`
- `Path`: target file path (optional for new posts)
- `Title` / `Date`: required for post create/update
- `Tags`: comma-separated
- `Content`: Markdown body

### Post Example
- `Action`: create
- `Type`: post
- `Path`: (empty)
- `Title`: My Title
- `Date`: 2026-02-09
- `Tags`: document, continue
- `Content`: post body

### Page/File Example
- `Action`: update
- `Type`: page
- `Path`: about.md
- `Content`: full file content

## Recent Updates (2026-02-09)

- Issue-driven content updates
- Archive page redesigned as a vertical timeline
- Navigation cleanup

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
