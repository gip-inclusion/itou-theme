const t={title:"Itou-Componnents/BadgesGroup",decorators:[a=>`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La classe \`.badge-group\` espace automatiquement les badges horizontalement et verticalement.
Utile pour afficher plusieurs badges côte à côte avec un espacement cohérent.
`}}}},s=()=>`
<div class="badge-group">
  <span class="badge badge-sm rounded-pill bg-info text-white">Badge 1</span>
  <span class="badge badge-sm rounded-pill bg-success text-white">Badge 2</span>
  <span class="badge badge-sm rounded-pill bg-warning text-white">Badge 3</span>
  <span class="badge badge-sm rounded-pill bg-danger text-white">Badge 4</span>
  <span class="badge badge-sm rounded-pill bg-primary text-white">Badge 5</span>
  <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Badge 6</span>
</div>`,e={render:s};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,t as default};
