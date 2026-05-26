/* eslint-disable */
// HomePage — composes Hero + business areas + stats + solutions + references.
// This is the canonical view of medicsolution.com.

const HomePage = ({ onNavigate }) => (
  <main>
    <Hero
      eyebrow="Modular medical infrastructure"
      title="A flexible solution for permanent and temporary healthcare facilities"
      kicker="Through a high degree of prefabrication, we provide quality assurance and reliable delivery — minimising the risk of delays and increased costs. Manufactured in Sweden, delivered to 30+ countries."
      image="../../assets/karlskoga-operationssal_krop.jpg"
      ctaLabel="Explore business areas"
      onCta={() => onNavigate("business")}
      height={680}
    />
    <BusinessAreas onNavigate={onNavigate} />
    <SolutionsList />
    <StatsBlock />
    <ReferenceCases />
  </main>
);

window.HomePage = HomePage;
