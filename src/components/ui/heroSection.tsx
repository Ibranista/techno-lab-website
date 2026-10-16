import { hero_content } from "@/content/hero.content";
import { Panel } from "../panel";
import { Typography } from "../Typography";

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as React.CSSProperties;

export const HeroSection = () => {
  return (
    <Panel id="home" label="Introduction" sheet={false} className="overflow-hidden">
      <div aria-hidden className="brand-glow animate-fade top-[-15%] left-1/2 h-[130%] w-[min(560px,90vw)] -translate-x-1/2 -rotate-[15deg] [--delay:0.1s]" />

      <div className="relative flex min-h-svh flex-col justify-center gap-14 px-7 pt-28 pb-14 lg:px-[72px] paged:h-full paged:min-h-0 paged:gap-[clamp(3rem,14vh,11rem)]">
        <div className="grid gap-5">
          <Typography
            as="h1"
            type="title"
            size="extra-large"
            className="hero-title-gradient animate-rise max-w-[820px] leading-[1.05] text-balance"
            style={delay(0.2)}
          >
            {hero_content.title}
          </Typography>
          <Typography
            type="sub"
            size="desc"
            className="text-shadow animate-rise max-w-[602px] text-white/90"
            style={delay(0.35)}
          >
            {hero_content.desc}
          </Typography>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <Typography
            type="sub"
            size="desc"
            className="animate-rise max-w-[320px] text-base-50"
            style={delay(0.5)}
          >
            {hero_content.abt}
          </Typography>

          <dl className="grid grid-cols-3 gap-6 sm:gap-12 md:ml-auto">
            {hero_content.experience.map((item, index) => (
              <div
                key={item.detail}
                className="animate-rise flex flex-col-reverse gap-1"
                style={delay(0.6 + index * 0.08)}
              >
                <Typography as="dt" size="sub-desc" type="sub" className="text-base-65">
                  {item.detail}
                </Typography>
                <Typography as="dd" size="accent-title" type="title" className="text-gradient-silver">
                  {item.years}
                </Typography>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Panel>
  );
};
