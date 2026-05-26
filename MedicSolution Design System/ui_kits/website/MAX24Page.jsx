/* eslint-disable */
// MAX24Page — the sub-brand preparedness page. Showcases the ultra-mobile module.
// Uses the indigo accent more heavily (the sub-brand's hint of edge).

const MAX24Page = ({ onNavigate }) => (
  <main>
    <Hero
      eyebrow="MAX24 — preparedness"
      title="Ultra-mobile buildings for civilian healthcare access"
      kicker="Manufactured and stocked in Sweden. Delivered when and where the need arises — by truck, boat, train or plane. Put into operation by one person."
      image="../../assets/max24_inuti_texter.jpg"
      ctaLabel="Request a quote"
      onCta={() => onNavigate("contact")}
      height={560}
    />

    {/* Spec strip */}
    <section style={{ background: "var(--ms-navy-900)", color: "#fff", padding: "32px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[
            ["≤ 24 h", "Maximum deployment time"],
            ["1 person", "Required to commission"],
            ["L 16.4 m", "Length (expanded W 6.4 m)"],
            ["100%", "Self-sufficient on delivery"],
          ].map(([n, l], i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 40, fontWeight: 500, lineHeight: 1,
                letterSpacing: "-0.022em",
                fontVariantNumeric: "tabular-nums",
              }}>{n}</div>
              <div style={{ fontSize: 13, opacity: 0.75, marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Two-column "what / how" */}
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div className="eyebrow-strip">
              <span className="eyebrow" style={{ color: "var(--ms-indigo-700)" }}>Civil preparedness</span>
            </div>
            <h2 className="h-1" style={{ marginBottom: 20 }}>
              Secure civil preparedness within healthcare
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", marginBottom: 16 }}>
              MAX24 is a robust, flexible and reliable ultra-mobile modular platform. Simple logistics and short lead times are crucial when society is affected by serious events.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)" }}>
              Upon commissioning, the MAX24 expands into a fully equipped care unit that meets all the requirements to provide civilian care without compromise.
            </p>
          </div>
          <div>
            <div className="eyebrow-strip">
              <span className="eyebrow" style={{ color: "var(--ms-indigo-700)" }}>Service or subscription</span>
            </div>
            <h2 className="h-1" style={{ marginBottom: 20 }}>
              SLA or subscription to secure capability
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", marginBottom: 16 }}>
              Ensure access to the right healthcare capacity during serious incidents. No capital tie-up, minimise overcapacity in property stock when not needed, and avoid the need for storage.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)" }}>
              MedicSolution guarantees that the agreed number of healthcare modules are delivered within a maximum of 24 hours, provided a subscription or contracted period is in place.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Floorplan */}
    <section style={{ background: "var(--bg-bone)", padding: "96px 0" }}>
      <div className="container">
        <div className="eyebrow-strip">
          <span className="eyebrow">MAX24-OP · Floorplan</span>
        </div>
        <h2 className="h-1" style={{ maxWidth: 720, marginBottom: 40 }}>
          A fully-equipped operating theatre with pre- and post-op rooms
        </h2>

        <div style={{
          background: "#fff",
          border: "1px solid var(--border-1)",
          borderRadius: 12,
          padding: 32,
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 32,
          alignItems: "center",
        }}>
          <img src="../../assets/max24_inuti_texter.jpg" alt=""
               style={{ width: "100%", borderRadius: 8 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              ["Tech room", "All HVAC, gas & electrical"],
              ["OP theater", "Ceiling pendants, surgical lights"],
              ["Pre-OP", "Patient preparation"],
              ["Post-OP", "Recovery beds"],
            ].map(([t, d], i) => (
              <div key={i} style={{
                paddingBottom: 14,
                borderBottom: i < 3 ? "1px solid var(--border-1)" : "none",
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ms-navy-700)" }}>{t}</div>
                <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: 4 }}>{d}</div>
              </div>
            ))}
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--fg-3)",
              marginTop: 8,
              paddingTop: 16,
              borderTop: "2px solid var(--ms-navy-700)",
            }}>
              L 16.4 × W 3.6 × H 3.95 m (transport)<br/>
              L 16.4 × W 6.4 × H 3.95 m (expanded)
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: "var(--ms-navy-700)", color: "#fff", padding: "72px 0" }}>
      <div className="container" style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32,
      }}>
        <div>
          <span className="eyebrow light">For more information</span>
          <h2 className="h-1" style={{ color: "#fff", marginTop: 12, marginBottom: 0 }}>
            Request a MAX24-OP quote
          </h2>
        </div>
        <button className="btn btn-on-dark" onClick={() => onNavigate("contact")}>
          salesinfo@medicsolution.com &rarr;
        </button>
      </div>
    </section>
  </main>
);

window.MAX24Page = MAX24Page;
