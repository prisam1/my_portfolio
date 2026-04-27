import { Github, ExternalLink, X } from "lucide-react";
import { Project } from "../../types/project";

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
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:scale-110 transition"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    height={180}
                    className="w-full object-cover rounded-xl mt-5 mb-4 border border-gray-700"
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
                            className="px-3 py-1 text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(16,185,129,0.1)]">
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

                    {/* Live Demo Link */}
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
