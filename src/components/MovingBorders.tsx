import { CSSProperties, ReactNode } from "react";
import { cn } from "../lib/utils";

interface MovingBorderCardProps {
  children: ReactNode;
  /** Duration of one border revolution in ms */
  duration?: number;
  className?: string;
  innerClassName?: string;
}

/** Card with a glowing highlight travelling around its border (CSS-only, see `.moving-border`). */
export const MovingBorderCard = ({
  children,
  duration = 8000,
  className,
  innerClassName,
}: MovingBorderCardProps) => (
  <div
    className={cn("moving-border", className)}
    style={{ "--border-duration": `${duration}ms` } as CSSProperties}
  >
    <div className={cn("moving-border-inner", innerClassName)}>{children}</div>
  </div>
);
