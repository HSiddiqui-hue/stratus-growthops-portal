"use client";

import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import { useLeads } from "@/app/context/LeadContext";

export default function DashboardPage() {
  const { savedLeads } = useLeads();

  const totalLeads = savedLeads.length;
  const highOpportunity = savedLeads.filter((lead) => lead.score >= 80).length;
  const qualifiedLeads = savedLeads.filter(
    (lead) => lead.status === "High Opportunity"
  ).length;

  const averageScore =
    totalLeads > 0
      ? Math.round(
          savedLeads.reduce((total, lead) => total + lead.score, 0) /
            totalLeads
        )
      : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="mt-4 text-slate-400">
          AI-powered MSP Revenue Intelligence Platform
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <StatCard
            title="Total Leads"
            value={String(totalLeads)}
            description="Companies saved from Lead Intelligence"
          />

          <StatCard
            title="Qualified Leads"
            value={String(qualifiedLeads)}
            description="Ready for outreach"
          />

          <StatCard
            title="High Opportunity"
            value={String(highOpportunity)}
            description="Score above 80"
          />

          <StatCard
            title="Average Score"
            value={`${averageScore}/100`}
            description="Average MSP opportunity score"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Recent Saved Leads</h2>

            <div className="mt-5 space-y-4">
              {savedLeads.length === 0 ? (
                <p className="rounded-xl bg-slate-950 p-4 text-slate-400">
                  No leads saved yet. Go to Leads and analyze a company.
                </p>
              ) : (
                savedLeads.slice(0, 5).map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-xl bg-slate-950 p-4 text-slate-300"
                  >
                    <p className="font-semibold text-white">
                      {lead.companyName}
                    </p>
                    <p className="text-sm text-slate-400">
                      {lead.industry} • {lead.status}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Top MSP Opportunities</h2>

            <div className="mt-5 space-y-4">
              {savedLeads.length === 0 ? (
                <p className="rounded-xl bg-slate-950 p-4 text-slate-400">
                  No opportunities yet. Save a lead first.
                </p>
              ) : (
                [...savedLeads]
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((lead) => (
                    <div
                      key={lead.id}
                      className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
                    >
                      <span className="text-slate-300">
                        {lead.companyName}
                      </span>

                      <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold">
                        {lead.score}/100
                      </span>
                    </div>
                  ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}