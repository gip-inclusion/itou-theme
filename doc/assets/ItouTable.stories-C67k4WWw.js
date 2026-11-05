import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t={title:`Components/Table`,decorators:[e=>`<div style="max-width: 1600px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nLe composant HTML `<table>` permet de representer des donnees tabulaires.\n\n### Anatomie\n1. **Table** - Balise `<table class="table">` (base)\n2. **Caption** - Légende concise du tableau (recommandée en accessibilité)\n3. **En-tete** - Colonnes dans `<thead>` avec `scope="col"`\n4. **Corps** - Lignes de donnees dans `<tbody>` avec `scope="row"` sur la premiere cellule\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.table` | Style de base du tableau |\n| `.table-sm` | Version compacte |\n| `.table-striped` | Lignes zebrees |\n| `.table-hover` | Effet au survol des lignes |\n| `.table-bordered` | Bordures sur le tableau et les cellules |\n| `.table-sortable` | Style du mode triable |\n\n### Accessibilité\n- Ajouter un `<caption>` explicite pour decrire le contenu.\n- Utiliser `scope` sur les cellules d\'en-tête.\n- En mode triable, utiliser `aria-sort` et des boutons avec libelles explicites.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/content/tables/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tables</a>\n'}}},argTypes:{compact:{control:`boolean`,description:"Ajoute `.table-sm` pour un affichage plus compact"},striped:{control:`boolean`,description:"Ajoute `.table-striped`"},hover:{control:`boolean`,description:"Ajoute `.table-hover`"},bordered:{control:`boolean`,description:"Ajoute `.table-bordered`"},responsive:{control:`boolean`,description:`Enrobe le tableau dans un conteneur responsive`},responsiveBreakpoint:{control:`select`,options:[`all`,`sm`,`md`,`lg`,`xl`,`xxl`],description:"Breakpoint de la version responsive (ignore si `responsive` est false)"},sortable:{control:`boolean`,description:"Affiche une variante triable avec `.table-sortable`"}}},n=[{name:`NAGAMA Maxime`,status:`PASS IAE valide`,passNumber:`99999 99 03402`,validity:`730 jours (Environ 1 an et 11 mois)`},{name:`NAILO Emi`,status:`PASS IAE valide (non demarre)`,passNumber:`99999 99 03401`,validity:`730 jours (Environ 1 an et 11 mois)`},{name:`BIOR Tristan`,status:`PASS IAE valide`,passNumber:`99999 77 27894`,validity:`685 jours (Environ 1 an et 10 mois)`}],r=e=>e===`all`?`table-responsive`:`table-responsive-${e}`,i=({compact:e,striped:t,hover:i,bordered:a,responsive:o,responsiveBreakpoint:s,sortable:c})=>{let l=[`table`];e&&l.push(`table-sm`),t&&l.push(`table-striped`),i&&l.push(`table-hover`),a&&l.push(`table-bordered`),c&&l.push(`table-sortable`);let u=o?`<div class="${r(s)}">`:``,d=o?`</div>`:``,f=c?` data-bs-table="sortable"`:``,p=c?`
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
      </thead>`:`
      <thead>
        <tr>
          <th scope="col">Nom Prenom</th>
          <th scope="col">Statut du PASS IAE</th>
          <th scope="col">Numero de PASS IAE</th>
          <th scope="col">Duree de validite</th>
          <th scope="col" class="text-end w-100px"><span class="visually-hidden">Actions rapides sur le candidat</span></th>
        </tr>
      </thead>`,m=c?n.map(e=>`
        <tr>
          <td>${e.passNumber}</td>
          <td>${e.validity}</td>
          <td>${e.status}</td>
        </tr>`).join(``):n.map((e,t)=>`
        <tr>
          <th scope="row"><a href="#" class="btn-link">${e.name}</a></th>
          <td>${e.status}</td>
          <td>${e.passNumber}</td>
          <td>${e.validity}</td>
          <td class="text-end w-100px">
            <div class="d-flex justify-content-end gap-2" role="group" aria-label="Actions rapides sur le candidat">
              <a class="btn btn-sm btn-secondary btn-ico-only" href="" data-bs-toggle="tooltip" data-bs-title="Postuler pour ce candidat">
                <i class="ri-draft-line" aria-label="Postuler pour BARACUS Boris"></i>
              </a>
              <button class="btn btn-sm btn-secondary btn-ico-only" type="button" id="dropdown_${t}_action_menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Plus d'actions">
                <i class="ri-more-2-fill" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdown_${t}_action_menu">
                <a href="" class="dropdown-item">
                  Valider son éligibilité IAE
                </a>
                <a href="" class="dropdown-item">
                  Invalider son éligibilité IAE
                </a>
              </div>
            </div>
          </td>
        </tr>`).join(``);return`
${u}
<table class="${l.join(` `)}"${f}>
  <caption>Liste des salaries et PASS IAE</caption>
  ${p}
  <tbody>
    ${m}
  </tbody>
</table>
${d}`},a={render:i,parameters:{docs:{description:{story:`Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable).`}}},args:{compact:!1,striped:!1,hover:!1,bordered:!1,responsive:!1,responsiveBreakpoint:`all`,sortable:!1}},o={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variation compacte avec `.table-sm`."}}},args:{compact:!0,striped:!1,hover:!1,bordered:!1,responsive:!1,responsiveBreakpoint:`all`,sortable:!1}},s={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Cas d'usage avec lignes zebrees et survol des lignes.`}}},args:{compact:!1,striped:!0,hover:!0,bordered:!1,responsive:!1,responsiveBreakpoint:`all`,sortable:!1}},c={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Table avec conteneur responsive (scroll horizontal sur petits écrans).`}}},args:{compact:!1,striped:!1,hover:!1,bordered:!1,responsive:!0,responsiveBreakpoint:`all`,sortable:!1}},l={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Version triable avec `.table-sortable` et attribut `data-bs-table="sortable"`.'}}},args:{compact:!1,striped:!1,hover:!0,bordered:!1,responsive:!1,responsiveBreakpoint:`all`,sortable:!0}},u={render:()=>`
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
    </table>`,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Exemple de tableau de candidatures reçues avec tri, sélection et critères d’éligibilité.`}}}},d=[`Default`,`Compact`,`StripedAndHover`,`Responsive`,`Sortable`,`DemandesRecues`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    docs: {
      description: {
        story: "Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable)."
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variation compacte avec \`.table-sm\`."
      }
    }
  },
  args: {
    compact: true,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Cas d'usage avec lignes zebrees et survol des lignes."
      }
    }
  },
  args: {
    compact: false,
    striped: true,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Table avec conteneur responsive (scroll horizontal sur petits écrans)."
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: true,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: 'Version triable avec \`.table-sortable\` et attribut \`data-bs-table="sortable"\`.'
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => \`
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
    </table>\`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple de tableau de candidatures reçues avec tri, sélection et critères d’éligibilité."
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{o as Compact,a as Default,u as DemandesRecues,c as Responsive,l as Sortable,s as StripedAndHover,d as __namedExportsOrder,t as default};