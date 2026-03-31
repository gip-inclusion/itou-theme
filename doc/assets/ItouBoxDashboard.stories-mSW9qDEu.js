const l={title:"Components/Box Dashboard",decorators:[n=>`<div style="max-width: 1000px; margin: 0 auto;">${n()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.c-box\` en contexte dashboard permet d'afficher des blocs d'actions et de suivi.
Ces variantes reprennent les 3 exemples de box dashboard fournis (organisation, candidatures, controle a posteriori).

### Anatomie
1. **Entete** - titre du bloc, eventuellement badge/contextualisation
2. **Corps** - liste d'actions principales et secondaires
3. **Pied optionnel** - information complementaire ou lien externe

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-box\` | Conteneur principal |
| \`.btn-link.btn-ico\` | Action textuelle avec icone |
| \`.badge\` | Indicateur d'etat ou de volume |
| \`.has-external-link\` | Lien externe explicite |

### Accessibilite
- Garder des labels explicites sur les liens et boutons.
- Marquer les icones decoratives avec \`aria-hidden="true"\`.
- Conserver des contrastes suffisants pour les badges de statut.
`}}}},s=()=>`
  <div class="c-box p-0 h-100" style="max-width: 560px;">
    <div class="d-flex p-3 p-lg-4">
      <div class="flex-grow-1">
        <span class="h4 m-0">Organisation</span>
      </div>
      <div class="ms-2">
        <span class="badge rounded-pill badge-sm bg-primary">ID 115</span>
      </div>
    </div>
    <div class="px-3 px-lg-4">
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-pencil-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Modifier cette organisation</span>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-eye-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Voir la fiche publique</span>
          </a>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-team-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Gerer les collaborateurs</span>
          </a>
        </li>
      </ul>
      <hr class="mb-3">
      <p class="fs-sm mb-lg-5">
        <i class="ri-award-line ri-lg fw-normal me-1" aria-hidden="true"></i>
        France Travail - ARLES est une organisation habilitee. Vous pouvez realiser le
        <a href="https://aide.emplois.inclusion.beta.gouv.fr/hc/fr/articles/14733750518161--Diagnostic-socio-professionnel-de-r%C3%A9f%C3%A9rence" target="_blank" rel="noopener noreferrer" class="has-external-link" aria-label="Diagnostic socio-professionnel des candidats (ouverture dans un nouvel onglet)">diagnostic socio-professionnel</a>
        des candidats que vous accompagnez.
      </p>
    </div>
  </div>
`,r=()=>`
  <div class="c-box p-0 h-100" style="max-width: 560px;">
    <div class="p-3 p-lg-4">
      <span class="h4 mb-0">Candidatures</span>
    </div>
    <div class="px-3 px-lg-4">
      <a href="#" class="btn btn-outline-primary btn-block btn-ico mb-3">
        <i class="ri-file-user-line ri-lg fw-normal" aria-hidden="true"></i>
        <span>Voir toutes les candidatures</span>
      </a>
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
    </div>
  </div>
`,t=()=>`
  <div class="c-box p-0 h-100" style="max-width: 560px;">
    <div class="d-flex p-3 p-lg-4">
      <div class="flex-grow-1">
        <span class="h4 m-0">Controle a posteriori</span>
      </div>
    </div>
    <div class="px-3 px-lg-4 pb-3 pb-lg-5">
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-list-check-3 ri-lg fw-normal" aria-hidden="true"></i>
            <span>Campagne en cours</span>
          </a>
          <span class="badge badge-xs rounded-pill bg-warning-lighter text-warning"><i class="ri-error-warning-line" aria-hidden="true"></i>Action a faire</span>
        </li>
        <li class="d-flex justify-content-between align-items-center mb-3">
          <a href="#" class="btn-link btn-ico">
            <i class="ri-calendar-line ri-lg fw-normal" aria-hidden="true"></i>
            <span>Calendrier</span>
          </a>
        </li>
      </ul>
      <hr class="mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <a href="https://www.legifrance.gouv.fr/download/pdf/circ?id=45319" class="btn-link btn-ico" rel="noopener noreferrer" target="_blank">
          <span>Contexte legislatif</span>
          <i class="ri-external-link-line fw-normal" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
`,e={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box dashboard Organisation avec acces rapides, badge d'identifiant et information d'habilitation."}}}},a={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box dashboard Candidatures avec acces global, raccourcis de statuts et actions metier."}}}},i={render:t,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box dashboard Controle a posteriori avec suivi de campagne, calendrier et lien de contexte legislatif."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderOrganization,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box dashboard Organisation avec acces rapides, badge d'identifiant et information d'habilitation."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderCandidatures,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box dashboard Candidatures avec acces global, raccourcis de statuts et actions metier."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderControleAPosteriori,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box dashboard Controle a posteriori avec suivi de campagne, calendrier et lien de contexte legislatif."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const o=["Organization","Candidatures","ControleAPosteriori"];export{a as Candidatures,i as ControleAPosteriori,e as Organization,o as __namedExportsOrder,l as default};
