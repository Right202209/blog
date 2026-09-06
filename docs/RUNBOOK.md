# Runbook

## Preview and build

This is a Jekyll static site intended for GitHub Pages at `/blog`.

```bash
bundle install
bundle exec jekyll build --strict_front_matter
bundle exec jekyll serve --baseurl /blog
```

Preview at `http://localhost:4000/blog/`. Build dependencies are tracked in `Gemfile`. Site content and permalink configuration remain in `_config.yml`.

## Checks before publishing

- The profile and dark theme match the personal homepage.
- The first and subsequent feed pages show the correct notes.
- Existing article URLs, archive years, tag anchors, RSS, and the main-site link resolve.
- Long articles, tables, code, math, TOC, and pagination render at desktop and mobile widths.
- Search handles title, tag, date, and no-result cases.
- Navigation and content work without animation dependencies or JavaScript.

Publish through the repository's normal GitHub Pages workflow after reviewing the local result.

## Issue-driven content updates

The existing `.github/workflows/issue-update.yml` accepts `issue_number` and `target_branch`. It checks out the target branch, runs `.github/scripts/issue-update.js`, and rebases and pushes generated changes.

Only authorized authors and issues labeled `content-update` are processed. Review the workflow and script together when changing automation.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Ruby or Bundler is missing | Install Ruby and Bundler before running the build commands |
| A gem cannot be found | Run `bundle install` from the repository root |
| Nested pages have missing assets | Check `baseurl` and use `relative_url` for local assets |
| Math does not render | Check the MathJax request; non-post pages require `math: true` |
| Comments do not appear | Check provider configuration and click the load-comments button |
| Issue automation skips content | Check its label, author association, target branch, and relative file path |

## Rollback

Revert the relevant Git commit, rebuild locally, verify the affected pages, and republish through the same deployment workflow. Content automation changes can be reverted by restoring the generated Markdown or its commit.
