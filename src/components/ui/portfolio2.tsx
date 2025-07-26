"use client";
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../container";

export default function Portfolio1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

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
    <Container className="portfolio2 h-screen flex justify-center items-center py-[30px]">
      <motion.div
        ref={containerRef}
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
        <video
          ref={videoRef}
          src={"/portfolio-item-2.mp4"}
          style={{ height: "100%", objectFit: "cover" }}
          className="w-screen"
          muted
          loop
          playsInline
          controls={false}
        />
      </motion.div>
    </Container>
  );
}
