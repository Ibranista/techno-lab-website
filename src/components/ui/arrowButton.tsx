import Image from "next/image";
import arrow from "@/assets/services/arrow-right.svg";
import { font_accent } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

type ArrowButtonProps = {
  children: React.ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<React.ComponentPropsWithoutRef<"a">, "children">)
  | ({ href?: undefined } & Omit<React.ComponentPropsWithoutRef<"button">, "children">)
);

/** White pill with the gradient arrow badge, as a link or a button. */
export function ArrowButton({ children, className, ...props }: ArrowButtonProps) {
  const classes = cn(
    font_accent.className,
    "group inline-flex items-center gap-5 rounded-full bg-white py-1 pr-1 pl-7 text-sm font-semibold text-[#260464]",
    "transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgb(228_108_170/0.6)]",
    className,
  );
  const content = (
    <>
      {children}
      <span className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full">
        <Image
          src={arrow}
          alt=""
          width={16}
          height={16}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </span>
    </>
  );

  if (props.href !== undefined) {
    return (
      <a {...(props as React.ComponentPropsWithoutRef<"a">)} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button {...(props as React.ComponentPropsWithoutRef<"button">)} className={classes}>
      {content}
    </button>
  );
}
