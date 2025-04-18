/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 C:\Users\MADIHA\Desktop\BlenSpark\Blenspark-revamp\public\BMW.glb --transform 
Files: C:\Users\MADIHA\Desktop\BlenSpark\Blenspark-revamp\public\BMW.glb [35.06MB] > C:\Users\MADIHA\Desktop\BlenSpark\Blenspark-revamp\BMW-transformed.glb [3.18MB] (91%)
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import glb from "./BMW-transformed.glb";
import { useEffect, useRef } from 'react';
import * as THREE from "three"
export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF(glb)
  const { actions } = useAnimations(animations, group)

  const meshRef = useRef()
  const bodyRef = useRef()
  const interiorLeather = useRef()
  const CarbonInteriorRef = useRef()
  const chassisCarpetRef = useRef()
  const wheelRef = useRef()
  const doorRef = useRef()
  useEffect(() => {
    const meshRefs = {
      Body: bodyRef,
      interiorLeather: interiorLeather,
      carbonInterior: CarbonInteriorRef,
      chassisCarpet: chassisCarpetRef,
      wheel: wheelRef,
      door: doorRef,
    };
    props.onRefsReady(meshRefs, "car");
  }, []);


  const handleClick = (name) => {
    const action = actions[name];
    if (!action) {
      console.warn(`Animation ${name} not found`);
      return;
    }

    action.setLoop(THREE.LoopOnce, 0);
    action.clampWhenFinished = true;

    action.getMixer().removeEventListener('finished');

    const onFinished = () => {
      // console.log(`Animation ${name} finished`);
      action.paused = true;
      action.getMixer().removeEventListener('finished', onFinished);
    };
    action.getMixer().addEventListener('finished', onFinished);

    // If not running, determine direction based on current time
    if (!action.isRunning()) {
      if (action.time === 0 || action.timeScale === -1) {
        // Play forward
        action.timeScale = 1;
        action.reset().play();
      } else {
        // Play in reverse from the end
        action.timeScale = -1;
        action.paused = false;
        action.time = action.getClip().duration; // Start at the end
        action.play();
      }
    } else if (action.paused) {
      // Toggle direction on pause
      if (action.timeScale === 1) {
        action.timeScale = -1;
        action.time = action.getClip().duration; // Reverse from end
      } else {
        action.timeScale = 1;
        action.reset();
      }
      action.paused = false;
      action.play();
    }
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="inmx7m60i_dash_inmx7m60i_wheel_03a_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_wheel_03a_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_dash_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_dash_inmx7m60i_carbon_interior_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_carbon_interior_0.geometry} material={materials.inmx7m60i_carbon_interior} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_dash_inmx7m60i_dashscreen_0" geometry={nodes.inmx7m60i_dash_inmx7m60i_dashscreen_0.geometry} material={materials.inmx7m60i_dashscreen} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_tubs_inmx7m60i_black_0" geometry={nodes.inmx7m60i_tubs_inmx7m60i_black_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_chassis_inmx7m60i_body_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} ref={bodyRef} />
        <mesh name="inmx7m60i_chassis_inmx7m60i_carpet_0" geometry={nodes.inmx7m60i_chassis_inmx7m60i_carpet_0.geometry} material={materials.inmx7m60i_carpet} rotation={[-Math.PI / 2, 0, 0]} ref={chassisCarpetRef} />
        <mesh name="inmx7m60i_tailgate_inmx7m60i_body_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[0, 1.547, -1.735]} rotation={[-1.571, 0, 0]}>
          <mesh name="inmx7m60i_gateglass_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_gateglass_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} position={[0, -1.735, -1.547]} />
          <mesh name="inmx7m60i_lettering_inmx7m60i_blue_0" geometry={nodes.inmx7m60i_lettering_inmx7m60i_blue_0.geometry} material={materials.PaletteMaterial001} position={[0, -1.735, -1.547]} />
          <mesh name="inmx7m60i_tailgate_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} position={[0, -1.735, -1.547]} ref={interiorLeather}/>
          <mesh name="inmx7m60i_tailgate_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_tailgate_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0, 0.523, -0.481]} scale={1.028} />
          <mesh name="inmx7m60i_tailgatelights_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_signalL_0.geometry} material={materials.PaletteMaterial005} position={[0, -1.735, -1.547]} />
        </mesh>
        <mesh name="inmx7m60i_headlights1_inmx7m60i_running_r_0" geometry={nodes.inmx7m60i_headlights1_inmx7m60i_running_r_0.geometry} material={materials.PaletteMaterial006} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_windscreen_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_windscreen_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_steeringwheel_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_steeringwheel_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[0.359, 0.996, 0.368]} rotation={[-2.683, 0, 0]} />
        <mesh name="inmx7m60i_doorfl_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[0.851, 0.598, 0.811]} rotation={[-Math.PI / 2, 0, 0]} onClick={() => handleClick("inmx7m60i_doorfl_inmx7m60i_body_0Action")}>
          <mesh name="inmx7m60i_doorfl_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_black_0.geometry} material={materials.PaletteMaterial001} position={[-0.142, 0.515, 0.393]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} position={[-0.052, 0.46, 0.569]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} position={[-0.184, 0.53, 0.231]} />
          <mesh name="inmx7m60i_doorfl_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_doorfl_inmx7m60i_signalL_0.geometry} material={materials.PaletteMaterial005} position={[0.061, 0.273, 0.507]} />
        </mesh>
        <mesh name="inmx7m60i_doorrl_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[0.804, 0.677, -0.176]} rotation={[-Math.PI / 2, 0, 0]} onClick={() => handleClick("inmx7m60i_doorrl_inmx7m60i_body_0Action")}>
          <mesh name="inmx7m60i_doorrl_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_black_0.geometry} material={materials.PaletteMaterial001} />
          <mesh name="inmx7m60i_doorrl_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} />
          <mesh name="inmx7m60i_doorrl_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorrl_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} />
        </mesh>
        <mesh name="inmx7m60i_doorfr_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[-0.85, 0.596, 0.814]} rotation={[-Math.PI / 2, 0, 0]} onClick={() => handleClick("inmx7m60i_doorfr_inmx7m60i_body_0Action")}>
          <mesh name="inmx7m60i_doorfr_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_black_0.geometry} material={materials.PaletteMaterial001} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} position={[0.044, -0.003, 0.054]} />
          <mesh name="inmx7m60i_doorfr_inmx7m60i_signalL_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_signalL_0.geometry} material={materials.PaletteMaterial005} position={[0.044, -0.003, 0.054]} />
        </mesh>
        <mesh name="inmx7m60i_doorrr_inmx7m60i_body_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[-0.804, 0.69, -0.165]} rotation={[-Math.PI / 2, 0, 0]} onClick={() => handleClick("inmx7m60i_doorrr_inmx7m60i_body_0Action")}>
          <mesh name="inmx7m60i_doorfr_inmx7m60i_signalR_0" geometry={nodes.inmx7m60i_doorfr_inmx7m60i_signalR_0.geometry} material={materials.PaletteMaterial005} position={[-0.002, -0.982, -0.04]} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_black_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_black_0.geometry} material={materials.PaletteMaterial001} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_glass_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_glass_0.geometry} material={materials.PaletteMaterial004} />
          <mesh name="inmx7m60i_doorrr_inmx7m60i_leather1_0" geometry={nodes.inmx7m60i_doorrr_inmx7m60i_leather1_0.geometry} material={materials.inmx7m60i_leather1} />
        </mesh>
        <mesh name="inmx7m60i_hood_inmx7m60i_body_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_body_0.geometry} material={materials.PaletteMaterial003} position={[0.072, 1.086, 0.841]} rotation={[-Math.PI / 2, 0, 0]} onClick={() => handleClick("inmx7m60i_hood_inmx7m60i_body_0Action")}>
          <mesh name="inmx7m60i_hood_inmx7m60i_carpet_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_carpet_0.geometry} material={materials.inmx7m60i_carpet} position={[-0.072, 0.841, -1.086]} />
          <mesh name="inmx7m60i_hood_inmx7m60i_logo_0" geometry={nodes.inmx7m60i_hood_inmx7m60i_logo_0.geometry} material={materials.inmx7m60i_logo} position={[-0.072, 0.841, -1.086]} />
        </mesh>
        <mesh name="inmx7m60i_rtaillight_inmx7m60i_taillight_0" geometry={nodes.inmx7m60i_rtaillight_inmx7m60i_taillight_0.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="inmx7m60i_r_bump1_inmx7m60i_body_0001" geometry={nodes.inmx7m60i_r_bump1_inmx7m60i_body_0001.geometry} material={materials.PaletteMaterial003} position={[0, 0.575, -2.236]} rotation={[-Math.PI / 2, 0, 0]} onClick={()=>handleClick("inmx7m60i_r_bump1_inmx7mi601_body_0Action")}>
          <mesh name="inmx7m60i_chassis_inmx7m60i_leather1_0001" geometry={nodes.inmx7m60i_chassis_inmx7m60i_leather1_0001.geometry} material={materials.inmx7m60i_leather1} position={[0, -2.236, -0.575]} />
        </mesh>
        <mesh name="_gltfNode_61" geometry={nodes._gltfNode_61.geometry} material={materials.PaletteMaterial002} position={[-0.032, -0.014, 0.057]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.001} />
      </group>
    </group>
  )
}

useGLTF.preload('/BMW-transformed.glb')
