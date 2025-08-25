"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { RotateCcw, Maximize } from "lucide-react"

function StatueModel({ url }: { url: string }) {
  const meshRef = useRef<any>()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <cylinderGeometry args={[1, 1.2, 3, 8]} />
      <meshStandardMaterial color={hovered ? "#0891b2" : "#f3f4f6"} />
    </mesh>
  )
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
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
