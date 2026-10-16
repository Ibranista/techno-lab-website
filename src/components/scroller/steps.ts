import { gsap } from "gsap";

// A panel can opt into in-place "steps" (scroll-driven sub-animations that
// play before the scroller moves on to the next panel) with
// `data-steps="<name>"`. Each builder returns a paused timeline plus the
// ordered labels the scroller tweens between.
export type PanelSteps = {
  tl: gsap.core.Timeline;
  labels: string[];
};

// Initial clip of the featured image: inset below the header and inside the
// page gutter. Mirrors the `paged:[clip-path:...]` class in featuredWork.tsx so
// the first paint and GSAP agree.
export const FEATURED_CLIP_START = "inset(30% 72px 6% 72px round 28px)";
const FEATURED_CLIP_END = "inset(0% 0px 0% 0px round 0px)";

export const stepBuilders: Record<string, (panel: HTMLElement) => PanelSteps> = {
  featured(panel) {
    const q = gsap.utils.selector(panel);
    const back = q("[data-featured-back]");

    gsap.set(back, { autoAlpha: 0 });

    // Only transform, opacity and clip-path are animated, so nothing here
    // triggers layout.
    const tl = gsap
      .timeline({ paused: true, defaults: { duration: 1, ease: "power3.inOut" } })
      .addLabel("intro")
      // 1. Image grows from a card to full-bleed, header lifts away.
      .fromTo(
        q("[data-featured-media]"),
        { clipPath: FEATURED_CLIP_START },
        { clipPath: FEATURED_CLIP_END },
      )
      .fromTo(q("[data-featured-image]"), { scale: 1.12 }, { scale: 1 }, "<")
      .fromTo(
        q("[data-featured-header]"),
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: -48, duration: 0.6, ease: "power2.in", immediateRender: false },
        "<",
      )
      .addLabel("expanded")
      // 2. Image slides off to reveal the first showcase video underneath.
      // (A tiny tween rather than .set(): a zero-length set sitting exactly on
      // the "expanded" label would count as rendered when the playhead stops
      // there, leaving the hidden video visible and playing.)
      .fromTo(back, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01, immediateRender: false })
      .to(q("[data-featured-front]"), { xPercent: -100, duration: 1.1 }, "<")
      .fromTo(
        q("[data-featured-back-card]"),
        { scale: 0.88, autoAlpha: 0.2 },
        { scale: 1, autoAlpha: 1, duration: 1.1, immediateRender: false },
        "<",
      )
      .addLabel("showcase");

    return { tl, labels: ["intro", "expanded", "showcase"] };
  },
};
