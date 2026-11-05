export default {
  title: "Components/Table",
  decorators: [(Story) => `<div style="max-width: 1600px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant HTML \`<table>\` permet de representer des donnees tabulaires.

### Anatomie
1. **Table** - Balise \`<table class="table">\` (base)
2. **Caption** - Légende concise du tableau (recommandée en accessibilité)
3. **En-tete** - Colonnes dans \`<thead>\` avec \`scope="col"\`
4. **Corps** - Lignes de donnees dans \`<tbody>\` avec \`scope="row"\` sur la premiere cellule

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.table\` | Style de base du tableau |
| \`.table-sm\` | Version compacte |
| \`.table-striped\` | Lignes zebrees |
| \`.table-hover\` | Effet au survol des lignes |
| \`.table-bordered\` | Bordures sur le tableau et les cellules |
| \`.table-sortable\` | Style du mode triable |

### Accessibilité
- Ajouter un \`<caption>\` explicite pour decrire le contenu.
- Utiliser \`scope\` sur les cellules d'en-tête.
- En mode triable, utiliser \`aria-sort\` et des boutons avec libelles explicites.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/content/tables/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tables</a>
`,
      },
    },
  },
  argTypes: {
    compact: {
      control: "boolean",
      description: "Ajoute `.table-sm` pour un affichage plus compact",
    },
    striped: {
      control: "boolean",
      description: "Ajoute `.table-striped`",
    },
    hover: {
      control: "boolean",
      description: "Ajoute `.table-hover`",
    },
    bordered: {
      control: "boolean",
      description: "Ajoute `.table-bordered`",
    },
    responsive: {
      control: "boolean",
      description: "Enrobe le tableau dans un conteneur responsive",
    },
    responsiveBreakpoint: {
      control: "select",
      options: ["all", "sm", "md", "lg", "xl", "xxl"],
      description: "Breakpoint de la version responsive (ignore si `responsive` est false)",
    },
    sortable: {
      control: "boolean",
      description: "Affiche une variante triable avec `.table-sortable`",
    },
  },
};

const rows = [
  {
    name: "NAGAMA Maxime",
    status: "PASS IAE valide",
    passNumber: "99999 99 03402",
    validity: "730 jours (Environ 1 an et 11 mois)",
  },
  {
    name: "NAILO Emi",
    status: "PASS IAE valide (non demarre)",
    passNumber: "99999 99 03401",
    validity: "730 jours (Environ 1 an et 11 mois)",
  },
  {
    name: "BIOR Tristan",
    status: "PASS IAE valide",
    passNumber: "99999 77 27894",
    validity: "685 jours (Environ 1 an et 10 mois)",
  },
];

const getResponsiveClass = (responsiveBreakpoint) => {
  if (responsiveBreakpoint === "all") {
    return "table-responsive";
  }

  return `table-responsive-${responsiveBreakpoint}`;
};

