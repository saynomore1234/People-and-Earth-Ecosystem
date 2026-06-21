import "./styles.css";

import mapMiningPermits from "./assets/map-mining-permits.png";
import mapBiodiversityOverlap from "./assets/map-biodiversity-overlap.png";
import chartForestLoss from "./assets/chart-forest-loss.png";

const HERO_IMAGE = "https://cri.org/wp-content/uploads/2025/10/Cover-Photo-768x474.jpg";

const storyMilestones = [
  {
    id: "definition",
    label: "What is mining?",
    note: "A nation tearing itself open to fuel the world's green transition."
  },
  {
    id: "causes",
    label: "How did we get here?",
    note: "Nickel demand, an oil crisis, fast-tracked permits, survival."
  },
  {
    id: "status",
    label: "Where it is happening",
    note: "Caraga, Palawan, Dinagat \u2014 real places, real rivers, real families."
  },
  {
    id: "effects",
    label: "How it affects YOU",
    note: "Air, water, food, typhoons, forests, Indigenous rights."
  },
  {
    id: "lopez",
    label: "She said no",
    note: "The story of Regina \u201CGina\u201D Lopez, the woman who refused to look away."
  },
  {
    id: "asks",
    label: "What we are asking for",
    note: "Accountability, transparency, justice, FPIC, a real transition."
  }
];

const causes = [
  {
    eyebrow: "The world wants what's underground here.",
    title: "Global nickel demand keeps climbing.",
    body: "The Philippines is the world's second-largest nickel supplier. In the first three quarters of 2023 alone, nickel output reached 28.9 million dry metric tons \u2014 valued at \u20B153.54 billion \u2014 driven largely by China's growing demand for stainless steel and electric vehicle batteries.",
    citation: "Mongabay, 2024"
  },
  {
    eyebrow: "The Middle East crisis changed everything.",
    title: "An oil shock accelerated the EV scramble.",
    body: "The Philippines imports 90% of its fuel from the Middle East. When conflict disrupted global oil supply, fuel prices surged and millions struggled with basic transport. Senator Sherwin Gatchalian called it a \u201Cturning point\u201D for EV adoption \u2014 and as EV adoption accelerates, so does the hunger for Philippine nickel.",
    citation: "Christian Science Monitor, 2026 \u00B7 BusinessWorld / MEXC, 2026"
  },
  {
    eyebrow: "The rules exist. They are just not followed.",
    title: "Permits were fast-tracked despite warnings.",
    body: "In early 2024, the government fast-tracked mining permits under pressure from industry \u2014 a decision advocacy groups warned would put communities and nature at serious risk. A projected 60% rise in global nickel demand by 2040 is colliding with the growing harm from mining and climate change.",
    citation: "Global Witness, 2024 \u00B7 Bulatlat / Climate Rights International, 2025"
  },
  {
    eyebrow: "Poverty leaves people with no other choice.",
    title: "In remote provinces, mining is the only income.",
    body: "Communities living near mines are not choosing destruction \u2014 they are choosing survival. That distinction matters when we talk about who carries the cost of the global energy transition.",
    citation: "Reference: doc \u00B7 Unearthed, 2026"
  }
];

const mapGallery = [
  {
    image: mapMiningPermits,
    title: "A fifth of the Philippines' land mass is covered in mining or exploration permits.",
    source: "Source: Government Data"
  },
  {
    image: mapBiodiversityOverlap,
    title: "27% of transition mineral mining area overlaps with biodiversity zones.",
    source: "Source: Government Data \u00B7 OpenStreetMap"
  },
  {
    image: chartForestLoss,
    title: "Since 2010, the Philippines has lost 230,000 hectares of tree cover in mining tenements \u2014 roughly three times the size of New York.",
    source: "Source: Hansen / UMD / Google / USGS / NASA"
  }
];

