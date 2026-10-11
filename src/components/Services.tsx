// ─── Services Section ─────────────────────────────────────────────────────────
// UX: clear 3-level hierarchy, card affordance, staggered reveal, consistent tokens.
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data";

function useReveal(threshold = 0.12) {
  const ref  = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "UI / UX Design": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="18" height="13" rx="2"/>
      <path d="M7 19h8M11 15v4"/>
    </svg>
  ),
  "Graphic Design": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="3"/>
      <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M4.22 17.78l2.12-2.12M15.66 6.34l2.12-2.12"/>
    </svg>
  ),
  "Prompt Engineering": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h14M4 10h10M4 14h12M4 18h8"/>
      <path d="M17 14l3 3-3 3"/>
    </svg>
  ),
};

export default function Services() {
  const header = useReveal(0.1);
  const grid   = useReveal(0.1);

  return (
    <section id="Services" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref}
          className={`reveal${header.visible ? " is-visible" : ""}`}
          style={{ marginBottom: 56 }}
        >
          <span className="eyebrow">What I Do</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 600,
            letterSpacing: "-0.025em", lineHeight: 1.1, margin: "4px 0 0",
          }}>
            Services I offer
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginTop: 14, maxWidth: 520 }}>
            End-to-end creative and technical design — from first concept to polished, shipworthy product.
          </p>
        </div>

        {/* Cards — staggered reveal */}
        <div
          ref={grid.ref}
          className={`services-grid reveal-children${grid.visible ? " is-visible" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              style={{
                background: i === 0 ? "var(--accent)" : "#fff",
                border: `1px solid ${i === 0 ? "transparent" : "var(--border)"}`,
                borderRadius: "var(--r-xl)", padding: "36px 30px",
                display: "flex", flexDirection: "column", gap: 20,
                transition: "transform var(--t-base), box-shadow var(--t-base), border-color var(--t-base)",
                cursor: "default", position: "relative", overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = i === 0
                  ? "0 20px 48px rgba(0,56,168,0.35)"
                  : "var(--shadow-lg)";
                if (i !== 0) el.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                if (i !== 0) el.style.borderColor = "var(--border)";
              }}
            >
              {/* Decorative blob on featured card */}
              {i === 0 && (
                <div aria-hidden style={{
                  position: "absolute", top: -40, right: -40, width: 160, height: 160,
                  borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none",
                }} />
              )}

              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: "var(--r-md)",
                background: i === 0 ? "rgba(255,255,255,0.18)" : "var(--accent-dim)",
                border: `1px solid ${i === 0 ? "rgba(255,255,255,0.2)" : "rgba(0,56,168,0.12)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i === 0 ? "#fff" : "var(--accent)",
                flexShrink: 0,
              }}>
                {SERVICE_ICONS[s.title] ?? <span style={{ fontSize: 20 }}>{s.icon}</span>}
              </div>

              {/* Text */}
              <div style={{ flexGrow: 1 }}>
                <h3 style={{
                  fontSize: 18, fontWeight: 600, marginBottom: 10,
                  letterSpacing: "-0.01em", lineHeight: 1.3,
                  color: i === 0 ? "#fff" : "var(--text)",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: 14, lineHeight: 1.75,
                  color: i === 0 ? "rgba(255,255,255,0.75)" : "var(--muted)",
                  margin: 0,
                }}>
                  {s.desc}
                </p>
              </div>

              {/* Tool pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {s.tools.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, fontWeight: 500, letterSpacing: "0.03em",
                    color: i === 0 ? "rgba(255,255,255,0.85)" : "var(--accent)",
                    background: i === 0 ? "rgba(255,255,255,0.14)" : "var(--accent-dim)",
                    borderRadius: "var(--r-sm)", padding: "4px 9px",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
