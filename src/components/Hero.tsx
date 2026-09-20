// ─── Hero Section ─────────────────────────────────────────────────────────────
import heroPhoto from "@/imports/KOBBY_1-2.png";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const SPECIALTY_TAGS = ["UI Design", "UX Research", "Graphic Design", "Prompt Engineering"];

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="Home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        background: "linear-gradient(135deg, #ffffff 55%, #eef2fb 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(0,56,168,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left — copy */}
        <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Available badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent-dim)",
              border: "1px solid rgba(0,229,200,0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              width: "fit-content",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Available for new projects
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            Gbedemah
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Counsellor</em>
          </h1>

          {/* Tagline */}
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "var(--muted)", maxWidth: "480px", margin: 0 }}>
            UI/UX designer, graphic artist, and prompt engineer building digital products that{" "}
            <span style={{ color: "var(--text)" }}>look stunning</span> and{" "}
            <span style={{ color: "var(--text)" }}>feel effortless.</span>
          </p>

          {/* Specialty pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {SPECIALTY_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "5px 12px",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              onClick={() => onScrollTo("Projects")}
              style={{
                background: "var(--accent)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View My Work <span>→</span>
            </button>
            <button
              onClick={() => onScrollTo("Contact")}
              style={{
                background: "transparent",
                color: "var(--text)",
                padding: "14px 28px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                border: "1px solid var(--border)",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>

        {/* Right — portrait */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="hero-float" style={{ position: "relative", width: "min(400px, 100%)" }}>
            {/* Accent ring */}
            <div
              style={{
                position: "absolute",
                inset: "-3px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent) 0%, rgba(0,56,168,0.2) 60%)",
                zIndex: 0,
              }}
            />
            <img
              src={heroPhoto}
              alt="Gbedemah Counsellor — UI/UX designer and graphic artist"
              style={{
                width: "100%",
                borderRadius: "50%",
                display: "block",
                objectFit: "cover",
                objectPosition: "top center",
                aspectRatio: "1/1",
                position: "relative",
                zIndex: 1,
                filter: "brightness(1.02) contrast(1.02)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
