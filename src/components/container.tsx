import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Container = React.forwardRef(
  <T extends React.ElementType = "div">(
    { as, className, children, ...props }: ContainerProps<T>,
    ref: React.Ref<never>
  ) => {
    const Component = as || "div";
    return (
      <Component
        ref={ref}
        className={cn("px-7 lg:px-[72px]", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
