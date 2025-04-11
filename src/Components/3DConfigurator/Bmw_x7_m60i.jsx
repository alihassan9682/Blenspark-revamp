import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import model from './bmw_x7_m60i-transformed.glb';

export function Car({ onRefsReady, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);

  // Refs for each car part assigned to meshes
  const chassisRef = useRef();
  const doorFLRef = useRef();
  const doorFRRef = useRef();
  const doorRLRef = useRef();
  const doorRRRef = useRef();
  const dashRef = useRef();
  const tailgateRef = useRef();
  const headlightsRef = useRef();
  const tailLightsRef = useRef();
  const doorFLRefglass = useRef();
  const doorRLRefglass = useRef();
  const doorFLSignalRef = useRef();
  const doorFLleathureRef = useRef();
  const doorFLRefleather1 = useRef();
  const doorFRWheeel = useRef();
  const doorFRSignalRef = useRef();
  const door_inREf = useRef();
  const doorFRRefleather1 = useRef();
  const tireRef = useRef();
  const leather1ref = useRef();
  const tailgateGlassRef = useRef();
  useEffect(() => {
    const refs = {
      Chassis: chassisRef,
      DoorFL: doorFLRef,
      DoorFR: doorFRRef,
      DoorRL: doorRLRef,
      DoorRR: doorRRRef,
      Dash: dashRef,
      Tailgate: tailgateRef,
      Headlights: headlightsRef,
      TailLights: tailLightsRef,
      DoorFLGlass: doorFLRefglass,
      DoorRLGlass: doorRLRefglass,
      DoorFLSignal: doorFLSignalRef,
      DoorFLLeather: doorFLleathureRef,
      DoorFLLeather1: doorFLRefleather1,
      DoorFRWheel: doorFRWheeel,
      DoorFRSignal: doorFRSignalRef,
      DoorIn: door_inREf,
      DoorFRLeather1: doorFRRefleather1,
      Tire: tireRef,
      Leather1: leather1ref,
      TailgateGlass: tailgateGlassRef,
    };
    onRefsReady(refs);
  }, [onRefsReady]);

  useEffect(() => {
    if (actions) {
      console.log("Available animation names:", Object.keys(actions));
    }
  }, [actions]);

  const handleClick = () => {
    const action = actions["Doors opened"];
    if (!action) return;
    action.paused = !action.paused;
    if (!action.paused) action.play();
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Sketchfab_Scene">
        <group name="inmx7m60i_chassis" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="inmx7m60i_doorfl" position={[0.796, -0.811, -0.352]}>
            <mesh
              name="inmx7m60i_doorfl_inmx7m60i_wheel_03a_0"
              geometry={nodes.inmx7m60i_doorfl_inmx7m60i_wheel_03a_0.geometry}
              material={materials.PaletteMaterial001}
              castShadow
              receiveShadow
              ref={doorFLRef} // Ref moved to main door mesh
            />
            <mesh
              name="inmx7m60i_doorfl_inmx7m60i_glass_0"
              geometry={nodes.inmx7m60i_doorfl_inmx7m60i_glass_0.geometry}
              material={materials.PaletteMaterial002}
              castShadow
              receiveShadow
              ref={doorFLRefglass} // Ref moved to glass mesh
            />
            <mesh
              name="inmx7m60i_doorfl_inmx7m60i_signalL_0"
              geometry={nodes.inmx7m60i_doorfl_inmx7m60i_signalL_0.geometry}
              material={materials.PaletteMaterial004}
              castShadow
              receiveShadow
              ref={doorFLSignalRef}
            />
            <mesh
              name="inmx7m60i_doorfl_inmx7m60i_leather1_0"
              geometry={nodes.inmx7m60i_doorfl_inmx7m60i_leather1_0.geometry}
              material={materials.inmx7m60i_leather1}
              castShadow
              receiveShadow
              ref={doorFLleathureRef}
            />
          </group>
          <group name="inmx7m60i_doorrl" position={[0.804, 0.176, 0.677]}>
            <mesh
              name="inmx7m60i_doorrl_inmx7m60i_wheel_03a_0"
              geometry={nodes.inmx7m60i_doorrl_inmx7m60i_wheel_03a_0.geometry}
              material={materials.PaletteMaterial001}
              castShadow
              receiveShadow
              ref={doorRLRef} // Ref moved to main door mesh
            />
            <mesh
              name="inmx7m60i_doorrl_inmx7m60i_glass_0"
              geometry={nodes.inmx7m60i_doorrl_inmx7m60i_glass_0.geometry}
              material={materials.PaletteMaterial002}
              castShadow
              receiveShadow
              ref={doorRLRefglass} // Ref moved to glass mesh
            />
            <mesh
              name="inmx7m60i_doorrl_inmx7m60i_leather1_0"
              geometry={nodes.inmx7m60i_doorrl_inmx7m60i_leather1_0.geometry}
              material={materials.inmx7m60i_leather1}
              castShadow
              receiveShadow
              ref={doorFLRefleather1} // Ref moved to glass mesh
            />
          </group>
          <group name="inmx7m60i_doorfr" position={[-0.807, -0.818, 0.651]}>
            <mesh
              name="inmx7m60i_doorfr_inmx7m60i_wheel_03a_0"
              geometry={nodes.inmx7m60i_doorfr_inmx7m60i_wheel_03a_0.geometry}
              material={materials.PaletteMaterial001}
              castShadow
              receiveShadow
              ref={doorFRWheeel} // Ref moved to main door mesh
            />
            <mesh
              name="inmx7m60i_doorfr_inmx7m60i_glass_0"
              geometry={nodes.inmx7m60i_doorfr_inmx7m60i_glass_0.geometry}
              material={materials.PaletteMaterial002}
              castShadow
              receiveShadow
              ref={doorFLRefglass} // Ref moved to glass mesh
            />
            <mesh
              name="inmx7m60i_doorfr_inmx7m60i_signalL_0"
              geometry={nodes.inmx7m60i_doorfr_inmx7m60i_signalL_0.geometry}
              material={materials.PaletteMaterial004}
              castShadow
              receiveShadow
              ref={doorFRSignalRef} // Ref moved to signal mesh
            />
            <mesh
              name="inmx7m60i_doorfr_inmx7m60i_leather1_0"
              geometry={nodes.inmx7m60i_doorfr_inmx7m60i_leather1_0.geometry}
              material={materials.inmx7m60i_leather1}
              castShadow
              receiveShadow
              ref={doorFRRefleather1} // Ref moved to leather mesh
            />
          </group>
          <group name="inmx7m60i_doorrr" position={[-0.804, 0.165, 0.69]}>
            <mesh
              name="inmx7m60i_doorrr_inmx7m60i_wheel_03a_0"
              geometry={nodes.inmx7m60i_doorrr_inmx7m60i_wheel_03a_0.geometry}
              material={materials.PaletteMaterial001}
              castShadow
              receiveShadow
              ref={doorRRRef} // Ref moved to main door mesh
            />
            <mesh
              name="inmx7m60i_doorrr_inmx7m60i_glass_0"
              geometry={nodes.inmx7m60i_doorrr_inmx7m60i_glass_0.geometry}
              material={materials.PaletteMaterial002}
              castShadow
              receiveShadow
              ref={door_inREf}
            />
            <mesh
              name="inmx7m60i_doorrr_inmx7m60i_leather1_0"
              geometry={nodes.inmx7m60i_doorrr_inmx7m60i_leather1_0.geometry}
              material={materials.inmx7m60i_leather1}
              castShadow
              receiveShadow
              ref={leather1ref}
            />
          </group>
        </group>

        <mesh
          name="m_m_tire_f_mm_tire_protector_F_0"
          geometry={nodes.m_m_tire_f_mm_tire_protector_F_0.geometry}
          material={materials.PaletteMaterial001}
          position={[0.72, 0.353, 1.376]}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
          ref={tireRef}
        />
        <group>
          <mesh
            name="inmx7m60i_dash_inmx7m60i_wheel_03a_0"
            geometry={nodes.inmx7m60i_dash_inmx7m60i_wheel_03a_0.geometry}
            material={materials.PaletteMaterial001}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
            ref={dashRef} // Ref moved to main dash mesh
          />
          <mesh
            name="inmx7m60i_dash_inmx7m60i_leather1_0"
            geometry={nodes.inmx7m60i_dash_inmx7m60i_leather1_0.geometry}
            material={materials.inmx7m60i_leather1}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            name="inmx7m60i_dash_inmx7m60i_carbon_interior_0"
            geometry={nodes.inmx7m60i_dash_inmx7m60i_carbon_interior_0.geometry}
            material={materials.inmx7m60i_carbon_interior}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
          <mesh
            name="inmx7m60i_dash_inmx7m60i_dashscreen_0"
            geometry={nodes.inmx7m60i_dash_inmx7m60i_dashscreen_0.geometry}
            material={materials.inmx7m60i_dashscreen}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
          />
        </group>
        <mesh
          name="inmx7m60i_chassis_inmx7m60i_carpet_0"
          geometry={nodes.inmx7m60i_chassis_inmx7m60i_carpet_0.geometry}
          material={materials.inmx7m60i_carpet}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
          ref={chassisRef} // Already on mesh, unchanged
        />
        <group>
          <mesh
            name="inmx7m60i_tailgate_inmx7m60i_glass_0"
            geometry={nodes.inmx7m60i_tailgate_inmx7m60i_glass_0.geometry}
            material={materials.PaletteMaterial002}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
            ref={tailgateGlassRef}
          />
          <mesh
            name="inmx7m60i_tailgate_inmx7m60i_logo_0"
            geometry={nodes.inmx7m60i_tailgate_inmx7m60i_logo_0.geometry}
            material={materials.inmx7m60i_logo}
            rotation={[-Math.PI / 2, 0, 0]}
            castShadow
            receiveShadow
            ref={tailgateRef} // Ref moved to tailgate body mesh
          />
        </group>
        <mesh
          name="inmx7m60i_headlights1_inmx7m60i_running_r_0"
          geometry={nodes.inmx7m60i_headlights1_inmx7m60i_running_r_0.geometry}
          material={materials.PaletteMaterial003}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
          ref={headlightsRef} // Already on mesh, unchanged
        />
        <mesh
          name="inmx7m60i_tailgatelights_inmx7m60i_signalL_0"
          geometry={nodes.inmx7m60i_tailgatelights_inmx7m60i_signalL_0.geometry}
          material={materials.PaletteMaterial004}
          rotation={[-Math.PI / 2, 0, 0]}
          castShadow
          receiveShadow
          ref={tailLightsRef} // Already on mesh, unchanged
        />
      </group>
    </group>
  );
}

useGLTF.preload('/bmw_x7_m60i-transformed.glb');