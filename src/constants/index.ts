import { Project } from "../../types/project";

export const IMAGES = {

 pritam:require("../assets/skills/pritam.jpg"),

 //skills
 react :require("../assets/skills/react.png"),
 native :require("../assets/skills/native.png"),
 mongo :require("../assets/skills/mongo.png"),
 feathers :require("../assets/skills/feathers.png"),
 javascript :require("../assets/skills/javascript.png"),
 postgres :require("../assets/skills/postgres.png"),
 typescript :require("../assets/skills/typescript.png"),
 ionic :require("../assets/skills/ionic.png"),
 expo :require("../assets/skills/expo.png"),
 aws :require("../assets/skills/aws.png"),
 express :require("../assets/skills/express.png"),
 git :require("../assets/skills/git.png"),
 next :require("../assets/skills/next.jpg"),
 nest :require("../assets/skills/nest.png"),
 vscode :require("../assets/skills/vscode.png"),
 tailwind :require("../assets/skills/tailwind.jpg"),
 postman :require("../assets/skills/postman.png"),
 html :require("../assets/skills/htmlcssjs.jpg"),
 redis :require("../assets/skills/redis.png"),
 redux :require("../assets/skills/redux.png"),
 github :require("../assets/skills/github.png"),
 python :require("../assets/skills/python.png"),
 cLanguage :require("../assets/skills/c.png"),
 sql :require("../assets/skills/sql.png"),
 noSql :require("../assets/skills/nosql.png"),
 pgAdmin :require("../assets/skills/pgAdmin.webp"),
 firebase :require("../assets/skills/firebase.png"),
 kafka :require("../assets/skills/kafka.png"),
 docker:require("../assets/skills/docker.png"),
 electron:require("../assets/skills/electron.webp"),


 // projects
 feedTask :require("../assets/project/feedTask.png"), 
 todo :require("../assets/project/todo.png"), 
 hoichoi :require("../assets/project/hoichoi.png"), 
 imgSearch :require("../assets/project/imageSearch.png"), 
 reactApp :require("../assets/project/react.png"), 
 url :require("../assets/project/urlShortener.png"), 
 news :require("../assets/project/news.png"), 
 itinerary:require("../assets/project/itinerary.png"),
 randomImg:require("../assets/project/randomImg.png"),
 chatBot:require("../assets/project/ai_chatbot.png"),
 devConnect:require("../assets/project/devConnect.png"),
 inventory:require("../assets/project/inventory.png"),
}


