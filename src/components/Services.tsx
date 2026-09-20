// ─── Services Section ─────────────────────────────────────────────────────────
import { SERVICES } from "@/data";

export default function Services() {
  return (
    <section id="Services" style={{ padding: "100px 24px" }}>
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
          What I Do
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
          Services I offer
        </h2>

        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,229,200,0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(0,229,200,0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  color: "var(--accent)",
                }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 500,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted)" }}>{s.desc}</p>
              </div>

              {/* Tool pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                {s.tools.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      borderRadius: "3px",
                      padding: "4px 8px",
                      fontWeight: 500,
                      letterSpacing: "0.03em",
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
    </section>
  );
}
