import { ScrollAnimation } from "../../components/ScrollAnimation";
import { IMAGES } from "../../constants/Images";

export const About = () => {
  return (

    <div className="flex flex-col lg:justify-around items-center bg-purple-600  h-[90vh] lg:px-10 lg:py-0 px-[16px] py-[40px]">
      <h1 className="text-black lg:text-4xl font-bold ">
        About Me
      </h1>

      <ScrollAnimation direction="up">
        <div className="bg-white shadow-xl lg:w-[40vw] lg:p-10 p-3 rounded-xl">
          <h1 className="text-black lg:text-2xl lg:mt-2 font-bold">
            I'm Pritam Kumar Samaddar
          </h1>
          <h1 className="lg:text-lg lg:mt-2 font-bold text-purple-600">
            Full Stack Developer
          </h1>
          <h1 className="lg:mt-10 mt-4 font-sans lg:text-lg md:text-xs  lg:font-semibold">
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

    </div>
  );
};
