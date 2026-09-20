// ─── About Section ────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import aboutPhoto from "@/imports/KOBBY_1-3.png";

interface AboutProps {
  onScrollTo: (id: string) => void;
}

// Fires once when the element enters the viewport
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function About({ onScrollTo }: AboutProps) {
  const label   = useReveal(0.1);
  const portrait = useReveal(0.1);
  const bio     = useReveal(0.1);

  return (
    <section id="About" style={{ padding: "100px 24px", background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Label — fades up first */}
        <div ref={label.ref} className={`reveal${label.visible ? " is-visible" : ""}`}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            About Me
          </span>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "32px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          {/* Portrait — slides in from left */}
          <div
            ref={portrait.ref}
            style={{
              position: "relative",
              opacity: portrait.visible ? 1 : 0,
              transform: portrait.visible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "100ms",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                aspectRatio: "3/4",
                maxHeight: "340px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={aboutPhoto}
                alt="Gbedemah Counsellor"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Bio — slides in from right, staggered */}
          <div
            ref={bio.ref}
            style={{
              opacity: bio.visible ? 1 : 0,
              transform: bio.visible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "200ms",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(30px, 3.8vw, 50px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "28px",
              }}
            >
              Design at the intersection of{" "}
              <em className="text-shimmer" style={{ fontStyle: "italic" }}>art &amp; intelligence</em>
            </h2>

            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted)", marginBottom: "20px" }}>
              I&apos;m Gbedemah Counsellor — a multi-disciplinary creative who bridges visual design and
              artificial intelligence. With a deep passion for crafting beautiful, functional interfaces and
              compelling brand identities, I also specialize in engineering precise AI prompts that unlock
              creative and operational potential.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted)", marginBottom: "40px" }}>
              Whether it&apos;s a pixel-perfect mobile app, a striking brand system, or a finely-tuned AI
              workflow — I bring the same obsessive attention to craft and clarity of purpose to every project.
            </p>

            <button
              onClick={() => onScrollTo("Contact")}
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Work with me →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
