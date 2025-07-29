"use client";
import React from "react";
import { Container } from "../container";
import { Typography } from "../Typography";
import { featured_services_content } from "@/content/featured.content";
import Portfolio1 from "./portfolio1";

const FeatureHome = () => {
  return (
    <Container className="panel absolute inset-0 bg-[#0E0224] text-white overflow-hidden rounded-3xl">
      {/* Reveal box (always behind, full screen) */}
      <div className="page3-reveal absolute inset-0 bg-gradient-to-br  flex items-center justify-center">
        <Portfolio1 />
      </div>

      {/* Box container (full screen, slides left) */}
      <Container className="page3-box-container py-30px flex-col absolute inset-0 bg-[#0E0224] flex items-center justify-center">
        {/* The actual box */}
        <div
          className="relative page3-box text-black font-bold rounded-lg shadow-lg flex items-center justify-center text-sm"
          style={{
            width: "100%",
            height: "400px",
            // from public folder use featured_image for bg
            backgroundImage: 'url("/featured_image.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container
            as="article"
            className="basic-container absolute -top-32 left-0 rounded-3xl"
          >
            <Typography
              type="title"
              size="large"
              className="hero-title-gradient font-extralight"
            >
              {featured_services_content.name}
            </Typography>
            <Typography
              type="sub"
              size="sub-desc"
              className=" text-base-70 max-w-[415px] text-left font-normal"
            >
              {featured_services_content.desc}
            </Typography>
          </Container>
        </div>
      </Container>
    </Container>
  );
};

export default FeatureHome;
