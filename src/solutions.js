import "./solutions.css";
import Chart from "chart.js/auto";

import gmapHero from "./assets/solutions/gmap-hero.jpg";
import gmapMarinduque from "./assets/solutions/gmap-marinduque.jpg";
import tsmPalawan from "./assets/solutions/tsm-palawan.jpg";
import sdmpCommunity from "./assets/solutions/sdmp-community.jpg";

const HERO_IMAGE = gmapHero;

const solutionCards = [
  {
    id: "gmap",
    tag: "Bioremediation",
    title: "GMAP",
    body: "Greening mined-out areas with microbes and native trees — from Marinduque to Surigao and Cebu."
  },
  {
    id: "tsm",
    tag: "Industry ESG",
    title: "Towards Sustainable Mining",
    body: "A mandatory performance framework for Chamber of Mines members — audited, public, and globally recognized."
  },
  {
    id: "sdmp",
    tag: "Community Development",
    title: "SDMP",
    body: "Five-year community plans funded by mining contractors — livelihoods, education, and local development."
  }
];

const gmapTimeline = [
  {
    year: "2015",
    text: "GMAP launched in Barangay Capayang, Mogpog, Marinduque. Bioremediation of a 35-year abandoned copper mined-out area begins."
  },
  {
    year: "2018",
    text: "Marinduque Bioremediation Protocol formally established after three years of field research."
  },
  {
    year: "2020",
    text: "Protocol replicated in Taganito Mining Corporation (nickel) and Manila Mining Corporation (gold) in Surigao del Norte."
  },
  {
    year: "2023",
    text: "Surigao replication completed. New GMAP projects launched in Cebu, Zambales, and Marinduque Phase 2."
  },
  {
    year: "2025",
    text: "Rehabilitation expanded to Palawan and Leyte. DOST-NRCP presents GMAP before the House of Representatives."
  },
  {
    year: "2026",
    text: "UPLB-DOST-NRCP publishes impact assessment. 730% projected ROI confirmed at stakeholders forum in Marinduque."
  }
];

