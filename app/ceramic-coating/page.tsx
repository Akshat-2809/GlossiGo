"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   CERAMIC COATING PAGE — /ceramic-coating
   GlossiGo
───────────────────────────────────────────── */

const WHAT_IS = [
  {
    step: "01",
    title: "Liquid Polymer Bond",
    desc: "Ceramic coating is a nano-technology liquid polymer that chemically bonds with your car's factory paint — not a wax or sealant that sits on top and washes away.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "9H Hardness Rating",
    desc: "Once cured, the ceramic layer reaches 9H on the pencil hardness scale — harder than your paint — protecting against fine scratches, swirl marks, and light abrasions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Hydrophobic Surface",
    desc: "Water, mud, and road grime bead up and roll off effortlessly. The surface becomes self-cleaning — and the car stays cleaner for dramatically longer between washes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Permanent Protection",
    desc: "Unlike wax (lasts weeks) or paint sealant (lasts months), a quality ceramic coating bonds permanently and lasts 2–5 years — or longer with our professional-grade products.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const BENEFITS = [
  { title: "UV Protection", desc: "Blocks UV rays that cause paint to oxidise, fade, and chalk over time — especially critical in Rajasthan's harsh sun." },
  { title: "Chemical Resistance", desc: "Bird droppings, tree sap, acid rain, and industrial fallout can no longer etch into the paint — the ceramic layer takes the hit." },
  { title: "Deeper Gloss", desc: "The coating amplifies the depth and clarity of your paint's colour — making it look permanently freshly polished." },
  { title: "Easier Maintenance", desc: "Washing becomes a rinse-and-go affair. No more scrubbing, no more clay barring every few months." },
  { title: "Preserves Resale Value", desc: "Factory paint in pristine condition commands a measurably higher resale price. The coating pays for itself." },
  { title: "Studio Precision", desc: "Every coating application at GlossiGo is preceded by a full paint decontamination and correction — so you're sealing perfection, not defects." },
];

const FAQS = [
  {
    q: "How long does the coating last?",
    a: "Our professional-grade ceramic coatings last 2–5 years depending on the product tier and how the car is maintained. We'll recommend the right package for your usage during consultation.",
  },
  {
    q: "Does my car need paint correction first?",
    a: "Yes — and we include it. Ceramic coating locks in whatever is underneath it, so we always do a thorough decontamination and at least a single-stage polish before applying the coating. You're sealed in perfection, not imperfection.",
  },
  {
    q: "How long will the car be at the studio?",
    a: "Typically 1–2 days. Paint prep, coating application, and curing time all require patience. We'd rather get it right than get it fast.",
  },
  {
    q: "Can I wash the car immediately after?",
    a: "We ask you to keep the car dry for 5–7 days after application to allow the coating to fully cure and bond. After that, wash freely — you'll notice the difference immediately.",
  },
  {
    q: "Is ceramic coating the same as PPF?",
    a: "No. Ceramic coating is a thin chemical layer that adds hardness, gloss, and hydrophobicity. PPF (Paint Protection Film) is a thick physical film that absorbs stone chips and deep scratches. They complement each other — many customers do both.",
  },
];

/* ── FAQ Accordion ───────────────────────── */
function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      {open && (
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "#3E9C40", borderRadius: 2 }} />
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", padding: `20px 0`,
          paddingLeft: open ? 16 : 0,
          background: "transparent", border: "none", cursor: "pointer",
          gap: 16, textAlign: "left", transition: "padding-left 0.2s",
        }}
      >
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
          color: open ? "#fff" : "rgba(255,255,255,0.55)", transition: "color 0.2s",
        }}>
          {item.q}
        </span>
        <span style={{
          width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
          border: `1px solid ${open ? "rgba(62,156,64,0.45)" : "rgba(255,255,255,0.1)"}`,
          background: open ? "rgba(62,156,64,0.08)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s", transform: open ? "rotate(45deg)" : "none",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke={open ? "#3E9C40" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "220px" : "0",
        opacity: open ? 1 : 0,
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
        paddingLeft: open ? 16 : 0,
      } as React.CSSProperties}>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
          lineHeight: 1.78, color: "rgba(255,255,255,0.35)",
          paddingBottom: 22, maxWidth: 580,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────── */
export default function CeramicCoatingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }

        .cc-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .cc-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .cc-card {
          background: #0a0a0a;
          padding: 32px 26px;
          transition: background 0.25s;
        }
        .cc-card:hover { background: #0d180d; }

        .cc-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .cc-benefit-card {
          background: #0a0a0a;
          padding: 28px 24px;
          transition: background 0.25s;
        }
        .cc-benefit-card:hover { background: #0d180d; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes ccPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }

        @media (max-width: 1024px) {
          .cc-grid-4    { grid-template-columns: repeat(2, 1fr) !important; }
          .cc-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cc-grid-4    { grid-template-columns: 1fr !important; }
          .cc-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", background: "#060606",
        overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />
        {/* Grid bg */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
        }} />
        {/* Glow */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 55% 60% at 15% 55%, rgba(62,156,64,0.08) 0%, transparent 65%)",
        }} />
        {/* Watermark */}
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(60px, 14vw, 180px)",
          fontStyle: "italic", fontWeight: 400,
          color: "rgba(255,255,255,0.015)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none", letterSpacing: "-4px", pointerEvents: "none",
        }}>Ceramic</div>

        <div className="cc-container" style={{ position: "relative", zIndex: 1, padding: "96px 24px 80px" }}>
          {/* Breadcrumb */}
          <div className="fu" style={{
            animationDelay: "0.05s",
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 28,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            <Link href="/" style={{ color: "rgba(62,156,64,0.75)", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/services" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Services</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span>Ceramic Coating</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
            {/* Left: headline */}
            <div style={{ maxWidth: 580 }}>
              <div className="fu" style={{ animationDelay: "0.1s", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Ceramic Coating</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "#3E9C40", padding: "2px 8px", borderRadius: 100 }}>Studio Only</span>
              </div>

              <h1 className="fu" style={{
                animationDelay: "0.18s",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 24,
              }}>
                Permanent<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Paint Armour.</em>
              </h1>

              <p className="fu" style={{
                animationDelay: "0.26s",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                lineHeight: 1.78, color: "rgba(255,255,255,0.38)",
                marginBottom: 36, maxWidth: 460,
              }}>
                A nano-ceramic polymer chemically bonded to your paint — 9H hardness, mirror gloss, and hydrophobic protection that lasts years, not weeks.
              </p>

              {/* Studio badge */}
              <div className="fu" style={{
                animationDelay: "0.32s",
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(62,156,64,0.06)", border: "1px solid rgba(62,156,64,0.18)",
                borderRadius: 100, padding: "8px 18px", marginBottom: 32,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#3E9C40", boxShadow: "0 0 8px rgba(62,156,64,0.9)",
                  animation: "ccPulse 2s ease-in-out infinite",
                }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(62,156,64,0.8)" }}>Available at our studio · Jodhpur</span>
              </div>

              <div className="fu" style={{ animationDelay: "0.38s", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/book-now" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#3E9C40", color: "#fff",
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 4, textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2d7a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#3E9C40")}
                >
                  Book Ceramic Coating →
                </Link>
                <a href="https://wa.me/919799023966" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "rgba(255,255,255,0.4)",
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: quick stat tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 220 }}>
              {[
                { val: "9H", lbl: "Hardness Rating" },
                { val: "2–5yr", lbl: "Lifespan" },
                { val: "1–2", lbl: "Days in Studio" },
                { val: "100%", lbl: "UV Blocked" },
              ].map((s) => (
                <div key={s.lbl} style={{
                  padding: "18px 20px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 6,
                }}>
                  <div style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 28, fontWeight: 400, color: "#fff",
                    letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6,
                  }}>{s.val}</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 1 — WHAT IS CERAMIC COATING
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>The Science</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              What Is <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Ceramic Coating?</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Not a wax. Not a sealant. A permanent molecular bond with your paintwork that changes how the surface behaves — forever.
            </p>
          </div>

          <div className="cc-grid-4">
            {WHAT_IS.map((item) => (
              <div key={item.step} className="cc-card">
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 13, color: "rgba(62,156,64,0.4)", marginBottom: 16,
                }}>{item.step}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(62,156,64,0.07)", border: "1px solid rgba(62,156,64,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(62,156,64,0.7)", marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.3)" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — WHAT YOU GET (BENEFITS)
          Two-column: left text + right benefit cards
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="cc-container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>The Benefits</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Why Your Car <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Needs It</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Six real-world reasons why ceramic coating is one of the best investments you can make in a car you care about.
            </p>
          </div>

          <div className="cc-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="cc-benefit-card">
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#3E9C40", boxShadow: "0 0 6px rgba(62,156,64,0.6)", flexShrink: 0,
                  }} />
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>{b.title}</div>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.3)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="cc-container" style={{ maxWidth: 760 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>FAQ</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 400,
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Common <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Questions</em>
            </h2>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — redirects to /book-now
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0" }}>
        <div className="cc-container">
          <div style={{
            position: "relative",
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "3px solid #3E9C40",
            borderRadius: 8, padding: "64px 56px",
            overflow: "hidden", textAlign: "center",
          }}>
            {/* Glow blob */}
            <div aria-hidden style={{
              position: "absolute", top: -80, left: "50%",
              transform: "translateX(-50%)",
              width: 480, height: 240,
              background: "radial-gradient(ellipse at center, rgba(62,156,64,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            {/* Top line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.35), transparent)",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Ready to Protect Your Paint?</span>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              </div>

              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
                lineHeight: 1.0, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 16,
              }}>
                Seal It Once.<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Enjoy It Forever.</em>
              </h2>

              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)", maxWidth: 420,
                margin: "0 auto 40px", lineHeight: 1.78,
              }}>
                Book your ceramic coating appointment at our Jodhpur studio. We&apos;ll assess your paint, walk you through the right package, and get it done properly.
              </p>

              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/book-now"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#3E9C40", color: "#fff",
                    border: "1.5px solid #3E9C40",
                    fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "15px 36px", borderRadius: 5, textDecoration: "none",
                    transition: "background 0.22s, color 0.22s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3E9C40"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#3E9C40"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  Book Now
                </Link>

                <Link
                  href="/services"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "transparent", color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "15px 32px", borderRadius: 5,
                    border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
                >
                  View All Services
                </Link>
              </div>

              {/* Trust note */}
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 11,
                color: "rgba(255,255,255,0.18)", marginTop: 28, lineHeight: 1.6,
              }}>
                Studio only · Jodhpur · Mon–Sun 9 AM–8 PM · Confirm via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}