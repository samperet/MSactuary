/* eslint-disable */
// App — root component, simple in-memory router across the 5 page views.

const App = () => {
  const [page, setPage] = React.useState("home");

  const navigate = (id) => {
    // Map child IDs to top-level page slots
    const map = {
      home: "home",
      business: "home",   // top-level business areas hub → for the kit we land back home and let user pick
      references: "home", // anchor to the references section on home
      about: "home",
      news: "home",
      contact: "contact",
      healthcare: "healthcare",
      research: "healthcare",   // same template for sub-pages in this kit
      max24: "max24",
      services: "healthcare",
    };
    setPage(map[id] || "home");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  let view;
  if (page === "home") view = <HomePage onNavigate={navigate} />;
  else if (page === "max24") view = <MAX24Page onNavigate={navigate} />;
  else if (page === "healthcare") view = <HealthcarePage onNavigate={navigate} />;
  else if (page === "contact") view = <ContactPage />;
  else view = <HomePage onNavigate={navigate} />;

  return (
    <div>
      <Header current={page} onNavigate={navigate} />
      {view}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
