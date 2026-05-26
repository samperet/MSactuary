/* eslint-disable */
// SolutionsList — "With our solutions you get" pattern.
// Left: heading + lede on bone. Right: 4 bolded-promise rows.

const SolutionsList = () => (
  <section className="section" style={{ background: "var(--bg-1)" }}>
    <div className="container">
      <div style={{
        display: "grid",
        gridTemplateColumns: "5fr 7fr",
        gap: 80,
        alignItems: "start",
      }}>
        <div>
          <div className="eyebrow-strip">
            <span className="eyebrow">With our solutions you get</span>
          </div>
          <h2 className="h-1" style={{ marginBottom: 20 }}>
            Save time and costs on-site
          </h2>
          <p className="lede">
            Through a high degree of prefabrication, we provide quality assurance and reliable delivery — minimising the risk of delays and increased costs.
          </p>
        </div>

        <div style={{ display: "grid", gap: 28 }}>
          {[
            ["A flexible solution",
              "for both permanent and temporary facilities."],
            ["Short delivery time",
              "compared to site-built. Up to 50 % reduction enables faster access to capacity."],
            ["Minimal disturbance on-site",
              "sensitive existing operations experience minimal disruption — roughly five weeks on site."],
            ["Sustainable solutions",
              "our prefabricated modules can be relocated, reused, renovated and adapted."],
            ["Industrial premium",
              "products designed to last. Robust steel construction, heavy process equipment, heavy lifting."],
            ["Full control",
              "95 % of the construction work takes place in a production facility \u2014 a plug & play result."],
          ].map(([t, d], i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "210px 1fr",
              gap: 24,
              paddingBottom: 24,
              borderBottom: i < 5 ? "1px solid var(--border-1)" : "none",
              alignItems: "baseline",
            }}>
              <span style={{
                fontSize: 16, fontWeight: 600,
                color: "var(--ms-navy-700)",
                fontFamily: "var(--font-body)",
              }}>{t}</span>
              <span style={{
                fontSize: 15, lineHeight: 1.55,
                color: "var(--fg-2)",
              }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

window.SolutionsList = SolutionsList;
