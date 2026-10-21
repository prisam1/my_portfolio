import { ReactNode } from "react";
import { ScrollAnimation } from "./ScrollAnimation";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <ScrollAnimation className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
    {subtitle && <p className="mt-5 text-sm text-gray-400 sm:text-base">{subtitle}</p>}
  </ScrollAnimation>
);
