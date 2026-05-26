/* eslint-disable */
// HealthcarePage — secondary business-area page. Same chrome, denser body content.

const HealthcarePage = ({ onNavigate }) => (
  <main>
    <Hero
      eyebrow="Business areas · Healthcare"
      title="Operating theatres, ICUs, diagnostics — modular and permanent"
      kicker="Solutions for hospitals: operating rooms, laboratories, clean rooms, intensive care units, diagnostics. Permanent or temporary, attached to existing facilities with minimal disruption."
      image="../../assets/swedish-modules-sodersjukhuset_mg_0505-1024x683.jpg"
      ctaLabel="Discuss a project"
      onCta={() => onNavigate("contact")}
      height={560}
    />

    <section className="section">
      <div className="container">
        <div className="eyebrow-strip">
          <span className="eyebrow">Care functions we deliver</span>
        </div>
        <h2 className="h-1" style={{ maxWidth: 720, marginBottom: 48 }}>
          A standardised platform, customised in every detail
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          border: "1px solid var(--border-1)",
          borderRadius: 8,
          overflow: "hidden",
        }}>
          {[
            ["Operating theatres", "Class IA/IB, hybrid OR, ophthalmology"],
            ["Intensive care", "ICU bays, isolation, step-down"],
            ["Diagnostics", "MRI, CT, X-ray, ultrasound suites"],
            ["Clean rooms", "ISO Class 5–8, cGMP & FDA-compliant"],
            ["Laboratories", "BSL-2, pharma R&D, life sciences"],
            ["Pharmacy & sterile", "Aseptic compounding, CSSD"],
          ].map(([t, d], i) => (
            <div key={i} style={{
              padding: 32,
              borderRight: (i % 3) !== 2 ? "1px solid var(--border-1)" : "none",
              borderBottom: i < 3 ? "1px solid var(--border-1)" : "none",
              background: "#fff",
            }}>
              <span className="eyebrow" style={{ fontSize: 11 }}>0{i + 1}</span>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 22, fontWeight: 500,
                color: "var(--ms-navy-700)",
                margin: "12px 0 8px",
              }}>{t}</div>
              <div style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SolutionsList />
    <ReferenceCases />
  </main>
);

window.HealthcarePage = HealthcarePage;
