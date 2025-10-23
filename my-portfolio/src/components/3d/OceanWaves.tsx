'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a plane geometry with many segments for smooth waves
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(20, 20, 100, 100);
  }, []);

  // Animate the waves
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    // Create wave motion
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Multiple sine waves for realistic ocean effect
      const wave1 = Math.sin(x * 0.5 + time * 0.5) * 0.3;
      const wave2 = Math.sin(y * 0.3 + time * 0.3) * 0.2;
      const wave3 = Math.sin((x + y) * 0.2 + time * 0.7) * 0.15;
      
      positions.setZ(i, wave1 + wave2 + wave3);
    }
    
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
    
    // Slowly rotate for dynamic effect
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
      <meshStandardMaterial
        color="#4E8EA2"
        wireframe={false}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function SecondaryWave() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(18, 18, 80, 80);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      const wave = Math.sin(x * 0.4 - time * 0.6) * 0.25 + Math.cos(y * 0.3 - time * 0.4) * 0.2;
      positions.setZ(i, wave);
    }
    
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2.3, -6]}>
      <meshStandardMaterial
        color="#6EA2B3"
        wireframe={false}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function OceanWaves() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#7BBDE8" />
        <pointLight position={[-5, 3, -3]} intensity={0.8} color="#4E8EA2" />
        
        <WaveMesh />
        <SecondaryWave />
      </Canvas>
    </div>
  );
}
