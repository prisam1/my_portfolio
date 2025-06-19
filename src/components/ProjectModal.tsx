import { Github, ExternalLink, X } from "lucide-react";
import { Project } from "../pages/Work/Work";

interface ModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ModalProps) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-[#111] text-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    height={180}
                    className="w-full object-cover rounded-xl mt-4 mb-4 border border-gray-700"
                />

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition"
                    >
                        <Github size={16} /> GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 transition"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};
