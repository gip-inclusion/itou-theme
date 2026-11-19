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
      startIndex: 0,
    });

    slidingTabs.dataset.itSlidingTabsReady = "true";
  });
}

const renderTabsSynthesis01 = () => {
  const token = Math.random().toString(36).slice(2, 10);

  return `
<section class="s-tabs-synthesis-01">
  <div class="s-tabs-synthesis-01__container container">
    <div class="s-tabs-synthesis-01__row row">
      <div class="s-tabs-synthesis-01__col col-12">
        <div class="s-tabs-synthesis-01__wrapper">
          <ul class="s-tabs-synthesis-01__nav nav nav-tabs" role="tablist" data-it-sliding-tabs="true">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="emploi-tab-${token}" data-bs-toggle="tab" href="#emploi-${token}" role="tab" aria-controls="emploi-${token}" aria-selected="true">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Emploi & PASS IAE</span>
                  <hr>
                  <strong class="mb-1">Contrat terminé</strong>
                  <span class="text-muted fs-sm lh-sm">Envoyée le 20/02/2026 par Sophie MARTIN · a mené au contrat terminé le 31/10/2026.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-between">
                  <span class="badge badge-sm rounded-pill bg-warning-lighter text-warning">Action attendue</span>
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="diagnostic-tab-${token}" data-bs-toggle="tab" href="#diagnostic-${token}" role="tab" aria-controls="diagnostic-${token}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Diagnostic, freins et orientation</span>
                  <hr>
                  <strong class="mb-1 d-flex align-items-center gap-1">Freins identifiés<span class="badge rounded-pill badge-sm bg-info-lighter text-info">3</span></strong>
                  <span class="text-muted fs-sm lh-sm">Mobilité · Logement · le 02/05/2026.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="accompagnement-tab-${token}" data-bs-toggle="tab" href="#accompagnement-${token}" role="tab" aria-controls="accompagnement-${token}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Accompagnement</span>
                  <hr>
                  <strong class="mb-1 d-flex align-items-center gap-1">Intervenants<span class="badge rounded-pill badge-sm bg-info-lighter text-info">2</span></strong>
                  <span class="text-muted fs-sm lh-sm">dont Sophie MARTIN · 04 72 10 20 30.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="informations-tab-${token}" data-bs-toggle="tab" href="#informations-${token}" role="tab" aria-controls="informations-${token}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Informations personnelles</span>
                  <hr>
                  <strong>06 12 34 56 78</strong>
                  <span class="text-muted fs-sm lh-sm text-break">karima.benali@exemple.fr</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="emploi-${token}" role="tabpanel" aria-labelledby="emploi-tab-${token}">
            <div class="c-box">
              <p>Contenu de l'onglet Emploi & PASS IAE...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="diagnostic-${token}" role="tabpanel" aria-labelledby="diagnostic-tab-${token}">
            <div class="c-box">
              <p>Contenu de l'onglet Diagnostic, freins et orientation...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="accompagnement-${token}" role="tabpanel" aria-labelledby="accompagnement-tab-${token}">
            <div class="c-box">
              <p>Contenu de l'onglet Accompagnement...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="informations-${token}" role="tabpanel" aria-labelledby="informations-tab-${token}">
            <div class="c-box">
              <p>Contenu de l'onglet Informations personnelles...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
};

export default {
  title: "Sections/TabsSynthesis01",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js", "itou-tinyslider-loader")
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
La \`<section>\` \`.s-tabs-synthesis-01\` présente une navigation par onglets dont chaque bouton d'onglet contient une **une synthèse** du contenu de son panneau.

Contrairement à \`.s-tabs-01\`, le libellé de l'onglet n'est plus seul : il est complété par un bloc de synthèse (information clé, état, badge d'alerte ou compteur) qui permet à l'utilisateur de comparer les onglets sans les ouvrir.

### Comportement responsive (sliding tabs)
Quand la largeur disponible ne permet plus d'afficher tous les onglets sur une ligne, la navigation bascule en mode slider horizontal grâce à **tiny-slider.js**.
Ce comportement est activé via l'attribut \`data-it-sliding-tabs="true"\`.

### Anatomie
1. **Section** - \`.s-tabs-synthesis-01\`
2. **Container** - \`.s-tabs-synthesis-01__container\`
3. **Wrapper de navigation** - \`.s-tabs-synthesis-01__wrapper\`
4. **Navigation** - \`.s-tabs-synthesis-01__nav.nav.nav-tabs\`
5. **Lien d'onglet enrichi** - \`.nav-item > .nav-link\` contenant :
   - le titre (\`.h4\`), puis un \`<hr>\`
   - la synthèse (\`<strong>\` pour l'information clé, \`.text-muted.fs-sm\` pour le détail)
   - un pied avec un badge optionnel et l'icône \`.ri-arrow-down-line\`
6. **Contenus** - \`.tab-content > .tab-pane\`

### Accessibilité
- Associer chaque onglet à son panneau via \`aria-controls\` et \`aria-labelledby\`.
- Conserver \`role="tablist"\`, \`role="tab"\` et \`role="tabpanel"\`.
- Marquer les icônes décoratives avec \`aria-hidden="true"\`.
- Les badges de synthèse ne doivent pas être le seul moyen de transmettre une information : le détail reste accessible dans le panneau.
`,
      },
    },
  },
};

export const Default = {
  render: renderTabsSynthesis01,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version de base : chaque onglet affiche son titre, une synthèse de son contenu et un badge optionnel.",
      },
    },
  },
};
