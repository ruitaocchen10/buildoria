export default function ProgressPage() {
  return (
    <div className="city-grid-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold" style={{ color: "var(--accent-devops)" }}>
          Your Progress
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Mastery breakdown and concept graph will appear here.
        </p>
        <div
          className="rounded-lg px-4 py-2 text-sm"
          style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}
        >
          Phase 6 — Progress overview coming soon
        </div>
      </div>
    </div>
  );
}
