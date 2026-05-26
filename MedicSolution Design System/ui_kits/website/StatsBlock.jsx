/* eslint-disable */
// StatsBlock — the "Swedish quality — Reliable delivery" four-up stat plate.
// Bone-tinted background (warm off-white), navy stat numerals, captions in steel.

const StatsBlock = () => (
  <section style={{ background: "var(--bg-bone)", padding: "96px 0" }}>
    <div className="container">
      <div className="eyebrow-strip">
        <span className="eyebrow">Swedish quality — Reliable delivery</span>
      </div>
      <h2 className="h-1" style={{ maxWidth: 720, marginBottom: 56 }}>
        Quality that comes from forty years of building modules indoors
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 24,
      }}>
        {[
          { n: "100%", label: "Swedish production" },
          { n: "40+",  label: "Years of experience in prefabricated modular solutions" },
          { n: "30+",  label: "Countries we have delivered to" },
          { n: "0%",   label: "HSE — severe events" },
        ].map((s, i) => (
          <div key={i} style={{
            borderTop: "1px solid var(--ms-navy-700)",
            paddingTop: 18,
          }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--ms-navy-700)",
              fontVariantNumeric: "tabular-nums",
            }}>{s.n}</div>
            <div style={{
              fontSize: 14, lineHeight: 1.45,
              color: "var(--fg-2)",
              marginTop: 16,
              maxWidth: "22ch",
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.StatsBlock = StatsBlock;
