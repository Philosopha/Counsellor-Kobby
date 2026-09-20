// ─── Shared Type Definitions ──────────────────────────────────────────────────

export interface Project {
  title: string;
  tags: string[];
  desc: string;
  img: string;
  link: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
  tools: string[];
}

export interface Skill {
  label: string;
  pct: number;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface TickerItem {
  label: string;
  symbol: string;
}

export interface StatCard {
  value: string;
  label: string;
  icon: string;
  desc: string;
}

export interface Interest {
  icon: string;
  label: string;
  desc: string;
}

export interface ToolGroup {
  category: string;
  tools: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface GraphicWork {
  title: string;
  desc: string;
  img: string;
}

export type Page = "home" | "graphic-design" | "dubly-case-study";
