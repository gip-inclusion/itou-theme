const s={title:"Components/BadgesGroup",decorators:[a=>`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLa classe `.badge-group` espace automatiquement les badges horizontalement et verticalement.\nUtile pour afficher plusieurs badges côte à côte avec un espacement cohérent.\n\n### Anatomie\n1. **Conteneur** - Bloc parent `.badge-group`\n2. **Badge** - Élément enfant `.badge` (souvent avec `.rounded-pill`)\n3. **Contenu** - Libellé textuel et éventuellement une icône décorative\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.badge-group` | Gère l\'espacement des badges dans le groupe |\n| `.badge` | Taille héritée du parent |\n| `.badge-base` | Taille fixe standard |\n| `.badge-sm` | Taille fixe petite |\n| `.badge-xs` | Taille fixe extra-petite |\n| `.badge-xl` | Taille fixe extra-large |\n| `.rounded-pill` | Forme arrondie du badge |\n| `.rounded-circle` | Forme rounde du badge |\n\n### Accessibilité\n- Les badges doivent rester informatifs, pas interactifs.\n- Si une icône est décorative, ajouter `aria-hidden="true"`.\n- Vérifier le contraste texte/fond pour chaque variante utilisée.\n'}}}},t=()=>`
<div class="badge-group">
  <span class="badge badge-sm rounded-pill bg-info text-white">Badge 1</span>
  <span class="badge badge-sm rounded-pill bg-success text-white">Badge 2</span>
  <span class="badge badge-sm rounded-pill bg-warning text-white">Badge 3</span>
  <span class="badge badge-sm rounded-pill bg-danger text-white">Badge 4</span>
  <span class="badge badge-sm rounded-pill bg-primary text-white">Badge 5</span>
  <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Badge 6</span>
</div>`,e={render:t,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,s as default};
