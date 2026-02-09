# Right's Blog

这是一个基于 Jekyll 构建的个人博客项目，托管在 GitHub Pages 上。

## 项目特点

- **轻量高效**：使用 Jekyll 静态网站生成器。
- **性能优化**：
  - CSS 自动压缩（Sass compressed mode）。
  - 升级至 MathJax 3，提供更快的数学公式渲染。
  - 移除冗余的 JavaScript 库（如 Feather Icons），改用内联 SVG。
  - 脚本按需加载，减少首屏加载时间。
- **SEO 友好**：
  - 完善的 Open Graph 和 Twitter Card 元标签支持。
  - 自动生成规范链接 (Canonical URL)。
  - 结构化的元数据配置。
- **功能丰富**：
  - 支持文章置顶 (Pinned posts)。
  - 自动生成目录 (TOC)。
  - 集成 Gitalk 评论系统（可选）。
  - 标签 (Tags) 和 归档 (Archive) 功能。

## 快速开始

### 本地开发

确保你已经安装了 Ruby 和 Bundler。

1. 克隆仓库
2. 安装依赖：
   ```bash
   bundle install
   ```
3. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```
4. 访问 `http://localhost:4000/blog` 查看效果。

### 配置

主要的配置信息位于 `_config.yml` 文件中：
- `name`: 你的名字。
- `description`: 博客描述。
- `url`: 你的网站域名。
- `baseurl`: 博客的子路径（默认为 `/blog`）。

## 通过 GitHub Issue 更新内容

使用 GitHub Issue 作为更新入口。新建 Issue 并选择 `Content Update` 模板，填写字段即可完成新增/更新/删除。

### 字段说明
- `Action`: `create` / `update` / `delete`
- `Type`: `post` / `page` / `file`
- `Path`: 目标文件路径（创建文章可留空）
- `Title` / `Date`: 文章创建或更新时必填
- `Tags`: 逗号分隔
- `Content`: Markdown 正文

### 文章示例
- `Action`: create
- `Type`: post
- `Path`: 留空
- `Title`: My Title
- `Date`: 2026-02-09
- `Tags`: document, continue
- `Content`: 文章正文

### 页面/文件示例
- `Action`: update
- `Type`: page
- `Path`: about.md
- `Content`: 完整文件内容

## 最近更新 (2026-02-09)

- **性能提升**：全面优化了前端资源加载，升级了数学公式渲染引擎。
- **SEO 增强**：添加了完整的社交媒体分享元标签。
- **代码清理**：修复了模板中的 HTML 结构错误和拼写错误，移除了过时的兼容性代码。

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
