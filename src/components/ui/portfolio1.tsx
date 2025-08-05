"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../container";

export default function Portfolio1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  console.log("is loaded video:", isVideoLoaded);
  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <Container className="portfolio1 h-screen flex justify-center items-center py-[30px] bg-[#0E0224]">
      <motion.div
        ref={containerRef}
        className="relative"
        style={{
          borderRadius: 30,
          overflow: "hidden",
          background: "#18181b",
          maxHeight: "100%",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/50">
            <div className="w-16 h-16 relative flex items-center justify-center">
              <span
                className="block w-full h-full rounded-full border-4 border-t-4 border-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"
                style={{
                  borderTopColor: "transparent",
                  borderRightColor: "transparent",
                  borderLeftColor: "transparent",
                  borderBottomColor: "#fff",
                }}
              ></span>
              <span className="absolute w-10 h-10 rounded-full border-2 border-dashed border-white opacity-40 animate-spin-reverse" />
            </div>
            <span className="mt-4 text-white text-sm font-medium opacity-80">
              Loading video...
            </span>
            <style>{`
              @keyframes spin-slow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 1.2s linear infinite;
              }
              @keyframes spin-reverse {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(-360deg); }
              }
              .animate-spin-reverse {
                animation: spin-reverse 2s linear infinite;
              }
            `}</style>
          </div>
        )}
        <video
          ref={videoRef}
          src={"/portfolio-item.mp4"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          loop
          playsInline
          controls={false}
          onCanPlay={() => {
            setIsVideoLoaded(true);
          }}
        />
      </motion.div>
    </Container>
  );
}
