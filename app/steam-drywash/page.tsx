"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   STEAM & DRY WASH PAGE — /steam-dry-wash
   GlossiGo
───────────────────────────────────────────── */

const WHAT_IS = [
  {
    step: "01",
    title: "High-Pressure Steam",
    desc: "Superheated steam at 130°C penetrates and dissolves road grime, bird droppings, bug splatter, and grease from every surface without a single bucket of water.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Waterless Technology",
    desc: "Our entire process uses under 1 litre of water. No drainage, no water connection, no mess — making us the only car wash that works in your apartment basement or gated society.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="2" x2="22" y2="22" />
        <path d="M12 2.69l5.66 5.66a8 8 0 0 1-9.1 12.73" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Dry Wash Finish",
    desc: "After steaming, we apply a premium waterless wash solution that lubricates and lifts residual dust — then buff to a streak-free, wax-like finish that protects between washes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Sanitises as It Cleans",
    desc: "Steam at this temperature kills 99.9% of bacteria and allergens on contact. Your car isn't just cleaner — it's hygienically clean, inside door jambs, handles, and all.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "No Water Required",
    desc: "Works anywhere — apartment parking, office bays, gated societies, petrol stations. No hose point needed, ever.",
  },
  {
    title: "Safe on All Surfaces",
    desc: "Steam is gentler than high-pressure jets. No paint damage, no trim fading, no risk to rubber seals or plastic trims.",
  },
  {
    title: "Deeper Clean",
    desc: "Steam gets into gaps, badges, grilles, and door jambs that a bucket wash never reaches. Every centimetre, clean.",
  },
  {
    title: "Eco-Friendly",
    desc: "Under 1 litre of water per session versus 150–200 litres for a traditional wash. Dramatically better for the environment.",
  },
  {
    title: "Quick Turnaround",
    desc: "Full exterior steam and dry wash done in 2–3 hours. Book it, leave us to it, come back to a spotless car.",
  },
  {
    title: "Available as a Plan",
    desc: "Our weekly and fortnightly maintenance plans keep your car looking freshly detailed year-round at a fixed monthly cost.",
  },
];

const PLANS = [
  {
    name: "Single Session",
    frequency: "One-time",
    includes: ["Full exterior steam clean", "Dry wash & buff", "Tyre & rim clean", "Door jamb steam", "Glass clean"],
    note: "Perfect for a one-off deep clean before a trip, event, or sale.",
  },
  {
    name: "Fortnightly Plan",
    frequency: "Every 2 weeks",
    includes: ["Everything in Single Session", "Priority scheduling", "Dedicated team assigned", "Monthly condition report"],
    note: "The most popular plan — keeps your car showroom-clean without effort.",
    highlight: true,
  },
  {
    name: "Weekly Plan",
    frequency: "Every week",
    includes: ["Everything in Fortnightly", "Same-day rescheduling", "Exterior wax refresh monthly", "Free interior vacuum"],
    note: "For drivers who want zero compromise on cleanliness at all times.",
  },
];

