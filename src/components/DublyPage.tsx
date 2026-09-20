// ─── Dubly Case Study Page ────────────────────────────────────────────────────
// Editorial case-study layout inspired by UX/UI portfolio presentation format.
// Sections: Hero → Overview → Problem → Users → Principles → Flow → Core
//           → Visual Design → Dev → Challenges → Outcome → Final

import d1 from "@/imports/d1.png";
import d2 from "@/imports/d2.png";

interface DublyPageProps { onBack: () => void; }

// ─── Dot bullet list ──────────────────────────────────────────────────────────
function BulletList({ items, color = "var(--accent)" }: { items: string[]; color?: string }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 7 }} />
          <span style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Section number badge ─────────────────────────────────────────────────────
function SectionBadge({ n, label }: { n: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        border: "2px solid var(--accent)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>{n}</span>
      </div>
      <span style={{
        fontSize: 20, fontWeight: 700, color: "var(--text)",
        letterSpacing: "-0.01em",
      }}>
        {label}&nbsp;
        {/* coloured second word */}
      </span>
    </div>
  );
}

// ─── Stat chip (overview row) ─────────────────────────────────────────────────
function StatChip({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 7,
      background: "var(--surface)", border: "1px solid var(--border)",
      borderRadius: 10, padding: "8px 12px",
      flexShrink: 0,
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: 7, background: "var(--accent-dim)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 14, flexShrink: 0,
      }}>{icon}</span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginTop: 2, whiteSpace: "nowrap" as const }}>{label}</div>
      </div>
    </div>
  );
}

// ─── Design process step ─────────────────────────────────────────────────────
function ProcessStep({ icon, title, items, last = false }: { icon: string; title: string; items: string[]; last?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 0, flex: 1, minWidth: 120 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        {/* Icon circle */}
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          border: "2px solid var(--border)",
          background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, marginBottom: 12, position: "relative", zIndex: 1,
        }}>
          {icon}
        </div>
        {/* Title */}
        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 8, textAlign: "center" }}>{title}</div>
        {/* Sub-items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          {items.map(it => (
            <span key={it} style={{ fontSize: 11, color: "var(--muted)", textAlign: "center", lineHeight: 1.4 }}>{it}</span>
          ))}
        </div>
      </div>
      {/* Connector arrow */}
      {!last && (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 40, paddingTop: 20, flexShrink: 0,
          color: "var(--accent)", fontSize: 18,
        }}>
          ›
        </div>
      )}
    </div>
  );
}

