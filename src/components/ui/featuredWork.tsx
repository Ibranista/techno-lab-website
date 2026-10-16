import { featured_services_content as content } from "@/content/featured.content";
import { Panel } from "../panel";
import { Typography } from "../Typography";
import { ShowcaseVideo } from "./showcaseVideo";

/**
 * Paged mode plays three steps here (see scroller/steps.ts):
 *   intro     → header + image card
 *   expanded  → image clip grows to full-bleed
 *   showcase  → image slides away, revealing the first project video
 * Flow mode simply stacks header, image and video.
 */
export default function FeaturedWork() {
  return (
    <Panel id="works" label="Featured work" steps="featured">
      <div className="flex flex-col gap-8 px-7 pt-24 pb-10 lg:px-[72px] paged:block paged:p-0">
        {/* Back layer: first showcase video */}
        <div
          data-featured-back
          className="order-2 paged:absolute paged:inset-0 paged:px-[72px] paged:pt-28 paged:pb-10"
        >
          <ShowcaseVideo
            data-featured-back-card
            src={content.videos[0].src}
            poster={content.videos[0].poster}
            label={content.videos[0].label}
            className="aspect-[4/3] w-full sm:aspect-video paged:aspect-auto paged:h-full"
          />
        </div>

        {/* Front layer: header + image */}
        <div data-featured-front className="order-1 flex flex-col gap-8 bg-ink paged:absolute paged:inset-0">
          <header
            data-featured-header
            className="grid gap-3 paged:absolute paged:inset-x-0 paged:top-0 paged:z-10 paged:px-[72px] paged:pt-[clamp(6.5rem,15vh,9rem)]"
          >
            <Typography as="h2" type="title" size="large" className="hero-title-gradient" data-reveal>
              {content.name}
            </Typography>
            <Typography type="sub" size="sub-desc" className="max-w-[415px] text-base-70" data-reveal>
              {content.desc}
            </Typography>
          </header>

          <div
            data-featured-media
            className="relative aspect-[16/10] overflow-hidden rounded-[28px] paged:absolute paged:inset-0 paged:aspect-auto paged:rounded-none paged:[clip-path:inset(30%_72px_6%_72px_round_28px)]"
          >
            <div
              data-featured-image
              role="img"
              aria-label={content.image.alt}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${content.image.src})` }}
            />
            {/* Keeps the navbar legible once the image is full-bleed. Sits in
                the clipped-away area while the image is still a card. */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 hidden h-40 bg-gradient-to-b from-ink/80 to-transparent paged:block"
            />
          </div>
        </div>
      </div>
    </Panel>
  );
}
