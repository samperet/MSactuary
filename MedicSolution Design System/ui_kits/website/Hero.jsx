/* eslint-disable */
// Hero — full-bleed photograph with a navy gradient overlay holding a white display headline.
// Matches the brand: thin brand rule, eyebrow, big display headline, optional kicker, one CTA.

const Hero = ({
  eyebrow = "Modular medical infrastructure",
  title,
  kicker,
  ctaLabel,
  onCta,
  image,
  height = 620,
}) => (
  <section style={{
    position: "relative",
    height,
    background: `linear-gradient(180deg, rgba(5,29,49,0.45) 0%, rgba(5,29,49,0.75) 90%), url("${image}") center/cover no-repeat`,
    color: "#fff",
    display: "flex",
    alignItems: "flex-end",
  }}>
    <div className="container" style={{ paddingBottom: 80, width: "100%" }}>
      <div style={{ maxWidth: 880 }}>
        <div className="brand-rule light"></div>
        <span className="eyebrow light">{eyebrow}</span>
        <h1 className="h-display" style={{ color: "#fff", marginTop: 16, marginBottom: 24 }}>
          {title}
        </h1>
        {kicker && (
          <p style={{
            fontSize: 18, lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 640, marginBottom: 32,
          }}>{kicker}</p>
        )}
        {ctaLabel && (
          <button className="btn btn-on-dark" onClick={onCta}>
            {ctaLabel}
            <span style={{ fontSize: 16, marginTop: -1 }}>&rarr;</span>
          </button>
        )}
      </div>
    </div>
  </section>
);

window.Hero = Hero;
