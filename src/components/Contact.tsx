// ─── Contact Section ──────────────────────────────────────────────────────────
import { useState } from "react";
import { CONTACT_LINKS } from "@/data";

const FORMSPREE_URL = "https://formspree.io/f/meaoonew";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FORM_FIELDS = [
  { label: "Name",           key: "name",    type: "text",  placeholder: "Your full name"      },
  { label: "Email",          key: "email",   type: "email", placeholder: "your@email.com"       },
  { label: "Contact Number", key: "phone",   type: "tel",   placeholder: "+1 (555) 000-0000"   },
] as const;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          phone:    form.phone,
          message:  form.message,
          _replyto: form.email,
          _subject: `Portfolio enquiry from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="Contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <span style={{
          fontSize: "11px", fontWeight: 500, color: "var(--accent)",
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>
          Get in Touch
        </span>

        <h2 className="font-display" style={{
          fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600,
          letterSpacing: "-0.02em", marginBottom: "16px", marginTop: "8px",
        }}>
          Let&apos;s build something great.
        </h2>

        <p style={{
          fontSize: "16px", color: "var(--muted)", marginBottom: "60px",
          maxWidth: "480px", lineHeight: 1.6,
        }}>
          Have a project in mind? I&apos;d love to hear about it. Send a message and I&apos;ll
          get back to you within 24 hours.
        </p>

        <div className="contact-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "start",
        }}>

          {/* ── Form ── */}
          <div>
            {status === "success" ? (
              <div style={{
                padding: "48px", background: "var(--surface)",
                border: "1px solid rgba(0,160,80,0.25)", borderRadius: "12px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "8px", color: "var(--accent)" }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "20px", background: "none", border: "1px solid var(--border)",
                    borderRadius: "6px", padding: "8px 18px", fontSize: "13px",
                    color: "var(--muted)", cursor: "pointer", transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Text / email / tel fields */}
                {FORM_FIELDS.map((f) => (
                  <div key={f.key}>
                    <label style={{
                      display: "block", fontSize: "12px", fontWeight: 500,
                      color: "var(--muted)", letterSpacing: "0.06em",
                      textTransform: "uppercase", marginBottom: "8px",
                    }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      style={{
                        width: "100%", background: "var(--surface)",
                        border: "1px solid var(--border)", borderRadius: "6px",
                        padding: "12px 16px", fontSize: "14px", color: "var(--text)",
                        outline: "none", transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e)  => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                ))}

                {/* Message */}
                <div>
                  <label style={{
                    display: "block", fontSize: "12px", fontWeight: 500,
                    color: "var(--muted)", letterSpacing: "0.06em",
                    textTransform: "uppercase", marginBottom: "8px",
                  }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%", background: "var(--surface)",
                      border: "1px solid var(--border)", borderRadius: "6px",
                      padding: "12px 16px", fontSize: "14px", color: "var(--text)",
                      outline: "none", resize: "vertical", fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e)  => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <p style={{
                    fontSize: "13px", color: "#c0392b", margin: 0,
                    background: "rgba(192,57,43,0.06)", border: "1px solid rgba(192,57,43,0.2)",
                    borderRadius: "6px", padding: "10px 14px",
                  }}>
                    Something went wrong. Please try again or email me directly at{" "}
                    <a href="mailto:counsellor242@gmail.com" style={{ color: "#c0392b", fontWeight: 600 }}>
                      counsellor242@gmail.com
                    </a>
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background: "var(--accent)", color: "#ffffff",
                    padding: "14px", borderRadius: "6px", fontSize: "14px",
                    fontWeight: 700, border: "none", letterSpacing: "0.04em",
                    textTransform: "uppercase", transition: "opacity 0.2s",
                    cursor: status === "sending" ? "default" : "pointer",
                    opacity: status === "sending" ? 0.65 : 1,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  }}
                  onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { if (status !== "sending") e.currentTarget.style.opacity = "1"; }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{
                        width: 14, height: 14, borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.35)",
                        borderTopColor: "#fff", display: "inline-block",
                        animation: "contact-spin 0.7s linear infinite",
                      }} />
                      Sending…
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <style>{`@keyframes contact-spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </div>

          {/* ── Contact info links ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {CONTACT_LINKS.map((c) => (
              <div key={c.label} style={{ paddingBottom: "32px", borderBottom: "1px solid var(--border)" }}>
                <div style={{
                  fontSize: "11px", fontWeight: 500, color: "var(--muted)",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px",
                }}>
                  {c.label}
                </div>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "16px", color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
