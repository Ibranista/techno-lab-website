"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DiffSection = () => {
  const containerRef = useRef(null);
  const skyBoxRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".yellow", { yPercent: 100 })
        .from(".second-yellow", { yPercent: 100 })
        .from(".orange", { xPercent: -100 })
        .from(".purple", { xPercent: 100 })
        .from(".green", { yPercent: -100 });

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / 5,
          duration: 1,
          delay: 0,
          ease: "power1.inOut",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="diff-section h-screen w-full overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-sky-300 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-5xl font-extrabold mb-4">
          Welcome to Our App
        </h1>
        <p className="text-white text-lg max-w-lg mb-6">
          Discover features that help you connect, create, and grow like never
          before.
        </p>
        <div>
          <button className="px-6 py-3 bg-white text-sky-500 font-semibold rounded-full mr-4 hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-sky-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* yellow */}
      <div className="panel yellow bg-yellow-400 h-screen w-full flex items-center justify-center text-white text-4xl font-bold absolute top-0 left-0">
        {/* 300 by 300 box with skyblue background */}
        <div className="skyBox bg-sky-300 h-72 w-72">Yellow panel</div>
      </div>
      <div className="panel second-yellow bg-yellow-700 h-screen w-full flex items-center justify-center text-white text-4xl font-bold absolute top-0 left-0">
        {/* 300 by 300 box with skyblue background */}
        <div className="skyBox bg-sky-300 h-72 w-72">Second Yellow panel</div>
      </div>
      {/* orange */}
      <div className="panel orange bg-orange-500 h-screen w-full flex items-center justify-center text-white text-4xl font-bold absolute top-0 left-0">
        Orange panel
      </div>

      {/* purple */}
      <div className="panel purple bg-purple-500 h-screen w-full flex items-center justify-center text-white text-4xl font-bold absolute top-0 left-0">
        Purple panel
      </div>

      {/* green */}
      <div className="panel green bg-green-500 h-screen w-full flex items-center justify-center text-white text-4xl font-bold absolute top-0 left-0">
        Green panel
      </div>
    </section>
  );
};

export { DiffSection };
