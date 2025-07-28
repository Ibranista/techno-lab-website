"use client";
import "@/styles/animation.css";

import React, { RefObject } from "react";
import { Typography } from "./Typography";
import { Container } from "./container";
import { featured_services_content } from "@/content/featured.content";

export function RocketBackground({
  increaseSizeRef,
  changeDirectionForDestinationRef,
}: {
  increaseSizeRef?: RefObject<HTMLDivElement | null>;
  changeDirectionForDestinationRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="panel increase-size absolute inset-0 panel-hidden flex justify-center items-center bg-[#0E0224] py-[87px]">
      <Container
        ref={increaseSizeRef}
        className="to-be-scaled rounded-[30px] my-auto mx-auto relative"
        style={{
          width: "90%",
          height: "422px",
        }}
      >
        <section
          className="rounded-[30px] absolute inset-0 bg-[url('../assets/featured/featured_work.png')] bg-no-repeat bg-center 
        bg-cover
        "
        >
          <Container
            as="article"
            className="basic-container absolute -top-[180px] left-0"
          >
            <Typography
              type="title"
              size="large"
              className="hero-title-gradient"
            >
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
        </section>
        <div
          // ref={changeDirectionForDestinationRef}
          className="panel scaler-destination absolute inset-0 panel-hidden bg-amber-700-300 flex justify-center items-center"
        ></div>
      </Container>
      <div className="next-to-destination panel absolute inset-0 panel-hidden text-white flex items-center justify-center bg-gray-900">
        mover
      </div>
    </section>
  );
}
