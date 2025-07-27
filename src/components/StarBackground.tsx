import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function StarryNetworkBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      {/* @ts-ignore */}
      <ambientLight intensity={0.1} />
      {/* @ts-ignore */}
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={60} count={5000} factor={5} fade speed={10} />
      {/* <RotatingGlobe />
         <OrbitLines /> */}
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1} />
    </Canvas>
  )
}