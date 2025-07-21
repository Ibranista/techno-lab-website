"use client";

import { hero_content } from "@/content/hero.content";
import { font_accent } from "@/fonts/fonts";
import { Typography } from "../Typography";
import { Container } from "../container";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className={`${font_accent.className} px-4 sm:px-6 md:px-8 lg:px-0 mt-[100px] md:mt-[150px] lg:mt-[187px]`}
    >
      <article className="grid gap-8 md:gap-[186px]">
        {/* Title and Description */}
        <div className="grid gap-4">
          <Typography
            type="title"
            size="extra-large"
            className="max-w-full md:max-w-[797px] hero-title-gradient"
          >
            {hero_content.title}
          </Typography>
          <Typography
            type="sub"
            size="desc"
            className="text-shadow max-w-full md:max-w-[602px]"
          >
            {hero_content.desc}
          </Typography>
        </div>

        {/* About and Stats */}
        <div className="grid gap-10 md:gap-0 md:grid-cols-2">
          <Typography
            type="sub"
            size="desc"
            className="text-base-50 max-w-full md:max-w-[293px]"
          >
            {hero_content.abt}
          </Typography>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-[50px] md:ml-auto">
            {hero_content.experience.map((item, index) => (
              <div key={index} className="text-left">
                <Typography
                  size="accent-title"
                  type="title"
                  className="text-gradient-silver text-white"
                >
                  {item.years}
                </Typography>
                <Typography size="desc" type="sub" className=" text-base-65">
                  {item.detail}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
};
