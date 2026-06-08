"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  generateMockAnalysis,
  type CompanyAnalysis,
} from "@/lib/companyAnalysis";
import { useLeads } from "@/app/context/LeadContext";

export default function LeadsPage() {
  const { savedLeads, addLead } = useLeads();

  const [showResult, setShowResult] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [saved, setSaved] = useState(false);
  const [analysis, setAnalysis] = useState<CompanyAnalysis>(
    generateMockAnalysis("")
  );

  function handleAnalyze() {
    if (companyName.trim() !== "") {
      const result = generateMockAnalysis(companyName);

      setAnalysis(result);
      setShowResult(true);
      setSaved(false);
    }
  }

  function handleSaveLead() {
    addLead({
      id: Date.now(),
      companyName,
      industry: analysis.industry,
      score: analysis.score,
      status: analysis.score >= 80 ? "High Opportunity" : "Review Needed",
    });

    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-5xl font-bold">Lead Intelligence</h1>

        <p className="mt-4 text-slate-400">
          Research companies and identify MSP opportunities.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="mb-3 block text-sm text-slate-400">
            Company Name or Website
          </label>

          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="ABC Construction Ltd"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Analyze Company
          </button>
        </div>

        {showResult && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-3xl font-bold">{companyName}</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-slate-400">Industry</p>
                <p>{analysis.industry}</p>
              </div>

              <div>
                <p className="text-slate-400">Employees</p>
                <p>{analysis.employees}</p>
              </div>

              <div>
                <p className="text-slate-400">Location</p>
                <p>{analysis.location}</p>
              </div>

              <div>
                <p className="text-slate-400">Technology</p>
                <p>{analysis.technology}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-slate-400">MSP Opportunity Score</p>

              <p className="text-4xl font-bold text-blue-400">
                {analysis.score}/100
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-slate-400">Recommended Services</p>

              <ul className="space-y-2">
                {analysis.services.map((service) => (
                  <li key={service}>• {service}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleSaveLead}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-700"
            >
              Save Lead
            </button>

            {saved && (
              <p className="mt-4 text-sm font-medium text-green-400">
                Lead saved successfully.
              </p>
            )}
          </div>
        )}

        {savedLeads.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold">Saved Leads</h2>

            <div className="mt-5 space-y-4">
              {savedLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
                >
                  <div>
                    <p className="font-semibold">{lead.companyName}</p>
                    <p className="text-sm text-slate-400">{lead.industry}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-blue-400">
                      {lead.score}/100
                    </p>
                    <p className="text-sm text-slate-400">{lead.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}