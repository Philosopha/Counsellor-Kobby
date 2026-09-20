// ─── Projects Section + Fully Responsive Carousel ────────────────────────────
//
//  Desktop  (≥1024px) : 3 cards visible, LEFT / RIGHT side arrows
//  Tablet   (640-1023): 2 cards visible, header arrows + swipe
//  Mobile   (<640px)  : 1 card visible, auto-slide + swipe only (no arrows)
//
import { useState, useEffect, useRef, useCallback } from "react";
import type { Project } from "@/types";
import { PROJECTS } from "@/data";

const CARD_GAP = 20;
const AUTO_MS  = 4000;
const EDGE_PAD = 24;

// ─── Layout hook ─────────────────────────────────────────────────────────────
function getLayout(vw: number): { cardW: number; visible: number; isMobile: boolean } {
  if (vw < 640) {
    return { cardW: Math.max(260, vw - EDGE_PAD * 2 - 20), visible: 1, isMobile: true };
  }
  if (vw < 1024) {
    return { cardW: Math.max(280, Math.floor((vw - EDGE_PAD * 2 - CARD_GAP) / 2)), visible: 2, isMobile: false };
  }
  return { cardW: 360, visible: 3, isMobile: false };
}

function useLayout() {
  const [layout, setLayout] = useState(() =>
    getLayout(typeof window !== "undefined" ? window.innerWidth : 1200)
  );
  useEffect(() => {
    function update() { setLayout(getLayout(window.innerWidth)); }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return layout;
}

// ─── Arrow button ─────────────────────────────────────────────────────────────
interface ArrowBtnProps {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  floating?: boolean;
}
function ArrowBtn({ dir, disabled, onClick, floating }: ArrowBtnProps) {
  const base: React.CSSProperties = {
    width: 44, height: 44, borderRadius: 22,
    border: `1.5px solid ${disabled ? "var(--border)" : "var(--accent)"}`,
    background: floating ? "#fff" : (disabled ? "var(--surface)" : "#fff"),
    cursor: disabled ? "default" : "pointer",
    color: disabled ? "var(--muted)" : "var(--accent)",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
    flexShrink: 0,
    opacity: disabled ? 0.35 : 1,
    boxShadow: floating && !disabled
      ? "0 2px 12px rgba(0,56,168,0.15)"
      : "none",
    ...(floating ? {
      position: "absolute" as const,
      top: "50%",
      transform: "translateY(-50%)",
      [dir === "prev" ? "left" : "right"]: 0,
      zIndex: 10,
    } : {}),
  };

  // SVG chevron — thinner, rounder, more refined than a text arrow
  const chevron = dir === "prev"
    ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="10,3 5,8 10,13" /></svg>
    : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="6,3 11,8 6,13" /></svg>;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous project" : "Next project"}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,56,168,0.25)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = disabled ? "var(--muted)" : "var(--accent)";
        e.currentTarget.style.boxShadow = floating && !disabled ? "0 2px 12px rgba(0,56,168,0.15)" : "none";
      }}
    >
      {chevron}
    </button>
  );
}

// ─── Project Card (visual only — no click handler, track handles it) ──────────
interface ProjectCardProps {
  p: Project;
  idx: number;
  cardW: number;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}
function ProjectCard({ p, idx, cardW, hovered, onEnter, onLeave }: ProjectCardProps) {
  return (
    // data-link attribute lets the track's pointerup read the URL
    <article
      data-link={p.link || ""}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: cardW, flexShrink: 0, borderRadius: 20, overflow: "hidden",
        background: "#fff",
        border: `1px solid ${hovered ? "rgba(0,56,168,0.3)" : "var(--border)"}`,
        cursor: p.link ? "pointer" : "default",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? "0 20px 56px rgba(0,56,168,0.12), 0 2px 8px rgba(0,0,0,0.06)" : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", overflow: "hidden", height: 200, flexShrink: 0, background: "var(--surface)" }}>
        <img src={p.img} alt={p.title} draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none",
            transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 9px", border: "1px solid rgba(0,0,0,0.06)" }}>
          <span className="font-display" style={{ fontSize: 11, color: "var(--accent)", fontStyle: "italic", fontWeight: 600 }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, display: "flex", gap: 5, flexWrap: "wrap" }}>
          {p.tags.map((t) => (
            <span key={t} style={{ fontSize: 10, color: "#fff", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", borderRadius: 4, padding: "3px 8px", fontWeight: 500, letterSpacing: "0.03em" }}>{t}</span>
          ))}
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 8, flexGrow: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", margin: 0, color: "var(--text)", lineHeight: 1.3 }}>{p.title}</h3>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
        <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((d) => (
              <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: hovered ? "var(--accent)" : "var(--border)", transition: "background 0.3s", transitionDelay: `${d * 60}ms` }} />
            ))}
          </div>
          <span style={{ fontSize: 11, color: hovered ? "var(--accent)" : "var(--muted)", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.3s" }}>
            {p.link ? "View project →" : "Coming soon"}
          </span>
        </div>
      </div>
    </article>
  );
}

