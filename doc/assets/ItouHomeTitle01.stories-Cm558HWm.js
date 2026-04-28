const t=({modifier:o="s-home-title-01--communaute",title:a,lead:n,placeholder:c,searchLabel:l})=>`
<section class="s-home-title-01 ${o} mb-md-6 mb-lg-10">
  <div class="s-home-title-01__container container container-max-lg">
    <div class="s-home-title-01__row row">
      <div class="s-home-title-01__col col-12 col-md-8 col-lg-7 mb-4">
        <h1 class="h1-hero">${a}</h1>
        <p class="lead mb-md-5">${n}</p>
        <form method="get" action="#" role="search" class="s-home-title-01__form">
          <div class="row">
            <div class="col-12">
              <label for="home-title-search" class="visually-hidden">${l}</label>
              <div class="input-group input-group-lg flex-nowrap">
                <div class="input-group-text bg-white rounded-start ps-0 pe-2">
                  <i class="ri-map-pin-line ri-lg text-disabled" aria-hidden="true"></i>
                </div>
                <div class="input-group-text bg-white p-0 flex-grow-1">
                  <input id="home-title-search" type="text" class="form-control" placeholder="${c}" aria-describedby="homeSearchBtn">
                  <button class="btn btn-ico btn-primary" type="button" id="homeSearchBtn" aria-label="${l}">
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
`,d={title:"Sections/HomeTitle01",decorators:[o=>`<div style="max-width: 1400px; margin: 0 auto;">${o()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLa `<section>` `.s-home-title-01` est une `<section>` hero de homepage/landing page avec:\n- un titre editorial,\n- un moteur de recherche,\n- un groupe de raccourcis d'action.\n\nElle est themable pour les differents sites de la plateforme via des modifieurs de couleur.\n\n### Variations metier\n1. **Communaute** - `.s-home-title-01--communaute`\n2. **Emploi** - `.s-home-title-01--emploi`\n3. **Pilotage** - `.s-home-title-01--pilotage`\n4. **Marche** - `.s-home-title-01--marche`\n\n### Anatomie\n1. **Section** - `.s-home-title-01`\n2. **Conteneur** - `.s-home-title-01__container`\n3. **Formulaire de recherche** - `.s-home-title-01__form`\n4. **Groupe d'actions** - `.s-home-title-01__btn-group`\n5. **Carte action** - `.s-home-title-01__btn`\n\n### Accessibilité\n- Associer correctement le `label` au champ de recherche.\n- Fournir des alternatives textuelles pertinentes pour les illustrations.\n- Verifier le contraste du texte blanc sur chaque variation de couleur.\n"}}}},e={render:()=>t({modifier:"s-home-title-01--communaute",title:"L'espace d'entraide des professionnels de l'inclusion",lead:"Ameliorez votre pratique professionnelle d'accompagnateurs de personnes eloignees de l'emploi",placeholder:"Rechercher sur la communaute",searchLabel:"Rechercher sur la communaute"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version communaute, inspiree du code source `home-title-01`."}}}},r={render:()=>t({modifier:"s-home-title-01--emploi",title:"Trouvez un emploi inclusif pres de chez vous",lead:"Explorez les offres et les parcours adaptés pour accelerer le retour a l'emploi.",placeholder:"Rechercher un emploi inclusif",searchLabel:"Rechercher un emploi inclusif"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version Emploi avec le theme couleur `--emploi`."}}}},s={render:()=>t({modifier:"s-home-title-01--pilotage",title:"Pilotez vos actions d'inclusion en un coup d'oeil",lead:"Visualisez les indicateurs clefs et partagez une vue commune entre partenaires.",placeholder:"Rechercher un indicateur",searchLabel:"Rechercher un indicateur"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version Pilotage avec le theme couleur `--pilotage`."}}}},i={render:()=>t({modifier:"s-home-title-01--marche",title:"Developpez vos achats inclusifs",lead:"Identifiez des partenaires et activez les leviers d'achat socialement responsable.",placeholder:"Rechercher un acteur de l'achat inclusif",searchLabel:"Rechercher un acteur de l'achat inclusif"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version Marche avec le theme couleur `--marche`."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--communaute",
    title: "L'espace d'entraide des professionnels de l'inclusion",
    lead: "Ameliorez votre pratique professionnelle d'accompagnateurs de personnes eloignees de l'emploi",
    placeholder: "Rechercher sur la communaute",
    searchLabel: "Rechercher sur la communaute"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version communaute, inspiree du code source \`home-title-01\`."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--emploi",
    title: "Trouvez un emploi inclusif pres de chez vous",
    lead: "Explorez les offres et les parcours adaptés pour accelerer le retour a l'emploi.",
    placeholder: "Rechercher un emploi inclusif",
    searchLabel: "Rechercher un emploi inclusif"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version Emploi avec le theme couleur \`--emploi\`."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--pilotage",
    title: "Pilotez vos actions d'inclusion en un coup d'oeil",
    lead: "Visualisez les indicateurs clefs et partagez une vue commune entre partenaires.",
    placeholder: "Rechercher un indicateur",
    searchLabel: "Rechercher un indicateur"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version Pilotage avec le theme couleur \`--pilotage\`."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => renderHomeTitle01({
    modifier: "s-home-title-01--marche",
    title: "Developpez vos achats inclusifs",
    lead: "Identifiez des partenaires et activez les leviers d'achat socialement responsable.",
    placeholder: "Rechercher un acteur de l'achat inclusif",
    searchLabel: "Rechercher un acteur de l'achat inclusif"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version Marche avec le theme couleur \`--marche\`."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const m=["Communaute","Emploi","Pilotage","Marche"];export{e as Communaute,r as Emploi,i as Marche,s as Pilotage,m as __namedExportsOrder,d as default};
