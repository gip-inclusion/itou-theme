const s={title:"Sections/Title01",decorators:[t=>`<div style="max-width: 1200px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLa `<section>` `.s-title-01` structure un en-tête de titre principal de page, avec un sous-titre et un paragraphe introductif.\n\n### Variations\n1. **Default** : version standard de la `<section>`.\n\n### Anatomie\n1. **Section** - `.s-title-01`\n2. **Container** - `.s-title-01__container`\n3. **Rangee** - `.s-title-01__row`\n4. **Colonne contenu** - `.s-title-01__col`\n5. **Contenu editorial** - `h1`, `h2`, `p`\n\n### Accessibilité\n- Conserver une hiérarchie de titres cohérente dans la page (`<h1>` puis `<h2>`).\n- Veiller a la clarté sémantique du texte d'introduction.\n- Garder un ordre de lecture lineaire sur tous les breakpoints.\n"}}}},i=()=>`
<section class="s-title-01">
  <div class="s-title-01__container container">
    <div class="s-title-01__row row">
      <div class="s-title-01__col col-12">
        <h1>Title 01</h1>
        <h2>Un exemple avec des niveaux de titres</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
      </div>
    </div>
  </div>
</section>
`,e={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version de base."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        story: "Version de base."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,s as default};
