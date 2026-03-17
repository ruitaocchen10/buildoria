"use client";

import { memo } from "react";

export const GroundPlane = memo(function GroundPlane() {
  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#0f1520" />
      </mesh>
      <gridHelper args={[80, 30, "#1e2a3a", "#1e2a3a"]} position={[0, 0, 0]} />
    </>
  );
});
