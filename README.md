# Right's Blog

这是一个基于 Jekyll 构建的个人博客项目，部署目标是 GitHub Pages。

English version: `README_EN.md`

## 当前主题特性

- Ink & Paper 纸本文献风格：暖色纸张、朱丝栏、纸纹、浮墨字形和朱印强调
- 首页 folio 结构：卷首语、最新文章、置顶条目、文章账册和右侧目录侧栏
- 文章阅读模式：正文主列 + 吸附式目录侧栏，目录项会随滚动高亮当前章节
- 内容组织：置顶文章、标签页、归档时间线、分页
- 可选扩展：MathJax 3、Utterances / Gitalk / Disqus、Busuanzi 统计

## 主题结构概览

- `_layouts/default.html`：统一注入纸纹背景、朱丝栏、浮墨层、顶部导航和页脚
- `index.html`：首页 folio，组合 hero、最新文章、置顶文章、文章账册和目录侧栏
- `_layouts/post.html`：文章页阅读模式，提供返回首页链接、阅读时长、标签和可选 TOC 侧栏
- `_sass/_shell.scss`：全站 token、基础排版、纸张背景、导航、共享账册组件和页脚
- `_sass/_home.scss`：首页 folio、卷首语、朱印、统计行和目录侧栏样式
- `_sass/_content.scss`：文章内容排版、归档/标签列表和 TOC 样式
- `_sass/_highlights.scss`：Rouge 代码高亮样式
- `_sass/_responsive.scss`：响应式降栏、移动端压缩和 reduced-motion 适配

## 项目结构

- `index.html`：首页，包含 folio hero、文章账册和右侧目录侧栏
- `style.scss`：全站主样式入口，组合 Sass partial、动效和响应式布局
- `_layouts/`：页面、文章、默认布局
- `_includes/`：导航、页脚、目录、评论和元信息片段
- `_posts/`：博客文章
- `_config.yml`：站点名称、描述、导航、评论和基础路径等配置

## 本地开发

当前仓库没有提交 `Gemfile`，因此本地预览依赖你机器上的 Jekyll 环境。

1. 安装 Ruby
2. 安装 Jekyll：
   ```bash
   gem install jekyll bundler
   ```
3. 在项目目录启动：
   ```bash
   jekyll serve --baseurl /blog
   ```
4. 访问 `http://localhost:4000/blog`

如果你更习惯 `bundle exec jekyll serve`，可以自行补一个 `Gemfile` 后再使用。

## 常用配置

主要配置位于 `_config.yml`：

- `name`：站点名称
- `description`：首页主标题 / 站点描述
- `url`：线上域名
- `baseurl`：子路径，当前为 `/blog`
- `avatar`：侧栏头像
- `footer-links`：页脚社交链接
- `utteranc.repo`：Utterances 评论仓库

## 通过 GitHub Issue 更新内容

仓库支持使用 GitHub Issue 作为内容更新入口。新建 Issue 并选择 `Content Update` 模板即可新增、更新或删除内容。

### 字段说明

- `Action`：`create` / `update` / `delete`
- `Type`：`post` / `page` / `file`
- `Path`：目标文件路径，创建文章时可留空
- `Title` / `Date`：文章创建或更新时必填
- `Tags`：逗号分隔
- `Published`：`true` / `false`
- `Content`：Markdown 正文

### 自动生成规则

- 当 `Type=post` 且 `Path` 为空时，会自动生成 `_posts/YYYY-MM-DD-<slug>-<issue号>.md`
- `<slug>` 由标题转成英文小写并清理特殊字符
- 会自动补齐常用 front matter，如 `layout`、`title`、`date`、`author`、`tags`、`toc`、`pinned`

## 最近更新

- 2026-06-27：同步 Ink & Paper 主题文档，并补齐前端样式 token 关系
- 2026-03-22：补充首页仪表盘与文章阅读模式的文档、运行检查项和 codemap
- 2026-03-13：首页改为双栏布局，并补充右侧信息侧轨
- 2026-03-13：文章目录支持随滚动高亮
- 2026-03-13：全站视觉升级为画布化背景与卡片式布局
- 2026-02-09：支持通过 GitHub Issue 自动更新内容

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
