// ─── Skills & Tools Carousel — two-row infinite marquee ─────────────────────
// Row 1 scrolls left, Row 2 scrolls right for a dynamic, modern feel.
// Each chip shows an SVG/emoji icon alongside the skill/tool name.

// ─── Icon map ─────────────────────────────────────────────────────────────────
// SVG paths kept minimal — single-colour, 20×20 viewBox.
const ICON: Record<string, React.ReactNode> = {
  // Design tools
  Figma: (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <rect x="3" y="3" width="6" height="6" rx="3" fill="#F24E1E"/>
      <rect x="3" y="11" width="6" height="6" rx="3" fill="#0ACF83"/>
      <rect x="11" y="3" width="6" height="6" rx="3" fill="#A259FF"/>
      <circle cx="14" cy="10" r="3" fill="#1ABCFE"/>
      <rect x="11" y="11" width="6" height="6" rx="1" fill="#FF7262"/>
    </svg>
  ),
  Framer: (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path d="M4 3h12v6H10L4 3zM4 9h6l6 6H4V9z" fill="currentColor"/>
    </svg>
  ),
  "Affinity Designer": (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path d="M10 2L2 16h16L10 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 13h8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  "Adobe XD": (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <rect x="2" y="2" width="16" height="16" rx="3" fill="#FF61F6"/>
      <text x="4" y="14" fontSize="8" fontWeight="800" fill="white" fontFamily="sans-serif">XD</text>
    </svg>
  ),
  // Disciplines
  "UI/UX": <span style={{fontSize:16}}>✦</span>,
  Prototyping: <span style={{fontSize:16}}>◈</span>,
  Branding: <span style={{fontSize:16}}>⟡</span>,
  "Web Design": <span style={{fontSize:16}}>🌐</span>,
  "Mobile Design": <span style={{fontSize:16}}>📱</span>,
  Typography: <span style={{fontSize:16}}>Aa</span>,
  Illustration: <span style={{fontSize:16}}>🎨</span>,
  "UX Research": <span style={{fontSize:16}}>🔍</span>,
  "Wireframing": <span style={{fontSize:16}}>📐</span>,
  "Motion Design": <span style={{fontSize:16}}>▶</span>,
  // AI & Prompt
  "GPT-4": (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/>
      <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Prompt Engineering": <span style={{fontSize:16}}>⚡</span>,
  "Chain-of-Thought": <span style={{fontSize:16}}>🔗</span>,
  RAG: <span style={{fontSize:16}}>🧠</span>,
  "Print Design": <span style={{fontSize:16}}>🖨</span>,
};

// ─── Chip data — two rows ─────────────────────────────────────────────────────
const ROW1 = [
  { label: "Figma",              color: "#1A1A2E" },
  { label: "UI/UX",             color: "#0038a8" },
  { label: "Framer",            color: "#1A1A2E" },
  { label: "Prototyping",       color: "#0038a8" },
  { label: "Branding",          color: "#1A1A2E" },
  { label: "Web Design",        color: "#0038a8" },
  { label: "Typography",        color: "#1A1A2E" },
  { label: "Illustration",      color: "#0038a8" },
  { label: "Affinity Designer", color: "#1A1A2E" },
  { label: "UX Research",       color: "#0038a8" },
];

const ROW2 = [
  { label: "Mobile Design",      color: "#0038a8" },
  { label: "GPT-4",              color: "#1A1A2E" },
  { label: "Claude",             color: "#0038a8" },
  { label: "Prompt Engineering", color: "#1A1A2E" },
  { label: "Chain-of-Thought",   color: "#0038a8" },
  { label: "RAG",                color: "#1A1A2E" },
  { label: "Print Design",       color: "#0038a8" },
  { label: "Adobe XD",           color: "#1A1A2E" },
  { label: "Motion Design",      color: "#0038a8" },
  { label: "Wireframing",        color: "#1A1A2E" },
];

// ─── Single chip ──────────────────────────────────────────────────────────────
function Chip({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#fff",
      border: "1px solid var(--border)",
      borderRadius: 100,
      padding: "10px 20px",
      flexShrink: 0,
      whiteSpace: "nowrap" as const,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      {/* Icon */}
      <span style={{ display: "flex", alignItems: "center", color, flexShrink: 0 }}>
        {ICON[label] ?? <span style={{ fontSize: 15, color }}>◆</span>}
      </span>
      {/* Label */}
      <span style={{
        fontSize: 13, fontWeight: 600, color: "var(--text)",
        letterSpacing: "0.01em",
      }}>
        {label}
      </span>
    </div>
  );
}

// ─── Single marquee row ───────────────────────────────────────────────────────
function MarqueeRow({
  items,
  direction = "left",
  duration = 36,
}: {
  items: { label: string; color: string }[];
  direction?: "left" | "right";
  duration?: number;
}) {
  // Triple the items so the loop is seamless at any viewport width
  const repeated = [...items, ...items, ...items];
  const anim = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div style={{
        display: "flex",
        gap: 12,
        width: "max-content",
        animation: `${anim} ${duration}s linear infinite`,
      }}>
        {repeated.map((item, i) => (
          <Chip key={i} label={item.label} color={item.color} />
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SkillsTicker() {
  return (
    <div style={{
      background: "var(--bg)",
      padding: "48px 0",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Left fade mask */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 100,
        background: "linear-gradient(to right, var(--bg), transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      {/* Right fade mask */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 100,
        background: "linear-gradient(to left, var(--bg), transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Row 1 — scrolls left */}
        <MarqueeRow items={ROW1} direction="left" duration={34} />
        {/* Row 2 — scrolls right (opposite direction) */}
        <MarqueeRow items={ROW2} direction="right" duration={40} />
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes marquee-right { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
