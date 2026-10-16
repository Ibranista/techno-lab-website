import type { Metadata, Viewport } from "next";
import { font_accent } from "@/fonts/fonts";
import "./globals.css";

const description =
  "Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses. Discover our portfolio and trusted partners.";

export const metadata: Metadata = {
  metadataBase: new URL("https://technolab.com"),
  title: "Technolab | Interactive IT Solutions",
  description,
  keywords: [
    "IT Solutions",
    "Digital Transformation",
    "Technolab",
    "Portfolio",
    "Services",
    "Trusted Partners",
  ],
  authors: [{ name: "Technolab" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Technolab | Interactive IT Solutions",
    description,
    images: ["/featured_image.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technolab | Interactive IT Solutions",
    description,
    images: ["/featured_image.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0224",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technolab",
  url: "https://technolab.com",
  logo: "https://technolab.com/favicon.ico",
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font_accent.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
