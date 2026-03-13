# Right's Blog

这是一个基于 Jekyll 构建的个人博客项目，部署目标是 GitHub Pages。

English version: `README_EN.md`

## 当前主题特性

- 画布化背景：渐变、网格、光斑和柔和纸面质感叠加
- 首页双栏：文章主列 + 信息侧轨，支持更丰富的信息组织
- 首页专注模式：一键收起侧栏和信息侧轨，切回单列阅读
- 文章目录跟随：阅读时自动高亮当前章节并滚动到对应目录项
- 内容组织：置顶文章、标签页、归档时间线、分页
- 可选扩展：MathJax 3、Utterances / Gitalk / Disqus、Busuanzi 统计

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

- 2026-03-13：首页改为双栏布局，并新增首页专注模式
- 2026-03-13：文章目录支持随滚动高亮
- 2026-03-13：全站视觉升级为画布化背景与卡片式布局
- 2026-02-09：支持通过 GitHub Issue 自动更新内容

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
