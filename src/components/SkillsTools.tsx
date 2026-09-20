// ─── Skills & Tools Section ───────────────────────────────────────────────────
import { SKILLS, TOOL_GROUPS } from "@/data";
import { useInView } from "@/hooks/useInView";

// ─── Skill Bar ────────────────────────────────────────────────────────────────
function SkillBar({ label, pct, inView }: { label: string; pct: number; inView: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
        <span style={{ color: "var(--text)" }}>{label}</span>
        <span style={{ color: "var(--accent)", fontFamily: "monospace" }}>{pct}%</span>
      </div>
      <div style={{ height: "2px", background: "var(--border)", borderRadius: "1px" }}>
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function SkillsTools() {
  const { ref, inView } = useInView(0.2);

  return (
    <section style={{ padding: "100px 24px", background: "var(--surface)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Skills &amp; Tools
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: "16px 0 60px",
          }}
        >
          What I bring to the table
        </h2>

        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        >
          {/* Skill bars */}
          <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {SKILLS.map((s) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} inView={inView} />
            ))}
          </div>

          {/* Tool categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {TOOL_GROUPS.map((group) => (
              <div key={group.category}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "13px",
                        color: "var(--text)",
                        background: "#fff",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "6px 14px",
                        fontWeight: 500,
                        transition: "border-color 0.2s, color 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text)";
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
