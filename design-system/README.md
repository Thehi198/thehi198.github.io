Monograph is a portfolio set like an engineering monograph: warm paper, a Garamond text face, ink-blue marks used the way a textbook uses rubric, and tables ruled like a LaTeX `booktabs` table. The work carries the page. Typography does the hierarchy; color, boxes and effects almost never do.

## Content fundamentals

- Write like a lab report, not a pitch. State what was built, the numbers it hit, and what you learned. "Regulated anode current to ±2 % across 200 to 600 W" beats "a high-performance power solution".
- First person singular, past tense for finished work ("I designed the PPU"), present for what a system does ("The converter regulates…").
- Sentence case everywhere: titles, headings, buttons. No title case, no all caps in prose. All caps appears only in the mono `label` style.
- Numbers are data: set them in `data` (IBM Plex Mono) inside tables and spec lines, with SI units and a thin space before the unit where possible (`96.4 %`, `1.2 kW`).
- Number things the way a book does: sections `§1`, `§2`; subsections `2.1`; figures `Figure 3`; tables `Table 1`; equations `(4)`. Refer to them by number in prose.
- No emoji, no exclamation marks, no marketing adjectives (innovative, cutting-edge, seamless).

## Visual foundations

**Color.** Set every page on `paper`. Text is `ink`; secondary prose `ink-muted`; metadata (dates, roles, figure numbers) `ink-faint`. `accent` (ink blue) is the only hue: links, figure and table labels, equation numbers, the focus ring. Keep it to one or two marks per screen. `paper-sunk` is the only filled surface (code, Remark); `paper-raised` lifts a figure plate. Two themes, Paper and Night, share every token name.

**Type.** EB Garamond for everything readable; IBM Plex Mono only for data and labels. `display` for the name once; `title` for a project page; `section` for numbered sections; `subsection` is italic; `body` at 19/30 is the floor for running text. Use Garamond's old-style figures in prose and Plex Mono's tabular figures in tables. Small caps (`font-variant: small-caps`) are allowed for a lead-in word ("Note.") and acronyms in headings.

**Layout.** One text column, max `measure` (680px), left-aligned, ragged right. Wide figures and tables may break out to `measure-wide`. On phones the gutter is `space-4`. Vertical rhythm comes from `space-5` between blocks, `space-6` between projects and around figures, `space-7` above a section.

**Rules, not boxes.** Structure comes from `hairline` rules in `rule`, never from cards or shadows. SectionHeading draws one hairline above itself. SpecTable uses three rules only: `rule-heavy` in `ink` at top and bottom, a `hairline` in `ink` under the header, no vertical rules, no zebra stripes.

**Radii and shadow.** Square by default (`radius-0`). `radius-1` for tags and inline code, `radius-2` for Remark and code blocks. No shadows, gradients, glows or blur anywhere.

**States.** Links are `accent` with a 1px underline offset 3px; hover thickens the underline, never changes the color. Focus is a solid 2px `accent` outline offset 2px on every interactive element (6.7:1 or better on all paper surfaces). Table rows may take `paper-sunk` on hover.

**Motion.** None beyond a 120ms color or underline transition.

**Imagery.** Real photographs of hardware, scope captures, CAD renders and plots, framed by a `hairline` in `rule` on `paper-raised`. Plots use `ink` for primary traces, `accent` for the one series that matters, `ink-faint` for gridlines. No stock imagery, no illustrations.

## Iconography

No icon set. Use typographic marks instead: `§` for sections, `→` for outbound links, `·` as a separator in metadata, `±` and SI units in data. If an icon is ever unavoidable, use a 1.5px-stroke line icon in `ink-muted`. There is no logo; the name set in `display` is the mark.

## Components

PageHeader opens the site. SectionHeading numbers sections. ProjectEntry lists work. Figure, SpecTable and Equation present evidence, each numbered. Remark holds asides, results and notes in the textbook theorem style. Tag marks status and domain.
