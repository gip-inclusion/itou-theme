import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t={title:`Components/Popovers`,decorators:[e=>{let t=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{[...document.querySelectorAll(`[data-bs-toggle="popover"]`)].forEach(e=>bootstrap.Popover.getOrCreateInstance(e))},0),t}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
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
`}}}},n=()=>`
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
  `,r=()=>`
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
  `,i=()=>`
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
  `,a=()=>`
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
  `,o=()=>`
    <div style="min-height: 180px;">
      <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
        <button class="btn btn-primary" type="button" disabled>
          Disabled button
        </button>
      </span>
    </div>
  `,s={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Exemples de base avec un popover simple et une variante avec titre, conformes aux exemples Bootstrap et au HTML du projet.`}}}},c={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le popover peut être positionne en haut, à droite, en bas ou à gauche via `data-bs-placement`."}}}},l={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Cas historique de l'ancienne documentation : ouverture au survol. La story utilise `hover focus` pour conserver un accès clavier minimal."}}}},u={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Pattern Bootstrap avec `data-bs-trigger="focus"` pour fermer le popover au prochain clic hors du déclencheur.'}}}},d={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Pour un element désactivé, le popover doit être porte par un wrapper focusable, et non par le bouton `disabled` lui-meme."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Directions`,`HoverTrigger`,`DismissOnNextClick`,`DisabledElement`]})))()}p();export{s as Default,c as Directions,d as DisabledElement,u as DismissOnNextClick,l as HoverTrigger,f as __namedExportsOrder,t as default};