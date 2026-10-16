import React from "react";
import { cn } from "@/lib/utils";
import { font_accent, font_title } from "@/fonts/fonts";

// Font sizes used in Typography. Large sizes are fluid so headings scale
// between phone and desktop without per-breakpoint overrides.
export const fontSizes = {
  "sub-desc": "14px",
  small: "12px",
  "extra-large": "clamp(2.25rem, 1.35rem + 2.6vw, 3.75rem)",
  "accent-title": "clamp(1.5rem, 1.2rem + 0.8vw, 2rem)",
  desc: "clamp(15px, 0.9rem + 0.15vw, 17px)",
  large: "clamp(1.75rem, 1.35rem + 1.2vw, 2.5rem)",
  medium: "18px",
} as const;

export type FontSize = keyof typeof fontSizes;

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  type?: "title" | "sub";
  size: FontSize;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "type" | "size">;

export function Typography<T extends React.ElementType = "p">({
  as,
  className,
  children,
  type,
  size,
  style,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";
  const baseFont =
    type === "title" ? font_title.className : font_accent.className;

  return (
    <Component
      className={cn(baseFont, className)}
      {...props}
      style={{ fontSize: fontSizes[size], ...style }}
    >
      {children}
    </Component>
  );
}
