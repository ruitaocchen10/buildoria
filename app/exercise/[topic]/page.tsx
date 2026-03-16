interface ExercisePageProps {
  params: Promise<{ topic: string }>;
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const { topic } = await params;

  return (
    <div className="city-grid-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex max-w-2xl flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold capitalize" style={{ color: "var(--accent-apis)" }}>
          {topic.replace(/-/g, " ")}
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Topic exercises and mastery overview will appear here.
        </p>
        <div
          className="rounded-lg px-4 py-2 text-sm"
          style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}
        >
          Phase 4 — Exercise flow coming soon
        </div>
      </div>
    </div>
  );
}
