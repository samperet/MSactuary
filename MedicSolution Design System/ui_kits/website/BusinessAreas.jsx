/* eslint-disable */
// BusinessAreas — 4-up grid of card-outlined links to the four business areas.
// Hover lifts the card. Matches the home-page structure on medicsolution.com.

const AREAS = [
  {
    id: "healthcare",
    label: "Healthcare",
    blurb: "Operating theatres, ICUs, diagnostics. Permanent or temporary, attached to existing hospitals.",
    image: "../../assets/karlskoga-operationssal_krop.jpg",
  },
  {
    id: "research",
    label: "Research",
    blurb: "Laboratory facilities for pharma and life sciences. cGMP / FDA-compliant where required.",
    image: "../../assets/v6a0137-1024x683.jpg",
  },
  {
    id: "max24",
    label: "MAX24 — preparedness",
    blurb: "Ultra-mobile modules delivered in 24 hours when and where the need arises.",
    image: "../../assets/max24_inuti_texter.jpg",
    accent: true,
  },
  {
    id: "services",
    label: "Services",
    blurb: "Lifecycle services — maintenance, refurbishment, re-deployment.",
    image: "../../assets/swedish-modules-sodersjukhuset_mg_0505-1024x683.jpg",
  },
];

const BusinessAreas = ({ onNavigate }) => (
  <section className="section" style={{ background: "var(--bg-1)" }}>
    <div className="container">
      <div className="eyebrow-strip">
        <span className="eyebrow">Business areas</span>
      </div>
      <h2 className="h-1" style={{ maxWidth: 720, marginBottom: 48 }}>
        Permanent and temporary medical buildings, manufactured in Sweden
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 24,
      }}>
        {AREAS.map(a => (
          <a
            key={a.id}
            href="#"
            className="card-outlined"
            onClick={(e) => { e.preventDefault(); onNavigate(a.id); }}
            style={{ textDecoration: "none", color: "var(--fg-1)", display: "block" }}
          >
            <div style={{
              aspectRatio: "4 / 3",
              background: `url("${a.image}") center/cover no-repeat`,
              borderBottom: a.accent ? "3px solid var(--ms-indigo-600)" : "none",
            }} />
            <div style={{ padding: 24 }}>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 22, fontWeight: 500,
                letterSpacing: "-0.012em",
                color: a.accent ? "var(--ms-indigo-700)" : "var(--ms-navy-700)",
                marginBottom: 10,
              }}>{a.label}</h3>
              <p style={{
                fontSize: 14, lineHeight: 1.5, color: "var(--fg-2)",
                marginBottom: 18,
              }}>{a.blurb}</p>
              <span style={{
                fontSize: 13, fontWeight: 500,
                color: "var(--ms-navy-700)",
                borderBottom: "1px solid var(--ms-navy-700)",
                paddingBottom: 2,
              }}>Read more &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

window.BusinessAreas = BusinessAreas;
