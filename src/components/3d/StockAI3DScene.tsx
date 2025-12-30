import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Floating data nodes representing AI neural network
const DataNode = ({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + delay) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.15, 1]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

// Connecting lines between nodes
const ConnectionLines = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const positions = useMemo(() => {
    const points: number[] = [];
    const nodePositions = [
      [-2, 1, -1], [2, 0.5, -2], [-1.5, -1, -1.5],
      [1.5, 1.5, -1], [0, -0.5, -2], [2.5, -1, -1],
      [-2.5, 0, -2], [0, 2, -1.5], [1, -1.5, -1]
    ];
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
          Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
          Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
        );
        if (dist < 3) {
          points.push(...nodePositions[i], ...nodePositions[j]);
        }
      }
    }
    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#FFD700" transparent opacity={0.3} />
    </lineSegments>
  );
};

// Stock chart bars floating in 3D
const StockBars = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const bars = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      height: 0.3 + Math.random() * 0.8,
      x: (i - 3.5) * 0.35,
      color: Math.random() > 0.4 ? '#22C55E' : '#EF4444',
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[3, 0, -2]}>
        {bars.map((bar, i) => (
          <mesh key={i} position={[bar.x, bar.height / 2 - 0.3, 0]}>
            <boxGeometry args={[0.15, bar.height, 0.1]} />
            <meshStandardMaterial
              color={bar.color}
              emissive={bar.color}
              emissiveIntensity={0.3}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        ))}
        {/* Base line */}
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[3, 0.02, 0.1]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

// Rotating AI core sphere
const AICore = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.4;
      ring2Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={[-2.5, 0.5, -1]}>
        {/* Core sphere with distortion */}
        <Sphere ref={sphereRef} args={[0.5, 32, 32]}>
          <MeshDistortMaterial
            color="#0A1628"
            emissive="#FFD700"
            emissiveIntensity={0.2}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Orbital rings */}
        <Torus ref={ringRef} args={[0.8, 0.02, 16, 100]}>
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0}
          />
        </Torus>
        
        <Torus ref={ring2Ref} args={[0.65, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.3}
            metalness={1}
            roughness={0}
            transparent
            opacity={0.6}
          />
        </Torus>
      </group>
    </Float>
  );
};

// Floating cubes representing data blocks
const DataBlocks = () => {
  const blocks = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
        -2 - Math.random() * 2
      ] as [number, number, number],
      rotation: Math.random() * Math.PI,
      speed: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <>
      {blocks.map((block, i) => (
        <Float key={i} speed={block.speed} rotationIntensity={1} floatIntensity={0.5}>
          <Box position={block.position} args={[0.2, 0.2, 0.2]} rotation={[block.rotation, block.rotation, 0]}>
            <meshStandardMaterial
              color="#1E3A5F"
              emissive="#FFD700"
              emissiveIntensity={0.1}
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.7}
            />
          </Box>
        </Float>
      ))}
    </>
  );
};

// Particle field in background
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = -5 - Math.random() * 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FFD700"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

export const StockAI3DScene = () => {
  const nodePositions: [number, number, number][] = [
    [-2, 1, -1], [2, 0.5, -2], [-1.5, -1, -1.5],
    [1.5, 1.5, -1], [0, -0.5, -2], [2.5, -1, -1],
    [-2.5, 0, -2], [0, 2, -1.5], [1, -1.5, -1]
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1E3A5F" />
        <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} color="#FFD700" />

        {/* 3D Elements */}
        <AICore />
        <StockBars />
        <ConnectionLines />
        <DataBlocks />
        <ParticleField />
        
        {/* Neural network nodes */}
        {nodePositions.map((pos, i) => (
          <DataNode key={i} position={pos} delay={i * 0.5} />
        ))}
      </Canvas>
    </div>
  );
};
