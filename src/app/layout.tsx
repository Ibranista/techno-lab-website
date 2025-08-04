import type { Metadata } from "next";
import "./globals.css";
import "@/styles/general.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Techno Lab | Innovative IT Solutions",
  description:
    "Techno Lab provides cutting-edge IT solutions, services, and digital transformation for businesses. Discover our portfolio and trusted partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero-bg.svg"
          type="image/svg+xml"
        />
        <meta
          name="description"
          content="Techno Lab provides cutting-edge IT solutions, services, and digital transformation for businesses. Discover our portfolio and trusted partners."
        />
        <meta
          name="keywords"
          content="IT Solutions, Digital Transformation, Techno Lab, Portfolio, Services, Trusted Partners"
        />
        <meta name="author" content="Techno Lab" />
        <meta
          property="og:title"
          content="Techno Lab | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Techno Lab provides cutting-edge IT solutions, services, and digital transformation for businesses."
        />
        <meta property="og:image" content="/featured_image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technolab.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Techno Lab | Innovative IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Techno Lab provides cutting-edge IT solutions, services, and digital transformation for businesses."
        />
        <meta name="twitter:image" content="/featured_image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techno Lab",
              url: "https://technolab.com",
              logo: "/assets/Technolab-Logo.svg",
              description:
                "Techno Lab provides cutting-edge IT solutions, services, and digital transformation for businesses.",
            }),
          }}
        />
      </Head>
      <body className="scrollbar-hide">
        {children}
        {/* <RocketBackground /> */}
        {/* <DiffSection /> */}
      </body>
    </html>
  );
}
