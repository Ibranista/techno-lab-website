"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function TheBox() {
  const container = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  const { contextSafe } = useGSAP(
    (ctx) => {
      // Any timeline or initial animations can go here
      // but for click-triggered animation, we wrap in contextSafe()
      const handleClick = contextSafe(() => {
        gsap.fromTo(
          boxRef.current,
          { width: 200, height: 200 },
          {
            width: 500,
            height: 500,
            duration: 1.2,
            ease: "power1.inOut",
            overwrite: "auto",
          }
        );
      });

      // Add and clean up listener
      boxRef.current?.addEventListener("click", handleClick);
      return () => {
        boxRef.current?.removeEventListener("click", handleClick);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div
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
          cursor: "pointer",
        }}
        className="thebox"
      >
        The Box
      </div>
    </div>
  );
}