const references = [
  {
    label:
      "Aggangan, N. S. (2024). Rehabilitation of all mined-out areas, possible, DOST-NRCP researcher says.",
    url: "https://nrcp.dost.gov.ph/rehabilitation-of-all-mined-out-areas-possible-dost-nrcp-researcher-says/"
  },
  {
    label:
      "Dagupen, R. (2026). UPLB, DOST-NRCP present impacts of GMAP-Marinduque rehabilitation project.",
    url: "https://nrcp.dost.gov.ph/uplb-dost-nrcp-present-impacts-of-gmap-marinduque-rehabilitation-project-urge-sustained-bioremediation-efforts/"
  },
  {
    label: "Chamber of Mines of the Philippines (2024). Towards Sustainable Mining (TSM).",
    url: "https://chamberofmines.com.ph/beta/towards-sustainable-mining/"
  },
  {
    label: "Business Mirror (2024). Mining industry calls for stakeholder support for greater economic growth.",
    url: "https://businessmirror.com.ph/2024/05/08/mining-industry-calls-for-stakeholder-support-for-greater-economic-growth/"
  },
  {
    label: "DENR (2023). DENR set to revise miners' social development plans.",
    url: "https://denr.gov.ph/news-events/denr-set-to-revise-miners-social-development-plans/"
  },
  {
    label:
      "Manila Times (2025). Sustainable mining: How the Philippines balances resource extraction and ecology.",
    url: "https://www.manilatimes.net/2025/12/20/business/green-industries/sustainable-mining-how-the-philippines-balances-resource-extraction-and-ecology/2247183"
  },
  {
    label:
      "Villanueva, M. E. (2024). Mining and mandatory community development programs in the Philippines [Policy Brief]. ANU Philippines Institute.",
    url: "https://philippinesinstitute.anu.edu.au/content-centre/research/mining-and-mandatory-community-development-programs-philippines-legal"
  },
  {
    label: "UPLB-BIOTECH (2023). Biofertilizers make trees thrive in mined-out areas in Surigao.",
    url: "https://biotech.uplb.edu.ph/featured/uplb-biotech-biofertilizers-make-trees-thrive-in-mined-out-areas-in-surigao/"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="paper-texture" aria-hidden="true"></div>
  <header class="hero solutions-hero" id="top" style="--hero-image: url('${HERO_IMAGE}');">
    <nav class="nav container">
      <a class="brand" href="/">
        <span class="brand-mark" aria-hidden="true"></span>
        Unearthed
      </a>
      <div class="nav-links">
        <a href="/">The Issue</a>
        <a href="#overview">Overview</a>
        <a href="#gmap">GMAP</a>
        <a href="#tsm">TSM</a>
        <a href="#sdmp">SDMP</a>
        <a href="#references">Sources</a>
      </div>
    </nav>
    <div class="hero-content container">
      <p class="eyebrow">Existing Solutions \u00B7 Mining in the Philippines</p>
      <h1>
        <span class="hero-title-line hero-title-line-1">Paths Forward:</span>
        <span class="hero-title-line hero-title-line-2">How the Philippines Is</span>
        <span class="hero-title-line hero-title-line-3">Responding to Mining's Damage.</span>
      </h1>
      <p class="subtitle">
        Mining leaves scars that last generations. But scientists, industry, and communities are building responses —
        from bioremediation that brings barren land back to life, to accountability frameworks and community development funds.
      </p>
      <div class="hero-actions">
        <a class="cta" href="#gmap">Explore GMAP</a>
        <a class="ghost" href="/">Back to the issue</a>
      </div>
    </div>
  </header>

  <div class="solutions-stat-strip">
    <div class="container solutions-stat-grid">
      <div>
        <p class="stat-number">21</p>
        <p class="stat-label">mined-out areas across the Philippines</p>
      </div>
      <div>
        <p class="stat-number">19</p>
        <p class="stat-label">Chamber of Mines members implementing TSM in 2024</p>
      </div>
      <div>
        <p class="stat-number">\u20B131.81B</p>
        <p class="stat-label">pledged through SDMP from 2002 to 2027</p>
      </div>
    </div>
  </div>

  <main>
    <section id="overview" class="container section story-track solution-section" data-reveal>
      <p class="section-label">Three Existing Solutions</p>
      <h2>Science, industry standards, and community investment.</h2>
      <p class="solution-lead">
        Based on our research for <em>People and the Earth's Ecosystems</em>, three major programs address mining damage in the Philippines today.
        Each works differently — and each has real results alongside real limits.
      </p>
      <div class="solution-overview-grid">
        ${solutionCards
          .map(
            (card) => `
          <a class="solution-overview-card" href="#${card.id}" data-reveal>
            <span class="solution-tag">${card.tag}</span>
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </a>`
          )
          .join("")}
      </div>
    </section>

    <div class="solution-divider"></div>

    <section id="gmap" class="container section solution-section" data-reveal>
      <p class="section-label">Solution 01 \u00B7 Bioremediation</p>
      <h2>GMAP: Greening Mined-Out Areas in the Philippines</h2>
      <p class="solution-lead">
        When a mine closes, it rarely leaves anything green behind. GMAP uses living microorganisms and native tree species
        to rehabilitate land poisoned by heavy metals — turning barren tailings into living forest again.
      </p>

      <div class="solution-feature" data-reveal>
        <figure>
          <img
            src="${gmapMarinduque}"
            alt="Native trees growing on a formerly barren mined-out area in Marinduque"
            loading="lazy"
          />
        </figure>
        <div>
          <p>
            Led by DOST-NRCP researcher Dr. Nelly S. Aggangan, GMAP developed a microbial-based protocol that rehabilitates
            mine tailing areas, enhances carbon capture, and reduces heavy metal contamination — the very damage mining leaves behind.
          </p>
          <p>
            In Barangay Capayang, Mogpog, Marinduque, narra trees now grow on formerly barren land, native biodiversity is returning,
            and the community has become more aware of and responsible for their environment.
            <span class="cite">NRCP, 2024 \u00B7 2025</span>
          </p>
        </div>
      </div>

      <h3 style="margin-top:2rem;font-family:'DM Serif Display',serif;font-size:1.45rem;">How does it work?</h3>
      <p>The process follows the <strong>Marinduque Bioremediation Protocol</strong> in three stages:</p>
      <div class="solution-stages">
        <article class="solution-stage" data-reveal>
          <span class="solution-stage-num">1</span>
          <div>
            <h4>Site Assessment</h4>
            <p>Scientists identify heavy metals in the soil and determine which native species — narra, lahi-lahi, mangkono — can survive and thrive.</p>
          </div>
        </article>
        <article class="solution-stage" data-reveal>
          <span class="solution-stage-num">2</span>
          <div>
            <h4>Microbial Inoculation</h4>
            <p>Mycorrhizal and nitrogen-fixing bacteria are introduced. Trees draw up and neutralize heavy metal pollutants through their root systems.</p>
          </div>
        </article>
        <article class="solution-stage" data-reveal>
          <span class="solution-stage-num">3</span>
          <div>
            <h4>Native Tree Planting and Monitoring</h4>
            <p>Inoculated seedlings are planted and monitored over years, tracking vegetation growth, soil improvement, and community impact.</p>
          </div>
        </article>
      </div>

      <div class="chart-card" data-reveal>
        <h3>GMAP Site Coverage Across the Philippines</h3>
        <p class="chart-caption">Active implementation sites as of 2025 across all three major island groups</p>
        <div class="metric-row">
          <div class="metric-box"><div class="mnum">21</div><div class="mlabel">Total mined-out areas nationwide</div></div>
          <div class="metric-box"><div class="mnum">3</div><div class="mlabel">Island groups with active sites</div></div>
          <div class="metric-box"><div class="mnum" style="color:var(--moss);">6+</div><div class="mlabel">Active GMAP rehabilitation sites</div></div>
        </div>
        <div class="coverage-grid">
          <div class="coverage-box">
            <h4>Luzon</h4>
            <ul><li>Mogpog, Marinduque</li><li>Sta. Cruz, Marinduque</li><li>Sta. Cruz, Zambales</li><li>Palawan <span class="new-tag">2025</span></li></ul>
          </div>
          <div class="coverage-box">
            <h4>Visayas</h4>
            <ul><li>Toledo, Cebu</li><li>Leyte <span class="new-tag">2025</span></li></ul>
          </div>
          <div class="coverage-box">
            <h4>Mindanao</h4>
            <ul><li>Claver, Surigao del Norte</li><li>Placer, Surigao del Norte</li></ul>
          </div>
        </div>
        <div class="goal-banner">Goal: Re-green <strong>all 21 mined-out areas</strong> in the Philippines by <strong>2033</strong></div>
        <p class="chart-source">Source: NRCP.dost.gov.ph; DOST HNRDA 2022–2028</p>
      </div>

      <div class="chart-card" data-reveal>
        <h3>GMAP Budget Growth (2022 to 2028)</h3>
        <p class="chart-caption">Annual program budget in Philippine Peso millions</p>
        <div class="legend-row"><span><span class="legend-swatch" style="background:var(--forest-deep);"></span>Annual budget (\u20B1 million)</span></div>
        <div class="chart-wrap"><canvas id="budgetChart" aria-label="GMAP budget growth chart"></canvas></div>
        <p class="chart-source">Source: DOST Harmonized National R&amp;D Agenda (HNRDA) 2022–2028</p>
      </div>

      <div class="chart-card" data-reveal>
        <h3>Projected Return on Investment over 20 Years</h3>
        <p class="chart-caption">From the 2026 UPLB-DOST-NRCP impact assessment of GMAP-Marinduque</p>
        <div class="metric-row">
          <div class="metric-box"><div class="mnum">\u20B11</div><div class="mlabel">Initial investment</div></div>
          <div class="metric-box"><div class="mnum" style="color:var(--moss);">730%</div><div class="mlabel">ROI after 20 years</div></div>
          <div class="metric-box"><div class="mnum">\u20B18.30</div><div class="mlabel">Value returned per peso invested</div></div>
        </div>
        <div class="chart-wrap"><canvas id="roiChart" aria-label="GMAP projected ROI chart"></canvas></div>
        <p class="chart-source">Source: UPLB-DOST-NRCP Impact Assessment of GMAP-Marinduque, 2026</p>
      </div>

      <div class="chart-card" data-reveal>
        <h3>Nine Years of GMAP Progress (2015 to 2026)</h3>
        <p class="chart-caption">Key milestones from Marinduque to nationwide expansion</p>
        <div class="solution-timeline">
          ${gmapTimeline
            .map(
              (e) => `
            <div class="tl-item">
              <div class="tl-dot"></div>
              <div class="tl-year">${e.year}</div>
              <div class="tl-text">${e.text}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>

      <aside class="note-box" data-reveal>
        <strong>Assessment:</strong> GMAP is promising and scientifically credible — peer-reviewed, UPLB-led, and community-involved.
        However, with active implementation covering only a few provinces out of 21 mined-out areas nationwide, it is not yet robust at the national level.
        Its sustainability depends on continuous government funding and replication across all degraded sites.
        <span class="cite">MO-ENV076 Evaluating Solutions Worksheet, Grp. 2</span>
      </aside>

      <blockquote class="solution-quote" data-reveal>
        <p>\u201CBioremediation is more than a method. In Marinduque, it is a movement — a story not just of land restored, but of dignity reclaimed.\u201D</p>
        <cite>Marinduque News, 2025</cite>
      </blockquote>
    </section>

    <div class="solution-divider"></div>

    <section id="tsm" class="container section solution-section" data-reveal>
      <p class="section-label">Solution 02 \u00B7 Industry Accountability</p>
      <h2>TSM: Towards Sustainable Mining</h2>
      <p class="solution-lead">
        TSM is a set of tools and indicators designed to drive environmental and social performance in mining.
        Originally established in 2004 by the Mining Association of Canada, the Chamber of Mines of the Philippines
        made it mandatory for all member companies in 2024.
      </p>

      <div class="solution-feature reverse" data-reveal>
        <figure>
          <img
            src="${tsmPalawan}"
            alt="Aerial view of reforested watershed area in Palawan linked to sustainable mining rehabilitation"
            loading="lazy"
          />
        </figure>
        <div>
          <p>
            Beginning in 2024, all 19 Chamber of Mines member companies with operating mines are in full implementation of TSM —
            the first time this global ESG performance standard has been applied at this scale in the Philippines.
            <span class="cite">Chamber of Mines, 2024</span>
          </p>
          <p>
            Member mines submit self-assessment reports on eight TSM Protocols covering Safety and Health, Community and Indigenous Peoples Outreach,
            Crisis Management, and more. Ten of 19 mines undergo independent external verification, and all results are made public.
          </p>
        </div>
      </div>

      <div class="stat-grid" style="margin-top:1.6rem;">
        <article class="stat-card" data-reveal>
          <p class="stat-number">243.89 ha</p>
          <p class="stat-label">rehabilitated by Rio Tuba Nickel Mining Corp. in Palawan, earning TSM's highest rating for watershed restoration.</p>
          <p class="cite">Chamber of Mines / Manila Times, 2024–2025</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay:80ms;">
          <p class="stat-number">1.09M</p>
          <p class="stat-label">native trees planted by Rio Tuba, plus 428 hectares of mangrove reforestation and water for 11 community drinking stations.</p>
          <p class="cite">Business Mirror, 2024</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay:160ms;">
          <p class="stat-number">70%</p>
          <p class="stat-label">of processed water recycled by OceanaGold in 2024 — 108,000 cubic meters, enough to fill 43 Olympic-sized pools.</p>
          <p class="cite">Chamber of Mines, 2024</p>
        </article>
      </div>

      <div class="assessment-grid" data-reveal>
        <div class="assessment-pill"><strong>Effective?</strong><span>Yes — within large-scale formal mining</span></div>
        <div class="assessment-pill"><strong>Limitation</strong><span>Small-scale and illegal mining unregulated</span></div>
        <div class="assessment-pill"><strong>Verdict</strong><span>Robust but not comprehensive alone</span></div>
      </div>

      <aside class="note-box" data-reveal>
        <strong>Assessment:</strong> TSM is the most robust and internationally verifiable of the three solutions — globally recognized,
        independently audited, and publicly reported. However, it only covers large-scale formal mining companies, leaving small-scale and illegal mining
        entirely unregulated, which remains a major source of environmental damage in the Philippines.
        <span class="cite">MO-ENV076 Evaluating Solutions Worksheet, Grp. 2</span>
      </aside>
    </section>

    <div class="solution-divider"></div>

    <section id="sdmp" class="container section solution-section" data-reveal>
      <p class="section-label">Solution 03 \u00B7 Community Investment</p>
      <h2>SDMP: Social Development and Management Program</h2>
      <p class="solution-lead">
        Under the Philippine Mining Act of 1995, mining contractors must allocate at least 1.125% of operating costs to community development.
        SDMP is the five-year plan that turns that mandate into programs for host and neighboring communities.
      </p>

      <div class="solution-feature" data-reveal>
        <figure>
          <img
            src="${sdmpCommunity}"
            alt="Filipino community members whose livelihoods are tied to land and water near mining areas"
            loading="lazy"
          />
        </figure>
        <div>
          <p>
            SDMP aims to create responsible, self-reliant, resource-based communities capable of managing their own development independently.
            In November 2023, DENR held consultations to align revised SDMP guidelines with the UN Sustainable Development Goals.
            <span class="cite">DENR, 2023</span>
          </p>
          <p>
            Of the mandatory allocation: <strong>75%</strong> goes to community development programs, <strong>15%</strong> to mining technology and geosciences,
            and <strong>10%</strong> to information, education, and communication programs.
          </p>
        </div>
      </div>

      <div class="stat-grid" style="margin-top:1.6rem;">
        <article class="stat-card" data-reveal>
          <p class="stat-number">\u20B131.81B</p>
          <p class="stat-label">total pledged from 2002 to 2027, with \u20B120.3 billion already earmarked from 2002 to 2024.</p>
          <p class="cite">DENR / Mining industry reports</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay:80ms;">
          <p class="stat-number">1,160+</p>
          <p class="stat-label">barangays helped by SDMPs since 2002 — schools, livelihoods, and local infrastructure.</p>
          <p class="cite">DENR, 2023</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay:160ms;">
          <p class="stat-number">\u20B1387.81B</p>
          <p class="stat-label">provided by the mining industry to environmental protection and enhancement programs as of December 2023.</p>
          <p class="cite">Industry reports</p>
        </article>
      </div>

      <div class="chart-card" data-reveal>
        <h3>SDMP Fund Allocation Breakdown</h3>
        <p class="chart-caption">Required spending distribution under the Philippine Mining Act</p>
        <div class="chart-wrap" style="height:260px;"><canvas id="sdmpChart" aria-label="SDMP allocation pie chart"></canvas></div>
        <p class="chart-source">Source: Philippine Mining Act of 1995; DENR SDMP Guidelines, 2023</p>
      </div>

      <div class="assessment-grid" data-reveal>
        <div class="assessment-pill"><strong>Reach</strong><span>1,160+ barangays over two decades</span></div>
        <div class="assessment-pill"><strong>Challenge</strong><span>Uneven community participation</span></div>
        <div class="assessment-pill"><strong>Recommendation</strong><span>CSO oversight in SDMP monitoring</span></div>
      </div>

      <aside class="note-box" data-reveal>
        <strong>Assessment:</strong> SDMP has significant reach but uneven effectiveness. Challenges include limited community participation
        and potential corporate insensitivity to local needs. A 2024 ANU policy brief recommends amending the Mining Act to require civil society
        organizations in SDMP oversight — which would greatly strengthen accountability.
        <span class="cite">Villanueva, ANU Philippines Institute, 2024</span>
      </aside>
    </section>

    <section id="synthesis" class="section flow-wrap" data-reveal>
      <div class="container">
        <p class="section-label">Putting it together</p>
        <h3>No single solution is enough on its own.</h3>
        <p class="section-intro">
          GMAP heals the land. TSM holds large miners accountable. SDMP invests in communities.
          Together they point toward a more responsible mining future — but each has gaps that the others cannot fill.
        </p>
        <div class="flow">
          <div><span>01</span>GMAP restores degraded land with science</div>
          <div><span>02</span>TSM audits industry performance publicly</div>
          <div><span>03</span>SDMP funds community-led development</div>
          <div><span>04</span>Gaps remain: illegal mining, FPIC, scale</div>
          <div><span>05</span>Stronger oversight and replication needed</div>
        </div>
      </div>
    </section>

    <section id="references" class="container section references solution-section" data-reveal>
      <p class="section-label">Sources \u00B7 Further reading</p>
      <h2>Where this came from.</h2>
      <p class="section-intro">
        Content drawn from MO-ENV076 Evaluating Solutions Worksheet (Grp. 2) and publicly available reporting.
      </p>
      <ul>
        ${references
          .map(
            (item, i) => `
          <li style="--reveal-delay:${i * 25}ms" data-reveal>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>
          </li>`
          )
          .join("")}
      </ul>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p class="section-label">Disclaimer</p>
      <p>
        This solutions page was created as a student project for the course
        <em>People and Earth's Ecosystems</em> at Map\u00FAa Malayan Digital College.
        It is intended for educational purposes only.
      </p>
      <p class="footer-signoff">
        <a href="/" style="color:var(--forest);font-weight:600;">\u2190 Return to Unearthed: The Issue</a>
      </p>
    </div>
  </footer>
`;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

const heroEl = document.querySelector(".hero");
if (heroEl) {
  window.addEventListener(
    "scroll",
    () => {
      const offset = Math.min(window.scrollY * 0.35, 220);
      heroEl.style.setProperty("--hero-shift", `${offset}px`);
    },
    { passive: true }
  );
}

const forest = "#2f4a34";
const forestDeep = "#1c2c20";
const moss = "#647d54";
const clay = "#8d5f3d";

new Chart(document.getElementById("budgetChart"), {
  type: "bar",
  data: {
    labels: ["2022", "2023", "2024", "2025", "2026", "2027", "2028"],
    datasets: [
      {
        label: "Budget (\u20B1 million)",
        data: [27.2, 72, 86.25, 117, 124.5, 140, 159],
        backgroundColor: [
          "rgba(47,74,52,0.45)",
          "rgba(47,74,52,0.55)",
          "rgba(47,74,52,0.65)",
          "rgba(47,74,52,0.75)",
          "rgba(47,74,52,0.82)",
          "rgba(47,74,52,0.91)",
          "rgba(28,44,32,1)"
        ],
        borderColor: forestDeep,
        borderWidth: 1.5,
        borderRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => "\u20B1" + ctx.parsed.y + "M" } }
    },
    scales: {
      x: { ticks: { color: "#4f463c", font: { size: 12 } }, grid: { display: false } },
      y: {
        ticks: { callback: (v) => "\u20B1" + v + "M", color: "#4f463c", font: { size: 11 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 0,
        max: 180
      }
    }
  }
});

const years = Array.from({ length: 21 }, (_, i) => "Yr " + i);
const roi = [0, 5, 15, 30, 50, 80, 120, 170, 225, 285, 350, 410, 470, 525, 575, 620, 655, 685, 705, 720, 730];

new Chart(document.getElementById("roiChart"), {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        label: "Projected ROI (%)",
        data: roi,
        borderColor: moss,
        backgroundColor: "rgba(100,125,84,0.1)",
        borderWidth: 2.5,
        pointRadius: 2,
        pointBackgroundColor: moss,
        fill: true,
        tension: 0.4
      },
      {
        label: "Baseline",
        data: Array(21).fill(0),
        borderColor: "#b4b2a9",
        borderWidth: 1.5,
        borderDash: [5, 4],
        pointRadius: 0,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ctx.dataset.label + ": " + ctx.parsed.y + "%" } }
    },
    scales: {
      x: { ticks: { maxTicksLimit: 11, color: "#4f463c", font: { size: 11 } }, grid: { color: "rgba(0,0,0,0.06)" } },
      y: {
        ticks: { callback: (v) => v + "%", color: "#4f463c", font: { size: 11 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 0,
        max: 800
      }
    }
  }
});

new Chart(document.getElementById("sdmpChart"), {
  type: "doughnut",
  data: {
    labels: ["Community Development (75%)", "Mining Technology & Geosciences (15%)", "IEC Programs (10%)"],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: [forest, moss, clay],
        borderColor: "#fbf7ef",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#4f463c", font: { size: 12 }, padding: 16 }
      }
    }
  }
});
