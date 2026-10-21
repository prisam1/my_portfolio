import { Project, ExperienceItem } from "../types";

import pritam from "../assets/pritam.webp";
import feedTask from "../assets/project/feedTask.webp";
import todo from "../assets/project/todo.webp";
import hoichoi from "../assets/project/hoichoi.webp";
import imgSearch from "../assets/project/imageSearch.webp";
import reactApp from "../assets/project/react.webp";
import url from "../assets/project/urlShortener.webp";
import news from "../assets/project/news.webp";
import itinerary from "../assets/project/itinerary.webp";
import randomImg from "../assets/project/randomImg.webp";
import chatBot from "../assets/project/ai_chatbot.webp";
import devConnect from "../assets/project/devConnect.webp";
import inventory from "../assets/project/inventory.webp";
import greenwood from "../assets/project/greenwood.webp";
import crypto from "../assets/project/crypto.webp";
import ultraDoc from "../assets/project/ultraDoc.webp";

export const IMAGES = { pritam };

export const RESUME_URL = "/Pritam_Kumar_Samaddar_Full_Stack.pdf";

export const PROFILE = {
  name: "Pritam Kumar Samaddar",
  title: "Full Stack Developer",
  email: "pritamsamaddar840@gmail.com",
  location: "Ambikapur, Chhattisgarh, India",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/pritam-kumar-samaddar-047a3074/",
  github: "https://github.com/prisam1",
};

