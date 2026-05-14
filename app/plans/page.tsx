"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/LandingPage/footer";

const WHATSAPP_NUMBER = "919799023966";

type BreakdownItem = {
  label: string;
  calc?: string;
  value: string;
  isDiscount?: boolean;
  isTotal?: boolean;
};

type SubscriptionPlan = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  originalPrice: string;
  ourPrice: string;
  saving: string;
  perDay: string;
  highlight: boolean;
  breakdown: BreakdownItem[];
  features: string[];
  cta: string;
  waMessage: string;
};
/* ── BASIC PLANS ─────────────────────────── */
const BASIC_PLANS = [
  {
    id: 1,
    name: "Top Wash",
    price: "₹350",
    per: "per visit",
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
    per: "per visit",
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
    per: "per visit",
    tagline: "The full wash experience.",
    popular: true,
    features: [
      "Everything in Full Wash",
      "Clay bar treatment",
      "Tyre restoration",
    ],
  },
];

/* ── 90-DAY PLANS ────────────────────────── */
const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "s1",
    badge: "90-Day Plan",
    name: "Essential",
    tagline: "Consistent care, consistent shine.",
    originalPrice: "₹9,350",
    ourPrice: "₹7,999",
    saving: "Save ₹1,351",
    perDay: "Just ₹88/day",
    highlight: false,
    breakdown: [
      { label: "25 Top Washes",      calc: "25 × ₹350",  value: "₹8,750", isDiscount: false },
      { label: "3 Interior Dry Cleans", calc: "3 × ₹200", value: "₹600",  isDiscount: false },
      { label: "GlossiGo Discount",  calc: "Special off", value: "−₹1,351", isDiscount: true  },
      { label: "Total",              calc: "",            value: "₹7,999",  isTotal: true     },
    ],
    features: [
      "25 top washes over 90 days",
      "3 interior dry cleans",
      "1 wash every 4th day",
      "Exterior foam wash each visit",
      "Hand dry & tyre shine",
      "Glass wipe-down",
      "Flexible scheduling",
      "WhatsApp booking",
    ],
    cta: "Book Essential Plan",
    waMessage: "I'd like to book the *90-Day Essential Plan* (₹7,999).\n\nPlease share the next steps.",
  },
  {
    id: "s2",
    badge: "90-Day Plan",
    name: "Premium",
    tagline: "Everything your car needs, nothing it doesn't.",
    originalPrice: "₹11,150",
    ourPrice: "₹9,999",
    saving: "Save ₹1,151",
    perDay: "Just ₹111/day",
    highlight: true,
    breakdown: [
      { label: "25 Top Washes",     calc: "25 × ₹350",    value: "₹8,750",  isDiscount: false, isTotal: false },
      { label: "7 Interior Cleans", calc: "7 × ₹200",     value: "₹1,400",  isDiscount: false, isTotal: false },
      { label: "1 Add-on Service",  calc: "up to ₹1,000", value: "₹1,000",  isDiscount: false, isTotal: false },
      { label: "GlossiGo Discount", calc: "Special off",   value: "−₹1,151", isDiscount: true,  isTotal: false },
      { label: "Total",             calc: "",              value: "₹9,999",  isDiscount: false, isTotal: true  },
    ],
    features: [
      "25 top washes over 90 days",
      "7 interior deep cleans",
      "1 free add-on (up to ₹1,000)",
      "Flat ₹500 off on any dry clean",
      "Hand dry & tyre shine every visit",
      "Clay bar treatment (1× included)",
      "Priority WhatsApp booking",
      "Flexible rescheduling",
    ],
    cta: "Book Premium Plan",
    waMessage: "I'd like to book the *90-Day Premium Plan* (₹9,999).\n\nPlease share the next steps.",
  },
];