const effects = [
  {
    title: "The air you breathe is getting dirtier.",
    body: "Residents living near nickel mines in the Caraga Region have blamed the mines for dust pollution during the dry season \u2014 the kind that settles in your lungs quietly. People in Dinagat Island and Surigao del Sur are now reporting respiratory and skin ailments they believe are linked to nearby mining pollution.",
    citation: "Mongabay / CRI, 2025 \u00B7 Climate Rights International, 2024",
    image: "https://cri.org/wp-content/uploads/2025/11/IMG_8130-1024x585.jpg",
    alt: "Dust and haze drifting over a mining area in the Caraga Region"
  },
  {
    title: "The water you depend on is at risk.",
    body: "For over 15 years, researchers have detected toxic chromium in Palawan's Togpon River at levels exceeding international safety standards. In September 2024, they recorded the highest concentrations ever observed. This is the water farming and fishing families drink from, cook with, and bathe in every day.",
    citation: "Friends of the Earth Japan, 2025",
    image: "https://gw.hacdn.io/media/images/Sequence_08.00_00_02_10.Still001_1.original.width-1600.jpg",
    alt: "Aerial view of a river turned blood-red from mining runoff"
  },
  {
    title: "The food on your table is becoming harder to produce.",
    body: "In Dinagat Island and Surigao del Sur, fisherfolk describe how runoff from nearby mines has made it almost impossible to keep fishing, the livelihood their families have depended on for generations. When fishing grounds are polluted and farmland is buried in silt, the cost of living quietly rises everywhere else.",
    citation: "Climate Rights International, 2024",
    image: "https://cri.org/wp-content/uploads/2025/11/IMG_6133-1-1024x576.jpg",
    alt: "Filipino fisherfolk affected by mining runoff in Dinagat Island"
  },
  {
    title: "When the next typhoon comes, you are more exposed.",
    body: "In Tubajon, Dinagat Island, residents say the destruction of forests and mangroves by mining operations left them defenseless against Super Typhoon Odette in 2021. Every hectare cleared for a mine is one less wall standing between a community and a disaster \u2014 in one of the most typhoon-prone countries on Earth.",
    citation: "Climate Rights International, 2024",
    image: "https://www.worldvision.org.ph/wp-content/uploads/2023/09/W310-0913-009-700x500-1-jpeg.webp",
    alt: "Community members in the aftermath of Super Typhoon Odette in the Philippines"
  },
  {
    title: "The forests being cleared will not grow back in your lifetime.",
    body: "From 2001 to 2020, roughly 1.4 million hectares of trees were cut for mining and related activities in the Philippines \u2014 a land area larger than the entire island of Palawan. Those trees stored carbon, filtered water, held soil in place, and sheltered species found nowhere else on Earth.",
    citation: "Climate Rights International / World Resources Institute, 2024",
    image: "https://cri.org/wp-content/uploads/2025/11/DJI_0502-1024x768.jpg",
    alt: "Aerial view of a cleared forest area scarred by mining"
  },
  {
    title: "Your right to say no is being ignored.",
    body: "Since the 1990s, Indigenous communities across the Philippines have lost a land area equivalent to 2.2 million football fields to mining tenements \u2014 people whose Free, Prior, and Informed Consent was bypassed, whose voices were drowned out by permits and politics.",
    citation: "Global Witness, 2024",
    image: "https://gw.hacdn.io/media/images/Image1_smaller.original.width-1600.jpg",
    alt: "Indigenous land defenders marching with torches, calling for justice against mining"
  }
];

const lopezQuotes = [
  {
    quote:
      "Yes, mining creates a few jobs and perhaps a few schools, and a few people enrich themselves \u2014 but thousands suffer and water sources are polluted for generations afterward. Mining is just greed and selfishness.",
    source: "New Internationalist, 2018"
  },
  {
    quote:
      "Putting these open pits in a place as beautiful as the Philippines is disgustingly horrible. If you have any sense of aesthetics, how can you do that! And when you learn that there are communities there whose lives have been disadvantaged, your heart breaks.",
    source: "The Ecologist, 2019"
  }
];

const asks = [
  {
    title: "Accountability",
    body: "From mining companies operating in the Philippines \u2014 for the damage left behind and the communities still living with it."
  },
  {
    title: "Transparency",
    body: "In where the nickel in your EV, phone, and solar panel comes from. Supply chains should be traceable."
  },
  {
    title: "Justice",
    body: "For the farming and fishing communities being left behind by an industry that exports the wealth and keeps the harm."
  },
  {
    title: "Respect",
    body: "For Indigenous land rights and Free, Prior, and Informed Consent \u2014 not as paperwork, but as a real veto."
  },
  {
    title: "A real energy transition",
    body: "One that does not destroy one community to save another. The climate crisis is not solved by quietly replacing it with a mining crisis."
  }
];

