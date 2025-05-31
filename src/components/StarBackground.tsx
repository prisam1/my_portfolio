import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Line } from "@react-three/drei";
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
    <div className="absolute pt-12 w-full h-[90vh]">
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