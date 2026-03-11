const t={title:"Components/BadgesGroup",decorators:[a=>`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La classe \`.badge-group\` espace automatiquement les badges horizontalement et verticalement.
Utile pour afficher plusieurs badges côte à côte avec un espacement cohérent.

### Anatomie
1. **Conteneur** - Bloc parent \`.badge-group\`
2. **Badge** - Élément enfant \`.badge\` (souvent avec \`.rounded-pill\`)
3. **Contenu** - Libellé textuel et éventuellement une icône décorative

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.badge-group\` | Gère l'espacement des badges dans le groupe |
| \`.badge\` | Élément badge de base |
| \`.badge-sm\` | Taille compacte du badge |
| \`.rounded-pill\` | Forme arrondie du badge |

### Accessibilité
- Les badges doivent rester informatifs, pas interactifs.
- Si une icône est décorative, ajouter \`aria-hidden="true"\`.
- Vérifier le contraste texte/fond pour chaque variante utilisée.
`}}}},s=()=>`
<div class="badge-group">
  <span class="badge badge-sm rounded-pill bg-info text-white">Badge 1</span>
  <span class="badge badge-sm rounded-pill bg-success text-white">Badge 2</span>
  <span class="badge badge-sm rounded-pill bg-warning text-white">Badge 3</span>
  <span class="badge badge-sm rounded-pill bg-danger text-white">Badge 4</span>
  <span class="badge badge-sm rounded-pill bg-primary text-white">Badge 5</span>
  <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Badge 6</span>
</div>`,e={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {}
    }
  }
}`,...e.parameters?.docs?.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,t as default};
