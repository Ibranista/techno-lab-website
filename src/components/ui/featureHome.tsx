import React from "react";
import { Container } from "../container";
import { Typography } from "../Typography";
import { featured_services_content } from "@/content/featured.content";

const FeatureHome = () => {
  return (
    <div>
      <Container className="h-screen">
        <Container as="article" className="basic-container">
          <Typography type="title" size="large" className="hero-title-gradient">
            {featured_services_content.name}
          </Typography>
          <Typography
            type="sub"
            size="sub-desc"
            className=" text-base-70 max-w-[415px] text-left"
          >
            {featured_services_content.desc}
          </Typography>
        </Container>
        <Container className="basic-container">
          <p className="bg-sky-700 max-w-[1139px] mx-auto">Hello</p>
        </Container>
      </Container>
    </div>
  );
};

export default FeatureHome;