export const projects: Project[] = [
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
      id: 8,
      img: IMAGES.chatBot,
      title: "AI Landing Page Generator",
      description: "A full-stack AI-powered chatbot application designed to facilitate interactive conversations between users and an artificial intelligence model. It includes secure user authentication (JWT & Google OAuth),, stores conversation history, and is built for scalability and performance. And to generate (landing page) HTML CSS pages as per user requirement.",
      github: "https://github.com/prisam1/ai_chatbot.git",
      live: "https://ai-chatbot-puce-nine-71.vercel.app/",
      tech: ["Next.Js", "TailwindCSS", "Supabase", "Prisma", "SchadCN", "Bycrypt", "JWT", "React Hook Form", "TypeScript", "NextAuth.js"]
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
      id: 10,
      img: IMAGES.devConnect,
      title: "DevConnect",
      description: "A full stack TypeScript web application where developers can sign up and log in securely using JWT & Bycrypt, create and update their profile, post personal projects, any user can comment on other's projects and user can search other users as well as projects",
      github: "https://github.com/prisam1/devConnect.git",
      live: "https://devsconnect.netlify.app/",
      tech: ["React.Js", "Axios", "TypeScript","Redux", "TailwindCSS", "Node.js", "Express.js", "Bycrypt", "JWT", "MongoDB","Mongoose"]
    },

    {
      id: 3,
      img: IMAGES.imgSearch,
      title: "Image Search",
      description: "This React image search app uses the Pexels API to fetch high-quality photos based on user queries. Users can enter keywords in the search bar to find relevant images displayed in a responsive grid. The app supports pagination with dynamic page buttons, allowing easy navigation through multiple pages of results. Hovering over an image reveals additional details, enhancing the user experience. Loading states handle API calls smoothly, and the design is clean and user-friendly.",
      github: "https://github.com/prisam1/ImgSearch.git",
      live: "https://riseupp.netlify.app/",
      tech: ["React.Js", "CSS", "Pexels", "Redux",]
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
      id: 5,
      img: IMAGES.itinerary,
      title: "Itinerary",
      description: "Itinerary Dashboard is a React application component that displays a paginated list of user itineraries with details such as trip name, dates, location, duration, hotel, and total cost. It securely redirects unauthenticated users to the login page by checking for a token in local storage. The dashboard supports loading and error states, with easy navigation through itinerary pages. It also offers quick access to itinerary creation and management via prominent action buttons.",
      github: "https://github.com/prisam1/Login",
      live: "https://pritams1.netlify.app/",
      tech: ["React.Js", "CSS", "Redux", "Axios", "Node.js", "MongoDB", "Bycrypt", "Express.js", "JWT", "React Hook Form"]
    },
    {
      id: 11,
      img: IMAGES.inventory,
      title: "Inventory",
      description: "A realtime FIFO Inventory Management System built using Node.js, Kafka, and PostgreSQL for the backend, and React + Tailwind CSS for the frontend. It allows businesses to handle inventory purchase and sale events using First-In-First-Out logic for accurate stock and pricing calculations.",
      github: "https://github.com/prisam1/inventory-fifo-frontend.git",
      live: "https://inventoryfifo.netlify.app/",
      tech: ["React.Js", "Axios", "TailwindCSS", "Context API","Kafka","Node.Js"]
    },
    {
      id: 6,
      img: IMAGES.todo,
      title: "Todo App",
      description: "This React Todo app supports both dark and light modes using Redux. It allows users to add, edit, delete, complete, and filter tasks, with data saved in localStorage. Tasks can be sorted by title or filtered by status, and a modal is used for task input.The application is component-based, ensuring clean structure and maintainability.",
      github: "https://github.com/prisam1/Taskmanager.git",
      live: "https://whimsical-pothos-c08f6c.netlify.app/",
      tech: ["React.Js", "CSS", "Redux"]
    },
    {
      id: 7,
      img: IMAGES.url,
      title: "URL Shortener App",
      description: "URL shortening is used to create shorter aliases for long URLs. We call these shortened aliases “short links.” Users are redirected to the original URL when they hit these short links. Short links save a lot of space when displayed, printed, messaged, or tweeted. Additionally, users are less likely to mistype shorter URLs.",
      github: "https://github.com/prisam1/URLshortner",
      live: "https://reliable-eclair-8f791a.netlify.app/",
      tech: ["React.Js", "CSS", "Node.js", "Redis", "MongoDB", "Express.js"]
    },
    {
      id: 9,
      img: IMAGES.randomImg,
      title: "React App",
      description: "This React app will generate random images (HD) every time when anyone visit or refresh the page and also able to share the image on Twitter, Whatsapp and Facebook and also able to see preview of that image. Upsplash is used to generate random images and image is fetching using axios call..",
      github: "https://github.com/prisam1/Pritam_Kumar_Samaddar.git",
      live: "https://rdmimg.netlify.app/",
      tech: ["React.Js", "CSS", "Axios"]
    },
    // {
    //   id: 12,
    //   img: IMAGES.reactApp,
    //   title: "React App",
    //   description: "Theme Customizer is a React + Redux web application that allows users to dynamically personalize the UI by changing the background, header, footer, font color, and font size. It supports predefined color schemes and real-time adjustments, with persistent settings saved in localStorage.",
    //   github: "https://github.com/prisam1/Moris.git",
    //   live: "https://transcendent-begonia-e26adf.netlify.app/",
    //   tech: ["React.Js", "SCSS", "Redux"]
    // },
  ];

export const experience = [
    {
      id: 1,
      company: "Atrox Technology Pvt. Ltd.",
      position: "(SDE-I)",
      duration: "Feb 2024 - Dec 2024",
      contribution: `Contributed to Android app development with React Native and Expo,
      focusing on building user-friendly mobile applications. Developed
      backend systems using Feathers.js to provide a robust API for mobile
      app functionality. Created the company website using Next.js,
      ensuring high performance and SEO optimization. Played a key role in
      implementing intuitive UI/UX design for mobile apps, enhancing user
      engagement and experience. For a web app, integrated React.js (with Vite),
      worked with D3.js, Recharts for data visualization, used TanStack Query
      for efficient data fetching, and implemented useDebounce for optimized performance.
      Also used Nest.js for building scalable and maintainable backend services.`
    },
    {
      id: 2,
      company: "Percipience Labs",
      position: "(Junior MERN Developer)",
      duration: "Oct 2023 - Jan 2024",
      contribution: `Worked on Android app development using React Native and Ionic
      frameworks, contributing to the development of multiple
      applications, including SocialOut, Messaging, Retentive, and a
      Payment Gateway system and Firebase for authentication. Integrated
      backend services using Node.js, ensuring smooth communication
      between the front-end and back-end components. Played a key role in
      implementing intuitive UI/UX design for mobile apps, enhancing user
      engagement and experience.`
    },
    {
      id: 3,
      company: "FunctionUp",
      position: "(Backend Developer Trainee)",
      duration: "July 2022 - July 2023",
      contribution: `Trained in backend development using Node.js and Express, and
      developed applications with MongoDB for data storage. Worked with
      AWS S3 for file storage and Redis for caching and performance
      optimization. Gained hands-on experience with GitHub for version
      control and collaborated effectively with teams to deliver projects
      on time. Developed strong problem-solving skills while working on
      real-world projects.`
    },
  
  ]

  