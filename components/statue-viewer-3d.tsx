"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// 3D Statue Component with different geometries for each statue type
function StatueModel({
  position,
  rotation,
  scale,
  color,
  name,
  price,
  isActive,
  type,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
  name: string
  price: string
  isActive: boolean
  type: "horse" | "lion" | "woman"
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      if (isActive) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
      }
    }
  })

  const renderStatue = () => {
    switch (type) {
      case "horse":
        return (
          <>
            {/* Horse body */}
            <mesh position={[0, 0, 0]} scale={[1.5, 0.8, 2.2]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Horse legs */}
            <mesh position={[-0.5, -0.8, 0.8]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0.5, -0.8, 0.8]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[-0.5, -0.8, -0.8]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0.5, -0.8, -0.8]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Horse neck and head */}
            <mesh position={[0, 0.8, 1.2]} scale={[0.4, 1.2, 0.4]}>
              <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0, 1.8, 1.4]} scale={[0.6, 0.5, 0.8]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
          </>
        )
      case "lion":
        return (
          <>
            {/* Lion body */}
            <mesh position={[0, 0, 0]} scale={[1.2, 0.8, 1.8]}>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Lion legs */}
            <mesh position={[-0.4, -0.8, 0.6]} scale={[0.25, 1, 0.25]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0.4, -0.8, 0.6]} scale={[0.25, 1, 0.25]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[-0.4, -0.8, -0.6]} scale={[0.25, 1, 0.25]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0.4, -0.8, -0.6]} scale={[0.25, 1, 0.25]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Lion head with mane */}
            <mesh position={[0, 1.2, 1]} scale={[1, 1, 0.8]}>
              <sphereGeometry args={[0.6, 16, 16]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Lion mane */}
            <mesh position={[0, 1.2, 0.8]} scale={[1.4, 1.4, 1.2]}>
              <sphereGeometry args={[0.7, 16, 16]} />
              <meshStandardMaterial color={color} metalness={0.2} roughness={0.6} />
            </mesh>
          </>
        )
      case "woman":
        return (
          <>
            {/* Woman torso */}
            <mesh position={[0, 0.5, 0]} scale={[0.8, 1.5, 0.6]}>
              <cylinderGeometry args={[0.6, 0.8, 1.5, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Woman head */}
            <mesh position={[0, 1.8, 0]} scale={[0.6, 0.6, 0.6]}>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Woman arms */}
            <mesh position={[-0.8, 0.8, 0]} rotation={[0, 0, -0.3]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0.8, 0.8, 0]} rotation={[0, 0, 0.3]} scale={[0.2, 1, 0.2]}>
              <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Woman dress/skirt */}
            <mesh position={[0, -0.8, 0]} scale={[1.2, 1, 1.2]}>
              <cylinderGeometry args={[1, 0.8, 1, 8]} />
              <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
          </>
        )
    }
  }

  return (
    <group position={position} rotation={rotation} ref={meshRef} scale={scale}>
      {renderStatue()}
      {isActive && (
        <Html position={[0, -2.5, 0]} center>
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center border shadow-lg">
            <h3 className="font-semibold text-sm">{name}</h3>
            <p className="text-primary font-bold">{price}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

// Reusable Slider Block
function SliderBlock({
  statue,
  type,
}: {
  statue: { name: string; price: string; description: string; color: string }
  type: "horse" | "lion" | "woman"
}) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % 1) // only one item for now
  const prev = () => setIndex((prev) => (prev - 1 + 1) % 1)

  return (
    <div className="relative w-full h-[700px] bg-gradient-to-br from-muted/20 to-background rounded-2xl overflow-hidden mb-10">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20 max-w-4xl">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          ✨ Premium Art Collection
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-foreground">
          Discover
          <span className="text-primary"> Exquisite </span>
          {statue.name}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
          {statue.description}
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} />
          <StatueModel
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1.2}
            color={statue.color}
            name={statue.name}
            price={statue.price}
            isActive={true}
            type={type}
          />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={prev} className="bg-background/80 backdrop-blur-sm">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={next} className="bg-background/80 backdrop-blur-sm">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Statue Info */}
      <div className="absolute bottom-20 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h3 className="font-heading text-xl font-bold mb-2">{statue.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{statue.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{statue.price}</span>
          <Button size="sm">View Details</Button>
        </div>
      </div>
    </div>
  )
}

export function StatueSlider3D() {
  const horse = { name: "Majestic Horse", price: "$3,499", description: "Bronze stallion in dynamic pose", color: "#8B7355" }
  const lion = { name: "Regal Lion", price: "$4,299", description: "Powerful lion with detailed mane", color: "#CD853F" }
  const woman = { name: "Elegant Woman", price: "$3,899", description: "Classical feminine grace in marble", color: "#F5F5DC" }

  return (
    <div>
      <SliderBlock statue={horse} type="horse" />
      <SliderBlock statue={lion} type="lion" />
      <SliderBlock statue={woman} type="woman" />
    </div>
  )
}      </div>
    </Html>
  )
}

interface StatueViewer3DProps {
  statueUrl?: string
  className?: string
}

export function StatueViewer3D({ statueUrl = "/assets/3d/duck.glb", className = "" }: StatueViewer3DProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const resetCamera = () => {
    // Reset camera position logic would go here
    console.log("Resetting camera position")
  }

  return (
    <div className={`relative bg-muted/20 rounded-lg overflow-hidden ${className}`}>
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} className="w-full h-full">
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<LoadingSpinner />}>
          <StatueModel url={statueUrl} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={2} maxDistance={10} />
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-background/80 backdrop-blur"
          onClick={resetCamera}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-background/80 backdrop-blur"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          <Maximize className="h-4 w-4" />
        </Button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-background/80 backdrop-blur rounded-lg p-3 text-sm text-muted-foreground">
          <p className="text-center">Drag to rotate • Scroll to zoom • Right-click to pan</p>
        </div>
      </div>
    </div>
  )
}
