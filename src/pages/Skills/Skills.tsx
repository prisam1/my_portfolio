import { ComponentType } from "react";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { SectionHeading } from "../../components/SectionHeading";
import { skillGroups } from "../../constants/skills";

export const Skills = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="What I work with"
        title={
          <>
            Technical <span className="text-purple-500">Skills</span>
          </>
        }
        subtitle="The languages, frameworks and tools I use to design, build and ship products end to end."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <ScrollAnimation key={group.title} delay={(gi % 2) * 100}>
            <div className="h-full rounded-3xl border border-purple-800/60 bg-[#030014]/80 p-5 transition-colors duration-300 hover:border-purple-600 sm:p-6">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-white">
                <span
                  className="h-5 w-1 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500"
                  aria-hidden="true"
                />
                {group.title}
                <span className="ml-auto text-xs font-medium text-purple-400">{group.skills.length}</span>
              </h3>

              <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                {group.skills.map(({ name, Icon: SkillIcon, color }) => {
                  // react-icons v5 returns ReactNode, which TS 4.9 (pinned by react-scripts) rejects as JSX
                  const Icon = SkillIcon as ComponentType<{ className?: string; "aria-hidden"?: "true" }>;
                  return (
                    <li
                      key={name}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-purple-500/60 px-2 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/5"
                    >
                      <Icon
                        aria-hidden="true"
                        className={`h-[1em] w-[1em] text-3xl md:text-4xl ${color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-110`}
                      />
                      <span className="mt-2.5 text-center text-[11px] font-medium leading-tight text-purple-400 transition-colors duration-300 group-hover:text-white md:text-xs">
                        {name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};