export const projects: Project[] = [
  {
    id: 1,
    img: ultraDoc,
    title: "UltraDoc",
    description:
      "This is the React based interface for the UltraDoc POC. It provides a high-fidelity dashboard for logistics professionals to interact with document data, view automated extractions, and verify AI-generated answers with source attribution. UltraDoc is an AI-powered document auditor designed for Transportation Management Systems (TMS). It allows users to upload logistics documents (PDF/DOCX) and perform grounded Q&A and structured data extraction with built-in hallucination guardrails.",
    github: "https://github.com/prisam1/ultra-doc-frontend.git",
    live: "https://ultra-doc-frontend.vercel.app/",
    tech: ["React.js", "Python", "FastAPI", "LangChain", "langchain-google-genai", "FAISS", "PyMuPDF", "NumPy", "Axios", "JavaScript", "CSS", "python-multipart"],
  },
  {
    id: 2,
    img: chatBot,
    title: "AI Landing Page Generator",
    description:
      "A full-stack AI-powered chatbot application designed to facilitate interactive conversations between users and an artificial intelligence model. It includes secure user authentication (JWT & Google OAuth), stores conversation history, and is built for scalability and performance. It also generates HTML/CSS landing pages based on user requirements.",
    github: "https://github.com/prisam1/ai_chatbot.git",
    live: "https://ai-chatbot-puce-nine-71.vercel.app/",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Prisma", "shadcn/ui", "NextAuth.js", "OAuth", "JWT", "Bcrypt", "React Hook Form"],
  },
  {
    id: 3,
    img: crypto,
    title: "Crypto Dashboard",
    description:
      "A real-time cryptocurrency dashboard built with React + TypeScript + Tailwind CSS + Axios + Recharts. It fetches live data from the CoinGecko API and displays price charts (auto-updating every 30s) and top market data (coins, market cap, price changes), optimized with custom hooks, data caching, and interval updates.",
    github: "https://github.com/prisam1/crypto_dashboard.git",
    live: "https://cryptosd.netlify.app/",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Recharts", "Axios", "CoinGecko"],
  },
  {
    id: 4,
    img: greenwood,
    title: "Greenwood Elementary School",
    description:
      "A modern, responsive Admin Dashboard for Greenwood Elementary School. Built using React.js + TypeScript + Tailwind CSS, configured with CRACO for custom overrides. Clean, mobile-first design, component-based architecture and data visualization.",
    github: "https://github.com/prisam1/GreenWood.git",
    live: "https://greenwoodelementary.netlify.app/",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Recharts", "shadcn/ui", "CRACO", "Lucide React"],
  },
  {
    id: 15,
    img: feedTask,
    title: "FeedTask",
    description:
      "FeedTask is a full stack social feed and task management app that allows users to post image-based content and manage tasks using a drag-and-drop interface. It includes secure user authentication (JWT & Google OAuth), password recovery via OTP, and real-time task updates. Photos are stored with Cloudinary, styled using Tailwind CSS, and optimized with Base64 encoding for performance.",
    github: "https://github.com/prisam1/FeedWebApp.git",
    live: "https://feedtask.netlify.app/",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "OAuth", "JWT", "Bcrypt", "Axios", "Sonner"],
  },
  {
    id: 5,
    img: devConnect,
    title: "DevConnect",
    description:
      "A full stack TypeScript web application where developers can sign up and log in securely using JWT & Bcrypt, create and update their profile and post personal projects. Users can comment on each other's projects and search for other users as well as projects.",
    github: "https://github.com/prisam1/devConnect.git",
    live: "https://devsconnect.netlify.app/",
    tech: ["React.js", "TypeScript", "Redux", "Node.js", "Express.js", "MongoDB", "Mongoose", "TailwindCSS", "JWT", "Bcrypt", "Axios"],
  },
  {
    id: 6,
    img: hoichoi,
    title: "Hoichoi",
    description:
      "This React Hoichoi clone displays static movie images in a carousel and includes a search bar with live filtering of movie titles. It features a language toggle (English/Bengali) and navigation links to mimic Hoichoi’s main sections, focusing on UI replication without dynamic API integration.",
    github: "https://github.com/prisam1/Hoichoi",
    live: "https://thunderous-fox-a85e19.netlify.app/",
    tech: ["React.js", "SCSS", "React Multi Carousel"],
  },
  {
    id: 7,
    img: imgSearch,
    title: "Image Search",
    description:
      "This React image search app uses the Pexels API to fetch high-quality photos based on user queries. Users can enter keywords in the search bar to find relevant images displayed in a responsive grid. The app supports pagination with dynamic page buttons, allowing easy navigation through multiple pages of results. Hovering over an image reveals additional details, and loading states handle API calls smoothly.",
    github: "https://github.com/prisam1/ImgSearch.git",
    live: "https://riseupp.netlify.app/",
    tech: ["React.js", "Redux", "CSS", "Pexels API"],
  },
  {
    id: 8,
    img: news,
    title: "The News",
    description:
      "This is a responsive React news app that fetches real-time articles from the NewsData.io API. Users can filter news by country, language, category, and search keywords. It uses Redux for state management, includes debounced search, and securely manages API keys through environment variables. The UI features a clean grid layout.",
    github: "https://github.com/prisam1/news.git",
    live: "https://pnewstime.netlify.app/",
    tech: ["React.js", "Redux", "Axios", "CSS"],
  },
  {
    id: 9,
    img: itinerary,
    title: "Itinerary",
    description:
      "Itinerary Dashboard is a React application that displays a paginated list of user itineraries with details such as trip name, dates, location, duration, hotel, and total cost. It securely redirects unauthenticated users to the login page by checking for a token in local storage. The dashboard supports loading and error states, with easy navigation through itinerary pages and quick access to itinerary creation and management.",
    github: "https://github.com/prisam1/Login",
    live: "https://pritams1.netlify.app/",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Axios", "React Hook Form", "CSS"],
  },
  {
    id: 10,
    img: inventory,
    title: "Inventory",
    description:
      "A real-time FIFO Inventory Management System built using Node.js, Kafka, and PostgreSQL for the backend, and React + Tailwind CSS for the frontend. It allows businesses to handle inventory purchase and sale events using First-In-First-Out logic for accurate stock and pricing calculations.",
    github: "https://github.com/prisam1/inventory-fifo-frontend.git",
    live: "https://inventoryfifo.netlify.app/",
    tech: ["React.js", "Node.js", "Kafka", "PostgreSQL", "TailwindCSS", "Context API", "Axios"],
  },
  {
    id: 11,
    img: url,
    title: "URL Shortener",
    description:
      "URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.",
    github: "https://github.com/prisam1/URLshortner",
    live: "https://reliable-eclair-8f791a.netlify.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "CSS"],
  },
  {
    id: 12,
    img: randomImg,
    title: "Random Image Generator",
    description:
      "This React app generates random HD images every time someone visits or refreshes the page, with the ability to share the image on Twitter, WhatsApp and Facebook and preview it. Unsplash is used to generate random images, fetched using Axios.",
    github: "https://github.com/prisam1/Pritam_Kumar_Samaddar.git",
    live: "https://rdmimg.netlify.app/",
    tech: ["React.js", "Axios", "CSS"],
  },
  {
    id: 13,
    img: todo,
    title: "Todo App",
    description:
      "This React Todo app supports both dark and light modes using Redux. It allows users to add, edit, delete, complete, and filter tasks, with data saved in localStorage. Tasks can be sorted by title or filtered by status, and a modal is used for task input. The application is component-based, ensuring clean structure and maintainability.",
    github: "https://github.com/prisam1/Taskmanager.git",
    live: "https://whimsical-pothos-c08f6c.netlify.app/",
    tech: ["React.js", "Redux", "CSS"],
  },
  {
    id: 14,
    img: reactApp,
    title: "Theme Customizer",
    description:
      "Theme Customizer is a React + Redux web application that allows users to dynamically personalize the UI by changing the background, header, footer, font color, and font size. It supports predefined color schemes and real-time adjustments, with persistent settings saved in localStorage.",
    github: "https://github.com/prisam1/Moris.git",
    live: "https://transcendent-begonia-e26adf.netlify.app/",
    tech: ["React.js", "Redux", "SCSS"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 5,
    company: "AGP Corporation",
    role: "Assistant Manager – Software Development",
    duration: "May 2026 - Present",
    current: true,
    highlights: [
      "Leading software development initiatives planning, building and shipping full-stack features from requirements to production.",
      "Working with cross-functional teams and stakeholders to turn business needs into scalable, maintainable technical solutions.",
    ],
    tech: [],
  },
  {
    id: 4,
    company: "Vexalink",
    role: "Full Stack AI Developer",
    duration: "Oct 2025 - Feb 2026",
    highlights: [
      "Built scalable Node.js REST APIs for a PERN-stack healthcare platform, powering appointment workflows and patient intake.",
      "Integrated AI-driven voice/call automation with the Retell AI API, using webhooks for event-driven, asynchronous data flows and structured data extraction from calls.",
      "Built CSV/Excel import & export pipelines for bulk data processing and cron-based scheduled jobs to automate operational tasks.",
      "Designed and optimized the PostgreSQL database with deep query optimization, and developed analytics modules and end-to-end platform features.",
    ],
    tech: ["Node.js", "PostgreSQL", "React", "Retell AI", "Webhooks", "Cron Jobs", "REST APIs"],
  },
  {
    id: 1,
    company: "Atrox Technology Pvt. Ltd.",
    role: "SDE-I",
    duration: "Feb 2024 - Dec 2024",
    highlights: [
      "Built Android apps with React Native and Expo, focusing on intuitive UI/UX that improved user engagement.",
      "Developed backend systems with Feathers.js and Nest.js to power mobile and web app functionality.",
      "Created the company website with Next.js, ensuring high performance and SEO optimization.",
      "Built a React (Vite) web app with D3.js and Recharts data visualization, TanStack Query for efficient data fetching and debounced inputs for performance.",
    ],
    tech: ["React Native", "Expo", "Feathers.js", "Nest.js", "Next.js", "React", "D3.js", "Recharts", "TanStack Query"],
  },
  {
    id: 2,
    company: "Percipience Labs",
    role: "Junior MERN Developer",
    duration: "Oct 2023 - Jan 2024",
    highlights: [
      "Developed Android apps with React Native and Ionic, including SocialOut, Messaging, Retentive and a Payment Gateway system.",
      "Implemented Firebase authentication and integrated Node.js backend services for smooth front-end/back-end communication.",
      "Played a key role in implementing intuitive mobile UI/UX, enhancing user engagement and experience.",
    ],
    tech: ["React Native", "Ionic", "Firebase", "Node.js"],
  },
  {
    id: 3,
    company: "FunctionUp",
    role: "Backend Developer",
    duration: "July 2022 - Sep 2023",
    highlights: [
      "Trained in backend development with Node.js, Express and MongoDB, building applications for real-world projects.",
      "Worked with AWS S3 for file storage and Redis for caching and performance optimization.",
      "Used GitHub for version control and collaborated with teams to deliver projects on time.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Redis", "Git"],
  },
];

export const CURRENT_ROLE = experience.find((e) => e.current);
