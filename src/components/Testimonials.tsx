// ─── Testimonials Section ─────────────────────────────────────────────────────
// UX: social proof hierarchy, star ratings for visual credibility,
// staggered card reveal, clear attribution.
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data";

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

// 5-star display
function Stars() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)">
          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.6 3.5L7 9.3l-3.1 1.7.6-3.5L2 5l3.5-.5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const header = useReveal(0.1);
  const grid   = useReveal(0.1);

  return (
    <section id="Testimonials" style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref}
          className={`reveal${header.visible ? " is-visible" : ""}`}
          style={{ marginBottom: 56 }}
        >
          <span className="eyebrow">Client Feedback</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 600,
            letterSpacing: "-0.025em", lineHeight: 1.1, margin: "4px 0 0",
          }}>
            What clients say
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={grid.ref}
          className={`services-grid reveal-children${grid.visible ? " is-visible" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              style={{
                background: i === 1 ? "var(--accent)" : "#fff",
                border: `1px solid ${i === 1 ? "transparent" : "var(--border)"}`,
                borderRadius: "var(--r-xl)", padding: "32px",
                display: "flex", flexDirection: "column", gap: 20,
                transition: "transform var(--t-base), box-shadow var(--t-base)",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = i === 1 ? "0 20px 48px rgba(0,56,168,0.3)" : "var(--shadow-lg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {/* Decorative blob on featured */}
              {i === 1 && (
                <div aria-hidden style={{
                  position: "absolute", bottom: -40, right: -40, width: 140, height: 140,
                  borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none",
                }} />
              )}

              {/* Stars */}
              <div style={{ filter: i === 1 ? "brightness(0) invert(1)" : "none", opacity: i === 1 ? 0.9 : 1 }}>
                <Stars />
              </div>

              {/* Quote mark */}
              <div style={{
                fontSize: 40, fontFamily: "'Fraunces', serif", lineHeight: 1,
                color: i === 1 ? "rgba(255,255,255,0.4)" : "var(--accent)",
                marginTop: -8,
              }}>
                &ldquo;
              </div>

              <p style={{
                fontSize: 14, lineHeight: 1.8, flexGrow: 1, margin: 0,
                color: i === 1 ? "rgba(255,255,255,0.85)" : "var(--muted)",
              }}>
                {t.text}
              </p>

              {/* Attribution */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                paddingTop: 16,
                borderTop: `1px solid ${i === 1 ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: i === 1 ? "rgba(255,255,255,0.2)" : "var(--accent-dim)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700,
                  color: i === 1 ? "#fff" : "var(--accent)",
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: i === 1 ? "#fff" : "var(--text)" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,0.6)" : "var(--muted)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
