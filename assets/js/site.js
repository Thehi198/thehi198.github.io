(function () {
  // Project filter: Featured and All chips, then a dropdown of tag checkboxes.
  // A project shows when it matches anything selected; nothing selected shows all.
  // At most `limit` projects show until "See all" is pressed.
  var bar = document.querySelector("[data-filter]");
  var list = document.querySelector("[data-projects]");
  if (bar && list) {
    var entries = Array.prototype.slice.call(list.querySelectorAll(".card"));
    var featuredBtn = bar.querySelector('[data-filter-value="featured"]');
    var allBtn = bar.querySelector("[data-filter-all]");
    var menu = bar.querySelector("[data-tag-menu]");
    var menuBtn = bar.querySelector("[data-tag-toggle]");
    var panel = bar.querySelector("[data-tag-panel]");
    var summary = bar.querySelector("[data-tag-summary]");
    var boxes = panel ? Array.prototype.slice.call(panel.querySelectorAll("input[type=checkbox]")) : [];
    var status = document.querySelector("[data-filter-status]");
    var more = document.querySelector("[data-more]");
    var limit = parseInt(list.getAttribute("data-limit"), 10) || 6;
    var featuredOn = false, expanded = false;

    function tagsOf(el) {
      var t = (el.getAttribute("data-tags") || "").split("|");
      if (el.getAttribute("data-featured") === "true") t.push("featured");
      return t;
    }
    function selected() {
      var sel = boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; });
      if (featuredOn) sel.push("featured");
      return sel;
    }
    boxes.forEach(function (cb) {
      var n = entries.filter(function (el) { return tagsOf(el).indexOf(cb.value) >= 0; }).length;
      cb.parentNode.querySelector(".filter-count").textContent = n;
      if (!n) { cb.disabled = true; cb.parentNode.classList.add("is-empty"); }
    });

    function apply(save) {
      var sel = selected();
      var matched = 0, shown = 0;
      entries.forEach(function (el) {
        var t = tagsOf(el);
        var match = !sel.length || sel.some(function (v) { return t.indexOf(v) >= 0; });
        if (match) matched += 1;
        el.hidden = !match || (!expanded && matched > limit);
        if (!el.hidden) shown += 1;
      });
      if (featuredBtn) featuredBtn.setAttribute("aria-pressed", featuredOn ? "true" : "false");
      allBtn.setAttribute("aria-pressed", sel.length ? "false" : "true");
      if (menuBtn) {
        var names = boxes.filter(function (b) { return b.checked; })
          .map(function (b) { return b.parentNode.querySelector("span").textContent; });
        summary.textContent = !names.length ? "Tags" : names.length <= 2 ? names.join(", ") : names[0] + " +" + (names.length - 1);
        menuBtn.setAttribute("aria-pressed", names.length ? "true" : "false");
      }
      if (more) {
        more.hidden = expanded || matched <= limit;
        more.firstChild.textContent = "See all " + matched + " projects →";
      }
      if (status) status.textContent = "Showing " + shown + " of " + entries.length + " projects";
      if (save) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("tags", sel.join(","));
          history.replaceState(null, "", url);
        } catch (e) {}
      }
    }
    function changed() { expanded = false; apply(true); }
    function open(v) {
      if (!panel) return;
      panel.hidden = !v;
      menuBtn.setAttribute("aria-expanded", v ? "true" : "false");
      menuBtn.querySelector(".tag-menu-caret").textContent = v ? "▴" : "▾";
    }

    if (featuredBtn) featuredBtn.addEventListener("click", function () { featuredOn = !featuredOn; changed(); });
    allBtn.addEventListener("click", function () {
      featuredOn = false;
      boxes.forEach(function (b) { b.checked = false; });
      open(false);
      changed();
    });
    boxes.forEach(function (b) { b.addEventListener("change", changed); });
    if (menuBtn) {
      menuBtn.addEventListener("click", function () { open(panel.hidden); });
      document.addEventListener("click", function (e) { if (!menu.contains(e.target)) open(false); });
      menu.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !panel.hidden) { open(false); menuBtn.focus(); }
      });
    }
    if (more) more.firstChild.addEventListener("click", function () { expanded = true; apply(false); });

    // Initial state: ?tags=a,b from the URL, otherwise Featured when it exists.
    var q = null;
    try { q = new URLSearchParams(window.location.search).get("tags"); } catch (e) {}
    if (q !== null) {
      var want = q.split(",");
      featuredOn = !!featuredBtn && want.indexOf("featured") >= 0;
      boxes.forEach(function (b) { b.checked = !b.disabled && want.indexOf(b.value) >= 0; });
    } else {
      featuredOn = !!featuredBtn;
    }
    bar.hidden = false;
    apply(false);
  }

  // Theme: auto -> paper -> night -> auto.
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    var root = document.documentElement;
    var names = { auto: "auto", light: "paper", dark: "night" };
    function current() { return root.getAttribute("data-theme") || "auto"; }
    function label() { toggle.textContent = "Theme: " + names[current()]; }
    toggle.addEventListener("click", function () {
      var next = { auto: "light", light: "dark", dark: "auto" }[current()];
      if (next === "auto") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", next);
      try { if (next === "auto") localStorage.removeItem("theme"); else localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
    label();
  }
})();
