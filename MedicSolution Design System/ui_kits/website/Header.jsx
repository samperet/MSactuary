/* eslint-disable */
// Header — sticky top nav, MS+ symbol + wordmark, navigation links + EN/SV toggle.
// Matches medicsolution.com layout: white background, navy text, no shadow,
// thin 1px bottom border. Submenu shown as a flyout on hover.

const Header = ({ current, onNavigate }) => {
  const [openMenu, setOpenMenu] = React.useState(null);

  const links = [
    {
      id: "business",
      label: "Business areas",
      children: [
        { id: "healthcare", label: "Healthcare" },
        { id: "research",   label: "Research" },
        { id: "max24",      label: "MAX24 \u2013 preparedness" },
        { id: "services",   label: "Services" },
      ],
    },
    { id: "references", label: "References" },
    { id: "about",      label: "About us" },
    { id: "news",       label: "News" },
    { id: "contact",    label: "Contact" },
  ];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#fff",
      borderBottom: "1px solid var(--border-1)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", gap: 32, height: 72,
      }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          <img src="../../assets/medic-solution_symbol.png" style={{ height: 36 }} alt="" />
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 20, fontWeight: 600,
            color: "var(--ms-navy-700)",
            letterSpacing: "-0.012em",
            lineHeight: 1,
          }}>MedicSolution</span>
        </a>

        <nav style={{
          display: "flex", gap: 28, marginLeft: "auto",
          alignItems: "center",
        }}>
          {links.map(l => (
            <div
              key={l.id}
              style={{ position: "relative", padding: "26px 0" }}
              onMouseEnter={() => l.children && setOpenMenu(l.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: current === l.id ? "var(--ms-navy-700)" : "var(--fg-1)",
                  textDecoration: "none",
                  paddingBottom: 4,
                  borderBottom: current === l.id ? "2px solid var(--ms-navy-700)" : "2px solid transparent",
                }}
              >
                {l.label}
              </a>
              {l.children && openMenu === l.id && (
                <div style={{
                  position: "absolute", top: "100%", left: -16,
                  background: "#fff",
                  border: "1px solid var(--border-1)",
                  boxShadow: "var(--shadow-3)",
                  padding: "10px 0",
                  minWidth: 240,
                  borderRadius: 4,
                }}>
                  {l.children.map(c => (
                    <a
                      key={c.id}
                      href="#"
                      onClick={(e) => { e.preventDefault(); onNavigate(c.id); setOpenMenu(null); }}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        fontSize: 14,
                        color: "var(--fg-1)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "var(--ms-navy-050)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >{c.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{
            display: "flex", alignItems: "center", gap: 0,
            marginLeft: 8, paddingLeft: 16,
            borderLeft: "1px solid var(--border-1)",
            fontSize: 13,
            fontWeight: 500,
          }}>
            <span style={{ color: "var(--ms-navy-700)" }}>EN</span>
            <span style={{ color: "var(--fg-4)", padding: "0 6px" }}>/</span>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--fg-3)" }}>SV</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

window.Header = Header;
