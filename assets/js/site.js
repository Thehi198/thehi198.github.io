(function () {
  // Project filter: toggle chips. A project shows when it matches any chip
  // that is on; with every chip off ("All") every project shows.
  var bar = document.querySelector("[data-filter]");
  var list = document.querySelector("[data-projects]");
  if (bar && list) {
    var entries = Array.prototype.slice.call(list.querySelectorAll(".mg-entry"));
    var chips = Array.prototype.slice.call(bar.querySelectorAll("[data-filter-value]"));
    var allBtn = bar.querySelector("[data-filter-all]");
    var status = document.querySelector("[data-filter-status]");
    var on = [];

    function tagsOf(el) {
      var t = (el.getAttribute("data-tags") || "").split("|");
      if (el.getAttribute("data-featured") === "true") t.push("featured");
      return t;
    }
    chips.forEach(function (c) {
      var v = c.getAttribute("data-filter-value");
      var n = entries.filter(function (el) { return tagsOf(el).indexOf(v) >= 0; }).length;
      if (!n) { c.disabled = true; c.title = "No projects yet"; }
    });

    function apply(save) {
      var shown = 0;
      entries.forEach(function (el) {
        var t = tagsOf(el);
        var match = !on.length || on.some(function (v) { return t.indexOf(v) >= 0; });
        el.hidden = !match;
        if (match) shown += 1;
      });
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", on.indexOf(c.getAttribute("data-filter-value")) >= 0 ? "true" : "false");
      });
      allBtn.setAttribute("aria-pressed", on.length ? "false" : "true");
      if (status) {
        status.textContent = "Showing " + shown + " of " + entries.length + " projects";
        if (on.length && shown < entries.length) {
          status.appendChild(document.createTextNode(" · "));
          var all = document.createElement("button");
          all.type = "button";
          all.textContent = "See all";
          all.addEventListener("click", function () { on = []; apply(true); });
          status.appendChild(all);
        }
      }
      if (save) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("tags", on.join(","));
          history.replaceState(null, "", url);
        } catch (e) {}
      }
    }

    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var v = c.getAttribute("data-filter-value"), i = on.indexOf(v);
        if (i >= 0) on.splice(i, 1); else on.push(v);
        apply(true);
      });
    });
    allBtn.addEventListener("click", function () { on = []; apply(true); });

    // Initial state: ?tags=a,b from the URL, otherwise Featured when it exists.
    var q = null;
    try { q = new URLSearchParams(window.location.search).get("tags"); } catch (e) {}
    var valid = chips.map(function (c) { return c.getAttribute("data-filter-value"); });
    if (q !== null) on = q.split(",").filter(function (v) { return valid.indexOf(v) >= 0; });
    else if (valid.indexOf("featured") >= 0) on = ["featured"];
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
