import Link from 'next/link';
import { CityMapLoader } from '@/components/city/CityMapLoader';

export default function CityPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0b0e1a', position: 'relative' }}>
      {/* Nav bar */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          background: 'rgba(11, 14, 26, 0.7)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(30, 41, 59, 0.6)',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#00d4ff',
            letterSpacing: '-0.02em',
          }}
        >
          Buildoria
        </span>
        <Link
          href="/progress"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#94a3b8',
            textDecoration: 'none',
            padding: '6px 14px',
            borderRadius: '6px',
            background: 'rgba(26, 34, 53, 0.8)',
            border: '1px solid #1e293b',
          }}
        >
          Progress
        </Link>
      </nav>

      {/* 3D City */}
      <CityMapLoader />
    </div>
  );
}
