import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants/Images"
import { ScrollAnimation } from "./scrollAnimation";


export const Intro = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const text = "Full Stack Developer";
  const speed = 100;

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    if (isTyping && index < text.length) {

      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

    } else if (isTyping && index === text.length) {
      timeout = setTimeout(() => setIsTyping(false), 500);
    } else if (!isTyping) {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setIsTyping(true);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [isTyping, index, text]);

  return (
    <div className="flex items-center justify-center lg:align-middle bg-slate-950 h-[100vh]">
      <ScrollAnimation direction="up">
        <div className="flex-col flex items-center justify-center lg:align-middle ">
          <img
            src={IMAGES.pritam}
            alt="pritam"
            className="lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] lg:mt-0 mt-[50px]  bg-white rounded-full border-2 border-blue-500"
          />

          <h1 className="text-white lg:text-7xl text-2xl font-bold mt-10">
            Hello, I am Pritam Kumar Samaddar
          </h1>

          <span className="h-10 text-4xl font-semibold my-8 text-white">
            {displayedText}
            <span className="ml-1 inline-block w-1 h-8 bg-white animate-blink" />
          </span>
        </div>
      </ScrollAnimation>
    </div>
  );
};
