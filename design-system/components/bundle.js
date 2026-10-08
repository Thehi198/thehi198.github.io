/* @ds-bundle: {"format":4,"namespace":"Monograph","components":[{"name":"PageHeader"},{"name":"SectionHeading"},{"name":"ProjectEntry"},{"name":"Tag"},{"name":"Figure"},{"name":"SpecTable"},{"name":"Equation"},{"name":"Remark"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  function PageHeader(p) {
    var links = p.links || [];
    return h("header", { className: cx("mg-header", p.className) },
      h("h1", { className: "mg-header-name" }, p.name),
      p.affiliation ? h("p", { className: "mg-header-aff" }, p.affiliation) : null,
      links.length ? h("nav", { className: "mg-header-links", "aria-label": "Links" },
        links.map(function (l, i) { return h("a", { key: i, className: "mg-link", href: l.href }, l.label); })) : null);
  }

  function SectionHeading(p) {
    var sub = p.level === 2;
    return h(sub ? "h3" : "h2", { className: cx("mg-section", sub && "is-sub mg-section-sub", p.className), id: p.id },
      p.number != null ? h("span", { className: "mg-section-num" }, (sub ? "" : "§") + p.number) : null,
      h("span", { className: sub ? "" : "mg-section-title" }, p.children));
  }

  function Tag(p) {
    var tone = p.tone || "neutral";
    var cls = cx("mg-tag", tone === "accent" && "mg-tag-accent", tone === "solid" && "mg-tag-solid", p.className);
    return p.href ? h("a", { className: cls, href: p.href }, p.children) : h("span", { className: cls }, p.children);
  }

  function ProjectEntry(p) {
    var meta = [p.year, p.role, p.org].filter(Boolean).join(" · ");
    var idx = p.index != null ? String(p.index).padStart(2, "0") : "";
    return h("article", { className: cx("mg-entry", p.className) },
      h("div", { className: "mg-entry-idx", "aria-hidden": "true" }, idx),
      h("div", null,
        h("h3", { className: "mg-entry-title" }, p.href ? h("a", { href: p.href }, p.title) : p.title),
        meta ? h("div", { className: "mg-entry-meta" }, meta) : null,
        p.abstract ? h("p", { className: "mg-entry-abs" }, p.abstract) : null,
        p.tags && p.tags.length ? h("div", { className: "mg-entry-tags" },
          p.tags.map(function (t, i) { return h(Tag, { key: i }, t); })) : null));
  }

  function Caption(kind, number, caption) {
    return h("div", { className: "mg-caption" },
      h("span", { className: "mg-caption-label" }, kind + (number != null ? " " + number + "." : ".")),
      h("span", { className: "mg-caption-text" }, caption));
  }

  function Figure(p) {
    return h("figure", { className: cx("mg-figure", p.wide && "is-wide", p.className), id: p.id },
      h("div", { className: "mg-figure-plate" }, p.src ? h("img", { src: p.src, alt: p.alt || "" }) : p.children),
      p.caption ? h("figcaption", null, Caption("Figure", p.number, p.caption)) : null);
  }

  function SpecTable(p) {
    var cols = p.columns || [];
    var rows = p.rows || [];
    return h("div", { className: cx("mg-table-wrap", p.wide && "is-wide", p.className), id: p.id },
      p.caption ? Caption("Table", p.number, p.caption) : null,
      h("table", { className: "mg-table" },
        h("thead", null, h("tr", null, cols.map(function (c, i) {
          return h("th", { key: i, className: c.numeric ? "is-num" : "", scope: "col" }, c.label);
        }))),
        h("tbody", null, rows.map(function (r, ri) {
          var cells = Array.isArray(r) ? r : r.cells;
          return h("tr", { key: ri, className: !Array.isArray(r) && r.highlight ? "is-highlight" : "" },
            cells.map(function (v, ci) {
              var c = cols[ci] || {};
              return h("td", { key: ci, className: c.numeric ? "is-num" : "" }, v,
                c.unit && v !== "" && v != null ? h("span", { className: "mg-unit" }, c.unit) : null);
            }));
        }))));
  }

  function Equation(p) {
    var body;
    if (p.tex && window.katex) {
      body = h("div", { className: "mg-eq-body", dangerouslySetInnerHTML: { __html: window.katex.renderToString(p.tex, { displayMode: true, throwOnError: false }) } });
    } else {
      body = h("div", { className: "mg-eq-body" }, p.children || p.tex);
    }
    return h("div", { className: cx("mg-eq", p.className), id: p.id, role: "math" },
      body, p.number != null ? h("span", { className: "mg-eq-num" }, "(" + p.number + ")") : h("span"));
  }

  function Remark(p) {
    var kind = p.kind || "Remark";
    var cls = cx("mg-remark", kind === "Result" && "is-result", kind === "Note" && "is-note", p.className);
    return h("aside", { className: cls },
      h("span", { className: "mg-remark-lead" }, kind + (p.number != null ? " " + p.number : "") + "."),
      h("span", { className: "mg-remark-body" }, p.children));
  }

  window.Monograph = Object.assign(window.Monograph || {}, {
    PageHeader: PageHeader, SectionHeading: SectionHeading, ProjectEntry: ProjectEntry, Tag: Tag,
    Figure: Figure, SpecTable: SpecTable, Equation: Equation, Remark: Remark
  });
})();
