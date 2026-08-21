import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Environment } from '@react-three/drei'
import { SheetProvider, editable as e } from '@theatre/r3f'
import gsap from 'gsap'
import * as THREE from 'three'
import { heroSheet } from '../theatre'

const MAROON = '#872641'
const MAROON_DARK = '#4f1226'
const GOLD = '#e2ab2c'

function GraduationCap() {
  const introRef = useRef<THREE.Group>(null)
  const tasselRef = useRef<THREE.Group>(null)

  // GSAP-driven one-shot "settle in" intro, independent of Theatre's
  // Studio-authored static pose and drei's continuous idle Float motion.
  useEffect(() => {
    if (!introRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current!.scale,
        { x: 0.2, y: 0.2, z: 0.2 },
        { x: 1, y: 1, z: 1, duration: 1.4, ease: 'back.out(1.6)', delay: 0.3 }
      )
      gsap.fromTo(
        introRef.current!.rotation,
        { y: -Math.PI },
        { y: 0, duration: 1.6, ease: 'power3.out', delay: 0.3 }
      )
    })
    return () => ctx.revert()
  }, [])

  useFrame(({ clock }) => {
    if (tasselRef.current) {
      tasselRef.current.rotation.z = Math.sin(clock.elapsedTime * 1.4) * 0.18
    }
  })

  return (
    <group ref={introRef}>
      <SheetProvider sheet={heroSheet}>
        <e.group theatreKey="capPose">
          <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
            {/* mortarboard */}
            <mesh rotation={[0, Math.PI / 4, 0]} castShadow>
              <boxGeometry args={[2.6, 0.16, 2.6]} />
              <meshStandardMaterial color={MAROON} roughness={0.4} metalness={0.15} />
            </mesh>
            {/* band */}
            <mesh position={[0, -0.32, 0]}>
              <cylinderGeometry args={[0.62, 0.72, 0.5, 24]} />
              <meshStandardMaterial color={MAROON_DARK} roughness={0.5} />
            </mesh>
            {/* button */}
            <mesh position={[0, 0.1, 0]}>
              <sphereGeometry args={[0.11, 16, 16]} />
              <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.6} />
            </mesh>
            {/* tassel */}
            <group ref={tasselRef} position={[0, 0.1, 0]}>
              <mesh position={[0.9, -0.55, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.9, 8]} />
                <meshStandardMaterial color={GOLD} roughness={0.4} />
              </mesh>
              <mesh position={[0.9, -1.02, 0]}>
                <sphereGeometry args={[0.09, 12, 12]} />
                <meshStandardMaterial color={GOLD} roughness={0.4} metalness={0.4} />
              </mesh>
            </group>
          </Float>
        </e.group>
      </SheetProvider>
      <Sparkles count={40} scale={4.5} size={2.5} speed={0.35} color={GOLD} />
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} castShadow />
      <directionalLight position={[-3, -2, -2]} intensity={0.3} color={GOLD} />
      <Environment preset="city" />
      <GraduationCap />
    </Canvas>
  )
}
