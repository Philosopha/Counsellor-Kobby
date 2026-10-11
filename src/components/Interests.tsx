// ─── Interests & Hobbies Section ─────────────────────────────────────────────
// UX: personality humanises the portfolio, staggered reveal, consistent card tokens.
import { useEffect, useRef, useState } from "react";
import { INTERESTS } from "@/data";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
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

export default function Interests() {
  const header = useReveal(0.1);
  const grid   = useReveal(0.1);

  return (
    <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref}
          className={`reveal${header.visible ? " is-visible" : ""}`}
          style={{ marginBottom: 48 }}
        >
          <span className="eyebrow">Beyond the Screen</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600,
            letterSpacing: "-0.025em", lineHeight: 1.1, margin: "4px 0 0",
          }}>
            Interests &amp; Hobbies
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref}
          className={`interests-grid reveal-children${grid.visible ? " is-visible" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
        >
          {INTERESTS.map((item) => (
            <article
              key={item.label}
              style={{
                background: "#fff", border: "1px solid var(--border)",
                borderRadius: "var(--r-xl)", padding: "28px 20px",
                display: "flex", flexDirection: "column", gap: 14,
                transition: "transform var(--t-base), box-shadow var(--t-base), border-color var(--t-base)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "var(--shadow-lg)";
                el.style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: "var(--r-md)",
                background: "var(--accent-dim)",
                border: "1px solid rgba(0,56,168,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>
                {item.icon}
              </div>

              <div>
                <div style={{
                  fontSize: 14, fontWeight: 600, color: "var(--text)",
                  marginBottom: 6, letterSpacing: "-0.01em",
                }}>
                  {item.label}
                </div>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Accent indicator */}
              <div style={{
                height: 2, width: 20, background: "var(--accent)",
                borderRadius: 1, opacity: 0.35, marginTop: "auto",
              }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
