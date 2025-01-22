import React from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import beetle from './Beetle_-_BLEND-transformed.glb';
import * as THREE from 'three';

export function Beetle(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(beetle);
  const { actions } = useAnimations(animations, group);
  const [doorOpen, setDoorOpen] = React.useState(false);
  const camera = React.useRef();
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();

  // Play an animation when the component mounts
  React.useEffect(() => {
    console.log('Available Animations:');
    animations.forEach((clip, index) => {
      console.log(`Animation ${index + 1}: ${clip.name}, Duration: ${clip.duration}s`);
    });
  }, [animations]);

  const AnimationHandler = (name) => {
    if (!actions) {
      console.error("Actions object is undefined or not initialized.");
      return;
    }

    const action = actions[name];
    if (!action) {
      console.error(`Animation "${name}" is not defined in actions.`);
      return;
    }

    // Common action configurations
    action.clampWhenFinished = true;
    action.loop = THREE.LoopOnce;

    if (!doorOpen) {
      // Play forward (open)
      action.reset();
      action.paused = false;
      action.timeScale = 1;
      action.play();
      setDoorOpen(true);
    } else {
      // Play in reverse (close)
      action.reset();
      action.time = action.getClip().duration;
      action.paused = false;
      action.timeScale = -1;
      action.play();
      setDoorOpen(false);
    }
  };

  const handleRef = (ref) => {
    console.log("Ref:", ref);
    if (ref.current) {
      props.focusOnMesh(ref); // Focus on mesh (camera handling in parent)
    }
  };

  React.useEffect(() => {
    if (group.current) {
      group.current.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(props.color); // Update color of meshes
        }
      });
    }
  }, [props.color]);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene" rotation={[0, 0, 0]} >

          {/* Back Fenders Group */}
          <group name="Back_Fenders_Group" onClick={() => handleRef(ref1)}>
            <mesh
              ref={ref1}
              name="Back_Fenders"
              geometry={nodes.Back_Fenders.geometry}
              material={materials.PaletteMaterial001}
              position={[0.154, 0, -0.117]}
              rotation={[Math.PI / 2, 0, 0.955]}
            />
          </group>

          {/* Doors Group */}
          <group name="Doors_Group" onClick={() => handleRef(ref2)} ref={ref2}>
            <mesh
              name="Doors"
              geometry={nodes.Doors.geometry}
              material={materials.PaletteMaterial001}
              position={[-23.802, 30.843, -16.453]}
              rotation={[Math.PI / 2, 0, 0.955]}
              onClick={() => {
                AnimationHandler("DoorsAction");
              }}
            >
              <mesh
                name="Glass"
                geometry={nodes.Glass.geometry}
                material={materials.PaletteMaterial001}
                position={[27.171, -10.122, 30.843]}
              />
            </mesh>
          </group>

          {/* Doors001 Group */}
          <group name="Doors001_Group" onClick={() => handleRef(ref3)} ref={ref3}>
            <mesh
              name="Doors001"
              geometry={nodes.Doors001.geometry}
              material={materials.PaletteMaterial001}
              position={[-23.541, 30.843, 25.621]}
              rotation={[Math.PI / 2, 0, 0.955]}
              onClick={() => {
                AnimationHandler("Doors.001Action");
              }}
            >
              <mesh
                name="Glass001"
                geometry={nodes.Glass001.geometry}
                material={materials.PaletteMaterial001}
                position={[-7.328, -34.208, 30.843]}
              />
            </mesh>
          </group>

        </group>
      </group>

      {/* Add OrbitControls to allow mouse movement around the model */}
      <OrbitControls ref={camera} />
    </>
  );
}

useGLTF.preload('/Beetle_-_BLEND-transformed.glb');
