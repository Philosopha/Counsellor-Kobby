// ─── Footer ───────────────────────────────────────────────────────────────────
import { NAV_LINKS } from "@/data";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--accent)" }}>
          GC.
        </span>

        <span style={{ fontSize: "13px", color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} Gbedemah Counsellor. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: "24px" }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => onScrollTo(l)}
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
