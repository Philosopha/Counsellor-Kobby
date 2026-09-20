// ─── Navigation Bar ───────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data";

interface NavProps {
  onScrollTo: (id: string) => void;
}

export default function Nav({ onScrollTo }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Highlight the current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(link: string) {
    onScrollTo(link);
    setMenuOpen(false);
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("Home")}
          className="font-display"
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "-0.02em",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          GC.
        </button>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: activeSection === link ? "var(--accent)" : "var(--muted)",
                transition: "color 0.2s",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("Contact")}
            style={{
              background: "var(--accent)",
              color: "#ffffff",
              padding: "8px 20px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            fontSize: "22px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="show-mobile"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: activeSection === link ? "var(--accent)" : "var(--text)",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("Contact")}
            style={{
              background: "var(--accent)",
              color: "#ffffff",
              padding: "12px",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
