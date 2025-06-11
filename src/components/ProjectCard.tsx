import { ExternalLink, Github } from "lucide-react";
import { Project } from "../pages/Work/Work";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group perspective-1000 max-w-md w-full mx-auto">
      <div
        className="
          bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          transition-all duration-300 ease-in-out transform
          group-hover:-translate-y-2 group-hover:rotate-1
          hover:opacity-95 px-6 py-6 flex flex-col items-center gap-4
        "
      >
        <img
          src={project.img}
          alt={project.title}
          width={320}
          height={180}
          className="rounded-xl object-cover"
        />
        <h2 className="text-black text-lg font-bold text-center">
          {project.title}
        </h2>
        <p className="text-sm text-gray-700 text-center">{project.description}</p>
        <div className="flex gap-4 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-900 transition"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
