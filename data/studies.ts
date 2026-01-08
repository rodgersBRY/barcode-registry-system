export interface Study {
  id: number;
  title: string;
  code: string;
  description?: string;
  active: boolean;
  createdAt: string;
}

export const dummyStudies: Study[] = [
  {
    id: 1,
    title: "National Livestock Surveillance Study",
    code: "NLSS-2025",
    description:
      "Nationwide monitoring of livestock health and disease patterns.",
    active: true,
    createdAt: "2025-10-12T08:30:00Z",
  },
  {
    id: 2,
    title: "Rabies Vaccination Coverage Assessment",
    code: "RVCA-001",
    description:
      "Assessment of rabies vaccination uptake across selected counties.",
    active: true,
    createdAt: "2025-09-20T11:45:00Z",
  },
  {
    id: 3,
    title: "Antimicrobial Resistance Baseline Study",
    code: "AMR-BL-2024",
    description:
      "Baseline data collection on antimicrobial resistance in cattle.",
    active: false,
    createdAt: "2025-08-05T14:10:00Z",
  },
  {
    id: 4,
    title: "Zoonotic Disease Early Warning Pilot",
    code: "ZDEW-PILOT",
    description:
      "Pilot study for early detection of zoonotic disease outbreaks.",
    active: true,
    createdAt: "2025-11-01T09:00:00Z",
  },
  {
    id: 5,
    title: "Smallholder Dairy Productivity Study",
    code: "SDPS-2025",
    description:
      "Study focusing on milk yield, feeding practices, and animal health.",
    active: true,
    createdAt: "2025-12-03T10:20:00Z",
  },
  {
    id: 6,
    title: "Wildlife–Livestock Interface Assessment",
    code: "WLIA-2024",
    description:
      "Evaluating disease transmission risks at wildlife–livestock interfaces.",
    active: false,
    createdAt: "2025-07-18T16:40:00Z",
  },
];
