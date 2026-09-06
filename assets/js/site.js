(function () {
  "use strict";

  document.querySelectorAll("[data-post-filter]").forEach(function (list) {
    var controls = list.querySelector("[data-filter-controls]");
    var input = list.querySelector("[data-filter-input]");
    var status = list.querySelector("[data-filter-status]");
    var groups = list.querySelectorAll("[data-filter-group]");
    var rows = Array.from(list.querySelectorAll("[data-filter-row]")).map(function (row) {
      return {
        element: row,
        text: row.dataset.filterText.toLocaleLowerCase(),
        url: row.querySelector("a").getAttribute("href")
      };
    });
    if (!controls || !input || !status || !rows.length) return;
    controls.hidden = false;

    function filter() {
      var query = input.value.toLocaleLowerCase().trim();
      var terms = query.split(/\s+/).filter(Boolean);
      var matches = new Set();
      rows.forEach(function (row) {
        var visible = terms.every(function (term) { return row.text.indexOf(term) !== -1; });
        row.element.hidden = !visible;
        if (visible) matches.add(row.url);
      });
      groups.forEach(function (group) {
        group.hidden = !group.querySelector("[data-filter-row]:not([hidden])");
      });
      status.hidden = !query;
      status.textContent = matches.size
        ? status.dataset.resultLabel.replace("{count}", matches.size)
        : status.dataset.emptyLabel;
    }

    input.addEventListener("input", filter);
    // Reveal the target again if a topic is selected after filtering.
    list.querySelectorAll(".tags-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        input.value = "";
        filter();
      });
    });
    filter();
  });

  var toc = document.getElementById("post-toc");
  if (!toc) return;
  var narrow = window.matchMedia("(max-width: 980px)");
  function setTocLayout() { toc.open = !narrow.matches; }
  setTocLayout();
  narrow.addEventListener("change", setTocLayout);

  var headings = [];
  toc.querySelectorAll("a[href^='#']").forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    try { id = decodeURIComponent(id); } catch (error) { /* Keep the original ID. */ }
    var heading = document.getElementById(id);
    if (heading) headings.push({ heading: heading, link: link });
  });
  if (!headings.length) return;

  var active;
  function updateToc() {
    var current = headings[0].link;
    headings.forEach(function (item) {
      if (item.heading.getBoundingClientRect().top <= 120) current = item.link;
    });
    if (current === active) return;
    if (active) {
      active.classList.remove("active");
      active.removeAttribute("aria-current");
    }
    active = current;
    active.classList.add("active");
    active.setAttribute("aria-current", "location");
  }

  var ticking = false;
  function scheduleUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      updateToc();
    });
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", updateToc);
  updateToc();
})();
