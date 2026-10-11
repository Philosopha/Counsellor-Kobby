// ─── Footer ───────────────────────────────────────────────────────────────────
// UX: clear information architecture, social links, availability signal,
// back-to-top affordance, semantic HTML.
import { NAV_LINKS, CONTACT_LINKS } from "@/data";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

// Social icon SVGs — inline so no extra deps
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.5 1A1.5 1.5 0 101.5 2.5 1.5 1.5 0 002.5 1zM1 5h3v9H1zM5.5 5h2.8v1.3h.05A3.1 3.1 0 0111 5c3 0 3.5 2 3.5 4.5V14H12v-4c0-1 0-2.3-1.4-2.3S9 9 9 10v4H6.5z"/>
    </svg>
  ),
  Behance: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.5 7.5c.8-.4 1.2-1 1.2-2 0-1.9-1.4-2.5-3-2.5H1v10h4c1.8 0 3.5-.7 3.5-2.8 0-1.2-.6-2.2-2-2.7zM3 5h1.5c.7 0 1.3.2 1.3 1s-.5 1.1-1.3 1.1H3zm1.7 6H3V9h1.7c.9 0 1.5.3 1.5 1.1S5.5 11 4.7 11zM12.5 5.5h-3v-1h3zM9.3 9.2c.1.8.6 1.3 1.4 1.3.6 0 1-.3 1.2-.7h1.8c-.4 1.4-1.5 2.2-3 2.2-2 0-3.2-1.4-3.2-3.3 0-1.9 1.3-3.3 3.2-3.3 2.1 0 3.2 1.6 3.1 3.8H9.3zm1.4-2.4c-.7 0-1.3.5-1.4 1.1h2.8c-.1-.7-.6-1.1-1.4-1.1z"/>
    </svg>
  ),
  Contra: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM5 8a3 3 0 116 0 3 3 0 01-6 0z"/>
    </svg>
  ),
};

export default function Footer({ onScrollTo }: FooterProps) {
  function scrollTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── Main footer content ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "64px 24px 48px",
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px 40px",
      }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button
            onClick={scrollTop}
            className="font-display"
            aria-label="Back to top"
            style={{
              fontSize: 28, fontWeight: 700, color: "var(--accent)",
              letterSpacing: "-0.03em", background: "none", border: "none",
              cursor: "pointer", textAlign: "left", padding: 0, width: "fit-content",
            }}
          >
            GC.
          </button>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, maxWidth: 260, margin: 0 }}>
            UI/UX designer, graphic artist &amp; prompt engineer — building digital products that look stunning and feel effortless.
          </p>
          {/* Availability badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,200,80,0.08)", border: "1px solid rgba(0,200,80,0.2)",
            borderRadius: "var(--r-full)", padding: "6px 14px", width: "fit-content",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#00c850",
              animation: "pulse-dot 2s ease infinite",
            }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#009a3c", letterSpacing: "0.04em" }}>
              Available for projects
            </span>
          </div>
        </div>

        {/* Navigation column */}
        <nav aria-label="Footer navigation">
          <h3 style={{
            fontSize: 11, fontWeight: 600, color: "var(--muted)",
            letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px",
          }}>
            Navigation
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button
                  onClick={() => onScrollTo(l)}
                  style={{
                    fontSize: 14, color: "var(--muted)", background: "none",
                    border: "none", cursor: "pointer", padding: "2px 0",
                    transition: "color var(--t-fast)", textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact column */}
        <div>
          <h3 style={{
            fontSize: 11, fontWeight: 600, color: "var(--muted)",
            letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px",
          }}>
            Get in Touch
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {CONTACT_LINKS.map((c) => (
              <li key={c.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Platform icon */}
                <span style={{
                  color: "var(--accent)", display: "flex", alignItems: "center",
                  opacity: 0.7, flexShrink: 0,
                }}>
                  {SOCIAL_ICONS[c.label] ?? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 3h12v10H2z" strokeLinejoin="round"/>
                      <path d="M2 3l6 5 6-5"/>
                    </svg>
                  )}
                </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 14, color: "var(--muted)", textDecoration: "none",
                    transition: "color var(--t-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "20px 24px",
        borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>
          &copy; {year} Gbedemah Counsellor. All rights reserved.
        </span>
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 600, color: "var(--muted)",
            background: "none", border: "1px solid var(--border)",
            borderRadius: "var(--r-sm)", padding: "6px 12px", cursor: "pointer",
            transition: "color var(--t-fast), border-color var(--t-fast)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 10V2M2 6l4-4 4 4"/>
          </svg>
          Back to top
        </button>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