const FAQS = [
  {
    q: "Can steam damage my paint or clear coat?",
    a: "No. Steam at the temperatures we use is safe for all factory paints, wraps, ceramic coatings, and PPF. It's actually gentler than a high-pressure water jet because there's no physical impact force. We've never had a paint incident in our steam wash history.",
  },
  {
    q: "Do you need access to water or drainage at my location?",
    a: "Not at all. Our team carries their own steam generator with onboard water supply. We need nothing from your location except a parking space and access to the car.",
  },
  {
    q: "Is steam wash suitable for a car with ceramic coating or PPF?",
    a: "Yes — it's actually the ideal wash method for coated or filmed cars. No abrasive contact, no chemicals that could degrade the coating, and the hydrophobic layer means grime releases even more easily.",
  },
  {
    q: "How is this different from a regular car wash?",
    a: "A bucket or jet wash uses 150–200 litres of water, applies physical pressure to the paint, and misses gaps and jambs. Steam uses under 1 litre, reaches everywhere, sanitises, and leaves a protective layer. It's simply a superior process.",
  },
  {
    q: "Can the steam wash cover the interior too?",
    a: "Yes — steam is an excellent interior sanitiser. We can do a combined interior + exterior session. Ask us when booking and we'll quote accordingly.",
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
        maxHeight: open ? "240px" : "0",
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
export default function SteamDryWashPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }

        .sdw-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .sdw-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .sdw-card {
          background: #0a0a0a;
          padding: 32px 26px;
          transition: background 0.25s;
        }
        .sdw-card:hover { background: #0d180d; }

        .sdw-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .sdw-benefit-card {
          background: #0a0a0a;
          padding: 28px 24px;
          transition: background 0.25s;
        }
        .sdw-benefit-card:hover { background: #0d180d; }

        .sdw-plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes sdwPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }

        @media (max-width: 1024px) {
          .sdw-grid-4      { grid-template-columns: repeat(2, 1fr) !important; }
          .sdw-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sdw-plans-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .sdw-grid-4      { grid-template-columns: 1fr !important; }
          .sdw-benefits-grid { grid-template-columns: 1fr !important; }
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
          fontSize: "clamp(60px, 12vw, 160px)",
          fontStyle: "italic", fontWeight: 400,
          color: "rgba(255,255,255,0.015)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none", letterSpacing: "-4px", pointerEvents: "none",
        }}>Steam Wash</div>

        <div className="sdw-container" style={{ position: "relative", zIndex: 1, padding: "96px 24px 80px" }}>
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
            <span>Steam &amp; Dry Wash</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 580 }}>
              <div className="fu" style={{ animationDelay: "0.1s", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Steam &amp; Dry Wash</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: "#3E9C40", padding: "2px 8px", borderRadius: 100 }}>Doorstep</span>
              </div>

              <h1 className="fu" style={{
                animationDelay: "0.18s",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 7vw, 82px)",
                fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 24,
              }}>
                Zero Water.<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Maximum Clean.</em>
              </h1>

              <p className="fu" style={{
                animationDelay: "0.26s",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                lineHeight: 1.78, color: "rgba(255,255,255,0.38)",
                marginBottom: 36, maxWidth: 460,
              }}>
                Superheated steam technology that cleans, sanitises, and protects every surface on your car — using less than 1 litre of water. No drainage, no hose, no mess.
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
                  animation: "sdwPulse 2s ease-in-out infinite",
                }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(62,156,64,0.8)" }}>Available at your doorstep · Jodhpur</span>
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
                { val: "<1L", lbl: "Water Used" },
                { val: "130°C", lbl: "Steam Temp" },
                { val: "2–3h", lbl: "Per Session" },
                { val: "99.9%", lbl: "Bacteria Killed" },
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
          SECTION 1 — HOW IT WORKS
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="sdw-container">
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
              How Steam Wash <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Works</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              No buckets, no hoses, no pressure washers. Just physics — steam dissolves what water can&apos;t even reach.
            </p>
          </div>

          <div className="sdw-grid-4">
            {WHAT_IS.map((item) => (
              <div key={item.step} className="sdw-card">
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
          SECTION 2 — BENEFITS
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="sdw-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Why Steam</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              Better Than a <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Regular Wash</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Six ways steam wash outperforms everything else — for the car, for the environment, and for you.
            </p>
          </div>

          <div className="sdw-benefits-grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="sdw-benefit-card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
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
          SECTION 3 — PLANS
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="sdw-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Maintenance Plans</span>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400,
              lineHeight: 1.0, letterSpacing: "-0.02em", color: "#fff",
            }}>
              One-Off or <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Recurring</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 500, margin: "18px auto 0", lineHeight: 1.75,
            }}>
              Book a single session or lock in a regular plan and never think about car washing again.
            </p>
          </div>

          <div className="sdw-plans-grid">
            {PLANS.map((plan, i) => (
              <div key={i} style={{
                background: plan.highlight ? "rgba(62,156,64,0.04)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${plan.highlight ? "rgba(62,156,64,0.25)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 8, padding: "32px 28px", position: "relative",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = plan.highlight ? "rgba(62,156,64,0.25)" : "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = plan.highlight ? "rgba(62,156,64,0.04)" : "rgba(255,255,255,0.02)";
              }}
              >
                {/* Top accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: plan.highlight ? "linear-gradient(90deg, transparent, #3E9C40, transparent)" : "transparent",
                  borderRadius: "8px 8px 0 0",
                }} />

                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: 14, right: 16,
                    fontFamily: "'Outfit', sans-serif", fontSize: 8, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#fff", background: "#3E9C40",
                    padding: "3px 10px", borderRadius: 100,
                  }}>Most Popular</div>
                )}

                <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 13, color: "rgba(62,156,64,0.4)", marginBottom: 8 }}>0{i + 1}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, fontWeight: 400, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>{plan.name}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(62,156,64,0.65)", marginBottom: 24 }}>{plan.frequency}</div>

                <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
                  {plan.includes.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3E9C40", flexShrink: 0, boxShadow: "0 0 5px rgba(62,156,64,0.5)" }} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: "12px 14px",
                  background: "rgba(62,156,64,0.05)",
                  border: "1px solid rgba(62,156,64,0.12)",
                  borderRadius: 5,
                  borderLeft: "2px solid rgba(62,156,64,0.4)",
                }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{plan.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 20 }}>
              Pricing is tailored to your car size and location. Contact us for a quick quote.
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
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="sdw-container" style={{ maxWidth: 760 }}>
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
        <div className="sdw-container">
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
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Book Your Session</span>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
              </div>

              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400,
                lineHeight: 1.0, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 16,
              }}>
                Clean Without<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>The Hassle.</em>
              </h2>

              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.3)", maxWidth: 420,
                margin: "0 auto 40px", lineHeight: 1.78,
              }}>
                We come to you, use almost no water, leave no mess, and hand back a spotless car. Book a session or lock in a maintenance plan today.
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
                Doorstep &amp; Studio · Jodhpur · Mon–Sun 9 AM–8 PM · Confirm via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}