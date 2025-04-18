import React from 'react';
import { useGLTF } from '@react-three/drei';
import SofaGLB from './Sofa-test-transformed.glb';

export function SofaModel(props) {
  const { nodes, materials } = useGLTF(SofaGLB);

  return (
    <group {...props} dispose={null} scale={[1, 1, 1]}>
      <mesh
        geometry={nodes.Stands.geometry}
        material={materials.Leather_Bake}
        ref={props.SofeRef.current.Stands}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cussion002.geometry}
        material={materials['Velvet _Bake']}
        ref={props.SofeRef.current.Cussion002}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cussion001.geometry}
        material={materials['Velvet .001_Bake']}
        ref={props.SofeRef.current.Cussion001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Back_seat_R.geometry}
        material={materials.Leather_Bake}
        ref={props.SofeRef.current.Back_seat_R}
        castShadow
        receiveShadow
      />
      {props.Stand ? (
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.Metal_Bake}
          ref={props.SofeRef.current.Leather_Bake}
          castShadow
          receiveShadow
        />
      ) : (
        <mesh
          geometry={nodes.Taylor_Sofa001.geometry}
          material={materials['Wood.Brown']}
          castShadow
          receiveShadow
        />
      )}
    </group>

  );
}

useGLTF.preload('/Sofa test-transformed.glb');
