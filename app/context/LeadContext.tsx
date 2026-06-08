"use client";

import { createContext, useContext, useState } from "react";

export type SavedLead = {
  id: number;
  companyName: string;
  industry: string;
  score: number;
  status: string;
};

type LeadContextType = {
  savedLeads: SavedLead[];
  addLead: (lead: SavedLead) => void;
};

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [savedLeads, setSavedLeads] = useState<SavedLead[]>([]);

  function addLead(lead: SavedLead) {
    setSavedLeads((currentLeads) => [lead, ...currentLeads]);
  }

  return (
    <LeadContext.Provider value={{ savedLeads, addLead }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadContext);

  if (!context) {
    throw new Error("useLeads must be used inside LeadProvider");
  }

  return context;
}