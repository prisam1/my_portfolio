// import Typewriter from "typewriter-effect";
// import { IMAGES } from "../constants/Images";
// import { ScrollAnimation } from "./scrollAnimation";

// const introdata = {
//   animated: {
//     first: "Full Stack Developer",
//     second: "Android Developer" , 
//     third: "React.js Developer",
//     fourth: "Node.js Developer",
//   },
// };

// export const Intro = () => {
//   return (
//  <div className="flex items-center justify-center bg-slate-950 h-[100vh]">
//       <ScrollAnimation direction="up">
//         <div className="flex flex-col items-center justify-center text-center">
//           <img
//             src={IMAGES.pritam}
//             alt="pritam"
//             className="lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] mt-[50px] lg:mt-0 bg-white rounded-full border-2 border-blue-500"
//           />

//           <h1 className="text-white lg:text-7xl text-2xl font-bold mt-10">
//             Hello, I am Pritam Kumar Samaddar
//           </h1>

//           <span className="flex flex-row h-10 text-4xl  font-semibold my-8 text-purple-700">
//           <p className="text-4xl font-semibold text-white pr-[8px]">I am a</p>
//             <Typewriter
//               options={{
//                 strings: [
//                   introdata.animated.first,
//                   introdata.animated.second,
//                   introdata.animated.third,
//                   introdata.animated.fourth
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 10,
//               }}
//             />
//           </span>
//         </div>
//       </ScrollAnimation>
//     </div>
//   );
// };

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
//@ts-ignore
import FOG from "vanta/src/vanta.clouds";
import Typewriter from "typewriter-effect";
import { IMAGES } from "../../constants/Images";
import { ScrollAnimation } from "../../components/ScrollAnimation";

const introdata = {
  animated: {
    first: "Full Stack Developer",
    second: "Android App Developer",
    third: "React.js Developer",
    fourth: "Node.js Developer",
  },
};

export const Intro = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          color: 0x7e22ce,
          shininess: 50,
          waveSpeed: 1,
          zoom: 0.85,
          // mouseControls: true,
          // touchControls: true,
          // minHeight: 200.0,
          // minWidth: 200.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
          // color: 0x7e22ce,
          // backgroundColor: 0x020617,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full">
      <div className="flex items-center justify-center min-h-screen">
        <ScrollAnimation direction="up">
          <div className="flex flex-col items-center justify-center text-center z-10 relative">
            <img
              src={IMAGES.pritam}
              alt="pritam"
              className="lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] mt-[50px] lg:mt-0 bg-white rounded-full border-2 border-blue-500"
            />

            <h1 className="text-white lg:text-7xl text-2xl font-bold mt-10">
              Hello, I'm Pritam Kumar Samaddar
            </h1>

            <span className="flex flex-row h-10 lg:text-4xl text-[18px] font-semibold my-8 text-purple-700">
              <p className="lg:text-4xl text-base font-semibold text-white pr-[8px]">I am a</p>
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </span>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
