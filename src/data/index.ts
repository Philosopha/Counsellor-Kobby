// ─── All Static Data ──────────────────────────────────────────────────────────
import type {
  Project,
  Service,
  Skill,
  Testimonial,
  TickerItem,
  StatCard,
  Interest,
  ToolGroup,
  ContactLink,
} from "@/types";

import gdWork1 from "@/imports/RMW-1.png";
import gdWork2 from "@/imports/SOREL_JUICE.png";
import gdWork3 from "@/imports/photo_2026-09-09_10-14-28.jpg";
import gdWork4 from "@/imports/photo_2026-09-09_10-00-18.jpg";
import gdWork5 from "@/imports/FAIRES_FASHION.jpeg";
import gdWork6 from "@/imports/photo_2026-09-09_10-25-42.jpg";
import projImg1 from "@/imports/Screenshot_2026-09-09_104206.png";
import projImg2 from "@/imports/Screenshot_2026-09-09_124649.png";
import projImg3 from "@/imports/Screenshot_2026-09-09_111441.png";
import projImg4 from "@/imports/Screenshot_2026-09-09_104409-1.png";
import projImg5 from "@/imports/Screenshot_2026-09-09_103704.png";
import projImg6 from "@/imports/Screenshot_2026-09-09_103939.png";

export { gdWork1, gdWork2, gdWork3, gdWork4, gdWork5, gdWork6 };

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["Home", "About", "Projects", "Services", "Testimonials", "Contact"];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    title: "Podcast Website",
    tags: ["Web Design", "UI/UX", "Branding"],
    desc: "A full brand identity and web presence for a podcast platform — bold visuals, intuitive navigation, and a voice that commands attention.",
    img: projImg1,
    link: "https://www.figma.com/proto/lH1aw5m9JydiZUDnHqXUrU/TEKPOD-00?node-id=9-56&viewport=934%2C69%2C0.41&t=yhbBh7odoiZymSrv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=9%3A56&page-id=0%3A1",
  },
  {
    title: "E-commerce Mobile App",
    tags: ["Mobile Design", "UI/UX", "Prototyping"],
    desc: "A sleek mobile shopping experience with streamlined checkout flows, smart product discovery, and a design system built for scale.",
    img: projImg2,
    link: "https://www.figma.com/proto/JLh460oXY8XDy50NOthD5R/SHOPGHANA.COM?node-id=7-17&viewport=258%2C154%2C0.05&t=vIv5P0yCSaXlPcPw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Fast Food & Pastries Website",
    tags: ["Web Design", "UI/UX", "Branding"],
    desc: "Mouth-watering visuals meet frictionless ordering — a restaurant brand identity and website designed to drive appetite and conversions.",
    img: projImg3,
    link: "",
  },
  {
    title: "Auto Sphere Website",
    tags: ["Web Design", "UI/UX"],
    desc: "A service platform for car towing, maintenance, and repairs — one hub for everything automotive, designed for clarity and trust.",
    img: projImg4,
    link: "https://www.figma.com/proto/yQFs9zgkPblb1YNIRTNDrg/AutoSphere?node-id=1-2&p=f&viewport=109%2C108%2C0.08&t=c6OpOPNvNppBvyXP-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Afiyai",
    tags: ["UI/UX", "Mobile Design", "Health Tech"],
    desc: "A WhatsApp-native platform helping individuals, institutions, and hospital facilities track blood pressure, log readings, and receive personalized health tips — no app download required.",
    img: projImg5,
    link: "https://www.useafiyai.com/",
  },
  {
    title: "SmartGuard AI",
    tags: ["Product Design", "Cybersecurity"],
    desc: "An AI-powered intrusion detection and mitigation dashboard, designed from enterprise SOC use cases through to a lightweight personal-PC variant.",
    img: projImg6,
    link: "",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    icon: "✦",
    title: "UI / UX Design",
    desc: "Crafting intuitive interfaces and seamless user journeys that convert visitors into loyal users.",
    tools: ["Figma", "Prototyping", "User Research", "Wireframing"],
  },
  {
    icon: "◈",
    title: "Graphic Design",
    desc: "Bold visual identities, brand systems, and print-ready assets that make brands unforgettable.",
    tools: ["Branding", "Typography", "Illustration", "Print"],
  },
  {
    icon: "⟡",
    title: "Prompt Engineering",
    desc: "Designing high-performance AI prompts that extract precise, creative, and reliable outputs from LLMs.",
    tools: ["GPT-4", "Claude", "Chain-of-Thought", "RAG"],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  { label: "UI/UX Design", pct: 90 },
  { label: "Graphic Design", pct: 88 },
  { label: "Prompt Engineering", pct: 85 },
  { label: "Branding & Identity", pct: 80 },
  { label: "Motion & Interaction", pct: 72 },
];

