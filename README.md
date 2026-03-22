# Right's Blog

这是一个基于 Jekyll 构建的个人博客项目，部署目标是 GitHub Pages。

English version: `README_EN.md`

## 当前主题特性

- CRT 风格外壳：单色系终端字体、扫描线、渐变辉光和 shell frame 边角装饰
- 首页双栏仪表盘：hero、最新推荐、置顶高亮、文章流和右侧信息侧轨
- 文章阅读模式：正文主列 + 吸附式目录侧栏，目录项会随滚动高亮当前章节
- 内容组织：置顶文章、标签页、归档时间线、分页
- 可选扩展：MathJax 3、Utterances / Gitalk / Disqus、Busuanzi 统计

## 主题结构概览

- `_layouts/default.html`：统一注入 `site-shell`、shell frame、顶部导航和随机首页标语脚本
- `index.html`：首页仪表盘，组合 hero、推荐文章、置顶卡片、文章流和右侧标签/概览面板
- `_layouts/post.html`：文章页阅读模式，提供返回首页链接、阅读时长、标签和可选 TOC 侧栏
- `_sass/_shell.scss`：全站 CRT 外壳、背景层、导航、卡片容器和阅读模式栅格
- `_sass/_home.scss`：首页 dashboard / hero / card / info rail 细节样式
- `_sass/_content.scss`：文章内容排版、代码块、归档/标签列表和 TOC 样式
- `_sass/_responsive.scss`：响应式降栏、移动端栅格折叠和 reduced-motion / reduced-transparency 适配

## 项目结构

- `index.html`：首页，包含 hero、文章流和右侧信息侧轨
- `style.scss`：全站主样式，包含背景画布、动效和响应式布局
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

- 2026-03-22：细化 CRT 主题外壳，首页 hero / 卡片 / 信息侧轨与文章阅读模式样式同步收敛
- 2026-03-22：补充首页仪表盘与文章阅读模式的文档、运行检查项和 codemap
- 2026-03-13：首页改为双栏布局，并补充右侧信息侧轨
- 2026-03-13：文章目录支持随滚动高亮
- 2026-03-13：全站视觉升级为画布化背景与卡片式布局
- 2026-02-09：支持通过 GitHub Issue 自动更新内容

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
