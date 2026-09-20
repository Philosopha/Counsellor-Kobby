// ─── Quote / Manifesto Section — character-by-character reveal ───────────────
import { useEffect, useRef, useState } from "react";

// ─── CharReveal ───────────────────────────────────────────────────────────────
// Renders each character as an individually animated span.
// Spaces get a non-breaking space so inline-block doesn't collapse them.
function CharReveal({
  text,
  active,
  baseDelay = 0,
  style,
}: {
  text: string;
  active: boolean;
  baseDelay?: number;
  style?: React.CSSProperties;
}) {
  const chars = text.split("");
  return (
    <span style={{ display: "inline", ...style }}>
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            whiteSpace: ch === " " ? "pre" : undefined,
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0) scaleY(1)" : "translateY(18px) scaleY(0.6)",
            transformOrigin: "bottom center",
            transition: "opacity 0.38s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: active ? `${baseDelay + i * 22}ms` : "0ms",
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export default function Quote() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Quote split into two style segments
  const part1 = "Design is where creativity and imagination meet reality — where ideas and emotions are transformed into something the world can ";
  const part2 = "see, feel, and experience.";

  // Footer fades in after all chars finish
  const totalChars = part1.length + part2.length;
  const footerDelay = active ? 80 + totalChars * 22 + 200 : 0;

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 24px",
        background: "var(--accent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative oversized opening quote mark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-40px",
          left: "40px",
          fontSize: "320px",
          fontFamily: "'Fraunces', serif",
          fontWeight: 700,
          color: "rgba(255,255,255,0.07)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <blockquote style={{ margin: 0 }}>
          <p
            className="font-display"
            style={{
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.55,
              letterSpacing: "0.01em",
              color: "#ffffff",
              margin: "0 0 48px",
              // Overflow hidden per line so chars slide up from the baseline
              overflow: "hidden",
            }}
          >
            &ldquo;
            <CharReveal text={part1} active={active} baseDelay={80} />
            <CharReveal
              text={part2}
              active={active}
              baseDelay={80 + part1.length * 22}
              style={{ fontWeight: 400, fontStyle: "italic" }}
            />
            &rdquo;
          </p>

          {/* Attribution — fades in after all characters */}
          <footer
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: `${footerDelay}ms`,
            }}
          >
            <span style={{ display: "block", width: "48px", height: "1px", background: "rgba(255,255,255,0.4)" }} />
            <span style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              Kobby Weaver
            </span>
            <span style={{ display: "block", width: "48px", height: "1px", background: "rgba(255,255,255,0.4)" }} />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
