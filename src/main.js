import "./styles.css";

const effects = [
  {
    icon: "🌳",
    title: "Deforestation",
    body: "Mining operations clear forest lands, which destroys habitats and reduces biodiversity in already fragile ecosystems.",
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1200&q=80",
    alt: "A logged forest area showing heavy tree loss"
  },
  {
    icon: "🧪",
    title: "Water Pollution",
    body: "Chemicals like mercury and cyanide can leak into rivers. The Marcopper disaster in Marinduque remains a major warning sign for river communities.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "A river with discolored water indicating pollution"
  },
  {
    icon: "⛰️",
    title: "Land Degradation",
    body: "Open-pit excavation speeds up soil erosion and landslides, making land less stable for farming and changing local landscapes.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    alt: "Eroded mining land with loose soil"
  },
  {
    icon: "🌊",
    title: "Marine Damage",
    body: "Sediments and mining runoff travel downstream and harm coral reefs, fisheries, and coastal waters that support food and jobs.",
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80",
    alt: "A coral reef ecosystem in coastal waters"
  },
  {
    icon: "👥",
    title: "Social Effects",
    body: "Communities can face displacement, health risks from contaminated water and air, and loss of farming and fishing livelihoods.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    alt: "A rural community near a mountain landscape"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-bg" aria-hidden="true"></div>
  <header class="hero" id="top">
    <nav class="nav container">
      <a class="brand" href="#top">People & Earth</a>
      <div class="nav-links">
        <a href="#definition">Definition</a>
        <a href="#causes">Causes</a>
        <a href="#effects">Effects</a>
        <a href="#status">Status</a>
        <a href="#references">References</a>
      </div>
    </nav>
    <div class="hero-content container">
      <p class="eyebrow">Advocacy Brief · Philippines</p>
      <h1>How does mining affect the environment in the Philippines?</h1>
      <p class="subtitle">
        Mining brings income and minerals, but it can also leave forests thinner,
        rivers polluted, coastlines damaged, and communities at risk.
      </p>
      <a class="cta" href="#overview">Explore the issue</a>
    </div>
  </header>

  <main>
    <section id="overview" class="container section split">
      <div>
        <h2>Quick Overview</h2>
        <p>
          The Philippines is rich in <strong>gold, nickel, and copper</strong>. Mining helps jobs and revenue,
          but without strong safeguards it causes long-term environmental harm.
          This page breaks down the definition, causes, effects, and current policy status.
        </p>
      </div>
      <div class="map-card" role="img" aria-label="Stylized map-inspired islands of the Philippines"></div>
    </section>

    <div class="divider"></div>

    <section id="definition" class="container section">
      <h2>1) Definition</h2>
      <p>
        Mining is the process of extracting valuable minerals from the earth. In the Philippines,
        mining is economically important because the country has major reserves of gold, nickel,
        and copper. These minerals support industries and exports, but extraction can also result in
        severe environmental damage when not managed responsibly.
      </p>
      <img
        src="https://images.unsplash.com/photo-1591302418462-eb55463b49d6?auto=format&fit=crop&w=1400&q=80"
        alt="Open pit mining site in a mountainous area"
        class="feature-image"
      />
    </section>

    <section id="causes" class="container section">
      <h2>2) Causes of Environmental Issues</h2>
      <div class="cause-grid">
        <article class="cause-item"><span>01</span>Large-scale land clearing</article>
        <article class="cause-item"><span>02</span>Open-pit mining methods</article>
        <article class="cause-item"><span>03</span>Chemical use: mercury and cyanide</article>
        <article class="cause-item"><span>04</span>Weak enforcement of environmental laws</article>
        <article class="cause-item"><span>05</span>Mining near rivers, forests, and coasts</article>
      </div>
    </section>

    <section class="section flow-wrap">
      <div class="container">
        <h3>Cause to Effect Flow</h3>
        <div class="flow">
          <div>Land Clearing</div>
          <div>Open-Pit Mining</div>
          <div>Chemicals & Runoff</div>
          <div>Environmental Damage</div>
          <div>Community Impact</div>
        </div>
      </div>
    </section>

    <section id="effects" class="container section">
      <h2>3) Effects</h2>
      <div class="effects-grid">
        ${effects
          .map(
            (item) => `
          <article class="impact-card">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" />
            <div class="impact-content">
              <h3>${item.icon} ${item.title}</h3>
              <p>${item.body}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>

    <section id="status" class="container section split">
      <div>
        <h2>4) Current Status</h2>
        <p>
          Mining in the country is regulated by the <strong>Philippine Mining Act of 1995</strong>.
          The law includes environmental requirements, but enforcement is sometimes weak on the ground.
          To reduce harm, stricter regulation and genuinely sustainable mining practices are needed.
        </p>
      </div>
      <div class="status-card">
        <p>🏛️ Policy exists</p>
        <p>⚠️ Enforcement gaps remain</p>
        <p>🌱 Stronger sustainable standards needed</p>
      </div>
    </section>

    <section class="container section cta-panel">
      <h2>What can we do?</h2>
      <p>
        Protecting people and ecosystems means balancing economic needs with environmental justice,
        transparent monitoring, and stronger local community participation.
      </p>
    </section>

    <section id="references" class="container section references">
      <h2>References</h2>
      <ul>
        <li>Journal of Cleaner Production (2024)</li>
        <li>Mogpog River Mining Pollution Study</li>
        <li>Land Use Change Study by Monash University</li>
        <li>Black Sand Mining Study, MDPI Remote Sensing Journal</li>
        <li>Reuters (2026) Mining Environmental Risks</li>
        <li>The Guardian Palawan Mining Report</li>
      </ul>
    </section>
  </main>
`;
