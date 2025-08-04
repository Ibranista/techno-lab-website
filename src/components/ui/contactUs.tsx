"use client";

import { contact_content } from "@/content/contactUs.content";
import { Container } from "../container";
import { Typography } from "../Typography";
import Image from "next/image";
import { footer_content } from "@/content/footer.content";
import icon from "@/assets/services/arrow-right.svg";

export default function ContactUs() {
  return (
    <Container
      className="contact-us panel absolute inset-0 max-md:pb-[15px] pb-8 md:overflow-clip max-md:pt-[53px] bg-[#0E0224] text-white flex flex-col gap-y-[36.33px] lg:h-screen pt-[87px] rounded-tl-[60px] rounded-tr-[60px]"
      // style={{
      //   backgroundImage: `url(${contactUsBg.src})`,
      //   backgroundPosition: "right",
      //   backgroundSize: "55% 100%",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Container
        className="basic-container absolute inset-0 main-contact-bg z-0"
        style={{ willChange: "transform, opacity" }}
      />

      <Container className="flex justify-between gap-x-[165px] items-center basic-container h-full max-md:flex-wrap max-md:gap-x-0">
        {/* left side */}
        <Container
          as="article"
          className="basic-container w-full max-md:relative"
        >
          <Container as="article" className="basic-container">
            <Typography
              size="large"
              type="title"
              className="hero-title-gradient"
            >
              {contact_content.title}
            </Typography>
            <Typography
              size="sub-desc"
              type="sub"
              className="mt-2 text-base-70"
            >
              {contact_content.description}
            </Typography>
          </Container>
          <Container className="basic-container mt-[43px]">
            {contact_content.contacts.map((contact, index) => (
              <Container
                as="article"
                key={index}
                className="flex items-center gap-x-3 mt-6 basic-container"
              >
                <Image
                  src={contact.image}
                  alt={contact.type}
                  width={50}
                  height={50}
                  className="self-start w-[50px] h-[50px]"
                />
                <article className="flex flex-col gap-y-[8px]">
                  <Typography
                    size="sub-desc"
                    type="title"
                    className="text-secondary-main"
                  >
                    {contact.type}
                  </Typography>
                  <Typography
                    size="sub-desc"
                    type="sub"
                    className="text-base-70"
                  >
                    {contact.desc}
                  </Typography>
                  <Typography
                    size="sub-desc"
                    type="sub"
                    className="text-white font-semibold"
                  >
                    {contact.value}
                  </Typography>
                </article>
              </Container>
            ))}
          </Container>
        </Container>
        {/* right side */}
        {/* <Container as="article" className="absolute inset-0 bg-orange-300" /> */}
        <Container className="px-0 py-0 lg:px-0 relative basic-container max-md:h-[590px] h-full w-full flex items-center  justify-center max-md:mt-[20px] lg:overflow-hidden">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              overflow: "hidden",
              willChange: "transform, opacity",
            }}
          >
            <svg
              width="100%"
              height="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="fillGradient"
                  gradientTransform="rotate(115.47)"
                >
                  <stop offset="0.57%" stopColor="rgba(217,217,217,0.25)" />
                  <stop offset="99.43%" stopColor="rgba(115,115,115,0.045)" />
                </linearGradient>
                <linearGradient
                  id="gradient"
                  gradientTransform="rotate(0 0.5 0.5)"
                >
                  <stop offset="0%" stopColor="#E46CAA" stopOpacity="1" />
                  <stop offset="20%" stopColor="#8334B6" stopOpacity="0" />
                  <stop offset="20%" stopColor="#8334B600" stopOpacity={1} />
                  <stop offset="100%" stopColor="#8334B600" stopOpacity={1} />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="rotate"
                    from="0 0.5 0.5"
                    to="360 0.5 0.5"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>
              <rect
                x="10"
                y="10"
                width="97%"
                height="554px"
                stroke="url(#gradient)"
                fill="url(#fillGradient)"
                strokeWidth="2"
                rx="30"
                ry="30"
              />
            </svg>

            {/* Contact Form */}
            <section
              style={{
                position: "absolute",
                zIndex: 2,
                padding: "20px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                inset: 2,
              }}
            >
              <article className="form_wrapper p-2 lg:p-[41px] lg:pt-4">
                <Typography
                  type="title"
                  size="large"
                  className="text-gradient-silver"
                >
                  {contact_content.form.title}
                </Typography>
                <form action="" className="flex flex-col gap-2 mt-2">
                  {contact_content.form.fields.map((field, index, arr) => {
                    const isLast = index === arr.length - 1;

                    return (
                      <article key={field.name ?? index}>
                        <label htmlFor={field.name} className="text-white">
                          <Typography type="sub" size="sub-desc">
                            {field.name}
                          </Typography>
                        </label>

                        {isLast ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows={4}
                            cols={40}
                            className="w-full mb-4 border-b-1 border-white focus:outline-none text-white mt-3"
                            placeholder={""}
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            className="w-full mb-4 border-b-1 border-white focus:outline-none text-white mt-3"
                          />
                        )}
                      </article>
                    );
                  })}
                  <button
                    type="submit"
                    className="ml-auto max-w-[200px] pl-[44px] flex justify-between items-center gap-x-[18px]  overflow-hidden rounded-full bg-white border border-white group"
                  >
                    <Typography
                      type="sub"
                      size="small"
                      className="py-3 text-sm font-semibold primary"
                    >
                      {contact_content.form.title}
                    </Typography>
                    <article className="flex h-10 w-10 items-center justify-center rounded-full btn-gradient">
                      <Image
                        src={icon.src}
                        alt="arrow"
                        width={16}
                        height={16}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </article>
                  </button>
                </form>
              </article>
            </section>
          </div>
          {/* <Container
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${contactUsBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> */}
          {/* <Container
            as="article"
            className="relative group w-full max-h-[592px] h-full rounded-[30px] overflow-hidden"
          >
            <Container className="basic-container absolute inset-0 contact-us-form"></Container> */}
          {/* SVG Blur Background */}
          {/* <Container className="basic-container bg-[#0e022400] py-0 absolute inset-[2px] rounded-[30px] z-20 px-8 lg:px-8">
              <Container className="py-0 px-8 lg:px-8 absolute inset-0 flex flex-col items-center justify-center text-center gap-y-2 cards-gradient"></Container>
            </Container>
          </Container> */}
        </Container>
      </Container>
      <div className="flex justify-between">
        <Typography type="sub" size="small" className="text-base-70">
          {footer_content.copyright}
        </Typography>
        <Typography type="sub" size="small" className="text-base-70">
          {footer_content.companyName}
        </Typography>
      </div>
      {/* <Footer /> */}
    </Container>
  );
}
