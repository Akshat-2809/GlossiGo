"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   STUDIO PAGE — /studio
   GlossiGo — WhatsApp enquiry same as contact page
───────────────────────────────────────────── */

const WHATSAPP_NUMBER = "919799023966";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book a Slot",
    desc: "Fill in the enquiry form below. Tell us your car, service, and preferred time. We'll confirm your studio appointment within 2 hours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Drop Off",
    desc: "Drive your car to our studio in Jodhpur. Our team receives you, does a quick walk-around inspection, and gets straight to work.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v4h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Expert Detailing",
    desc: "Your car is treated in our climate-controlled bay using professional-grade equipment — paint booths, ceramic coating stations, and precision tools.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Pick Up & Drive",
    desc: "We notify you when it's ready. Inspect every inch, pay only when satisfied. Drive away in a car that looks better than the day you bought it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

const SERVICES_AVAILABLE = [
  { name: "Exterior Foam Wash",      available: true },
  { name: "Interior Deep Clean",     available: true },
  { name: "Paint Correction",        available: true },
  { name: "Ceramic Coating",         available: true },
  { name: "PPF Application",         available: true },
  { name: "Engine Bay Detail",       available: true },
  { name: "Odour Elimination",       available: true },
  { name: "Full Detailing Package",  available: true },
];

const FAQS = [
  {
    q: "How long will my car be at the studio?",
    a: "It depends on the service. A foam wash takes 2–3 hours, paint correction typically a full day, and ceramic coating 1–2 days. We'll give you an exact estimate when you book.",
  },
  {
    q: "Do I need to stay while the work is being done?",
    a: "Not at all. Simply drop off your car, and we'll call or WhatsApp you when it's ready. Most customers head home, to work, or run errands.",
  },
  {
    q: "Where is the studio located?",
    a: "Our studio is in Jodhpur. Once you book, we'll share the exact address and directions on WhatsApp.",
  },
  {
    q: "Can you handle luxury or modified cars?",
    a: "Absolutely. We regularly work with high-end, modified, and vintage vehicles. Our team is trained to handle all types with the care they deserve.",
  },
];

