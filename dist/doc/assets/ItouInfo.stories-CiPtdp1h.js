const u={title:"Itou-Componnents/Info",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.c-info\` sert à mettre une information en avant. Il peut être utilisé notamment dans des formulaires ou dans des sections afin d'apporter plus d'informations à l'utilisateur.

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
| \`.c-info--secondary\` | Variante sans icône |

### Comportement
- Sans \`data-bs-toggle="collapse"\` : affichage simple
- Avec \`data-bs-toggle="collapse"\` : affichage avec dropdown
`}}},argTypes:{collapsed:{control:"boolean",description:"État initial du collapse (true = fermé, false = ouvert)"},secondary:{control:"boolean",description:"Variante sans icône"}}},t=({collapsed:e,secondary:r})=>{const i=r?"c-info c-info--secondary":"c-info",a=r?"collapseInfoDemoSecondary":"collapseInfoDemo";return`
<div class="${i}">
  <button class="${e?"c-info__summary collapsed":"c-info__summary"}" data-bs-toggle="collapse" data-bs-target="#${a}" aria-expanded="${e?"false":"true"}" aria-controls="${a}">
    <span>Réservé au public éligible au contrat PEC</span>
  </button>
  <div class="${e?"c-info__detail collapse":"c-info__detail collapse show"}" id="${a}">
    <p>Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation.</p>
  </div>
</div>`},s={render:t,parameters:{docs:{description:{story:"Info simple avec titre uniquement, sans dropdown."}}},args:{collapsed:!0,secondary:!1}},n={render:t,parameters:{docs:{description:{story:"Variante secondaire sans icône et sans bordures, utilisée pour des informations moins importantes."}}},args:{collapsed:!0,secondary:!0}},c=()=>`
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
</div>`,o={render:c,parameters:{docs:{description:{story:"Sans dropdown avec le contenu toujours visible."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    secondary: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Variante secondaire sans icône et sans bordures, utilisée pour des informations moins importantes."
      }
    }
  },
  args: {
    collapsed: true,
    secondary: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderWithoutDropdown,
  parameters: {
    docs: {
      description: {
        story: "Sans dropdown avec le contenu toujours visible."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","Secondary","WithoutDropdown"];export{s as Default,n as Secondary,o as WithoutDropdown,m as __namedExportsOrder,u as default};
