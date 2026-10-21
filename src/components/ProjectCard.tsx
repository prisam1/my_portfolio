import { memo } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const MAX_TECH = 4;

export const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="relative z-10 flex flex-wrap gap-3">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} source code on GitHub`}
      className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg border border-purple-500/50 bg-purple-900/20 px-4 py-2 text-sm text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
    >
      <Github size={16} className="transition-transform group-hover/btn:scale-110" />
      <span className="relative z-10 font-medium">GitHub</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
      <span className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity group-hover/btn:opacity-20" />
    </a>
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} live demo`}
      className="group/btn relative flex items-center gap-2 overflow-hidden rounded-lg border border-blue-500/50 bg-blue-900/20 px-4 py-2 text-sm text-white shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
    >
      <ExternalLink size={16} className="transition-transform group-hover/btn:rotate-12" />
      <span className="relative z-10 font-medium">Live Demo</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
      <span className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity group-hover/btn:opacity-20" />
    </a>
  </div>
);

export const ProjectCard = memo(({ project, onOpen }: ProjectCardProps) => {
  const extraTech = project.tech.length - MAX_TECH;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple-700/70 bg-[#030014]/85 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.45)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-purple-950/30">
        <img
          src={project.img}
          alt={`${project.title} screenshot`}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-70" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-gray-100">
          {/* Stretched button: the whole card opens the details, links below stay independently clickable */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-purple-500"
          >
            {project.title}
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="ml-1 inline-block -translate-y-0.5 text-purple-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </button>
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">{project.description}</p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-1" aria-label="Tech stack">
          {project.tech.slice(0, MAX_TECH).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-purple-500 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 px-3 py-1 text-xs font-medium text-cyan-200"
            >
              {tech}
            </li>
          ))}
          {extraTech > 0 && (
            <li className="rounded-full border border-purple-500/40 px-3 py-1 text-xs font-medium text-purple-300">
              +{extraTech}
            </li>
          )}
        </ul>

        <div className="pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";
