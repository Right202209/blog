# Contributing

## Setup

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve --baseurl /blog
```

Preview at `http://localhost:4000/blog/`. Dependencies are declared in `Gemfile`.

## Commands

| Command | Purpose |
| --- | --- |
| `bundle install` | Install the repository's build dependencies |
| `bundle exec jekyll serve --baseurl /blog` | Preview the blog with its deployed base path |
| `bundle exec jekyll build --strict_front_matter` | Validate Liquid, Markdown, Sass, and page generation |
| `bundle exec jekyll clean` | Remove Jekyll-generated output |

## Frontend verification

Build first, then review the homepage, subsequent feed page, long article, math article, archive, tags, about, and 404. Cover desktop and 320–390px mobile widths, current navigation, article links, topic/year anchors, search and empty results, TOC scrolling and folding, keyboard focus, and reduced motion.

Verify that article text and navigation remain usable without JavaScript. Long code, tables, and formulas should scroll within their own containers. The default home and list pages need no third-party fonts or animation scripts.

There is no repository-local unit test runner. Changes are checked through the Jekyll build and browser rendering.

## Conventions

- Use existing Jekyll collections and front matter for posts, pinned notes, dates, authors, and tags.
- Use `relative_url` for local routes and assets; keep existing post permalinks.
- Extend the shared tokens in `_sass/_shell.scss` and consult [DESIGN.md](../DESIGN.md).
- Keep UI text in `_data/i18n.yml`, icons in `_includes/icon.html`, and shared interactions in `assets/js/site.js`.
- Update relevant theme documentation when changing the layout or build workflow.

## Content Update Workflow

<!-- AUTO-GENERATED:WORKFLOW START -->
The repository includes a GitHub Actions workflow for issue-driven content updates:

- Workflow file: `.github/workflows/issue-update.yml`
- Update script: `.github/scripts/issue-update.js`

### Supported inputs
| Input | Required | Description |
|-------|----------|-------------|
| `issue_number` | Yes | GitHub issue number to apply. |
| `target_branch` | Yes | Branch that receives the generated content change. |

### Behavior
- The workflow checks out the target branch.
- It runs `node .github/scripts/issue-update.js`.
- If the script commits changes, the workflow rebases and pushes back to the target branch.

### Script rules
- Only issues with the `content-update` label are processed.
- Only `OWNER`, `MEMBER`, and `COLLABORATOR` issue authors are authorized.
- Supported actions: `create`, `update`, `delete`.
- Supported types: `post`, `page`, `file`.
- For `post` creation with no explicit path, the script auto-generates `_posts/YYYY-MM-DD-<slug>-<issue-number>.md`.
<!-- AUTO-GENERATED:WORKFLOW END -->

## Pull Request Checklist

- [ ] Jekyll builds without Liquid or Sass errors
- [ ] Homepage, pagination, and pinned links render correctly
- [ ] Article metadata, code, tables, math, TOC, and navigation work
- [ ] Archive/tag filtering and anchors work, including no matches
- [ ] Mobile, keyboard focus, no-JavaScript reading, and reduced motion remain usable
- [ ] Documentation matches the final implementation
