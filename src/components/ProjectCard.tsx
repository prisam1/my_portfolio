import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div onClick={onClick} className="group perspective-1000 hover:cursor-pointer max-w-md w-full mx-auto">
      <div
        className="
        bg-transparent rounded-2xl group-hover:shadow-2xl
        transition-all duration-300 ease-in-out transform
        group-hover:-translate-y-2 group-hover:scale-[1.05]
        px-5 py-5 flex flex-col items-center gap-4 border border-gray-700
        "
      >
        <img
          src={project.img}
          alt={project.title}
          height={180}
          className="w-full rounded-xl object-cover"
        />
        <h2 className="text-gray-200 text-lg font-bold text-center">
          {project.title}
        </h2>
        <p className="text-sm text-gray-200 text-center"> {project.description.length > 250
          ? project.description.slice(0, 270) + "..."
          : project.description}</p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap justify-center gap-2 mt-2 ">
          {project.tech.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-white/10 text-cyan-200 rounded-full transition-colors hover:border-cyan-500/50">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2.5 bg-purple-900/20 border border-purple-500/50 text-white rounded-lg text-sm flex items-center gap-2 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            <span className="relative z-10 font-medium">GitHub</span>

            {/* Hover Effect: A sliding shine that moves across the button */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Hover Effect: Background shift */}
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          {/* Live Link */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2.5 bg-blue-900/20 border border-blue-500/50 text-white rounded-lg text-sm flex items-center gap-2 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
            <span className="relative z-10 font-medium">Live Demo</span>

            {/* Hover Effect: A sliding shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Hover Effect: Background shift */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
};
