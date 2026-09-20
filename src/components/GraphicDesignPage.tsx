// ─── Graphic Design Gallery Page ─────────────────────────────────────────────
import { gdWork1, gdWork2, gdWork3, gdWork4, gdWork5, gdWork6 } from "@/data";
import type { GraphicWork } from "@/types";

interface GraphicDesignPageProps {
  onBack: () => void;
}

const WORKS: GraphicWork[] = [
  {
    title: "Rainbow Mineral Water",
    desc: "Logo, color system, and packaging design for a premium brand.",
    img: gdWork1,
  },
  {
    title: "Hibiscus Juice",
    desc: "A bold typographic poster series for a nice and sweet hibiscus juice.",
    img: gdWork2,
  },
  {
    title: "A Food Menu",
    desc: "A food menu design for a restaurant.",
    img: gdWork3,
  },
  {
    title: "Logo for a Restaurant",
    desc: "Primary logo, sub-marks, and icon set for the Chef's Corner brand family.",
    img: gdWork4,
  },
  {
    title: "Logo Design for a Fashion House",
    desc: "T-shirt, mug, and tote bag artwork for a fashion house.",
    img: gdWork5,
  },
  {
    title: "Towel Design",
    desc: "Nice towel design with a smiley rainbow.",
    img: gdWork6,
  },
];

export default function GraphicDesignPage({ onBack }: GraphicDesignPageProps) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Mini nav */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            color: "var(--accent)",
          }}
        >
          ← Back to Portfolio
        </button>
        <span className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--accent)" }}>
          GC.
        </span>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Graphic Design
        </span>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "16px 0 12px",
            lineHeight: 1.05,
          }}
        >
          Visual Design Works
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "60px",
          }}
        >
          Brand identities, poster art, social kits, and print collateral — visual craft at every scale.
        </p>

        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          {WORKS.map((w, i) => (
            <div
              key={i}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,56,168,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={w.img}
                  alt={w.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    marginBottom: "8px",
                    color: "var(--text)",
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
