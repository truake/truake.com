import type { SceneBrandKit as Kit, SceneSlot } from "./lib";

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

function scoreOutOfTen(s: number | null): string | null {
  if (s == null) return null;
  // beginner_score is 0–1; present on Diffr's familiar /10 scale.
  return (Math.round(s * 100) / 10).toFixed(1);
}

function SlotCard({ slot }: { slot: SceneSlot }) {
  const score = scoreOutOfTen(slot.beginnerScore);
  const ready = slot.status === "ready" && slot.imageUrl;

  return (
    <div
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
          <img
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
          {!ready && (
            <span style={{ fontSize: "11px", color: C.t40 }}>photo coming</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SceneBrandKit({ kit }: { kit: Kit }) {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "12px",
        }}
      >
        {kit.slots.map((slot) => (
          <SlotCard key={`${slot.index}-${slot.brandId}-${slot.productTypeId}`} slot={slot} />
        ))}
      </div>
    </section>
  );
}
