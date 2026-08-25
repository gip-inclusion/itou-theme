import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s;function c(){return(c=e((()=>{t={title:`Components/Info`,decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
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
`}}},argTypes:{collapsed:{control:`boolean`,description:`État initial du collapse (true = fermé, false = ouvert)`},borderless:{control:`boolean`,description:`Variante borderless (sans icône)`}}},n=({collapsed:e,borderless:t})=>{let n=t?`c-info c-info--borderless`:`c-info`,r=t?`collapseInfoDemoBorderless`:`collapseInfoDemo`;return`
<div class="${n}">
  <button class="${e?`c-info__summary collapsed`:`c-info__summary`}" data-bs-toggle="collapse" data-bs-target="#${r}" aria-expanded="${e?`false`:`true`}" aria-controls="${r}">
    <span>Réservé au public éligible au contrat PEC</span>
  </button>
  <div class="${e?`c-info__detail collapse`:`c-info__detail collapse show`}" id="${r}">
    <p>Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation.</p>
  </div>
</div>`},r={render:n,parameters:{docs:{description:{story:`Info simple avec titre uniquement, sans dropdown.`}}},args:{collapsed:!0,borderless:!1}},i={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Variante sans bordures. Elle doit être utilisée quand le composant est déjà imbriqué dans un `.c-box` afin d\'éviter trop de "box bordurées" imbriquées'}}},args:{collapsed:!0,borderless:!0}},a=()=>`
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
</div>`,o={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Sans collapse avec le contenu toujours visible.`}}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Default`,`Borderless`,`WithoutCollapse`]})))()}c();export{i as Borderless,r as Default,o as WithoutCollapse,s as __namedExportsOrder,t as default};