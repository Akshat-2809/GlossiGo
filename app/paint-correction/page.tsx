"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   PAINT CORRECTION PAGE — /paint-correction
   GlossiGo
───────────────────────────────────────────── */

const WHAT_IS = [
  {
    step: "01",
    title: "Machine Polishing",
    desc: "Paint correction uses dual-action and rotary polishing machines with progressively finer abrasive compounds to level the clear coat — physically removing defects, not filling or hiding them.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Clear Coat Levelling",
    desc: "Swirl marks, scratches, and oxidation all live in the top few microns of your clear coat. We remove just enough material to bring the surface perfectly level — without compromising paint thickness.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Defect Elimination",
    desc: "Unlike a polish at a regular car wash, true paint correction permanently removes swirl marks, buffer trails, water etching, oxidation, and light to medium scratches — they&apos;re gone, not masked.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Coating Prep",
    desc: "Paint correction is the mandatory first step before ceramic coating or PPF. Sealing defects permanently under a coating is irreversible — we correct first so you protect perfection.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Swirl Mark Removal",
    desc: "The spiral haze from automated car washes and incorrect hand washing is the most common paint defect — and one of the most satisfying to permanently eliminate.",
  },
  {
    title: "Scratch Removal",
    desc: "Light to medium scratches that haven't broken through the clear coat can be fully corrected. We assess before we polish so there are no surprises.",
  },
  {
    title: "Oxidation Reversal",
    desc: "Faded, chalky, or hazy paint on older vehicles can be dramatically transformed with multi-stage correction — bringing colour and depth back to life.",
  },
  {
    title: "Water Spot Removal",
    desc: "Hard water spots and acid rain etching leave permanent marks if untreated. Correction removes the etching that washing alone can never touch.",
  },
  {
    title: "Mirror Finish",
    desc: "A fully corrected car reflects like glass. The depth of colour and reflective clarity is a level of gloss that wax or polish alone cannot create.",
  },
  {
    title: "Maximises Coating Results",
    desc: "If you&apos;re planning ceramic coating or PPF, correction isn&apos;t optional — it&apos;s essential. The coating amplifies what's underneath it, good or bad.",
  },
];

const STAGES = [
  {
    stage: "Stage 1",
    name: "Single Stage Polish",
    ideal: "Newer cars with light swirling or hazing",
    defects: ["Light swirl marks", "Minor water spots", "Light hazing", "Pre-coating prep"],
    outcome: "Significant improvement in clarity and gloss. Removes 50–70% of light surface defects.",
    time: "4–6 hours",
  },
  {
    stage: "Stage 2",
    name: "Two Stage Correction",
    ideal: "Cars with moderate defects or older clear coat",
    defects: ["Moderate swirl marks", "Light scratches", "Water etching", "Buffer trails"],
    outcome: "Full correction of most surface defects. 80–90% defect removal. Near-showroom finish.",
    time: "1 full day",
    highlight: true,
  },
  {
    stage: "Stage 3",
    name: "Full Multi-Stage",
    ideal: "Heavily defected, aged, or high-end vehicles",
    defects: ["Deep scratches", "Heavy oxidation", "Severe swirling", "Complex paint issues"],
    outcome: "Maximum possible correction. 95%+ defect removal. Show-car level finish. Pre-PPF or ceramic standard.",
    time: "1–2 days",
  },
];