// ─── Tool Groups ──────────────────────────────────────────────────────────────
export const TOOL_GROUPS: ToolGroup[] = [
  {
    category: "Design Tools",
    tools: ["Figma", "Framer", "Affinity Designer", "Adobe XD"],
  },
  {
    category: "Design Disciplines",
    tools: ["UI/UX", "Prototyping", "Branding", "Web Design", "Mobile Design", "Typography", "Illustration"],
  },
  {
    category: "AI & Prompt Engineering",
    tools: ["GPT-4", "Claude", "Chain-of-Thought", "RAG", "Google AI Labs"],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ama Boateng",
    role: "Founder, AromaBlend",
    text: "Gbedemah delivered a brand identity that perfectly captured our essence. The attention to detail and the ability to translate our vision into a compelling visual system was extraordinary.",
    avatar: "AB",
  },
  {
    name: "Kweku Mensah",
    role: "CTO, HealthTrack GH",
    text: "Working with Counsellor on the Afiyai app was a game-changer. The UX research was thorough and the final design was both beautiful and deeply intuitive for our users.",
    avatar: "KM",
  },
  {
    name: "Sarah Osei",
    role: "Marketing Director, AutoHub",
    text: "The website redesign exceeded every expectation. Our conversion rate jumped 40% in the first month. Counsellor understands how to make design work for business.",
    avatar: "SO",
  },
];

// ─── Skills Ticker ────────────────────────────────────────────────────────────
export const TICKER_ITEMS: TickerItem[] = [
  { label: "Figma", symbol: "✦" },
  { label: "UI/UX Design", symbol: "◈" },
  { label: "Framer", symbol: "✦" },
  { label: "Prototyping", symbol: "◈" },
  { label: "Graphic Design", symbol: "✦" },
  { label: "Branding", symbol: "◈" },
  { label: "Affinity Designer", symbol: "✦" },
  { label: "Web Design", symbol: "◈" },
  { label: "Mobile Design", symbol: "✦" },
  { label: "UX Research", symbol: "◈" },
  { label: "Prompt Engineering", symbol: "✦" },
  { label: "Typography", symbol: "◈" },
  { label: "Illustration", symbol: "✦" },
  { label: "Motion & Interaction", symbol: "◈" },
  { label: "GPT-4 / Claude", symbol: "✦" },
  { label: "Chain-of-Thought", symbol: "◈" },
  { label: "RAG", symbol: "✦" },
  { label: "Print Design", symbol: "◈" },
];

// ─── Stats Cards ──────────────────────────────────────────────────────────────
export const STATS: StatCard[] = [
  { value: "3+", label: "Years Experience", icon: "◷", desc: "Designing since 2021" },
  { value: "8+", label: "Projects Delivered", icon: "◈", desc: "Across web, mobile & brand" },
  { value: "5+", label: "Happy Clients", icon: "✦", desc: "Worldwide satisfaction" },
  { value: "3", label: "Disciplines", icon: "⟡", desc: "Design · Art · AI" },
];

// ─── Interests ────────────────────────────────────────────────────────────────
export const INTERESTS: Interest[] = [
  { icon: "🎵", label: "Singing", desc: "Music is how I reset and create from a different part of myself." },
  { icon: "✏️", label: "Designing", desc: "Even off the clock, I sketch interfaces and visual ideas." },
  { icon: "🎬", label: "Watching Movies", desc: "Film is storytelling — I study how scenes communicate emotion." },
  { icon: "✍️", label: "Writing", desc: "Words sharpen thinking. I write to clarify what I know and feel." },
  { icon: "📖", label: "Reading", desc: "Books on design, technology, philosophy, and human behaviour." },
];

// ─── Contact Links ────────────────────────────────────────────────────────────
export const CONTACT_LINKS: ContactLink[] = [
  { label: "Email", value: "hello@gbedemahcounsellor.com", href: "mailto:hello@gbedemahcounsellor.com" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/counsellor-gbedemah-04a722337/", href: "https://www.linkedin.com/in/counsellor-gbedemah-04a722337/" },
  { label: "Behance", value: "behance.net/counsellorkobbyg", href: "https://www.behance.net/counsellorkobbyg" },
  { label: "Contra", value: "contra.com/counsellor242", href: "https://contra.com/counsellor242_q4u35fyg" },
];
