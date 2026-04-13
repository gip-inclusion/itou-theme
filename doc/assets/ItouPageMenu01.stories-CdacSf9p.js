const s=()=>`
<section class="s-page-menu-01">
  <div class="s-page-menu-01__container container">
    <div class="s-page-menu-01__row row align-items-center">
      <div class="s-page-menu-01__col s-page-menu-01__col--title col-12 col-lg-5">
        <h1 class="h1-hero"><strong>Les <br class="d-none d-lg-inline">thematiques<br class="d-none d-lg-inline"></strong></h1>
        Un exemple de <code>.s-page-menu-01</code>
      </div>
      <div class="s-page-menu-01__col s-page-menu-01__col--grid col-12 col-lg-7">
        <ul>
          <li><a href="#definition">s-page-menu-01</a><i class="ri-account-circle-line ri-lg ms-1" aria-hidden="true"></i></li>
          <li><a href="#avantages">Les avantages de l'achat inclusif</a></li>
          <li><a href="#faq">Les questions frequentes</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
          <li><a href="#acteurs">Les acteurs de l'inclusion</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
          <li><a href="#structures">Les types de structures</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
          <li><a href="#clauses">Les clauses sociales</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
          <li><a href="#rse">RSE</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
          <li><a href="#agefiph">AGEFIPH</a><i class="ri-account-circle-line ri-xl ms-1" aria-hidden="true"></i></li>
        </ul>
      </div>
    </div>
  </div>
</section>
`,a={title:"Sections/PageMenu01",decorators:[i=>`<div style="max-width: 1200px; margin: 0 auto;">${i()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La section \`.s-page-menu-01\` organise un titre de page et une grille de liens d'ancrage.

### Variations
1. **Default** : version standard.

### Anatomie
1. **Section** - \`.s-page-menu-01\`
2. **Container** - \`.s-page-menu-01__container\`
3. **Colonne titre** - \`.s-page-menu-01__col--title\`
4. **Colonne grille** - \`.s-page-menu-01__col--grid\`
5. **Liste de navigation** - \`ul > li > a\`

### Accessibilite
- Verifier que chaque lien pointe vers un identifiant de section existant.
- Garder des libelles de liens explicites et comprensibles hors contexte.
- Marquer les icones decoratives avec \`aria-hidden="true"\`.
`}}}},e={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version de base."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderPageMenu01,
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
}`,...e.parameters?.docs?.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,a as default};