// ─── Two-col layout helper ────────────────────────────────────────────────────
function TwoCol({ left, right, reverse = false, gap = 64 }: {
  left: React.ReactNode; right: React.ReactNode; reverse?: boolean; gap?: number;
}) {
  return (
    <div className="cs-two-col" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap,
      alignItems: "center",
      ...(reverse ? { direction: "rtl" } : {}),
    }}>
      <div style={{ direction: "ltr" }}>{left}</div>
      <div style={{ direction: "ltr" }}>{right}</div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DublyPage({ onBack }: DublyPageProps) {
  return (
    <div style={{ background: "#fff", color: "var(--text)", minHeight: "100vh", fontFamily: "'Inter',sans-serif" }}>

      {/* ── Fixed nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        height: 60, display: "flex", alignItems: "center",
        padding: "0 32px", justifyContent: "space-between",
      }}>
        <button onClick={onBack} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "none", border: "none", cursor: "pointer",
          fontSize: 13, fontWeight: 600, color: "var(--accent)",
          letterSpacing: "0.02em",
        }}>
          ← Back to Portfolio
        </button>
        <span style={{
          fontSize: 11, fontWeight: 600, color: "var(--muted)",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          UX / UI · Case Study
        </span>
        <span className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "var(--accent)" }}>GC.</span>
      </nav>

      <main style={{ paddingTop: 60 }}>

        {/* ══════════════════════════════════════════════════
            HERO — editorial large-title with image overlap
        ══════════════════════════════════════════════════ */}
        <section className="cs-hero-section" style={{ padding: "60px 24px 0", maxWidth: 1200, margin: "0 auto", position: "relative", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "flex-start" }} className="cs-hero-grid">

            {/* Left — editorial text block */}
            <div className="cs-hero-left">
              {/* Label */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ height: 1, width: 32, background: "var(--accent)" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
                  UX / UI Case Study
                </span>
              </div>

              {/* Big title */}
              <h1 className="font-display" style={{
                fontSize: "clamp(44px, 7vw, 88px)",
                fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.95,
                color: "var(--text)", margin: "0 0 6px",
              }}>
                DUBLY
              </h1>
              <h2 className="font-display" style={{
                fontSize: "clamp(18px, 2.8vw, 32px)",
                fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.3,
                color: "var(--muted)", margin: "0 0 24px", fontStyle: "italic",
              }}>
                Live Dubbing Extension
              </h2>

              {/* Description */}
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)", marginBottom: 28 }}>
                A browser extension designed to make video and audio content
                understandable in any language — in real time, without leaving
                the platform.
              </p>

              {/* Metadata row */}
              <div className="cs-hero-meta" style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>Tools</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["Figma", "React", "TypeScript"].map(t => (
                      <span key={t} style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", background: "var(--accent-dim)", borderRadius: 4, padding: "3px 8px" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>Duration</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>12 Weeks</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 6 }}>Type</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>AI Product · Browser Extension</div>
                </div>
              </div>

              {/* Stat chips — nowrap on desktop, wrap on mobile via .cs-hero-chips */}
              <div className="cs-hero-chips" style={{ display: "flex", flexWrap: "nowrap", gap: 8 }}>
                <StatChip icon="🗂" value="3"    label="Prototypes" />
                <StatChip icon="🌐" value="14+"  label="Languages" />
                <StatChip icon="📱" value="5"    label="Core Screens" />
                <StatChip icon="⏱" value="180ms" label="Latency" />
              </div>
            </div>

            {/* Right — floating screenshot */}
            <div className="cs-hero-img-col" style={{ position: "relative", paddingTop: 24, display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
              {/* Accent blob — hidden on mobile via class */}
              <div className="cs-hero-blob" style={{
                position: "absolute", top: -16, right: -32, bottom: -32, left: "15%",
                background: "linear-gradient(135deg, var(--accent-dim) 0%, rgba(0,56,168,0.04) 100%)",
                borderRadius: 24, zIndex: 0, pointerEvents: "none",
              }} />
              {/* Image — 3D tilt removed on mobile via class */}
              <div className="cs-hero-img-wrap" style={{
                position: "relative", zIndex: 1,
                borderRadius: 14, overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.22), 0 8px 28px rgba(0,56,168,0.14)",
                transform: "perspective(1200px) rotateY(-4deg) rotateX(1deg)",
                transformOrigin: "left center",
                width: "100%",
              }}>
                <img src={d2} alt="Dubly active on YouTube" draggable={false}
                  style={{
                    width: "100%", height: "auto", display: "block",
                    filter: "contrast(1.08) saturate(1.1) brightness(1.02)",
                  }} />
              </div>
            </div>
          </div>
        </section>

        {/* Thin accent rule */}
        <div style={{ height: 1, background: "var(--border)", margin: "0 24px" }} />

        {/* ══════════════════════════════════════════════════
            OVERVIEW — two-col text + stat chips
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <div>
                <SectionBadge n="01" label="Project Overview" />
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 20 }}>
                  The internet has made video content more accessible than ever — but
                  language remains a major barrier. Dubly is a{" "}
                  <strong style={{ color: "var(--text)" }}>live dubbing browser extension</strong>{" "}
                  that translates and dubs spoken content into the user&apos;s preferred
                  language in real time, directly on the platforms they already use.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", marginBottom: 0 }}>
                  I designed the end-to-end product experience — UX architecture, interaction
                  design, visual system, and frontend implementation.
                </p>
              </div>
            }
            right={
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "🗂", value: "3",    label: "Prototypes"    },
                  { icon: "🌐", value: "14+",  label: "Languages"     },
                  { icon: "📱", value: "5",    label: "Core Screens"  },
                  { icon: "⏱", value: "12wks", label: "Design Sprint" },
                ].map(c => <StatChip key={c.label} {...c} />)}
              </div>
            }
          />
        </section>

        <div style={{ height: 1, background: "var(--border)", margin: "0 48px" }} />

        {/* ══════════════════════════════════════════════════
            PROBLEM STATEMENT — two-col bullet + image
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            left={
              <div>
                <SectionBadge n="02" label="Problem Statement" />
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)", marginBottom: 24 }}>
                  A huge amount of online content exists for audiences who speak different
                  languages. When users encounter content in an unfamiliar language, they face
                  repeated friction:
                </p>
                <BulletList
                  color="var(--accent)"
                  items={[
                    "Searching for subtitles or dubbed versions",
                    "Relying on inaccurate auto-generated captions",
                    "Pausing videos to copy and translate phrases",
                    "Losing context while switching between tools",
                    "Missing natural conversational flow in literal translations",
                    "No seamless, in-platform language solution",
                  ]}
                />
              </div>
            }
            right={
              <div style={{
                background: "var(--surface)", borderRadius: 20,
                padding: 32, display: "flex", flexDirection: "column", gap: 20,
              }}>
                <div style={{
                  background: "var(--accent)", borderRadius: 14,
                  padding: "24px 28px",
                }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 12 }}>
                    The Opportunity
                  </div>
                  <p className="font-display" style={{
                    fontSize: 18, fontWeight: 400, fontStyle: "italic",
                    color: "#fff", lineHeight: 1.5, margin: 0,
                  }}>
                    Watch anything. Understand everything.
                  </p>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--muted)", margin: 0 }}>
                  What if translation didn&apos;t feel like a separate tool? What if users could
                  simply open a video, choose a language, and keep watching — without any
                  interruption?
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["In-platform", "Real-time", "Zero friction", "No tab switching"].map(t => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 500, color: "var(--accent)",
                      background: "var(--accent-dim)", border: "1px solid rgba(0,56,168,0.15)",
                      borderRadius: 4, padding: "4px 10px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            }
          />
        </section>

        <div style={{ height: 1, background: "var(--border)", margin: "0 48px" }} />

        {/* ══════════════════════════════════════════════════
            SOLUTION — two-col image + bullets
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", maxWidth: 1200, margin: "0 auto" }}>
          <TwoCol
            reverse
            left={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  borderRadius: 20, overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,56,168,0.12)",
                  border: "1px solid var(--border)",
                  maxWidth: 280, width: "100%",
                }}>
                  <img src={d1} alt="Dubly extension UI" draggable={false}
                    style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </div>
            }
            right={
              <div>
                <SectionBadge n="03" label="Solution Statement" />
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted)", marginBottom: 24 }}>
                  Dubly sits alongside the user&apos;s existing browsing experience as a lightweight
                  extension that activates on demand:
                </p>
                <BulletList
                  color="#00a050"
                  items={[
                    "Activate the extension on any video or audio platform",
                    "Select a preferred language from a clean, minimal interface",
                    "Start live dubbing — extension handles the rest",
                    "Pause, switch languages, or stop at any time",
                    "No account required, no separate app download",
                    "Works across YouTube, streaming platforms, and social media",
                  ]}
                />
              </div>
            }
          />
        </section>

        <div style={{ height: 1, background: "var(--border)", margin: "0 48px" }} />

        {/* ══════════════════════════════════════════════════
            USERS
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", background: "var(--surface)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ height: 1, width: 32, background: "var(--border)" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
                  Target Users
                </span>
                <div style={{ height: 1, width: 32, background: "var(--border)" }} />
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>
                Who is Dubly for?
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {[
                { icon: "🌍", title: "International Viewers", body: "People who watch creators, documentaries, and entertainment from other countries." },
                { icon: "📚", title: "Language Learners", body: "Users consuming authentic content while using translation as additional support." },
                { icon: "🔄", title: "Global Content Consumers", body: "People who regularly move between different languages and platforms." },
                { icon: "🎙️", title: "Creators & Audiences", body: "Creators whose videos could become accessible to speakers of different languages." },
              ].map(({ icon, title, body }) => (
                <div key={title} style={{
                  background: "#fff", border: "1px solid var(--border)",
                  borderRadius: 16, padding: "28px 22px",
                  display: "flex", flexDirection: "column", gap: 14,
                }}>
                  <span style={{ fontSize: 32 }}>{icon}</span>
                  <h4 style={{ fontSize: 14, fontWeight: 700, margin: 0, color: "var(--text)" }}>{title}</h4>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            DESIGN PROCESS — horizontal steps
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <div style={{ height: 1, width: 32, background: "var(--border)" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>
                  Design Process
                </span>
                <div style={{ height: 1, width: 32, background: "var(--border)" }} />
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>
                How I approached it
              </h2>
            </div>

            {/* Step row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap", gap: 0, position: "relative" }}>
              {/* Connector line behind steps */}
              <div style={{
                position: "absolute", top: 32, left: "10%", right: "10%", height: 2,
                background: "linear-gradient(to right, transparent, var(--border) 10%, var(--border) 90%, transparent)",
                zIndex: 0,
              }} />
              <ProcessStep icon="🔍" title="Empathise" items={["User Research", "Interviews", "Journey Map"]} />
              <ProcessStep icon="📋" title="Define" items={["Persona", "Pain Points", "Problem Statement"]} />
              <ProcessStep icon="💡" title="Ideate" items={["Brainstorm", "User Flow", "Info Architecture"]} />
              <ProcessStep icon="✏️" title="Design" items={["Wireframes", "High Fidelity", "Visual Design"]} />
              <ProcessStep icon="🧪" title="Test" last icon2="✓" items={["Prototype", "Usability Tests", "Improvements"]} />
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "var(--border)", margin: "0 48px" }} />

        {/* ══════════════════════════════════════════════════
            PRINCIPLES — bento grid
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px", background: "var(--surface)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Design Principles</span>
              <h2 className="font-display" style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "8px 0 0" }}>
                What guided every decision
              </h2>
            </div>

            {/* ── Bento grid ── */}
            {/* Row 1: big card (2 cols) + tall card (1 col spanning 2 rows) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }} className="cs-bento">

              {/* Card 01 — wide, accent-filled hero card */}
              <div style={{
                gridColumn: "1 / 3", gridRow: "1 / 2",
                background: "var(--accent)", borderRadius: 20, padding: "36px 32px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 200, position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", right: -40, top: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)", pointerEvents: "none",
                }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>01</span>
                <div>
                  <h4 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>Keep it simple</h4>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.65, margin: 0, maxWidth: 420 }}>
                    AI complexity stays behind the interface. Users shouldn&apos;t need to understand speech recognition, TTS, or translation pipelines.
                  </p>
                </div>
              </div>

              {/* Card 03 — tall, spans 2 rows on right column */}
              <div style={{
                gridColumn: "3 / 4", gridRow: "1 / 3",
                background: "#fff", border: "1px solid var(--border)",
                borderRadius: 20, padding: "32px 28px",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⟡</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>03</span>
                <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", margin: 0, letterSpacing: "-0.01em" }}>Give users control</h4>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                  Start, stop, switch languages — users are always in charge. No automation that can&apos;t be overridden instantly.
                </p>
                <div style={{ marginTop: "auto", height: 1, background: "var(--border)" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["Start/Stop", "Language switch", "Instant override"].map(t => (
                    <span key={t} style={{ fontSize: 10, fontWeight: 500, color: "var(--accent)", background: "var(--accent-dim)", borderRadius: 4, padding: "3px 8px" }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Card 02 — medium */}
              <div style={{
                gridColumn: "1 / 2", gridRow: "2 / 3",
                background: "#fff", border: "1px solid var(--border)",
                borderRadius: 20, padding: "28px 24px",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>👁</div>
                <span style={{ fontSize: 10, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>02</span>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", margin: 0 }}>Stay out of the way</h4>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>Dubly enhances the viewing experience rather than competing with it.</p>
              </div>

              {/* Card 04 + 05 — stacked in col 2, row 2 */}
              <div style={{
                gridColumn: "2 / 3", gridRow: "2 / 3",
                display: "flex", flexDirection: "column", gap: 16,
              }}>
                <div style={{
                  flex: 1, background: "var(--surface-2)", border: "1px solid var(--border)",
                  borderRadius: 20, padding: "22px 20px",
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>04</span>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: 0 }}>Make it familiar</h4>
                  <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>Understandable to a first-time user within seconds.</p>
                </div>
                <div style={{
                  flex: 1, background: "var(--accent)", borderRadius: 20, padding: "22px 20px",
                  display: "flex", flexDirection: "column", gap: 8, position: "relative", overflow: "hidden",
                }}>
                  <div aria-hidden style={{ position: "absolute", bottom: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>05</span>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>Design for real-time</h4>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>Latency and feedback must be communicated clearly.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CHALLENGES — numbered two-col problem/solution
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Challenges & Solutions</span>
              <h2 className="font-display" style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "8px 0 0" }}>
                What made this hard
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { n: "01", challenge: "Making AI feel simple", problem: "The technology behind live dubbing is complex — speech recognition, translation, voice synthesis, audio sync.", solution: "I focused the experience on three understandable actions: choose language, start dubbing, stop. Everything else is hidden." },
                { n: "02", challenge: "Tiny interface canvas", problem: "Browser extensions have far less space than conventional websites. Every element had to earn its place.", solution: "I prioritised the single most important action per screen and used progressive disclosure for secondary controls." },
                { n: "03", challenge: "Communicating real-time state", problem: "Users need to know whether the system is listening, processing, translating, or actively dubbing at any moment.", solution: "I introduced clear named states (Listening → Processing → Translating → Active) with distinct UI feedback for each." },
                { n: "04", challenge: "Balancing control and simplicity", problem: "Too few controls frustrate advanced users; too many controls feel intimidating to new ones.", solution: "The core interface stays minimal. Advanced controls live one tap away but never clutter the primary experience." },
              ].map(({ n, challenge, problem, solution }) => (
                <div key={n} style={{
                  display: "grid", gridTemplateColumns: "48px 1fr 1fr", gap: "0 32px",
                  padding: "28px 28px",
                  background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16,
                }}
                  className="cs-challenge-row"
                >
                  {/* Number */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--accent)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, flexShrink: 0, alignSelf: "flex-start",
                  }}>{n}</div>

                  {/* Problem */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e53935", flexShrink: 0 }} />
                      <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "var(--text)" }}>{challenge}</h4>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{problem}</p>
                  </div>

                  {/* Solution */}
                  <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 32 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00a050", flexShrink: 0 }} />
                      <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0, color: "var(--text)" }}>Solution</h4>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "var(--border)", margin: "0 48px" }} />

        {/* ══════════════════════════════════════════════════
            STATUS & DELIVERABLES
        ══════════════════════════════════════════════════ */}
        <section style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <TwoCol
              gap={48}
              left={
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Deliverables</span>
                  <h2 className="font-display" style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "8px 0 24px" }}>What I built</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                    {["Product concept", "UX architecture", "User flows", "Wireframes", "UI design", "Interaction states", "Extension interface", "Component system", "AI interaction patterns", "Frontend implementation"].map(d => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text)", padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                        <span style={{ color: "#00a050", fontSize: 14, fontWeight: 700 }}>✓</span>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              }
              right={
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase" as const }}>Status</span>
                  <h2 className="font-display" style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "8px 0 24px" }}>Current progress</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { label: "Design", done: true },
                      { label: "Frontend Implementation", done: true },
                      { label: "Backend / AI Pipeline", done: false },
                    ].map(({ label, done }) => (
                      <div key={label} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "14px 18px", borderRadius: 10,
                        background: done ? "rgba(0,160,80,0.06)" : "rgba(255,165,0,0.06)",
                        border: `1px solid ${done ? "rgba(0,160,80,0.2)" : "rgba(255,165,0,0.2)"}`,
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: done ? "#00a050" : "#e08000" }} />
                          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{label}</span>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: done ? "#00a050" : "#c07000" }}>
                          {done ? "Completed" : "In Development"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FINAL QUOTE
        ══════════════════════════════════════════════════ */}
        <section style={{
          background: "var(--accent)", padding: "80px 48px",
          position: "relative", overflow: "hidden",
        }}>
          <div aria-hidden style={{
            position: "absolute", top: -60, left: 32, fontSize: 280,
            fontFamily: "'Fraunces',serif", fontWeight: 700,
            color: "rgba(255,255,255,0.06)", lineHeight: 1, pointerEvents: "none",
          }}>&ldquo;</div>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <p className="font-display" style={{
              fontSize: "clamp(20px,3vw,34px)", fontWeight: 300, fontStyle: "italic",
              color: "#fff", lineHeight: 1.55, margin: "0 0 28px",
            }}>
              &ldquo;Language shouldn&apos;t determine what people can learn, watch, or enjoy
              online.&rdquo;
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: "0 0 36px" }}>
              Dubly is my exploration of a future where content can speak to everyone —
              regardless of the language it was originally created in.
            </p>
            <button onClick={onBack} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", color: "var(--accent)",
              padding: "12px 26px", borderRadius: 8,
              fontSize: 13, fontWeight: 700, letterSpacing: "0.05em",
              textTransform: "uppercase" as const, border: "none", cursor: "pointer",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              ← Back to Portfolio
            </button>
          </div>
        </section>

      </main>

      {/* ── Responsive rules ── */}
      <style>{`
        @media (max-width: 900px) {
          .cs-hero-grid   { grid-template-columns: 1fr !important; }
          /* Image moves above text on mobile */
          .cs-hero-img-col { order: -1 !important; padding-top: 0 !important; }
          /* Remove the 3-D tilt on small screens — causes horizontal overflow */
          .cs-hero-img-wrap { transform: none !important; box-shadow: 0 16px 40px rgba(0,0,0,0.14) !important; }
          /* Hide the accent blob — overflows on narrow screens */
          .cs-hero-blob { display: none !important; }
          /* Reduce left-col bottom padding */
          .cs-hero-left { padding-bottom: 32px !important; }
          /* Allow chips to wrap on tablet */
          .cs-hero-chips { flex-wrap: wrap !important; }
          .cs-two-col     { grid-template-columns: 1fr !important; direction: ltr !important; }
          .cs-challenge-row { grid-template-columns: 40px 1fr !important; }
          .cs-challenge-row > div:last-child { grid-column: 2; border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--border); padding-top: 16px; margin-top: 8px; }
          .cs-bento { grid-template-columns: 1fr !important; }
          .cs-bento > * { grid-column: 1 !important; grid-row: auto !important; }
        }
        @media (max-width: 600px) {
          /* Tighten horizontal padding across all sections */
          section { padding-left: 16px !important; padding-right: 16px !important; }
          .cs-hero-section { padding-left: 16px !important; padding-right: 16px !important; }
          /* Smaller title on very small phones */
          .cs-hero-left h1 { font-size: 40px !important; }
          /* Stack metadata items */
          .cs-hero-meta { gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}