// ─── Graphic Design card (visual only — track handles click) ──────────────────
interface GDCardProps {
  cardW: number;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}
function GraphicDesignCard({ cardW, hovered, onEnter, onLeave }: GDCardProps) {
  return (
    // data-gd="1" signals the track to call onOpenGallery on clean tap
    <article
      data-gd="1"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: cardW, flexShrink: 0, borderRadius: 20, overflow: "hidden",
        background: "var(--accent)", cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? "0 24px 60px rgba(0,56,168,0.3)" : "0 4px 20px rgba(0,56,168,0.15)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        display: "flex", flexDirection: "column", minHeight: 400, position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 20, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
      </div>
      <div style={{ padding: 32, display: "flex", flexDirection: "column", flexGrow: 1, position: "relative", zIndex: 1 }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20, color: "#fff", flexShrink: 0 }}>◈</div>
        <span style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Graphic Design</span>
        <h3 className="font-display" style={{ fontSize: 24, fontWeight: 600, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em", margin: "0 0 12px" }}>Visual Design Works</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 28px", flexGrow: 1 }}>
          Brand identities, poster art, social media kits, and print collateral — visual craft at every scale.
        </p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, width: "fit-content", background: "#fff", color: "var(--accent)", fontSize: 12, fontWeight: 700, padding: "11px 20px", borderRadius: 8, letterSpacing: "0.05em", textTransform: "uppercase", opacity: hovered ? 1 : 0.92, transition: "opacity 0.2s" }}>
          Explore Gallery →
        </span>
      </div>
    </article>
  );
}

// ─── Main Projects component ──────────────────────────────────────────────────
interface ProjectsProps { onOpenGallery: () => void; }

