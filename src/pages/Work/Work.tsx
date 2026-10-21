import { useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectModal } from "../../components/ProjectModal";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { SectionHeading } from "../../components/SectionHeading";
import { projects } from "../../constants";
import { Project } from "../../types";

const INITIAL_COUNT = 6;

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openProject = useCallback((p: Project) => setSelectedProject(p), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Things I've built"
        title={<>Featured <span className="text-purple-500">Projects</span></>}
        subtitle="A selection of full-stack, AI and frontend projects. Click a card for the full details."
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((proj, i) => (
          <li key={proj.id}>
            <ScrollAnimation delay={(i % 3) * 80} className="h-full">
              <ProjectCard project={proj} onOpen={openProject} />
            </ScrollAnimation>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => {
              if (showAll) document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              setShowAll((v) => !v);
            }}
            aria-expanded={showAll}
            className="group inline-flex items-center gap-2 rounded-full border border-purple-500/50 bg-purple-500/10 px-6 py-3 font-semibold text-purple-100 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95"
          >
            {showAll ? "Show less" : `Show all projects (${projects.length})`}
            <ChevronDown size={18} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}
    </div>
  );
};