const advocacyImages = [
  {
    image: "https://gw.hacdn.io/media/images/RS11499_XBS048_lpr.width-1600.jpg",
    alt: "Indigenous land defenders standing together in the Philippines",
    caption: "Indigenous defenders have been on the front line of the fight against mining tenements. \u2014 Global Witness"
  },
  {
    image: "https://www.rainforest-rescue.org/photos/article/scope/hero/dji-0045.jpg",
    alt: "Aerial view of Palawan rainforest threatened by mining",
    caption: "Palawan, a UNESCO Man and Biosphere Reserve, where eleven mining companies hold rights over 29,430 hectares. \u2014 Rainforest Rescue"
  }
];

const references = [
  {
    label: "Amnesty International (2025) \u2014 Nickel mining & human rights abuses",
    url: "https://www.amnesty.org/en/latest/news/2025/01/philippines-nickel-mining-projects-approved-despite-inadequate-consultation-and-serious-risks-to-communities-health-and-environment/"
  },
  {
    label: "Climate Rights International (2024) \u2014 Nickel mining, Caraga",
    url: "https://cri.org/philippines-nickel-mining-causes-abuses-increases-climate-risks/"
  },
  {
    label: "Climate Rights International \u2014 Broken Promises (Full Report)",
    url: "https://cri.org/reports/broken-promises/"
  },
  {
    label: "Global Witness (2024) \u2014 Mining vs. Indigenous defenders",
    url: "https://globalwitness.org/en/campaigns/land-and-environmental-defenders/how-the-militarisation-of-mining-threatens-indigenous-defenders-in-the-philippines/"
  },
  {
    label: "Mongabay (2025) \u2014 The dirty trail in the nickel belt",
    url: "https://news.mongabay.com/2025/11/green-energy-transition-leaves-a-dirty-trail-in-the-philippines-nickel-belt/"
  },
  {
    label: "Mongabay (2024) \u2014 Indigenous Filipinos protecting Palawan",
    url: "https://news.mongabay.com/2024/03/indigenous-filipinos-fight-to-protect-biodiverse-mountains-from-mining/"
  },
  {
    label: "Rainforest Rescue (2024) \u2014 Save Palawan",
    url: "https://www.rainforest-rescue.org/petitions/1287/philippines-help-us-save-palawan-s-forests"
  },
  {
    label: "Friends of the Earth Japan (2025) \u2014 Palawan water pollution",
    url: "https://foejapan.org/en/issue/20250414/23643/"
  },
  {
    label: "Bulatlat / CRI (2025) \u2014 ASEAN EV surge & Philippine nickel",
    url: "https://www.bulatlat.com/2025/12/18/aseans-ev-surge-runs-on-untraceable-philippine-nickel/"
  },
  {
    label: "Rappler (2026) \u2014 Middle East crisis impact on the Philippines",
    url: "https://www.rappler.com/philippines/impact-energy-fuel-prices-transport-economy-ofws-agriculture-trade-middle-east-crisis-2026/"
  },
  {
    label: "Christian Science Monitor (2026) \u2014 Philippines energy emergency",
    url: "https://www.csmonitor.com/World/Asia-Pacific/2026/0331/philippines-national-energy-emergency-oil-price"
  },
  {
    label: "Carbon Credits (2026) \u2014 EV batteries, nickel & geopolitics",
    url: "https://carboncredits.com/ev-batteries-need-nickel-why-class-1-supply-is-becoming-critical-amid-global-conflict/"
  },
  {
    label: "ScienceDirect (2024) \u2014 Sustainable mining & biodiversity",
    url: "https://www.sciencedirect.com/science/article/pii/S0959652624025630"
  },
  {
    label: "New Internationalist (2018) \u2014 Gina Lopez fights mining",
    url: "https://newint.org/columns/makingwaves/2018/01/01/gina-lopez"
  },
  {
    label: "The Ecologist (2019) \u2014 Remembering Gina Lopez",
    url: "https://theecologist.org/2019/sep/06/remembering-gina-lopez"
  },
  {
    label: "Rappler (2021) \u2014 Mines continued after Lopez's orders",
    url: "https://www.rappler.com/business/philippine-mines-continue-unhampered-4-years-after-gina-lopez-shutdown-order/"
  },
  {
    label: "Rappler (2025) \u2014 The vindication of Gina Lopez",
    url: "https://www.rappler.com/voices/thought-leaders/vindication-gina-lopez/"
  },
  {
    label: "Inquirer (2019) \u2014 Gina Lopez passes away",
    url: "https://newsinfo.inquirer.net/1155030/ex-denr-chief-gina-lopez-passes-away"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="paper-texture" aria-hidden="true"></div>
  <header class="hero" id="top" style="--hero-image: url('${HERO_IMAGE}');">
    <nav class="nav container">
      <a class="brand" href="#top">
        <span class="brand-mark" aria-hidden="true"></span>
        Unearthed
      </a>
      <div class="nav-links">
        <a href="#definition">Definition</a>
        <a href="#causes">Causes</a>
        <a href="#status">Status</a>
        <a href="#effects">Effects</a>
        <a href="#lopez">Gina Lopez</a>
        <a href="#asks">Act</a>
        <a href="/solutions.html">Solutions</a>
        <a href="#references">Sources</a>
      </div>
    </nav>
    <div class="hero-content container">
      <p class="eyebrow">A student advocacy page \u00B7 Mining in the Philippines</p>
      <h1>
        <span class="hero-title-line hero-title-line-1">Unearthed:</span>
        <span class="hero-title-line hero-title-line-2">Mining, People, and the Fight</span>
        <span class="hero-title-line hero-title-line-3">for the Philippine Earth.</span>
      </h1>
      <p class="subtitle">
        Every time someone drives an electric car, charges a phone, or installs a solar panel somewhere in the world,
        there is a good chance that a piece of the Philippines went into making it possible.
      </p>
      <div class="hero-actions">
        <a class="cta" href="#definition">Start the story</a>
        <a class="ghost" href="#asks">What we're asking for</a>
        <a class="ghost" href="/solutions.html">See the solutions</a>
      </div>
      <div class="anchor-pills" aria-label="Jump to sections">
        <a href="#definition">Definition</a>
        <a href="#causes">Causes</a>
        <a href="#status">Status</a>
        <a href="#effects">Effects</a>
        <a href="#lopez">Gina Lopez</a>
        <a href="#asks">Act</a>
        <a href="/solutions.html">Solutions</a>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true">
      <span></span>
      Scroll
    </div>
  </header>

  <main>
    <section id="overview" class="container section story-track" data-reveal>
      <p class="section-label">The Story Flow</p>
      <h2>From a single mineral to a country-wide question.</h2>
      <p>
        Follow the issue from how mining works, to why it keeps expanding, to who is paying the price \u2014
        and to a woman who tried to stop it. Each step builds on the last.
      </p>
      <div class="timeline-grid">
        ${storyMilestones
          .map(
            (step, index) => `
          <a class="timeline-step" href="#${step.id}" style="--reveal-delay: ${index * 60}ms" data-reveal>
            <span class="step-number">0${index + 1}</span>
            <h3>${step.label}</h3>
            <p>${step.note}</p>
          </a>`
          )
          .join("")}
      </div>
    </section>

    <div class="divider"></div>

    <section id="definition" class="container section split-story" data-reveal>
      <div>
        <p class="section-label">01 \u00B7 The starting point</p>
        <h2>What is mining \u2014 and why should you care?</h2>
        <p>
          Mining is the process of extracting minerals \u2014 gold, nickel, copper \u2014 buried deep within the Earth.
          Open pits are blasted open. Mountains are dismantled. Rivers are redirected.
          And communities that have lived on that land for generations are left to face what comes next.
        </p>
        <p>
          The Philippines is one of the world's most biodiverse nations \u2014 and one of the most heavily mined.
          It is a country trying to protect its extraordinary natural heritage while simultaneously digging it up
          to fuel global economic growth.
        </p>
        <aside class="note-box">
          <strong>This is not just an environmental story.</strong>
          It is a story about people \u2014 Filipino farmers, fisherfolk, and Indigenous communities \u2014 who did not
          choose this, and who are paying the price for a world that does.
          <span class="cite">ScienceDirect, 2024</span>
        </aside>
      </div>
      <figure class="story-figure" data-reveal>
        <img src="${HERO_IMAGE}" alt="A Philippine mining site bordered by communities and forest" loading="lazy" />
        <figcaption>
          Mining in the Philippines is woven into landscapes that millions of people still depend on for water, food, and shelter.
        </figcaption>
      </figure>
    </section>

    <section id="causes" class="container section" data-reveal>
      <p class="section-label">02 \u00B7 The pressure points</p>
      <h2>How did we get here?</h2>
      <p class="section-intro">
        Four forces, working together, keep Philippine mining expanding even as the harm becomes harder to ignore.
      </p>
      <div class="cause-card-grid">
        ${causes
          .map(
            (item, index) => `
          <article class="cause-card" style="--reveal-delay: ${index * 80}ms" data-reveal>
            <span class="cause-index">0${index + 1}</span>
            <p class="cause-eyebrow">${item.eyebrow}</p>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <p class="cite">${item.citation}</p>
          </article>`
          )
          .join("")}
      </div>
      <figure class="story-figure full" data-reveal>
        <img
          src="https://ars.els-cdn.com/content/image/1-s2.0-S0959652624025630-gr3.jpg"
          alt="Research figure on sustainable mining and biodiversity in the Philippines"
          loading="lazy"
        />
        <figcaption>
          A 2024 study traces how mining footprints have expanded into biodiversity-rich zones across the country.
          \u2014 Journal of Cleaner Production, 2024
        </figcaption>
      </figure>
    </section>

    <section class="section flow-wrap" aria-label="Cause and impact flow">
      <div class="container" data-reveal>
        <p class="section-label">From extraction to impact</p>
        <h3>One chain. Many lives.</h3>
        <div class="flow">
          <div><span>01</span>Global demand for minerals</div>
          <div><span>02</span>Fast-tracked permits and clearing</div>
          <div><span>03</span>Waste, runoff, and habitat loss</div>
          <div><span>04</span>Damage to forests, rivers, and seas</div>
          <div><span>05</span>Health and livelihood risks for communities</div>
        </div>
      </div>
    </section>

    <section id="status" class="container section" data-reveal>
      <p class="section-label">03 \u00B7 On the ground</p>
      <h2>Where it is happening right now.</h2>
      <p class="section-intro">
        This is not an abstract crisis. These are real places. Real rivers. Real families.
      </p>

      <div class="stat-grid">
        <article class="stat-card" data-reveal>
          <p class="stat-number">26</p>
          <p class="stat-label">operating metallic mines in the Caraga Region \u2014 23 of them nickel mines, more than any other region in the country.</p>
          <p class="cite">Climate Rights International, 2024</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay: 80ms;">
          <p class="stat-number">29,430 ha</p>
          <p class="stat-label">of Palawan land held by eleven mining companies. In February 2024 alone, one company received a permit to cut roughly 52,000 trees.</p>
          <p class="cite">Rainforest Rescue, 2024</p>
        </article>
        <article class="stat-card" data-reveal style="--reveal-delay: 160ms;">
          <p class="stat-number">\u20B1252.9B</p>
          <p class="stat-label">worth of metals mined in 2024. 92% of the nickel was exported to China alone. The wealth leaves \u2014 the damage stays.</p>
          <p class="cite">Mongabay / MGB, 2025</p>
        </article>
      </div>

      <div class="map-gallery">
        ${mapGallery
          .map(
            (item, index) => `
          <figure class="map-figure" style="--reveal-delay: ${index * 90}ms" data-reveal>
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <figcaption>
              <strong>${item.title}</strong>
              <span>${item.source}</span>
            </figcaption>
          </figure>`
          )
          .join("")}
      </div>
    </section>

    <section id="effects" class="container section" data-reveal>
      <p class="section-label">04 \u00B7 How it reaches you</p>
      <h2>How does it affect <em>you</em>?</h2>
      <p class="section-intro">
        You may not live near a nickel mine. You may never have set foot in Surigao del Sur or Dinagat Island.
        But what happens to those mountains, those rivers, and those communities is already reaching you \u2014 and it will only get closer.
      </p>
      <div class="effects-stack">
        ${effects
          .map(
            (item, index) => `
          <article class="impact-band ${index % 2 === 1 ? "reverse" : ""}" style="--reveal-delay: ${index * 60}ms" data-reveal>
            <figure>
              <img src="${item.image}" alt="${item.alt}" loading="lazy" />
            </figure>
            <div class="impact-content">
              <span class="impact-index">0${index + 1}</span>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
              <p class="cite">${item.citation}</p>
            </div>
          </article>`
          )
          .join("")}
      </div>
      <blockquote class="pullquote" data-reveal>
        <p>\u201COur land is being taken and shipped to other countries \u2014 that's how they're making money.\u201D</p>
        <cite>A fisherfolk in Surigao del Sur</cite>
      </blockquote>
      <p class="closing-line" data-reveal>
        You did not cause this. But now that you know \u2014 you are part of what happens next.
      </p>
    </section>

    <section id="lopez" class="section lopez-feature" data-reveal>
      <div class="container">
        <p class="section-label inverted">05 \u00B7 The woman who said no</p>
        <h2>She Said No \u2014 The Story of Gina Lopez.</h2>
        <div class="lopez-grid">
          <div class="lopez-body">
            <p>
              There was a woman who looked at all of this and refused to look away.
            </p>
            <p>
              Regina \u201CGina\u201D Lopez was not a typical government official. She was the daughter of one of the
              Philippines' wealthiest families who chose to spend her life fighting for the poorest communities and the most vulnerable ecosystems.
              She founded Bantay Bata 163, a crisis hotline that served over 140,000 children. She led the cleanup of the Pasig River.
              And in 2016, she became the most feared person in the Philippine mining industry.
            </p>
            <p>
              Appointed as DENR Secretary, Lopez banned open-pit mines, conducted nationwide audits,
              closed 23 destructive mines, and canceled 75 mining contracts.
              In May 2017, the Commission on Appointments voted to remove her from office.
              Her orders to close 28 mines were quietly reversed. The mines continued to operate.
            </p>
            <p>
              Gina Lopez passed away on August 19, 2019, at 65, after a battle with brain cancer.
              But she left behind a question that every Filipino \u2014 and every person who has ever bought an EV,
              a phone, or a solar panel \u2014 still has to answer.
            </p>
          </div>
          <div class="lopez-quotes">
            ${lopezQuotes
              .map(
                (q, i) => `
              <blockquote class="lopez-quote" style="--reveal-delay: ${i * 100}ms" data-reveal>
                <p>\u201C${q.quote}\u201D</p>
                <cite>Gina Lopez \u00B7 ${q.source}</cite>
              </blockquote>`
              )
              .join("")}
            <p class="lopez-closer" data-reveal>
              <span>\u201CNature will fight back if we abuse it.\u201D</span>
              <em>\u2014 Gina Lopez (Rappler, 2025). She was right. It already is.</em>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="asks" class="container section asks-section" data-reveal>
      <p class="section-label">06 \u00B7 What you can carry forward</p>
      <h2>What we are asking for.</h2>
      <p class="section-intro">
        This page exists because silence is a choice \u2014 and we are choosing not to be silent.
      </p>
      <div class="asks-grid">
        ${asks
          .map(
            (item, index) => `
          <article class="ask-card" style="--reveal-delay: ${index * 70}ms" data-reveal>
            <span class="ask-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>`
          )
          .join("")}
      </div>
      <div class="advocacy-images">
        ${advocacyImages
          .map(
            (item, i) => `
          <figure style="--reveal-delay: ${i * 100}ms" data-reveal>
            <img src="${item.image}" alt="${item.alt}" loading="lazy" />
            <figcaption>${item.caption}</figcaption>
          </figure>`
          )
          .join("")}
      </div>
    </section>

    <section id="references" class="container section references" data-reveal>
      <p class="section-label">Sources \u00B7 Further reading</p>
      <h2>Where this came from.</h2>
      <p class="section-intro">
        Every claim on this page is drawn from publicly available reporting and research. Read the originals.
      </p>
      <ul>
        ${references
          .map(
            (item, i) => `
          <li style="--reveal-delay: ${i * 25}ms" data-reveal>
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
        This advocacy page was created as a student project for the course
        <em>People and Earth's Ecosystems</em> at Mapúa Malayan Digital College.
        It is intended for educational purposes only and does not represent an official campaign or position of the institution.
      </p>
      <p>
        All information presented is drawn from credible, publicly available sources, which are cited and linked throughout this page.
        While every effort has been made to ensure accuracy and fairness, readers are encouraged to explore the sources directly and form their own informed views.
      </p>
      <p class="footer-signoff">
        We are students \u2014 but the issues on this page are real, the communities affected are real,
        and our concern for the Philippine environment and its people is genuine.
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

const navLinks = document.querySelectorAll(".nav-links a");
const sectionTargets = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.45 }
);

sectionTargets.forEach((section) => navObserver.observe(section));

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
