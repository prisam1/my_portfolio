import { ScrollAnimation } from "../../components/ScrollAnimation";
import StarryNetworkBackground from "../../components/StarBackground";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiMongodb,
  SiPostgresql, SiTailwindcss, SiDocker, SiNestjs, SiExpress,
  SiFirebase, SiExpo, SiIonic, SiPython,
  SiCplusplus, SiPostman, SiRedis, SiRedux,
  SiHtml5, SiPostgresql as SiSql, SiGit, SiGithub, SiApachekafka,
  SiElectron
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { Box, Code2, Feather } from 'lucide-react';

interface Skill {
  name: string;
  Icon: any;
  color: string;
}

export const Skills = () => {
  const skillList: Skill[] = [
    { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
    { name: "React Native", Icon: SiReact, color: "text-[#61DAFB]" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Feathers", Icon: Feather, color: "text-[#FFFFFF]" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "Expo", Icon: SiExpo, color: "text-[#FFFFFF]" },
    { name: "Ionic", Icon: SiIonic, color: "text-[#3880FF]" },
    { name: "Express", Icon: SiExpress, color: "text-[#FFFFFF]" },
    { name: "NestJS", Icon: SiNestjs, color: "text-[#E0234E]" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-[#FFFFFF]" },
    { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
    { name: "AWS", Icon: Box, color: "text-[#FF9900]" },
    { name: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
    { name: "Postman", Icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "VS Code", Icon: Code2, color: "text-[#007ACC]" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Redis", Icon: SiRedis, color: "text-[#DC382D]" },
    { name: "Redux", Icon: SiRedux, color: "text-[#764ABC]" },
    { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "SQL", Icon: SiSql, color: "text-[#4169E1]" },
    { name: "NoSQL", Icon: VscJson, color: "text-[#47A248]" },
    { name: "pgAdmin", Icon: BiLogoPostgresql, color: "text-[#336791]" },
    { name: "Git", Icon: SiGit, color: "text-[#F05032]" },
    { name: "GitHub", Icon: SiGithub, color: "text-[#FFFFFF]" },
    { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Electron", Icon: SiElectron, color: "text-[#47848F]" },
    { name: "C++ Language", Icon: SiCplusplus, color: "text-[#A8B9CC]" },
    { name: "Kafka", Icon: SiApachekafka, color: "text-[#FFFFFF]" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#030014] py-20 overflow-hidden">

      {/* Background canvas */}
      <div className="absolute inset-0 z-0">
        <StarryNetworkBackground />
      </div>

      {/* Header */}
      <ScrollAnimation direction="up">
        <div className="z-20 text-center mb-16 px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-purple-500">Skills</span>
          </h1>
          {/* <div className="h-1 w-20 bg-purple-500 mx-auto mt-4 rounded-full opacity-50"></div> */}
        </div>
      </ScrollAnimation>

      {/* Skills Grid */}
      <div className="z-20 w-full max-w-6xl px-6">
        <ScrollAnimation direction="up">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {skillList.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center p-4 h-28 md:h-36 rounded-2xl 
                 
                  bg-transparent border-[1px] border-purple-500 transition-all duration-500 
               
                  hover:bg-purple-500/5 hover:border-purple-500/40 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110">

                    <skill.Icon className={`text-3xl md:text-5xl ${skill.color} transition-all duration-500    
            drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] 
            group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
                    />  </div>

                  <span className="text-[10px] md:text-xs text-purple-500 font-medium mt-3 text-center transition-colors duration-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>

      {/* Background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] pointer-events-none z-10"></div>
    </div>
  );
};