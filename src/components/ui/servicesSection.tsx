import Image from "next/image";
import { services_content } from "@/content/services.content";
import { Panel } from "../panel";
import { Typography } from "../Typography";
import { ArrowButton } from "./arrowButton";

export const ServicesSection = () => {
  return (
    <Panel id="services" label="Services">
      <div className="flex flex-col gap-12 px-7 pt-24 pb-16 lg:px-[72px] paged:h-full paged:justify-center paged:gap-[clamp(2rem,6vh,4rem)] paged:pt-24 paged:pb-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="grid gap-3">
            <Typography
              as="h2"
              type="title"
              size="large"
              className="hero-title-gradient"
              data-reveal
            >
              {services_content.title}
            </Typography>
            <Typography
              type="sub"
              size="sub-desc"
              className="max-w-[415px] text-base-70"
              data-reveal
            >
              {services_content.desc}
            </Typography>
          </div>
          <div data-reveal className="shrink-0">
            <ArrowButton href="#contact">{services_content.btn_name}</ArrowButton>
          </div>
        </header>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services_content.services_list.map((service) => (
            <li
              key={service.title}
              data-reveal
              className="group gradient-border glass-card relative flex flex-col items-center gap-3 overflow-hidden rounded-[20px] px-8 py-9 text-center [--border-opacity:0.3] hover:[--border-opacity:1] paged:py-[clamp(1.5rem,4vh,2.5rem)]"
            >
              {/* Hover glow: opacity-only, rasterised once */}
              <span
                aria-hidden
                className="brand-glow -bottom-1/2 left-1/2 h-full w-3/4 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              />
              <Image
                src={service.image}
                alt=""
                width={88}
                height={88}
                className="relative h-[72px] w-[72px] object-contain transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 lg:h-[88px] lg:w-[88px]"
              />
              <Typography as="h3" type="title" size="medium" className="text-gradient-silver relative">
                {service.title}
              </Typography>
              <Typography type="sub" size="sub-desc" className="relative max-w-[300px] text-base-70">
                {service.desc}
              </Typography>
            </li>
          ))}
        </ul>

        <div data-reveal className="grid gap-6">
          <Typography
            as="h3"
            type="title"
            size="sub-desc"
            className="text-gradient-silver text-center font-bold tracking-[0.2em]"
          >
            {services_content.trusted_by}
          </Typography>
          <div className="marquee">
            <ul className="marquee-track">
              {[0, 1].map((copy) =>
                services_content.trusting_companies.map((company) => (
                  <li key={`${copy}-${company.name}`} aria-hidden={copy === 1} className="shrink-0 px-[22px]">
                    <Image
                      src={company.logo}
                      alt={copy === 0 ? company.name : ""}
                      height={30}
                      className="h-[30px] w-auto opacity-70 transition-opacity hover:opacity-100"
                    />
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </div>
    </Panel>
  );
};
