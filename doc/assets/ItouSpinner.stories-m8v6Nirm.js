const i={title:"Components/Spinner",decorators:[t=>`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Classe utilitaire permettant d'afficher un spinner de chargement.

### Anatomie
1. **Spinner simple** — Utiliser le composant Bootstrap <code>.spinner-border</code> pour indiquer un chargement.
2. **Spinner utilitaire** — Utiliser <code>.has-spinner-loading</code> pour masquer temporairement le contenu et afficher un overlay de chargement.
3. **Cas bouton** — Sur les <code>.btn</code>, prévoir deux conteneurs <code>.stable-text</code> et <code>.loading-text</code>.
4. **Accessibilité** — Ajouter un texte de statut (<code>role="status"</code>) et/ou un libellé caché <code>.visually-hidden</code>.

### Classes CSS
| Classe | Description |
|--------|-------------|
| <code>.spinner-border</code> | Spinner Bootstrap circulaire |
| <code>.spinner-border-sm</code> | Variante compacte du spinner |
| <code>.text-tertiary</code> | Couleur du spinner |
| <code>.has-spinner-loading</code> | Utilitaire itou pour état de chargement (overlay) |
| <code>.stable-text</code> | Contenu visible hors chargement (cas bouton) |
| <code>.loading-text</code> | Contenu visible pendant le chargement (cas bouton) |

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/spinners/#about" target="_blank" rel="noopener noreferrer" class="has-external-link">Spinners</a>
`}}}},o=()=>`
  <div class="spinner-border text-tertiary" role="status">
    <span class="visually-hidden">Chargement...</span>
  </div>
  `,e={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Spinner Bootstrap simple pour indiquer un chargement ponctuel."}}}},s=()=>`
<div class="card c-card has-spinner-loading" role="status">
  <div class="card-header">
    <img src="./images/logo-plateforme-inclusion.svg" height="53" alt="La plateforme de l'inclusion">
  </div>
  <div class="card-body">
    <p class="mb-2">Contenu de carte en cours de mise à jour.</p>
    <p class="mb-0">La classe <code>.has-spinner-loading</code> applique un voile de chargement et affiche automatiquement un spinner centré.</p>
  </div>
</div>
  `,n={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Application de `.has-spinner-loading` sur un conteneur HTML (exemple carte)."}}}},a=()=>`
<button type="button" disabled class="btn btn-ico btn-primary has-spinner-loading">
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Envoi en cours</span>
</button>
  `,r={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Application de `.has-spinner-loading` directement sur un `.btn`."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderDefaultSpinner,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Spinner Bootstrap simple pour indiquer un chargement ponctuel."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderSpinnerOnContainer,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Application de \`.has-spinner-loading\` sur un conteneur HTML (exemple carte)."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderSpinnerOnButton,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Application de \`.has-spinner-loading\` directement sur un \`.btn\`."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","SpinnerOnContainer","SpinnerOnButton"];export{e as Default,r as SpinnerOnButton,n as SpinnerOnContainer,c as __namedExportsOrder,i as default};
