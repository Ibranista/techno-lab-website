import React from "react";
import { cn } from "@/lib/utils";
import { font_accent, font_title } from "@/fonts/fonts";

type TypographyProps<T extends React.ElementType> = {
  type?: "title" | "sub";
  size:
    | "sub-desc"
    | "desc"
    | "large"
    | "medium"
    | "extra-large"
    | "accent-title";
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Typography<T extends React.ElementType = "div">({
  className,
  children,
  type,
  size,
  ...props
}: TypographyProps<T>) {
  const baseFont =
    type === "title" ? font_title.className : font_accent.className;

  const fontSizes = {
    "sub-desc": "14px",
    "extra-large": "44px",
    "accent-title": "24px",
    desc: "16.58px",
    large: "30px",
    medium: "18px",
  };

  const fontSize = fontSizes[size] || undefined;

  return (
    <p
      className={cn(`${baseFont}`, className)}
      {...props}
      style={{
        fontSize: fontSize,
      }}
    >
      {children}
    </p>
  );
}
