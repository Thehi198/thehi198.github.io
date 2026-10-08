A booktabs table: heavy `ink` rules top and bottom, a hairline under the header, no vertical rules, numbers right-aligned in `data`.

Provide `columns` (`{label, numeric?, unit?}[]`; a `unit` is appended to each value in `ink-faint`) and `rows` (arrays of cells, or `{cells, highlight}` to tint the one row that matters with `accent-soft`). Add `number` and `caption`; the caption sits above, as tables do in print. Use `—` for empty cells. Do not add zebra stripes or borders.
