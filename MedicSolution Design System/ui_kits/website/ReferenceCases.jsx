/* eslint-disable */
// ReferenceCases — alternating image/text rows (3 case studies).
// The site uses photo-heavy reference pages; this captures that rhythm.

const CASES = [
  {
    eyebrow: "Healthcare · Stockholm",
    title: "Operating-theatre extension at Södersjukhuset",
    blurb: "Six modular operating rooms delivered as a turnkey extension to one of Stockholm's largest hospitals, installed with minimal disruption to ongoing surgery.",
    meta: ["6 modules", "12 weeks on-site", "Delivered 2023"],
    image: "../../assets/sodersjukhuset-hospital-video.jpg",
  },
  {
    eyebrow: "Healthcare · Karlskoga",
    title: "Karlskoga hospital — modular theatre",
    blurb: "Replacement operating theatre delivered as a single fully-equipped module. Commissioning to first surgery in four weeks.",
    meta: ["1 module", "4 weeks on-site", "Delivered 2021"],
    image: "../../assets/karlskoga-operationssal_krop.jpg",
  },
  {
    eyebrow: "MAX24 · Civil preparedness",
    title: "MAX24-OP — ultra-mobile operating theatre",
    blurb: "Self-sufficient operating theatre with pre-/post-op rooms, deployable by truck, boat, train or plane within 24 hours of activation.",
    meta: ["≤ 24 h deployment", "L 16.4 × W 6.4 × H 3.95 m expanded", "Available under SLA"],
    image: "../../assets/max24_inuti_texter.jpg",
    accent: true,
  },
];

const ReferenceCases = () => (
  <section className="section" style={{ background: "var(--bg-2)" }}>
    <div className="container">
      <div className="eyebrow-strip">
        <span className="eyebrow">References</span>
      </div>
      <h2 className="h-1" style={{ maxWidth: 720, marginBottom: 64 }}>
        A selection of recent projects across the Nordics
      </h2>

      <div style={{ display: "grid", gap: 64 }}>
        {CASES.map((c, i) => (
          <article key={i} style={{
            display: "grid",
            gridTemplateColumns: i % 2 === 0 ? "7fr 5fr" : "5fr 7fr",
            gap: 48,
            alignItems: "center",
          }}>
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <img src={c.image} alt="" style={{
                width: "100%", aspectRatio: "4 / 3", objectFit: "cover",
                borderRadius: 8,
              }} />
            </div>
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              <span className="eyebrow" style={{
                color: c.accent ? "var(--ms-indigo-700)" : "var(--ms-navy-700)",
              }}>{c.eyebrow}</span>
              <h3 className="h-2" style={{ marginTop: 10, marginBottom: 16, maxWidth: "20ch" }}>
                {c.title}
              </h3>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: "var(--fg-2)", marginBottom: 22,
                maxWidth: 480,
              }}>{c.blurb}</p>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: 8,
                marginBottom: 24,
              }}>
                {c.meta.map((m, j) => (
                  <span key={j} style={{
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    padding: "6px 12px",
                    background: "#fff",
                    border: "1px solid var(--border-1)",
                    color: "var(--fg-2)",
                    borderRadius: 999,
                  }}>{m}</span>
                ))}
              </div>
              <a href="#" className="btn-link" onClick={(e) => e.preventDefault()}
                 style={{ fontSize: 14, fontWeight: 500, color: "var(--ms-navy-700)",
                          borderBottom: "1px solid currentColor", paddingBottom: 2,
                          textDecoration: "none" }}>
                View project &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

window.ReferenceCases = ReferenceCases;
