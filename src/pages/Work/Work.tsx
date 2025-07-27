import { useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectModal } from "../../components/ProjectModal";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { projects } from "../../constants"
import { Project } from "../../../types/project";
import StarryNetworkBackground from "../../components/StarBackground";

export const Work = () => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative flex-col flex lg:pt-10 bg-[#030014] min-h-screen w-full px-4 py-4">

      {/* Background canvas positioned absolutely behind content */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <StarryNetworkBackground />
      </div>

      <ScrollAnimation direction="up">
        <h1 className="text-white text-center lg:mt-10 lg:text-4xl text-2xl font-bold mb-10">Projects</h1>
      </ScrollAnimation>
      <ScrollAnimation direction="up">
        <div className="grid lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id} project={proj}
              onClick={() => setSelectedProject(proj)} />
          ))}
        </div>
      </ScrollAnimation>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};