const renderTable = ({ compact, striped, hover, bordered, responsive, responsiveBreakpoint, sortable }) => {
  const tableClasses = ["table"];
  if (compact) {
    tableClasses.push("table-sm");
  }
  if (striped) {
    tableClasses.push("table-striped");
  }
  if (hover) {
    tableClasses.push("table-hover");
  }
  if (bordered) {
    tableClasses.push("table-bordered");
  }
  if (sortable) {
    tableClasses.push("table-sortable");
  }

  const wrapperStart = responsive ? `<div class="${getResponsiveClass(responsiveBreakpoint)}">` : "";
  const wrapperEnd = responsive ? "</div>" : "";
  const sortableAttr = sortable ? ' data-bs-table="sortable"' : "";

  const head = sortable
    ? `
      <thead>
        <tr>
          <th aria-sort="descending">
            <button type="button" aria-label="Trier par numero de PASS IAE">Numero de PASS IAE</button>
          </th>
          <th aria-sort="none">
            <button type="button" aria-label="Trier par duree de validite">Duree de validite</button>
          </th>
          <th aria-sort="none">
            <button type="button" aria-label="Trier par statut">Statut</button>
          </th>
        </tr>
      </thead>`
    : `
      <thead>
        <tr>
          <th scope="col">Nom Prenom</th>
          <th scope="col">Statut du PASS IAE</th>
          <th scope="col">Numero de PASS IAE</th>
          <th scope="col">Duree de validite</th>
          <th scope="col" class="text-end w-100px"><span class="visually-hidden">Actions rapides sur le candidat</span></th>
        </tr>
      </thead>`;

  const body = sortable
    ? rows
        .map(
          (row) => `
        <tr>
          <td>${row.passNumber}</td>
          <td>${row.validity}</td>
          <td>${row.status}</td>
        </tr>`,
        )
        .join("")
    : rows
        .map(
          (row, index) => `
        <tr>
          <th scope="row"><a href="#" class="btn-link">${row.name}</a></th>
          <td>${row.status}</td>
          <td>${row.passNumber}</td>
          <td>${row.validity}</td>
          <td class="text-end w-100px">
            <div class="d-flex justify-content-end gap-2" role="group" aria-label="Actions rapides sur le candidat">
              <a class="btn btn-sm btn-secondary btn-ico-only" href="" data-bs-toggle="tooltip" data-bs-title="Postuler pour ce candidat">
                <i class="ri-draft-line" aria-label="Postuler pour BARACUS Boris"></i>
              </a>
              <button class="btn btn-sm btn-secondary btn-ico-only" type="button" id="dropdown_${index}_action_menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Plus d'actions">
                <i class="ri-more-2-fill" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdown_${index}_action_menu">
                <a href="" class="dropdown-item">
                  Valider son éligibilité IAE
                </a>
                <a href="" class="dropdown-item">
                  Invalider son éligibilité IAE
                </a>
              </div>
            </div>
          </td>
        </tr>`,
        )
        .join("");

  return `
${wrapperStart}
<table class="${tableClasses.join(" ")}"${sortableAttr}>
  <caption>Liste des salaries et PASS IAE</caption>
  ${head}
  <tbody>
    ${body}
  </tbody>
</table>
${wrapperEnd}`;
};

export const Default = {
  render: renderTable,
  parameters: {
    docs: {
      description: {
        story: "Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable).",
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Compact = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variation compacte avec `.table-sm`.",
      },
    },
  },
  args: {
    compact: true,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const StripedAndHover = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Cas d'usage avec lignes zebrees et survol des lignes.",
      },
    },
  },
  args: {
    compact: false,
    striped: true,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Responsive = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Table avec conteneur responsive (scroll horizontal sur petits écrans).",
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: true,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Sortable = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: 'Version triable avec `.table-sortable` et attribut `data-bs-table="sortable"`.',
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: true,
  },
};

