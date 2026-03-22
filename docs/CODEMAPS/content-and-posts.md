# Content and Posts Codemap

**Last Updated:** 2026-03-22
**Entry Points:** `/home/arch1/blog/_layouts/post.html`, `/home/arch1/blog/archive/index.html`, `/home/arch1/blog/tags/index.html`

## Architecture

```text
_posts/*.md
   |
   v
_layouts/post.html
   |- post header (title, author, date, reading time, views)
   |- .entry content area
   |- comments includes
   \- optional .toc-box aside when page.toc == true

archive/index.html ----> filter input -> toggles .archive-row display

tags/index.html -------> filter input -> toggles .tag-group and .archive-row display
```

## Key Modules
| Module | Purpose | Exports | Dependencies |
| --- | --- | --- | --- |
| `/home/arch1/blog/_layouts/post.html` | Long-form post presentation in read mode | Post page markup | `content`, `page.tags`, `page.toc`, comment includes |
| `/home/arch1/blog/_includes/toc.html` | Generates nested TOC markup from headings | Include output | Post HTML content |
| `/home/arch1/blog/_sass/_content.scss` | Post typography, TOC, archive, tags, pagination styling | Content styles | `.entry`, `.toc-box`, `.archive-row`, `.tag-group` |
| `/home/arch1/blog/archive/index.html` | Archive page with client-side filtering | Archive markup and filter script | `site.posts` |
| `/home/arch1/blog/tags/index.html` | Tag landing page with grouped posts and filtering | Tag page markup and filter script | `site.tags` |
| `/home/arch1/blog/_posts/*.md` | Markdown content with front matter | Jekyll posts | `layout`, `title`, `date`, `author`, `tags`, `toc`, `pinned`, `published` |

## Data Flow
- Markdown front matter determines whether a post uses the post layout and whether the TOC rail is shown.
- `_layouts/post.html` computes reading time from `content | strip_html | number_of_words` and renders metadata ahead of the article body.
- `_includes/toc.html` transforms the post HTML into nested TOC links, which `_sass/_content.scss` styles as a sticky side panel on larger viewports.
- Archive and tags pages generate searchable rows from `site.posts` and `site.tags`, then use inline JavaScript to filter visibility without any backend.

## External Dependencies
- `jekyll-toc`-style include logic - Generates the nested TOC from article headings
- `busuanzi` - Injects per-post page view counters in post metadata
- `utteranc`, `gitalk`, `disqus` - Optional comment embeds driven by `_config.yml`

## Related Areas
- [INDEX.md](./INDEX.md)
- [frontend.md](./frontend.md)
- [operations.md](./operations.md)
