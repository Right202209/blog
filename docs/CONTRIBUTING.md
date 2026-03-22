# Contributing

This document summarizes the current development workflow for this Jekyll blog repository.

## Development Environment

### Prerequisites
- Ruby installed locally
- Jekyll available on your machine
- Bundler available if you choose to use `bundle exec`

### Setup
1. Install Ruby on your machine.
2. Install Jekyll and Bundler:
   ```bash
   gem install jekyll bundler
   ```
3. Start the local site preview from the repository root:
   ```bash
   jekyll serve --baseurl /blog
   ```
4. Open `http://localhost:4000/blog` in your browser.

> Note: this repository currently does not include a committed `Gemfile`, so `bundle exec` commands depend on you adding your own Bundler setup first.

## Available Commands

<!-- AUTO-GENERATED:COMMANDS START -->
| Command | Description |
|---------|-------------|
| `gem install jekyll bundler` | Install local Jekyll and Bundler tooling on a machine without repository-managed dependencies. |
| `jekyll serve --baseurl /blog` | Start a local development server for the blog at `http://localhost:4000/blog`. |
| `bundle install` | Install dependencies only if you add or restore a local `Gemfile` workflow. |
| `bundle exec jekyll serve` | Start the site through Bundler when a local `Gemfile` is present. |
| `bundle exec jekyll build` | Build the static site through Bundler when a local `Gemfile` is present. |
| `bundle exec jekyll clean` | Remove generated build artifacts through Bundler when a local `Gemfile` is present. |
<!-- AUTO-GENERATED:COMMANDS END -->

## Testing and Verification

<!-- AUTO-GENERATED:TESTING START -->
Current repository verification is build- and rendering-oriented:

1. Run a local preview with the repository's current default setup:
   ```bash
   jekyll serve --baseurl /blog
   ```
2. If you have added a local `Gemfile`, you can also verify through Bundler:
   ```bash
   bundle exec jekyll build
   bundle exec jekyll serve
   ```
3. Manually verify key pages:
   - homepage
   - a normal post page
   - `/archive`
   - `/tags`
4. For content automation changes, review `.github/workflows/issue-update.yml` and `.github/scripts/issue-update.js` together and validate the expected file paths and front matter output.

There is no repository-local unit test suite, package script runner, or committed CI test harness beyond the issue-update workflow.
<!-- AUTO-GENERATED:TESTING END -->

## Code Style and Workflow

<!-- AUTO-GENERATED:STYLE START -->
- Templates are Jekyll/Liquid-based and should keep using existing site data sources such as `site.posts`, `site.tags`, and `_config.yml`.
- Global styles are compiled from `style.scss`, which now imports focused Sass partials from `_sass/`.
- Blog posts live in `_posts/` and currently use front matter such as `layout`, `title`, `date`, `Author`, `tags`, `comments`, `toc`, `pinned`, and `published`.
- Prefer small, focused edits and preserve the existing shell/layout structure unless a task explicitly calls for broader refactoring.
<!-- AUTO-GENERATED:STYLE END -->

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

- [ ] Preview the site locally
- [ ] Verify homepage, post, archive, and tags pages still render correctly
- [ ] Confirm Liquid templates compile without errors
- [ ] Confirm Sass changes compile correctly
- [ ] If changing issue automation, verify the workflow and script stay aligned
- [ ] Keep generated documentation sections in sync with source-of-truth files
