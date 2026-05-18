import "./styles.css";

const storyMilestones = [
  {
    id: "definition",
    label: "What is mining?",
    note: "Start with the basic definition and why it matters in the Philippines."
  },
  {
    id: "causes",
    label: "Why does it happen?",
    note: "Look at demand, jobs, land conversion, and weak enforcement."
  },
  {
    id: "effects",
    label: "What are the impacts?",
    note: "See ecosystem and community damage from forests to fisheries."
  },
  {
    id: "status",
    label: "What is happening now?",
    note: "Review current permits, policy action, and remaining gaps."
  }
];

const causes = [
  {
    title: "High mineral demand",
    body: "Nickel, gold, and copper are used in phones, construction, and batteries. Growing demand pushes extraction deeper into mountains and forest zones.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial worker with metal and construction materials"
  },
  {
    title: "Economic opportunities",
    body: "Mining can create jobs and local income, especially in provinces with limited industries, so communities and companies continue to support operations.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
    alt: "Workers on a rugged worksite wearing hard hats"
  },
  {
    title: "Weak law enforcement",
    body: "Environmental rules exist, but enforcement is uneven. Some companies are still able to operate despite violations in sensitive watersheds and habitats.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Paperwork and legal documents on a desk representing regulation"
  },
  {
    title: "Illegal and small-scale mining",
    body: "Unregulated mining can continue without proper safeguards, waste handling, or rehabilitation plans, which increases immediate environmental pressure.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Rough terrain and improvised extraction area"
  },
  {
    title: "Land conversion",
    body: "Forests and mountain slopes are cleared to reach deposits. This removes natural protection against erosion, floods, and landslides.",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    alt: "Cleared hillside with sparse tree cover"
  }
];

const effects = [
  {
    title: "Deforestation and habitat loss",
    body: "Large-scale clearing removes forest cover and breaks habitat corridors. Wildlife loses shelter, food sources, and breeding spaces.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    alt: "Forest clearing on a mountain slope"
  },
  {
    title: "Water Pollution",
    body: "Mining waste and chemical runoff can contaminate rivers and coastlines. This threatens drinking water, irrigation, and aquatic ecosystems.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    alt: "Muddy river water flowing through disturbed land"
  },
  {
    title: "Land degradation",
    body: "Open-pit and slope disturbance increase soil erosion and landslide risk. Farmland becomes harder to recover after extraction.",
    image:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1400&q=80",
    alt: "Eroded rocky hillside with loose soil"
  },
  {
    title: "Marine and aquatic damage",
    body: "Sediments can travel from upland mines to rivers and seas, reducing water quality and damaging coral, fish nurseries, and coastal livelihoods.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
    alt: "Coastal waters and fishing area near shore"
  },
  {
    title: "Community and health impacts",
    body: "People living near mining zones may face respiratory problems, exposure to toxic substances, and loss of farming or fishing income.",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1400&q=80",
    alt: "Rural community members in a livelihood area"
  }
];

