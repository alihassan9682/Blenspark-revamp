import React from 'react';
import { useGLTF } from '@react-three/drei';
import SofaGLB from './Sofa-test-transformed.glb';

export function SofaModel(props) {
  const { nodes, materials } = useGLTF(SofaGLB);

  return (
    <group {...props} dispose={null} scale={[1, 1, 1]} position={[0, 1, 1.5]}>
      {/* Set materials to their default materials */}
      <mesh
        geometry={nodes.Stands.geometry}
        material={materials.Leather_Bake}
        ref={props.SofeRef.current.Stands}
      />
      <mesh
        geometry={nodes.Cussion002.geometry}
        material={materials['Velvet _Bake']}
        ref={props.SofeRef.current.Cussion002}// Default to Velvet _Bake for Cussion002
      />
      <mesh
        geometry={nodes.Cussion001.geometry}
        material={materials['Velvet .001_Bake']}
        ref={props.SofeRef.current.Cussion001}// Default to Velvet _Bake for Cussion002
      // Default to Velvet .001_Bake for Cussion001
      />
      <mesh
        geometry={nodes.Back_seat_R.geometry}
        material={materials.Leather_Bake}
        ref={props.SofeRef.current.Back_seat_R}// Default to Metal_Bake for Stands
      // Default to Leather_Bake for Back_seat_R
      />
      {props.Stand ?
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.Metal_Bake}
          ref={props.SofeRef.current.Leather_Bake}// Default to Metal_Bake for Plane
        /> : <mesh
          geometry={nodes.Taylor_Sofa001.geometry}
          material={materials['Wood.Brown']}
        // Default to Wood.Brown for Taylor_Sofa001
        />
      }
    </group>
  );
}

useGLTF.preload('/Sofa test-transformed.glb');
