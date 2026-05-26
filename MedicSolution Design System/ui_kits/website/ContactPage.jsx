/* eslint-disable */
// ContactPage — bone background, form on left, office details on right.

const ContactPage = () => {
  const [form, setForm] = React.useState({
    name: "", company: "", email: "", area: "max24", message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <main>
      <section style={{
        background: "var(--ms-navy-700)",
        color: "#fff",
        padding: "80px 0 60px",
      }}>
        <div className="container">
          <div className="brand-rule light"></div>
          <span className="eyebrow light">Get in touch</span>
          <h1 className="h-display" style={{ color: "#fff", marginTop: 14, maxWidth: 720 }}>
            Tell us about your project
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 80 }}>
            <div>
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                      style={{ display: "grid", gap: 22 }}>
                  <Field label="Full name">
                    <input value={form.name} onChange={update("name")} placeholder="Erik Lindqvist" required />
                  </Field>
                  <Field label="Organisation">
                    <input value={form.company} onChange={update("company")} placeholder="Region Stockholm" />
                  </Field>
                  <Field label="Email">
                    <input type="email" value={form.email} onChange={update("email")} placeholder="erik@hospital.se" required />
                  </Field>
                  <Field label="Area of interest">
                    <select value={form.area} onChange={update("area")}>
                      <option value="healthcare">Healthcare — permanent</option>
                      <option value="research">Research laboratories</option>
                      <option value="max24">MAX24 — preparedness</option>
                      <option value="services">Services & maintenance</option>
                    </select>
                  </Field>
                  <Field label="Tell us about your project">
                    <textarea value={form.message} onChange={update("message")} rows={5}
                              placeholder="Scope, timeline, site constraints…" />
                  </Field>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
                    <button type="submit" className="btn btn-primary">
                      Send request &rarr;
                    </button>
                    <span style={{ fontSize: 12, color: "var(--fg-3)" }}>
                      We typically respond within 1–2 working days.
                    </span>
                  </div>
                </form>
              ) : (
                <div style={{
                  border: "1px solid var(--ms-navy-200)",
                  background: "var(--ms-navy-050)",
                  padding: 32, borderRadius: 8,
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28, fontWeight: 500,
                    color: "var(--ms-navy-700)", marginBottom: 12,
                  }}>Thank you, {form.name || "we'll be in touch"}.</div>
                  <p style={{ color: "var(--fg-2)", lineHeight: 1.6 }}>
                    A member of our sales team will respond to <strong>{form.email || "your email"}</strong> within 1–2 working days. For urgent preparedness requests, call our 24-hour service line.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", area: "max24", message: "" }); }}
                          className="btn-link" style={{ marginTop: 16, background: "transparent", border: "none", color: "var(--ms-navy-700)", padding: 0, borderBottom: "1px solid currentColor" }}>
                    Send another request &rarr;
                  </button>
                </div>
              )}
            </div>

            <aside style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              <Office
                title="Head quarter"
                lines={["MedicSolution Nordic AB", "Kanalvägen 6", "194 61 Upplands Väsby", "Sweden"]}
              />
              <Office
                title="Regional Office South"
                lines={["Jörgen Kocksgatan 4", "211 20 Malmö", "Sweden"]}
              />
              <Office
                title="Regional Office West"
                lines={["Saabvägen 5, hus C29", "461 38 Trollhättan", "Sweden"]}
              />
              <div style={{ paddingTop: 24, borderTop: "1px solid var(--border-1)" }}>
                <span className="eyebrow" style={{ display: "block", marginBottom: 12 }}>Direct</span>
                <div style={{ fontSize: 14, lineHeight: 1.7 }}>
                  <div><a href="mailto:info@medicsolution.com">info@medicsolution.com</a></div>
                  <div><a href="mailto:service@medicsolution.com">service@medicsolution.com</a></div>
                  <div><a href="mailto:salesinfo@medicsolution.com">salesinfo@medicsolution.com</a></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

const Field = ({ label, children }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-2)", letterSpacing: "0.02em" }}>{label}</span>
    {React.cloneElement(children, {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 15,
        padding: "12px 14px",
        border: "1px solid var(--border-2)",
        borderRadius: 4,
        background: "#fff",
        color: "var(--fg-1)",
        outline: "none",
        ...(children.props.style || {}),
      },
      onFocus: (e) => { e.currentTarget.style.borderColor = "var(--ms-navy-700)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--ms-indigo-200)"; },
      onBlur: (e) => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.boxShadow = "none"; },
    })}
  </label>
);

const Office = ({ title, lines }) => (
  <div>
    <span className="eyebrow" style={{ display: "block", marginBottom: 10 }}>{title}</span>
    <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--fg-2)" }}>
      {lines.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  </div>
);

window.ContactPage = ContactPage;
