const d={title:"Components/Box Dashboard",decorators:[n=>`
      <style>
        .c-box__header--dora {
          background-image: url("./images/card-header-bg-dora.png");
          background-repeat: no-repeat;
          background-position: center right;
          background-size: contain;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
      </style>
      <div style="max-width: 1000px; margin: 0 auto;">${n()}</div>
    `],tags:["autodocs"],argTypes:{hasMainLink:{control:"boolean",description:"Affiche le bouton principal de la box (optionnel)."},hasTitleBadge:{control:"boolean",description:"Affiche un badge complementaire a droite du titre (optionnel)."},hasBottomInfo:{control:"boolean",description:"Affiche une information complementaire en bas de la box (optionnel)."}},parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.c-box\` en contexte dashboard permet d'afficher des blocs d'actions et de suivi.

### Anatomie
1. **Entete** - titre du bloc, eventuellement badge/contextualisation
2. **Corps** - liste d'actions principales et secondaires
3. **Pied optionnel** - information complementaire ou lien externe

### Accessibilite
- Garder des labels explicites sur les liens et boutons.
- Marquer les icones decoratives avec \`aria-hidden="true"\`.
- Conserver des contrastes suffisants pour les badges de statut.
`}}}},r=({hasBottomInfo:n,hasMainLink:s,hasTitleBadge:i})=>`
  <div class="c-box p-0 h-100">
    ${i?`
      <div class="d-flex p-3 p-lg-4">
        <div class="flex-grow-1">
          <span class="h4 m-0">Candidatures</span>
        </div>
        <div class="ms-2">
          <span class="badge rounded-pill badge-sm bg-primary">ID 115</span>
        </div>
      </div>
    `:`
      <div class="p-3 p-lg-4">
        <span class="h4 mb-0">Candidatures</span>
      </div>
    `}
    <div class="px-3 px-lg-4">
      ${s?`
      <a href="#" class="btn btn-outline-primary btn-block btn-ico mb-3">
        <i class="ri-file-user-line ri-lg fw-normal" aria-hidden="true"></i>
        <span>Voir toutes les candidatures</span>
      </a>
      `:""}
      <ul class="list-unstyled mb-lg-5">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-notification-4-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>A traiter</span>
          </a>
          <span class="badge rounded-pill badge-xs bg-info-lighter text-info">1</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-time-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>En attente</span>
          </a>
          <span class="badge rounded-pill badge-xs bg-info-lighter text-info">0</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-folder-user-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Vivier</span>
          </a>
          <span class="badge rounded-pill badge-xs bg-info-lighter text-info">0</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-list-check-3 ri-lg fw-normal" aria-hidden="true"></i>
            <span>Campagne en cours</span>
          </a>
          <span class="badge badge-xs rounded-pill bg-warning-lighter text-warning"><i class="ri-error-warning-line" aria-hidden="true"></i>Action a faire</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-draft-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Enregistrer une candidature</span>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-download-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Exporter toutes les candidatures</span>
          </a>
        </li>
      </ul>
      ${n?`
      <hr class="mb-3">
      <p class="fs-sm mb-lg-5">
        France Travail - ARLES est une organisation habilitee. Vous pouvez realiser le
        <a href="https://aide.emplois.inclusion.beta.gouv.fr/hc/fr/articles/14733750518161--Diagnostic-socio-professionnel-de-r%C3%A9f%C3%A9rence" target="_blank" rel="noopener noreferrer" class="has-external-link" aria-label="Diagnostic socio-professionnel des candidats (ouverture dans un nouvel onglet)">diagnostic socio-professionnel</a>
        des candidats que vous accompagnez.
      </p>
      `:""}
    </div>
  </div>
`,t=()=>`
  <div class="c-box p-0 h-100">
    <div class="c-box__header--dora p-3 p-lg-4">
      <span class="h4 m-0">DORA</span>
    </div>
    <div class="px-3 px-lg-4 pt-3 pt-lg-4">
      <ul class="list-unstyled mb-lg-5">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" rel="noopener" target="_blank" aria-label="Consulter les services d'insertion de votre territoire (ouverture dans un nouvel onglet)" class="btn-link btn-ico">
            <i class="ri-search-eye-line ri-lg fw-normal align-self-start" aria-hidden="true"></i>
            <span>Consulter les services d'insertion de votre territoire</span>
            <i class="ri-external-link-line fw-normal ms-2" aria-hidden="true"></i>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" rel="noopener" target="_blank" aria-label="Referencer vos services (ouverture dans un nouvel onglet)" class="btn-link btn-ico">
            <i class="ri-file-add-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Referencer vos services</span>
            <i class="ri-external-link-line fw-normal ms-2" aria-hidden="true"></i>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" rel="noopener" target="_blank" aria-label="Suggerer un service partenaire (ouverture dans un nouvel onglet)" class="btn-link btn-ico">
            <i class="ri-lightbulb-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Suggerer un service partenaire</span>
            <i class="ri-external-link-line fw-normal ms-2" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
`,e={render:r,args:{hasMainLink:!0,hasBottomInfo:!1,hasTitleBadge:!1},parameters:{docs:{description:{story:"La Box Dashboard avec les options `hasMainLink`, `hasTitleBadge` et `hasBottomInfo` permettent d'activer les variantes."}}}},a={render:t,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante specifique DORA pour les services partenaires avec header `c-box__header--dora` et liste de liens externes d'action."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    hasMainLink: true,
    hasBottomInfo: false,
    hasTitleBadge: false
  },
  parameters: {
    docs: {
      description: {
        story: "La Box Dashboard avec les options \`hasMainLink\`, \`hasTitleBadge\` et \`hasBottomInfo\` permettent d'activer les variantes."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderServicesPartenaires,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante specifique DORA pour les services partenaires avec header \`c-box__header--dora\` et liste de liens externes d'action."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","ServicesPartenaires"];export{e as Default,a as ServicesPartenaires,p as __namedExportsOrder,d as default};
