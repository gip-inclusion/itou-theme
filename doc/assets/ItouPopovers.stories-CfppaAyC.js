const m={title:"Components/Popovers",decorators:[a=>{const s=`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`;return setTimeout(()=>{[...document.querySelectorAll('[data-bs-toggle="popover"]')].forEach(i=>bootstrap.Popover.getOrCreateInstance(i))},0),s}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.popover\` affiche un contenu d'information complémentaire associe a un element déclencheur.
Il repose sur Bootstrap et Popper pour le positionnement, et necessite une initialisation JavaScript explicite.

### Anatomie
1. **Déclencheur** - Bouton, lien ou wrapper focusable avec \`data-bs-toggle="popover"\`
2. **Titre** (optionnel) - Defini via \`data-bs-title\` ou \`title\`
3. **Contenu** - Defini via \`data-bs-content\`
4. **Bulle** - Element genere par Bootstrap avec \`.popover\`, \`.popover-header\` et \`.popover-body\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.popover\` | Conteneur genere par Bootstrap |
| \`.popover-header\` | Titre optionnel du popover |
| \`.popover-body\` | Corps du popover |

### Accessibilité
- Utiliser de preference des elements nativement interactifs (boutons, liens, controles de formulaire).
- Ne pas s'appuyer uniquement sur le survol, afin de conserver un accès clavier.
- Eviter les contenus trop longs ou interactifs dans le popover ; si nécessaire, preferer une modale.
- Pour un element désactivé, placer le popover sur un wrapper focusable.
- Ajouter \`data-bs-container="body"\` pour eviter les problemes de rendu dans des conteneurs complexes.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/popovers/#overview" target="_blank" rel="noopener noreferrer" class="has-external-link">Popovers</a>
`}}}},p=()=>`
    <div class="d-flex flex-wrap gap-3 align-items-center" style="min-height: 180px;">
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Ceci est un texte d'information complémentaire affiche dans un popover."
      >
        Click to toggle popover
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover with title
      </button>
    </div>
  `,c=()=>`
    <div class="d-flex flex-wrap gap-3 align-items-center" style="min-height: 180px;">
      <button type="button" class="btn btn-outline-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
        Popover on top
      </button>
      <button type="button" class="btn btn-outline-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
        Popover on right
      </button>
      <button type="button" class="btn btn-outline-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
        Popover on bottom
      </button>
      <button type="button" class="btn btn-outline-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
        Popover on left
      </button>
    </div>
  `,l=()=>`
    <div class="d-flex flex-wrap gap-3 align-items-center" style="min-height: 180px;">
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-content="Top popover">
        Popover hover top
      </button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-trigger="hover focus" data-bs-content="Right popover">
        Popover hover right
      </button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="hover focus" data-bs-title="Title for bottom" data-bs-content="Popover on bottom with title">
        Popover hover with title
      </button>
    </div>
  `,d=()=>`
    <div style="min-height: 180px;">
      <a
        tabindex="0"
        class="btn btn-danger"
        role="button"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        data-bs-title="Dismissible popover"
        data-bs-content="Ce popover se referme lors du prochain clic ou focus ailleurs."
      >
        Dismissible popover
      </a>
    </div>
  `,u=()=>`
    <div style="min-height: 180px;">
      <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
        <button class="btn btn-primary" type="button" disabled>
          Disabled button
        </button>
      </span>
    </div>
  `,e={render:p,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de base avec un popover simple et une variante avec titre, conformes aux exemples Bootstrap et au HTML du projet."}}}},t={render:c,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le popover peut être positionne en haut, à droite, en bas ou à gauche via `data-bs-placement`."}}}},o={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Cas historique de l'ancienne documentation : ouverture au survol. La story utilise `hover focus` pour conserver un accès clavier minimal."}}}},r={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Pattern Bootstrap avec `data-bs-trigger="focus"` pour fermer le popover au prochain clic hors du déclencheur.'}}}},n={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Pour un element désactivé, le popover doit être porte par un wrapper focusable, et non par le bouton `disabled` lui-meme."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderDefault,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de base avec un popover simple et une variante avec titre, conformes aux exemples Bootstrap et au HTML du projet."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderDirections,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Le popover peut être positionne en haut, à droite, en bas ou à gauche via \`data-bs-placement\`."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderHoverTrigger,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Cas historique de l'ancienne documentation : ouverture au survol. La story utilise \`hover focus\` pour conserver un accès clavier minimal."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderDismissOnNextClick,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Pattern Bootstrap avec \`data-bs-trigger=\\"focus\\"\` pour fermer le popover au prochain clic hors du déclencheur."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderDisabledTrigger,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Pour un element désactivé, le popover doit être porte par un wrapper focusable, et non par le bouton \`disabled\` lui-meme."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","Directions","HoverTrigger","DismissOnNextClick","DisabledElement"];export{e as Default,t as Directions,n as DisabledElement,r as DismissOnNextClick,o as HoverTrigger,v as __namedExportsOrder,m as default};