export default function Projects({ onOpenGallery }: ProjectsProps) {
  const { cardW, visible, isMobile } = useLayout();
  const step       = cardW + CARD_GAP;
  const totalCards = PROJECTS.length + 1;   // 6 project cards + 1 GD card = 7
  const maxIdx     = Math.max(0, totalCards - visible);

  const [slideIdx, setSlideIdx] = useState(0);
  const [hovCard,  setHovCard]  = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Refs — none of these trigger re-renders
  const wasDrag    = useRef(false);   // true if pointer moved >6px before up
  const liveOffset = useRef(0);
  const dragStartX = useRef<number | null>(null);
  const capturedId = useRef<number | null>(null);
  const trackEl    = useRef<HTMLDivElement>(null);
  const innerEl    = useRef<HTMLDivElement>(null);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clamp index when the layout breakpoint changes
  useEffect(() => { setSlideIdx((i) => Math.min(i, maxIdx)); }, [maxIdx]);

  // ── Auto-slide ──────────────────────────────────────────────────────────────
  const stopAuto = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);
  const startAuto = useCallback(() => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setSlideIdx((i) => (i >= maxIdx ? 0 : i + 1));
    }, AUTO_MS);
  }, [maxIdx, stopAuto]);
  useEffect(() => { startAuto(); return stopAuto; }, [startAuto, stopAuto]);

  // ── Navigation ──────────────────────────────────────────────────────────────
  const goTo = useCallback((n: number) => setSlideIdx(Math.max(0, Math.min(n, maxIdx))), [maxIdx]);
  const goPrev = () => { stopAuto(); goTo(slideIdx - 1); };
  const goNext = () => { stopAuto(); goTo(slideIdx + 1); };

  // ── DOM transform — direct mutation, zero re-renders during drag ────────────
  const applyTransform = useCallback((extra = 0, animated = true) => {
    if (!innerEl.current) return;
    innerEl.current.style.transform  = `translateX(${-(slideIdx * step) + extra}px)`;
    innerEl.current.style.transition = animated ? "transform 0.6s cubic-bezier(0.22,1,0.36,1)" : "none";
  }, [slideIdx, step]);
  useEffect(() => { applyTransform(0, true); }, [applyTransform]);

  // ── Pointer handlers ────────────────────────────────────────────────────────
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (capturedId.current !== null) return;
    capturedId.current = e.pointerId;
    dragStartX.current = e.clientX;
    liveOffset.current = 0;
    wasDrag.current    = false;
    setIsDragging(false);
    stopAuto();
    trackEl.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (capturedId.current !== e.pointerId || dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      wasDrag.current = true;
      setIsDragging(true);
    }
    liveOffset.current = delta;
    applyTransform(delta, false);
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (capturedId.current !== e.pointerId) return;
    capturedId.current = null;

    const delta     = liveOffset.current;
    const threshold = step * 0.18;
    let next = slideIdx;
    if      (delta < -threshold) next = Math.min(slideIdx + 1, maxIdx);
    else if (delta >  threshold) next = Math.max(slideIdx - 1, 0);

    const wasTap = !wasDrag.current;

    liveOffset.current = 0;
    dragStartX.current = null;
    setIsDragging(false);

    if (next !== slideIdx) {
      setSlideIdx(next);
    } else {
      applyTransform(0, true);
    }

    // ── Handle tap/click: use elementFromPoint because setPointerCapture
    //    makes e.target always point to the track div, not the card.
    if (wasTap) {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (el) {
        const card = el.closest("article") as HTMLElement | null;
        if (card) {
          const link = card.dataset.link;
          if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
          }
          if (card.dataset.gd === "1") {
            onOpenGallery();
          }
        }
      }
    }

    wasDrag.current = false;
    startAuto();
  }

  // ── Layout geometry ─────────────────────────────────────────────────────────
  const trackPadL = `max(${EDGE_PAD}px, calc((100vw - 1200px) / 2 + ${EDGE_PAD}px))`;
  const sideArrowW = 52;

  return (
    <section id="Projects" style={{ padding: "80px 0 56px", background: "#fff", overflow: "hidden" }}>

      {/* ── Header ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: `0 ${EDGE_PAD}px 36px` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 500, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
              Selected Work
            </span>
            <h2 className="font-display" style={{ fontSize: "clamp(30px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, color: "var(--text)", lineHeight: 1 }}>
              Projects
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "monospace", whiteSpace: "nowrap" }}>
              {String(slideIdx + 1).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
            </span>
            {/* Tablet header arrows — hidden on desktop (side arrows used) and mobile (no arrows) */}
            {!isMobile && (
              <div className="projects-header-arrows" style={{ display: "flex", gap: 8 }}>
                <ArrowBtn dir="prev" disabled={slideIdx === 0}     onClick={goPrev} />
                <ArrowBtn dir="next" disabled={slideIdx >= maxIdx} onClick={goNext} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Carousel + floating side arrows ── */}
      <div style={{ position: "relative" }}>

        {/* Left side arrow — desktop only via CSS */}
        <div className="projects-side-arrow projects-side-arrow-left">
          <ArrowBtn dir="prev" disabled={slideIdx === 0} onClick={goPrev} floating />
        </div>

        {/* Track */}
        <div
          ref={trackEl}
          style={{
            paddingLeft: trackPadL,
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            touchAction: "pan-y",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            ref={innerEl}
            style={{
              display: "flex",
              gap: CARD_GAP,
              willChange: "transform",
              transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                idx={i}
                cardW={cardW}
                hovered={hovCard === i}
                onEnter={() => { setHovCard(i); stopAuto(); }}
                onLeave={() => { setHovCard(null); startAuto(); }}
              />
            ))}

            <GraphicDesignCard
              cardW={cardW}
              hovered={hovCard === 99}
              onEnter={() => { setHovCard(99); stopAuto(); }}
              onLeave={() => { setHovCard(null); startAuto(); }}
            />
          </div>
        </div>

        {/* Right side arrow — desktop only via CSS */}
        <div className="projects-side-arrow projects-side-arrow-right">
          <ArrowBtn dir="next" disabled={slideIdx >= maxIdx} onClick={goNext} floating />
        </div>
      </div>

      {/* ── Progress bar + dots ── */}
      <div style={{ maxWidth: 1200, margin: "28px auto 0", padding: `0 ${EDGE_PAD}px`, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ flexGrow: 1, height: 2, background: "var(--border)", borderRadius: 1, position: "relative", minWidth: 0 }}>
          <div style={{
            position: "absolute", left: 0, top: 0, height: "100%", borderRadius: 1,
            background: "var(--accent)",
            width: `${((slideIdx + 1) / (maxIdx + 1)) * 100}%`,
            transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
          }} />
        </div>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => { goTo(i); stopAuto(); }} aria-label={`Go to slide ${i + 1}`}
              style={{ width: slideIdx === i ? 20 : 6, height: 6, borderRadius: 3, background: slideIdx === i ? "var(--accent)" : "var(--border)", border: "none", cursor: "pointer", transition: "width 0.3s, background 0.3s", padding: 0 }} />
          ))}
        </div>
      </div>

      {/* ── Swipe hint (mobile only) ── */}
      <p className="projects-swipe-hint" style={{ textAlign: "center", fontSize: 11, color: "var(--muted)", marginTop: 14, letterSpacing: "0.07em", textTransform: "uppercase" }}>
        ← Swipe to explore →
      </p>

      {/* ── Scoped responsive rules ── */}
      <style>{`
        @media (min-width: 1024px) {
          .projects-side-arrow {
            display: flex; align-items: center;
            position: absolute; top: 0; bottom: 0; z-index: 10;
          }
          .projects-side-arrow-left  { left:  calc(max(${EDGE_PAD}px,(100vw - 1200px)/2 + ${EDGE_PAD}px) - ${sideArrowW}px); }
          .projects-side-arrow-right { right: ${EDGE_PAD}px; }
          .projects-header-arrows    { display: none !important; }
          .projects-swipe-hint       { display: none !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .projects-side-arrow { display: none !important; }
        }
        @media (max-width: 639px) {
          .projects-side-arrow    { display: none !important; }
          .projects-header-arrows { display: none !important; }
          .projects-swipe-hint    { display: block !important; }
        }
      `}</style>

    </section>
  );
}
