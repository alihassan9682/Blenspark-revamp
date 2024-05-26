/** @format */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import man from "./char.glb"

// Function to load the 3D model
const Character = () => {
  const { scene } = useGLTF(man); // Ensure this file is in the public directory
  return <primitive object={scene} scale={1.5} />;
};

const Hero3D = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Character />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
