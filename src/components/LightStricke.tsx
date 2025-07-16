import React from "react";
import { motion } from "framer-motion";

export const LightStrike: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#1a1a2e,_#000)]" />

      {/* Light beam */}
      <motion.div
        className="absolute top-0 w-1 z-0"
        style={{
          height: "100%",
          boxShadow: "0 0 80px 40px rgba(255,255,255,0.6)",
        }}
        animate={{
          opacity: [0.7, 1, 0.8],
          scaleX: [0.8, 1, 0.9],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
          {/* Glowing tapered beam */}
           <motion.svg
            width="100vw"
            height= "100%"
            style={{   
                boxShadow: "0 0 80px 40px rgba(255,255,255,)",
              }}
            className="absolute z-20"
            viewBox="0 0 100 1000"
            //preserveAspectRatio="xMidYMin slice"
            initial={{ opacity: 0.85 }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <defs>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                {/* <stop offset="100%" stopColor="#5cf5ff" stopOpacity="0.8" /> */}
              </linearGradient>
            </defs>
            <path
              d="M49 0 C45 400, 50 900, 0 1000 L100 1000 C70 900, 60 700, 58 0 Z"
              fill="url(#beamGradient)"
              filter="url(#glow)"
            />
          </motion.svg>


      {/* Beam core glow */}
      <motion.div
        className="absolute bottom-0 w-32 h-32 bg-[#291be2e0] rounded-full blur-2xl opacity-80 z-40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.9],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />

      {/* Optional: Earth glow at the bottom */}
      <div className="absolute bottom-0 w-full h-6 bg-[#291be2e0] opacity-100 blur-xl" />
 
     
    </div>
  );
};
 