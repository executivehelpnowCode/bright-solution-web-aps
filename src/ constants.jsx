import {
  Compass,
  ShieldCheck,
  FileText,
  GraduationCap,
  Settings,
  Type,
  MessageSquare,
  BookOpenCheck,
  BrainCircuit,
} from "lucide-react";
import visualOverview from "./assets/visual-overview.svg";
import selfAssessment from "./assets/self-assessment.svg";
import crossFunctionalRoles from "./assets/cross-functional-roles.svg";
import dataStrategy from "./assets/data-strategy.svg";
import innovativeEngine from "./assets/innovative-engine.svg";
import innovativeLab from "./assets/innovative-lab.svg";

export const options = [
  {
    id: "1",
    name: "Option 1",
  },
  {
    id: "2",
    name: "Option 2",
  },
  {
    id: "3",
    name: "Option 3",
  },
  {
    id: "4",
    name: "Option 4",
  },
  {
    id: "5",
    name: "Option 5",
  },
];

export const leveledReports = [
  {
    id: 1,
    title: "Level 1 Report & Pathway",
    description: "Foundation overview & next steps.",
    label: "Download PDF",
    url: "#1",
  },
  {
    id: 2,
    title: "Level 2 Report & Pathway",
    description: "Process alignment & adoption.",
    label: "Download PDF",
    url: "#2",
  },
  {
    id: 3,
    title: "Level 3 Report & Pathway",
    description: "Data integration & training.",
    label: "Download PDF",
    url: "#3",
  },
  {
    id: 4,
    title: "Level 4 Report & Pathway",
    description: "Measurement & optimization.",
    label: "Download PDF",
    url: "#4",
  },
  {
    id: 5,
    title: "Level 5 Report & Pathway",
    description: "Scale & continuous improvement.",
    label: "Download PDF",
    url: "#5",
  },
];

export const pillars = [
  {
    id: 1,
    title: "AI Readiness: Data & Systems",
    description:
      "Begin here. Assess your current state, understand the innovation journey, and unlock a tailored pathway before exploring the toolkit.",
    subcontents: [
      {
        id: 1,
        title: "Innovation Maturity Scale (Visual Overview)",
        description:
          "A high-level view of the stages from Foundation to Scale. Use this to orient leadership and teams.",
        img: visualOverview,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 2,
        title: "AI Readiness & Data Maturity Self Assessment",
        description:
          "Gauge your current maturity to unlock a tailored Level 1–5 pathway report.",
        img: selfAssessment,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 3,
        title: "Leveled Reports",
        description: "",
        items: leveledReports,
      },
      {
        id: 4,
        title: "Platform Excellence Committees",
        description:
          "Define cross‑functional roles and rituals to sustain innovation momentum and governance.",
        img: crossFunctionalRoles,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 5,
        title: "Data Strategy Playbook",
        description:
          "A practical roadmap for data governance, quality, and interoperability to enable AI at scale.",
        img: dataStrategy,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 6,
        title: "Innovative Engine",
        description:
          "Bright Solutions’ methodology for moving from pilots to scalable, measurable outcomes across sites.",
        img: innovativeEngine,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 7,
        title: "Innovative Lab",
        description:
          "A sandbox to pilot solutions, test assumptions, and accelerate adoption with real‑world feedback loops.",
        img: innovativeLab,
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Generative AI Toolkit Overview",
    description:
      "Practical resources for day‑to‑day AI use. Each item links out to its full content.",
    subcontents: [
      {
        id: 1,
        title: "Innovation Maturity Scale (Visual Overview)",
        description: "",
        img: "",
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 2,
        title: "AI Readiness & Data Maturity Self‑Assessment",
        description: "",
        img: "",
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 3,
        title: "AI Readiness & Data Maturity Self‑Assessment",
        description: "",
        img: "",
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
      {
        id: 4,
        title: "AI Readiness & Data Maturity Self‑Assessment",
        description: "",
        img: "",
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Innovation Roadmap & Strategy",
    description:
      "Turn pilots into practice with governance, measurement and culture.",
    subcontents: [
      {
        id: null,
        title: "",
        description: "",
        img: "",
        href: "",
        type: "",
        items: [
          {
            id: null,
            title: "",
            description: "",
          },
        ],
      },
    ],
  },
];

export const generativeAiToolkit = [
  {
    title: "Where to Begin: White Paper",
    description: "Foundational overview of readiness & ethical guardrails.",
    label: "Open",
    url: "#1",
    icon: Compass,
  },
  {
    title: "Beginners’ Safety AI Guide",
    description: "Practical tips for safe, policy‑aligned use of AI tools.",
    label: "Open",
    url: "#2",
    icon: ShieldCheck,
  },
  {
    title: "Generative AI Policy (Template)",
    description: "Customizable policy template for organizations.",
    label: "Open",
    url: "#3",
    icon: FileText,
  },
  {
    title: "Staff Training: AI Guidelines (Deck)",
    description: "Onboard teams to responsible AI.",
    label: "Open",
    url: "#4",
    icon: GraduationCap,
  },
  {
    title: "Customizing AI: White Paper",
    description: "Tailor AI to workflows without sacrificing safety.",
    label: "Open",
    url: "#5",
    icon: Settings,
  },
  {
    title: "AI Style Guide",
    description: "Tone, voice, and formatting for AI‑assisted writing.",
    label: "Open",
    url: "#6",
    icon: Type,
  },
  {
    title: "AI Prompt Guide",
    description: "Reference for crafting effective prompts.",
    label: "Open",
    url: "#7",
    icon: MessageSquare,
  },
  {
    title: "Mini Prompt Workbook (Interactive)",
    description: "Hands‑on exercises to level up prompting.",
    label: "Open",
    url: "#8",
    icon: BookOpenCheck,
  },
  {
    title: "AI Prompt Use Cases",
    description: "Curated examples for senior living.",
    label: "Open",
    url: "#9",
    icon: BrainCircuit,
  },
];

export const innovationRoadmapStrategicPlanning = [
  {
    title: "Roadmap & Strategic Plan Overview",
    description: "Visual overview of the innovation journey.",
    label: "Download PDF",
    url: "#1",
  },
  {
    title: "Case Study: Scaling AI Across Sites",
    description: "How multi‑site deployments took hold.",
    label: "Read Case Study",
    url: "#2",
  },
  {
    title: "AI Impact Measurement Toolkit",
    description: "Executive toolkit for value tracking.",
    label: "Download PDF",
    url: "#3",
  },
  {
    title: "AI Governance Refresh Checklist",
    description: "Keep policies current and actionable.",
    label: "Download Checklist",
    url: "#4",
  },
  {
    title: "Future of Generative AI: White Paper",
    description: "Trends, risks, and opportunities ahead.",
    label: "Download PDF",
    url: "#5",
  },
  {
    title: "Innovation Showcase Webinar",
    description: "Replay & resources.",
    label: "Watch Replay",
    url: "#6",
  },
];
