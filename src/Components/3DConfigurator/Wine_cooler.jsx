
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
import model from "./wine_cooler-transformed.glb"
import { useRef, useEffect } from 'react';
export function WineCooler(
  { color, ...props }
) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF(model)
  const { actions } = useAnimations(animations, group)
  const [doorOpen, setDoorOpen] = React.useState(false);
  // Play an animation when the component mounts
  // useEffect(() => {
  //   console.log('Available Animations:');
  //   animations.forEach((clip, index) => {
  //     console.log(`Animation ${index + 1}: ${clip.name}, Duration: ${clip.duration}s`);
  //   });
  // }, [animations]);


  const AnimationHandler = () => {
    if (!actions) {
      console.error("Actions object is undefined or not initialized.");
      return;
    }

    Object.keys(actions).forEach((name) => {
      const action = actions[name];

      if (!action) {
        console.error(`Animation "${name}" is not defined in actions.`);
        return;
      }

      // Common action configurations
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;

      console.log(`Action: ${name}, Time: ${action.time}, Paused: ${action.paused}, Duration: ${action.getClip().duration}`);

      if (!doorOpen) {
        // Play forward (open)
        action.reset(); // Reset action for consistent playback
        action.paused = false;
        action.timeScale = 1;
        action.play();
        setDoorOpen(true);
        console.log(`Opening the door for: ${name}`);
      } else {
        // Play in reverse (close)
        action.reset(); // Reset action to avoid artifacts
        action.time = action.getClip().duration; // Start at the end
        action.paused = false;
        action.timeScale = -1;
        action.play();
        setDoorOpen(false);
        console.log(`Closing the door for: ${name}`);
      }
    });
  };




  useEffect(() => {
    if (group.current) {
      group.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(color); // Update the color of each material
        }
      });
    }
  }, [color]);

  return (
    <group ref={group} {...props} dispose={null} color={props.color}>
      <group name="Scene" scale={[2, 2, 2]}>
        <group name="Cube025" position={[0.355, 0.922, -0.286]} rotation={[Math.PI, -1.473, Math.PI]} onClick={() => AnimationHandler("Cube.025Action")} >
          <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials.PaletteMaterial002} />
          <mesh name="Cube021_1" geometry={nodes.Cube021_1.geometry} material={materials.PaletteMaterial003} />
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.PaletteMaterial001} position={[0.546, 0, -0.102]} rotation={[Math.PI, -0.099, Math.PI]} scale={1.306} onClick={() => actions['YourAnimationName']?.play()} // Replace with the animation name
          />
        </group>
        <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials.PaletteMaterial002} position={[0.006, 0.756, 0]} scale={0.997} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Simple wood']} position={[-0.043, 1.487, -0.001]} scale={1.049} />
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.PaletteMaterial004} position={[0.393, 0.094, 0.003]} scale={0.981} />
        <group name="Cube042" position={[0.099, 1.25, -0.001]} scale={0.997}>
          <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials['Black Iron.004']} />
          <mesh name="Cube033_1" geometry={nodes.Cube033_1.geometry} material={materials.PaletteMaterial006} />
          <mesh name="Cube033_2" geometry={nodes.Cube033_2.geometry} material={materials.PaletteMaterial007} />
          <mesh name="Cube033_3" geometry={nodes.Cube033_3.geometry} material={materials.PaletteMaterial008} />
        </group>
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.PaletteMaterial009} position={[0.35, 0.936, 0]} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.PaletteMaterial010} position={[0.164, 1.668, 0]} scale={0.997} />
        <mesh name="Bolt" geometry={nodes.Bolt.geometry} material={materials.PaletteMaterial011} position={[0.358, 0.191, 0.272]} rotation={[0, 0, Math.PI / 2]} scale={-0.001} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Damaged painted metal']} position={[0.357, 0.179, 0.272]} scale={0.84} />
        <mesh name="Wine" geometry={nodes.Wine.geometry} material={materials['glas dark.001']} position={[0.202, 1.526, 0.178]} rotation={[0, 0, Math.PI / 2]} />
        <mesh name="Cylinder220" geometry={nodes.Cylinder220.geometry} material={materials.PaletteMaterial012} position={[0.09, 1.526, 0.059]} rotation={[0, 0, Math.PI / 2]} />
        <mesh name="Cylinder221" geometry={nodes.Cylinder221.geometry} material={materials['label trecerchi.001']} position={[0.098, 1.526, 0.083]} rotation={[0, 0, Math.PI / 2]} />
        <mesh name="LogoPNG001" geometry={nodes.LogoPNG001.geometry} material={materials.PaletteMaterial005} position={[0.346, 1.239, -0.188]} rotation={[Math.PI / 2, 0, 1.581]} scale={0.018} />
      </group>
    </group>
  )
}

useGLTF.preload('/wine_cooler-transformed.glb')
