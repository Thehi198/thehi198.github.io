(function () {
  // Project filter: tag checkboxes in a dropdown. A project shows when it
  // matches any checked option; nothing checked shows every project.
  var bar = document.querySelector("[data-filter]");
  var list = document.querySelector("[data-projects]");
  if (bar && list) {
    var entries = Array.prototype.slice.call(list.querySelectorAll(".mg-entry"));
    var box = bar.querySelector("[data-filter-box]");
    var chips = bar.querySelector("[data-filter-chips]");
    var opener = bar.querySelector("[data-filter-toggle]");
    var panel = bar.querySelector("[data-filter-panel]");
    var boxes = Array.prototype.slice.call(panel.querySelectorAll("input[type=checkbox]"));
    var status = document.querySelector("[data-filter-status]");

    function tagsOf(el) {
      var t = (el.getAttribute("data-tags") || "").split("|");
      if (el.getAttribute("data-featured") === "true") t.push("featured");
      return t;
    }
    function labelOf(cb) { return cb.parentNode.querySelector("span").textContent; }
    function checked() { return boxes.filter(function (b) { return b.checked; }); }

    boxes.forEach(function (cb) {
      var n = entries.filter(function (el) { return tagsOf(el).indexOf(cb.value) >= 0; }).length;
      var c = panel.querySelector('[data-count="' + cb.value + '"]');
      if (c) c.textContent = n;
    });

    function apply(save) {
      var sel = checked().map(function (b) { return b.value; });
      var shown = 0;
      entries.forEach(function (el) {
        var t = tagsOf(el);
        var match = !sel.length || sel.some(function (v) { return t.indexOf(v) >= 0; });
        el.hidden = !match;
        if (match) {
          shown += 1;
          el.querySelector(".mg-entry-idx").textContent = (shown < 10 ? "0" : "") + shown;
        }
      });

      chips.textContent = "";
      if (!sel.length) {
        var ph = document.createElement("span");
        ph.className = "filter-placeholder";
        ph.textContent = "All projects";
        chips.appendChild(ph);
      }
      checked().forEach(function (cb) {
        var chip = document.createElement("span");
        chip.className = "mg-tag mg-tag-solid";
        chip.appendChild(document.createTextNode(labelOf(cb)));
        var x = document.createElement("button");
        x.type = "button";
        x.className = "filter-chip-x";
        x.setAttribute("aria-label", "Remove " + labelOf(cb));
        x.textContent = "×";
        x.addEventListener("click", function (e) {
          e.stopPropagation();
          cb.checked = false;
          apply(true);
          opener.focus();
        });
        chip.appendChild(x);
        chips.appendChild(chip);
      });
      opener.firstChild.nodeValue = sel.length ? "Edit " : "Filter by tag ";

      if (status) {
        status.textContent = "Showing " + shown + " of " + entries.length + " projects";
        if (sel.length) {
          status.appendChild(document.createTextNode(" · "));
          var all = document.createElement("button");
          all.type = "button";
          all.textContent = "See all";
          all.addEventListener("click", function () { setAll(false); });
          status.appendChild(all);
        }
      }
      if (save) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("tags", sel.join(","));
          history.replaceState(null, "", url);
        } catch (e) {}
      }
    }

    function setAll(v) { boxes.forEach(function (b) { b.checked = v; }); apply(true); }
    function open(v) {
      panel.hidden = !v;
      opener.setAttribute("aria-expanded", v ? "true" : "false");
      opener.lastElementChild.textContent = v ? "▴" : "▾";
    }

    box.addEventListener("click", function () { open(panel.hidden); });
    boxes.forEach(function (cb) { cb.addEventListener("change", function () { apply(true); }); });
    panel.querySelector("[data-filter-clear]").addEventListener("click", function () { setAll(false); });
    panel.querySelector("[data-filter-done]").addEventListener("click", function () { open(false); opener.focus(); });
    document.addEventListener("click", function (e) { if (!bar.contains(e.target)) open(false); });
    bar.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { open(false); opener.focus(); }
    });

    // Initial state: ?tags=a,b from the URL, otherwise Featured when it exists.
    var initial = null;
    try {
      var q = new URLSearchParams(window.location.search).get("tags");
      if (q !== null) initial = q ? q.split(",") : [];
    } catch (e) {}
    if (initial === null) initial = boxes.some(function (b) { return b.value === "featured"; }) ? ["featured"] : [];
    boxes.forEach(function (b) { b.checked = initial.indexOf(b.value) >= 0; });
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
