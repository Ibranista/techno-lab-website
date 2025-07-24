"use client";
import "@/styles/animation.css";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function RocketBackground() {
  const container = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  // For development: call this to refresh the GSAP animation
  const refresh = () => {
    window.location.reload();
  };

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".b",
            toggleActions: "restart none reverse start",
            start: "center center",
            end: "bottom -264px",
            scrub: false,
            // markers: true,
            pin: true,
          },
        })
        .to(".b", {
          x: 350,
          duration: 3,
        });
    },
    { scope: container, dependencies: [animationKey] } // ← this watches for changes
  );

  return (
    <div
      ref={container}
      style={{
        background: `repeating-linear-gradient(90deg, #e5e7eb 0 1px, transparent 1px 40px), repeating-linear-gradient(180deg, #e5e7eb 0 1px, transparent 1px 40px)`,
      }}
    >
      <button
        onClick={refresh}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 9999,
          padding: "8px 12px",
          background: "black",
          color: "white",
        }}
      >
        Refresh GSAP
      </button>

      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="boxy a"></div>
      </section>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4f6",
        }}
      >
        <div className="boxy b"></div>
      </section>
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="boxy c"></div>
      </section>
    </div>
  );
}