export const DemandesRecues = {
  render: () => `
    <table class="table table-hover table-sortable">
      <caption class="visually-hidden">Liste des candidatures (les colonnes disposant d’un bouton dans leur entête peuvent être triées en cliquant sur le bouton)</caption>
      <thead>
        <tr>
          <th scope="col" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" id="select-all-applications" data-emplois-select-all-target-input-name="selected-application" autocomplete="off" />
            <label class="visually-hidden" for="select-all-applications">Sélectionner toutes les candidatures</label>
          </th>
          <th scope="col" aria-sort="none">
            <button type="button" data-emplois-setter-target="#id_order" data-emplois-setter-value="job_seeker_full_name" data-emplois-elements-visibility-on-selection="disabled">Candidature de</button>
          </th>
          <th scope="col" aria-sort="descending">
            <button type="button" data-emplois-setter-target="#id_order" data-emplois-setter-value="created_at" data-emplois-elements-visibility-on-selection="disabled">Émise le</button>
          </th>
          <th scope="col">Poste</th>
          <th scope="col">Émetteur</th>
          <th scope="col" class="text-nowrap">Critères administratifs</th>
          <th scope="col">Statut éligibilité</th>
          <th scope="col" class="text-end w-50px">
            <span class="visually-hidden">Actions possibles sur les candidatures</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-top">
          <th scope="row" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" name="selected-application" value="90bc0025-7003-4673-b44f-0ce72daf4628" id="select-90bc0025-7003-4673-b44f-0ce72daf4628" autocomplete="off" />
            <label class="visually-hidden" for="select-90bc0025-7003-4673-b44f-0ce72daf4628">Sélectionner cette candidature</label>
          </th>
          <td>
            <a class="btn-link" href="" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">Personne Anonyme</a>
            <span class="d-block"> </span>
            <span id="state_90bc0025-7003-4673-b44f-0ce72daf4628" class="badge rounded-pill text-nowrap badge-sm bg-success">Candidature acceptée</span>
          </td>
          <td>31/08/2026</td>
          <td>Candidature spontanée</td>
          <td><i class="ri-community-line" aria-hidden="true"></i> ETTI Une nouvelle chance</td>
          <td>
            <ul class="mb-0">
              <li>Allocataire ASS</li>
            </ul>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                <i class="ri-pass-valid-line" aria-hidden="true"></i>
                PASS&nbsp;IAE valide
              </span>
            </div>
            <span class="d-block">Éligibilité validée par votre entreprise</span>
          </td>
          <td class="text-end w-50px">
            <a class="btn btn-sm btn-secondary btn-ico-only" href="" aria-label="Voir sa candidature" data-bs-toggle="tooltip" data-bs-title="Voir sa candidature" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">
              <i class="ri-arrow-drop-right-line fs-lg" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr class="align-top">
          <th scope="row" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" name="selected-application" value="7178d000-aace-4b3e-9f36-1831ad98f4f4" id="select-7178d000-aace-4b3e-9f36-1831ad98f4f4" autocomplete="off" />
            <label class="visually-hidden" for="select-7178d000-aace-4b3e-9f36-1831ad98f4f4">Sélectionner cette candidature</label>
          </th>
          <td>
            <a class="btn-link" href="" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">Personne Anonyme</a>
            <span class="d-block"> </span>
            <span id="state_7178d000-aace-4b3e-9f36-1831ad98f4f4" class="badge rounded-pill text-nowrap badge-sm bg-success">Candidature acceptée</span>
          </td>
          <td>31/08/2026</td>
          <td>Candidature spontanée</td>
          <td><i class="ri-community-line" aria-hidden="true"></i> ETTI Une nouvelle chance</td>
          <td>
            <ul class="mb-0">
              <li>Jeune (-26 ans)</li>
              <li>Maîtrise de la langue française inférieure au niveau A1</li>
              <li>Niveau d'étude 3 (CAP, BEP) ou infra</li>
              <li>Résident ZRR/ZFRR</li>
            </ul>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                <i class="ri-pass-valid-line" aria-hidden="true"></i>
                PASS&nbsp;IAE valide
              </span>
            </div>
            <span class="d-block">Éligibilité validée par votre entreprise</span>
          </td>
          <td class="text-end w-50px">
            <a class="btn btn-sm btn-secondary btn-ico-only" href="" aria-label="Voir sa candidature" data-bs-toggle="tooltip" data-bs-title="Voir sa candidature" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">
              <i class="ri-arrow-drop-right-line fs-lg" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr class="align-top">
          <th scope="row" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" name="selected-application" value="4baf347b-0d1c-4c24-ad8c-192a0a38792a" id="select-4baf347b-0d1c-4c24-ad8c-192a0a38792a" autocomplete="off" />
            <label class="visually-hidden" for="select-4baf347b-0d1c-4c24-ad8c-192a0a38792a">Sélectionner cette candidature</label>
          </th>
          <td>
            <a class="btn-link" href="" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">Personne Anonyme</a>
            <span class="d-block"> </span>
            <span id="state_4baf347b-0d1c-4c24-ad8c-192a0a38792a" class="badge rounded-pill text-nowrap badge-sm bg-success">Candidature acceptée</span>
          </td>
          <td>31/08/2026</td>
          <td>Candidature spontanée</td>
          <td><i class="ri-community-line" aria-hidden="true"></i> ETTI Une nouvelle chance</td>
          <td>
            <ul class="mb-0">
              <li>Maîtrise de la langue française inférieure au niveau A1</li>
              <li>Réfugié statutaire, bénéficiaire d'une protection temporaire, protégé subsidiaire ou demandeur d'asile</li>
              <li>Travailleur handicapé</li>
            </ul>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                <i class="ri-pass-valid-line" aria-hidden="true"></i>
                PASS&nbsp;IAE valide
              </span>
            </div>
            <span class="d-block">Éligibilité validée par votre entreprise</span>
          </td>
          <td class="text-end w-50px">
            <a class="btn btn-sm btn-secondary btn-ico-only" href="" aria-label="Voir sa candidature" data-bs-toggle="tooltip" data-bs-title="Voir sa candidature" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">
              <i class="ri-arrow-drop-right-line fs-lg" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr class="align-top">
          <th scope="row" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" name="selected-application" value="5929baf1-f6d6-4750-9842-aed96a4b544c" id="select-5929baf1-f6d6-4750-9842-aed96a4b544c" autocomplete="off" />
            <label class="visually-hidden" for="select-5929baf1-f6d6-4750-9842-aed96a4b544c">Sélectionner cette candidature</label>
          </th>
          <td>
            <a class="btn-link" href="" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">Personne Anonyme</a>
            <span class="d-block"> 13 - Tarascon </span>
            <span id="state_5929baf1-f6d6-4750-9842-aed96a4b544c" class="badge rounded-pill text-nowrap badge-sm bg-info">Nouvelle candidature</span>
          </td>
          <td>31/07/2025</td>
          <td>
            <ul class="list-unstyled">
              <li>Figurant / Figurante</li>
            </ul>
          </td>
          <td><i class="ri-home-smile-line" aria-hidden="true"></i> CENTRE COMMUNAL D'ACTION SOCIALE</td>
          <td><i class="text-disabled">Aucun critère sélectionné</i></td>
          <td>
            <div class="d-flex align-items-center">
              <span class="badge badge-sm rounded-pill bg-warning-lighter text-warning">
                <i class="ri-error-warning-line" aria-hidden="true"></i>
                Éligibilité IAE à valider
              </span>
            </div>
            <span class="d-block">Un diagnostic doit être réalisé</span>
          </td>
          <td class="text-end w-50px">
            <a class="btn btn-sm btn-secondary btn-ico-only" href="" aria-label="Voir sa candidature" data-bs-toggle="tooltip" data-bs-title="Voir sa candidature" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">
              <i class="ri-arrow-drop-right-line fs-lg" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
        <tr class="align-top">
          <th scope="row" class="text-start w-50px">
            <input class="form-check-input" type="checkbox" name="selected-application" value="7f2ff00a-cf74-4e6c-b762-466f212c4b19" id="select-7f2ff00a-cf74-4e6c-b762-466f212c4b19" autocomplete="off" />
            <label class="visually-hidden" for="select-7f2ff00a-cf74-4e6c-b762-466f212c4b19">Sélectionner cette candidature</label>
          </th>
          <td>
            <a class="btn-link" href="" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">Personne Anonyme</a>
            <span class="d-block"> 90 - Belfort </span>
            <span id="state_7f2ff00a-cf74-4e6c-b762-466f212c4b19" class="badge rounded-pill text-nowrap badge-sm bg-info">Nouvelle candidature</span>
          </td>
          <td>31/07/2025</td>
          <td>
            <ul class="list-unstyled">
              <li>Figurant / Figurante</li>
            </ul>
          </td>
          <td><i class="ri-community-line" aria-hidden="true"></i> Job insertion 90</td>
          <td><i class="text-disabled">Aucun critère sélectionné</i></td>
          <td>
            <div class="d-flex align-items-center">
              <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                <i class="ri-pass-valid-line" aria-hidden="true"></i>
                PASS&nbsp;IAE valide
              </span>
            </div>
            <span class="d-block">Éligibilité validée par un prescripteur habilité</span>
          </td>
          <td class="text-end w-50px">
            <a class="btn btn-sm btn-secondary btn-ico-only" href="" aria-label="Voir sa candidature" data-bs-toggle="tooltip" data-bs-title="Voir sa candidature" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="voir-candidature-employeur">
              <i class="ri-arrow-drop-right-line fs-lg" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>`,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple de tableau de candidatures reçues avec tri, sélection et critères d’éligibilité.",
      },
    },
  },
};
