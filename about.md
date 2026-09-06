---
layout: page
title: 关于
title_key: about
eyebrow: About
permalink: /about/
---

这里是我的个人笔记，记录技术实践、项目复盘与一些随手的思考。

<div class="about-stats" aria-label="站点速览">
  <div class="stat">
    <span class="stat-num">{{ site.posts | size }}</span>
    <span class="stat-label">篇笔记</span>
  </div>
  <div class="stat">
    <span class="stat-num">{{ site.tags | size }}</span>
    <span class="stat-label">个标签</span>
  </div>
  {% assign first_post = site.posts | last %}
  {% if first_post %}
  <div class="stat">
    <span class="stat-num">{{ first_post.date | date: "%Y" }}</span>
    <span class="stat-label">年起记</span>
  </div>
  {% endif %}
</div>

<section class="about-section">
  <h2>这里写什么</h2>
  <div class="about-grid">
    <div class="about-card">
      {% include icon.html name='code' %}
      <h3>技术实践</h3>
      <p>动手验证过的工具、配置与代码，附上踩过的坑。</p>
    </div>
    <div class="about-card">
      {% include icon.html name='layers' %}
      <h3>项目复盘</h3>
      <p>项目做完之后回头看：哪些判断对了，哪些该改。</p>
    </div>
    <div class="about-card">
      {% include icon.html name='compass' %}
      <h3>随手思考</h3>
      <p>不成体系的片段想法，先记下来，等证据来修正。</p>
    </div>
  </div>
</section>

<section class="about-section">
  <h2>治学三则</h2>
  <ol class="about-principles">
    <li>把判断写下来，再让证据修正它。</li>
    <li>记录技术、方法，以及能长期复用的经验。</li>
    <li>在噪音很多的时候，尽量保留清晰的页面和思路。</li>
  </ol>
</section>

<section class="about-section about-contact">
  <p>如果你想聊聊，欢迎通过 <a href="https://right202209.github.io/Contact/">联系页</a> 联系我~</p>
  <a class="about-contact-link" href="{{ site.home_url }}">{% include icon.html name='home' %} 返回主站</a>
</section>
