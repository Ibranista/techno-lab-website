import { PageScroller } from "@/components/scroller/PageScroller";
import Navbar from "@/components/ui/navbar";
import PageDots from "@/components/ui/pageDots";
import { HeroSection } from "@/components/ui/heroSection";
import { ServicesSection } from "@/components/ui/servicesSection";
import FeaturedWork from "@/components/ui/featuredWork";
import Portfolio from "@/components/ui/portfolio";
import ContactUs from "@/components/ui/contactUs";

export default function Home() {
  return (
    <PageScroller>
      <Navbar />
      <PageDots />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedWork />
        <Portfolio />
        <ContactUs />
      </main>
    </PageScroller>
  );
}
