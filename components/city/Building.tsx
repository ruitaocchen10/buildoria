'use client';

import { memo } from 'react';
import { Text } from '@react-three/drei';

interface BuildingProps {
  x: number;
  z: number;
  height: number;
  color: string;
  name: string;
}

export const Building = memo(function Building({ x, z, height, color, name }: BuildingProps) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, height / 2, 0]} castShadow>
        <boxGeometry args={[1.8, height, 1.8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} />
      </mesh>
      <Text
        position={[0, height + 0.5, 0]}
        fontSize={0.22}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {name}
      </Text>
    </group>
  );
});
