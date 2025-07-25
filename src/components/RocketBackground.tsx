"use client";
import "@/styles/animation.css";

import React, { useEffect, useRef, useState } from "react";
import { TheBox } from "./TheBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function RocketBackground() {
  const boxRef = useRef<HTMLDivElement>(null);
  const container = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  // For development: call this to refresh the GSAP animation
  const refresh = () => {
    window.location.reload();
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".a", { yPercent: 100 });
      // tl.to(".b", {
      //   // x: 350,
      //   duration: 3,
      //   scrollTrigger: {
      //     trigger: ".b",
      //     toggleActions: "restart pause reverse start",
      //     start: "center 49%",
      //     // end: "+=200px",
      //     endTrigger: ".c",
      //     end: "center center",
      //     scrub: true,
      //     markers: true,
      //     pin: true,
      //     anticipatePin: 1,
      //     snap: {
      //       snapTo: 1,
      //       duration: 1,
      //       delay: 0,
      //       ease: "power1.inOut",
      //     },
      //   },
      //   // scale: 1.2,
      // });
      // animate h1 when b is at center 49% and end is c at center center,
      if (boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { width: 200, height: 200 },
          {
            width: 500,
            height: 800,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: ".box-trigger-wrapper",
              start: "center 50%",
              endTrigger: ".c",
              end: "center center",
              scrub: true,
              pin: true,
              anticipatePin: 1,
              snap: { snapTo: 1, duration: 1, delay: 0, ease: "power1.inOut" },
              markers: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    },
    { scope: container, dependencies: [animationKey] } // ← this watches for changes
  );

  return (
    <div
      ref={container}
      style={{
        background: `repeating-linear-gradient(90deg, #e5e7eb 0 1px, transparent 1px 40px), repeating-linear-gradient(180deg, #e5e7eb 0 1px, transparent 1px 40px)`,
      }}
      className=""
    >
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4f6",
          flexDirection: "column",
        }}
      >
        <div
          className="box-trigger-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "#f3f4f6",
          }}
        >
          <div
            className="boxy b"
            ref={boxRef}
            style={{
              background: "#6366f1",
              width: 200,
              height: 200,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 600,
              fontSize: 24,
              margin: 32,
              position: "relative",
            }}
          >
            <h1 className="mb-12 absolute -top-[114px] text-orange-400">
              hello
            </h1>
          </div>
        </div>
        {/* Demo TheBox below */}
        {/* <TheBox /> */}
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
