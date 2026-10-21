import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiMongodb,
  SiPostgresql, SiTailwindcss, SiDocker, SiNestjs, SiExpress,
  SiFirebase, SiExpo, SiIonic, SiPython, SiCplusplus, SiPostman,
  SiRedis, SiRedux, SiHtml5, SiGit, SiGithub, SiApachekafka,
  SiElectron, SiNodedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscJson, VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { Feather } from "lucide-react";

export interface Skill {
  name: string;
  Icon: IconType | typeof Feather;
  color: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-[#FFFFFF]" },
      { name: "Redux", Icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "text-[#5FA04E]" },
      { name: "Express", Icon: SiExpress, color: "text-[#FFFFFF]" },
      { name: "NestJS", Icon: SiNestjs, color: "text-[#E0234E]" },
      { name: "Feathers", Icon: Feather, color: "text-[#FFFFFF]" },
      { name: "Kafka", Icon: SiApachekafka, color: "text-[#FFFFFF]" },
    ],
  },
  {
    title: "Mobile & Desktop",
    skills: [
      { name: "React Native", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Expo", Icon: SiExpo, color: "text-[#FFFFFF]" },
      { name: "Ionic", Icon: SiIonic, color: "text-[#3880FF]" },
      { name: "Electron", Icon: SiElectron, color: "text-[#47848F]" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Redis", Icon: SiRedis, color: "text-[#DC382D]" },
      { name: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "SQL", Icon: TbSql, color: "text-[#4169E1]" },
      { name: "NoSQL", Icon: VscJson, color: "text-[#47A248]" },
      { name: "pgAdmin", Icon: BiLogoPostgresql, color: "text-[#336791]" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
      { name: "C++", Icon: SiCplusplus, color: "text-[#A8B9CC]" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", Icon: FaAws, color: "text-[#FF9900]" },
      { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", Icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", Icon: SiGithub, color: "text-[#FFFFFF]" },
      { name: "Postman", Icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "VS Code", Icon: VscVscode, color: "text-[#007ACC]" },
    ],
  },
];

export const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);
