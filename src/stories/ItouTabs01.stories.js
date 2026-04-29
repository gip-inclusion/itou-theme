function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load: ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

function initSlidingTabs(scope = document) {
  if (typeof tns === "undefined") {
    return;
  }

  scope.querySelectorAll('[data-it-sliding-tabs="true"]').forEach((slidingTabs) => {
    if (slidingTabs.classList.contains("tns-slider") || slidingTabs.dataset.itSlidingTabsReady === "true") {
      return;
    }

    const slidingTabsStartIndex = Number.parseInt(slidingTabs.getAttribute("data-it-sliding-tabs-startindex"), 10) || 0;

    tns({
      container: slidingTabs,
      slideBy: "page",
      autoWidth: true,
      arrowKeys: true,
      loop: false,
      mouseDrag: true,
      swipeAngle: false,
      speed: 300,
      nav: false,
      controls: true,
      startIndex: slidingTabsStartIndex,
    });

    slidingTabs.dataset.itSlidingTabsReady = "true";
  });
}

const renderTabs01 = () => {
  const token = Math.random().toString(36).slice(2, 10);

  return `
<section class="s-tabs-01">
  <div class="s-tabs-01__container container">
    <div class="s-tabs-01__row row">
      <div class="s-tabs-01__col col-12">
        <ul class="s-tabs-01__nav nav nav-tabs" role="tablist" data-it-sliding-tabs="true">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab-${token}" data-bs-toggle="tab" href="#home-${token}" role="tab" aria-controls="home-${token}" aria-selected="true">Home</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab-${token}" data-bs-toggle="tab" href="#profile-${token}" role="tab" aria-controls="profile-${token}" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="contact-tab-${token}" data-bs-toggle="tab" href="#contact-${token}" role="tab" aria-controls="contact-${token}" aria-selected="false">Contact</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-01-tab-${token}" data-bs-toggle="tab" href="#exemple-01-${token}" role="tab" aria-controls="exemple-01-${token}" aria-selected="false">Exemple tab 01</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-02-tab-${token}" data-bs-toggle="tab" href="#exemple-02-${token}" role="tab" aria-controls="exemple-02-${token}" aria-selected="false">
              <span>Exemple tab 02</span>
              <span class="badge badge-sm rounded-pill ms-2">1279</span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-03-tab-${token}" data-bs-toggle="tab" href="#exemple-03-${token}" role="tab" aria-controls="exemple-03-${token}" aria-selected="false">
              <i class="ri-briefcase-4-line fw-normal me-1" aria-hidden="true"></i>
              <span>Exemple tab 03</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="home-${token}" role="tabpanel" aria-labelledby="home-tab-${token}">
            <p>home-tab content ...</p>
          </div>
          <div class="tab-pane fade" id="profile-${token}" role="tabpanel" aria-labelledby="profile-tab-${token}">
            <p>profile-tab content...</p>
          </div>
          <div class="tab-pane fade" id="contact-${token}" role="tabpanel" aria-labelledby="contact-tab-${token}">
            <p>contact-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-01-${token}" role="tabpanel" aria-labelledby="exemple-01-tab-${token}">
            <p>exemple-01-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-02-${token}" role="tabpanel" aria-labelledby="exemple-02-tab-${token}">
            <p>exemple-02-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-03-${token}" role="tabpanel" aria-labelledby="exemple-03-tab-${token}">
            <p>exemple-03-tab content...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
};

export default {
  title: "Sections/Tabs01",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js",
          "itou-tinyslider-loader"
        )
          .then(() => initSlidingTabs(document))
          .catch(console.error);
      }, 0);

      return html;
    },
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La \`<section>\` \`.s-tabs-01\` structure une navigation par onglets et le contenu associe dans des panneaux \`.tab-pane\`.

### Comportement responsive (sliding tabs)
Quand la largeur disponible ne permet plus d'afficher tous les onglets sur une ligne, la navigation bascule en mode slider horizontal grace a **tiny-slider.js**.
Ce comportement est active sur la liste d'onglets via l'attribut \`data-it-sliding-tabs="true"\`.
L'initialisation reprend la configuration de la maquette HTML (\`autoWidth\`, \`slideBy: "page"\`, \`controls: true\`, etc.) pour conserver la meme experience mobile/tablette.

### Variations
1. **Default** : version standard avec onglets, badge et icône.

### Anatomie
1. **Section** - \`.s-tabs-01\`
2. **Container** - \`.s-tabs-01__container\`
3. **Navigation** - \`.s-tabs-01__nav.nav.nav-tabs\`
4. **Elements d'onglets** - \`.nav-item > .nav-link\`
5. **Contenus** - \`.tab-content > .tab-pane\`

### Accessibilité
- Associer chaque onglet a son panneau via \`aria-controls\` et \`aria-labelledby\`.
- Conserver \`role="tablist"\`, \`role="tab"\` et \`role="tabpanel"\`.
- Marquer les icônes decoratives avec \`aria-hidden="true"\`.
`,
      },
    },
  },
};

export const Default = {
  render: renderTabs01,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version de base.",
      },
    },
  },
};
