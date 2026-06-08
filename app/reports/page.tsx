import Navbar from "@/components/Navbar";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold">
          Analytics
        </h1>

        <p className="mt-4 text-slate-400">
          MSP revenue intelligence and intern performance insights.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Total Companies
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              124
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Qualified Leads
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              38
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Average Score
            </p>

            <h2 className="mt-3 text-4xl font-bold text-blue-400">
              88
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Intern Productivity
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-400">
              89%
            </h2>
          </div>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">
              Top Industries
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span>Construction</span>
                <span>31 Leads</span>
              </div>

              <div className="flex justify-between">
                <span>Healthcare</span>
                <span>25 Leads</span>
              </div>

              <div className="flex justify-between">
                <span>Accounting</span>
                <span>18 Leads</span>
              </div>

              <div className="flex justify-between">
                <span>Legal</span>
                <span>14 Leads</span>
              </div>

            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">
              Intern Leaderboard
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">
                <span>Andrea Samson</span>
                <span>91%</span>
              </div>

              <div className="flex justify-between">
                <span>Jayavidhya Vijay</span>
                <span>87%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}