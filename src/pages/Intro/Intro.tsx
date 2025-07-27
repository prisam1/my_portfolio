import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
//@ts-ignore
import FOG from "vanta/src/vanta.clouds";
import Typewriter from "typewriter-effect";
import { IMAGES } from "../../constants";
import { ScrollAnimation } from "../../components/ScrollAnimation";

const introData = {
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
    <div ref={vantaRef} className="flex items-center justify-center min-h-screen ">
      <ScrollAnimation direction="up">
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            src={IMAGES.pritam}
            alt="pritam"
            className="lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] mt-[50px] lg:mt-0 bg-white rounded-full border-2 border-purple-600"
          />

          <span className="text-white lg:text-7xl text-2xl font-bold mt-10">
            Hello, I'm Pritam Kumar Samaddar
          </span>

          <span className="flex flex-row h-10 lg:text-4xl text-[18px] font-semibold my-8 text-purple-700">
            <p className="lg:text-4xl text-base font-semibold text-white pr-[8px]">I am a</p>
            <Typewriter
              options={{
                strings: [
                  introData.animated.first,
                  introData.animated.second,
                  introData.animated.third,
                  introData.animated.fourth
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
  );
};
