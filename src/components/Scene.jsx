import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Scene = ({ scrollY }) => {
  const groupRef = useRef();
  const icosahedronRef = useRef();

  useFrame(() => {
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x += 0.005;
      icosahedronRef.current.rotation.y += 0.007;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = scrollY * 0.0005;
    }
  });

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <group ref={groupRef}>
        <Icosahedron ref={icosahedronRef} args={[1, 4]}>
          <meshPhongMaterial
            color="#667eea"
            emissive="#764ba2"
            emissiveIntensity={0.5}
          />
        </Icosahedron>
      </group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} color="#764ba2" intensity={0.8} />
    </>
  );
};

export default Scene;
