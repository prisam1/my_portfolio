import { useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectModal } from "../../components/ProjectModal";
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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const projects: Project[] = [
    {
      id: 1,
      img: IMAGES.feedTask,
      title: "FeedTask",
      description: "FeedTask is a full stack social feed and task management app that allows users to post image-based content and manage tasks using a drag-and-drop interface. It includes secure user authentication (JWT & Google OAuth), password recovery via OTP, and real-time task updates. Photos are stored with Cloudinary, styled using Tailwind CSS, and optimized with Base64 encoding for performance.",
      github: "https://github.com/prisam1/FeedWebApp.git",
      live: "https://feedtask.netlify.app/",
      tech: ["React.Js", "TailwindCSS", "Node.js", "JWT", "MongoDB", "Express.js", "Bycrypt"]
    },
    {
      id: 2,
      img: IMAGES.hoichoi,
      title: "Hoichoi",
      description: "This React Hoichoi clone displays static movie images in a carousel and includes a search bar with live filtering of movie titles. It features a language toggle (English/Bengali) and navigation links to mimic Hoichoi’s main sections, focusing on UI replication without dynamic API integration.",
      github: "https://github.com/prisam1/Hoichoi",
      live: "https://thunderous-fox-a85e19.netlify.app/",
      tech: ["React.Js", "SCSS", "React Multi Carousel"]
    },
    {
      id: 3,
      img: IMAGES.imgSearch,
      title: "Image Search",
      description: "This React image search app uses the Pexels API to fetch high-quality photos based on user queries. Users can enter keywords in the search bar to find relevant images displayed in a responsive grid. The app supports pagination with dynamic page buttons, allowing easy navigation through multiple pages of results. Hovering over an image reveals additional details, enhancing the user experience. Loading states handle API calls smoothly, and the design is clean and user-friendly.",
      github: "https://github.com/prisam1/ImgSearch.git",
      live: "https://riseupp.netlify.app/",
      tech: ["React.Js", "CSS","Pexels",]
    },
    {
      id: 4,
      img: IMAGES.news,
      title: "The News",
      description: "This is a responsive React news app that fetches real-time articles from the NewsData.io API. Users can filter news by country, language, category, and search keywords. It uses Redux for state management, includes debounced search, and securely manages API keys through environment variables. The UI features a clean grid layout.",
      github: "https://github.com/prisam1/news.git",
      live: "https://pnewstime.netlify.app/",
      tech: ["React.Js", "Redux", "CSS", "Axios"]
    },
    {
      id: 7,
      img: IMAGES.itinerary,
      title: "Itinerary",
      description: "Itinerary Dashboard is a React application component that displays a paginated list of user itineraries with details such as trip name, dates, location, duration, hotel, and total cost. It securely redirects unauthenticated users to the login page by checking for a token in local storage. The dashboard supports loading and error states, with easy navigation through itinerary pages. It also offers quick access to itinerary creation and management via prominent action buttons.",
      github: "https://github.com/prisam1/Login",
      live: "https://pritams1.netlify.app",
      tech: ["React.Js", "CSS", "Axios", "Node.js", "MongoDB", "Bycrypt", "Express.js", "JWT", "React Hook Form"]
    },
    {
      id: 5,
      img: IMAGES.todo,
      title: "Todo App",
      description: "This React Todo app supports both dark and light modes using Redux. It allows users to add, edit, delete, complete, and filter tasks, with data saved in localStorage. Tasks can be sorted by title or filtered by status, and a modal is used for task input.The application is component-based, ensuring clean structure and maintainability.",
      github: "https://github.com/prisam1/Taskmanager.git",
      live: "https://whimsical-pothos-c08f6c.netlify.app/",
      tech: ["React.Js", "CSS", "Redux"]
    },

    {
      id: 8,
      img: IMAGES.url,
      title: "URL Shortener App",
      description: "URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.",
      github: "https://github.com/prisam1/URLshortner",
      live: "https://reliable-eclair-8f791a.netlify.app/",
      tech: ["React.Js", "CSS", "Node.js", "MongoDB", "Express.js"]
    },
    {
      id: 6,
      img: IMAGES.reactApp,
      title: "React App",
      description: "Theme Customizer is a React + Redux web application that allows users to dynamically personalize the UI by changing the background, header, footer, font color, and font size. It supports predefined color schemes and real-time adjustments, with persistent settings saved in localStorage.",
      github: "https://github.com/prisam1/Moris.git",
      live: "https://transcendent-begonia-e26adf.netlify.app/",
      tech: ["React.Js", "SCSS", "Redux"]
    },
    {
      id: 7,
      img: IMAGES.randomImg,
      title: "React App",
      description: "This React app will generate random images (HD) every time when anyone visit or refresh the page and also able to share the image on Twitter, Whatsapp and Facebook and also able to see preview of that image. Upsplash is used to generate random images and image is fetching using axios call..",
      github: "https://github.com/prisam1/Pritam_Kumar_Samaddar.git",
      live: "https://rdmimg.netlify.app/",
      tech: ["React.Js", "CSS", "Axios"]
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
