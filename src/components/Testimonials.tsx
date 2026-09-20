// ─── Testimonials Section ─────────────────────────────────────────────────────
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  return (
    <section id="Testimonials" style={{ padding: "100px 24px", background: "var(--surface)" }}>
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
          Client Feedback
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "60px",
            marginTop: "8px",
          }}
        >
          Testimonials
        </h2>

        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div style={{ fontSize: "28px", color: "var(--accent)", lineHeight: 1 }}>&ldquo;</div>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "var(--muted)", flexGrow: 1 }}>
                {t.text}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {/* Avatar initials */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(0,229,200,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
