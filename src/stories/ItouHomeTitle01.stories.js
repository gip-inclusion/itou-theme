const renderHomeTitle01 = ({ modifier = "s-home-title-01--communaute", title, lead, placeholder, searchLabel }) => `
<section class="s-home-title-01 ${modifier} mb-md-6 mb-lg-10">
  <div class="s-home-title-01__container container container-max-lg">
    <div class="s-home-title-01__row row">
      <div class="s-home-title-01__col col-12 col-md-8 col-lg-7 mb-4">
        <h1 class="h1-hero">${title}</h1>
        <p class="lead mb-md-5">${lead}</p>
        <form method="get" action="#" role="search" class="s-home-title-01__form">
          <div class="row">
            <div class="col-12">
              <label for="home-title-search" class="visually-hidden">${searchLabel}</label>
              <div class="input-group input-group-lg flex-nowrap">
                <div class="input-group-text bg-white rounded-start ps-0 pe-2">
                  <i class="ri-map-pin-line ri-lg text-disabled" aria-hidden="true"></i>
                </div>
                <div class="input-group-text bg-white p-0 flex-grow-1">
                  <input id="home-title-search" type="text" class="form-control" placeholder="${placeholder}" aria-describedby="homeSearchBtn">
                  <button class="btn btn-ico btn-primary" type="button" id="homeSearchBtn" aria-label="${searchLabel}">
                    <i class="ri-search-line fw-bold" aria-hidden="true"></i>
                    <span class="d-none d-sm-inline-flex me-0 me-sm-1">Rechercher</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="s-home-title-01__row row">
      <div class="s-home-title-01__col col-12 mt-md-6 mt-lg-6">
        <div class="s-home-title-01__btn-group flex-column flex-md-row gap-3 gap-md-4 mb-md-n5 mb-lg-n8">
          <div class="s-home-title-01__btn p-3 py-md-4">
            <div class="w-25 w-md-40">
              <img src="./images/home-title-01-illu-card-01.png" class="img-fluid" alt="Illustration action 1">
            </div>
            <div class="ps-3">
              <a href="#" class="btn-link stretched-link">Je veux poser <br class="d-none d-md-inline">une question</a>
            </div>
          </div>
          <div class="s-home-title-01__btn p-3 py-md-4">
            <div class="w-25 w-md-40">
              <img src="./images/home-title-01-illu-card-02.png" class="img-fluid" alt="Illustration action 2">
            </div>
            <div class="ps-3">
              <a href="#" class="btn-link stretched-link">Je veux réaliser <br class="d-none d-md-inline">un diagnostic</a>
            </div>
          </div>
          <div class="s-home-title-01__btn p-3 py-md-4">
            <div class="w-25 w-md-40">
              <img src="./images/home-title-01-illu-card-03.png" class="img-fluid" alt="Illustration action 3">
            </div>
            <div class="ps-3">
              <a href="#" class="btn-link stretched-link">Je veux chercher <br class="d-none d-md-inline">un emploi inclusif</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export default {
  title: "Sections/HomeTitle01",
  decorators: [(Story) => `<div style="max-width: 1400px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La \`<section>\` \`.s-home-title-01\` est une \`<section>\` hero de homepage/landing page avec:
- un titre editorial,
- un moteur de recherche,
- un groupe de raccourcis d'action.

Elle est themable pour les differents sites de la plateforme via des modifieurs de couleur.

### Variations metier
1. **Communaute** - \`.s-home-title-01--communaute\`
2. **Emploi** - \`.s-home-title-01--emploi\`
3. **Pilotage** - \`.s-home-title-01--pilotage\`
4. **Marche** - \`.s-home-title-01--marche\`

### Anatomie
1. **Section** - \`.s-home-title-01\`
2. **Conteneur** - \`.s-home-title-01__container\`
3. **Formulaire de recherche** - \`.s-home-title-01__form\`
4. **Groupe d'actions** - \`.s-home-title-01__btn-group\`
5. **Carte action** - \`.s-home-title-01__btn\`

### Accessibilité
- Associer correctement le \`label\` au champ de recherche.
- Fournir des alternatives textuelles pertinentes pour les illustrations.
- Verifier le contraste du texte blanc sur chaque variation de couleur.
`,
      },
    },
  },
};

export const Communaute = {
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--communaute",
    title: "L'espace d'entraide des professionnels de l'inclusion",
    lead: "Ameliorez votre pratique professionnelle d'accompagnateurs de personnes eloignees de l'emploi",
    placeholder: "Rechercher sur la communaute",
    searchLabel: "Rechercher sur la communaute",
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version communaute, inspiree du code source `home-title-01`.",
      },
    },
  },
};

export const Emploi = {
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--emploi",
    title: "Trouvez un emploi inclusif pres de chez vous",
    lead: "Explorez les offres et les parcours adaptés pour accelerer le retour a l'emploi.",
    placeholder: "Rechercher un emploi inclusif",
    searchLabel: "Rechercher un emploi inclusif",
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version Emploi avec le theme couleur `--emploi`.",
      },
    },
  },
};

export const Pilotage = {
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--pilotage",
    title: "Pilotez vos actions d'inclusion en un coup d'oeil",
    lead: "Visualisez les indicateurs clefs et partagez une vue commune entre partenaires.",
    placeholder: "Rechercher un indicateur",
    searchLabel: "Rechercher un indicateur",
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version Pilotage avec le theme couleur `--pilotage`.",
      },
    },
  },
};

export const Marche = {
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--marche",
    title: "Developpez vos achats inclusifs",
    lead: "Identifiez des partenaires et activez les leviers d'achat socialement responsable.",
    placeholder: "Rechercher un acteur de l'achat inclusif",
    searchLabel: "Rechercher un acteur de l'achat inclusif",
  }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version Marche avec le theme couleur `--marche`.",
      },
    },
  },
};
