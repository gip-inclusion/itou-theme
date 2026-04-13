const s={title:"Sections/Title01",decorators:[t=>`<div style="max-width: 1200px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La section \`.s-title-01\` structure un en-tete de titre principal de page, avec un sous-titre et un paragraphe introductif.

### Variations
1. **Default** : version standard de la section.

### Anatomie
1. **Section** - \`.s-title-01\`
2. **Container** - \`.s-title-01__container\`
3. **Rangee** - \`.s-title-01__row\`
4. **Colonne contenu** - \`.s-title-01__col\`
5. **Contenu editorial** - \`h1\`, \`h2\`, \`p\`

### Accessibilite
- Conserver une hierarchie de titres coherente dans la page (h1 puis h2).
- Veiller a la clarte semantique du texte d'introduction.
- Garder un ordre de lecture lineaire sur tous les breakpoints.
`}}}},i=()=>`
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
