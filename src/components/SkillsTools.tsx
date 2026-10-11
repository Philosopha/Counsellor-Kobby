// ─── Skills & Tools Section ───────────────────────────────────────────────────
// UX: animated bars reward scrolling, tool pills have clear hover affordance,
// two-column layout provides visual balance.
import { useEffect, useRef, useState } from "react";
import { SKILLS, TOOL_GROUPS } from "@/data";
import { useInView } from "@/hooks/useInView";

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

function SkillBar({ label, pct, inView }: { label: string; pct: number; inView: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{label}</span>
        <span style={{
          fontSize: 12, color: "var(--accent)", fontFamily: "monospace",
          background: "var(--accent-dim)", padding: "2px 7px",
          borderRadius: "var(--r-sm)", fontWeight: 600,
        }}>
          {pct}%
        </span>
      </div>
      <div style={{ height: 3, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${pct}%` : "0%",
            height: "100%",
            background: `linear-gradient(90deg, var(--accent) 0%, #4d8bff 100%)`,
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsTools() {
  const { ref: barsRef, inView } = useInView(0.2);
  const header = useReveal(0.1);
  const toolsReveal = useReveal(0.1);

  return (
    <section style={{ padding: "96px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={header.ref}
          className={`reveal${header.visible ? " is-visible" : ""}`}
          style={{ marginBottom: 56 }}
        >
          <span className="eyebrow">Skills &amp; Tools</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 600,
            letterSpacing: "-0.025em", lineHeight: 1.1, margin: "4px 0 0",
          }}>
            What I bring to the table
          </h2>
        </div>

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
        >
          {/* Skill bars */}
          <div ref={barsRef} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {SKILLS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                <SkillBar label={s.label} pct={s.pct} inView={inView} />
              </div>
            ))}
          </div>

          {/* Tool categories */}
          <div
            ref={toolsReveal.ref}
            className={`reveal${toolsReveal.visible ? " is-visible" : ""}`}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {TOOL_GROUPS.map((group) => (
              <div key={group.category}>
                <div style={{
                  fontSize: 11, fontWeight: 600, color: "var(--muted)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  marginBottom: 14,
                }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 13, color: "var(--text)", background: "#fff",
                        border: "1px solid var(--border)", borderRadius: "var(--r-md)",
                        padding: "6px 14px", fontWeight: 500,
                        transition: "border-color var(--t-fast), color var(--t-fast), background var(--t-fast), transform var(--t-fast)",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--accent)";
                        el.style.color = "var(--accent)";
                        el.style.background = "var(--accent-dim)";
                        el.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--border)";
                        el.style.color = "var(--text)";
                        el.style.background = "#fff";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
