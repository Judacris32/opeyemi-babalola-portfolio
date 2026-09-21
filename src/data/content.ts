export const profile = {
  name: "Opeyemi Babalola",
  fullLegalName: "Babalola Opeyemi Daniel",
  role: "Senior Software & ML Systems Engineer",
  location: "Liverpool, United Kingdom",
  company: "Founder, Wardscribe",
  email: "babalolaopedaniel@gmail.com",
  phone: "+44 7831 135283",
  // TODO: swap in the real LinkedIn profile URL — the resume links the label
  // "LinkedIn" but the underlying URL wasn't included in the source file.
  linkedin: "",
  years: "6+",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/recognition", label: "Recognition" },
  { href: "/contact", label: "Contact" },
];

// Companies from the experience history, used for the home page marquee.
export const companies = [
  "EarlyBird AI",
  "Wardscribe",
  "HeySavi",
  "Access Bank PLC",
  "Regxta Global",
  "GipperPay",
  "Binance",
  "Motify",
  "DevClusters",
];

export const heroStats = [
  { value: "6+", label: "years in production systems" },
  { value: "52M+", label: "end users served at scale" },
  { value: "5", label: "LLM providers wired into one layer" },
  { value: "2", label: "industry awards for leadership" },
];

export const aboutStats = [
  { value: "6+", label: "Years shipping production software" },
  { value: "9", label: "Companies, from banks to startups" },
  { value: "5", label: "Own products built and launched" },
  { value: "1", label: "Community he runs in Liverpool" },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "EarlyBird AI",
    period: "May 2026 — Present",
    location: "Remote",
    current: true,
    summary:
      "Leading backend and infrastructure for the AI and ML components of the product, from the data layer up.",
    highlights: [
      "Owns backend and infra decisions for the app's ML and AI-facing services",
    ],
  },
  {
    role: "Lead Software Engineer & Founder",
    company: "Wardscribe",
    period: "December 2025 — Present",
    location: "Remote",
    current: true,
    summary:
      "Built the first production-ready AI agent registry on the AGNTCY Open Agent Schema Framework, from the Go backend to the CLI that ships it.",
    highlights: [
      "Architected the first production-ready agent registry implementing OASF for cross-platform agent interoperability",
      "Designed WardMind, an 8-dimensional ML confidence-scoring system for agent quality",
      "Built the Go backend serving REST, GraphQL and gRPC across registry, search and confidence services",
      "Shipped a multi-provider LLM compatibility layer spanning OpenAI, Anthropic, Google, Groq and Ollama with no code changes required",
      "Designed WardPack, a portable, cryptographically signed distribution format for AI agents",
      "Built Ward, the CLI for pulling, deploying and publishing agents with OASF import/export",
      "Modeled agent metadata, versioning and confidence history on PostgreSQL and TimescaleDB",
      "Wired MeiliSearch for sub-50ms agent discovery across 15 skill categories and 24 industry domains",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HeySavi",
    period: "March 2025 — Present",
    location: "Remote",
    current: true,
    summary:
      "Designed the org's AWS access model and built the LLM-powered chat backend that sits on top of it.",
    highlights: [
      "Automated IAM roles, policies and cross-account permissions across dev, staging and production with Terraform",
      "Built and maintains the LLM-powered chat backend, integrating SageMaker, agents and external model providers",
      "Wrote reusable Terraform modules for Lambda, ECS, S3, IAM, SQS, SNS and EventBridge",
      "Built event-driven ingestion and transformation pipelines across Lambda, S3, SQS, SNS and Step Functions",
      "Connected RAG and inference pipelines to REST and WebSocket-served agents",
      "Provisioned streaming analytics and data-lake pipelines with real-time S3 triggers, Redshift and CloudWatch",
      "Built data-mapping and embedding pipelines on Pinecone, OpenAI and DynamoDB for product recognition",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Access Bank PLC",
    period: "April 2023 — March 2025",
    location: "Remote",
    summary:
      "Led backend transformation of Primus Plus, the bank's corporate and personal banking platform, for over 52 million customers across Africa.",
    highlights: [
      "Moved Primus Plus onto scalable microservices, improving performance and reliability at continental scale",
      "Design and code reviews that lifted system efficiency by 25%, integrating Safaricom, M-Pesa and RevPay over SOAP and REST",
      "Restructured decision-making on key projects, cutting development time by 30%",
      "Rebuilt the DevOps pipeline on GitHub Actions, TurboRepo, Docker and Kubernetes, lifting deployment speed by 40%",
      "Ran Kafka and OLTP systems for real-time transaction processing",
      "Mentored new engineers into the team's codebases",
    ],
  },
  {
    role: "Senior Software Engineer, Contract",
    company: "Regxta Global",
    period: "December 2023 — Present",
    location: "Remote",
    current: true,
    summary:
      "Building backend services for a fintech startup, including the bill-payments platform that became a new revenue line.",
    highlights: [
      "Built the core bill-payments service across third-party API providers, adding roughly 15% to recurring revenue",
      "Reviews code and mentors junior developers alongside the core engineering team",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "GipperPay",
    period: "May 2022 — April 2023",
    location: "Delaware, USA",
    summary:
      "Led a 7-engineer team building cryptocurrency products for e-commerce, SMEs and large enterprises.",
    highlights: [
      "Built a scalable authentication microservice at the center of the platform",
      "Grew market reach by 50% across crypto products for e-commerce and enterprise clients",
      "Integrated multiple payment providers, lifting transaction volumes by 60%",
      "Streamlined code review and infrastructure decisions, cutting time-to-market by 20%",
    ],
  },
  {
    role: "Software Engineer",
    company: "Binance",
    period: "December 2021 — December 2022",
    location: "Remote",
    summary:
      "Worked across backend, blockchain and frontend teams at Binance and Bundle Africa on internal tooling and Cashlink, a high-volume P2P service.",
    highlights: [
      "Architected Cashlink, a fiat-crypto P2P service processing over $1.5M weekly, in a month window",
      "Improved transaction success rate by 15% and customer satisfaction by 25% through critical support fixes",
      "Contributed search and content-processing features (Algolia, Vespa) to a crypto/blockchain social platform, lifting user activity by 30%",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Motify",
    period: "January 2020 — December 2021",
    location: "Remote",
    summary:
      "Built backend systems in Java, .NET and TypeScript across PostgreSQL, MySQL and MongoDB.",
    highlights: [
      "Improved platform performance by 30% and query performance by 25%",
      "Led cross-team initiatives from design review through delivery",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "DevClusters",
    period: "February 2018 — December 2020",
    location: "Remote",
    summary:
      "Built and managed backend APIs for a team-networking product, from auth through integrations.",
    highlights: [
      "Improved authentication and data security across the API layer",
      "Integrated third-party providers that expanded the product's functionality",
    ],
  },
];

export type Project = {
  name: string;
  status?: string;
  tagline: string;
  description: string;
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Wardscribe",
    status: "Live",
    tagline: "AI agent registry with OASF compatibility",
    description:
      "The first production-ready agent registry built on AGNTCY's Open Agent Schema Framework. Go backend, Next.js frontend, and a CLI that lets teams pull, deploy and publish agents without wrestling with provider lock-in.",
    stack: ["Go", "TypeScript", "Next.js", "PostgreSQL", "TimescaleDB", "Redis", "MeiliSearch", "gRPC", "GraphQL"],
    url: "https://wardscribe.io",
  },
  {
    name: "Meanas",
    status: "In beta",
    tagline: "Cross-provider LLM session-context sync",
    description:
      "A context broker that carries a live conversation across Claude, Gemini, Kimi and ChatGPT, and across machines — without reformatting it. A Go daemon captures context passively, chunks it with token-aware compression, and ships it through Cloudflare R2 with pre-signed uploads for multi-gigabyte transfers.",
    stack: ["Go", "TypeScript", "Next.js 14", "Supabase", "Cloudflare R2", "Stripe", "zstd"],
  },
  {
    name: "Vent.help",
    tagline: "AI-assisted crisis support platform",
    description:
      "An anonymous venting platform that transcribes live crisis calls in real time, analyzes them with a purpose-trained model, and routes urgency-flagged conversations to volunteers with context-aware response suggestions.",
    stack: ["Next.js 14", "TypeScript", "AI transcription", "PostgreSQL", "Redis", "Tailwind CSS"],
    url: "https://vent.help",
  },
  {
    name: "Azath",
    tagline: "AI-powered secrets scanner",
    description:
      "A fast Go CLI that catches 100+ secret patterns using a custom-trained model alongside rule-based analysis, with entropy scoring and a privacy-preserving pipeline that fine-tunes locally on synthetic data and user feedback.",
    stack: ["Go", "Ollama", "Local model training", "Git hooks", "Pattern matching"],
    url: "https://azath.sh",
  },
  {
    name: "Coordin8",
    tagline: "Type-safe infrastructure as code",
    description:
      "An IaC platform pairing a TypeScript DSL with a Go CLI, so infrastructure gets IDE support, automatic dependency detection, and fast, reliable execution instead of another YAML file to get wrong.",
    stack: ["TypeScript", "Go", "AWS SDK", "HCL"],
    url: "https://coordin8.io",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: ["TypeScript", "Node.js", "Go", "Python", "React", "Next.js", "Java", "C#", "NestJS", ".NET"],
  },
  {
    title: "AI & ML Systems",
    skills: ["OpenAI", "Anthropic", "Google Gemini", "Groq", "Ollama", "RAG pipelines", "Pinecone", "Prompt engineering"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation", "Docker", "Kubernetes", "Serverless"],
  },
  {
    title: "Data & Messaging",
    skills: ["PostgreSQL", "TimescaleDB", "MongoDB", "DynamoDB", "Redis", "Kafka", "GraphQL", "gRPC"],
  },
  {
    title: "Delivery & Tooling",
    skills: ["GitHub Actions", "CI/CD", "Jest", "TDD", "Grafana", "Linux", "Git"],
  },
];

// Each recognition pairs one real, verifiable thing the industry said about
// Opeyemi with the screenshot that proves it -- a program + judging note,
// the press coverage that ran independently, and a working link out to it.
export type Recognition = {
  title: string;
  program: string;
  year: string;
  description: string;
  outlet: string;
  byline?: string;
  date: string;
  image: string;
  url: string;
  linkLabel: string;
};

export const recognitions: Recognition[] = [
  {
    title: "Most Outstanding Tech Executive of the Year, Financial Services",
    program: "9th Nigeria Technology Awards (NiTA)",
    year: "2023",
    description:
      "Recognized for building scalable backend infrastructure and financial technology solutions as Software Engineer and CEO of OpenFactor Technology Group, following NiTA's nomination, screening and judging process.",
    outlet: "Peoples Daily",
    date: "December 20, 2023",
    image: "/images/press/peoplesdaily-clip.jpg",
    url: "https://peoplesdaily.ng/opeyemi-daniel-babalola-honoured-as-most-outstanding-tech-executive-of-the-year-at-9th-nigeria-technology-awards/",
    linkLabel: "Read the coverage in Peoples Daily",
  },
  {
    title: "Pan-African FinTech Technology Leadership Award",
    program: "Titans of Tech Africa Awards (TOTA)",
    year: "2025",
    description:
      "Selected from 72 nominations, shortlisted to 28, and scored highest by the judging panel for contributions to fintech, software engineering and digital innovation across the continent.",
    outlet: "The Independent",
    byline: "Abisola Shojobi",
    date: "July 26, 2025",
    image: "/images/press/independent-clip.jpg",
    // TODO: swap in the direct Independent (independentnig.com) article URL
    // once confirmed -- it couldn't be located with confidence, so this
    // points to the official Titans of Tech winners announcement instead,
    // a real, verified link rather than a guessed one.
    url: "https://titansoftechawards.com/tot-2025-award-winners/",
    linkLabel: "See the official award announcement",
  },
];

export const community = [
  {
    org: "AGNTCY",
    role: "Contributing member",
    description:
      "Contributing to the Open Agent Schema Framework (OASF) at AGNTCY, the Linux Foundation project backed by Cisco, Google, Dell, Oracle and Red Hat, helping set the open standard for AI agent interoperability.",
  },
  {
    org: "MLOps Community Liverpool",
    role: "Lead coordinator",
    description:
      "Organizes meetups and knowledge-sharing sessions on model deployment and ML infrastructure, building a local community of practice for MLOps in Liverpool.",
  },
];

export const education = [
  {
    school: "Edge Hill University, United Kingdom",
    degree: "Master's Degree in Computing",
    year: "2024",
  },
  {
    school: "University of Ilorin, Nigeria",
    degree: "Bachelor's Degree",
    year: "2016",
  },
];
