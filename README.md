# Right's Blog

这是一个基于 Jekyll 构建的个人博客项目，托管在 GitHub Pages 上。

English version: README_EN.md

## 项目特点

- **轻量高效**：使用 Jekyll 静态网站生成器。
- **性能优化**：Sass 压缩、MathJax 3、按需脚本加载。
- **SEO 友好**：完善的 Open Graph/Twitter 元标签与规范链接。
- **功能完整**：置顶、目录、标签、归档、评论系统（可选）。

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

- **Issue 更新流程**：新增通过 GitHub Issue 自动写入内容的流程。
- **归档样式**：归档页改为竖直时间线展示。
- **导航简化**：移除冗余导航项。

---
Powered by [jekyll-theme-satellite](https://github.com/byanko55/jekyll-theme-satellite)
Modified by [Droite](https://github.com/Right202209)
