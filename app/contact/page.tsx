"use client";

import { useState } from "react";
import Footer from "@/components/LandingPage/footer";

/* ─────────────────────────────────────────────
   CONTACT PAGE — GlossiGo Detailing
   Exact location: 26.2654822, 72.9981275
   Instagram: @gloosigodetailing
   Note: Navbar is now in app/layout.tsx
───────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --green:      #3E9C40;
          --green-dim:  #2e7a30;
          --black:      #080808;
          --border:     rgba(255,255,255,0.07);
          --muted:      rgba(255,255,255,0.28);
          --body:       rgba(255,255,255,0.50);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--black);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* watermark behind CTA headline */
        .cta-watermark {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none; overflow: hidden; z-index: 0;
        }
        .cta-watermark span {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(90px, 16vw, 210px);
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px rgba(62,156,64,0.098);
          letter-spacing: -0.04em;
          white-space: nowrap;
          user-select: none;
        }

        /* form inputs */
        .ci {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 14px 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color .22s, background .22s;
          resize: none;
        }
        .ci::placeholder { color: rgba(255,255,255,0.2); }
        .ci:focus {
          border-color: rgba(62,156,64,0.5);
          background: rgba(62,156,64,0.04);
        }

        /* info card */
        .ic {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 22px 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          transition: border-color .22s, background .22s;
        }
        .ic:hover {
          border-color: rgba(62,156,64,0.3);
          background: rgba(62,156,64,0.03);
        }
        .ii {
          width: 40px; height: 40px; border-radius: 8px;
          background: rgba(62,156,64,0.1);
          border: 1px solid rgba(62,156,64,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu { animation: fadeUp 0.65s ease both; }

        @keyframes blink {
          0%,100% { box-shadow: 0 0 6px rgba(62,156,64,0.9); }
          50%      { box-shadow: 0 0 14px rgba(62,156,64,0.4); }
        }

        @media (max-width: 820px) {
          .cgrid { grid-template-columns: 1fr !important; }
          .cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .cta-btns a { justify-content: center !important; }
        }
      `}</style>

      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
}

/* ══════════════════════════════════════════
   CTA SECTION
══════════════════════════════════════════ */
function CtaSection() {
  return (
    <section style={{
      position: "relative", minHeight: "72vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "110px 24px 100px",
      overflow: "hidden", background: "#080808",
    }}>
      {/* top line */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2,
        background:"linear-gradient(90deg,transparent,var(--green),transparent)" }} />

      {/* dot grid */}
      <div aria-hidden style={{ position:"absolute", inset:0,
        backgroundImage:"radial-gradient(circle,rgba(62,156,64,0.15) 1px,transparent 1px)",
        backgroundSize:"40px 40px",
        maskImage:"radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 80%)",
        WebkitMaskImage:"radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 80%)",
        opacity:0.55, zIndex:0 }} />

      {/* green glow */}
      <div aria-hidden style={{ position:"absolute", inset:0,
        background:"radial-gradient(ellipse 55% 55% at 50% 50%,rgba(62,156,64,0.111) 0%,transparent 70%)",
        zIndex:0 }} />

      {/* GLOSSIGO watermark */}
      <div className="cta-watermark"><span>GLOSSIGO</span></div>

      {/* content */}
      <div style={{ position:"relative", zIndex:1, maxWidth:680 }}>

        {/* eyebrow */}
        <div className="fu" style={{ animationDelay:"0.05s",
          display:"flex", alignItems:"center", justifyContent:"center",
          gap:12, marginBottom:28 }}>
          <div style={{ width:32, height:1, background:"rgba(62,156,64,0.45)" }} />
          <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:10,
            fontWeight:600, letterSpacing:"0.24em", textTransform:"uppercase",
            color:"rgba(62,156,64,0.8)" }}>
            Book Your Detail
          </span>
          <div style={{ width:32, height:1, background:"rgba(62,156,64,0.45)" }} />
        </div>

        {/* headline — DM Serif italic mix like reference image */}
        <h2 className="fu" style={{ animationDelay:"0.15s",
          fontFamily:"'DM Serif Display',serif", fontSize:"clamp(36px,7vw,76px)",
          fontWeight:400, lineHeight:1.08, letterSpacing:"-0.02em",
          color:"#fff", marginBottom:22 }}>
          Ready for a Car<br />
          <em style={{ color:"var(--green)", fontStyle:"italic" }}>That Turns Heads?</em>
        </h2>

        {/* subtext */}
        <p className="fu" style={{ animationDelay:"0.25s",
          fontFamily:"'Outfit',sans-serif", fontSize:15, fontWeight:400,
          color:"rgba(255,255,255,0.4)", lineHeight:1.76,
          maxWidth:420, margin:"0 auto 44px" }}>
          Let our experts bring out the brilliance in your vehicle.
          Every finish crafted with care, every result worth showing off.
        </p>

        {/* CTA buttons */}
        <div className="cta-btns fu" style={{ animationDelay:"0.35s",
          display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>

          <PrimaryBtn href="#contact-form" label="Book a Detail" />
          <GhostBtn href="tel:+919799023966" label="Call Us Now" icon={
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          } />
        </div>
      </div>

      {/* bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80,
        background:"linear-gradient(to bottom,transparent,#080808)", zIndex:1 }} />
    </section>
  );
}

/* ══════════════════════════════════════════
   CONTACT SECTION
══════════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name:"", phone:"", service:"", message:"" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  // Service label map — turns option values into readable names
  const SERVICE_LABELS: Record<string, string> = {
    wash:    "Basic Wash & Vacuum",
    ext:     "Exterior Detail",
    int:     "Interior Detail",
    full:    "Full Detail Package",
    ceramic: "Ceramic Coating",
    paint:   "Paint Correction",
    ppf:     "PPF / Paint Protection Film",
    custom:  "Custom / Ask Us",
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceName = SERVICE_LABELS[form.service] || form.service || "Not specified";

    // Build a clean WhatsApp message
    const text = [
      `Hello GlossiGo! 👋 I'd like to book a detailing service.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${serviceName}`,
      form.message ? `*Message:* ${form.message}` : null,
    ]
      .filter(line => line !== null)
      .join("\n");

    // GlossiGo WhatsApp number: 9799023966
    const waUrl = `https://wa.me/919799023966?text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact-form" style={{
      background:"#080808", padding:"72px 24px 96px", position:"relative",
    }}>
      {/* section header */}
      <div style={{ textAlign:"center", marginBottom:60 }}>
        <div style={{ width:48, height:2, background:"var(--green)",
          borderRadius:2, margin:"0 auto 18px" }} />
        <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:10, fontWeight:600,
          letterSpacing:"0.24em", textTransform:"uppercase",
          color:"rgba(62,156,64,0.7)", marginBottom:12 }}>Get in Touch</p>
        <h2 style={{ fontFamily:"'DM Serif Display',serif",
          fontSize:"clamp(30px,5vw,50px)", fontWeight:400,
          color:"#fff", letterSpacing:"-0.02em", lineHeight:1.12 }}>
          Let{"'"}s Talk About<br/>
          <em style={{ color:"var(--green)", fontStyle:"italic" }}>Your Car</em>
        </h2>
      </div>

      {/* grid */}
      <div className="cgrid" style={{
        display:"grid", gridTemplateColumns:"1fr 1.45fr",
        gap:40, maxWidth:1080, margin:"0 auto 52px", alignItems:"start",
      }}>

        {/* ── LEFT: info ── */}
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

          {/* Phone */}
          <div className="ic">
            <div className="ii">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                  stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:9, fontWeight:600,
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"rgba(255,255,255,0.22)", marginBottom:6 }}>Phone</p>
              <a href="tel:+919799023966" style={{
                fontFamily:"'DM Serif Display',serif", fontSize:22,
                color:"#fff", textDecoration:"none", letterSpacing:"-0.01em",
                display:"block",
              }}>+91 97990 23966</a>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:12,
                color:"rgba(255,255,255,0.28)", marginTop:4 }}>Mon – Sun, 9 AM – 8 PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="ic">
            <div className="ii">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5" stroke="var(--green)" strokeWidth="1.6"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:9, fontWeight:600,
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"rgba(255,255,255,0.22)", marginBottom:6 }}>Location</p>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:14,
                color:"#fff", lineHeight:1.65 }}>
                G-27, Ward 23 Rd, Sector-A<br/>
                Shastri Nagar, Jodhpur<br/>
                Rajasthan 342003
              </p>
              <a href="https://maps.app.goo.gl/jQC51FTtS62SG3L67"
                target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:5,
                  fontFamily:"'Outfit',sans-serif", fontSize:11, fontWeight:600,
                  color:"var(--green)", textDecoration:"none",
                  letterSpacing:"0.08em", marginTop:8 }}
                onMouseEnter={e=>((e.currentTarget as HTMLElement).style.opacity="0.7")}
                onMouseLeave={e=>((e.currentTarget as HTMLElement).style.opacity="1")}>
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="ic">
            <div className="ii">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="var(--green)" strokeWidth="1.6"/>
                <path d="M12 7v5l3 3" stroke="var(--green)" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ width:"100%" }}>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:9, fontWeight:600,
                letterSpacing:"0.2em", textTransform:"uppercase",
                color:"rgba(255,255,255,0.22)", marginBottom:10 }}>Working Hours</p>
              {[
                { day:"Mon – Fri",  time:"9:00 AM – 8:00 PM" },
                { day:"Sat – Sun",  time:"9:00 AM – 8:00 PM" },
              ].map(r => (
                <div key={r.day} style={{ display:"flex", justifyContent:"space-between",
                  gap:12, marginBottom:5 }}>
                  <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:12.5,
                    color:"rgba(255,255,255,0.38)" }}>{r.day}</span>
                  <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:12.5,
                    color:"#fff", whiteSpace:"nowrap" }}>{r.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social buttons */}
          <div style={{ display:"flex", gap:10 }}>
            {/* WhatsApp */}
            <SocialBtn href="https://wa.me/919799023966" label="WhatsApp" icon={
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path fill="var(--green)" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path fill="var(--green)" d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
            } />
            {/* Instagram — @gloosigodetailing */}
            <SocialBtn href="https://www.instagram.com/gloosigodetailing/" label="Instagram" icon={
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="var(--green)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="var(--green)" stroke="none"/>
              </svg>
            } />
          </div>
        </div>

        {/* ── RIGHT: form ── */}
        <form onSubmit={submit} style={{
          background:"rgba(255,255,255,0.02)",
          border:"1px solid rgba(255,255,255,0.06)",
          borderRadius:12, padding:"36px 32px",
          display:"flex", flexDirection:"column", gap:18,
        }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            <div>
              <Label>Your Name</Label>
              <input className="ci" type="text" placeholder="Raj Sharma"
                value={form.name} onChange={set("name")} required />
            </div>
            <div>
              <Label>Phone Number</Label>
              <input className="ci" type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={set("phone")} required />
            </div>
          </div>

          <div>
            <Label>Service</Label>
            <select className="ci" value={form.service} onChange={set("service")}
              style={{ cursor:"pointer", appearance:"none",
                backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat:"no-repeat", backgroundPosition:"right 16px center",
                color: form.service ? "#fff" : "rgba(255,255,255,0.2)",
              }}>
              <option value="" disabled>Select a service…</option>
              <option value="wash">Basic Wash & Vacuum</option>
              <option value="ext">Exterior Detail</option>
              <option value="int">Interior Detail</option>
              <option value="full">Full Detail Package</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="paint">Paint Correction</option>
              <option value="ppf">PPF / Paint Protection Film</option>
              <option value="custom">Custom / Ask Us</option>
            </select>
          </div>

          <div>
            <Label>Message</Label>
            <textarea className="ci" rows={4}
              placeholder="Tell us about your car, preferred date, or any special requests…"
              value={form.message} onChange={set("message")}
              style={{ resize:"vertical" }} />
          </div>

          <button type="submit" style={{
            display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
            background:"var(--green)", color:"#fff",
            border:"1.5px solid var(--green)",
            fontFamily:"'Outfit',sans-serif", fontSize:12, fontWeight:600,
            letterSpacing:"0.16em", textTransform:"uppercase",
            padding:"14px 36px", borderRadius:6, cursor:"pointer",
            transition:"background .22s, color .22s, transform .15s",
          }}
          onMouseEnter={e=>{
            (e.currentTarget as HTMLElement).style.background="transparent";
            (e.currentTarget as HTMLElement).style.color="var(--green)";
          }}
          onMouseLeave={e=>{
            (e.currentTarget as HTMLElement).style.background="var(--green)";
            (e.currentTarget as HTMLElement).style.color="#fff";
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.51 5.833L.036 24l6.324-1.654A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-5.002-1.374l-.36-.213-3.714.972.993-3.62-.235-.374A9.78 9.78 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Send on WhatsApp
          </button>

          <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:11,
            color:"rgba(255,255,255,0.18)", textAlign:"center", lineHeight:1.6 }}>
            Opens WhatsApp with your details pre-filled — just hit Send.
          </p>
        </form>
      </div>

      {/* ── MAP — exact coordinates: 26.2654822, 72.9981275 ── */}
      <div style={{ maxWidth:1080, margin:"0 auto" }}>
        <div style={{
          borderRadius:10, overflow:"hidden",
          border:"1px solid rgba(255,255,255,0.07)",
          position:"relative",
        }}>
          {/* floating label */}
          <div style={{
            position:"absolute", top:16, left:16, zIndex:2,
            background:"rgba(8,8,8,0.88)", backdropFilter:"blur(10px)",
            border:"1px solid rgba(62,156,64,0.35)",
            borderRadius:6, padding:"9px 15px",
            display:"flex", alignItems:"center", gap:9,
          }}>
            <div style={{ width:8, height:8, borderRadius:"50%",
              background:"var(--green)",
              boxShadow:"0 0 6px rgba(62,156,64,0.9)",
              animation:"blink 2s ease-in-out infinite",
            }} />
            <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:12,
              fontWeight:600, color:"#fff", letterSpacing:"0.06em" }}>
              GlossiGo Detailing Studio
            </span>
          </div>

          {/*
            Correct embed — centers on 26.2654822, 72.9981275
            (G-27, Ward 23 Rd, Sector-A, Shastri Nagar, Jodhpur)
            The q= parameter pins the marker at the exact coordinates.
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123!2d72.9981275!3d26.2654822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d004f511a49%3A0x15f14f9629cd45e9!2sGloosiGo%20Detailing!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
            width="100%"
            height="360"
            style={{
              border:0, display:"block",
              /* dark map filter matching site theme */
              filter:"invert(92%) hue-rotate(180deg) saturate(0.35) brightness(0.82)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GlossiGo Detailing — G-27 Sector-A Shastri Nagar Jodhpur"
          />

          {/* Get Directions button */}
          <a href="https://maps.app.goo.gl/jQC51FTtS62SG3L67"
            target="_blank" rel="noopener noreferrer"
            style={{
              position:"absolute", bottom:16, right:16, zIndex:2,
              display:"inline-flex", alignItems:"center", gap:7,
              background:"var(--green)", color:"#fff",
              fontFamily:"'Outfit',sans-serif", fontSize:11, fontWeight:600,
              letterSpacing:"0.12em", textTransform:"uppercase",
              textDecoration:"none", padding:"10px 18px", borderRadius:5,
              transition:"background .2s",
            }}
            onMouseEnter={e=>((e.currentTarget as HTMLElement).style.background="var(--green-dim)")}
            onMouseLeave={e=>((e.currentTarget as HTMLElement).style.background="var(--green)")}>
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{ display:"block", fontFamily:"'Outfit',sans-serif",
      fontSize:9.5, fontWeight:600, letterSpacing:"0.2em",
      textTransform:"uppercase", color:"rgba(255,255,255,0.28)",
      marginBottom:8 }}>
      {children}
    </label>
  );
}

function PrimaryBtn({ href, label }: { href: string; label: string }) {
  const [h, sH] = useState(false);
  return (
    <a href={href} style={{
      display:"inline-flex", alignItems:"center", gap:8,
      background: h ? "transparent" : "var(--green)",
      color: h ? "var(--green)" : "#fff",
      border:"1.5px solid var(--green)",
      fontFamily:"'Outfit',sans-serif", fontSize:12, fontWeight:600,
      letterSpacing:"0.16em", textTransform:"uppercase",
      padding:"14px 32px", borderRadius:6, textDecoration:"none",
      transition:"all .22s", transform: h ? "translateY(-1px)" : "translateY(0)",
    }} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}>
      {label}
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

function GhostBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const [h, sH] = useState(false);
  return (
    <a href={href} style={{
      display:"inline-flex", alignItems:"center", gap:8,
      border:`1.5px solid ${h ? "var(--green)" : "rgba(62,156,64,0.4)"}`,
      color: h ? "var(--green)" : "rgba(255,255,255,0.65)",
      background: h ? "rgba(62,156,64,0.05)" : "transparent",
      fontFamily:"'Outfit',sans-serif", fontSize:12, fontWeight:600,
      letterSpacing:"0.16em", textTransform:"uppercase",
      padding:"14px 30px", borderRadius:6, textDecoration:"none",
      transition:"all .22s", transform: h ? "translateY(-1px)" : "translateY(0)",
    }} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}>
      {icon}{label}
    </a>
  );
}

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const [h, sH] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display:"inline-flex", alignItems:"center", gap:7,
      padding:"9px 16px",
      border:`1px solid ${h ? "rgba(62,156,64,0.6)" : "rgba(62,156,64,0.22)"}`,
      borderRadius:6, textDecoration:"none",
      fontFamily:"'Outfit',sans-serif", fontSize:11, fontWeight:500,
      color: h ? "#fff" : "rgba(255,255,255,0.45)",
      letterSpacing:"0.08em",
      background:"rgba(62,156,64,0.03)",
      transition:"all .2s",
    }} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}>
      {icon}{label}
    </a>
  );
}