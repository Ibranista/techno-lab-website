"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import FeatureHome from "@/components/ui/featureHome";
import { Container } from "@/components/container";
import { HeroSection } from "@/components/ui/heroSection";
import { ServicesSection } from "@/components/ui/servicesSection";
import Portfolio2 from "@/components/ui/portfolio2";
import ContactUs from "@/components/ui/contactUs";
import Navbar from "@/components/ui/navbar";

gsap.registerPlugin(Observer);

export default function Test2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const page3State = useRef(0); // 0: initial, 1: box grown, 2: box moved left

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel") as HTMLElement[];

    // Set initial positions - all panels start from bottom except first one
    sections.forEach((section, index) => {
      if (index === 0) {
        gsap.set(section, {
          visibility: "visible",
          yPercent: 0,
        });
      } else {
        gsap.set(section, {
          visibility: "visible",
          yPercent: 100,
        });
      }
    });

    // Initialize page 3 elements
    const page3BoxContainer = document.querySelector(
      ".page3-box-container"
    ) as HTMLElement;
    const page3Box = document.querySelector(".page3-box") as HTMLElement;
    const page3RevealBox = document.querySelector(
      ".page3-reveal"
    ) as HTMLElement;

    if (page3BoxContainer && page3Box && page3RevealBox) {
      gsap.set(page3BoxContainer, { x: 0 });
      gsap.set(page3Box, { width: "100%", height: 400 });
      gsap.set(page3RevealBox, { opacity: 1 }); // Always visible behind
    }

    // Function to update navigation background with smooth animation
    function updateNavBackground(index: number) {
      const nav = document.querySelector(".dynamic-nav") as HTMLElement;
      const navButtons = document.querySelectorAll(
        ".nav-button"
      ) as NodeListOf<HTMLElement>;

      if (nav) {
        if (index === 2) {
          // Feature page - animate to orange background
          gsap.to(nav, {
            // opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        } else {
          // All other pages - animate to default background
          gsap.to(nav, {
            // opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
          // Animate text color to white
          navButtons.forEach((button) => {
            gsap.to(button, {
              color: "rgb(255 255 255)",
              duration: 0.6,
              ease: "power2.out",
            });
          });
        }
      }
    }

    function handlePage3Sequence() {
      const page3BoxContainer = document.querySelector(
        ".page3-box-container"
      ) as HTMLElement;
      const page3Box = document.querySelector(".page3-box") as HTMLElement;

      if (!page3BoxContainer || !page3Box) return;

      if (page3State.current === 0) {
        // Grow the box
        isAnimating.current = true;
        gsap.to(page3Box, {
          width: "105%",
          height: 700,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            page3State.current = 1;
            isAnimating.current = false;
          },
        });
      } else if (page3State.current === 1) {
        // Move entire container left with scale, background, and opacity effects
        isAnimating.current = true;
        gsap.to(page3BoxContainer, {
          x: "-100%",
          scaleY: 0.3,
          backgroundColor: "#ffffff",
          opacity: 0.7,
          transformOrigin: "center center",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            page3State.current = 2;
            isAnimating.current = false;
          },
        });
      } else if (page3State.current === 2) {
        // Continue to next page
        goToSection(currentIndex.current + 1, false);
      }
    }

    function handlePage3Reverse() {
      const page3BoxContainer = document.querySelector(
        ".page3-box-container"
      ) as HTMLElement;
      const page3Box = document.querySelector(".page3-box") as HTMLElement;

      if (!page3BoxContainer || !page3Box) return;

      if (page3State.current === 2) {
        // Bring container back from right with reverse effects
        isAnimating.current = true;
        gsap.to(page3BoxContainer, {
          x: 0,
          scaleY: 1,
          backgroundColor: "#0E0224", // green-500
          opacity: 1,
          transformOrigin: "center center",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            page3State.current = 1;
            isAnimating.current = false;
          },
        });
      } else if (page3State.current === 1) {
        // Shrink the box back
        isAnimating.current = true;
        gsap.to(page3Box, {
          width: "100%",
          height: 400,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            page3State.current = 0;
            isAnimating.current = false;
          },
        });
      }
    }

    function goToSection(index: number, isNavClick = false) {
      if (isAnimating.current) return;
      index = Math.max(0, Math.min(sections.length - 1, index));
      if (index === currentIndex.current) return;

      // Handle Page 3 special sequence - only for scroll/touch, not nav clicks
      if (currentIndex.current === 2 && !isNavClick) {
        if (index > currentIndex.current && page3State.current < 2) {
          handlePage3Sequence();
          return;
        } else if (index < currentIndex.current && page3State.current > 0) {
          handlePage3Reverse();
          return;
        }
      }

      isAnimating.current = true;
      const nextSection = sections[index];
      const currentSection = sections[currentIndex.current];

      if (isNavClick) {
        // Navigation click behavior - both sections move simultaneously
        const direction = index > currentIndex.current ? 1 : -1;

        // Ensure next section is in the right starting position
        gsap.set(nextSection, { yPercent: direction * 100 });

        // Create timeline for simultaneous movement with smoother easing
        const tl = gsap.timeline({
          onComplete: () => {
            // Reset all non-visible sections to be below viewport for scroll consistency
            sections.forEach((section, i) => {
              if (i !== index) {
                gsap.set(section, { yPercent: 100 });
              }
            });

            // Always reset page 3 state when navigating via nav click
            if (currentIndex.current === 2 || index === 2) {
              page3State.current = 0;
              const page3BoxContainer = document.querySelector(
                ".page3-box-container"
              ) as HTMLElement;
              const page3Box = document.querySelector(
                ".page3-box"
              ) as HTMLElement;
              if (page3BoxContainer && page3Box) {
                gsap.set(page3BoxContainer, {
                  x: 0,
                  scaleY: 1,
                  backgroundColor: "#0E0224",
                  opacity: 1,
                });
                gsap.set(page3Box, { width: "100%", height: 400 });
              }
            }

            // Smoothly animate hero overlay when navigating to home via nav click
            if (index === 0) {
              const heroOverlay = document.querySelector(
                ".hero-overlay"
              ) as HTMLElement;
              if (heroOverlay) {
                gsap.to(heroOverlay, {
                  opacity: 0,
                  duration: 0.8,
                  ease: "power2.out",
                });
              }
            }

            // Update navigation background with animation
            updateNavBackground(index);
            isAnimating.current = false;
          },
        });

        // Move next section into view with smoother easing
        tl.to(nextSection, {
          yPercent: 0,
          duration: 0.8, // Slightly faster for snappier feel
          ease: "power3.out", // Smoother easing
        });

        // Move current section out of view with smoother easing
        tl.to(
          currentSection,
          {
            yPercent: -direction * 100,
            duration: 0.8, // Slightly faster for snappier feel
            ease: "power3.out", // Smoother easing
          },
          0 // Start at the same time
        );
      } else {
        // Scroll/touch behavior - stacking effect
        // Animate hero-overlay when moving from page 1 to page 2
        if (currentIndex.current === 0 && index === 1) {
          const heroOverlay = document.querySelector(
            ".hero-overlay"
          ) as HTMLElement;
          if (heroOverlay) {
            gsap.to(heroOverlay, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }
        }

        // Animate hero-overlay back to 0 when returning to page 1
        if (index === 0) {
          const heroOverlay = document.querySelector(
            ".hero-overlay"
          ) as HTMLElement;
          if (heroOverlay) {
            gsap.to(heroOverlay, {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }
        }

        if (index > currentIndex.current) {
          // Moving forward - next section slides up from bottom
          gsap.set(nextSection, { yPercent: 100 });
          gsap.to(nextSection, {
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              // Animate hero-overlay back to 0 after transition
              if (currentIndex.current === 0 && index === 1) {
                const heroOverlay = document.querySelector(
                  ".hero-overlay"
                ) as HTMLElement;
                if (heroOverlay) {
                  gsap.to(heroOverlay, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                  });
                }
              }

              // Update navigation background with animation
              updateNavBackground(index);
              isAnimating.current = false;

              // Reset page 3 state when leaving via scroll
              if (currentIndex.current === 2) {
                page3State.current = 0;
                const page3BoxContainer = document.querySelector(
                  ".page3-box-container"
                ) as HTMLElement;
                const page3Box = document.querySelector(
                  ".page3-box"
                ) as HTMLElement;
                if (page3BoxContainer && page3Box) {
                  gsap.set(page3BoxContainer, { x: 0 });
                  gsap.set(page3Box, { width: "100%", height: 400 });
                }
              }
            },
          });
        } else {
          // Moving backward - current section slides down to bottom
          gsap.set(nextSection, { yPercent: 0 }); // Ensure target section is visible
          gsap.to(currentSection, {
            yPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              // Update navigation background with animation
              updateNavBackground(index);
              isAnimating.current = false;
            },
          });
        }
      }

      currentIndex.current = index;
    }

    // Navigation function for nav links
    function navigateToSection(index: number) {
      goToSection(index, true); // true = nav click behavior
    }

    // Expose navigation function globally for nav links
    window.navigateToSection = navigateToSection;

    // Enhanced scroll handling with touchpad sensitivity fix
    let lastScrollTime = 0;
    let scrollAccumulator = 0;
    let scrollTimeout: NodeJS.Timeout;
    const scrollThreshold = 900; // Longer cooldown between page changes
    const deltaThreshold = 100; // Minimum accumulated delta to trigger page change

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();

      // If we're still animating or in cooldown, ignore all scroll events
      if (isAnimating.current || now - lastScrollTime < scrollThreshold) {
        return;
      }

      // Detect if this is likely a touchpad (smaller, more frequent deltas)
      const isTouchpad = Math.abs(e.deltaY) < 50;

      if (isTouchpad) {
        // For touchpad: accumulate small deltas until threshold is reached
        scrollAccumulator += e.deltaY;

        // Clear timeout to reset accumulator if user stops scrolling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          scrollAccumulator = 0;
        }, 150);

        // Only trigger page change when accumulated delta exceeds threshold
        if (Math.abs(scrollAccumulator) >= deltaThreshold) {
          const direction = scrollAccumulator > 0 ? 1 : -1;

          if (direction > 0) {
            goToSection(currentIndex.current + 1, false);
            lastScrollTime = now;
            scrollAccumulator = 0;
          } else if (direction < 0) {
            goToSection(currentIndex.current - 1, false);
            lastScrollTime = now;
            scrollAccumulator = 0;
          }
        }
      } else {
        // For mouse wheel: immediate response (larger deltas)
        if (e.deltaY > 0) {
          goToSection(currentIndex.current + 1, false);
          lastScrollTime = now;
        } else if (e.deltaY < 0) {
          goToSection(currentIndex.current - 1, false);
          lastScrollTime = now;
        }
      }
    };

    // Add wheel event listener
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Keep the original Observer for touch and pointer events
    Observer.create({
      target: window,
      type: "touch,pointer", // Remove wheel from here since we handle it separately
      onDown: () => goToSection(currentIndex.current - 1, false),
      onUp: () => goToSection(currentIndex.current + 1, false),
      onPress: () => {
        if (currentIndex.current === 2 && page3State.current < 2) {
          handlePage3Sequence();
        } else {
          goToSection(currentIndex.current + 1, false);
        }
      },
      ignore: ".ignore-me",
      tolerance: 10,
      preventDefault: true,
      dragMinimum: 10,
    });

    return () => {
      Observer.getAll().forEach((obs) => obs.kill());
      delete window.navigateToSection;
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleNavClick = (index: number) => {
    if (window.navigateToSection) {
      window.navigateToSection(index);
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <Navbar handleClick={handleNavClick} />

      {/* Page 1 */}
      <Container className="panel absolute inset-0 h-screen bg-[url('../assets/hero-bg.svg')] bg-no-repeat bg-center bg-[length:auto_100%] nav-hero-wrapper">
        <HeroSection />
        <div
          className="hero-overlay absolute inset-0 bg-black opacity-0 pointer-events-none z-10"
          style={{ willChange: "opacity" }}
        ></div>
      </Container>

      {/* Page 2 */}
      <ServicesSection handleClick={handleNavClick} />

      {/* Page 3 */}
      <FeatureHome />

      {/* Page 4 */}
      <Portfolio2 />

      {/* Page 5 */}
      <ContactUs />
    </div>
  );
}
