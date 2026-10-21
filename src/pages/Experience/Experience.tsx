import { Briefcase, CalendarDays } from "lucide-react";
import { experience } from "../../constants";
import { ExperienceItem } from "../../types";
import { MovingBorderCard } from "../../components/MovingBorders";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { SectionHeading } from "../../components/SectionHeading";
import { cn } from "../../lib/utils";

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
  <div className="p-5 sm:p-7">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-white sm:text-xl">{item.role}</h3>
        <p className="mt-1 flex items-center gap-2 font-semibold text-purple-400">
          <Briefcase size={16} aria-hidden="true" className="shrink-0" />
          {item.company}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {item.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D874F]" />
            </span>
            Current
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-700/60 px-2.5 py-1 text-xs font-medium text-gray-300">
          <CalendarDays size={13} aria-hidden="true" />
          {item.duration}
        </span>
      </div>
    </div>

    <ul className="mt-5 space-y-2.5">
      {item.highlights.map((point) => (
        <li key={point} className="flex gap-3 text-sm leading-relaxed text-gray-300 sm:text-[15px]">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" aria-hidden="true" />
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {item.tech.length > 0 && (
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {item.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-purple-500/60 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 px-3 py-1 text-xs font-medium text-cyan-200"
          >
            {t}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export const Experience = () => {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Where I've worked"
        title={<>Work <span className="text-purple-500">Experience</span></>}
      />

      <ol className="relative space-y-8 border-l border-purple-800/60 pl-6 sm:pl-10">
        {experience.map((item, i) => (
          <li key={item.id} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[31px] top-7 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 sm:-left-[47px]",
                item.current
                  ? "border-green-400 bg-[#1D874F] shadow-[0_0_12px_rgba(74,222,128,0.7)]"
                  : "border-purple-500 bg-[#030014]"
              )}
            />
            <ScrollAnimation delay={Math.min(i, 3) * 60}>
              {item.current ? (
                <MovingBorderCard duration={7000}>
                  <ExperienceCard item={item} />
                </MovingBorderCard>
              ) : (
                <div className="rounded-3xl border border-purple-800/60 bg-[rgba(4,7,29,0.9)] transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]">
                  <ExperienceCard item={item} />
                </div>
              )}
            </ScrollAnimation>
          </li>
        ))}
      </ol>
    </div>
  );
};
