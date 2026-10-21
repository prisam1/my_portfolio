import { Briefcase, Download, FolderGit2, Layers, Mail, MapPin } from "lucide-react";
import { IMAGES, PROFILE, RESUME_URL, experience, projects } from "../../constants";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { SectionHeading } from "../../components/SectionHeading";
import { SocialLinks } from "../../components/SocialLinks";
import { skillCount } from "../../constants/skills";

const stats = [
  { label: "Companies", value: experience.length, Icon: Briefcase },
  { label: "Projects", value: projects.length, Icon: FolderGit2 },
  { label: "Technologies", value: skillCount, Icon: Layers },
];

export const About = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading eyebrow="Get to know me" title={<>About <span className="text-purple-500">Me</span></>} />

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16">
        <ScrollAnimation direction="left" className="hidden flex-col items-center md:flex">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-600/50 to-cyan-500/40 blur-2xl" aria-hidden="true" />
            <img
              src={IMAGES.pritam}
              alt={PROFILE.name}
              width={270}
              height={270}
              loading="lazy"
              decoding="async"
              className="relative h-56 w-56 rounded-full border-2 border-purple-600 bg-white object-cover lg:h-[270px] lg:w-[270px]"
            />
          </div>
          <SocialLinks className="mt-10" />
        </ScrollAnimation>

        <ScrollAnimation direction="right" className="text-white">
          <h3 className="text-2xl font-bold sm:text-3xl">I'm {PROFILE.name}</h3>
          <p className="mt-1 text-lg font-semibold text-purple-500">{PROFILE.title}</p>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-300 sm:text-base lg:text-lg">
            <p>
              I am a passionate and results-driven full-stack developer with expertise in modern
              technologies, including MERN (MongoDB, Express.js, React, Node.js), Nest.js, Next.js, and
              React Native, paired with Expo for seamless cross-platform mobile development.
            </p>
            <p>
              My skill set extends to building dynamic web and mobile solutions using Ionic, leveraging
              Firebase for real-time capabilities, and designing scalable and efficient backend
              architectures with Redis and PostgreSQL. With a keen eye for aesthetics and responsiveness,
              I use Tailwind CSS to craft visually stunning interfaces, backed by TypeScript for
              type-safe, robust applications.
            </p>
            <p>
              I am adept at cloud management with AWS S3, version control with Git, and delivering
              optimized, scalable solutions. Whether it’s creating innovative applications or
              streamlining existing systems, I am committed to transforming ideas into impactful digital
              experiences. Let’s collaborate to bring your vision to life!
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-purple-400" />
              {PROFILE.location}
            </li>
            <li className="flex min-w-0 items-center gap-2">
              <Mail size={16} className="shrink-0 text-purple-400" />
              <a href={`mailto:${PROFILE.email}`} className="truncate transition-colors hover:text-purple-400">
                {PROFILE.email}
              </a>
            </li>
          </ul>

          <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map(({ label, value, Icon }) => (
              <li
                key={label}
                className="rounded-2xl border border-purple-700/60 bg-purple-500/5 p-3 text-center transition-colors hover:border-purple-500 sm:p-4"
              >
                <Icon size={18} className="mx-auto mb-2 text-purple-400" aria-hidden="true" />
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}+</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 sm:text-xs">{label}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/10 px-6 py-3 text-purple-100 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95"
            >
              <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="font-semibold tracking-wide">Download Resume</span>
            </a>
            <SocialLinks className="md:hidden" />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
