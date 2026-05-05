"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About",    href: "/#about-us" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Plans",    href: "/#plans" },
  { label: "Gallery",  href: "/#gallery" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

const SERVICES_LIST = [
  { label: "Ceramic Coating" },
  { label: "Paint Protection Film" },
  { label: "Sunroof Protection Film" },
  { label: "Window Films" },
  { label: "Bike Detailing" },
  { label: "Ceramic Wash" },
  { label: "Steam Wash" },
  { label: "Steam Dry Clean" },
  { label: "Mirror Restoration" },
  { label: "Maintenance Wash" },
  { label: "Spray-On PPF / Peelable Paint" },
  { label: "Car Denting & Painting" },
  { label: "Windshield Protection Film" },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [menuOpen,           setMenuOpen]            = useState(false);
  const [dropOpen,           setDropOpen]            = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen]  = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

        .nav-link-base {
          appearance: none;
          background: transparent;
          border: none;
          margin: 0;
          padding: 0;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Outfit', var(--font-body, sans-serif);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: rgba(255,255,255,0.42);
          cursor: pointer;
          line-height: 1;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.22s;
        }
        .nav-link-base:hover { color: #fff; }
        .nav-link-base.active { color: #fff; }

        .nav-underline {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: var(--green, #3E9C40);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
          opacity: 0.8;
        }
        .nav-link-base:hover .nav-underline,
        .nav-link-base.active .nav-underline { transform: scaleX(1); }

        .nav-chevron {
          display: inline-flex;
          align-items: center;
          transition: transform 0.22s ease;
          margin-left: 1px;
        }
        .nav-chevron.open { transform: rotate(180deg); }

        .services-drop {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          width: 310px;
          background: rgba(10,10,10,0.98);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(62,156,64,0.07);
          z-index: 200;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .services-drop.open {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .services-drop.closed {
          opacity: 0;
          transform: translateX(-50%) translateY(-8px);
          pointer-events: none;
        }
        .drop-topbar {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(62,156,64,0.5), transparent);
        }
        .drop-label {
          padding: 12px 20px 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(62,156,64,0.55);
        }
        .drop-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.48);
          text-decoration: none;
          transition: color 0.16s, background 0.16s;
          letter-spacing: 0.02em;
        }
        .drop-item:hover { color: #fff; background: rgba(62,156,64,0.07); }
        .drop-item:hover .drop-dot { background: var(--green, #3E9C40); }
        .drop-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(62,156,64,0.35);
          flex-shrink: 0;
          transition: background 0.16s;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 70px; left: 0; right: 0; bottom: 0;
          z-index: 99;
          background: rgba(8,8,8,0.99);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          overflow-y: auto;
          transition: transform 0.35s ease, opacity 0.28s ease;
        }
        .mobile-menu-overlay.open   { transform: translateY(0);     opacity: 1; pointer-events: auto; }
        .mobile-menu-overlay.closed { transform: translateY(-100%); opacity: 0; pointer-events: none; }

        .mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 18px 0;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          background: transparent;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.52);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
          text-align: left;
        }
        .mob-link:hover { color: var(--green, #3E9C40); }

        .mob-services-body {
          overflow: hidden;
          transition: max-height 0.32s ease;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mob-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.36);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          background: rgba(62,156,64,0.025);
          transition: color 0.16s;
        }
        .mob-service-item:last-child { border-bottom: none; }
        .mob-service-item:hover { color: rgba(255,255,255,0.75); }

        @media (max-width: 768px) {
          .desktop-nav     { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}>
        {scrolled && (
          <div style={{
            position: "absolute", top: 0, left: "25%", right: "25%", height: 1,
            background: "linear-gradient(90deg,transparent,rgba(62,156,64,0.3),transparent)",
          }} />
        )}

        <div className="container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: 70,
        }}>
          {/* ── Logo ── */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
            <div style={{
              width:30, height:30,
              border:"1.5px solid rgba(62,156,64,0.6)", borderRadius:6,
              display:"flex", alignItems:"center", justifyContent:"center",
              background:"rgba(62,156,64,0.08)",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 5.5A5.5 5.5 0 1 0 8.5 14H13V8.5H9.5"
                  stroke="var(--green,#3E9C40)" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
              <span style={{
                fontFamily:"var(--font-display,'Outfit')", fontSize:20, fontWeight:800,
                color:"#fff", letterSpacing:"-0.01em", lineHeight:1,
              }}>
                Glossi<span style={{ color:"var(--green,#3E9C40)" }}>Go</span>
              </span>
              <span style={{
                fontFamily:"var(--font-body,'Outfit')", fontSize:8.5,
                color:"rgba(255,255,255,0.28)", letterSpacing:"0.22em",
                textTransform:"uppercase", fontWeight:500, lineHeight:1,
              }}>
                Detailing™
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:36 }}>
            {NAV_LINKS.map(link =>
              link.hasDropdown ? (
                <ServicesDropdown
                  key={link.label}
                  dropRef={dropRef}
                  open={dropOpen}
                  setOpen={setDropOpen}
                />
              ) : (
                <NavLink key={link.label} href={link.href} label={link.label} />
              )
            )}
            {/* ↓ CHANGED: now links to /book-now selection page */}
            <BookButton />
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            style={{
              display:"none", flexDirection:"column",
              alignItems:"center", justifyContent:"center",
              gap:5, background:"transparent", border:"none",
              cursor:"pointer", padding:8,
            }}
          >
            {[
              menuOpen ? "translateY(7px) rotate(45deg)"   : "none",
              null,
              menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            ].map((tf, i) =>
              tf === null ? (
                <span key={i} style={{
                  display:"block", width:22, height:2, background:"#fff",
                  borderRadius:2, transition:"opacity 0.25s",
                  opacity: menuOpen ? 0 : 1,
                }} />
              ) : (
                <span key={i} style={{
                  display:"block", width:22, height:2,
                  background: menuOpen ? "var(--green,#3E9C40)" : "#fff",
                  borderRadius:2, transition:"transform 0.25s, opacity 0.25s",
                  transform: tf,
                }} />
              )
            )}
          </button>
        </div>
      </nav>

      {/* ══ MOBILE MENU ══ */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : "closed"}`}>
        <div style={{ padding:"28px 28px 52px", display:"flex", flexDirection:"column" }}>

          {/* Services accordion */}
          <button className="mob-link" onClick={() => setMobileServicesOpen(p => !p)}>
            Services
            <span style={{
              display:"inline-flex", alignItems:"center",
              transition:"transform 0.25s",
              transform: mobileServicesOpen ? "rotate(180deg)" : "none",
            }}>
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          <div className="mob-services-body"
            style={{ maxHeight: mobileServicesOpen ? `${SERVICES_LIST.length * 48}px` : 0 }}>
            {SERVICES_LIST.map(s => (
              <Link key={s.label} href="/#services" className="mob-service-item"
                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>
                <span style={{ width:5, height:5, borderRadius:"50%",
                  background:"rgba(62,156,64,0.4)", flexShrink:0 }} />
                {s.label}
              </Link>
            ))}
          </div>

          {/* Other links */}
          {NAV_LINKS.filter(l => !l.hasDropdown).map(link => (
            <Link key={link.label} href={link.href} className="mob-link"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}

          {/* Book Now — goes to /book-now selection */}
          <Link href="/book-now" onClick={() => setMenuOpen(false)} style={{
            display:"block", textAlign:"center", marginTop:32,
            background:"var(--green,#3E9C40)", color:"#fff",
            fontFamily:"'Outfit',sans-serif", fontSize:13, fontWeight:700,
            letterSpacing:"0.16em", textTransform:"uppercase",
            padding:"16px", borderRadius:7, textDecoration:"none",
          }}>
            Book Now
          </Link>

          {/* Quick contact */}
          <div style={{
            marginTop:40, paddingTop:28,
            borderTop:"1px solid rgba(255,255,255,0.05)",
            display:"flex", flexDirection:"column", gap:14,
          }}>
            <a href="tel:+919829256300" style={{
              display:"inline-flex", alignItems:"center", gap:10,
              fontFamily:"'Outfit',sans-serif", fontSize:13,
              color:"rgba(255,255,255,0.32)", textDecoration:"none",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                  stroke="var(--green,#3E9C40)" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 98292 56300
            </a>
            <a href="https://www.instagram.com/gloosigodetailing/"
              target="_blank" rel="noopener noreferrer" style={{
              display:"inline-flex", alignItems:"center", gap:10,
              fontFamily:"'Outfit',sans-serif", fontSize:13,
              color:"rgba(255,255,255,0.32)", textDecoration:"none",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="var(--green,#3E9C40)" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="var(--green,#3E9C40)" stroke="none"/>
              </svg>
              @gloosigodetailing
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Services dropdown ── */
function ServicesDropdown({
  dropRef, open, setOpen,
}: {
  dropRef: React.RefObject<HTMLDivElement | null>;
  open: boolean;
  setOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}) {
  return (
    <div ref={dropRef} style={{ position:"relative", display:"flex", alignItems:"center" }}>
      <button onClick={() => setOpen(p => !p)}
        className={`nav-link-base ${open ? "active" : ""}`}>
        Services
        <span className={`nav-chevron ${open ? "open" : ""}`}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor"
              strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="nav-underline" />
      </button>
      <div className={`services-drop ${open ? "open" : "closed"}`}>
        <div className="drop-topbar" />
        <div className="drop-label">Our Services</div>
        {SERVICES_LIST.map(s => (
          <Link key={s.label} href="/#services" className="drop-item"
            onClick={() => setOpen(false)}>
            <span className="drop-dot" />
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Regular desktop nav link ── */
function NavLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const props = {
    className: "nav-link-base",
    style: { display:"inline-flex", alignItems:"center" } as React.CSSProperties,
  };
  const inner = <>{label}<span className="nav-underline" /></>;
  return isExternal
    ? <a href={href} {...props}>{inner}</a>
    : <Link href={href} {...props}>{inner}</Link>;
}

/* ── Book Now button — routes to /book-now ── */
function BookButton() {
  const [hov, setHov] = useState(false);
  return (
    <Link href="/book-now" style={{
      display:"inline-flex", alignItems:"center",
      background: hov ? "transparent" : "var(--green,#3E9C40)",
      color:       hov ? "var(--green,#3E9C40)" : "#fff",
      border:"1.5px solid var(--green,#3E9C40)",
      fontFamily:"'Outfit',var(--font-body,sans-serif)",
      fontSize:11, fontWeight:600,
      letterSpacing:"0.15em", textTransform:"uppercase",
      padding:"10px 22px", borderRadius:5, textDecoration:"none",
      transition:"background 0.22s, color 0.22s, transform 0.15s",
      transform: hov ? "translateY(-1px)" : "translateY(0)",
      flexShrink:0,
    }}
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}>
      Book Now
    </Link>
  );
}