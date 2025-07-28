"use client";

import { services_content } from "@/content/services.content";
import { Container } from "../container";
import { Typography } from "../Typography";
import Link from "next/link";
import Image from "next/image";
import icon from "@/assets/services/arrow-right.svg";
import hoveredRocket from "@/assets/services/hovered-rocket.png";
import rocketBg from "@/assets/services/services-bg-vector.svg";
import { motion } from "framer-motion";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 1 } },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.3 } },
};

const slideUpVariant2 = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } },
};

export const ServicesSection = () => {
  return (
    <Container className="panel absolute inset-0 panel-hidden services-section flex flex-col justify-between gap-y-[36.33px] lg:h-screen pt-[87px] pb-[86px] bg-[#0E0224] rounded-tl-[60px] rounded-tr-[60px]">
      {/* Header Animation */}
      <motion.article
        className="services-header-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeInVariant}
      >
        <Typography type="title" size="large" className="hero-title-gradient">
          {services_content.title}
        </Typography>
        <Container
          as="article"
          className="px-0 py-0 lg:px-0 flex justify-between"
        >
          <Typography
            type="sub"
            size="sub-desc"
            className="text-base-70 max-w-[415px]"
          >
            {services_content.desc}
          </Typography>
          <Link
            href="#"
            className="pl-[30px] inline-flex items-center gap-x-[19.97px] overflow-hidden rounded-full bg-white border border-white"
          >
            <Typography
              type="sub"
              size="small"
              className="py-3 text-sm font-semibold primary"
            >
              {services_content.btn_name}
            </Typography>
            <span className="flex h-10 w-10 items-center justify-center rounded-full btn-gradient">
              <Image src={icon.src} alt="arrow" width={16} height={16} />
            </span>
          </Link>
        </Container>
      </motion.article>

      {/* Services Wrapper Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideUpVariant}
      >
        <Container
          as="article"
          className="services_wrapper px-0 lg:px-0 py-0 md:grid flex flex-wrap md:grid-cols-2 xl:grid-cols-3 gap-[28px]"
        >
          {services_content.services_list.map((service, index) => (
            <Container
              key={index}
              className="min-w-[360px] cursor-pointer relative group w-full min-h-[253px] rounded-[19px] py-9 flex flex-col items-center justify-center text-center gap-y-2 overflow-hidden"
            >
              <Container className="basic-container absolute inset-0 box"></Container>
              {/* SVG Blur Background */}
              <div className="absolute bottom-0 flex justify-center items-center pointer-events-none z-50">
                <Image
                  src={rocketBg.src}
                  alt="Rocket background"
                  width={360}
                  height={253}
                  style={{
                    width: "350px",
                    height: "333px",
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              <Container className="basic-container bg-[#0E0224] py-0 absolute inset-[2px] rounded-[18px] z-20 px-8 lg:px-8 ">
                <Container className="py-0 px-8 lg:px-8 absolute inset-0 flex flex-col items-center justify-center text-center gap-y-2 cards-gradient">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-cover mb-4 relative z-10"
                  />
                  <Typography
                    type="title"
                    size="medium"
                    className="text-gradient-silver relative z-10"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    type="sub"
                    size="sub-desc"
                    className="text-base-70 max-md:max-w-[296px] relative z-10"
                  >
                    {service.desc}
                  </Typography>
                </Container>
              </Container>
            </Container>
          ))}
        </Container>
      </motion.div>

      {/* Trusted by Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideUpVariant2}
      >
        <Container className="trusted_by_wrapper basic-container mt-[90px]">
          <Typography
            type="title"
            size="sub-desc"
            className="text-gradient-silver relative z-10 text-center font-bold"
          >
            {services_content.trusted_by}
          </Typography>
          <Container className="basic-container flex gap-x-[37.55px] mt-[37.95px]">
            <div className="relative w-full overflow-hidden">
              {/* Carousel track */}
              <div
                className="flex gap-x-[37.55px] animate-carousel"
                style={{
                  width: "max-content",
                  animation: "carousel-scroll 20s linear infinite",
                }}
              >
                {services_content.trusting_companies.map((company, index) =>
                  Array.from({ length: 15 }).map((_, i) => (
                    <Image
                      key={index + "-" + i}
                      src={company.logo}
                      alt={company.name}
                      width={200}
                      height={100}
                      className="w-[148.08px] h-[29.32px]"
                    />
                  ))
                )}
              </div>
              {/* Left gradient cover */}
              <div
                className="absolute left-0 top-0 h-full pointer-events-none w-[188.87px]"
                style={{
                  background:
                    "linear-gradient(270deg, #0E0224 0%, rgba(14, 2, 36, 0.4) 100%)",
                  zIndex: 2,
                  transform: "matrix(-1, 0, 0, 1, 0, 0)",
                }}
              ></div>
              {/* Right gradient cover */}
              <div
                className="absolute right-0 top-0 h-full w-[80px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(270deg, #0E0224 0%, rgba(14, 2, 36, 0.4) 100%)",
                  zIndex: 2,
                }}
              ></div>
              {/* Carousel keyframes */}
              <style>{`
                @keyframes carousel-scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
            </div>
          </Container>
        </Container>
      </motion.div>
    </Container>
  );
};
