import Navbar from "@/components/Navbar";
import { pipelineData } from "@/lib/pipelineData";

export default function PipelinePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold">
          Sales Pipeline
        </h1>

        <p className="mt-4 text-slate-400">
          Track opportunities through the MSP sales process.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">

          <PipelineColumn
            title="New"
            leads={pipelineData.new}
          />

          <PipelineColumn
            title="Qualified"
            leads={pipelineData.qualified}
          />

          <PipelineColumn
            title="Proposal"
            leads={pipelineData.proposal}
          />

          <PipelineColumn
            title="Negotiation"
            leads={pipelineData.negotiation}
          />

          <PipelineColumn
            title="Won"
            leads={pipelineData.won}
          />

        </div>
      </div>
    </main>
  );
}

function PipelineColumn({
  title,
  leads,
}: {
  title: string;
  leads: {
    company: string;
    score: number;
  }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-4 text-xl font-bold">
        {title}
      </h2>

      <div className="space-y-3">
        {leads.map((lead) => (
          <div
            key={lead.company}
            className="rounded-xl bg-slate-950 p-3"
          >
            <p className="font-semibold">
              {lead.company}
            </p>

            <p className="mt-1 text-sm text-blue-400">
              {lead.score}/100
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}