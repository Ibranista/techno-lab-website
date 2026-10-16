import { cn } from "@/lib/utils";

type PanelProps = {
  id: string;
  label: string;
  /** Name of a step builder in scroller/steps.ts. */
  steps?: string;
  /** Rounded "sheet" top edge when the panel slides over the previous one. */
  sheet?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * A top-level page section. In flow mode it's a normal block in the document;
 * in paged mode it's a full-viewport layer that PageScroller transitions.
 */
export function Panel({ id, label, steps, sheet = true, className, children }: PanelProps) {
  return (
    <section
      id={id}
      aria-label={label}
      data-panel
      data-steps={steps}
      className={cn(
        "relative bg-ink text-white",
        "paged:absolute paged:inset-0 paged:overflow-hidden",
        sheet && "rounded-t-[32px] paged:rounded-t-[56px]",
        className,
      )}
    >
      {children}
    </section>
  );
}
