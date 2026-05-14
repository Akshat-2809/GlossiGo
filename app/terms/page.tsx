"use client";

import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   TERMS OF SERVICE — /terms-of-service
   GlossiGo Detailing™
───────────────────────────────────────────── */

const LAST_UPDATED = "6 May 2025";
const COMPANY = "GlossiGo Detailing™";
const LOCATION = "Jodhpur, Rajasthan, India";
const WHATSAPP_NUMBER = "919829256300";

const SECTIONS = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    content: `By booking a service, accessing our website, or contacting us through any channel, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services. These terms apply to all customers, visitors, and users of ${COMPANY}.`,
  },
  {
    id: "services",
    title: "Services",
    items: [
      {
        heading: "Scope of services",
        body: `${COMPANY} provides professional car detailing services in ${LOCATION}, including studio-based and doorstep detailing. The exact scope of each service is described on the relevant service page or confirmed at the time of booking.`,
      },
      {
        heading: "Service modifications",
        body: "We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of services.",
      },
      {
        heading: "Third-party products",
        body: "We use professional-grade third-party detailing products. While we only use products appropriate for automotive surfaces, we are not responsible for reactions arising from pre-existing damage, non-standard paint, aftermarket modifications, or undisclosed conditions of the vehicle.",
      },
    ],
  },
  {
    id: "bookings",
    title: "Bookings & Appointments",
    items: [
      {
        heading: "Booking confirmation",
        body: "A booking is confirmed only when you receive a confirmation message via WhatsApp or phone call from our team. Submitting an enquiry form does not constitute a confirmed booking.",
      },
      {
        heading: "Accurate information",
        body: "You are responsible for providing accurate details including your name, vehicle model, service address, and contact number. GlossiGo is not liable for service delays or failures resulting from incorrect information provided by the customer.",
      },
      {
        heading: "Rescheduling",
        body: "You may reschedule your appointment free of charge up to 24 hours before the scheduled time. Rescheduling requests made within 24 hours of the appointment are subject to availability and may incur a ₹200 rescheduling fee.",
      },
      {
        heading: "Cancellations",
        body: "Please refer to our Refund & Cancellation Policy for complete details on cancellations and associated charges.",
      },
    ],
  },
  {
    id: "customer-responsibilities",
    title: "Customer Responsibilities",
    items: [
      {
        heading: "Vehicle condition disclosure",
        body: "You must disclose any known issues with your vehicle — including existing scratches, paint damage, sensitive surfaces, electrical faults, or modifications — before the service begins. Failure to do so may affect the service outcome and waives any claim against GlossiGo for pre-existing conditions.",
      },
      {
        heading: "Presence during service",
        body: "For doorstep services, an authorised adult must be available at the service location. For studio services, your vehicle must be dropped off within the agreed time window.",
      },
      {
        heading: "Vehicle contents",
        body: "Please remove all valuables from your vehicle before the appointment. GlossiGo is not responsible for any loss of personal items left inside the vehicle during the service.",
      },
      {
        heading: "Lawful ownership",
        body: "By booking a service, you confirm that you are the owner of the vehicle or have the owner's authorisation to have the vehicle serviced.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    items: [
      {
        heading: "Service outcomes",
        body: "While we strive for the best results, outcomes can vary based on the age, condition, and history of the vehicle. GlossiGo does not guarantee a specific aesthetic result. We do guarantee that all work will be carried out professionally and with appropriate care.",
      },
      {
        heading: "Vehicle damage",
        body: "In the unlikely event of damage caused directly by our team's negligence, GlossiGo will cover the cost of repair up to the value of the service booked. We are not liable for consequential or indirect losses.",
      },
      {
        heading: "Maximum liability",
        body: "To the maximum extent permitted by applicable law, GlossiGo's total liability to you for any claim arising out of or relating to these terms or our services shall not exceed the amount you paid for the specific service in question.",
      },
      {
        heading: "Force majeure",
        body: "We are not liable for delays or failures caused by circumstances beyond our reasonable control, including but not limited to extreme weather, power outages, civil unrest, or government-imposed restrictions.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      {
        heading: "Payment methods",
        body: "We accept UPI, card payments, and cash. Payment is due at the time of service completion unless an advance payment arrangement has been agreed in writing.",
      },
      {
        heading: "Pricing",
        body: "All prices displayed on our website and communicated during booking are in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. Prices are subject to change without notice.",
      },
      {
        heading: "Disputes",
        body: "Any billing disputes must be raised within 48 hours of the transaction. After this period, all charges are considered accepted.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content on the GlossiGo website — including text, logos, photographs, graphics, and design — is the property of ${COMPANY} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.`,
  },
  {
    id: "privacy",
    title: "Privacy",
    content: `We collect only the information necessary to provide our services — your name, phone number, vehicle details, and service address. This information is used solely for booking management and service delivery. We do not sell or share your data with third parties. By using our services, you consent to this use of your data.`,
  },
  {
    id: "conduct",
    title: "Acceptable Use",
    content: `You agree not to misuse our website or services. This includes, but is not limited to, providing false information, attempting to obtain services through fraudulent means, harassing or abusing our staff, or using our platforms for any unlawful purpose. We reserve the right to refuse service to any customer at our discretion.`,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: `We reserve the right to update these Terms of Service at any time. The updated version will be posted on this page with a revised date. Your continued use of our services after any changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Jodhpur, Rajasthan.`,
  },
  {
    id: "contact",
    title: "Contact",
    content: `For questions or concerns about these Terms of Service, please contact us via WhatsApp at +91 98292 56300. Our team is available Monday to Sunday, 9 AM – 8 PM.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }
        .tp-container { max-width: 780px; margin: 0 auto; padding: 0 24px; }
        .tp-prose { font-family: 'Outfit', sans-serif; font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.8; }
        @media (max-width: 600px) {
          .tp-container { padding: 0 16px; }
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
            Terms of Service
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

        <div className="tp-container" style={{ position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(62,156,64,0.85)",
            }}>Legal</span>
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
            Terms of{" "}
            <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Service</em>
          </h1>

          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14,
            color: "rgba(255,255,255,0.3)", lineHeight: 1.75, maxWidth: 520,
            marginBottom: 28,
          }}>
            Please read these terms carefully before using GlossiGo&apos;s services.
            They govern the relationship between you and {COMPANY}.
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

      {/* ── Table of contents ── */}
      <section style={{
        background: "#060606",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "32px 24px",
      }}>
        <div className="tp-container">
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 8,
            padding: "22px 24px",
          }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)", marginBottom: 16,
            }}>Contents</div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "8px 24px",
            }}>
              {SECTIONS.map((sec, i) => (
                <a key={sec.id} href={`#${sec.id}`} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  textDecoration: "none",
                  fontFamily: "'Outfit', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  transition: "color 0.2s",
                  padding: "3px 0",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(62,156,64,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                >
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 10,
                    color: "rgba(62,156,64,0.5)", fontWeight: 700,
                    minWidth: 18,
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  {sec.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ background: "#080808", padding: "72px 24px 100px" }}>
        <div className="tp-container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {SECTIONS.map((sec, idx) => (
              <div key={sec.id} id={sec.id} style={{
                paddingBottom: 48,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                {/* Section heading */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 11,
                    fontWeight: 700, color: "rgba(62,156,64,0.5)",
                    minWidth: 26,
                  }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
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
                  <p className="tp-prose" style={{ paddingLeft: 40 }}>{sec.content}</p>
                )}

                {/* Item list */}
                {sec.items && (
                  <div style={{ paddingLeft: 40, display: "flex", flexDirection: "column", gap: 14 }}>
                    {sec.items.map((item, i) => (
                      <div key={i} style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderLeft: "2px solid rgba(62,156,64,0.4)",
                        borderRadius: "0 8px 8px 0",
                        padding: "16px 20px",
                      }}>
                        <div style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 14, fontWeight: 600,
                          color: "rgba(255,255,255,0.8)",
                          marginBottom: 7,
                        }}>{item.heading}</div>
                        <p className="tp-prose" style={{ fontSize: 13 }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related links */}
          <div style={{ marginTop: 64 }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)", marginBottom: 16,
            }}>Related Policies</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/refunds" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 6, padding: "12px 20px",
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                color: "rgba(255,255,255,0.5)", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
              }}
              >
                Refund & Cancellation Policy
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi GlossiGo, I have a question about your Terms of Service.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(62,156,64,0.06)",
                  border: "1px solid rgba(62,156,64,0.18)",
                  borderRadius: 6, padding: "12px 20px",
                  fontFamily: "'Outfit', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.5)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.45)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.18)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Questions? WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}