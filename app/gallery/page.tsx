"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/*
  ─────────────────────────────────────────────
  GALLERY PAGE — /gallery
  Full masonry-style grid with filter tabs
  Lightbox on click
  ─────────────────────────────────────────────

  HOW TO ADD PHOTOS:
  1. Drop images into /public/gallery/
  2. Add entries to the PHOTOS array below
  3. Each photo needs: id, src, label, category, tag
*/

const CATEGORIES = ["All", "Ceramic Coating", "Paint Correction", "Interior", "PPF", "Wash & Finish"];

const PHOTOS = [
  { id: 1,  src: "/car1.webp",           label: "9H Ceramic Coat",         category: "Ceramic Coating",  tag: "Full Body",       wide: true  },
  { id: 2,  src: "/car2.webp",           label: "2-Stage Correction",       category: "Paint Correction", tag: "Swirl Removal",   wide: false },
  { id: 3,  src: "/car3.webp",           label: "Interior Steam Clean",     category: "Interior",         tag: "Full Interior",   wide: false },
  { id: 4,  src: "/car4.webp",           label: "PPF Bonnet & Bumper",      category: "PPF",              tag: "Partial PPF",     wide: false },
  { id: 5,  src: "/car5.webp",           label: "Foam Wash Detail",         category: "Wash & Finish",    tag: "Exterior",        wide: true  },
  { id: 6,  src: "/car6.webp",           label: "Leather Conditioning",     category: "Interior",         tag: "Leather",         wide: false },
//   { id: 7,  src: "/gallery/photo-7.jpg",  label: "Paint Decontamination",    category: "Paint Correction", tag: "Clay Bar",        wide: false },
//   { id: 8,  src: "/gallery/photo-8.jpg",  label: "Ceramic Coat Sedan",       category: "Ceramic Coating",  tag: "Full Body",       wide: false },
//   { id: 9,  src: "/gallery/photo-9.jpg",  label: "Full PPF Wrap",            category: "PPF",              tag: "Full Body PPF",   wide: true  },
//   { id: 10, src: "/gallery/photo-10.jpg", label: "Dashboard Deep Clean",     category: "Interior",         tag: "Dashboard",       wide: false },
//   { id: 11, src: "/gallery/photo-11.jpg", label: "Mirror Gloss Finish",      category: "Wash & Finish",    tag: "Gloss",           wide: false },
//   { id: 12, src: "/gallery/photo-12.jpg", label: "1-Stage Correction SUV",   category: "Paint Correction", tag: "Single Stage",    wide: false },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Lightbox ─────────────────────────────── */
function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: typeof PHOTOS[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(4,4,4,0.96)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "lbFadeIn 0.2s ease",
      }}
    >
      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 24, right: 24,
          width: 40, height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.6)",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "background 0.2s",
        }}
      >✕</button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: "absolute",
          left: 24, top: "50%",
          transform: "translateY(-50%)",
          width: 44, height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.6)",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.15)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >←</button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: "absolute",
          right: 24, top: "50%",
          transform: "translateY(-50%)",
          width: 44, height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.6)",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(62,156,64,0.15)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >→</button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "80vw",
          maxHeight: "80vh",
          width: "100%",
          height: "100%",
          borderRadius: 6,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {imgError ? (
          <div style={{
            width: "100%", height: "100%",
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, #0d1a0d, #0a0a0a)",
            gap: 12,
          }}>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 80, fontStyle: "italic",
              color: "rgba(62,156,64,0.08)", lineHeight: 1,
            }}>GG</div>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10, letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(62,156,64,0.25)",
            }}>No image</div>
          </div>
        ) : (
          <Image
            src={photo.src}
            alt={photo.label}
            fill
            style={{ objectFit: "contain" }}
            onError={() => setImgError(true)}
          />
        )}

        {/* Caption bar */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "20px 24px 18px",
          background: "linear-gradient(to top, rgba(4,4,4,0.9) 0%, transparent 100%)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 20, color: "#fff",
              marginBottom: 4,
            }}>{photo.label}</div>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 10, letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(62,156,64,0.8)",
            }}>{photo.category}</div>
          </div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 9, letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(62,156,64,0.7)",
            background: "rgba(62,156,64,0.08)",
            border: "1px solid rgba(62,156,64,0.2)",
            padding: "4px 12px", borderRadius: 100,
          }}>{photo.tag}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Photo tile ───────────────────────────── */
