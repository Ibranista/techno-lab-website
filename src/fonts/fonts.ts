import localFont from "next/font/local";
import { Inter } from "next/font/google";
export const font_title = localFont({
  src: [
    {
      path: "./CraftworkGrotesk-Heavy.ttf",
      weight: "400",
      style: "Heavy",
    },
  ],
  variable: "--font-header",
  display: "swap",
});

export const font_accent = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-font_accent",
  display: "swap",
});
