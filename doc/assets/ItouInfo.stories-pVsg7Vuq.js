const p={title:"Components/Info",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
| \`.c-info--borderless\` | Variante sans bordure et sans icone |
`}}},argTypes:{collapsed:{control:"boolean",description:"État initial du collapse (true = fermé, false = ouvert)"},borderless:{control:"boolean",description:"Variante borderless (sans icône)"}}},a=({collapsed:e,borderless:t})=>{const i=t?"c-info c-info--borderless":"c-info",r=t?"collapseInfoDemoBorderless":"collapseInfoDemo";return`
<div class="${i}">
  <button class="${e?"c-info__summary collapsed":"c-info__summary"}" data-bs-toggle="collapse" data-bs-target="#${r}" aria-expanded="${e?"false":"true"}" aria-controls="${r}">
    <span>Réservé au public éligible au contrat PEC</span>
  </button>
  <div class="${e?"c-info__detail collapse":"c-info__detail collapse show"}" id="${r}">
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
</div>`,n={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Sans collapse avec le contenu toujours visible."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const m=["Default","Borderless","WithoutCollapse"];export{o as Borderless,s as Default,n as WithoutCollapse,m as __namedExportsOrder,p as default};
