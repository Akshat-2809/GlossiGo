"use client";

import { useState } from "react";
import Link from "next/link";

const PLANS = [
  {
    id: 1,
    name: "Top Wash",
    price: "₹350",
    tagline: "Quick, clean, sorted.",
    popular: false,
    features: [
      "Exterior rinse & foam wash",
      "Hand dry",
      "Tyre shine",
      "Glass wipe-down",
    ],
  },
  {
    id: 2,
    name: "Full Wash",
    price: "₹500",
    tagline: "Inside out, spotless.",
    popular: false,
    features: [
      "Everything in Top Wash",
      "Interior vacuum",
      "Dashboard wipe",
      "Door jamb cleaning",
    ],
  },
  {
    id: 3,
    name: "Premium Wash",
    price: "₹1,999",
    tagline: "The full wash experience.",
    popular: true,
    features: [
      "Everything in Full Wash",
      "Foam cannon pre-wash",
      "Clay bar treatment",
      "Sealant application",
      "Interior deep clean",
    ],
  },
];

function PlanCard({ plan }: { plan: typeof PLANS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: plan.popular
          ? "linear-gradient(160deg, rgba(62,156,64,0.09) 0%, rgba(62,156,64,0.03) 100%)"
          : "#0d0d0d",
        border: `1px solid ${
          plan.popular
            ? hovered ? "rgba(62,156,64,0.6)" : "rgba(62,156,64,0.35)"
            : hovered ? "rgba(62,156,64,0.45)" : "rgba(255,255,255,0.06)"
        }`,
        borderRadius: 8,
        padding: "36px 28px 32px",
        display: "flex",
        flexDirection: "column",
        /* height: 100% makes all cards stretch to grid row height */
        height: "100%",
        transition: "border-color 0.28s, box-shadow 0.28s, transform 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? plan.popular
            ? "0 20px 60px rgba(62,156,64,0.15), 0 0 0 1px rgba(62,156,64,0.2)"
            : "0 20px 60px rgba(62,156,64,0.08), 0 0 0 1px rgba(62,156,64,0.12)"
          : plan.popular
            ? "0 0 48px rgba(62,156,64,0.06)"
            : "none",
        overflow: "hidden",
      }}
    >
      {/* Green shimmer sweep on hover */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(115deg, transparent 30%, rgba(62,156,64,0.06) 50%, transparent 70%)",
        backgroundSize: "200% 100%",
        backgroundPosition: hovered ? "0% 0%" : "200% 0%",
        transition: "background-position 0.55s ease",
        pointerEvents: "none",
        zIndex: 0,
        borderRadius: 8,
      }} />

      {/* Green corner glow on hover */}
      <div style={{
        position: "absolute",
        top: -40, right: -40,
        width: 120, height: 120,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(62,156,64,0.18) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Popular badge */}
      {plan.popular && (
        <div style={{
          position: "absolute",
          top: -13, left: "50%",
          transform: "translateX(-50%)",
          background: "#3E9C40",
          color: "#fff",
          fontFamily: "'Outfit', sans-serif",
          fontSize: 9, fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase",
          padding: "4px 16px", borderRadius: 100,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}>Most Popular</div>
      )}

      {/* Top accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, height: 2,
        background: plan.popular
          ? "linear-gradient(90deg, transparent, #3E9C40, transparent)"
          : `linear-gradient(90deg, transparent, rgba(62,156,64,${hovered ? "0.5" : "0"}), transparent)`,
        borderRadius: "8px 8px 0 0",
        transition: "background 0.35s ease",
        zIndex: 1,
      }} />

      {/* Content — sits above shimmer */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Plan name */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10, fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: plan.popular
            ? "rgba(62,156,64,0.9)"
            : hovered ? "rgba(62,156,64,0.75)" : "rgba(255,255,255,0.22)",
          marginBottom: 14,
          transition: "color 0.25s",
        }}>
          {plan.name}
        </div>

        {/* Price */}
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(40px, 4vw, 52px)",
          fontWeight: 400,
          color: plan.popular
            ? "#3E9C40"
            : hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.9)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: 4,
          transition: "color 0.25s",
        }}>
          {plan.price}
        </div>

        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 11, color: "rgba(255,255,255,0.2)",
          marginBottom: 6,
        }}>per visit</div>

        {/* Tagline */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 12,
          fontStyle: "italic",
          color: hovered ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.22)",
          marginBottom: 24,
          lineHeight: 1.5,
          transition: "color 0.25s",
        }}>
          {plan.tagline}
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: plan.popular
            ? "rgba(62,156,64,0.2)"
            : hovered ? "rgba(62,156,64,0.15)" : "rgba(255,255,255,0.05)",
          marginBottom: 22,
          transition: "background 0.3s",
        }} />

        {/* Features — flex: 1 so all cards share same grow space */}
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
          marginBottom: 28,
          padding: 0,
        }}>
          {plan.features.map((f) => (
            <li key={f} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              color: plan.popular
                ? "rgba(255,255,255,0.55)"
                : hovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.28)",
              lineHeight: 1.4,
              transition: "color 0.25s",
            }}>
              <span style={{
                color: "#3E9C40",
                fontSize: 14,
                flexShrink: 0,
                opacity: plan.popular ? 1 : hovered ? 0.9 : 0.5,
                transition: "opacity 0.25s",
              }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          style={{
            display: "block",
            textAlign: "center",
            padding: "13px 20px",
            borderRadius: 4,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.22s",
            background: plan.popular
              ? "#3E9C40"
              : hovered ? "rgba(62,156,64,0.1)" : "transparent",
            color: plan.popular
              ? "#fff"
              : hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)",
            border: plan.popular
              ? "1px solid #3E9C40"
              : hovered
                ? "1px solid rgba(62,156,64,0.4)"
                : "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            if (plan.popular) {
              el.style.background = "#2d7a2f";
              el.style.boxShadow = "0 4px 20px rgba(62,156,64,0.3)";
            } else {
              el.style.background = "rgba(62,156,64,0.15)";
              el.style.borderColor = "rgba(62,156,64,0.6)";
              el.style.color = "#fff";
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            if (plan.popular) {
              el.style.background = "#3E9C40";
              el.style.boxShadow = "none";
            } else {
              el.style.background = hovered ? "rgba(62,156,64,0.1)" : "transparent";
              el.style.borderColor = hovered ? "rgba(62,156,64,0.4)" : "rgba(255,255,255,0.07)";
              el.style.color = hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)";
            }
          }}
        >
          Book This Plan
        </Link>
      </div>
    </div>
  );
}

