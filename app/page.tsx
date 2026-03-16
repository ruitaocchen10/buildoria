import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="city-grid-bg flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex max-w-lg flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold tracking-tight" style={{ color: "var(--accent-apis)" }}>
            Buildoria
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Build your city. Master your craft.
          </p>
        </div>

        <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A gamified engineering learning platform. Complete exercises, earn mastery,
          and watch your city skyline grow.
        </p>

        <div className="flex flex-col gap-3 w-full sm:flex-row sm:justify-center">
          <a
            href="/api/auth/signin"
            className="flex h-12 items-center justify-center gap-3 rounded-lg px-6 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border-active)" }}
          >
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Sign in with GitHub
          </a>
          <Link
            href="/city"
            className="flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "var(--accent-apis)", color: "#000" }}
          >
            Explore the City
          </Link>
        </div>
      </div>
    </div>
  );
}
