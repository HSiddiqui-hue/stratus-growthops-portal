import Navbar from "@/components/Navbar";

const interns = [
  {
    name: "Andrea Samson",
    role: "IT Sales & Marketing Intern",
    companiesResearched: 23,
    qualifiedLeads: 8,
    crmUpdates: 19,
    productivity: "91%",
  },
  {
    name: "Jayavidhya Vijay",
    role: "IT Sales & Marketing Intern",
    companiesResearched: 19,
    qualifiedLeads: 6,
    crmUpdates: 16,
    productivity: "87%",
  },
];

export default function InternsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold">Team</h1>

        <p className="mt-4 text-slate-400">
          Track intern productivity, lead research activity, and CRM contribution.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {interns.map((intern) => (
            <div
              key={intern.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-2xl font-bold">{intern.name}</h2>
              <p className="mt-2 text-slate-400">{intern.role}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Companies Researched</p>
                  <p className="mt-2 text-3xl font-bold">
                    {intern.companiesResearched}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Qualified Leads</p>
                  <p className="mt-2 text-3xl font-bold">
                    {intern.qualifiedLeads}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">CRM Updates</p>
                  <p className="mt-2 text-3xl font-bold">
                    {intern.crmUpdates}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Productivity</p>
                  <p className="mt-2 text-3xl font-bold text-blue-400">
                    {intern.productivity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}