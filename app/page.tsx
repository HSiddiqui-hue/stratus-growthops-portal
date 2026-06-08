import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          AI-Powered MSP Revenue Intelligence Platform
        </div>

        <h1 className="mt-8 text-6xl font-bold">
          Stratus GrowthOps Portal
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          AI-powered platform for lead generation, company research,
          opportunity scoring, intern management, and MSP business development.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Open Dashboard
          </Link>

          <Link
            href="/leads"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            Analyze Company
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 p-6">
            <h3 className="text-xl font-bold">Lead Intelligence</h3>
            <p className="mt-3 text-slate-400">
              Research companies and identify MSP opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 p-6">
            <h3 className="text-xl font-bold">AI Opportunity Scoring</h3>
            <p className="mt-3 text-slate-400">
              Automatically score potential clients.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 p-6">
            <h3 className="text-xl font-bold">Intern Productivity</h3>
            <p className="mt-3 text-slate-400">
              Track research, leads, and outreach activities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}