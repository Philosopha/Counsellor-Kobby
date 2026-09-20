// ─── Interests & Hobbies Section ─────────────────────────────────────────────
import { INTERESTS } from "@/data";

export default function Interests() {
  return (
    <section style={{ padding: "90px 24px", background: "var(--bg)" }}>
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
          Beyond the Screen
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            margin: "14px 0 48px",
            lineHeight: 1.1,
          }}
        >
          Interests &amp; Hobbies
        </h2>

        <div
          className="interests-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}
        >
          {INTERESTS.map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 16px 40px rgba(0,56,168,0.1)";
                el.style.borderColor = "rgba(0,56,168,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(0,56,168,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.label}
                </div>
                <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Accent underline */}
              <div
                style={{
                  height: "2px",
                  width: "24px",
                  background: "var(--accent)",
                  borderRadius: "1px",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
