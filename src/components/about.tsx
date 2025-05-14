import { IMAGES } from "../constants/Images";
import { ScrollAnimation } from "./scrollAnimation";
import { Wave } from "./wave";

export const About = () => {
  return (
    <>
      {/* <Wave /> */}
      <div className="lg:flex-row flex flex-col lg:justify-between items-center bg-purple-600 h-[100vh] lg:px-10 lg:py-0 px-[16px] py-[40px]">
        <ScrollAnimation direction="up">
          <div className="bg-white shadow-md lg:w-[40vw] lg:p-10 p-3 rounded-md ">
            <h1 className="text-black animate-fadeIn lg:text-2xl lg:mt-2 font-bold border-b-2 border-blue-700">
              About Me
            </h1>
            <h1 className="lg:mt-10 animate-fadeIn mt-4 font-sans lg:text-lg md:text-xs  lg:font-semibold">
              I am a passionate and results-driven full-stack developer with
              expertise in modern technologies, including MERN (MongoDB, Express.js,
              React, Node.js), Nest.js, Next.js, and React Native, paired with Expo
              for seamless cross-platform mobile development. My skill set extends
              to building dynamic web and mobile solutions using Ionic, leveraging
              Firebase for real-time capabilities, and designing scalable and
              efficient backend architectures with Redis and PostgreSQL. With a keen
              eye for aesthetics and responsiveness, I utilize Tailwind CSS to craft
              visually stunning user interfaces, enhanced by the power of TypeScript
              for type-safe, robust applications. I am adept at cloud management
              with AWS S3, version control with Git, and delivering optimized,
              scalable solutions. Whether it’s creating innovative applications or
              streamlining existing systems, I am committed to transforming ideas
              into impactful digital experiences. Let’s collaborate to bring your
              vision to life with precision and excellence!
            </h1>
          </div>
        </ScrollAnimation>
        <ScrollAnimation direction="up">
          <div className="flex flex-wrap lg:gap-3 gap-[4px] lg:h-[56vh] lg:w-[50vw] lg:mt-0 mt-4 ">
            <img
              src={IMAGES.react}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:py-4 lg:px-2 py-2 px-1"
            />
            <img
              src={IMAGES.native}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.mongo}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 p-1.5"
            />
            <img
              src={IMAGES.javascript}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:px-2 px-1"
            />
            <img
              src={IMAGES.typescript}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:px-2 lg:py-6 px-1 py-3"
            />
            <img
              src={IMAGES.feathers}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:py-4 py-1"
            />
            <img
              src={IMAGES.postgres}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2"
            />
            <img
              src={IMAGES.expo}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.ionic}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 lg:py-4 p-1"
            />
            <img
              src={IMAGES.express}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.nest}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.next}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.python}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.cLanguage}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.aws}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:py-2"
            />
            <img
              src={IMAGES.firebase}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.postman}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.vscode}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.tailwind}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.redis}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.redux}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.html}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.sql}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:py-2 p-1"
            />
            <img
              src={IMAGES.noSql}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.pgAdmin}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.git}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.github}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[62px] h-[40px] bg-white rounded-lg"
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
