(function () {
  // Project filter: Featured, All, or a single tag. State lives in ?tag=.
  var bar = document.querySelector("[data-filter]");
  var list = document.querySelector("[data-projects]");
  if (bar && list) {
    var entries = Array.prototype.slice.call(list.querySelectorAll(".mg-entry"));
    var buttons = Array.prototype.slice.call(bar.querySelectorAll("[data-filter-value]"));
    var status = document.querySelector("[data-filter-status]");
    var values = buttons.map(function (b) { return b.getAttribute("data-filter-value"); });
    var fallback = values.indexOf("featured") >= 0 ? "featured" : "all";

    function apply(value, push) {
      if (values.indexOf(value) < 0) value = fallback;
      var shown = 0;
      entries.forEach(function (el) {
        var tags = (el.getAttribute("data-tags") || "").split("|");
        var match = value === "all" ||
          (value === "featured" ? el.getAttribute("data-featured") === "true" : tags.indexOf(value) >= 0);
        el.hidden = !match;
        if (match) {
          shown += 1;
          el.querySelector(".mg-entry-idx").textContent = (shown < 10 ? "0" : "") + shown;
        }
      });
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-filter-value") === value ? "true" : "false");
      });
      if (status) {
        status.textContent = "Showing " + shown + " of " + entries.length + " projects";
        if (value !== "all" && shown < entries.length) {
          status.appendChild(document.createTextNode(" · "));
          var all = document.createElement("button");
          all.type = "button";
          all.textContent = "See all";
          all.addEventListener("click", function () { apply("all", true); });
          status.appendChild(all);
        }
      }
      if (push) {
        try {
          var url = new URL(window.location.href);
          if (value === fallback) url.searchParams.delete("tag"); else url.searchParams.set("tag", value);
          history.replaceState(null, "", url);
        } catch (e) {}
      }
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-filter-value"), true); });
    });
    var initial = fallback;
    try { initial = new URLSearchParams(window.location.search).get("tag") || fallback; } catch (e) {}
    bar.hidden = false;
    apply(initial, false);
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
