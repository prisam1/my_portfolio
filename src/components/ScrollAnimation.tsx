import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  /** delay in milliseconds */
  delay?: number;
  className?: string;
}

/** Reveals children once when they scroll into view. CSS-driven; see `.reveal` in index.css. */
export const ScrollAnimation = ({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -8% 0px",
    // Browsers without IntersectionObserver just show the content
    fallbackInView: true,
  });

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${direction}`, inView && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
