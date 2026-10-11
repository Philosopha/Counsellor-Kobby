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
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "64px" }}>

      {/* ── Fixed mini-nav ── */}
      <nav
        aria-label="Gallery navigation"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent)",
            padding: "8px 12px",
            borderRadius: "6px",
            transition: "background 0.15s",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 2L4 7l5 5"/>
          </svg>
          Back to Portfolio
        </button>
        <span className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--accent)" }}>
          GC.
        </span>
      </nav>

      {/* ── Page content ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 20px 80px" }}>

        {/* Header */}
        <span className="eyebrow">Graphic Design</span>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            margin: "4px 0 10px",
            lineHeight: 1.05,
          }}
        >
          Visual Design Works
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          Brand identities, poster art, social kits, and print collateral — visual craft at every scale.
        </p>

        {/* Grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="gd-grid" style={{ display: "grid", gap: "20px" }}>
          {WORKS.map((w, i) => (
            <article
              key={i}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,56,168,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,56,168,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              {/* Thumbnail — aspect-ratio preserves proportions on any screen width */}
              <div style={{ overflow: "hidden", aspectRatio: "16/10", flexShrink: 0 }}>
                <img
                  src={w.img}
                  alt={w.title}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Body */}
              <div style={{ padding: "18px 20px 22px", flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginBottom: "6px",
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {w.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                  {w.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Responsive grid breakpoints ── */}
      <style>{`
        /* Desktop: 3 columns */
        .gd-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        /* Tablet: 2 columns */
        @media (max-width: 900px) {
          .gd-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* Mobile: 1 column */
        @media (max-width: 540px) {
          .gd-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
