'use client';

import { useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useShallow } from 'zustand/shallow';
import * as THREE from 'three';
import { useBuildoriaStore } from '@/lib/store';
import { topicMasteryScore } from '@/lib/mock-data';
import { Building } from './Building';
import { GroundPlane } from './GroundPlane';
import type { RootState } from '@react-three/fiber';

const masteryToHeight = (score: number) => 0.5 + (score / 100) * 5.5;

export function CityMap() {
  const { topics, masteryScores } = useBuildoriaStore(
    useShallow((s) => ({ topics: s.topics, masteryScores: s.masteryScores }))
  );

  const buildings = useMemo(
    () =>
      topics.map((topic) => {
        const score = topicMasteryScore(topic.id, masteryScores);
        const height = masteryToHeight(score);
        return {
          id: topic.id,
          x: topic.gridPosition.x * 4,
          z: topic.gridPosition.z * 4,
          height,
          color: topic.accentColor,
          name: topic.name,
        };
      }),
    [topics, masteryScores]
  );

  const handleCreated = useCallback((state: RootState) => {
    const canvas = state.gl.domElement;

    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      console.warn('WebGL context lost — waiting for restore…');
    });

    canvas.addEventListener('webglcontextrestored', () => {
      console.info('WebGL context restored — re-initializing renderer.');
      state.gl.dispose();
      state.gl = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
      });
      state.gl.shadowMap.enabled = true;
      state.gl.shadowMap.type = THREE.PCFShadowMap;
      state.invalidate();
    });
  }, []);

  return (
    <Canvas
      orthographic
      camera={{ position: [20, 20, 20], zoom: 55, near: 0.1, far: 1000 }}
      gl={{ antialias: true }}
      shadows={{ type: THREE.PCFShadowMap }}
      onCreated={handleCreated}
    >
      <color attach="background" args={['#0b0e1a']} />
      <fog attach="fog" args={['#0b0e1a', 30, 80]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 3}
      />

      <GroundPlane />

      {buildings.map((b) => (
        <Building
          key={b.id}
          x={b.x}
          z={b.z}
          height={b.height}
          color={b.color}
          name={b.name}
        />
      ))}
    </Canvas>
  );
}
