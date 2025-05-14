import React, { useState, useEffect } from "react";
import { IMAGES } from "../constants/Images";
import { ScrollAnimation } from "./scrollAnimation";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Node.js Developer",
];

export const Intro = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const speed = 100;

  useEffect(() => {
    const currentText = roles[textIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isTyping && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsTyping(false), 2000);
    } else if (!isTyping) {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [isTyping, charIndex, textIndex]);

  return (
    <div className="flex items-center justify-center bg-slate-950 h-[100vh]">
      <ScrollAnimation direction="up">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={IMAGES.pritam}
            alt="pritam"
            className="lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] mt-[50px] lg:mt-0 bg-white rounded-full border-2 border-blue-500"
          />

          <h1 className="text-white lg:text-7xl text-2xl font-bold mt-10">
            Hello, I am Pritam Kumar Samaddar
          </h1>
          <div className="flex flex-row gap-2">
            <p className="h-10 text-4xl font-semibold my-8 text-white">I am a</p>
            <span className="h-10 text-4xl font-semibold my-8 text-purple-700">
              {displayedText}
              <span className="ml-1 inline-block w-1 h-[36px] bg-purple-700 animate-blink" />
            </span>
          </div>
          </div>
      </ScrollAnimation>
    </div>
  );
};
