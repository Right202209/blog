# 前端样式问题整理

检查日期：2026-06-27

## 总体判断

当前前端已经从旧的 CRT/dashboard 主题迁移到 `Ink & Paper` 方向。活跃样式入口是 `style.scss`，导入顺序为 `reset -> shell -> home -> content -> about -> highlights -> responsive`。现有视觉方向明确，颜色和字体已经集中在 `_sass/_shell.scss` 的 `:root` 中，这是后续整理样式系统的基础。

本次整理已经按问题从根部处理：先补齐 layout、spacing、shape、derived color、code color、motion token，再让首页、正文、关于页、代码高亮和响应式层消费这些 token，避免继续复制局部数值。

## 问题与处理状态

| 优先级 | 问题 | 状态 | 处理方式 |
| --- | --- | --- | --- |
| P0 | 文档与实际主题不同步 | 已处理 | README、README_EN、frontend codemap、codemap index 同步为 `Ink & Paper` 结构。 |
| P1 | token 覆盖范围不足 | 已处理 | `_sass/_shell.scss` 增加 layout、space、shape、motion token。 |
| P1 | 派生色硬编码 | 已处理 | hover、链接、印章、阴影、代码块改用语义 token。 |
| P1 | 间距缺少节奏系统 | 已处理 | 增加 `--space-*` 与页面级节奏 token。 |
| P2 | 响应式断点没有命名 | 已处理 | `_sass/_responsive.scss` 增加 Sass 断点变量。 |
| P2 | 动效参数分散 | 已处理 | 增加 duration/ease token 并替换主要 transition/animation。 |
| P3 | 样式层职责偏重 | 部分处理 | 先建立 token 结构；后续可再拆 partial，避免一次性大搬迁。 |

## 已建立的样式关系

### Layout

- `--layout-max`：全站内容宽度。
- `--layout-pad` / `--layout-pad-compact`：桌面和紧凑屏横向留白。
- `--aside-width-post` / `--aside-width-index`：文章页和首页侧栏宽度。
- `--grid-gap-wide`：双栏布局的标准列间距。
- `--sticky-top`：吸附式侧栏和目录的统一顶部偏移。

### Spacing

- `--space-1` 到 `--space-9`：基础间距阶梯。
- `--content-wrap-top` / `--content-wrap-bottom`：页面主内容上下节奏。
- `--home-offset` / `--home-offset-compact`：首页首屏顶部节奏。
- `--section-gap` / `--section-gap-compact`：章节块间距。

### Derived Color

- `--seal-ink`、`--seal-highlight-*`、`--seal-press-*`：印章文字、高光和压印阴影。
- `--accent-wash-*`、`--accent-rule-soft`、`--accent-link-rule`：朱色 hover、链接、规则线派生色。
- `--shadow-ink-*`：纸面和印章阴影。
- `--code-*`：代码高亮语义色，独立于页面结构 token。

### Motion

- `--duration-fast`、`--duration-base`、`--duration-medium`、`--duration-slow`、`--duration-reveal`。
- `--ease-standard`、`--ease-rise`、`--ease-stamp`。

## 后续规则

- 新增颜色前，先判断是否能由 `--paper`、`--ink`、`--vermilion` 或现有派生 token 表达。
- 新增尺寸前，先判断它属于 layout、spacing、shape、type、motion 哪一层。
- 页面文件只描述页面结构关系，不定义全站 token。
- 响应式文件只覆盖布局状态，不重新发明组件样式。
- 第三方组件样式进入 vendor/legacy 层，不污染主主题层。

## 后续可选工作

当前没有立即拆分 `_sass/_shell.scss`，原因是先建立 token 消费关系更稳。下一步如果继续整理，可把 `_shell.scss` 拆成 tokens/base/effects/components，并保持视觉输出不变。
