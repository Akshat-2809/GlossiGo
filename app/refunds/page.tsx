"use client";

import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   REFUND & CANCELLATION POLICY — /refunds
   GlossiGo Detailing™
───────────────────────────────────────────── */

const LAST_UPDATED = "6 May 2025";
const WHATSAPP_NUMBER = "919829256300";

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: `At GlossiGo, every service is carried out by trained professionals using premium products. We stand behind the quality of our work. This policy outlines the circumstances under which refunds or cancellations are accepted, and how we handle them.`,
  },
  {
    id: "cancellations",
    title: "Cancellations",
    items: [
      {
        heading: "More than 24 hours before your appointment",
        body: "You may cancel at no charge. If you paid in advance, a full refund will be issued within 5–7 business days to your original payment method.",
      },
      {
        heading: "Less than 24 hours before your appointment",
        body: "A cancellation fee of ₹200 applies to cover technician scheduling costs. Any remaining advance payment will be refunded within 5–7 business days.",
      },
      {
        heading: "Same-day cancellations or no-shows",
        body: "The full booking amount is non-refundable if you cancel on the day of the appointment or are unavailable when our team arrives at the agreed location.",
      },
      {
        heading: "GlossiGo-initiated cancellations",
        body: "If we cancel your appointment for any reason (weather, equipment, staffing), you will receive a full refund and priority rescheduling at no extra cost.",
      },
    ],
  },
  {
    id: "refunds",
    title: "Refunds & Re-Do Policy",
    items: [
      {
        heading: "Unsatisfied with the result?",
        body: "If you are not satisfied with the quality of the service, contact us within 24 hours of service completion. We will schedule a complimentary re-do of the affected areas at no charge.",
      },
      {
        heading: "Refunds for quality concerns",
        body: "Monetary refunds for completed services are issued at our discretion and only when a re-do is not feasible. All refund requests must be raised within 24 hours of service completion, supported by photographs.",
      },
      {
        heading: "No refunds after 24 hours",
        body: "We are unable to accept refund or re-do requests raised more than 24 hours after the service was completed.",
      },
      {
        heading: "Add-on services",
        body: "Add-ons such as ceramic coating, PPF, and paint correction are non-refundable once the process has begun, as these involve irreversible chemical and mechanical processes.",
      },
    ],
  },
  {
    id: "doorstep",
    title: "Doorstep Service — Special Conditions",
    items: [
      {
        heading: "Access & space requirements",
        body: "A doorstep booking is confirmed on the basis that adequate space and access are available. If our team arrives and finds the location unsuitable (no clearance, no flat surface, restricted access), the booking will be treated as a same-day cancellation.",
      },
      {
        heading: "Water & power",
        body: "Our doorstep team is fully self-equipped. No access to your utilities is required. Refunds will not be issued if you request cancellation at the door.",
      },
    ],
  },
  {
    id: "process",
    title: "How to Raise a Request",
    content: `All cancellation and refund requests must be submitted via WhatsApp or phone call to our support number. Please include your booking reference, the service date, and a brief description of the issue. For quality concerns, attach clear photographs taken within 24 hours of service completion.`,
  },
  {
    id: "processing",
    title: "Refund Processing Time",
    content: `Approved refunds are processed within 5–7 business days. The amount is credited to your original payment method — UPI, card, or bank transfer. GlossiGo does not charge any processing fee on refunds.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `For any questions about this policy, reach us on WhatsApp at +91 98292 56300 or call us Monday to Sunday, 9 AM – 8 PM. We aim to resolve all concerns within 24 hours.`,
  },
];

export default function RefundsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }
        .rp-container { max-width: 780px; margin: 0 auto; padding: 0 24px; }
        .rp-prose { font-family: 'Outfit', sans-serif; font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.8; }
        @media (max-width: 600px) {
          .rp-container { padding: 0 16px; }
        }
      `}</style>

      {/* ── Nav breadcrumb ── */}
      <nav style={{
        background: "#060606",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "16px 24px",
      }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/" style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 12,
            color: "rgba(255,255,255,0.3)", textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#fff")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
          >GlossiGo</Link>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 2l4 3-4 3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
            Refund & Cancellation Policy
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: "#060606",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "72px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />
        {/* Radial glow */}
        <div aria-hidden style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500, height: 300,
          background: "radial-gradient(ellipse at center, rgba(62,156,64,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="rp-container" style={{ position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(62,156,64,0.85)",
            }}>Policy</span>
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "#fff",
            marginBottom: 18,
          }}>
            Refund &{" "}
            <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Cancellation</em>
            <br />Policy
          </h1>

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14,
            color: "rgba(255,255,255,0.3)", lineHeight: 1.75, maxWidth: 520,
            marginBottom: 28,
          }}>
            We want every GlossiGo experience to be exceptional. If something
            doesn&apos;t meet your expectations, here&apos;s how we make it right.
          </p>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100, padding: "7px 16px",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "rgba(62,156,64,0.6)", flexShrink: 0,
              display: "inline-block",
            }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 11,
              color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em",
            }}>
              Last updated: {LAST_UPDATED}
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#080808", padding: "72px 24px 100px" }}>
        <div className="rp-container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {SECTIONS.map((sec) => (
              <div key={sec.id} id={sec.id} style={{
                paddingBottom: 48,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                {/* Section heading */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <div style={{
                    width: 3, height: 20,
                    background: "#3E9C40",
                    borderRadius: 2, flexShrink: 0,
                  }} />
                  <h2 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(20px, 3vw, 26px)",
                    fontWeight: 400,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}>{sec.title}</h2>
                </div>

                {/* Prose */}
                {sec.content && (
                  <p className="rp-prose">{sec.content}</p>
                )}

                {/* Item list */}
                {sec.items && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {sec.items.map((item, i) => (
                      <div key={i} style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderLeft: "2px solid rgba(62,156,64,0.4)",
                        borderRadius: "0 8px 8px 0",
                        padding: "18px 20px",
                      }}>
                        <div style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 14, fontWeight: 600,
                          color: "rgba(255,255,255,0.8)",
                          marginBottom: 8,
                        }}>{item.heading}</div>
                        <p className="rp-prose" style={{ fontSize: 13 }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div style={{
            marginTop: 64,
            background: "rgba(62,156,64,0.05)",
            border: "1px solid rgba(62,156,64,0.18)",
            borderRadius: 10,
            padding: "36px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}>
            <div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 22, fontWeight: 400,
                color: "#fff", marginBottom: 6,
              }}>
                Have a question about your booking?
              </div>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.35)", lineHeight: 1.6,
              }}>
                We resolve all concerns within 24 hours — reach us on WhatsApp.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi GlossiGo, I have a question about my booking / refund.")}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#3E9C40", color: "#fff",
                fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "13px 24px", borderRadius: 6,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2d7a2f")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#3E9C40")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}