function PhotoTile({
  photo,
  onClick,
  delay,
}: {
  photo: typeof PHOTOS[0];
  onClick: () => void;
  delay: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position: "relative",
        borderRadius: 5,
        overflow: "hidden",
        background: "#0d0d0d",
        border: `1px solid ${hovered ? "rgba(62,156,64,0.3)" : "rgba(255,255,255,0.05)"}`,
        aspectRatio: photo.wide ? "16/9" : "4/3",
        gridColumn: photo.wide ? "span 2" : "span 1",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}, border-color 0.25s, box-shadow 0.3s`,
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Placeholder */}
      {imgError && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          background: "linear-gradient(160deg, #0d1a0d 0%, #0a0a0a 100%)",
          gap: 8,
        }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 52, fontStyle: "italic",
            color: "rgba(62,156,64,0.07)", lineHeight: 1,
            userSelect: "none",
          }}>GG</div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 9, letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(62,156,64,0.2)",
          }}>{photo.label}</div>
        </div>
      )}

      {!imgError && (
        <Image
          src={photo.src}
          alt={photo.label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.55s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
          onError={() => setImgError(true)}
        />
      )}

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(4,4,4,0.88) 0%, rgba(4,4,4,0.15) 55%, transparent 100%)"
          : "linear-gradient(to top, rgba(4,4,4,0.65) 0%, rgba(4,4,4,0.0) 50%, transparent 100%)",
        transition: "background 0.3s",
        zIndex: 1,
      }} />

      {/* Green top line reveal */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 2,
        background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        zIndex: 2,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.35s ease",
      }} />

      {/* Tag */}
      <div style={{
        position: "absolute",
        top: 14, left: 14,
        zIndex: 2,
        fontFamily: "'Outfit', sans-serif",
        fontSize: 9, fontWeight: 600,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "rgba(62,156,64,0.9)",
        background: "rgba(4,4,4,0.75)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(62,156,64,0.18)",
        padding: "3px 10px", borderRadius: 100,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0)" : "translateY(-5px)",
        transition: "opacity 0.25s, transform 0.25s",
      }}>{photo.tag}</div>

      {/* Expand icon */}
      <div style={{
        position: "absolute",
        top: 14, right: 14,
        zIndex: 2,
        width: 32, height: 32,
        borderRadius: "50%",
        background: "rgba(62,156,64,0.15)",
        border: "1px solid rgba(62,156,64,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "scale(1)" : "scale(0.7)",
        transition: "opacity 0.25s, transform 0.25s",
        fontSize: 12, color: "#3E9C40",
      }}>⤢</div>

      {/* Label */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        padding: "14px 16px 14px",
        zIndex: 2,
        transform: hovered ? "translateY(0)" : "translateY(3px)",
        transition: "transform 0.3s ease",
      }}>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 15, color: "#fff",
          letterSpacing: "-0.01em",
        }}>{photo.label}</div>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 9, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(62,156,64,0.6)",
          marginTop: 3,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s 0.05s",
        }}>{photo.category}</div>
      </div>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────── */
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const filtered = activeCategory === "All"
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex((p) => p.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .gp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 1024px) { .gp-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .gp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  {
          .gp-grid { grid-template-columns: 1fr !important; }
          .gp-grid > * { grid-column: span 1 !important; }
        }

        .gp-filter-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .gp-filter-btn.active {
          background: #3E9C40;
          color: #fff;
          border: 1px solid #3E9C40;
        }
        .gp-filter-btn.inactive {
          background: transparent;
          color: rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .gp-filter-btn.inactive:hover {
          border-color: rgba(62,156,64,0.3);
          color: #fff;
        }
      `}</style>

      {/* ── Hero header ── */}
      <section style={{
        position: "relative",
        background: "#060606",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        {/* Grid bg */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 0%, transparent 65%)",
        }} />
        {/* Green glow */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 15% 60%, rgba(62,156,64,0.07) 0%, transparent 65%)",
        }} />
        {/* Top line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, padding: "80px 24px 72px" }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 28,
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.15em", textTransform: "uppercase",
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.05s",
          }}>
            <Link href="/" style={{ color: "rgba(62,156,64,0.75)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span>Gallery</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div>
              {/* Eyebrow */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12, marginBottom: 16,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
              }}>
                <div style={{ width: 28, height: 1, background: "rgba(62,156,64,0.5)" }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "rgba(62,156,64,0.85)",
                }}>Our Work</span>
              </div>

              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: 0,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
              }}>
                The <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Gallery</em>
              </h1>
            </div>

            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15, lineHeight: 1.75,
              color: "rgba(255,255,255,0.32)",
              maxWidth: 360,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s",
            }}>
              Every photo here is a real car, a real transformation.
              Browse our work across ceramic coatings, paint corrections,
              interiors, and more.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters + Grid ── */}
      <div className="container" style={{ paddingTop: 56, paddingBottom: 100 }}>

        {/* Filter pills */}
        <div style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 48,
          paddingBottom: 32,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          alignItems: "center",
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`gp-filter-btn ${activeCategory === cat ? "active" : "inactive"}`}
            >
              {cat}
            </button>
          ))}
          <span style={{
            marginLeft: "auto",
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.1em",
          }}>
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Photo grid */}
        {filtered.length > 0 ? (
          <div className="gp-grid">
            {filtered.map((photo, i) => (
              <PhotoTile
                key={photo.id}
                photo={photo}
                onClick={() => openLightbox(photo.id)}
                delay={`${(i % 6) * 0.06}s`}
              />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: "center", padding: "80px 0",
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'Outfit', sans-serif",
          }}>
            <div style={{ fontSize: 40, opacity: 0.2, marginBottom: 12 }}>✦</div>
            <p>No photos in this category yet.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{
          marginTop: 80,
          padding: "56px 48px",
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.05)",
          borderLeft: "3px solid #3E9C40",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}>
          <div>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: 8,
            }}>
              Want results like <em style={{ fontStyle: "italic", color: "#3E9C40" }}>these</em>?
            </h3>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.3)",
            }}>
              Book your car in — we&apos;ll make it look this good.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#3E9C40", color: "#fff",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "13px 28px", borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#2d7a2f"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#3E9C40"}
            >
              Book a Detail →
            </Link>
            <Link href="/#plans" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "13px 28px", borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.35)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
            }}
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/" style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 11, letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(62,156,64,0.8)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)"}
          >
            ← Back to GlossiGo
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photo={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </main>
  );
}