"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/*
  ─────────────────────────────────────────────
  GALLERY SECTION — Landing Page Preview
  3 photos max, asymmetric editorial layout
  View More → /gallery
  ─────────────────────────────────────────────

  HOW TO ADD YOUR PHOTOS:
  Drop images into /public/gallery/
  Then replace the src values below:
    photo1: "/gallery/ceramic-coat.jpg"
    photo2: "/gallery/paint-correction.jpg"
    photo3: "/gallery/interior.jpg"
*/

const PREVIEW_PHOTOS = [
  {
    id: 1,
    src: "/car4.webp",
    label: "Ceramic Coating",
    tag: "Paint Protection",
  },
  {
    id: 2,
    src: "/car3.webp",
    label: "Paint Correction",
    tag: "Multi-Stage Polish",
  },
  {
    id: 3,
    src: "/car1.webp",
    label: "Interior Detail",
    tag: "Full Interior",
  },
];

function PhotoCard({
  photo,
  tall = false,
}: {
  photo: typeof PREVIEW_PHOTOS[0];
  tall?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 6,
        overflow: "hidden",
        background: "#0d0d0d",
        border: `1px solid ${hovered ? "rgba(62,156,64,0.35)" : "rgba(255,255,255,0.06)"}`,
        aspectRatio: tall ? "3/4" : "4/3",
        cursor: "pointer",
        transition: "border-color 0.3s, transform 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Placeholder shown when no image */}
      {imgError && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0d1a0d 0%, #0a0a0a 100%)",
          gap: 10,
        }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 64,
            fontStyle: "italic",
            color: "rgba(62,156,64,0.06)",
            lineHeight: 1,
            userSelect: "none",
          }}>GG</div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 9,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(62,156,64,0.2)",
          }}>Add photo</div>
        </div>
      )}

      {/* Actual image */}
      {!imgError && (
        <Image
          src={photo.src}
          alt={photo.label}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          onError={() => setImgError(true)}
        />
      )}

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 50%, transparent 100%)"
          : "linear-gradient(to top, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.05) 60%, transparent 100%)",
        transition: "background 0.3s",
        zIndex: 1,
      }} />

      {/* Green top line on hover */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 2,
        background: "linear-gradient(90deg, transparent, #3E9C40, transparent)",
        zIndex: 2,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
      }} />

      {/* Tag top-left */}
      <div style={{
        position: "absolute",
        top: 16, left: 16,
        zIndex: 2,
        fontFamily: "'Outfit', sans-serif",
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(62,156,64,0.9)",
        background: "rgba(8,8,8,0.7)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(62,156,64,0.2)",
        padding: "4px 10px",
        borderRadius: 100,
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.3s, transform 0.3s",
      }}>
        {photo.tag}
      </div>

      {/* Label bottom */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        padding: "20px 20px 18px",
        zIndex: 2,
        transform: hovered ? "translateY(0)" : "translateY(4px)",
        transition: "transform 0.3s ease",
      }}>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 18,
          fontWeight: 400,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>
          {photo.label}
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        background: "#060606",
        padding: "100px 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <style>{`
        .gs-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 1fr;
          gap: 16px;
          align-items: start;
        }
        .gs-grid > *:nth-child(2) {
          margin-top: 40px;
        }
        .gs-grid > *:nth-child(3) {
          margin-top: 16px;
        }
        @media (max-width: 768px) {
          .gs-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .gs-grid > *:nth-child(2),
          .gs-grid > *:nth-child(3) {
            margin-top: 0 !important;
          }
          .gs-grid > *:nth-child(3) {
            grid-column: 1 / -1;
            aspect-ratio: 16/7 !important;
          }
        }
        @media (max-width: 480px) {
          .gs-grid { grid-template-columns: 1fr !important; }
          .gs-grid > *:nth-child(3) { grid-column: auto !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>

      <div className="container">
        {/* Header row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 48,
          gap: 24,
          flexWrap: "wrap",
        }}>
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}>
              <div style={{ width: 28, height: 1, background: "rgba(62,156,64,0.5)" }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(62,156,64,0.85)",
              }}>Our Work</span>
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}>
              Results That<br />
              <em style={{ fontStyle: "italic", color: "#3E9C40" }}>Speak</em>
            </h2>
          </div>

          <Link
            href="/gallery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "13px 28px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              alignSelf: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,156,64,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
            }}
          >
            View Full Gallery
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Photo grid */}
        <div className="gs-grid">
          {PREVIEW_PHOTOS.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} tall={i === 0} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: 48,
          padding: "24px 32px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}>
            <span style={{ color: "#3E9C40", fontWeight: 600 }}>50+ transformations</span>
            {" "}documented in our full gallery
          </div>
          <Link
            href="/gallery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#3E9C40",
              textDecoration: "none",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.gap = "14px"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.gap = "8px"}
          >
            See All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}