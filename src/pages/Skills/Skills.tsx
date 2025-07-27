import { ScrollAnimation } from "../../components/ScrollAnimation";
import { IMAGES } from "../../constants";
import StarryNetworkBackground from "../../components/StarBackground";
//import ReactAnimation from "../../components/ReactAnimation";

export const Skills = () => {

  return (

    //  <div ref={vantaRef} className="flex flex-col lg:justify-between items-center bg-purple-600 h-[90vh] lg:px-10 lg:py-0 px-[16px] py-[40px]">
    // <div className="relative flex flex-col items-center h-full w-full bg-gradient-to-br from-slate-950 via-purple-900 to-indigo-800">
    <div className="flex-col items-center justify-center min-h-screen flex lg:pt-10 bg-[#030014] h-full w-full py-4">

      {/* Background canvas positioned absolutely behind content */}
      <div className="absolute z-0 h-full w-full">
        <StarryNetworkBackground />
      </div>

      <ScrollAnimation direction="up">
        <h1 className="text-white lg:text-4xl font-bold pt-10 z-20">
          Skills
        </h1>
      </ScrollAnimation>
      <div className="flex flex-row lg:mt-14 lg:px-10 lg:py-0 px-[16px] py-[40px] z-20 h-full">
        {/* <ReactAnimation/> */}

        <ScrollAnimation direction="up">
          <div className="flex flex-wrap justify-center lg:gap-3 gap-[14px] lg:h-[56vh] lg:w-[50vw] lg:mt-0 mt-4 ">
            <img
              src={IMAGES.react}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:py-4 lg:px-2 py-2 px-1"
            />
            <img
              src={IMAGES.native}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.mongo}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 p-1.5"
            />
            <img
              src={IMAGES.javascript}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:px-2 px-1"
            />
            <img
              src={IMAGES.typescript}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:px-2 lg:py-6 px-1 py-3"
            />
            <img
              src={IMAGES.feathers}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:py-4 py-1"
            />
            <img
              src={IMAGES.postgres}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2"
            />
            <img
              src={IMAGES.expo}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.ionic}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 lg:py-4 p-1"
            />
            <img
              src={IMAGES.express}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.nest}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.next}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.python}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.cLanguage}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.aws}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:py-2"
            />
            <img
              src={IMAGES.firebase}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.postman}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:p-2 p-1"
            />
            <img
              src={IMAGES.vscode}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.tailwind}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.redis}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.redux}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.html}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.sql}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:py-2 p-1"
            />
            <img
              src={IMAGES.noSql}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.pgAdmin}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
            <img
              src={IMAGES.git}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg lg:px-2 lg:py-2 p-1"
            />
            <img
              src={IMAGES.github}
              alt="react"
              className="lg:w-[140px] lg:h-[80px] w-[86px] h-[56px] bg-white rounded-lg"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>

  );
};