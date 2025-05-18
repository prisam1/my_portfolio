// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const StarryBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const stars = Array.from({ length: 150 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       r: Math.random() * 1.5,
//       dx: Math.random() * 0.5,
//     }));

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "#000";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "white";
//       for (const star of stars) {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
//         ctx.fill();

//         star.x += star.dx;
//         if (star.x > window.innerWidth) star.x = 0;
//       }

//       requestAnimationFrame(animate);
//     };

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
//       <motion.div
//         className="relative z-10 text-white flex flex-col items-center justify-center h-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       >
//         <h1 className="text-5xl font-bold mb-4">Starry Night</h1>
//         <p className="text-xl">Enjoy the animated starry background</p>
//       </motion.div>
//     </div>
//   );
// };

//  export default StarryBackground;
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const StarryBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let stars = Array.from({ length: 150 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       r: Math.random() * 1.5,
//       dx: Math.random() * 0.5,
//     }));

//     let shootingStars = Array.from({ length: 3 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       length: Math.random() * 80 + 100,
//       speed: Math.random() * 10 + 6,
//       active: false,
//     }));

//     const animate = () => {
//       ctx.fillStyle = "#000";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.fillStyle = "white";
//       for (const star of stars) {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
//         ctx.fill();

//         star.x += star.dx;
//         if (star.x > canvas.width) star.x = 0;
//       }

//       for (const s of shootingStars) {
//         if (!s.active && Math.random() < 0.005) {
//           s.x = Math.random() * canvas.width;
//           s.y = Math.random() * canvas.height / 2;
//           s.active = true;
//         }

//         if (s.active) {
//           ctx.strokeStyle = "white";
//           ctx.lineWidth = 2;
//           ctx.beginPath();
//           ctx.moveTo(s.x, s.y);
//           ctx.lineTo(s.x - s.length, s.y + s.length);
//           ctx.stroke();

//           s.x += s.speed;
//           s.y -= s.speed;

//           if (s.x > canvas.width || s.y < 0) s.active = false;
//         }
//       }

//       requestAnimationFrame(animate);
//     };

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
//       <motion.div
//         className="relative z-10 text-white flex flex-col items-center justify-center h-full "
//         initial={{ opacity: 0}}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">Starry Night</h1>
//         <p className="text-xl drop-shadow">Enjoy the animated stars & shooting meteors</p>
//       </motion.div>
//     </div>
//   );
// };

// export default StarryBackground;

// const FancyBackgroundLines = () => {
//   return (
//<div className=" bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600" />
//   <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
//   {/* Vertical gradient lines */}
//   {[...Array(10)].map((_, i) => (
//     <div
//       key={i}
//       className={`absolute h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-30 animate-pulse`}
//       style={{
//         left: `${i * 10}%`,
//         animationDelay: `${i * 0.3}s`,
//       }}
//     />
//   ))}

//   {/* Optional horizontal glow lines */}
//   <div className="absolute top-1/3 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-transparent to-purple-400 opacity-30 blur-sm animate-pulse" />
//   <div className="absolute top-2/3 w-full h-0.5 bg-gradient-to-r from-green-400 via-transparent to-pink-400 opacity-30 blur-sm animate-pulse" />
// </div>
// <div className="absolute inset-0 -z-10 overflow-hidden">
//   {/* Diagonal lines */}
//   <div className="absolute w-[2px] h-[150%] bg-gradient-to-b from-pink-500 to-purple-500 left-1/4 rotate-12 opacity-30" />
//   <div className="absolute w-[2px] h-[150%] bg-gradient-to-b from-blue-500 to-cyan-400 left-1/2 rotate-12 opacity-30" />
//   <div className="absolute w-[2px] h-[150%] bg-gradient-to-b from-green-400 to-lime-300 left-3/4 rotate-12 opacity-30" />

//   {/* Horizontal glowing lines */}
//   <div className="absolute w-full h-1 bg-gradient-to-r from-indigo-500 via-transparent to-pink-500 top-1/3 opacity-20 blur-sm" />
//   <div className="absolute w-full h-1 bg-gradient-to-r from-yellow-300 via-transparent to-red-500 top-2/3 opacity-20 blur-sm" />
// </div>
//   );
// };

// export default FancyBackgroundLines;

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Sphere, Line } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    // @ts-ignore
    <mesh ref={meshRef}>

      {/* @ts-ignore */}
      <sphereGeometry args={[1.8, 32, 32]} />

      {/* @ts-ignore */}
      <meshBasicMaterial wireframe color="#7c3aed" />

      {/* @ts-ignore */}
    </mesh>
  );
}

function OrbitLines() {
  const lines = useMemo(() => {
    const linesArray = [];
    for (let i = 0; i < 5; i++) {
      const points = [];
      const radius = 2 + i * 0.1;
      for (let j = 0; j < Math.PI * 2; j += 0.05) {
        points.push(new THREE.Vector3(Math.cos(j) * radius, Math.sin(j) * radius, 0));
      }
      linesArray.push(<Line key={i} points={points} color="#9333ea" lineWidth={0.5} />);
    }
    return linesArray;
  }, []);
  return <>{lines}</>;
}

export default function StarryNetworkBackground() {
  return (
    <div className="h-[100vh] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        {/* <RotatingGlobe />
<OrbitLines /> */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>

  )
}