/* ── DateTimePicker ───────────────────────── */
const TIME_SLOTS = [
    "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS_SHORT = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function DateTimePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    if (d < today) return;
    setSelectedDate(d);
    setSelectedSlot(null);
    onChange("");
  };

  const selectSlot = (slot: string) => {
    setSelectedSlot(slot);
    if (selectedDate) {
      const label = `${selectedDate.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}, ${slot}`;
      onChange(label);
    }
  };

  const isToday = (day: number) => new Date(viewYear, viewMonth, day).getTime() === today.getTime();
  const isPast  = (day: number) => new Date(viewYear, viewMonth, day) < today;
  const isSelected = (day: number) =>
    !!selectedDate &&
    selectedDate.getFullYear() === viewYear &&
    selectedDate.getMonth() === viewMonth &&
    selectedDate.getDate() === day;

  const DAY_SIZE = 30;

  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    const timeout = setTimeout(() => setIsMobile(mq.matches), 0);
    return () => {
      mq.removeEventListener("change", handler);
      clearTimeout(timeout);
    };
  }, []);

  const showSlotsPanel = isMobile === null ? true : !isMobile || !!selectedDate;

  return (
    <div>
      <Label>Preferred Drop-off Date & Time</Label>

      {value && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(62,156,64,0.1)", border: "1px solid rgba(62,156,64,0.3)",
          borderRadius: 100, padding: "4px 12px", marginBottom: 10,
        }}>
          <span style={{ color: "#3E9C40", fontSize: 11 }}>✓</span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{value}</span>
          <button type="button"
            onClick={() => { setSelectedDate(null); setSelectedSlot(null); onChange(""); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", fontSize: 14, padding: 0, lineHeight: 1 }}
          >×</button>
        </div>
      )}

      <div className="dtp-wrap" style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
      }}>
        {/* ── LEFT: Calendar ── */}
        <div style={{ flex: "0 0 auto", padding: "12px 12px 14px" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 8,
          }}>
            <button type="button" onClick={prevMonth} disabled={!canGoPrev}
              style={{
                background: "none", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 5, width: 24, height: 24,
                color: canGoPrev ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)",
                cursor: canGoPrev ? "pointer" : "default",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s", flexShrink: 0,
              }}
              onMouseEnter={(e) => canGoPrev && ((e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.45)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M6.5 2L3 5l3.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <span style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 12,
              color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em",
            }}>
              {MONTHS[viewMonth].slice(0, 3)} {viewYear}
            </span>

            <button type="button" onClick={nextMonth}
              style={{
                background: "none", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 5, width: 24, height: 24,
                color: "rgba(255,255,255,0.5)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "border-color 0.2s", flexShrink: 0,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.45)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.5 2L7 5l-3.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: `repeat(7, ${DAY_SIZE}px)`, gap: 2, marginBottom: 2 }}>
            {DAYS_SHORT.map((d) => (
              <div key={d} style={{
                width: DAY_SIZE, textAlign: "center",
                fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 600,
                color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
                padding: "2px 0",
              }}>{d}</div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: `repeat(7, ${DAY_SIZE}px)`, gap: 2 }}>
            {cells.map((day, i) => {
              if (!day) return <div key={i} style={{ width: DAY_SIZE, height: DAY_SIZE }} />;
              const past     = isPast(day);
              const selected = isSelected(day);
              const todayMark = isToday(day);
              return (
                <button
                  key={i} type="button"
                  onClick={() => !past && selectDay(day)}
                  style={{
                    width: DAY_SIZE, height: DAY_SIZE,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: selected ? "#3E9C40" : todayMark ? "rgba(62,156,64,0.12)" : "transparent",
                    border: selected ? "1px solid #3E9C40" : todayMark ? "1px solid rgba(62,156,64,0.35)" : "1px solid transparent",
                    borderRadius: 5,
                    cursor: past ? "default" : "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: selected ? 700 : 400,
                    color: selected ? "#fff" : past ? "rgba(255,255,255,0.15)" : todayMark ? "rgba(62,156,64,0.9)" : "rgba(255,255,255,0.7)",
                    transition: "all 0.12s",
                  }}
                  onMouseEnter={(e) => {
                    if (!past && !selected) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.12)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!past && !selected) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = todayMark ? "rgba(62,156,64,0.9)" : "rgba(255,255,255,0.7)";
                    }
                  }}
                >{day}</button>
              );
            })}
          </div>
        </div>

        {showSlotsPanel && (
          <div className="dtp-divider" style={{ width: 1, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
        )}

        {showSlotsPanel && (
          <div style={{ flex: 1, padding: "12px 12px 14px", display: "flex", flexDirection: "column" }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 9, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: selectedDate ? "rgba(62,156,64,0.75)" : "rgba(255,255,255,0.18)",
              marginBottom: 8,
            }}>
              {selectedDate
                ? `${selectedDate.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}`
                : "Select a date first"}
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5,
              opacity: selectedDate ? 1 : 0.35,
              pointerEvents: selectedDate ? "auto" : "none",
              transition: "opacity 0.2s",
            }}>
              {TIME_SLOTS.map((slot, i) => {
                const active = selectedSlot === slot;
                return (
                  <button
                    key={`${slot}-${i}`} type="button"
                    onClick={() => selectSlot(slot)}
                    style={{
                      background: active ? "#3E9C40" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? "#3E9C40" : "rgba(255,255,255,0.07)"}`,
                      borderRadius: 5,
                      padding: "6px 4px",
                      cursor: "pointer",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11, fontWeight: active ? 700 : 400,
                      color: active ? "#fff" : "rgba(255,255,255,0.5)",
                      transition: "all 0.12s",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.1)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                      }
                    }}
                  >{slot}</button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Enquiry Form ────────────────────────── */
function EnquiryForm() {
  const [form, setForm] = useState({
    name: "", phone: "", car: "", service: "", date: "", message: "",
  });
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*GlossiGo Studio Booking*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Car:* ${form.car || "Not specified"}`,
      `*Service:* ${form.service || "Not specified"}`,
      `*Drop-off:* ${form.date || "Flexible"}`,
      form.message ? `*Notes:* ${form.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 6,
    padding: "13px 16px",
    fontFamily: "'Outfit', sans-serif",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    transition: "border-color .22s, background .22s",
  };

  return (
    <form
      onSubmit={submit}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 12,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      {/* Name + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <Label>Your Name</Label>
          <input
            style={inputStyle} type="text" placeholder="Raj Sharma"
            value={form.name} onChange={set("name")} required
            onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
          />
        </div>
        <div>
          <Label>Phone Number</Label>
          <input
            style={inputStyle} type="tel" placeholder="+91 98765 43210"
            value={form.phone} onChange={set("phone")} required
            onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
          />
        </div>
      </div>

      {/* Car + Service */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <Label>Your Car</Label>
          <input
            style={inputStyle} type="text" placeholder="e.g. Maruti Swift 2022"
            value={form.car} onChange={set("car")}
            onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
          />
        </div>
        <div>
          <Label>Service Required</Label>
          <select
            style={{
              ...inputStyle, cursor: "pointer", appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
              color: form.service ? "#fff" : "rgba(255,255,255,0.2)",
            }}
            value={form.service} onChange={set("service")}
            onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; }}
            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <option value="" disabled>Select a service…</option>
            <option value="foam">Exterior Foam Wash</option>
            <option value="interior">Interior Deep Clean</option>
            <option value="paint">Paint Correction</option>
            <option value="ceramic">Ceramic Coating</option>
            <option value="ppf">PPF Application</option>
            <option value="engine">Engine Bay Detail</option>
            <option value="odour">Odour Elimination</option>
            <option value="full">Full Detailing Package</option>
            <option value="custom">Custom / Ask Us</option>
          </select>
        </div>
      </div>

      {/* Preferred date — Calendar + Time Slot Picker */}
      <DateTimePicker
        value={form.date}
        onChange={(val) => setForm((f) => ({ ...f, date: val }))}
      />

      {/* Message */}
      <div>
        <Label>Additional Notes</Label>
        <textarea
          style={{ ...inputStyle, resize: "vertical" }} rows={3}
          placeholder="Any special requests, specific concerns about the car, or questions…"
          value={form.message} onChange={set("message")}
          onFocus={(e) => { e.target.style.borderColor = "rgba(62,156,64,0.5)"; e.target.style.background = "rgba(62,156,64,0.04)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
          background: "#3E9C40", color: "#fff",
          border: "1.5px solid #3E9C40",
          fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.16em", textTransform: "uppercase",
          padding: "15px 36px", borderRadius: 6, cursor: "pointer",
          transition: "background .22s, color .22s, transform .15s",
          marginTop: 4,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "#3E9C40";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#3E9C40";
          (e.currentTarget as HTMLElement).style.color = "#fff";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
        Book Studio Slot on WhatsApp
      </button>

      <p style={{
        fontFamily: "'Outfit', sans-serif", fontSize: 11,
        color: "rgba(255,255,255,0.18)", textAlign: "center", lineHeight: 1.6,
      }}>
        Opens WhatsApp with your details pre-filled — just hit Send.
      </p>
    </form>
  );
}

/* ── FAQ Accordion ───────────────────────── */
function FaqItem({ item }: { item: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
    }}>
      {open && (
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: 2, background: "#3E9C40", borderRadius: 2,
        }} />
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          width: "100%", padding: `20px ${open ? "0 20px 20px" : "0 20px"}`,
          paddingLeft: open ? 16 : 0,
          background: "transparent", border: "none", cursor: "pointer",
          gap: 16, textAlign: "left",
          transition: "padding-left 0.2s",
        }}
      >
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
          color: open ? "#fff" : "rgba(255,255,255,0.55)",
          transition: "color 0.2s",
        }}>
          {item.q}
        </span>
        <span style={{
          width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
          border: `1px solid ${open ? "rgba(62,156,64,0.45)" : "rgba(255,255,255,0.1)"}`,
          background: open ? "rgba(62,156,64,0.08)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.25s",
          transform: open ? "rotate(45deg)" : "none",
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke={open ? "#3E9C40" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "200px" : "0",
        opacity: open ? 1 : 0,
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
        paddingLeft: open ? 16 : 0,
      } as React.CSSProperties}>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
          lineHeight: 1.78, color: "rgba(255,255,255,0.35)",
          paddingBottom: 22, maxWidth: 560,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ── Label ───────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: "block", fontFamily: "'Outfit', sans-serif",
      fontSize: 9.5, fontWeight: 600, letterSpacing: "0.2em",
      textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
      marginBottom: 8,
    }}>
      {children}
    </label>
  );
}

/* ── PAGE ────────────────────────────────── */
export default function StudioPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #fff; font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; }

        .dp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .dp-how-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .dp-how-card {
          background: #0a0a0a;
          padding: 32px 26px;
          transition: background 0.25s;
        }
        .dp-how-card:hover { background: #0f1a0f; }

        .dp-enquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 48px;
          align-items: start;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes dsPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }

        @media (max-width: 1024px) {
          .dp-how-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 820px) {
          .dp-enquiry-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .dp-how-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .dp-timeslot-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .dtp-wrap { flex-direction: column !important; }
          .dtp-wrap > div:nth-child(2) { width: 100% !important; height: 1px !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", background: "#060606",
        overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Top line */}
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
          fontSize: "clamp(100px, 18vw, 220px)",
          fontStyle: "italic", fontWeight: 400,
          color: "rgba(255,255,255,0.018)",
          whiteSpace: "nowrap", lineHeight: 1,
          userSelect: "none", letterSpacing: "-6px",
          pointerEvents: "none",
        }}>Studio</div>

        <div className="dp-container" style={{ position: "relative", zIndex: 1, padding: "96px 24px 80px" }}>
          {/* Breadcrumb */}
          <div className="fu" style={{
            animationDelay: "0.05s",
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 28,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: "rgba(62,156,64,0.75)" }}>Studio</span>
          </div>

          <div style={{
            display: "flex", gap: 64, alignItems: "flex-start", flexWrap: "wrap",
          }}>
            {/* Left: headline */}
            <div style={{ flex: "1 1 340px", maxWidth: 560 }}>
              <div className="fu" style={{ animationDelay: "0.1s", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
                    letterSpacing: "0.25em", textTransform: "uppercase",
                    color: "rgba(62,156,64,0.85)",
                  }}>GlossiGo Studio</span>
                </div>
              </div>

              <h1 className="fu" style={{
                animationDelay: "0.18s",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
                lineHeight: 1.0, letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 24,
              }}>
                Where Precision<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Meets the Bay.</em>
              </h1>

              <p className="fu" style={{
                animationDelay: "0.26s",
                fontFamily: "'Outfit', sans-serif", fontSize: 15,
                lineHeight: 1.78, color: "rgba(255,255,255,0.38)",
                marginBottom: 36, maxWidth: 460,
              }}>
                Bring your car to our professional detailing studio — equipped for ceramic coatings,
                paint correction, PPF, and full interior restoration. Every job treated like
                it&apos;s the only car in the bay.
              </p>

              {/* Availability pill */}
              <div className="fu" style={{
                animationDelay: "0.35s",
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(62,156,64,0.06)",
                border: "1px solid rgba(62,156,64,0.18)",
                borderRadius: 100, padding: "8px 18px", marginBottom: 32,
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#3E9C40", boxShadow: "0 0 8px rgba(62,156,64,0.9)",
                  animation: "dsPulse 2s ease-in-out infinite",
                }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(62,156,64,0.8)",
                }}>Studio open in Jodhpur</span>
              </div>

              <div className="fu" style={{
                animationDelay: "0.4s",
                display: "flex", gap: 12, flexWrap: "wrap",
              }}>
                <a href="#enquiry" style={{
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
                  Book a Studio Slot →
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "rgba(255,255,255,0.4)",
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
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: quick facts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 220 }}>
              {[
                { label: "Professional Bay", desc: "Climate-controlled studio" },
                { label: "All Services", desc: "Including PPF & Ceramic" },
                { label: "Drop & Go", desc: "No waiting around" },
                { label: "Book in 2 minutes", desc: "WhatsApp confirmation" },
              ].map((f) => (
                <div key={f.label} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 6,
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#3E9C40", flexShrink: 0, marginTop: 5,
                    boxShadow: "0 0 6px rgba(62,156,64,0.6)",
                  }} />
                  <div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2,
                    }}>{f.label}</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 11, color: "rgba(255,255,255,0.3)",
                    }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="dp-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              Your Studio <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Experience</em>
            </h2>
          </div>

          <div className="dp-how-grid">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="dp-how-card">
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 13, color: "rgba(62,156,64,0.4)", marginBottom: 16,
                }}>{step.step}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "rgba(62,156,64,0.07)",
                  border: "1px solid rgba(62,156,64,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(62,156,64,0.7)", marginBottom: 16,
                }}>
                  {step.icon}
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700,
                  color: "#fff", marginBottom: 8,
                }}>{step.title}</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 13,
                  lineHeight: 1.72, color: "rgba(255,255,255,0.3)",
                }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES AVAILABLE + ENQUIRY FORM
      ══════════════════════════════════════ */}
      <section id="enquiry" style={{ background: "#060606", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="dp-container">
          <div className="dp-enquiry-grid">

            {/* Left: services list + info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 26, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(62,156,64,0.85)" }}>Send an Enquiry</span>
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 400,
                lineHeight: 1.05, letterSpacing: "-0.02em",
                color: "#fff", marginBottom: 16,
              }}>
                Book Your<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Studio Slot</em>
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                lineHeight: 1.75, color: "rgba(255,255,255,0.3)",
                marginBottom: 32,
              }}>
                Fill in the form and we&apos;ll confirm your studio appointment on WhatsApp.
              </p>

              {/* Services available */}
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 8, padding: "24px 20px", marginBottom: 24,
              }}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)", marginBottom: 16,
                }}>Services at studio</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {SERVICES_AVAILABLE.map((s) => (
                    <div key={s.name} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 12,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{
                          fontSize: 12,
                          color: s.available ? "#3E9C40" : "rgba(255,255,255,0.2)",
                        }}>{s.available ? "✓" : "✕"}</span>
                        <span style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 13,
                          color: s.available ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)",
                        }}>{s.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact */}
              <div style={{
                padding: "18px 20px",
                background: "rgba(62,156,64,0.04)",
                border: "1px solid rgba(62,156,64,0.15)",
                borderRadius: 6, borderLeft: "3px solid #3E9C40",
              }}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600,
                  color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
                  textTransform: "uppercase", marginBottom: 6,
                }}>Prefer to call?</div>
                <a href="tel:+919799023966" style={{
                  fontFamily: "'DM Serif Display', serif", fontSize: 22,
                  color: "#fff", textDecoration: "none", letterSpacing: "-0.01em",
                  display: "block",
                }}>+91 97990 23966</a>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 11,
                  color: "rgba(255,255,255,0.25)", marginTop: 4,
                }}>Mon – Sun, 9 AM – 8 PM</div>
              </div>
            </div>

            {/* Right: form */}
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="dp-container" style={{ maxWidth: 760 }}>
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
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{ background: "#060606", padding: "80px 0" }}>
        <div className="dp-container">
          <div style={{
            position: "relative",
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderLeft: "3px solid #3E9C40",
            borderRadius: 8, padding: "60px 56px",
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
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 14,
              position: "relative", zIndex: 1,
            }}>
              Your Car Deserves<br />
              <em style={{ fontStyle: "italic", color: "#3E9C40" }}>The Full Treatment.</em>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.3)", maxWidth: 380,
              margin: "0 auto 36px", lineHeight: 1.75,
              position: "relative", zIndex: 1,
            }}>
              Drop it off. We&apos;ll take care of the rest.
            </p>
            <div style={{
              display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
              position: "relative", zIndex: 1,
            }}>
              <a href="#enquiry" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#3E9C40", color: "#fff",
                fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 4, textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d7a2f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3E9C40")}
              >Book Studio Slot →</a>
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
    </>
  );
}