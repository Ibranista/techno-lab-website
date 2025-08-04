import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// sanitize any white spaces
export const sanitize = (text: string) => {
  return text.replace(/\s+/g, "");
};

// scroller
export const scrollToSection = (
  idName: string,
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  e.preventDefault();
  const element = document.getElementById(idName);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
