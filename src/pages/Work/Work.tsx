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
  tech: string[];
}

export const Work = () => {
  const projects: Project[] = [
    {
      id: 1,
      img: IMAGES.feedTask,
      title: "FeedTask",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/FeedWebApp.git",
      live: "https://feedtask.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 2,
      img: IMAGES.hoichoi,
      title: "Hoichoi",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/Hoichoi",
      live: "https://thunderous-fox-a85e19.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 3,
      img: IMAGES.imgSearch,
      title: "Image Search",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/ImgSearch.git",
      live: "https://riseupp.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 4,
      img: IMAGES.news,
      title: "The News",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/news.git",
      live: "https://pnewstime.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 7,
      img: IMAGES.itinerary,
      title: "Itinerary",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/Login",
      live: "https://pritams1.netlify.app",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 5,
      img: IMAGES.todo,
      title: "Todo App",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/Taskmanager.git",
      live: "https://whimsical-pothos-c08f6c.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },  
   
    {
      id: 8,
      img: IMAGES.url,
      title: "URL Shortener App",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/URLshortner",
      live: "https://reliable-eclair-8f791a.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },
    {
      id: 6,
      img: IMAGES.reactApp,
      title: "React App",
      description: "Built scalable React Native apps and company website with Next.js.",
      github: "https://github.com/prisam1/Moris.git",
      live: "https://transcendent-begonia-e26adf.netlify.app/",
      tech: ["React.Js", "HTML", "CSS"]
    },  
   
   
  ];

  return (
    <div className="flex-col flex lg:pt-10 bg-black h-auto min-h-screen w-full lg:px-10 px-4 py-4">
      <ScrollAnimation direction="up">
        <h1 className="text-white text-center lg:text-4xl text-2xl font-bold mb-10">Projects</h1>
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