export default function PlansSection() {
  return (
    <section
      id="plans"
      style={{
        background: "#080808",
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        /* stretch makes all 3 cards the same height */
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        @media (max-width: 860px) {
          .ps-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px;
            margin: 0 auto;
          }
        }
      `}</style>

      {/* Faint radial glow */}
      <div aria-hidden style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%", height: "70%",
        background: "radial-gradient(ellipse at center, rgba(62,156,64,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 56,
          gap: 24,
          flexWrap: "wrap",
        }}>
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 16,
            }}>
              <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)", flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10, fontWeight: 600,
                letterSpacing: "0.25em", textTransform: "uppercase",
                color: "rgba(62,156,64,0.85)",
              }}>Pricing</span>
            </div>

            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#fff",
              marginBottom: 12,
            }}>
              Simple,{" "}
              <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Transparent</em>
              <br />Pricing
            </h2>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.28)",
              maxWidth: 340,
              lineHeight: 1.7,
            }}>
              No hidden charges. No upselling. Pick the plan your car deserves
              and we&apos;ll take care of the rest.
            </p>
          </div>

          <Link
            href="/plans"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 24px", borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              alignSelf: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
            }}
          >
            Explore More Plans
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="ps-grid">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom notes */}
        <div style={{
          marginTop: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
        }}>
          {[
            "Custom packages available",
            "Doorstep service add-on available",
            "All prices inclusive",
          ].map((note, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 7,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}>
              <span style={{
                width: 4, height: 4,
                borderRadius: "50%",
                background: "rgba(62,156,64,0.5)",
                flexShrink: 0,
                display: "inline-block",
              }} />
              {note}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}