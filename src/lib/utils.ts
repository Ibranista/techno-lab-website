import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// sanitize any white spaces
export const sanitize = (text: string) => {
  return text.replace(/\s+/g, "");
};
