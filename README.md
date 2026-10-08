# thehi198.github.io

Personal portfolio built with Jekyll on GitHub Pages, styled with the Monograph design system in `design-system/`.

## Editing

- Header (name, affiliation, photo, links): `_config.yml` under `author`. Bio: the body of `index.md`.
- Projects: one Markdown file per project in `_projects/`. Front matter:

  ```yaml
  title: "Project title"
  date: 2024-05-01
  role: Lead engineer
  org: OPEL
  order: 1            # position on the home page
  featured: true      # shown under the default Featured filter
  abstract: "One or two sentences, written as results."
  tags: [Propulsion, Power electronics]
  status: Flight hardware   # optional accent tag
  result: "Headline outcome."  # optional, shown as a Result remark
  image: /assets/images/lead.png
  image_caption: "What to notice in the image."
  ```

- Posts: `_posts/YYYY-MM-DD-slug.md` with `title`, optional `description`, `tags`, and `math: true` for KaTeX.
- In page bodies, `##` headings become numbered sections (§1) and `###` subsections (1.1). Use `{% include figure.html src=... caption=... %}` for numbered figures and `{% include remark.html kind="Note" text=... %}` for asides.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```
