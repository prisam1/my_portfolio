import { ExternalLink, Github } from "lucide-react";
import { Project } from "../pages/Work/Work";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div onClick={onClick} className="group perspective-1000 hover:cursor-pointer max-w-md w-full mx-auto">
      <div
        className="
        bg-gray-300 rounded-2xl group-hover:shadow-2xl
        transition-all duration-300 ease-in-out transform
        group-hover:-translate-y-2 group-hover:scale-[1.05]
        px-5 py-5 flex flex-col items-center gap-4
        "
      >
        <img
          src={project.img}
          alt={project.title}
          // width={320}
          height={180}
          className="w-full rounded-xl object-cover"
        />
        <h2 className="text-black text-lg font-bold text-center">
          {project.title}
        </h2>
        <p className="text-sm text-gray-700 text-center"> {project.description.length > 250
          ? project.description.slice(0, 270) + "..."
          : project.description}</p>

        {/* Tech stack preview */}
        <div className="flex flex-wrap justify-center gap-2 mt-2 ">
          {project.tech.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-400 text-sm text-gray-900 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

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
