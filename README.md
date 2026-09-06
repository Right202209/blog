# Droit · Notes

基于 Jekyll 的个人博客，部署在 GitHub Pages 的 `/blog` 路径。主题与 `Right202209.github.io` 的 `optimization-patch` 分支保持一致。

English version: [README_EN.md](README_EN.md)

## 当前主题

- 与主页共用 Droit 头像、名称与签名，使用深灰渐变、灰白文字、细分隔线和橙色交互色
- 首页展示个人简介、最新笔记、分页列表，以及常读笔记、主题和年份入口
- 文章页提供阅读时长、随滚动高亮的目录、暗色代码块及上一篇 / 下一篇导航
- 归档按年份组织，标签按主题组织；支持搜索、匹配数量和空结果提示
- 使用本地图标与系统字体，支持键盘导航、移动端、无 JavaScript 阅读与减少动态效果
- 保留 MathJax、Utterances / Gitalk / Disqus 评论等可选能力

## 主题结构

- `_layouts/default.html`：全站背景、导航、正文入口、页脚与本地脚本
- `index.html`、`_includes/post-card.html`：首页与分页文章列表
- `_layouts/post.html`：文章、阅读信息、可选目录与评论
- `_sass/_shell.scss`：统一颜色、字体、尺寸变量与共享组件
- `_sass/_home.scss`、`_content.scss`、`_about.scss`：首页、阅读和关于页
- `_sass/_highlights.scss`、`_responsive.scss`：代码高亮与响应式适配
- `assets/js/site.js`：列表筛选与目录交互

详细设计约定见 [DESIGN.md](DESIGN.md)，开发流程见 [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)。

## 本地开发

安装 Ruby 和 Bundler 后，在仓库目录执行：

```bash
bundle install
bundle exec jekyll serve --baseurl /blog
```

访问 `http://localhost:4000/blog/`。构建检查：

```bash
bundle exec jekyll build --strict_front_matter
```

`Gemfile` 使用与 GitHub Pages 兼容的 Jekyll 3.10 及现有插件。

## 常用配置

主要配置位于 `_config.yml`：

- `name`、`description`、`tagline`：名称、签名与简介
- `home_url`：个人主页地址
- `url`、`baseurl`：线上域名与博客路径
- `avatar`、`favicon`：本地头像和站点图标
- `footer-links`：页脚社交链接
- `utteranc.repo`：Utterances 评论仓库，默认使用暗色主题

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

- 2026-09-06：与 Droit 主页面统一视觉，重构分页、筛选和阅读布局，补充 Bundler 构建配置

- 2026-06-27：同步 Ink & Paper 主题文档，并补齐前端样式 token 关系
- 2026-03-22：补充首页仪表盘与文章阅读模式的文档、运行检查项和 codemap
- 2026-03-13：首页改为双栏布局，并补充右侧信息侧轨
- 2026-03-13：文章目录支持随滚动高亮
- 2026-03-13：全站视觉升级为画布化背景与卡片式布局
- 2026-02-09：支持通过 GitHub Issue 自动更新内容

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
