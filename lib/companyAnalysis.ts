export type CompanyAnalysis = {
  industry: string;
  employees: string;
  location: string;
  technology: string;
  score: number;
  services: string[];
};

export function generateMockAnalysis(companyName: string): CompanyAnalysis {
  const company = companyName.toLowerCase();

  if (company.includes("dental")) {
    return {
      industry: "Healthcare",
      employees: "20-50",
      location: "Auckland",
      technology: "Microsoft 365",
      score: 88,
      services: [
        "Cybersecurity Review",
        "Microsoft 365 Optimisation",
        "Backup & Disaster Recovery",
      ],
    };
  }

  if (company.includes("construction")) {
    return {
      industry: "Construction",
      employees: "50-100",
      location: "Auckland",
      technology: "Microsoft 365",
      score: 92,
      services: [
        "Cybersecurity Review",
        "Cloud Migration",
        "Backup & Disaster Recovery",
      ],
    };
  }

  if (company.includes("accounting")) {
    return {
      industry: "Accounting",
      employees: "10-50",
      location: "Auckland",
      technology: "Microsoft 365 + SharePoint",
      score: 85,
      services: ["Microsoft 365 Review", "Email Security", "Backup Solutions"],
    };
  }

  if (company.includes("google")) {
    return {
      industry: "Technology",
      employees: "10,000+",
      location: "Global",
      technology: "Google Workspace",
      score: 95,
      services: [
        "Cloud Security Assessment",
        "Advanced Monitoring",
        "Enterprise Support",
      ],
    };
  }

  return {
    industry: "Unknown",
    employees: "Unknown",
    location: "Unknown",
    technology: "Unknown",
    score: 70,
    services: [
      "Initial IT Assessment",
      "Cybersecurity Review",
      "Technology Roadmap",
    ],
  };
}