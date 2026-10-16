import { featured_services_content as content } from "@/content/featured.content";
import { Panel } from "../panel";
import { ShowcaseVideo } from "./showcaseVideo";

export default function Portfolio() {
  const video = content.videos[1];

  return (
    <Panel id="portfolio" label="Portfolio">
      <div className="px-7 pt-24 pb-10 lg:px-[72px] paged:h-full paged:pt-28">
        <ShowcaseVideo
          data-reveal
          src={video.src}
          poster={video.poster}
          label={video.label}
          className="aspect-[4/3] w-full sm:aspect-video paged:aspect-auto paged:h-full"
        />
      </div>
    </Panel>
  );
}
