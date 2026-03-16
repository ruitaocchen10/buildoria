export default function CityPage() {
  return (
    <div className="city-grid-bg flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold" style={{ color: "var(--accent-apis)" }}>
          Buildoria City
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Your city map will appear here.
        </p>
        <div
          className="mt-4 rounded-lg px-4 py-2 text-sm"
          style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}
        >
          Phase 2 — 3D isometric map coming soon
        </div>
      </div>
    </div>
  );
}
