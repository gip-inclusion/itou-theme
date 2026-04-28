const p={title:"Components/Info",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.c-info\` sert à mettre une information "compacte" en avant. Le message doit donner une information utile à tous les utilisateurs concernée par cette interface.

### Anatomie
1. **Icône** - Indicateur visuel (automatique via CSS)
2. **Titre** - Information principale
3. **Dropdown** (optionnel) - Permet d'afficher/masquer le détail
4. **Description** (optionnelle) - Contenu détaillé

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-info\` | Conteneur principal |
| \`.c-info__summary\` | Titre/résumé de l'info |
| \`.c-info__detail\` | Contenu détaillé (avec collapse) |
| \`.c-info--borderless\` | Variante sans bordure et sans icône |

### Accessibilité
- Le bouton \`.c-info__summary\` doit exposer \`aria-expanded\` et \`aria-controls\` si le détail est repliable.
- Les icônes purement décoratives doivent rester masquées aux lecteurs d'écran avec \`aria-hidden="true"\`.
- Le libellé du résumé doit être explicite, surtout lorsque le détail est masqué par défaut.
`}}},argTypes:{collapsed:{control:"boolean",description:"État initial du collapse (true = fermé, false = ouvert)"},borderless:{control:"boolean",description:"Variante borderless (sans icône)"}}},a=({collapsed:e,borderless:t})=>{const i=t?"c-info c-info--borderless":"c-info",n=t?"collapseInfoDemoBorderless":"collapseInfoDemo";return`
<div class="${i}">
  <button class="${e?"c-info__summary collapsed":"c-info__summary"}" data-bs-toggle="collapse" data-bs-target="#${n}" aria-expanded="${e?"false":"true"}" aria-controls="${n}">
    <span>Réservé au public éligible au contrat PEC</span>
  </button>
  <div class="${e?"c-info__detail collapse":"c-info__detail collapse show"}" id="${n}">
    <p>Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation.</p>
  </div>
</div>`},s={render:a,parameters:{docs:{description:{story:"Info simple avec titre uniquement, sans dropdown."}}},args:{collapsed:!0,borderless:!1}},o={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Variante sans bordures. Elle doit être utilisée quand le composant est déjà imbriqué dans un `.c-box` afin d\'éviter trop de "box bordurées" imbriquées'}}},args:{collapsed:!0,borderless:!0}},l=()=>`
<div class="c-info">
  <button class="c-info__summary">
    <span>Comment gérer mes suspensions ?</span>
  </button>
  <div class="c-info__detail">
    <p>
      Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation :<br>
      <a href="#" class="has-external-link">https://aide.emplois.inclusion.beta.gouv.fr/hc/fr/articles/...</a>
    </p>
  </div>
</div>`,r={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Sans collapse avec le contenu toujours visible."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Info simple avec titre uniquement, sans dropdown."
      }
    }
  },
  args: {
    collapsed: true,
    borderless: false
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante sans bordures. Elle doit être utilisée quand le composant est déjà imbriqué dans un \`.c-box\` afin d'éviter trop de \\"box bordurées\\" imbriquées"
      }
    }
  },
  args: {
    collapsed: true,
    borderless: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderWithoutCollapse,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Sans collapse avec le contenu toujours visible."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","Borderless","WithoutCollapse"];export{o as Borderless,s as Default,r as WithoutCollapse,m as __namedExportsOrder,p as default};