const references = [
  {
    label: "Inquirer: Philippine nickel output news",
    url: "https://business.inquirer.net"
  },
  {
    label: "MGB: Mining Tenements Database",
    url: "https://webgis.mgb.gov.ph"
  },
  {
    label: "S&P Global: Philippines mining by the numbers",
    url: "https://www.spglobal.com"
  },
  {
    label: "ABS-CBN News (2017): mine closures and suspensions",
    url: "https://news.abs-cbn.com"
  },
  {
    label: "Philippine News Agency mining-related article",
    url: "https://www.pna.gov.ph"
  },
  {
    label: "Journal of Cleaner Production (2024)",
    url: "https://www.sciencedirect.com"
  },
  {
    label: "Mogpog River mining pollution study",
    url: "https://scholar.google.com"
  },
  {
    label: "Land use change study (Monash University)",
    url: "https://research.monash.edu"
  },
  {
    label: "MDPI Remote Sensing: black sand mining study",
    url: "https://www.mdpi.com"
  },
  {
    label: "Reuters (2026): mining environmental risks",
    url: "https://www.reuters.com"
  },
  {
    label: "The Guardian: Palawan mining report",
    url: "https://www.theguardian.com"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="paper-texture" aria-hidden="true"></div>
  <header class="hero" id="top">
    <nav class="nav container">
      <a class="brand" href="#top">People & Earth Advocacy</a>
      <div class="nav-links">
        <a href="#definition">Definition</a>
        <a href="#causes">Causes</a>
        <a href="#effects">Effects</a>
        <a href="#status">Status</a>
        <a href="#references">References</a>
      </div>
    </nav>
    <div class="hero-content container">
      <p class="eyebrow">Student Advocacy Page · Philippines</p>
      <h1>Environmental Impacts of Mining in the Philippines</h1>
      <p class="subtitle">
        We made this page to explain, in a clear way, how mining supports parts of the economy
        but also puts forests, rivers, marine life, and communities at risk when operations are not well managed.
      </p>
      <div class="hero-actions">
        <a class="cta" href="#definition">Start with Definition</a>
        <a class="ghost" href="#effects">Jump to Effects</a>
      </div>
      <div class="anchor-pills" aria-label="Jump to sections">
        <a href="#definition">Definition</a>
        <a href="#causes">Causes</a>
        <a href="#effects">Effects</a>
        <a href="#status">Current Status</a>
      </div>
    </div>
  </header>

  <main>
    <section id="overview" class="container section story-track">
      <h2>The Story Flow</h2>
      <p>
        Follow the issue from basic definition to present-day status. Each section explains one part
        of the mining story so the environmental impacts are easier to understand.
      </p>
      <div class="timeline-grid">
        ${storyMilestones
          .map(
            (step, index) => `
          <a class="timeline-step" href="#${step.id}">
            <span class="step-number">0${index + 1}</span>
            <h3>${step.label}</h3>
            <p>${step.note}</p>
          </a>`
          )
          .join("")}
      </div>
    </section>

    <div class="divider"></div>

    <section id="definition" class="container section split-story">
      <div>
        <p class="section-label">Definition</p>
        <h2>What is mining?</h2>
        <p>
          Mining is the process of extracting minerals such as gold, nickel, and copper from the Earth.
          In the Philippines, this is commonly done through open-pit and underground methods.
        </p>
        <p>
          Mining helps supply industries and can support economic growth, but if it is poorly managed,
          it can create long-term damage to ecosystems and nearby communities.
        </p>
        <aside class="note-box">
          <strong>Why this matters:</strong> Definition is not just a dictionary meaning. It sets the context for why
          policy, monitoring, and accountability are important.
        </aside>
      </div>
      <figure class="story-figure">
        <img
          src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=1400&q=80"
          alt="Workers and heavy equipment in a mining site"
          loading="lazy"
        />
        <figcaption>
          Mining operations in rugged terrain show why extraction is both economically valuable and environmentally risky.
        </figcaption>
      </figure>
    </section>

    <section id="causes" class="container section">
      <p class="section-label">Cause/s</p>
      <h2>Why does mining expansion continue?</h2>
      <div class="cause-layout">
        ${causes
          .map(
            (item, index) => `
          <article class="cause-row">
            <figure>
              <img src="${item.image}" alt="${item.alt}" loading="lazy" />
              <figcaption>${item.title}: this image reflects one real driver behind continued mining activity.</figcaption>
            </figure>
            <div class="cause-text">
              <span>0${index + 1}</span>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>

    <section class="section flow-wrap" aria-label="Cause and impact flow">
      <div class="container">
        <h3>From Extraction to Impact</h3>
        <div class="flow">
          <div>High demand for minerals</div>
          <div>More land clearing and excavation</div>
          <div>Waste, runoff, and habitat disruption</div>
          <div>Damage to forests, rivers, and seas</div>
          <div>Health and livelihood risks</div>
        </div>
      </div>
    </section>

    <section id="effects" class="container section">
      <p class="section-label">Effect/s</p>
      <h2>How ecosystems and communities are affected</h2>
      <p class="section-intro">
        These impacts are connected. Damage in upland areas can travel downstream and affect farming,
        fisheries, and community health.
      </p>
      <div class="effects-stack">
        ${effects
          .map(
            (item) => `
          <article class="impact-band">
            <figure>
              <img src="${item.image}" alt="${item.alt}" loading="lazy" />
              <figcaption>${item.title}: this visual matches the environmental pressure described in this section.</figcaption>
            </figure>
            <div class="impact-content">
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>

    <section id="status" class="container section status-layout">
      <div>
        <p class="section-label">Current Status</p>
        <h2>Where things stand in the Philippines</h2>
        <p>
          The Philippines is one of the world's leading nickel producers and also has major gold and copper resources.
          Many permits and applications are active across the country, including sites near environmentally sensitive areas.
        </p>
        <p>
          In 2017, the government ordered closures and suspensions of several mining operations due to environmental
          violations that affected ecosystems and communities. This showed that policy action is possible, but monitoring
          and enforcement still need to be consistent.
        </p>
        <aside class="note-box">
          <strong>Why this matters:</strong> Current status is not just a statistic. It shows whether environmental protection is actually happening on the ground.
        </aside>
      </div>
      <div class="status-column">
        <figure class="story-figure compact">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
            alt="Coastal landscape in the Philippines representing vulnerable ecological zones"
            loading="lazy"
          />
          <figcaption>
            Coastal and upland ecosystems in the Philippines are closely connected, so impacts from one area can spread to another.
          </figcaption>
        </figure>
        <div class="status-card">
          <p><strong>By the numbers:</strong></p>
          <p>Leading global nickel producer</p>
          <p>Many approved mining permits and applications</p>
          <p>2017 closures/suspensions due to violations</p>
        </div>
      </div>
    </section>

    <section class="container section cta-panel">
      <h2>What can students and communities push for?</h2>
      <p>
        Better enforcement, transparent reporting, and community participation in decision-making can reduce harm.
        Mining discussions should always include the people who depend on land, rivers, and seas for daily life.
      </p>
    </section>

    <section id="references" class="container section references">
      <h2>References</h2>
      <ul>
        ${references
          .map(
            (item) => `
          <li>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>
          </li>`
          )
          .join("")}
      </ul>
    </section>
  </main>
`;
