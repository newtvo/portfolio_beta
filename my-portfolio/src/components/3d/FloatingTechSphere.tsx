'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface TechOrb {
  name: string;
  position: [number, number, number];
  color: string;
}

const techStack: TechOrb[] = [
  { name: 'React', position: [2, 1, 0], color: '#7BBDE8' },
  { name: 'Next.js', position: [-2, 1.5, 1], color: '#6EA2B3' },
  { name: 'TypeScript', position: [0, 2, -1.5], color: '#4E8EA2' },
  { name: 'Node.js', position: [1.5, -1, 1.5], color: '#49769F' },
  { name: 'Python', position: [-1.5, -0.5, -1], color: '#7BBDE8' },
  { name: 'Docker', position: [0, -1.5, 1], color: '#6EA2B3' },
  { name: 'AWS', position: [-2, 0, 0.5], color: '#4E8EA2' },
  { name: 'SQL', position: [1, 0.5, -2], color: '#49769F' },
];

function TechOrb({ tech }: { tech: TechOrb }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (!meshRef.current || !textRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Floating animation
    meshRef.current.position.y = tech.position[1] + Math.sin(time + tech.position[0]) * 0.2;
    
    // Pulse effect
    const scale = 1 + Math.sin(time * 2 + tech.position[0]) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Make text face camera
    textRef.current.quaternion.copy(state.camera.quaternion);
  });

  return (
    <group>
      <mesh ref={meshRef} position={tech.position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={tech.color}
          emissive={tech.color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <Text
        ref={textRef}
        position={[tech.position[0], tech.position[1] - 0.5, tech.position[2]]}
        fontSize={0.2}
        color="#BDD8E9"
        anchorX="center"
        anchorY="middle"
      >
        {tech.name}
      </Text>
    </group>
  );
}

function ConnectingLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  const points: THREE.Vector3[] = [];
  
  // Create connections between nearby tech orbs
  for (let i = 0; i < techStack.length; i++) {
    for (let j = i + 1; j < techStack.length; j++) {
      const pos1 = new THREE.Vector3(...techStack[i].position);
      const pos2 = new THREE.Vector3(...techStack[j].position);
      
      if (pos1.distanceTo(pos2) < 3) {
        points.push(pos1, pos2);
      }
    }
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#4E8EA2" transparent opacity={0.2} />
    </lineSegments>
  );
}

export default function FloatingTechSphere() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7BBDE8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4E8EA2" />
        
        <ConnectingLines />
        
        {techStack.map((tech, i) => (
          <TechOrb key={i} tech={tech} />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
