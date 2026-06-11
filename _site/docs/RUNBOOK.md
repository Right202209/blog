# Runbook

This runbook reflects the current operational setup of this repository.

## Deployment Procedures

<!-- AUTO-GENERATED:DEPLOYMENT START -->
This repository is a Jekyll static site intended for GitHub Pages deployment.

### Primary deployment path
1. Update content, layouts, or styles in the repository.
2. Validate locally with the repository's current default setup:
   ```bash
   jekyll serve --baseurl /blog
   ```
3. If you have added a local `Gemfile`, you can also run:
   ```bash
   bundle exec jekyll build
   bundle exec jekyll serve
   ```
4. Publish through the repository's normal Git workflow.

### Automated content update path
1. Trigger `.github/workflows/issue-update.yml` with:
   - `issue_number`
   - `target_branch`
2. The workflow runs `.github/scripts/issue-update.js`.
3. If changes are created, the workflow rebases and pushes them to the target branch.
<!-- AUTO-GENERATED:DEPLOYMENT END -->

## Health Checks

<!-- AUTO-GENERATED:HEALTH START -->
There are no application health endpoints in this repository because the site is statically generated.

Operational checks are page- and build-based:
- local preview via `jekyll serve --baseurl /blog` renders expected routes
- if a local `Gemfile` exists, `bundle exec jekyll build` succeeds
- homepage renders the CRT shell, hero, featured spotlight, pinned highlights, feed cards, and info rail correctly
- post pages render read mode with metadata, sticky TOC, and pagination correctly
- `/archive` and `/tags` render without Liquid or JavaScript regressions
- responsive collapse and accessibility fallbacks from `_sass/_responsive.scss` behave correctly
- content automation updates produce valid Markdown/front matter output
<!-- AUTO-GENERATED:HEALTH END -->

## Common Issues

<!-- AUTO-GENERATED:ISSUES START -->
| Issue | Likely Cause | Fix |
|------|--------------|-----|
| Local preview fails to start | Ruby / Jekyll not installed locally | Install with `gem install jekyll bundler`. |
| `bundle exec jekyll ...` fails | No committed `Gemfile` in the repository | Use machine-level `jekyll` commands or add your own local `Gemfile`. |
| Content update workflow skips an issue | Missing `content-update` label or unauthorized author association | Add the label and ensure the issue author is `OWNER`, `MEMBER`, or `COLLABORATOR`. |
| Content update workflow errors on path | Invalid or unsafe path in issue fields | Use a relative path and follow type rules enforced by `.github/scripts/issue-update.js`. |
| Post automation creates unexpected file names | Slug is generated from title text | Check title/date fields and the script's slugification behavior. |
<!-- AUTO-GENERATED:ISSUES END -->

## Rollback Procedures

<!-- AUTO-GENERATED:ROLLBACK START -->
Rollback is Git-based:
1. Identify the last known good commit or branch state.
2. Revert the offending change with a normal Git revert or a replacement commit.
3. Revalidate the site locally with `jekyll serve --baseurl /blog`.
4. If a local `Gemfile` exists, optionally run `bundle exec jekyll build`.
5. Republish through the normal Git workflow.

For issue-driven updates, revert the commit produced by `.github/scripts/issue-update.js` or restore the affected content file manually.
<!-- AUTO-GENERATED:ROLLBACK END -->

## Alerting and Escalation

<!-- AUTO-GENERATED:ALERTING START -->
There is no repository-local alerting configuration, pager integration, or on-call escalation policy checked into this project.

Recommended escalation path for this repository:
1. Check GitHub Actions workflow status if the issue-update automation is involved.
2. Inspect the changed content, `_config.yml`, layouts, and Sass partials.
3. Rebuild locally to reproduce the failure.
4. Use normal repository review/PR workflow to land the fix.
<!-- AUTO-GENERATED:ALERTING END -->

## Staleness Review

<!-- AUTO-GENERATED:STALENESS START -->
No pre-existing `docs/*.md` files were available in the repository to compare against source changes, so there are no repository-tracked documentation files to flag as 90+ day stale in this pass.

Source-of-truth files inspected for this update:
- `README.md`
- `README_EN.md`
- `CLAUDE.md`
- `_config.yml`
- `.github/workflows/issue-update.yml`
- `.github/scripts/issue-update.js`

Because this repository does not keep timestamp metadata in version-controlled documentation, staleness should be reviewed from Git history rather than filesystem modification times.
<!-- AUTO-GENERATED:STALENESS END -->
