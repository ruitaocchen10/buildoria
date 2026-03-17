"use client";

import { useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useShallow } from "zustand/shallow";
import * as THREE from "three";
import { useBuildoriaStore } from "@/lib/store";
import { subAreaMasteryScore } from "@/lib/mock-data";
import { Building } from "./Building";
import { GroundPlane } from "./GroundPlane";
import { RegionZone } from "./RegionZone";
import type { RootState } from "@react-three/fiber";

const masteryToHeight = (score: number) => 0.5 + (score / 100) * 5.5;

export function CityMap() {
  const { regions, masteryScores } = useBuildoriaStore(
    useShallow((s) => ({ regions: s.regions, masteryScores: s.masteryScores })),
  );

  const buildings = useMemo(
    () =>
      regions.flatMap((r) =>
        r.subAreas.map((sa) => {
          const score = subAreaMasteryScore(sa.id, masteryScores);
          const height = masteryToHeight(score);
          return {
            id: sa.id,
            x: r.gridOrigin.x + sa.gridOffset.x * 2,
            z: r.gridOrigin.z + sa.gridOffset.z * 2,
            height,
            color: r.accentColor,
            name: sa.name,
          };
        }),
      ),
    [regions, masteryScores],
  );

  const handleCreated = useCallback((state: RootState) => {
    const canvas = state.gl.domElement;

    canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      console.warn("WebGL context lost — waiting for restore…");
    });

    canvas.addEventListener("webglcontextrestored", () => {
      console.info("WebGL context restored — re-initializing renderer.");
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
      camera={{ position: [23, 30, 23], fov: 50 }}
      gl={{ antialias: true }}
      shadows={{ type: THREE.PCFShadowMap }}
      onCreated={handleCreated}
    >
      <color attach="background" args={["#0b0e1a"]} />
      {/* <fog attach="fog" args={["#0b0e1a", 50, 120]} /> */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minZoom={10}
        maxZoom={80}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
        enableDamping={true}
        dampingFactor={0.08}
      />

      <GroundPlane />

      {regions.map((r) => (
        <RegionZone
          key={r.id}
          originX={r.gridOrigin.x}
          originZ={r.gridOrigin.z}
          color={r.accentColor}
          name={r.name}
        />
      ))}

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
