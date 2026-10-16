"use client";

import { sections } from "@/content/nav.content";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/components/scroller/PageScroller";

/** Section progress indicator, only shown in paged mode. */
export default function PageDots() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Sections"
      className="animate-fade fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-3 [--delay:0.6s] paged:flex"
    >
      {sections.map((section) => {
        const isActive = section.id === active;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.label}
            aria-current={isActive ? "true" : undefined}
            className="group flex h-5 w-5 items-center justify-center"
          >
            <span
              className={cn(
                "block w-1.5 rounded-full transition-[height,background-color] duration-500 ease-out-expo",
                isActive
                  ? "h-5 bg-secondary-main"
                  : "h-1.5 bg-white/30 group-hover:bg-white/70",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
