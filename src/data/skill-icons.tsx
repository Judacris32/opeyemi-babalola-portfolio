import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiDotnet,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
  SiGooglecloud,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiServerless,
  SiPostgresql,
  SiTimescale,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiGraphql,
  SiGithubactions,
  SiJest,
  SiGrafana,
  SiLinux,
  SiGit,
  SiMeilisearch,
  SiSupabase,
  SiCloudflare,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure, TbBrandCSharp, TbBrandOpenai } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { Boxes, Cpu, Network, ServerCog } from "lucide-react";

type TechEntry = {
  icon: IconType;
  /** Official brand hex. Omitted for marks that are themselves black/near-
   *  black -- those use `adaptive` instead so they read on dark surfaces. */
  color?: string;
  /** True for brand marks with no real color of their own (solid black or
   *  near-black logos like Next.js, OpenAI, Anthropic). These render in the
   *  theme's ink color instead of a fixed hex so they stay visible in dark
   *  mode, the way these brands' own dark-mode UIs do. */
  adaptive?: boolean;
};

// Shared icon + real brand-color lookup for every skill/stack name used
// across the site (Skills page, homepage skills marquee, and the Work
// page's tech-stack tags), so all three stay in sync from one place.
//
// A handful of names have no official mark in any current icon set --
// AWS, Azure, DynamoDB and CloudFormation were pulled from Simple Icons
// after trademark takedown requests from Amazon/Microsoft, and Groq,
// Pinecone and gRPC simply don't have a packaged logo anywhere yet. Those
// fall back to a plain neutral icon rather than a guessed brand color.
export const techIconMap: Record<string, TechEntry> = {
  // Languages & frameworks
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Python: { icon: SiPython, color: "#3776AB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, adaptive: true },
  Java: { icon: DiJava, color: "#5382A1" },
  "C#": { icon: TbBrandCSharp, color: "#68217A" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // AI & ML
  OpenAI: { icon: TbBrandOpenai, adaptive: true },
  Anthropic: { icon: SiAnthropic, adaptive: true },
  "Google Gemini": { icon: SiGooglegemini, color: "#8E75B2" },
  Groq: { icon: Cpu, adaptive: true },
  Ollama: { icon: SiOllama, adaptive: true },
  "RAG pipelines": { icon: Network, adaptive: true },
  Pinecone: { icon: Boxes, adaptive: true },
  "Prompt engineering": { icon: Cpu, adaptive: true },

  // Cloud & infrastructure
  AWS: { icon: TbBrandAws, color: "#FF9900" },
  "AWS SDK": { icon: TbBrandAws, color: "#FF9900" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: TbBrandAzure, color: "#0078D4" },
  Terraform: { icon: SiTerraform, color: "#844FBA" },
  HCL: { icon: SiTerraform, color: "#844FBA" },
  CloudFormation: { icon: TbBrandAws, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Serverless: { icon: SiServerless, color: "#FD5750" },
  Cloudflare: { icon: SiCloudflare, color: "#F38020" },
  "Cloudflare R2": { icon: SiCloudflare, color: "#F38020" },

  // Data & messaging
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  TimescaleDB: { icon: SiTimescale, color: "#FDB515" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  DynamoDB: { icon: TbBrandAws, color: "#FF9900" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  Kafka: { icon: SiApachekafka, adaptive: true },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  gRPC: { icon: Network, adaptive: true },
  MeiliSearch: { icon: SiMeilisearch, color: "#FF5CAA" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  Stripe: { icon: SiStripe, color: "#635BFF" },

  // Delivery & tooling
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "CI/CD": { icon: ServerCog, adaptive: true },
  Jest: { icon: SiJest, color: "#C21325" },
  TDD: { icon: Boxes, adaptive: true },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Git: { icon: SiGit, color: "#F03C2E" },
  "Git hooks": { icon: SiGit, color: "#F03C2E" },
};

const DEFAULT_ENTRY: TechEntry = { icon: Boxes, adaptive: true };

// Some names carry a trailing version/qualifier that isn't part of the
// lookup key (e.g. "Next.js 14" on the Work page vs. "Next.js" on the
// Skills page) -- strip a trailing version token before falling back.
function normalize(name: string): string {
  return name.replace(/\s+\d+(\.\d+)*$/, "").trim();
}

export function resolveTechIcon(name: string): TechEntry {
  return techIconMap[name] ?? techIconMap[normalize(name)] ?? DEFAULT_ENTRY;
}

// Back-compat for any existing callers.
export const defaultSkillIcon: IconType = DEFAULT_ENTRY.icon;
