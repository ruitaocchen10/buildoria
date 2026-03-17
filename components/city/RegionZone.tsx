'use client';

import { memo } from 'react';
import { Text } from '@react-three/drei';

interface RegionZoneProps {
  originX: number;
  originZ: number;
  zoneSize?: number;
  color: string;
  name: string;
}

export const RegionZone = memo(function RegionZone({
  originX,
  originZ,
  zoneSize = 8,
  color,
  name,
}: RegionZoneProps) {
  const cx = originX + zoneSize / 2;
  const cz = originZ + zoneSize / 2;

  return (
    <>
      {/* Translucent colored ground slab */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[cx, -0.005, cz]}
        receiveShadow={false}
      >
        <planeGeometry args={[zoneSize, zoneSize]} />
        <meshStandardMaterial
          color={color}
          opacity={0.07}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Flat watermark region label */}
      <Text
        position={[cx, 0.01, cz]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={1.6}
        color={color}
        fillOpacity={0.18}
        anchorX="center"
        anchorY="middle"
        maxWidth={zoneSize * 0.9}
        textAlign="center"
      >
        {name}
      </Text>
    </>
  );
});
