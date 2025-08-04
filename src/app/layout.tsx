import type { Metadata } from "next";
import "./globals.css";
import "@/styles/general.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Technolab | Interactive IT Solutions",
  description:
    "Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses. Discover our portfolio and trusted partners.",
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
          content="Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses. Discover our portfolio and trusted partners."
        />
        <meta
          name="keywords"
          content="IT Solutions, Digital Transformation, Technolab, Portfolio, Services, Trusted Partners"
        />
        <meta name="author" content="Technolab" />
        <meta
          property="og:title"
          content="Technolab | Interactive IT Solutions"
        />
        <meta
          property="og:description"
          content="Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses."
        />
        <meta property="og:image" content="/featured_image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://technolab.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Technolab | Interactive IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses."
        />
        <meta name="twitter:image" content="/featured_image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Technolab",
              url: "https://technolab.com",
              logo: "/assets/Technolab-Logo.svg",
              description:
                "Technolab provides cutting-edge IT solutions, services, and digital transformation for businesses.",
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
