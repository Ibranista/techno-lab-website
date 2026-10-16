// "Paged" mode = full-screen section transitions driven by wheel/touch/keys.
// Only enabled when the viewport is large enough for every section to fit
// without clipping and the user hasn't asked for reduced motion. Everywhere
// else the site falls back to plain document scrolling.
//
// Keep in sync with the `paged` / `flow` custom variants in globals.css.
export const PAGED_QUERY =
  "(min-width: 1024px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)";

export const FLOW_QUERY = `not all and ${PAGED_QUERY}`;
