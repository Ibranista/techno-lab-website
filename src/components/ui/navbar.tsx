"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/Technolab-Logo.svg";
import { CloseIcon, HumIcon } from "@/assets/icons";
import { nav_content } from "@/content/nav.content";
import { font_accent } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/components/scroller/PageScroller";

// "Works" stays highlighted while the portfolio section is showing.
const navIdFor = (section: string) => (section === "portfolio" ? "works" : section);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = navIdFor(useActiveSection());

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={cn(
        font_accent.className,
        "animate-fade fixed inset-x-0 top-0 z-50 [--delay:0.3s]",
        "flow:bg-ink/85 flow:border-b flow:border-white/5",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex items-center justify-between px-7 py-5 lg:px-[72px] paged:py-7"
      >
        <a href="#home" aria-label="Technolab home" className="shrink-0">
          <Image src={logo} alt="" priority className="h-[30px] w-auto lg:h-[33px]" />
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {nav_content.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300",
                    isActive
                      ? "bg-white text-[#260464]"
                      : "text-white/75 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="-mr-2 rounded-full p-2 text-white md:hidden"
        >
          <HumIcon />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        aria-hidden
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={cn(
          "fixed inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col border-l border-white/10 bg-ink-raised p-6 shadow-2xl",
          "transition-transform duration-500 ease-out-expo md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="-mr-2 self-end rounded-full p-2 text-white/70 hover:text-white"
        >
          <CloseIcon />
        </button>
        <ul className="mt-8 flex flex-col gap-2">
          {nav_content.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={item.id === active ? "true" : undefined}
                className={cn(
                  "block rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                  item.id === active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
