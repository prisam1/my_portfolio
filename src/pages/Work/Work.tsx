import { ProjectCard } from "../../components/ProjectCard";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import { IMAGES } from "../../constants/Images";

export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  github: string;
  live: string;
}

export const Work = () => {
  const projects: Project[] = [
    {
      id: 1,
      img: IMAGES.pritam,
      title: "Atrox Technology Pvt. Ltd.",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/your-repo",
      live: "https://your-live-url.com",
    },
    {
      id: 2,
      img: IMAGES.pritam,
      title: "Atrox Technology Pvt. Ltd.",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/your-repo",
      live: "https://your-live-url.com",
    },
    {
      id: 3,
      img: IMAGES.pritam,
      title: "Atrox Technology Pvt. Ltd.",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/your-repo",
      live: "https://your-live-url.com",
    },
    {
      id: 4,
      img: IMAGES.pritam,
      title: "Atrox Technology Pvt. Ltd.",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/your-repo",
      live: "https://your-live-url.com",
    },
    {
      id: 5,
      img: IMAGES.pritam,
      title: "Atrox Technology Pvt. Ltd.",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/your-repo",
      live: "https://your-live-url.com",
    },
  ];

  return (
    <div className="lg:flex-col flex lg:pt-20 bg-black h-auto min-h-screen w-full lg:px-10 px-4 py-4">
      <ScrollAnimation direction="up">
        <h1 className="text-white text-center lg:text-4xl text-2xl font-bold mb-6">Projects</h1>
      </ScrollAnimation>
      <ScrollAnimation direction="up">
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};
