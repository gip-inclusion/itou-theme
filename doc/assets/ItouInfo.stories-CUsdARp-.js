const m={title:"Itou-Componnents/Info",decorators:[o=>`<div style="max-width: 800px; margin: 0 auto;">${o()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
`}}},argTypes:{title:{control:"text",description:"Titre de l'info"},collapsed:{control:"boolean",description:"État initial du collapse (true = fermé, false = ouvert)"},secondary:{control:"boolean",description:"Variante sans icône"}}},r=({title:o,collapsed:t,secondary:i})=>{const c=i?"c-info c-info--secondary":"c-info",a="collapseInfoDemo";return`
<div class="${c}">
  <button class="${t?"c-info__summary collapsed":"c-info__summary"}" data-bs-toggle="collapse" data-bs-target="#${a}" aria-expanded="${t?"false":"true"}" aria-controls="${a}">
    <span>${o}</span>
  </button>
  <div class="${t?"c-info__detail collapse":"c-info__detail collapse show"}" id="${a}">
    <p>Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation.</p>
  </div>
</div>`},e={render:r,parameters:{docs:{description:{story:"Info simple avec titre uniquement, sans dropdown."}}},args:{title:"Réservé au public éligible au contrat PEC",collapsed:!0,secondary:!1}},n={render:r,parameters:{docs:{description:{story:"Variante secondaire sans icône et sans bordures, utilisée pour des informations moins importantes."}}},args:{title:"Réservé au public éligible au contrat PEC",collapsed:!0,secondary:!0}},l=()=>`
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
</div>`,s={render:l,parameters:{docs:{description:{story:"Sans dropdown avec le contenu toujours visible."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Info simple avec titre uniquement, sans dropdown."
      }
    }
  },
  args: {
    title: "Réservé au public éligible au contrat PEC",
    collapsed: true,
    secondary: false
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Variante secondaire sans icône et sans bordures, utilisée pour des informations moins importantes."
      }
    }
  },
  args: {
    title: "Réservé au public éligible au contrat PEC",
    collapsed: true,
    secondary: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderWithoutDropdown,
  parameters: {
    docs: {
      description: {
        story: "Sans dropdown avec le contenu toujours visible."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Secondary","WithoutDropdown"];export{e as Default,n as Secondary,s as WithoutDropdown,f as __namedExportsOrder,m as default};
