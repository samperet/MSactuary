/* eslint-disable */
// Footer — navy plate with three columns (Contact / Mailing / Visit), LinkedIn glyph,
// thin baseline with copyright and integrity-policy link.

const Footer = () => (
  <footer style={{
    background: "var(--ms-navy-700)",
    color: "#fff",
    padding: "72px 0 28px",
  }}>
    <div className="container">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
        gap: 48,
        alignItems: "start",
        marginBottom: 56,
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <img src="../../assets/medic-solution_symbol.png" alt=""
                 style={{ height: 40, filter: "brightness(0) invert(1)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>MedicSolution</span>
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", opacity: 0.8 }}>NORDIC&nbsp;&nbsp;AB</span>
            </div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.78, maxWidth: 280 }}>
            Modular medical infrastructure, manufactured in Sweden and delivered worldwide.
          </p>
        </div>

        <div>
          <FootCol title="Contact us">
            <a href="mailto:info@medicsolution.com">info@medicsolution.com</a>
            <a href="mailto:service@medicsolution.com">service@medicsolution.com</a>
            <span style={{ opacity: 0.65, marginTop: 8, fontSize: 12 }}>Org. no. 556769-9490</span>
          </FootCol>
        </div>

        <div>
          <FootCol title="Mailing address">
            <span>MedicSolution Nordic AB</span>
            <span>Kanalvägen 6</span>
            <span>194 61 Upplands Väsby</span>
          </FootCol>
        </div>

        <div>
          <FootCol title="Visit">
            <span><strong style={{ fontWeight: 500 }}>Head quarter</strong><br/>Upplands Väsby</span>
            <span><strong style={{ fontWeight: 500 }}>Regional South</strong><br/>Malmö</span>
            <span><strong style={{ fontWeight: 500 }}>Regional West</strong><br/>Trollhättan</span>
          </FootCol>
        </div>

        <div>
          <FootCol title="Follow">
            <a href="#" onClick={(e) => e.preventDefault()}
               style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.31 19H5.69V8.81h2.62V19zM7 7.6c-.85 0-1.5-.66-1.5-1.5S6.15 4.6 7 4.6s1.5.66 1.5 1.5S7.85 7.6 7 7.6zM19 19h-2.62v-5.36c0-1.42-.51-2.16-1.58-2.16-1.18 0-1.8.79-1.8 2.16V19h-2.52V8.81H13v1.15s.76-1.4 2.56-1.4c1.8 0 3.44 1.1 3.44 3.37V19z"/>
              </svg>
              LinkedIn
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>Newsletter</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Work with us</a>
          </FootCol>
        </div>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: 28,
        borderTop: "1px solid rgba(255,255,255,0.18)",
        fontSize: 12, opacity: 0.7,
      }}>
        <span>© 2024 MedicSolution Nordic AB — All rights reserved</span>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "inherit" }}>Integrity Policy</a>
      </div>
    </div>

    <style>{`
      footer a { color: #fff; text-decoration: none; opacity: 0.9; transition: opacity var(--dur-fast); }
      footer a:hover { opacity: 1; text-decoration: underline; }
    `}</style>
  </footer>
);

const FootCol = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <span style={{
      fontSize: 11, fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      opacity: 0.7,
      marginBottom: 8,
    }}>{title}</span>
    {React.Children.map(children, (child, i) =>
      typeof child === "string" || child?.type === "span"
        ? React.cloneElement(typeof child === "string" ? <span>{child}</span> : child,
            { style: { ...(child.props?.style || {}), fontSize: 14, lineHeight: 1.5, opacity: 0.9 }, key: i })
        : child
    )}
  </div>
);

window.Footer = Footer;
