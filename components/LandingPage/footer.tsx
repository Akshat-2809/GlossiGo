"use client";

import { useState } from "react";
import Link from "next/link";

const FOOTER_DATA = {
  address: "G-27, Ward 23 Rd, Sector-A\nShastri Nagar, Jodhpur\nRajasthan 342003",
  phone: "9829256300",
  email: "hello@glossigo.com",
  hours: {
    working: "Mon – Sun: 9:00 AM – 8:00 PM",

  },
  socials: {
    instagram: "https://instagram.com/glossigo",   
    whatsapp:  "https://wa.me/919829256300",       
    youtube:   "",                                
  },
  mapLink: "https://maps.google.com/?q=Jodhpur+Rajasthan", 
};

const NAV_LINKS = {
  Services: [
    { label: "Ceramic Coating",    href: "/#services" },
    { label: "Paint Correction",   href: "/#services" },
    { label: "PPF Wrapping",       href: "/#services" },
    { label: "Interior Detail",    href: "/#services" },
    { label: "Steam & Dry Wash",   href: "/#services" },
    { label: "Engine Bay",         href: "/#services" },
  ],
  Studio: [
    { label: "About Us",   href: "/about"   },
    { label: "Gallery",    href: "/gallery" },
    { label: "Blog",       href: "/blog"    },
    { label: "Plans",      href: "/#plans"  },
    { label: "Contact",    href: "/#contact"},
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy"   },
    { label: "Terms of Service", href: "/terms"     },
    { label: "Refund Policy",    href: "/refunds"   },
  ],
};

/* ── Social icon SVGs ── */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L0 24l6.335-1.652A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.83 9.83 0 0 1-4.997-1.364l-.358-.213-3.76.98.998-3.648-.234-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#060606"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 11.5 19.79 19.79 0 0 1 1.88 2.86 2 2 0 0 1 3.86 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function SocialLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  const [hovered, setHovered] = useState(false);
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 38, height: 38,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? "rgba(62,156,64,0.12)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(62,156,64,0.35)" : "rgba(255,255,255,0.08)"}`,
        color: hovered ? "#3E9C40" : "rgba(255,255,255,0.4)",
        transition: "all 0.22s",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {children}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13,
        fontWeight: 400,
        color: hovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.32)",
        textDecoration: "none",
        transition: "color 0.2s",
        paddingBottom: 2,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        width: 14, height: 1,
        background: hovered ? "#3E9C40" : "rgba(255,255,255,0.12)",
        flexShrink: 0,
        transition: "background 0.2s, width 0.2s",
        display: "inline-block",
      }} />
      {label}
    </Link>
  );
}

/* ── FOOTER COMPONENT ─────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#040404", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
        }
        .ft-contact-icon {
          color: rgba(62,156,64,0.6);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ft-contact-text {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.32);
          line-height: 1.6;
        }
        .ft-contact-text a {
          color: rgba(255,255,255,0.32);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-contact-text a:hover { color: rgba(62,156,64,0.9); }

        .ft-col-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .ft-main-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 0.8fr 0.8fr 1.3fr;
          gap: 48px;
          padding: 64px 0 56px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 1100px) {
          .ft-main-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .ft-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
            padding: 48px 0 40px !important;
          }
        }
        @media (max-width: 400px) {
          .ft-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Giant background wordmark ── */}
      <div aria-hidden style={{
        position: "absolute",
        bottom: -20,
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(80px, 14vw, 180px)",
        fontStyle: "italic",
        fontWeight: 400,
        color: "rgba(255,255,255,0.043)",
        whiteSpace: "nowrap",
        lineHeight: 1,
        userSelect: "none",
        letterSpacing: "-4px",
        pointerEvents: "none",
      }}>
        GlossiGo Detailing
      </div>

      {/* ── Top green line ── */}
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, transparent 0%, rgba(62,156,64,0.4) 30%, rgba(62,156,64,0.4) 70%, transparent 100%)",
      }} />

      {/* ── Main grid ── */}
      <div className="container" style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div className="ft-main-grid">

          {/* Col 1: Brand + about blurb + socials */}
          <div>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: 20 }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 28,
                fontWeight: 400,
                color: "#3E9C40",
                letterSpacing: "-0.5px",
                lineHeight: 1,
              }}>
                GlossiGo
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginTop: 3,
              }}>
                Detailing™
              </div>
            </Link>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              lineHeight: 1.78,
              color: "rgba(255,255,255,0.28)",
              marginBottom: 28,
              maxWidth: 280,
            }}>
              Jodhpur&apos;s premium car care studio. Ceramic coatings, paint correction, PPF,
              and interior detailing — done right, every time.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <SocialLink href={FOOTER_DATA.socials.instagram} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={FOOTER_DATA.socials.whatsapp} label="WhatsApp">
                <WhatsAppIcon />
              </SocialLink>
              {FOOTER_DATA.socials.youtube && (
                <SocialLink href={FOOTER_DATA.socials.youtube} label="YouTube">
                  <YoutubeIcon />
                </SocialLink>
              )}
            </div>
          </div>

          {/* Col 2: Services links */}
          <div>
            <div className="ft-col-label">Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.Services.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>

          {/* Col 3: Studio links */}
          <div>
            <div className="ft-col-label">Studio</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.Studio.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>

          {/* Col 4: Legal */}
          <div>
            <div className="ft-col-label">Legal</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {NAV_LINKS.Legal.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>

          {/* Col 5: Contact info + newsletter */}
          <div>
            <div className="ft-col-label">Contact</div>

            <div className="ft-contact-item">
              <span className="ft-contact-icon"><LocationIcon /></span>
              <span className="ft-contact-text">
                <a href={FOOTER_DATA.mapLink} target="_blank" rel="noopener noreferrer">
                  {FOOTER_DATA.address}
                </a>
              </span>
            </div>

            <div className="ft-contact-item">
              <span className="ft-contact-icon"><PhoneIcon /></span>
              <span className="ft-contact-text">
                <a href={`tel:${FOOTER_DATA.phone.replace(/\s/g, "")}`}>
                  {FOOTER_DATA.phone}
                </a>
              </span>
            </div>

            <div className="ft-contact-item">
              <span className="ft-contact-icon"><MailIcon /></span>
              <span className="ft-contact-text">
                <a href={`mailto:${FOOTER_DATA.email}`}>
                  {FOOTER_DATA.email}
                </a>
              </span>
            </div>

            <div className="ft-contact-item" style={{ marginBottom: 28 }}>
              <span className="ft-contact-icon"><ClockIcon /></span>
              <span className="ft-contact-text">
                {FOOTER_DATA.hours.working}
              </span>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "20px 0 28px",
          flexWrap: "wrap",
        }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.05em",
          }}>
            © {year} GlossiGo Detailing™. All rights reserved.
          </div>

          {/* Tagline center */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <div style={{
              width: 5, height: 5,
              borderRadius: "50%",
              background: "#3E9C40",
              boxShadow: "0 0 6px rgba(62,156,64,0.8)",
              animation: "ftPulse 2.5s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10,
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              Premium Car Care · Jodhpur
            </span>
            <div style={{
              width: 5, height: 5,
              borderRadius: "50%",
              background: "#3E9C40",
              boxShadow: "0 0 6px rgba(62,156,64,0.8)",
              animation: "ftPulse 2.5s ease-in-out infinite 1.25s",
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes ftPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
      `}</style>
    </footer>
  );
}