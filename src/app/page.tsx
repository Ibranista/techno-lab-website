"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { Container } from "@/components/container";
import Navbar from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/heroSection";
import { ServicesSection } from "@/components/ui/servicesSection";
import { RocketBackground } from "@/components/RocketBackground";

gsap.registerPlugin(Observer);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const increaseSizeRef = useRef<HTMLDivElement>(null);
  const changeDirectionForDestinationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel") as HTMLElement[];
    const increaseSize = increaseSizeRef.current;
    const changeDirectionForDestination =
      changeDirectionForDestinationRef.current;
    const scalerIndex = sections.findIndex((section) =>
      section.classList.contains("scaler-destination")
    );

    const nextToDestinationIndex = sections.findIndex((section) =>
      section.classList.contains("next-to-destination")
    );

    sections.forEach((section) => {
      if (section.classList.contains("from-left")) {
        gsap.set(section, {
          xPercent: -100,
          yPercent: 0,
          scale: 0.8,
        });
      } else {
        gsap.set(section, {
          visibility: "hidden",
          yPercent: 100,
          xPercent: 0,
          scale: 1,
        });
      }
    });

    gsap.set(sections[0], { yPercent: 0, xPercent: 0 });
    gsap.set(sections, { visibility: "visible" });

    // Set initial size
    if (increaseSize) {
      gsap.set(increaseSize, {
        width: "90%",
        height: "500px",
      });
    }

    function goToSection(index: number) {
      if (isAnimating.current) return;

      index = Math.max(0, Math.min(sections.length - 1, index));
      if (index === currentIndex.current) return;
      isAnimating.current = true;

      const nextSection = sections[index];
      const currentSection = sections[currentIndex.current];

      // --- Handle size effect ---
      if (increaseSize) {
        if (index === scalerIndex) {
          // Going into scalable section
          gsap.to(increaseSize, {
            width: "95%",
            height: "800px",
            duration: 1,
            ease: "power2.out",
            xPercent: 0,
          });
        } else if (
          currentIndex.current === scalerIndex &&
          index < scalerIndex
        ) {
          // Going back from scalable section
          gsap.to(increaseSize, {
            width: "90%",
            height: "500px",
            duration: 1,
            ease: "power2.out",
            xPercent: 0,
          });
        }
        // when leaving the scaler index and it's now on nextToDestinationIndex move it to -100
        // else if (
        //   currentIndex.current === scalerIndex &&
        //   index === nextToDestinationIndex
        // ) {
        //   gsap.to(increaseSize, {
        //     xPercent: -100,
        //   });
        // }
        // when coming back to it after leaving it from the next section
        // else
        //   console.log("coming back:", {
        //     currentIndex: currentIndex.current,
        //     scalerIndex,
        //     index,
        //     nextToDestinationIndex,
        //   });
      }

      if (changeDirectionForDestination) {
        if (index === nextToDestinationIndex) {
          gsap.to(increaseSize, {
            xPercent: -100,
          });
        }
      }

      // change direction for destination

      // --- Panel transitions ---
      if (nextSection.classList.contains("from-left")) {
        gsap.set(nextSection, { yPercent: 0, scale: 0.8 });
        gsap.to(nextSection, {
          xPercent: 0,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
        if (currentSection.classList.contains("from-left")) {
          gsap.to(currentSection, {
            xPercent: -100,
            scale: 0.8,
            duration: 1,
            ease: "power2.inOut",
          });
        }
      } else if (currentSection.classList.contains("from-left")) {
        gsap.set(nextSection, { xPercent: 0, scale: 1 });
        gsap.to(currentSection, {
          xPercent: -100,
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(nextSection, {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      } else if (index > currentIndex.current) {
        gsap.to(nextSection, {
          yPercent: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      } else {
        gsap.to(currentSection, {
          yPercent: 100,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        });
      }

      currentIndex.current = index;
    }

    Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => goToSection(currentIndex.current - 1),
      onUp: () => goToSection(currentIndex.current + 1),
      onPress: () => goToSection(currentIndex.current + 1),
      tolerance: 10,
      preventDefault: true,
      dragMinimum: 10,
    });

    let touchStartY = 0;
    let touchEndY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].screenY;
      if (Math.abs(touchStartY - touchEndY) > 50) {
        goToSection(
          currentIndex.current + (touchStartY - touchEndY > 0 ? 1 : -1)
        );
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      Observer.getAll().forEach((obs) => obs.kill());
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <Container className="panel absolute inset-0 panel-hidden h-screen bg-[url('../assets/hero-bg.svg')] bg-no-repeat bg-center bg-[length:auto_100%] nav-hero-wrapper">
        <Navbar />
        <HeroSection />
        <div
          ref={heroOverlayRef}
          className="hero-overlay absolute inset-0 bg-black opacity-0 pointer-events-none"
        ></div>
      </Container>

      <ServicesSection />
      <RocketBackground
        increaseSizeRef={increaseSizeRef}
        changeDirectionForDestinationRef={changeDirectionForDestinationRef}
      />

      <div
        ref={changeDirectionForDestinationRef}
        className="panel absolute inset-0 panel-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white flex items-center justify-center"
      >
        under
      </div>
      <div className="panel absolute inset-0 panel-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex items-center justify-center">
        ...
      </div>
      <div className="panel from-left absolute inset-0 panel-hidden text-white flex items-center justify-center bg-orange-200">
        ...
      </div>
    </div>
  );
}
