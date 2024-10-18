'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

const RotatingLogo = () => {
  const meshRef = useRef();
  
  // Load the logo texture
  const texture = useLoader(TextureLoader, './logo.png'); // Use the public folder for images

  // Animate the rotation
  useFrame(() => {
    if (meshRef.current) {
      // Rotate around the Y-axis (horizontal rotation)
      meshRef.current.rotation.y += 0.01;
      
      // Keep the X-axis rotation fixed
      meshRef.current.rotation.x = 0.1; // You can adjust this value to fine-tune the angle
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Create a plane with the texture */}
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
};

const LogoCanvas = () => {
  return (
    <div className=' h-screen w-screen'>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <RotatingLogo />
      </Canvas>
    </div>
  );
};

export default LogoCanvas;
