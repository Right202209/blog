# Droit · Notes

The blog follows the personal homepage in `Right202209.github.io` on the `optimization-patch` branch. It shares the profile image, Droit name, signature, charcoal gradient, quiet navigation, and orange interaction color.

## Visual language

- Background: a fixed radial gradient from `#313131` through `#222325` to `#0a0a0a`.
- Headings: soft white (`#f6f6f6`); body text: `#c5c7cc`; metadata: `#969ba5`.
- Accent: `#ff963b`, matching the homepage's link hover color. Reserve it for links, selected states, and small markers.
- Profile: the same 100px circular portrait, white 3px border, light Droit wordmark, and `Code & Input & Output` signature.
- Brand font: the homepage's Comic Sans MS / Helvetica Neue / Microsoft YaHei stack. Reading text uses a system sans-serif stack; code uses system monospace fonts.
- Surfaces: subtle translucent fills, 1px white hairlines, and modest corners. Use whitespace and rules to separate notes.
- Icons: local inline SVG from `_includes/icon.html`. No icon font or remote font is required.

## Source of truth

All active design tokens live in `_sass/_shell.scss`. The stylesheet entry point is `style.scss`.

| File | Responsibility |
| --- | --- |
| `_sass/_shell.scss` | Palette, typography, navigation, lists, footer, focus states |
| `_sass/_home.scss` | Centered profile, latest note, topics, years, and pinned sidebar |
| `_sass/_content.scss` | Reading layout, TOC, archives, search, comments, and tables |
| `_sass/_about.scss` | About statistics, subjects, and contact links |
| `_sass/_highlights.scss` | Dark Rouge syntax highlighting |
| `_sass/_responsive.scss` | Mobile, reduced motion, and print behavior |
| `assets/js/site.js` | Archive/tag filtering and responsive TOC tracking |

## Layout

The site is centered within 1120px, including 32px side padding. Desktop lists and articles use a flexible main column, a 232px aside, and a 64px gap.

The home profile links to the main personal page. Below it, the first page features the newest note. The chronological feed uses Jekyll's paginator; later pages render their own posts. Pinned notes remain available in the sidebar. Topic links and year links lead directly to their corresponding sections.

Reading pages keep the body visible without JavaScript. The TOC is sticky on desktop, with the current heading marked as the page scrolls. Pages without a TOC use a centered 760px reading column. Archive and tag pages group existing post data and expose search only when JavaScript is available.

## Responsive and accessible behavior

- At 980px, content becomes one column. The TOC moves above the article and starts collapsed; the home sidebar follows the list.
- At 760px, navigation stacks and spacing contracts.
- At 480px, side padding becomes 20px and the sidebar becomes one column.
- Text and browser zoom stay enabled. Code, tables, and display equations scroll within their own containers.
- Keep visible keyboard focus, semantic landmarks, active navigation, and a skip link.
- Motion is a short CSS entrance and subtle hover transitions. Respect `prefers-reduced-motion`.
- Search reports the number of distinct matching posts and provides an empty state. Choosing a topic clears a previous filter so its target remains visible.

## Shared identity and URLs

Set `name`, `description`, `tagline`, `home_url`, `avatar`, and `favicon` in `_config.yml`. The portrait and favicon are copied locally from the reference homepage to `images/droit.jpg` and `images/droit.ico`.

Use Jekyll's `relative_url` filter for local pages and assets. The deployed base path remains `/blog`, and existing post permalinks stay unchanged. The main-site link uses `home_url`.

## Verification

Run `bundle exec jekyll build --strict_front_matter` and preview with `bundle exec jekyll serve --baseurl /blog`.

Check the homepage, a subsequent feed page, long articles, a math article, archive, tags, about, and 404. Include desktop and narrow mobile widths, filtering and no-result states, topic/year anchors, TOC tracking, keyboard navigation, and reduced motion.
