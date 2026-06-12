---
layout: page
title: 关于
permalink: /about/
---

这里是我的个人笔记，记录技术实践、项目复盘与一些随手的思考。

<div class="about-stats" aria-label="站点速览">
  <div class="stat">
    <span class="stat-num" data-count>{{ site.posts | size }}</span>
    <span class="stat-label">篇笔记</span>
  </div>
  <div class="stat">
    <span class="stat-num" data-count>{{ site.tags | size }}</span>
    <span class="stat-label">个标签</span>
  </div>
  {% assign first_post = site.posts | last %}
  {% if first_post %}
  <div class="stat">
    <span class="stat-num" data-count>{{ first_post.date | date: "%Y" }}</span>
    <span class="stat-label">年起记</span>
  </div>
  {% endif %}
</div>

<section class="about-section">
  <h2>这里写什么</h2>
  <div class="about-grid">
    <div class="about-card">
      <span class="card-glyph" aria-hidden="true">技</span>
      <h3>技术实践</h3>
      <p>动手验证过的工具、配置与代码，附上踩过的坑。</p>
    </div>
    <div class="about-card">
      <span class="card-glyph" aria-hidden="true">复</span>
      <h3>项目复盘</h3>
      <p>项目做完之后回头看：哪些判断对了，哪些该改。</p>
    </div>
    <div class="about-card">
      <span class="card-glyph" aria-hidden="true">思</span>
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
  <p>如果你想聊聊，欢迎通过 <a href="https://right202209.github.io/Contact/">Here</a> 联系我~</p>
  <a class="about-seal" href="https://right202209.github.io/Contact/" aria-label="联系我"><span>来</span><span>信</span></a>
</section>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", function () {
      // stat figures count up from zero when scrolled into view
      gsap.utils.toArray(".about-stats .stat-num").forEach(function (el) {
        var target = parseInt(el.textContent, 10);
        if (isNaN(target)) return;
        var state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 1.1,
          ease: "power1.out",
          snap: { v: 1 },
          onUpdate: function () { el.textContent = state.v; },
          scrollTrigger: { trigger: el, start: "top 90%", once: true }
        });
      });

      // section headings slide in from the margin
      gsap.utils.toArray(".about-section h2").forEach(function (h) {
        gsap.from(h, {
          x: -14,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: h, start: "top 88%", once: true }
        });
      });

      // cards settle like paper slips laid on the desk
      gsap.from(".about-card", {
        y: 22,
        opacity: 0,
        rotation: 1.5,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-grid", start: "top 88%", once: true }
      });

      // principles brush in line by line
      gsap.from(".about-principles li", {
        x: -16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-principles", start: "top 88%", once: true }
      });

      // contact seal stamps down, then hands transform back to CSS hover
      gsap.from(".about-seal", {
        scale: 1.4,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: ".about-contact", start: "top 90%", once: true }
      });
    });
  });
</script>
