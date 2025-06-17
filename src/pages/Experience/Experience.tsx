import { ScrollAnimation } from "../../components/ScrollAnimation";

export const Experience = () => {
  return (
    <div className="flex-col flex lg:pt-10 pt-10 lg:h-[90vh] h-[92vh] bg-[#0078ff] w-[100%] lg:px-10 lg:py-0 px-[16px] py-[16px]">
      <ScrollAnimation direction="up">
        <h1 className="text-white text-center lg:text-4xl font-bold ">
          Experience
        </h1>
      </ScrollAnimation>
      <ScrollAnimation direction="up">

        <div className="flex flex-col  lg:gap-3 gap-[4px]  lg:mt-0 mt-4 ">
          <div className=" lg:h-[56vh] lg:mt-10">
            <div className="animate-pulse flex flex-row items-center lg:gap-4 gap-2">
              <div className="flex items-center flex-col">
                <div className="mt-2 border-2 rounded-full bg-[#1D874F] w-4 h-4" />
              </div>
              <h1 className="text-black lg:text-xl lg:mt-2 mt-2 text-sm  font-bold">
                Atrox Technology Pvt. Ltd.
              </h1>
              <h1 className="text-black lg:text-xl lg:mt-2 text-sm  font-semibold">
                (SDE-I)
              </h1>
              <span className="text-black lg:text-sm text-[10px] font-bold">
                Feb 2024 - Dec 2024
              </span>
            </div>
            <h1 className="text-black lg:text-base text-sm lg:max-w-4xl font-semibold pl-10">
              Contributed to Android app development with React Native and Expo,
              focusing on building user-friendly mobile applications. Developed
              backend systems using Feathers.js to provide a robust API for mobile
              app functionality. Created the company website using Next.js,
              ensuring high performance and SEO optimization. Played a key role in
              implementing intuitive UI/UX design for mobile apps, enhancing user
              engagement and experience. For a web APP Integrating React.js and
              Nest.js for building scalable, maintainable applications.
            </h1>
            <div className="animate-pulse flex flex-row items-center lg:gap-4 gap-1">
              <div className="mt-2 border-2 rounded-full bg-[#1D874F] w-4 h-4" />
              <h1 className="text-black lg:text-xl text-sm lg:mt-2 mt-2 font-bold">
                Percipience Labs
              </h1>
              <h1 className="text-black lg:text-xl text-sm lg:mt-2 font-semibold">
                (Junior MERN Developer)
              </h1>
              <span className="text-black lg:text-sm text-[10px]  font-bold">
                Oct 2023 - Jan 2024
              </span>
            </div>
            <h1 className="text-black lg:text-base text-sm lg:max-w-4xl  font-semibold pl-10">
              Worked on Android app development using React Native and Ionic
              frameworks, contributing to the development of multiple
              applications, including SocialOut, Messaging, Retentive, and a
              Payment Gateway system and Firebase for authentication. Integrated
              backend services using Node.js, ensuring smooth communication
              between the front-end and back-end components. Played a key role in
              implementing intuitive UI/UX design for mobile apps, enhancing user
              engagement and experience.
            </h1>
            <div className="animate-pulse flex flex-row items-center lg:gap-4 gap-1">
              <div className="mt-2 border-2 rounded-full bg-[#1D874F] w-4 h-4" />
              <h1 className="text-black lg:text-xl lg:mt-2 mt-2 text-sm font-bold">
                FunctionUp
              </h1>
              <h1 className="text-black lg:text-xl lg:mt-2 text-sm  font-semibold">
                (Backend Developer Trainee)
              </h1>
              <span className="text-black lg:text-sm text-[10px]  font-bold">
                July 2022 - July 2023
              </span>
            </div>
            <h1 className="text-black lg:text-base text-sm lg:max-w-4xl font-semibold pl-10">
              Trained in backend development using Node.js and Express, and
              developed applications with MongoDB for data storage. Worked with
              AWS S3 for file storage and Redis for caching and performance
              optimization. Gained hands-on experience with GitHub for version
              control and collaborated effectively with teams to deliver projects
              on time. Developed strong problem-solving skills while working on
              real-world projects.
            </h1>
          </div>
        </div>
      </ScrollAnimation>
    </div>

  );
};
