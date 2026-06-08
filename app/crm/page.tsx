"use client";

import Navbar from "@/components/Navbar";
import { useLeads } from "@/app/context/LeadContext";

export default function CRMPage() {
  const { savedLeads } = useLeads();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl p-10">
        <h1 className="text-5xl font-bold">
          CRM Management
        </h1>

        <p className="mt-4 text-slate-400">
          Manage and track MSP opportunities.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">Industry</th>
                <th className="p-4 text-left">Score</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {savedLeads.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-6 text-center text-slate-400"
                  >
                    No leads saved yet.
                  </td>
                </tr>
              ) : (
                savedLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-t border-slate-800"
                  >
                    <td className="p-4">
                      {lead.companyName}
                    </td>

                    <td className="p-4">
                      {lead.industry}
                    </td>

                    <td className="p-4 text-blue-400 font-bold">
                      {lead.score}/100
                    </td>

                    <td className="p-4">
                      {lead.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}