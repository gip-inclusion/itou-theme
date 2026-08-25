import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t={title:`Components/Box Summary`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
La variante \`.c-box--summary\` permet de regrouper des informations par thème ou par groupe, avec un en-tête, un corps et un pied d'actions optionnel.

### Cas d'usage
1. Liste de documents à télécharger
2. Récapitulatif de données chiffrées
3. Bloc de commentaire
4. Bloc de validation avec action de contrôle

### Anatomie
1. **Conteneur** - \`.c-box.c-box--summary\`
2. **En-tête** - \`.c-box--summary__header\` (titre + statut optionnel)
3. **Corps** - \`.c-box--summary__body\` / \`.c-box--summary__list-data\`
4. **Pied** - \`.c-box--summary__footer\` (actions)

### Accessibilité
- Garder des intitulés explicites pour les actions (télécharger, modifier, contrôler).
- Utiliser \`aria-hidden="true"\` pour les icônes purement décoratives.
- Vérifier le contraste des badges d'état.
`}}}},n=()=>`
  <div class="c-box c-box--summary has-links-inside">
    <div class="c-box--summary__header">
      <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
        <div class="flex-grow-1">
          <h3 class="m-0">Documents</h3>
        </div>
        <div>
          <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">À contrôler</span>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="c-box--summary__body">
      <div class="c-box--summary__list-data">
        <ul class="list-unstyled">
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Synthèse du dossier de demande d’appellation GEIQ</span>
            <a class="btn-link" href="#" data-bs-toggle="tooltip" data-bs-title="Télécharger (.pdf)">
              <i class="ri-download-line fw-medium" aria-label="Télécharger le fichier Synthèse_Label_2024.pdf"></i>
            </a>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Bilan financier de l’action</span>
            <a class="btn-link" href="#" data-bs-toggle="tooltip" data-bs-title="Télécharger (.pdf)">
              <i class="ri-download-line fw-medium" aria-label="Télécharger le fichier Bilan_Financier_2024.pdf"></i>
            </a>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Bilan financier de la structure</span>
            <a class="btn-link" href="#" data-bs-toggle="tooltip" data-bs-title="Télécharger (.pdf)">
              <i class="ri-download-line fw-medium" aria-label="Télécharger le fichier Bilan_Financier_Structure_2024.pdf"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`,r=()=>`
  <div class="c-box c-box--summary has-links-inside">
    <div class="c-box--summary__header">
      <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
        <div class="flex-grow-1">
          <h3 class="m-0">Détail et sélection des parcours</h3>
        </div>
        <div>
          <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">À contrôler</span>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="c-box--summary__body">
      <div class="c-box--summary__list-data">
        <ul class="list-unstyled">
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Dont potentiellement éligibles à l’aide à 814 €</span>
            <strong>10</strong>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Dont potentiellement éligibles à l’aide à 1400 €</span>
            <strong>62</strong>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Nombre de salariés présentés par le GEIQ accompagnés sur une durée &gt; 3 mois sur l’année</span>
            <strong>78</strong>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Contrats de professionnalisation</span>
            <i class="text-disabled">Non renseigné</i>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Montant total potentiel</span>
            <strong>70 000€</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-box--summary__footer">
      <div class="d-flex justify-content-end">
        <a class="btn btn-primary btn-block w-100 w-md-auto" href="#">Contrôler la sélection</a>
      </div>
    </div>
  </div>
`,i=()=>`
  <div class="c-box c-box--summary has-links-inside">
    <div class="c-box--summary__header">
      <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
        <div class="flex-grow-1">
          <h3 class="m-0">Commentaire général</h3>
        </div>
        <div>
          <span class="badge badge-sm rounded-pill bg-success-light text-success">Complété</span>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="c-box--summary__body">
      <q>Un commentaire sur plusieurs lignes qui est long mais pas trop pour expliquer des choses.</q>
    </div>
    <div class="c-box--summary__footer">
      <div class="d-flex justify-content-end">
        <a class="btn btn-ico btn-outline-primary btn-block w-100 w-md-auto" href="#">
          <i class="ri-pencil-line ri-lg" aria-hidden="true"></i>
          <span>Modifier</span>
        </a>
      </div>
    </div>
  </div>
`,a=()=>`
  <div class="c-box c-box--summary">
    <div class="c-box--summary__header">
      <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
        <div class="flex-grow-1">
          <h3 class="m-0">Récapitulatif</h3>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="c-box--summary__body">
      <div class="c-box--summary__list-data">
        <ul class="list-unstyled">
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Nombre d’aides à 814 €</span>
            <strong>10</strong>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Nombre d’aides à 1400 €</span>
            <strong>62</strong>
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Nombre d’aides refusées</span>
            <strong>78</strong>
          </li>
          <li>
            <hr class="my-3">
          </li>
          <li class="d-flex gap-2">
            <span class="flex-grow-1">Montant total potentiel</span>
            <strong>43 000€</strong>
          </li>
        </ul>
      </div>
      <div class="c-info mt-3 mt-lg-4">
        <span class="c-info__summary">Ces données ont été calculées suite à la sélection que vous avez effectuée.</span>
      </div>
    </div>
  </div>
`,o={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Variante liste de documents avec statut et actions de téléchargement.`}}}},s={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Variante chiffrée avec CTA principal pour contrôler la sélection.`}}}},c={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Variante texte libre avec action de modification.`}}}},l={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Variante de synthèse avec bloc d’information complémentaire.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderDocuments,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante liste de documents avec statut et actions de téléchargement."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderParcours,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante chiffrée avec CTA principal pour contrôler la sélection."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: renderCommentaire,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante texte libre avec action de modification."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderRecapitulatif,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante de synthèse avec bloc d’information complémentaire."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Documents`,`Parcours`,`Commentaire`,`Recapitulatif`]})))()}d();export{c as Commentaire,o as Documents,s as Parcours,l as Recapitulatif,u as __namedExportsOrder,t as default};