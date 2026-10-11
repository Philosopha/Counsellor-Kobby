// ─── Dubly Case Study Section ─────────────────────────────────────────────────
// Sits between Projects and Services in the main portfolio page.

import d1 from "@/imports/d1.png";

// (SVG mockup replaced by real screenshot d1.png)

// ─── Section component ─────────────────────────────────────────────────────────
interface DublyCaseStudyProps {
  onViewCaseStudy: () => void;
}

export default function DublyCaseStudy({ onViewCaseStudy }: DublyCaseStudyProps) {

  return (
    <section
      id="DublyCaseStudy"
      style={{ padding: "96px 24px", background: "var(--surface)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Label ── */}
        <span className="eyebrow" style={{ marginBottom: 48, display: "inline-flex" }}>
          Case Study
        </span>

        {/* ── Two-column layout ── */}
        <div
          className="dubly-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(28px, 4vw, 56px)",
            alignItems: "center",
          }}
        >

          {/* ── Left: copy ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                color: "var(--text)",
              }}
            >
              My Case Study
              <br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>for Dubly</em>
            </h2>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Browser Extension", "AI / LLM", "Real-time Dubbing", "UX Research"].map((tag) => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 500, color: "var(--accent)",
                  background: "var(--accent-dim)", border: "1px solid rgba(0,56,168,0.15)",
                  borderRadius: 4, padding: "4px 10px", letterSpacing: "0.03em",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <p style={{
              fontSize: 16, lineHeight: 1.8, color: "var(--muted)",
              margin: 0, maxWidth: 480,
            }}>
              Dubly is a live dubbing browser extension designed to make video and audio
              content easier to understand by translating and dubbing spoken content into
              the user&apos;s preferred language in real time.
            </p>

            <p style={{
              fontSize: 14, lineHeight: 1.75, color: "var(--muted)",
              margin: 0, maxWidth: 460,
            }}>
              This case study walks through the end-to-end design process — from user
              research and problem framing, to interaction design, accessibility
              considerations, and the final extension UI system.
            </p>

            {/* Key metrics row */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 4 }}>
              {[
                { value: "12 wks", label: "Design Sprint" },
                { value: "3",      label: "Prototypes" },
                { value: "14",     label: "Languages" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div style={{ paddingTop: 8 }}>
              <button
                onClick={onViewCaseStudy}
                className="btn-primary"
              >
                View Full Case Study
                <span aria-hidden style={{ fontSize: 16, lineHeight: 1 }}>→</span>
              </button>
            </div>
          </div>

          {/* ── Right: mockup ── */}
          <div
            className="dubly-mockup-col"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {/* Card frame around the mockup */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 260,
            }}>
              {/* Glow halo */}
              <div style={{
                position: "absolute",
                inset: "-24px",
                background: "radial-gradient(ellipse at 60% 50%, rgba(0,56,168,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
                borderRadius: 40,
              }} />

              {/* Real Dubly screenshot — d1 */}
              <div style={{
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 32px 64px rgba(0,0,0,0.35)",
              }}>
                <img
                  src={d1}
                  alt="Dubly extension — live dubbing active state"
                  draggable={false}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 767px) {
          .dubly-grid {
            grid-template-columns: 1fr !important;
          }
          .dubly-mockup-col {
            order: -1;
          }
          .dubly-mockup-col > div {
            max-width: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
