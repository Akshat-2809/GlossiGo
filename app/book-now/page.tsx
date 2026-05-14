"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function BookNowModal() {
  const router = useRouter();
  const [mounted,  setMounted]  = useState(false);
  const [leaving,  setLeaving]  = useState(false);
  const [selected, setSelected] = useState<"doorstep" | "studio" | null>(null);

  const close = useCallback(() => {
    setLeaving(true);
    setTimeout(() => router.back(), 240);
  }, [router]);

  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [close]);

  const pick = (type: "doorstep" | "studio") => {
    setSelected(type);
    setTimeout(() => {
      router.push(type === "doorstep" ? "/doorstep" : "/studio");
    }, 260);
  };

  const visible = mounted && !leaving;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── backdrop ── */
        .bn-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(4,4,4,0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          transition: opacity 0.24s ease;
        }
        .bn-backdrop.in  { opacity: 1; }
        .bn-backdrop.out { opacity: 0; }

        /* ── modal shell ── */
        .bn-modal {
          position: relative;
          width: 100%;
          max-width: 680px;
          background: #0e0e0e;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(62,156,64,0.07);
          transition: opacity 0.24s ease, transform 0.28s cubic-bezier(0.34,1.4,0.64,1);
          /* never taller than viewport */
          max-height: calc(100vh - 32px);
          overflow-y: auto;
        }
        .bn-modal.in  { opacity: 1; transform: translateY(0) scale(1); }
        .bn-modal.out { opacity: 0; transform: translateY(14px) scale(0.97); }

        /* top green rule */
        .bn-modal::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3E9C40, transparent);
          flex-shrink: 0;
        }

        /* ── close button ── */
        .bn-close {
          position: absolute;
          top: 16px; right: 16px;
          width: 30px; height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.38);
          transition: background 0.18s, color 0.18s;
          z-index: 10;
          flex-shrink: 0;
        }
        .bn-close:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* ══════════════════════════
           DESKTOP cards (side-by-side)
        ══════════════════════════ */
        .bn-option {
          flex: 1;
          padding: 26px 24px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          text-align: left;
          transition: border-color 0.22s, background 0.22s, transform 0.2s;
        }
        .bn-option::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(62,156,64,0.5), transparent);
          opacity: 0;
          transition: opacity 0.22s;
        }
        .bn-option:hover,
        .bn-option.sel {
          border-color: rgba(62,156,64,0.42);
          background: rgba(62,156,64,0.05);
          transform: translateY(-3px);
        }
        .bn-option:hover::before,
        .bn-option.sel::before { opacity: 1; }

        .bn-icon-box {
          width: 44px; height: 44px;
          border-radius: 9px;
          background: rgba(62,156,64,0.08);
          border: 1px solid rgba(62,156,64,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .bn-option:hover .bn-icon-box,
        .bn-option.sel .bn-icon-box {
          background: rgba(62,156,64,0.14);
          border-color: rgba(62,156,64,0.4);
        }

        .bn-feats {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .bn-feats li {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 11.5px;
          color: rgba(255,255,255,0.32);
        }
        .bn-feats li .d {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(62,156,64,0.5); flex-shrink: 0;
        }

        .bn-cta-row {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #3E9C40;
          opacity: 0.65;
          transition: opacity 0.2s, gap 0.18s;
        }
        .bn-option:hover .bn-cta-row,
        .bn-option.sel .bn-cta-row { opacity: 1; gap: 10px; }

        /* OR vertical divider */
        .bn-or {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-shrink: 0;
          padding: 0;
        }
        .bn-or .or-line {
          width: 1px; height: 52px;
          background: rgba(255,255,255,0.05);
        }
        .bn-or .or-txt {
          font-family: 'Outfit', sans-serif;
          font-size: 9px; font-weight: 500;
          color: rgba(255,255,255,0.14);
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* ══════════════════════════
           MOBILE  ≤ 560px
           Cards become compact horizontal rows
        ══════════════════════════ */
        @media (max-width: 560px) {

          /* stack the two cards + divider vertically */
          .bn-cards { flex-direction: column !important; gap: 10px !important; }

          /* divider becomes a thin horizontal rule with "or" inline */
          .bn-or {
            flex-direction: row !important;
            padding: 0 !important;
            gap: 10px !important;
          }
          .bn-or .or-line { width: 100% !important; height: 1px !important; flex: 1; }

          /* each card becomes a horizontal strip, not a tall column */
          .bn-option {
            flex-direction: row !important;
            align-items: center !important;
            padding: 18px 20px !important;
            gap: 16px !important;
            transform: none !important; /* disable lift on mobile - feels wrong */
          }
          .bn-option:hover,
          .bn-option.sel { transform: none !important; }

          /* icon stays left */
          .bn-icon-box { margin-bottom: 0 !important; flex-shrink: 0; }

          /* content fills remaining space */
          .bn-option-body { flex: 1; min-width: 0; }

          /* hide features list on mobile - not enough space */
          .bn-feats { display: none !important; }

          /* compact headline */
          .bn-option h3 {
            font-size: 18px !important;
            line-height: 1.15 !important;
          }

          /* move cta row inline, smaller */
          .bn-cta-row {
            margin-top: 6px !important;
            font-size: 9.5px !important;
            opacity: 0.6 !important;
          }

          /* tag pill smaller */
          .bn-tag { margin-bottom: 6px !important; }

          /* desc shorter on mobile */
          .bn-desc { display: none !important; }

          /* modal shell: less padding */
          .bn-inner { padding: 20px 18px 24px !important; }

          /* header tighter */
          .bn-header { margin-bottom: 20px !important; }
          .bn-header h2 { font-size: 22px !important; }
        }

        @keyframes blink {
          0%,100% { opacity: 1; box-shadow: 0 0 5px rgba(62,156,64,0.8); }
          50%      { opacity: 0.45; box-shadow: none; }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        className={`bn-backdrop ${visible ? "in" : "out"}`}
        onMouseDown={e => { if (e.target === e.currentTarget) close(); }}
        role="dialog"
        aria-modal="true"
        aria-label="Choose booking type"
      >
        <div className={`bn-modal ${visible ? "in" : "out"}`}>

          {/* Close × */}
          <button className="bn-close" onClick={close} aria-label="Close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Inner padding wrapper */}
          <div className="bn-inner" style={{ padding: "26px 28px 30px" }}>

            {/* ── Header ── */}
            <div className="bn-header" style={{ marginBottom: 24, paddingRight: 36 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 9, marginBottom: 10,
              }}>
                <div style={{ width: 18, height: 1, background: "rgba(62,156,64,0.45)" }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 9, fontWeight: 600,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "rgba(62,156,64,0.75)",
                }}>Book a Detail</span>
              </div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(20px, 4vw, 30px)",
                fontWeight: 400, lineHeight: 1.1,
                letterSpacing: "-0.02em", color: "#fff",
              }}>
                How would you like us<br />
                <em style={{ fontStyle: "italic", color: "#3E9C40" }}>
                  to detail your car?
                </em>
              </h2>
            </div>

            {/* ── Cards row ── */}
            <div
              className="bn-cards"
              style={{ display: "flex", gap: 12, alignItems: "stretch" }}
            >

              {/* ── DOORSTEP card ── */}
              <div
                className={`bn-option ${selected === "doorstep" ? "sel" : ""}`}
                onClick={() => pick("doorstep")}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && pick("doorstep")}
              >
                <div className="bn-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#3E9C40" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"/>
                    <path d="M16 8h4l3 3v4h-7V8z"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>

                {/* body wrapper — targeted by mobile CSS */}
                <div className="bn-option-body">
                  {/* tag */}
                  <div className="bn-tag" style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    marginBottom: 8, padding: "3px 8px", borderRadius: 100,
                    background: "rgba(62,156,64,0.07)",
                    border: "1px solid rgba(62,156,64,0.18)",
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#3E9C40",
                      animation: "blink 2s ease-in-out infinite",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 8.5, fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "rgba(62,156,64,0.8)",
                    }}>Jodhpur Citywide</span>
                  </div>

                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(19px, 2.8vw, 24px)",
                    fontWeight: 400, color: "#fff",
                    lineHeight: 1.12, letterSpacing: "-0.01em",
                  }}>
                    Doorstep{" "}
                    <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Detailing</em>
                  </h3>

                  <p className="bn-desc" style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12, color: "rgba(255,255,255,0.32)",
                    lineHeight: 1.6, marginTop: 6,
                  }}>
                    We come to you — home, office, or parking lot.
                  </p>

                  <ul className="bn-feats">
                    {[
                      "We bring all equipment",
                      "Studio-grade quality",
                      "Book via WhatsApp",
                    ].map(f => (
                      <li key={f}><span className="d" />{f}</li>
                    ))}
                  </ul>

                  <div className="bn-cta-row">
                    Book Doorstep
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── OR divider ── */}
              <div className="bn-or">
                <div className="or-line" />
                <span className="or-txt">or</span>
                <div className="or-line" />
              </div>

              {/* ── STUDIO card ── */}
              <div
                className={`bn-option ${selected === "studio" ? "sel" : ""}`}
                onClick={() => pick("studio")}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && pick("studio")}
              >
                <div className="bn-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#3E9C40" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>

                <div className="bn-option-body">
                  {/* tag */}
                  <div className="bn-tag" style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    marginBottom: 8, padding: "3px 8px", borderRadius: 100,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "rgba(255,255,255,0.25)", flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 8.5, fontWeight: 600,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.28)",
                    }}>Shastri Nagar</span>
                  </div>

                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(19px, 2.8vw, 24px)",
                    fontWeight: 400, color: "#fff",
                    lineHeight: 1.12, letterSpacing: "-0.01em",
                  }}>
                    Studio{" "}
                    <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Visit</em>
                  </h3>

                  <p className="bn-desc" style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12, color: "rgba(255,255,255,0.32)",
                    lineHeight: 1.6, marginTop: 6,
                  }}>
                    Drive in for the full GlossiGo experience — every service available.
                  </p>

                  <ul className="bn-feats">
                    {[
                      "Full range incl. PPF",
                      "G-27, Sector-A, Jodhpur",
                      "Mon – Sat 9 AM – 7 PM",
                    ].map(f => (
                      <li key={f}><span className="d" />{f}</li>
                    ))}
                  </ul>

                  <div className="bn-cta-row">
                    Book Studio
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Footer note ── */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, color: "rgba(255,255,255,0.16)",
              textAlign: "center", marginTop: 20, lineHeight: 1.6,
            }}>
              Not sure?{" "}
              <a href="tel:+919799023966" style={{
                color: "rgba(62,156,64,0.55)", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#3E9C40")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(62,156,64,0.55)")}>
                Call +91 97990 23966
              </a>
              {" "}and we&apos;ll help you decide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}