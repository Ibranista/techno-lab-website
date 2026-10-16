"use client";

import { createContext, useContext, useRef, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { FLOW_QUERY, PAGED_QUERY } from "@/lib/paged";
import { stepBuilders, type PanelSteps } from "./steps";

gsap.registerPlugin(Observer, useGSAP);

const ActiveSectionContext = createContext("home");

export const useActiveSection = () => useContext(ActiveSectionContext);

const TRANSITION = { duration: 1.1, ease: "power3.inOut" };
const PUSH_BACK = { scale: 0.92, opacity: 0.35 };

function playVideo(video: HTMLVideoElement) {
  if (video.paused) video.play().catch(() => {});
}

/**
 * Hosts the page sections (`[data-panel]` elements with an `id`).
 *
 * - Paged mode (large screens, motion allowed): sections are stacked and
 *   swapped with transform/opacity-only transitions on wheel, touch, keyboard
 *   and in-page `#hash` links.
 * - Flow mode (everything else): normal document scrolling; this component
 *   just tracks the active section and plays videos when they're on screen.
 */
export function PageScroller({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("home");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(PAGED_QUERY, () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root.current);
        const ids = panels.map((panel) => panel.id);
        const reveals = panels.map((panel) =>
          gsap.utils.toArray<HTMLElement>("[data-reveal]", panel),
        );
        const steps: (PanelSteps | null)[] = panels.map((panel) => {
          const build = stepBuilders[panel.dataset.steps ?? ""];
          return build ? build(panel) : null;
        });
        const stepAt = panels.map(() => 0);

        let current = Math.max(0, ids.indexOf(location.hash.slice(1)));
        let busy = false;
        let gestureConsumed = false;

        panels.forEach((panel, i) => {
          gsap.set(panel, { autoAlpha: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 });
          if (i !== current) gsap.set(reveals[i], { autoAlpha: 0, y: 32 });
        });

        // Play videos only in the active panel and only when actually visible
        // (e.g. the featured panel's back layer is hidden until its last step).
        const syncVideos = () => {
          panels.forEach((panel, i) => {
            panel.querySelectorAll("video").forEach((video) => {
              const visible =
                i === current &&
                (video.checkVisibility?.({ visibilityProperty: true }) ?? true);
              if (visible) playVideo(video);
              else video.pause();
            });
          });
        };

        const announce = () => {
          setActive(ids[current]);
          const hash = current === 0 ? location.pathname + location.search : `#${ids[current]}`;
          history.replaceState(null, "", hash);
        };

        announce();
        syncVideos();

        const playStep = (index: number) => {
          const s = steps[current];
          if (!s || busy) return;
          busy = true;
          stepAt[current] = index;
          s.tl.tweenTo(s.labels[index], {
            onComplete: () => {
              busy = false;
              syncVideos();
            },
          });
        };

        const goTo = (target: number, jump = false) => {
          if (busy || target < 0 || target >= panels.length) return;
          if (target === current) {
            // Re-selecting the current section rewinds its steps.
            if (stepAt[current] > 0) playStep(0);
            return;
          }

          busy = true;
          const from = panels[current];
          const to = panels[target];
          const forward = target > current;

          // Entering a stepped panel: start at its first step, except when
          // scrolling back into it from the next panel, where it should look
          // exactly as it did when the user left.
          const s = steps[target];
          if (s) {
            const backIntoIt = !forward && !jump && target === current - 1;
            stepAt[target] = backIntoIt ? s.labels.length - 1 : 0;
            s.tl.seek(s.labels[stepAt[target]]);
          }

          current = target;

          const tl = gsap.timeline({
            defaults: TRANSITION,
            onComplete: () => {
              gsap.set(from, { autoAlpha: 0, yPercent: 0, scale: 1, zIndex: 0 });
              busy = false;
              syncVideos();
            },
          });

          if (forward) {
            // New panel slides up over the old one, which recedes.
            gsap.set(to, { autoAlpha: 1, yPercent: 100, scale: 1, zIndex: 2 });
            gsap.set(from, { zIndex: 1 });
            tl.to(to, { yPercent: 0 }, 0).to(from, PUSH_BACK, 0);
            // Content reveal runs outside `tl` so it doesn't extend the input lock.
            gsap.fromTo(
              reveals[target],
              { autoAlpha: 0, y: 32 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.08,
                delay: 0.5,
                overwrite: true,
              },
            );
          } else {
            // Old panel slides down, uncovering the new one coming forward.
            gsap.set(to, { autoAlpha: 1, yPercent: 0, zIndex: 1, ...PUSH_BACK });
            gsap.set(from, { zIndex: 2 });
            gsap.set(reveals[target], { autoAlpha: 1, y: 0, overwrite: true });
            tl.to(from, { yPercent: 100 }, 0).to(to, { scale: 1, opacity: 1 }, 0);
          }

          tl.add(() => void gsap.set(to, { zIndex: 1 }));
          announce();
          syncVideos();
        };

        const next = () => {
          const s = steps[current];
          if (s && stepAt[current] < s.labels.length - 1) playStep(stepAt[current] + 1);
          else goTo(current + 1);
        };

        const prev = () => {
          const s = steps[current];
          if (s && stepAt[current] > 0) playStep(stepAt[current] - 1);
          else goTo(current - 1);
        };

        // One gesture = one move. Trackpads keep emitting inertial wheel
        // events for ~1s; ignore them until input has been quiet briefly.
        const gesture = (move: () => void) => {
          if (gestureConsumed || busy) return;
          gestureConsumed = true;
          move();
        };

        const observer = Observer.create({
          target: window,
          type: "wheel,touch",
          wheelSpeed: -1,
          tolerance: 10,
          preventDefault: true,
          ignore: "textarea",
          onUp: () => gesture(next),
          onDown: () => gesture(prev),
          onStop: () => {
            gestureConsumed = false;
          },
        });

        const onKeyDown = (e: KeyboardEvent) => {
          if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
          const el = e.target instanceof Element ? e.target : document.body;
          if (el.closest("input, textarea, select, [contenteditable]")) return;
          if (e.key === " " && el.closest("button, a")) return;

          const action =
            e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)
              ? next
              : e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)
                ? prev
                : e.key === "Home"
                  ? () => goTo(0, true)
                  : e.key === "End"
                    ? () => goTo(panels.length - 1, true)
                    : null;

          if (!action) return;
          e.preventDefault();
          action();
        };

        // Any in-page link (navbar, CTA buttons, dots) drives the scroller.
        const onClick = (e: MouseEvent) => {
          if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
          const link =
            e.target instanceof Element
              ? e.target.closest<HTMLAnchorElement>('a[href^="#"]')
              : null;
          const index = link ? ids.indexOf(link.hash.slice(1)) : -1;
          if (index < 0) return;
          e.preventDefault();
          goTo(index, true);
        };

        // Hash edited by hand or reached via history (replaceState above
        // doesn't fire this, so there's no feedback loop).
        const onHashChange = () => {
          const index = ids.indexOf(location.hash.slice(1));
          goTo(index < 0 ? 0 : index, true);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("hashchange", onHashChange);
        document.addEventListener("click", onClick);

        return () => {
          observer.kill();
          window.removeEventListener("keydown", onKeyDown);
          window.removeEventListener("hashchange", onHashChange);
          document.removeEventListener("click", onClick);
          panels.forEach((panel) => panel.querySelectorAll("video").forEach((v) => v.pause()));
          // Transitions are created after setup, so matchMedia can't revert
          // them; strip their inline styles before flow mode takes over.
          gsap.killTweensOf([...panels, ...reveals.flat()]);
          gsap.set([...panels, ...reveals.flat()], {
            clearProps: "visibility,opacity,transform,zIndex",
          });
        };
      });

      mm.add(FLOW_QUERY, () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root.current);
        const videos = gsap.utils.toArray<HTMLVideoElement>("video", root.current);

        // A thin line across the middle of the viewport decides which
        // section is "active" for the navbar.
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
          },
          { rootMargin: "-50% 0px -50% 0px" },
        );
        panels.forEach((panel) => sectionObserver.observe(panel));

        const videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              const video = target as HTMLVideoElement;
              if (isIntersecting) playVideo(video);
              else video.pause();
            });
          },
          { threshold: 0.35 },
        );
        videos.forEach((video) => videoObserver.observe(video));

        return () => {
          sectionObserver.disconnect();
          videoObserver.disconnect();
          videos.forEach((video) => video.pause());
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <ActiveSectionContext.Provider value={active}>
      <div ref={root} className="relative paged:h-svh paged:overflow-hidden">
        {children}
      </div>
    </ActiveSectionContext.Provider>
  );
}
