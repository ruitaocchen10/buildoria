'use client';
import dynamic from 'next/dynamic';

const CityMap = dynamic(
  () => import('./CityMap').then((m) => m.CityMap),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: '100%', height: '100%', background: '#0b0e1a' }} />
    ),
  }
);

export function CityMapLoader() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CityMap />
    </div>
  );
}
