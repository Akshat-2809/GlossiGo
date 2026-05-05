"use client";

import { useState } from "react";
import Link from "next/link";



const CATEGORIES = ["All", "Tips & Tricks", "Ceramic Coating", "Paint Correction", "Interior", "Industry News"];

const FEATURED_POST = {
  id: 1,
  category: "Ceramic Coating",
  title: "Why Ceramic Coating is the Best Investment for Your Car in 2025",
  excerpt:
    "Ceramic coatings have revolutionized car protection. We break down exactly what they do, how long they last, and whether the price tag is worth it for your vehicle.",
  date: "Apr 22, 2025",
  readTime: "6 min read",
  tag: "Featured",
};

const POSTS = [
  {
    id: 2,
    category: "Paint Correction",
    title: "The 3 Stages of Paint Correction Explained",
    excerpt:
      "Not all swirl marks are equal. Understanding the difference between 1-stage, 2-stage and 3-stage correction can save you money and get better results.",
    date: "Apr 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Tips & Tricks",
    title: "How to Wash Your Car Without Creating Swirl Marks",
    excerpt:
      "The two-bucket method, the right microfibre, the right soap. We cover the complete safe wash routine used in our studio every single day.",
    date: "Apr 10, 2025",
    readTime: "4 min read",
  },
  {
    id: 4,
    category: "Interior",
    title: "Steam Cleaning vs. Chemical Cleaning: Which Wins?",
    excerpt:
      "Both methods have their place. Here's exactly when we use steam, when we use chemicals, and why the combination produces the best result.",
    date: "Apr 3, 2025",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "Industry News",
    title: "PPF vs. Ceramic Coating: Do You Need Both?",
    excerpt:
      "Paint Protection Film and Ceramic Coating are often confused. Here's the honest breakdown of what each does, and why the best answer is usually both.",
    date: "Mar 28, 2025",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Tips & Tricks",
    title: "The Right Way to Dry Your Car After a Wash",
    excerpt:
      "Air drying? Shammy? Leaf blower? We test every method and tell you which ones actually protect your paint and which ones are quietly destroying it.",
    date: "Mar 20, 2025",
    readTime: "3 min read",
  },
  {
    id: 7,
    category: "Ceramic Coating",
    title: "How Long Does Ceramic Coating Actually Last?",
    excerpt:
      "Brands claim 5–10 years. Reality is different. We share real-world data from cars we've coated and what determines how long protection holds.",
    date: "Mar 14, 2025",
    readTime: "5 min read",
  },
];



function CategoryBadge({ label, small }: { label: string; small?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: small ? 10 : 11,
        fontWeight: 600,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "var(--green)",
        fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
        border: "1px solid var(--green-border)",
        padding: small ? "3px 10px" : "4px 12px",
        borderRadius: 100,
      }}
    >
      {label}
    </span>
  );
}

function FeaturedCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="blog-featured-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--green)" : "var(--border)"}`,
        borderRadius: 8,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 360,
        transition: "border-color 0.3s",
        cursor: "pointer",
      }}
    >
      {/* Left: visual */}
      <div
        className="blog-featured-visual"
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #0d1f0d 0%, #111 50%, #0A0A0A 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRight: "1px solid var(--border)",
        }}
      >
        {/* Big decorative GG */}
        <div
          style={{
            position: "absolute",
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: 220,
            fontWeight: 900,
            color: "var(--green)",
            opacity: 0.06,
            lineHeight: 1,
            userSelect: "none",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}
        >
          GG
        </div>
        {/* Green glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 40% 50%, rgba(62,156,64,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Replace with actual blog image */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, opacity: 0.3 }}>📸</div>
          <p
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginTop: 8,
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            Add cover image
          </p>
        </div>

        {/* Featured tag */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "var(--green)",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: 100,
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          }}
        >
          Featured
        </div>
      </div>

      {/* Right: content */}
      <div
        className="blog-featured-content"
        style={{
          padding: "44px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CategoryBadge label={FEATURED_POST.category} />

        <h2
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#fff",
            marginTop: 16,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            transition: "color 0.2s",
          }}
        >
          {hovered ? (
            <span style={{ color: "var(--green)" }}>
              {FEATURED_POST.title}
            </span>
          ) : (
            FEATURED_POST.title
          )}
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: 28,
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          }}
        >
          {FEATURED_POST.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 12,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            <span>{FEATURED_POST.date}</span>
            <span style={{ color: "var(--border-light)" }}>·</span>
            <span>{FEATURED_POST.readTime}</span>
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "var(--green)",
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "gap 0.2s",
            }}
          >
            Read More {hovered ? "→→" : "→"}
          </div>
        </div>
      </div>

      {/* Bottom green line on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--green)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />
    </div>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--green-border)" : "var(--border)"}`,
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 180,
          background: "linear-gradient(135deg, #0d1f0d, #111)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: 100,
            fontWeight: 900,
            color: "var(--green)",
            opacity: 0.06,
            position: "absolute",
            lineHeight: 1,
            userSelect: "none",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        >
          GG
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(62,156,64,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Replace with <Image> */}
        <div style={{ position: "relative", zIndex: 1, fontSize: 28, opacity: 0.25 }}>📷</div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "var(--green)",
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.35s ease",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <CategoryBadge label={post.category} small />

        <h3
          style={{
            fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            fontSize: 20,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            lineHeight: 1.15,
            color: hovered ? "var(--green)" : "#fff",
            marginTop: 12,
            marginBottom: 12,
            transition: "color 0.2s",
            flex: 1,
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: 20,
            fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            paddingTop: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 11,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <span
            style={{
              fontSize: 12,
              color: "var(--green)",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            {hovered ? "→→" : "→"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);

  return (
    <main style={{ background: "var(--black)", minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 820px) {
          .blog-featured-card {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .blog-featured-visual {
            min-height: 240px !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }

          .blog-featured-content {
            padding: 28px 24px !important;
          }

          .blog-featured-content h2 {
            font-size: clamp(22px, 7vw, 32px) !important;
          }

          .blog-newsletter {
            padding: 40px 24px !important;
          }

          .blog-newsletter-actions {
            width: 100%;
          }

          .blog-newsletter-actions input,
          .blog-newsletter-actions button {
            width: 100%;
            min-width: 0 !important;
          }
        }
      `}</style>

      {/* ── Page Header ── */}
      <section
        style={{
          position: "relative",
          paddingTop: 140,
          paddingBottom: 80,
          overflow: "hidden",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Grid bg */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.2,
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }}
        />
        {/* Green glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(62,156,64,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Top line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, transparent, var(--green), transparent)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 24,
              fontSize: 12,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <Link href="/" style={{ color: "var(--green)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span>Blog</span>
          </div>

          <div className="section-tag" style={{ marginBottom: 20 }}>
            Knowledge Base
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
              fontSize: "clamp(52px, 10vw, 100px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -1,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            The Detailing{" "}
            <span style={{ color: "var(--green)" }}>Journal</span>
          </h1>

          <p
            style={{
              maxWidth: 500,
              margin: "0 auto",
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            Pro tips, product breakdowns, and care guides from the team at
            GlossiGo — for those who take their cars seriously.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container" style={{ paddingTop: 64, paddingBottom: 100 }}>

        {/* Featured Post */}
        <div style={{ marginBottom: 64 }}>
          <FeaturedCard />
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 48,
            paddingBottom: 24,
            borderBottom: "1px solid var(--border)",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: active ? "var(--green)" : "transparent",
                  color: active ? "#fff" : "var(--text-muted)",
                  border: `1px solid ${active ? "var(--green)" : "var(--border)"}`,
                  borderRadius: 100,
                  padding: "7px 18px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--green-border)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}

          <div
            style={{
              marginLeft: "auto",
              fontSize: 12,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Posts Grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.3 }}>✦</div>
            <p>No posts in this category yet.</p>
          </div>
        )}

        {/* Back to site */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              letterSpacing: 1,
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--green)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
          >
            ← Back to GlossiGo
          </Link>
        </div>
      </div>
    </main>
  );
}