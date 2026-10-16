import { cn } from "@/lib/utils";

type ShowcaseVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">;

/**
 * Muted looping showcase clip. Playback is controlled by PageScroller so only
 * on-screen videos ever decode; `preload="none"` + poster keeps the initial
 * page load light.
 */
export function ShowcaseVideo({ src, poster, label, className, ...props }: ShowcaseVideoProps) {
  return (
    <div
      {...props}
      className={cn(
        "gradient-border relative overflow-hidden rounded-[28px] bg-ink-raised [--border-opacity:0.4]",
        className,
      )}
    >
      <video
        src={src}
        poster={poster}
        aria-label={label}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