/* ── HELPERS ─────────────────────────────── */
function sendToWhatsApp(message: string) {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

/* ── BOOKING MODAL ────────────────────────── */
function BookingModal({
  planName,
  planPrice,
  waMessageTemplate,
  onClose,
}: {
  planName: string;
  planPrice: string;
  waMessageTemplate: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "", carType: "", carName: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Required";
    if (!form.phone.trim())   e.phone   = "Required";
    if (!form.carType)        e.carType = "Select car type";
    if (!form.carName.trim()) e.carName = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const CAR_TYPE_LABELS: Record<string, string> = {
    suv: "SUV", hatchback: "Hatchback", sedan: "Sedan",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const carTypeLabel = CAR_TYPE_LABELS[form.carType] || form.carType;
    const bookingLine = `I'd like to book the *${planName}* (${planPrice}).`;
    const details = [
      bookingLine,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Car Type:* ${carTypeLabel}`,
      `*Car Name:* ${form.carName}`,
      ``,
      `Please confirm my booking. Thank you!`,
    ].join("\n");

    // If the template already contains the booking line, avoid duplicating it.
    const detailsWithoutBooking = details.replace(bookingLine + "\n\n", "");

    const finalText = waMessageTemplate && waMessageTemplate.trim()
      ? (waMessageTemplate.includes(bookingLine)
          ? `${waMessageTemplate}\n\n${detailsWithoutBooking}`
          : `${waMessageTemplate}\n\n${details}`)
      : details;
    sendToWhatsApp(finalText);
    onClose();
  };

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${hasError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 6,
    padding: "12px 14px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  });

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(4,4,4,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "modalFadeIn 0.22s ease",
      }}
    >
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div style={{
        background: "#0d0d0d",
        border: "1px solid rgba(62,156,64,0.25)",
        borderRadius: 12,
        width: "100%", maxWidth: 480,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Top green line */}
        <div style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />

        {/* Glow */}
        <div aria-hidden style={{
          position: "absolute", top: -60, right: -60,
          width: 160, height: 160, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62,156,64,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ padding: "28px 32px 32px" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: "rgba(62,156,64,0.8)", marginBottom: 6,
              }}>Booking Details</div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 22, fontWeight: 400, color: "#fff", letterSpacing: "-0.01em",
              }}>{planName}</div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 20, color: "#3E9C40", marginTop: 2,
              }}>{planPrice}</div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
                fontSize: 14, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
              }}
            >✕</button>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Name + Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{
                  display: "block", fontFamily: "'Outfit', sans-serif",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 7,
                }}>Your Name</label>
                <input
                  type="text" placeholder="Raj Sharma"
                  value={form.name} onChange={set("name")}
                  style={inputStyle(!!errors.name)}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                />
                {errors.name && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(239,68,68,0.8)", marginTop: 4, display: "block" }}>{errors.name}</span>}
              </div>
              <div>
                <label style={{
                  display: "block", fontFamily: "'Outfit', sans-serif",
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 7,
                }}>Phone Number</label>
                <input
                  type="tel" placeholder="+91 98765 43210"
                  value={form.phone} onChange={set("phone")}
                  style={inputStyle(!!errors.phone)}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
                  onBlur={(e) => { e.target.style.borderColor = errors.phone ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
                />
                {errors.phone && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(239,68,68,0.8)", marginTop: 4, display: "block" }}>{errors.phone}</span>}
              </div>
            </div>

            {/* Car Type */}
            <div>
              <label style={{
                display: "block", fontFamily: "'Outfit', sans-serif",
                fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 7,
              }}>Car Type</label>
              <select
                value={form.carType} onChange={set("carType")}
                style={{
                  ...inputStyle(!!errors.carType),
                  cursor: "pointer", appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
                  color: form.carType ? "#fff" : "rgba(255,255,255,0.25)",
                }}
                onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; }}
                onBlur={(e) => { e.target.style.borderColor = errors.carType ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; }}
              >
                <option value="" disabled>Select car type…</option>
                <option value="hatchback">Hatchback</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
              </select>
              {errors.carType && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(239,68,68,0.8)", marginTop: 4, display: "block" }}>{errors.carType}</span>}
            </div>

            {/* Car Name */}
            <div>
              <label style={{
                display: "block", fontFamily: "'Outfit', sans-serif",
                fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 7,
              }}>Car Name & Model</label>
              <input
                type="text" placeholder="e.g. Maruti Swift 2022 / Hyundai Creta"
                value={form.carName} onChange={set("carName")}
                style={inputStyle(!!errors.carName)}
                onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
                onBlur={(e) => { e.target.style.borderColor = errors.carName ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
              />
              {errors.carName && <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, color: "rgba(239,68,68,0.8)", marginTop: 4, display: "block" }}>{errors.carName}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                marginTop: 4,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                width: "100%", padding: "14px 24px",
                background: "#3E9C40", color: "#fff",
                border: "1.5px solid #3E9C40", borderRadius: 6,
                fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                cursor: "pointer", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d7a2f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3E9C40")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Send Booking on WhatsApp
            </button>

            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10,
              color: "rgba(255,255,255,0.18)", textAlign: "center", lineHeight: 1.5,
            }}>
              Opens WhatsApp with your details pre-filled — just tap Send.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)", flexShrink: 0 }} />
      <span style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: "0.25em", textTransform: "uppercase",
        color: "rgba(62,156,64,0.85)",
      }}>{text}</span>
    </div>
  );
}

/* ── BASIC PLAN CARD ─────────────────────── */
function BasicCard({ plan }: { plan: typeof BASIC_PLANS[0] }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: plan.popular
          ? "linear-gradient(160deg, rgba(62,156,64,0.09) 0%, rgba(62,156,64,0.03) 100%)"
          : "#0d0d0d",
        border: `1px solid ${plan.popular
          ? hovered ? "rgba(62,156,64,0.6)" : "rgba(62,156,64,0.35)"
          : hovered ? "rgba(62,156,64,0.4)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 8,
        padding: "36px 28px 32px",
        display: "flex", flexDirection: "column",
        height: "100%",
        transition: "border-color 0.28s, box-shadow 0.28s, transform 0.25s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 56px rgba(62,156,64,0.1)"
          : plan.popular ? "0 0 40px rgba(62,156,64,0.06)" : "none",
        overflow: "hidden",
      }}
    >
      {/* Shimmer sweep */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "linear-gradient(115deg, transparent 30%, rgba(62,156,64,0.05) 50%, transparent 70%)",
        backgroundSize: "200% 100%",
        backgroundPosition: hovered ? "0% 0%" : "200% 0%",
        transition: "background-position 0.55s ease",
        pointerEvents: "none",
      }} />
      {/* Corner glow */}
      <div style={{
        position: "absolute", top: -40, right: -40, zIndex: 0,
        width: 110, height: 110, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(62,156,64,0.16) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }} />

      {/* Top line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: plan.popular
          ? "linear-gradient(90deg, transparent, #3E9C40, transparent)"
          : `linear-gradient(90deg, transparent, rgba(62,156,64,${hovered ? "0.45" : "0"}), transparent)`,
        transition: "background 0.3s",
        borderRadius: "8px 8px 0 0",
        zIndex: 1,
      }} />

      {/* Popular badge */}
      {plan.popular && (
        <div style={{
          position: "absolute", top: -13, left: "50%",
          transform: "translateX(-50%)",
          background: "#3E9C40", color: "#fff",
          fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          padding: "4px 16px", borderRadius: 100, whiteSpace: "nowrap", zIndex: 2,
        }}>Most Popular</div>
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 700,
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: plan.popular ? "rgba(62,156,64,0.9)" : hovered ? "rgba(62,156,64,0.7)" : "rgba(255,255,255,0.22)",
          marginBottom: 14, transition: "color 0.22s",
        }}>{plan.name}</div>

        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(38px, 4vw, 50px)", fontWeight: 400,
          color: plan.popular ? "#3E9C40" : "#fff",
          lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 4,
        }}>{plan.price}</div>

        <div style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 11,
          color: "rgba(255,255,255,0.2)", marginBottom: 6,
        }}>{plan.per}</div>

        <div style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 12, fontStyle: "italic",
          color: hovered ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.22)",
          marginBottom: 24, transition: "color 0.22s",
        }}>{plan.tagline}</div>

        <div style={{
          height: 1,
          background: plan.popular ? "rgba(62,156,64,0.2)" : hovered ? "rgba(62,156,64,0.12)" : "rgba(255,255,255,0.05)",
          marginBottom: 22, transition: "background 0.28s",
        }} />

        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 28 }}>
          {plan.features.map((f) => (
            <li key={f} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              fontFamily: "'Outfit', sans-serif", fontSize: 13,
              color: plan.popular ? "rgba(255,255,255,0.55)" : hovered ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.28)",
              lineHeight: 1.4, transition: "color 0.22s",
            }}>
              <span style={{ color: "#3E9C40", fontSize: 14, flexShrink: 0, opacity: plan.popular ? 1 : hovered ? 0.85 : 0.5, transition: "opacity 0.22s" }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => router.push("/book-now")}
          style={{
            display: "block", width: "100%", textAlign: "center",
            padding: "13px 20px", borderRadius: 4,
            fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            cursor: "pointer", transition: "all 0.22s",
            background: plan.popular ? "#3E9C40" : hovered ? "rgba(62,156,64,0.1)" : "transparent",
            color: plan.popular ? "#fff" : hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)",
            border: plan.popular ? "1px solid #3E9C40" : hovered ? "1px solid rgba(62,156,64,0.4)" : "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseEnter={(e) => {
            if (plan.popular) { e.currentTarget.style.background = "#2d7a2f"; }
          }}
          onMouseLeave={(e) => {
            if (plan.popular) { e.currentTarget.style.background = "#3E9C40"; }
          }}
        >
          Book This Plan
        </button>
      </div>
    </div>
  );
}

