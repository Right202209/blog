# Operations Codemap

**Last Updated:** 2026-03-22
**Entry Points:** `/home/arch1/blog/_config.yml`, `/home/arch1/blog/docs/CONTRIBUTING.md`, `/home/arch1/blog/docs/RUNBOOK.md`

## Architecture

```text
_config.yml
  |- site metadata
  |- pagination + permalink settings
  |- plugin configuration
  \- comment integration settings

.github/workflows/issue-update.yml
  \- .github/scripts/issue-update.js
        \- creates/updates/deletes content files

Docs
  |- README.md / README_EN.md
  |- docs/CONTRIBUTING.md
  |- docs/RUNBOOK.md
  \- docs/CODEMAPS/*.md
```

## Key Modules
| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `/home/arch1/blog/_config.yml` | Source of truth for site metadata and enabled integrations | Jekyll config values | Jekyll runtime, layouts, footer/comment includes |
| `/home/arch1/blog/_data/i18n.yml` | Localized UI labels | `languages.zh` and `languages.en` maps | Nav, footer, homepage, post layout |
| `/home/arch1/blog/docs/CONTRIBUTING.md` | Contributor workflow and verification checklist | Maintainer guidance | Current commands, layouts, style structure |
| `/home/arch1/blog/docs/RUNBOOK.md` | Operational validation and rollback guidance | Operational notes | Local preview flow, automation workflow |
| `/home/arch1/blog/.github/workflows/issue-update.yml` | Automation entry point for issue-driven content edits | GitHub Actions workflow | `.github/scripts/issue-update.js` |
| `/home/arch1/blog/.github/scripts/issue-update.js` | Parses and applies content update issues | Node script behavior | Issue template, filesystem content paths |

## Data Flow
- `_config.yml` and `_data/i18n.yml` feed the visible theme copy and feature switches used by layouts and includes.
- Documentation files summarize the verified current state of the homepage dashboard, post read mode, and automation workflow.
- The issue-update workflow consumes issue fields, writes Markdown or other repository files, and relies on the same front matter conventions documented in README and CONTRIBUTING.

## External Dependencies
- `jekyll-sitemap` - Generates the sitemap for the published site
- `jekyll-feed` - Generates the Atom feed
- `jekyll-paginate` - Controls homepage pagination/feed slicing
- GitHub Actions - Runs the issue-driven content update workflow

## Related Areas
- [INDEX.md](./INDEX.md)
- [frontend.md](./frontend.md)
- [content-and-posts.md](./content-and-posts.md)
