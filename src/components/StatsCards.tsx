// ─── Stats Section — animated counters + modern minimal redesign ──────────────
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/data";

// ─── Parse numeric target from strings like "3+", "8+", "5+" ─────────────────
function parseTarget(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCounter(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;

    function tick(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, duration]);

  return count;
}

// ─── Individual stat item ─────────────────────────────────────────────────────
function StatItem({ value, label, desc, active }: {
  value: string; label: string; desc: string; active: boolean;
}) {
  const { num, suffix } = parseTarget(value);
  const count = useCounter(num, active, 1600);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "0 20px",
    }}>
      {/* Animated number */}
      <div style={{ marginBottom: 6 }}>
        <span
          className="font-display"
          style={{
            fontSize: "clamp(40px, 4.5vw, 60px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "var(--accent)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {active ? count : 0}
        </span>
        <span
          className="font-display"
          style={{
            fontSize: "clamp(22px, 2.5vw, 34px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--accent)",
            opacity: 0.6,
          }}
        >
          {suffix}
        </span>
      </div>

      {/* Label */}
      <div style={{
        fontSize: 12, fontWeight: 600, color: "var(--text)",
        letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 4,
      }}>
        {label}
      </div>

      {/* Desc */}
      <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.02em", lineHeight: 1.5 }}>
        {desc}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function StatsCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  // Fire once when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: "var(--bg)",
        padding: "40px 24px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0,
      }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <StatItem
              value={s.value}
              label={s.label}
              desc={s.desc}
              active={active}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