/* ── SUBSCRIPTION CARD ───────────────────── */
function SubscriptionCard({ plan }: { plan: typeof SUBSCRIPTION_PLANS[0] }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: plan.highlight
          ? "linear-gradient(160deg, rgba(62,156,64,0.1) 0%, rgba(62,156,64,0.03) 60%, #0a0a0a 100%)"
          : "#0d0d0d",
        border: `1px solid ${plan.highlight
          ? hovered ? "rgba(62,156,64,0.65)" : "rgba(62,156,64,0.4)"
          : hovered ? "rgba(62,156,64,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 10,
        overflow: "hidden",
        transition: "border-color 0.28s, box-shadow 0.28s, transform 0.25s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: plan.highlight
          ? hovered ? "0 24px 64px rgba(62,156,64,0.15)" : "0 0 48px rgba(62,156,64,0.07)"
          : hovered ? "0 20px 56px rgba(62,156,64,0.08)" : "none",
      }}
    >
      {/* Top accent line */}
      <div style={{
        height: 2,
        background: plan.highlight
          ? "linear-gradient(90deg, transparent, #3E9C40 30%, #3E9C40 70%, transparent)"
          : `linear-gradient(90deg, transparent, rgba(62,156,64,${hovered ? "0.4" : "0"}), transparent)`,
        transition: "background 0.35s",
      }} />

      {/* Header band */}
      <div className="sub-card-header-pad" style={{
        padding: "28px 32px 24px",
        borderBottom: `1px solid ${plan.highlight ? "rgba(62,156,64,0.15)" : "rgba(255,255,255,0.05)"}`,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Big corner glow */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 180, height: 180, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62,156,64,0.14) 0%, transparent 70%)",
          opacity: hovered ? 1 : plan.highlight ? 0.6 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        <div className="sub-card-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: plan.highlight ? "rgba(62,156,64,0.12)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${plan.highlight ? "rgba(62,156,64,0.3)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 100, padding: "3px 12px",
              fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: plan.highlight ? "rgba(62,156,64,0.9)" : "rgba(255,255,255,0.3)",
              marginBottom: 14,
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: plan.highlight ? "#3E9C40" : "rgba(255,255,255,0.3)",
                display: "inline-block",
                boxShadow: plan.highlight ? "0 0 6px rgba(62,156,64,0.8)" : "none",
              }} />
              {plan.badge}
            </div>

            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.0, letterSpacing: "-0.02em",
              marginBottom: 6,
            }}>{plan.name}</div>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 12, fontStyle: "italic",
              fontWeight: 700, color: "#fff",
            }}>{plan.tagline}</div>
          </div>

          {/* Price block */}
          <div className="sub-card-price" style={{ textAlign: "right" }}>
            <div className="sub-card-price-original" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 11,
              color: "rgba(255,255,255,0.25)", textDecoration: "line-through",
              marginBottom: 2,
            }}>{plan.originalPrice}</div>
            <div className="sub-card-price-main" style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400,
              color: plan.highlight ? "#3E9C40" : "#fff",
              lineHeight: 1, letterSpacing: "-0.02em",
            }}>{plan.ourPrice}</div>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 10,
              color: "rgba(255,255,255,0.22)", marginTop: 2,
            }}>for 90 days</div>
            {/* Saving badge */}
            <div style={{
              marginTop: 8,
              display: "inline-block",
              background: "rgba(62,156,64,0.12)",
              border: "1px solid rgba(62,156,64,0.25)",
              borderRadius: 100,
              padding: "3px 12px",
              fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
              color: "#3E9C40", letterSpacing: "0.1em",
            }}>{plan.saving}</div>
          </div>
        </div>

        {/* Per day highlight */}
        <div style={{
          marginTop: 20,
          padding: "10px 16px",
          background: plan.highlight ? "rgba(62,156,64,0.08)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${plan.highlight ? "rgba(62,156,64,0.2)" : "rgba(255,255,255,0.05)"}`,
          borderRadius: 6,
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontSize: 14 }}>⚡</span>
          <span style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700,
            color: "#fff",
          }}>{plan.perDay}</span>
          <span style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 11,
            color: "#fff",
          }}>for premium car care</span>
        </div>
      </div>

      {/* Body */}
      <div className="sub-card-pad" style={{ padding: "24px 32px 32px" }}>
        <div className="sub-card-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
          {/* Features */}
          <div>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#fff", marginBottom: 14,
            }}>{"What\u2019s included"}</div>
            <ul className="sub-card-features-list" style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {plan.features.map((f) => (
                <li key={f} style={{
                  display: "flex", alignItems: "flex-start", gap: 9,
                  fontFamily: "'Outfit', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.45)", lineHeight: 1.4,
                }}>
                  <span style={{ color: "#3E9C40", fontSize: 13, flexShrink: 0, opacity: 0.85 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Breakdown */}
          <div>
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "transparent", border: "none", cursor: "pointer", padding: 0,
                fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#fff", marginBottom: 14,
              }}
            >
              Price breakdown
              <span style={{
                fontSize: 10, color: "rgba(62,156,64,0.6)",
                transition: "transform 0.2s",
                display: "inline-block",
                transform: open ? "rotate(180deg)" : "none",
              }}>▾</span>
            </button>

            <div style={{
              overflow: "hidden",
              maxHeight: open ? "300px" : "0",
              opacity: open ? 1 : 0,
              transition: "max-height 0.35s ease, opacity 0.28s ease",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {plan.breakdown.map((b: BreakdownItem, i: number) => {
                  if (b.isTotal) {
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "10px 0 0",
                        borderTop: "1px solid rgba(62,156,64,0.25)",
                        marginTop: 4, gap: 8,
                      }}>
                        <div style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                          color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase",
                        }}>Our Price</div>
                        <div style={{
                          fontFamily: "'DM Serif Display', serif", fontSize: 22,
                          color: plan.highlight ? "#3E9C40" : "#fff",
                        }}>{b.value}</div>
                      </div>
                    );
                  }
                  return (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      gap: 8,
                      background: b.isDiscount ? "rgba(62,156,64,0.03)" : "transparent",
                      borderRadius: b.isDiscount ? 4 : 0,
                      paddingLeft: b.isDiscount ? 6 : 0,
                      paddingRight: b.isDiscount ? 6 : 0,
                    }}>
                      <div style={{ flex: "1 1 0", minWidth: 0 }}>
                        <div style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 12,
                          color: b.isDiscount ? "rgba(62,156,64,0.8)" : "rgba(255,255,255,0.45)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>{b.isDiscount ? "🏷 " : ""}{b.label}</div>
                        {b.calc && <div style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 10,
                          color: "rgba(255,255,255,0.2)", marginTop: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>{b.calc}</div>}
                      </div>
                      <div style={{
                        flex: "0 0 auto",
                        marginLeft: 12,
                        minWidth: 80,
                        textAlign: "right",
                        fontFamily: "'DM Serif Display', serif", fontSize: 16,
                        color: b.isDiscount ? "#3E9C40" : "rgba(255,255,255,0.6)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontWeight: b.isDiscount ? 700 : 400,
                      }}>{b.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Show when breakdown is hidden */}
            {!open && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {plan.breakdown.filter((b: BreakdownItem) => !b.isTotal).slice(0, 2).map((b: BreakdownItem, i: number) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                    fontFamily: "'Outfit', sans-serif", fontSize: 12,
                    color: "rgba(255,255,255,0.3)",
                  }}>
                    <span style={{ flex: "1 1 0", minWidth: 0, color: b.isDiscount ? "rgba(62,156,64,0.7)" : "rgba(255,255,255,0.3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {b.isDiscount ? "🏷 " : ""}{b.label}
                    </span>
                    <span style={{ flex: "0 0 auto", marginLeft: 8, minWidth: 72, textAlign: "right", color: b.isDiscount ? "#3E9C40" : "rgba(255,255,255,0.4)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{b.value}</span>
                  </div>
                ))}
                {plan.breakdown.filter((b: BreakdownItem) => !b.isTotal).length > 2 && (
                  <div style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 11,
                    color: "rgba(62,156,64,0.5)", cursor: "pointer",
                  }}
                  onClick={() => setOpen(true)}
                  >+ {plan.breakdown.filter((b: BreakdownItem) => !b.isTotal).length - 2} more ↓</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", padding: "15px 24px",
            background: plan.highlight ? "#3E9C40" : "transparent",
            color: plan.highlight ? "#fff" : "rgba(255,255,255,0.5)",
            border: plan.highlight ? "1.5px solid #3E9C40" : "1.5px solid rgba(255,255,255,0.1)",
            borderRadius: 6, cursor: "pointer",
            fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            transition: "all 0.22s",
          }}
          onMouseEnter={(e) => {
            if (plan.highlight) {
              e.currentTarget.style.background = "#2d7a2f";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(62,156,64,0.3)";
            } else {
              e.currentTarget.style.borderColor = "rgba(62,156,64,0.45)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(62,156,64,0.07)";
            }
          }}
          onMouseLeave={(e) => {
            if (plan.highlight) {
              e.currentTarget.style.background = "#3E9C40";
              e.currentTarget.style.boxShadow = "none";
            } else {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          {/* WhatsApp icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
          </svg>
          {plan.cta}
        </button>

        {showModal && (
          <BookingModal
            planName={`90-Day ${plan.name} Plan`}
            planPrice={plan.ourPrice}
            waMessageTemplate={plan.waMessage}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────── */
export default function PlansPage() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .pp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .pp-basic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        .pp-sub-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .pp-basic-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
          .pp-sub-grid   { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .pp-basic-grid { max-width: 100% !important; }
          .sub-card-header { flex-direction: column !important; gap: 12px !important; }
          .sub-card-price  { text-align: left !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 12px !important; flex-wrap: wrap !important; }
          .sub-card-price-original { margin-bottom: 0 !important; }
          .sub-card-price-main { font-size: 32px !important; }
          .sub-card-body   { grid-template-columns: 1fr !important; gap: 20px !important; }
          .sub-card-features-list { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          .sub-card-features-list li { font-size: 11px !important; }
          .sub-card-pad { padding: 18px 18px 24px !important; }
          .sub-card-header-pad { padding: 20px 18px 18px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", background: "#060606",
        overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 55% 60% at 15% 55%, rgba(62,156,64,0.07) 0%, transparent 65%)",
        }} />
        <div aria-hidden style={{
          position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)",
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(100px, 18vw, 200px)",
          fontStyle: "italic", color: "rgba(255,255,255,0.018)",
          whiteSpace: "nowrap", lineHeight: 1, userSelect: "none",
        }}>Plans</div>

        <div className="pp-container" style={{ position: "relative", zIndex: 1, padding: "88px 24px 72px" }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: 28,
            fontFamily: "'Outfit', sans-serif", fontSize: 11,
            color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            <Link href="/" style={{ color: "rgba(62,156,64,0.75)", textDecoration: "none" }}>Home</Link>
            <span>›</span><span>Plans</span>
          </div>

          <Eyebrow text="Pricing" />
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(48px, 8vw, 90px)", fontWeight: 400,
            lineHeight: 0.95, letterSpacing: "-0.03em",
            color: "#fff", marginBottom: 20,
          }}>
            Simple,{" "}
            <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Transparent</em>
            <br />Pricing
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15,
            lineHeight: 1.78, color: "rgba(255,255,255,0.35)",
            maxWidth: 460, marginBottom: 0,
          }}>
            No hidden charges. No upselling. From a quick wash to a full 90-day
            care plan — pick what your car deserves.
          </p>
        </div>
      </section>

      {/* ── BASIC PLANS ── */}
      <section style={{ padding: "80px 0 72px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="pp-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow text="Wash Plans" />
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 400,
              lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10,
            }}>
              One-Time <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Washes</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13,
              color: "rgba(255,255,255,0.28)", maxWidth: 380, lineHeight: 1.7,
            }}>
              Pay per visit. No commitment required. Book anytime via WhatsApp.
            </p>
          </div>

          <div className="pp-basic-grid">
            {BASIC_PLANS.map((plan) => <BasicCard key={plan.id} plan={plan} />)}
          </div>

          {/* Notes */}
          <div style={{
            marginTop: 28, display: "flex", alignItems: "center",
            justifyContent: "center", gap: 24, flexWrap: "wrap",
          }}>
            {["Doorstep service available", "Pay after the service", "All prices inclusive"].map((note, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(62,156,64,0.5)", display: "inline-block" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 90-DAY PLANS ── */}
      <section style={{ padding: "80px 0 72px", background: "#060606" }}>
        <div className="pp-container">
          <div style={{ marginBottom: 52 }}>
            <Eyebrow text="Subscription Plans" />
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
              <div>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 400,
                  lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10,
                }}>
                  90-Day <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Care Plans</em>
                </h2>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 13,
                  color: "rgba(255,255,255,0.28)", maxWidth: 440, lineHeight: 1.7,
                }}>
                  Commit to consistent care and save. Our 90-day plans are designed for
                  car owners who refuse to let their vehicle look anything less than perfect.
                </p>
              </div>

              {/* "Coming soon" 6-month teaser */}
              <div style={{
                padding: "14px 20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px dashed rgba(255,255,255,0.1)",
                borderRadius: 6,
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, color: "rgba(255,255,255,0.22)",
                letterSpacing: "0.08em",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "rgba(62,156,64,0.4)", display: "inline-block",
                  flexShrink: 0,
                }} />
                <span style={{ color: "#fff" }}>6-Month Plan — Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="pp-sub-grid">
            {SUBSCRIPTION_PLANS.map((plan) => <SubscriptionCard key={plan.id} plan={plan} />)}
          </div>


        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: "72px 0", background: "#080808" }}>
        <div className="pp-container">
          <div style={{
            position: "relative", background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "3px solid #3E9C40",
            borderRadius: 8, padding: "52px 48px",
            overflow: "hidden", textAlign: "center",
          }}>
            <div aria-hidden style={{
              position: "absolute", top: -60, left: "50%",
              transform: "translateX(-50%)",
              width: 400, height: 200,
              background: "radial-gradient(ellipse at center, rgba(62,156,64,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(62,156,64,0.35), transparent)",
            }} />

            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 400,
              lineHeight: 1.1, color: "#fff", marginBottom: 12,
              position: "relative", zIndex: 1,
            }}>
              Not sure which plan? <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Ask us.</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 360,
              margin: "0 auto 32px", lineHeight: 1.75,
              position: "relative", zIndex: 1,
            }}>
              Tell us about your car and usage and we&apos;ll recommend the right plan for you.
            </p>
            <div style={{
              display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
              position: "relative", zIndex: 1,
            }}>
              <button
                onClick={() => sendToWhatsApp("Hello GlossiGo! I'd like help choosing the right plan for my car.")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#3E9C40", color: "#fff",
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 4, border: "none", cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2d7a2f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#3E9C40")}
              >Chat on WhatsApp →</button>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "rgba(255,255,255,0.35)",
                fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
              }}
              >Back to Home</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}