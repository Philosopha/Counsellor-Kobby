// ─── Navigation Bar ───────────────────────────────────────────────────────────
// UX principles: clear active state, keyboard accessibility, scroll progress,
// consistent interactive states, smooth mobile menu.
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data";

interface NavProps {
  onScrollTo: (id: string) => void;
}

export default function Nav({ onScrollTo }: NavProps) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("Home");
  const [scrolled, setScrolled]       = useState(false);
  const [progress, setProgress]       = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      // Scroll-progress percentage
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
      setScrolled(y > 20);

      // Active section detection
      const offset = y + 100;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i]);
        if (el && el.offsetTop <= offset) { setActive(NAV_LINKS[i]); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function go(link: string) { onScrollTo(link); setMenuOpen(false); }

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        aria-hidden
        style={{
          position: "fixed", top: 0, left: 0, height: 2,
          width: `${progress}%`, background: "var(--accent)",
          zIndex: 100, transition: "width 0.1s linear",
          pointerEvents: "none",
        }}
      />

      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 1px 12px rgba(0,56,168,0.07)" : "none",
        }}
      >
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <button
            onClick={() => go("Home")}
            aria-label="Scroll to top"
            className="font-display"
            style={{
              fontSize: 22, fontWeight: 700, color: "var(--accent)",
              letterSpacing: "-0.02em", background: "none", border: "none",
              cursor: "pointer", padding: "4px 0",
            }}
          >
            GC.
          </button>

          {/* Desktop nav */}
          <div role="list" style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link;
              return (
                <button
                  key={link}
                  role="listitem"
                  onClick={() => go(link)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    position: "relative",
                    fontSize: 12, fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    background: "none", border: "none", cursor: "pointer",
                    padding: "6px 12px", borderRadius: "var(--r-sm)",
                    transition: "color var(--t-fast), background var(--t-fast)",
                  }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--surface)"; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; } }}
                >
                  {link}
                  {/* Active underline dot */}
                  {isActive && (
                    <span style={{
                      position: "absolute", bottom: 0, left: "50%",
                      transform: "translateX(-50%)",
                      width: 4, height: 4, borderRadius: "50%",
                      background: "var(--accent)",
                    }} />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => go("Contact")}
              className="btn-primary"
              style={{ marginLeft: 8, padding: "8px 20px", borderRadius: "var(--r-sm)", fontSize: 12 }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text)", width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "var(--r-sm)", transition: "background var(--t-fast)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
          >
            {menuOpen
              ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="2" y1="2" x2="16" y2="16"/><line x1="16" y1="2" x2="2" y2="16"/></svg>
              : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="2" y1="5" x2="16" y2="5"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="13" x2="16" y2="13"/></svg>
            }
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              background: "var(--bg)",
              borderTop: "1px solid var(--border)",
              padding: "16px 24px 24px",
              display: "flex", flexDirection: "column", gap: 4,
            }}
            className="show-mobile"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => go(link)}
                aria-current={activeSection === link ? "page" : undefined}
                style={{
                  fontSize: 15, fontWeight: activeSection === link ? 600 : 400,
                  color: activeSection === link ? "var(--accent)" : "var(--text)",
                  textAlign: "left", background: activeSection === link ? "var(--accent-dim)" : "none",
                  border: "none", cursor: "pointer",
                  padding: "12px 16px", borderRadius: "var(--r-sm)",
                  transition: "background var(--t-fast), color var(--t-fast)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--surface)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = activeSection === link ? "var(--accent-dim)" : "transparent"; }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => go("Contact")}
              className="btn-primary"
              style={{ marginTop: 12, justifyContent: "center", borderRadius: "var(--r-sm)" }}
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
