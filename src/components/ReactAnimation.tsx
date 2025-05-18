
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function ReactAnimation() {
    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            {/* @ts-ignore */}
            <color attach="background" args={['black']} />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Atom />
            </Float>
            <Stars saturation={0} count={400} speed={0.2} />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={0} radius={0.8} />
            </EffectComposer>
        </Canvas>
    )
}

function Atom(props: any) {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    return (
        // @ts-ignore
        <group {...props}>
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
            <Sphere args={[0.35, 64, 64]}>
                {/* @ts-ignore */}
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
            {/* @ts-ignore */}
        </group>
    )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
    // @ts-ignore
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        {/* @ts-ignore */ }
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
        // @ts-ignore
        <group {...props}>
            <Trail local width={5} length={10} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
                {/* @ts-ignore */}
                <mesh ref={ref}>
                    {/* @ts-ignore */}
                    <sphereGeometry args={[0.25]} />
                    {/* @ts-ignore */}
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                    {/* @ts-ignore */}
                </mesh>
            </Trail>
            {/* @ts-ignore */}
        </group>
    )
}