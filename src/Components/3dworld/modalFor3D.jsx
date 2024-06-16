/** @format */

import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import weapon from "../../assets/GLBs/weapon1.glb";



const Model = () => {
  const gltf = useGLTF(weapon);
  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true; // Enable shadow casting for meshes
      node.receiveShadow = true; // Enable shadow receiving for meshes
    }
  });
  return <primitive object={gltf.scene} />;
};

const InteractiveModelModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      styles={{
        modal: {
          width: "80%",
          maxWidth: "1200px",
          height: "80%",
          padding: 0,
        },
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas
          shadows
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 5] }}
        >
          <Suspense fallback={<LoadingIndicator />}>
            <ambientLight intensity={15} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={20}
              castShadow
            />

            <Model />
            <OrbitControls />

            {/* Ground plane to receive shadows */}
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0.5, -1.4, 0.5]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </Modal>
  );
};

const LoadingIndicator = () => {
  return (
    <mesh visible position={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="orange"
        transparent
        opacity={0.1}
        roughness={1}
        metalness={1}
      />
    </mesh>
  );
};

export default InteractiveModelModal;