const FAQS = [
  {
    q: "Will paint correction remove all scratches?",
    a: "Scratches within the clear coat — meaning they haven't broken through to the base coat or primer — can be fully removed. Scratches that go deeper can be significantly reduced but not eliminated without a respray. We inspect every car before quoting and will tell you honestly what's achievable.",
  },
  {
    q: "Does polishing remove paint?",
    a: "Yes — a microscopic amount. That's the science: we're levelling the clear coat. The amount removed is measured in microns and your clear coat is typically 100–150 microns thick. Done correctly by experienced hands, paint correction is safe and leaves plenty of material for future work. We always measure before and after.",
  },
  {
    q: "How is this different from a regular polish at a detailing shop?",
    a: "Most quick polishes use fillers and glazes that temporarily mask defects and wash away within a few weeks. True paint correction uses abrasive compounds and machine polishers to physically remove the defects permanently. There's no comparison in process, time, or result.",
  },
  {
    q: "How long does paint correction last?",
    a: "The correction itself is permanent — the defects are physically gone from the clear coat. How long it stays corrected depends entirely on how the car is maintained. A corrected car with ceramic coating on top will stay perfect for years. Without protection, incorrect washing will introduce new defects.",
  },
  {
    q: "Do I need paint correction before ceramic coating?",
    a: "Yes — always. Ceramic coating locks in and amplifies whatever's underneath it. If you coat over swirl marks and scratches, they become permanent. We include paint correction as part of our ceramic coating preparation.",
  },
  {
    q: "Which correction stage do I need?",
    a: "We assess every car under specialist lighting before recommending a stage. The level of defects, the thickness of remaining clear coat, and your end goal all factor in. Book a consultation and we'll advise you honestly.",
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
          width: "100%", padding: "20px 0",
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
        maxHeight: open ? "260px" : "0",
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
export default function PaintCorrectionPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }

        .pc-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .pc-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .pc-card {
          background: #0a0a0a;
          padding: 32px 26px;
          transition: background 0.25s;
        }
        .pc-card:hover { background: #0d180d; }

        .pc-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .pc-benefit-card {
          background: #0a0a0a;
          padding: 28px 24px;
          transition: background 0.25s;
        }
        .pc-benefit-card:hover { background: #0d180d; }

        .pc-stages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes pcPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }

        @media (max-width: 1024px) {
          .pc-grid-4      { grid-template-columns: repeat(2, 1fr) !important; }
          .pc-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pc-stages-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .pc-grid-4      { grid-template-columns: 1fr !important; }
          .pc-benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", background: "#060606",
        overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #3E9C40, transparent)" }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
        }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 15% 55%, rgba(62,156,64,0.08) 0%, transparent 65%)" }} />
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(50px, 11vw, 150px)",
          fontStyle: "italic", fontWeight: 400,
          color: "rgba(255,255,255,0.015)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none", letterSpacing: "-4px", pointerEvents: "none",
        }}>Paint Correction</div>

        <div className="pc-container" style={{ position: "relative", zIndex: 1, padding: "96px 24px 80px" }}>
          {/* Breadcrumb */}
          <div className="fu" style={{
            animationDelay: "0.05s",
            display: "flex", alignItems: "center", gap: 8, marginBottom: 28,
            fontFamily: "'Outfit', sans-serif", fontSize: 11,
            color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            <Link href="/" style={{ color: "rgba(62,156,64,0.75)", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/services" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Services</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span>Paint Correction</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 580 }}>
              <div className="fu" style={{ animationDelay: "0.1s", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Paint Correction</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "#3E9C40", padding: "2px 8px", borderRadius: 100 }}>Studio &amp; Doorstep</span>
              </div>

              <h1 className="fu" style={{
                animationDelay: "0.18s",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 24,
              }}>
                Remove the Past.<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Restore the Gloss.</em>
              </h1>

              <p className="fu" style={{
                animationDelay: "0.26s",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                lineHeight: 1.78, color: "rgba(255,255,255,0.38)",
                marginBottom: 36, maxWidth: 460,
              }}>
                Machine polishing to permanently eliminate swirl marks, scratches, oxidation, and water etching — restoring your paintwork to a mirror-clear finish that wax and polish can never achieve.
              </p>

              <div className="fu" style={{
                animationDelay: "0.32s",
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(62,156,64,0.06)", border: "1px solid rgba(62,156,64,0.18)",
                borderRadius: 100, padding: "8px 18px", marginBottom: 32,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#3E9C40", boxShadow: "0 0 8px rgba(62,156,64,0.9)",
                  animation: "pcPulse 2s ease-in-out infinite",
                }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(62,156,64,0.8)" }}>Studio &amp; doorstep · Jodhpur</span>
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
                  Book Now
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

            {/* Stat tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 220 }}>
              {[
                { val: "95%+", lbl: "Defect Removal" },
                { val: "3", lbl: "Correction Stages" },
                { val: "1–2", lbl: "Days in Studio" },
                { val: "All", lbl: "Paint Types" },
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
          SECTION 1 — WHAT IS PAINT CORRECTION
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="pc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>The Process</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              What Is <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Paint Correction?</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Not a polish. Not a wax. A permanent process that physically removes paint defects — because hiding them was never the answer.
            </p>
          </div>

          <div className="pc-grid-4">
            {WHAT_IS.map((item) => (
              <div key={item.step} className="pc-card">
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
          SECTION 2 — WHAT DEFECTS WE FIX
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="pc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>What We Fix</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Defects We <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Permanently Remove</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              If it lives in the clear coat, we can remove it. Here&apos;s exactly what paint correction eliminates.
            </p>
          </div>

          <div className="pc-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="pc-benefit-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3E9C40", boxShadow: "0 0 6px rgba(62,156,64,0.6)", flexShrink: 0 }} />
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>{b.title}</div>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,0.3)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — CORRECTION STAGES
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="pc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Correction Levels</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Choose Your <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Correction Stage</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              We assess every car under specialist lighting before recommending the right stage. No upselling — just the right process for your paint.
            </p>
          </div>

          <div className="pc-stages-grid">
            {STAGES.map((s, i) => (
              <div key={i} style={{
                background: s.highlight ? "rgba(62,156,64,0.04)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${s.highlight ? "rgba(62,156,64,0.25)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 8, padding: "32px 28px", position: "relative",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = s.highlight ? "rgba(62,156,64,0.25)" : "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = s.highlight ? "rgba(62,156,64,0.04)" : "rgba(255,255,255,0.02)";
              }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: s.highlight ? "linear-gradient(90deg, transparent, #3E9C40, transparent)" : "transparent",
                  borderRadius: "8px 8px 0 0",
                }} />

                {s.highlight && (
                  <div style={{
                    position: "absolute", top: 14, right: 16,
                    fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#fff", background: "#3E9C40",
                    padding: "3px 10px", borderRadius: 100,
                  }}>Most Common</div>
                )}

                <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 12, color: "rgba(62,156,64,0.4)", marginBottom: 6 }}>{s.stage}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.28)", marginBottom: 20, lineHeight: 1.5 }}>{s.ideal}</div>

                {/* Defects addressed */}
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>Addresses</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                  {s.defects.map((d) => (
                    <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3E9C40", flexShrink: 0, boxShadow: "0 0 4px rgba(62,156,64,0.5)" }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div style={{
                  padding: "12px 14px", marginBottom: 16,
                  background: "rgba(62,156,64,0.05)",
                  border: "1px solid rgba(62,156,64,0.12)",
                  borderRadius: 5, borderLeft: "2px solid rgba(62,156,64,0.4)",
                }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{s.outcome}</p>
                </div>

                {/* Time */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(62,156,64,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{s.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 20 }}>
              Not sure which stage your car needs? We&apos;ll assess it under specialist lighting — no charge.
            </p>
            <Link href="/book-now" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "rgba(62,156,64,0.8)",
              fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "12px 28px", borderRadius: 4,
              border: "1px solid rgba(62,156,64,0.25)", textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#3E9C40"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#3E9C40"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "rgba(62,156,64,0.8)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.25)"; }}
            >
              Book a Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="pc-container" style={{ maxWidth: 760 }}>
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
      <section style={{ background: "#080808", padding: "80px 0" }}>
        <div className="pc-container">
          <div style={{
            position: "relative", background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "3px solid #3E9C40",
            borderRadius: 8, padding: "64px 56px",
            overflow: "hidden", textAlign: "center",
          }}>
            <div aria-hidden style={{
              position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
              width: 480, height: 240,
              background: "radial-gradient(ellipse at center, rgba(62,156,64,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.35), transparent)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Ready to Restore Your Paint?</span>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              </div>

              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
                lineHeight: 1.0, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 16,
              }}>
                Your Paint Was Perfect<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Once. It Can Be Again.</em>
              </h2>

              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)", maxWidth: 420,
                margin: "0 auto 40px", lineHeight: 1.78,
              }}>
                Book your paint correction assessment at our Jodhpur studio. We&apos;ll inspect your paint, recommend the right stage, and restore it to the finish it deserves.
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

              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.18)", marginTop: 28, lineHeight: 1.6 }}>
                Studio &amp; Doorstep · Jodhpur · Mon–Sun 9 AM–8 PM · Confirm via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}