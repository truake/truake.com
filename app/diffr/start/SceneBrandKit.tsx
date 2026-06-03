"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { SceneBrandKit as Kit, SceneSlot } from "./lib";
import { amazonSearchUrl, ebaySearchUrl, buyQuery, AFFILIATE_REL } from "../affiliate";

// Design tokens (match /diffr/start)
const C = {
  bg2: "#F8F5F1",
  text: "#2A2620",
  t80: "rgba(42,38,32,0.82)",
  t60: "rgba(42,38,32,0.60)",
  t40: "rgba(42,38,32,0.40)",
  blue: "#1B8BF5",
  orange: "#F0522C",
  bd: "rgba(42,38,32,0.10)",
} as const;

const EASE = [0.22, 1, 0.36, 1] as const;

function scoreOutOfTen(s: number | null): string | null {
  if (s == null) return null;
  return (Math.round(s * 100) / 10).toFixed(1);
}

function BuyButton({
  href,
  label,
  primary,
  tap,
}: {
  href: string;
  label: string;
  primary?: boolean;
  tap: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel={AFFILIATE_REL}
      whileTap={tap ? { scale: 0.94 } : undefined}
      whileHover={tap ? { y: -1 } : undefined}
      style={{
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.01em",
        textDecoration: "none",
        padding: "5px 12px",
        borderRadius: "100px",
        whiteSpace: "nowrap",
        color: primary ? "#fff" : C.text,
        background: primary ? C.orange : "transparent",
        border: primary ? `1px solid ${C.orange}` : `1px solid ${C.bd}`,
        display: "inline-block",
      }}
    >
      {label} ↗
    </motion.a>
  );
}

function SlotCard({ slot, cardV, imgV, hover }: {
  slot: SceneSlot;
  cardV: Variants;
  imgV: Variants;
  hover: boolean;
}) {
  const score = scoreOutOfTen(slot.beginnerScore);
  const ready = slot.status === "ready" && slot.imageUrl;
  const q = buyQuery(slot.brandName, slot.productLine);

  return (
    <motion.div
      variants={cardV}
      whileHover={hover ? "hover" : undefined}
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        background: C.bg2,
        border: `1px solid ${C.bd}`,
        borderRadius: "14px",
        padding: "16px",
      }}
    >
      {/* Image or pending placeholder */}
      <div
        style={{
          flexShrink: 0,
          width: "84px",
          height: "84px",
          borderRadius: "10px",
          overflow: "hidden",
          background: ready ? "#fff" : "rgba(42,38,32,0.045)",
          border: `1px solid ${C.bd}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ready ? (
          // External R2 image — plain img (domain not in next/image config)
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            variants={imgV}
            src={slot.imageUrl!}
            alt={`${slot.brandName} — ${slot.productTypeName}`}
            width={84}
            height={84}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: C.t40,
            }}
          >
            {slot.brandName.charAt(0) || "·"}
          </span>
        )}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.blue,
            margin: "2px 0 5px",
          }}
        >
          {slot.productTypeName}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: C.text,
            margin: "0 0 2px",
            lineHeight: 1.25,
          }}
        >
          {slot.brandName}
        </p>
        {slot.productLine && (
          <p style={{ fontSize: "13px", color: C.t60, margin: "0 0 8px", lineHeight: 1.4 }}>
            {slot.productLine}
          </p>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {score && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: C.blue,
                background: "rgba(27,139,245,0.08)",
                border: "1px solid rgba(27,139,245,0.18)",
                borderRadius: "100px",
                padding: "2px 9px",
              }}
            >
              Beginner {score}
            </span>
          )}
          {!ready && <span style={{ fontSize: "11px", color: C.t40 }}>photo coming</span>}
        </div>

        {/* Affiliate buy links */}
        {slot.brandName && (
          <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
            <BuyButton href={amazonSearchUrl(q)} label="Amazon" primary tap={hover} />
            <BuyButton href={ebaySearchUrl(q)} label="eBay" tap={hover} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function SceneBrandKit({ kit }: { kit: Kit }) {
  const reduce = useReducedMotion();
  const animate = !reduce;

  const containerV: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
  };
  const cardV: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
    hover: { y: -5, boxShadow: "0 14px 36px rgba(42,38,32,0.12)", transition: { duration: 0.25, ease: EASE } },
  };
  const imgV: Variants = { hover: { scale: 1.07, transition: { duration: 0.3, ease: EASE } } };

  return (
    <section style={{ marginBottom: "52px" }}>
      <h2
        style={{
          fontFamily: "var(--font-display), 'Playfair Display', serif",
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: C.text,
          margin: "0 0 6px",
        }}
      >
        The Starter Kit — Diffr&apos;s Brand Picks
      </h2>
      <p style={{ fontSize: "15px", color: C.t60, margin: "0 0 24px", lineHeight: 1.6 }}>
        One brand per slot, no repeats — scored for how forgiving each is to a
        beginner. These {kit.slots.length} picks come straight from Diffr&apos;s
        brand database, the same data the iOS app uses.
        {kit.readyCount < kit.slots.length && (
          <> Product photos are rolling in ({kit.readyCount}/{kit.slots.length} live).</>
        )}
      </p>

      <motion.div
        variants={animate ? containerV : undefined}
        initial={animate ? "hidden" : undefined}
        whileInView={animate ? "show" : undefined}
        viewport={{ once: true, margin: "-40px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "12px",
        }}
      >
        {kit.slots.map((slot) => (
          <SlotCard
            key={`${slot.index}-${slot.brandId}-${slot.productTypeId}`}
            slot={slot}
            cardV={cardV}
            imgV={imgV}
            hover={animate}
          />
        ))}
      </motion.div>

      {/* FTC affiliate disclosure (16 CFR Part 255) */}
      <p style={{ fontSize: "12px", color: C.t40, margin: "14px 0 0", lineHeight: 1.6 }}>
        Buy links are affiliate links — Diffr may earn a commission at no extra
        cost to you. Which brand fills each slot is decided by the score, not by
        commission.{" "}
        <Link href="/diffr/affiliate-disclosure" style={{ color: C.blue, textDecoration: "underline" }}>
          Full disclosure
        </Link>
        .
      </p>
    </section>
  );
}
