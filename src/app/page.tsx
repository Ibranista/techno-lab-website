"use client";

import { Container } from "@/components/container";
import Navbar from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/heroSection";
import { ServicesSection } from "@/components/ui/servicesSection";
import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const observerRef = useRef<Observer | null>(null);
  const animatingRef = useRef(false);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(".services-section", { yPercent: -100 });
      tl.to(".hero-overlay", { opacity: 1 }, "<");
      tlRef.current = tl;

      const handleScroll = (direction: "down" | "up") => {
        if (animatingRef.current || !tl) return;
        animatingRef.current = true;
        observerRef.current?.disable();

        gsap.to(tl, {
          progress: direction === "down" ? 1 : 0,
          duration: 1.2,
          ease: "power1.inOut",
          onComplete: () => {
            animatingRef.current = false;
            observerRef.current?.enable();
          },
        });
      };

      const obs = Observer.create({
        target: container,
        type: "wheel,touch",
        tolerance: 5,
        // Remove onClick here, because it doesn't exist in Observer API
        onDown: () => handleScroll("down"),
        onUp: () => handleScroll("up"),
      });

      observerRef.current = obs;

      // Add click listener manually
      const onClick = () => {
        handleScroll("down");
      };
      container.addEventListener("click", onClick);

      return () => {
        obs.kill();
        tl.kill();
        container.removeEventListener("click", onClick);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="overflow-hidden h-screen">
      <Container className="h-screen bg-[url('../assets/hero-bg.svg')] bg-no-repeat bg-center bg-[length:auto_100%] nav-hero-wrapper">
        <Navbar />
        <HeroSection />
        <div className="hero-overlay absolute inset-0 bg-black opacity-0 pointer-events-none"></div>
      </Container>
      <ServicesSection />
    </div>
  );
}
