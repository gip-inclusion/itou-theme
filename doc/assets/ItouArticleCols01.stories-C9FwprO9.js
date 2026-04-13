const i=()=>`
<section class="s-articles-cols-01">
  <div class="s-articles-cols-01__container container">
    <div class="s-articles-cols-01__row row">
      <div class="s-articles-cols-01__col s-articles-cols-01__col--title col-12">
        <h3 class="h1"><strong>Les acteurs de l'inclusion dans l'emploi</strong></h3>
      </div>
    </div>

    <div class="s-articles-cols-01__row row">
      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-6">
        <article>
          <h3 class="h2"><strong>Les reseaux de l'IAE</strong></h3>
          <p>Les reseaux de l'Insertion par l'Activite Economique sont des unions de structures qui defendent les interets de leurs adherents et qui les accompagnent sur plusieurs missions :</p>
          <ul>
            <li>L'animation du reseau de l'Insertion par l'Activite Economique</li>
            <li>Mise en valeur des Structures de l'Insertion par l'Activite Economique et promotion des valeurs de l'Economie Sociale et Solidaire.</li>
            <li>Intermediation avec les acheteurs et articulation avec les facilitateurs</li>
            <li>Creation de groupement de prestataires (co-traitance)</li>
          </ul>
          <p>Chaque reseau a ses propres specificites mais se rejoint autour d'ambitions communes :</p>
          <ul>
            <li>Valoriser les initiatives existantes</li>
            <li>Capitaliser les savoir-faire des adherents, partenaires et reseaux</li>
            <li>Respecter les valeurs de l'Economie Sociale et Solidaire en placant les hommes et les femmes au coeur de l'economie.</li>
          </ul>
        </article>
      </div>

      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-6">
        <article>
          <h3 class="h2"><strong>Les facilitateurs</strong></h3>
          <p>Le facilitateur offre un appui pour mettre en oeuvre des clauses sociales dans la commande publique. Cette fonction est exercee par plus de 300 professionnels.</p>
          <p>
            <a href="#" target="_blank" rel="noopener" class="text-decoration-none">
              <strong>Acceder a une documentation sur les facilitateurs</strong>
              <i class="ri-arrow-right-up-line fw-bold" aria-hidden="true"></i>
            </a>
          </p>
        </article>
      </div>
    </div>

    <div class="s-articles-cols-01__row row">
      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-3">
        <article>
          <h3 class="h2"><strong>Ateliers et chantiers d'insertion (ACI)</strong></h3>
          <p>Les ateliers et chantiers d'insertion proposent un accompagnement et une activite professionnelle a des personnes en parcours d'insertion.</p>
          <p><strong>Source Avise</strong></p>
        </article>
      </div>
      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-3">
        <article>
          <h3 class="h2"><strong>Entreprises d'insertion (EI)</strong></h3>
          <p>Les entreprises d'insertion combinent activite economique et accompagnement social pour faciliter le retour a l'emploi durable.</p>
          <p><strong>Source Avise</strong></p>
        </article>
      </div>
      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-3">
        <article>
          <h3 class="h2"><strong>Associations intermediaires (AI)</strong></h3>
          <p>Les AI mettent des salaries a disposition de particuliers, collectivites ou entreprises, avec un suivi socio-professionnel.</p>
          <p><strong>Source Avise</strong></p>
        </article>
      </div>
      <div class="s-articles-cols-01__col s-articles-cols-01__col--article col-12 col-lg-3">
        <article>
          <h5 class="h3"><strong>Entreprises de travail temporaire d'insertion (ETTI)</strong></h5>
          <p>Les ETTI proposent des missions d'interim accompagnees pour lever progressivement les freins a l'emploi.</p>
          <p><strong>Source Avise</strong></p>
        </article>
      </div>
    </div>
  </div>
</section>
`,r={title:"Sections/ArticleCols01",decorators:[s=>`<div style="max-width: 1200px; margin: 0 auto;">${s()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La section \`.s-articles-cols-01\` est utile a la mise en forme multicolonne d'articles au contenu different.

### Variations
1. **Default** : section multicolonne standard.

### Anatomie
1. **Section** - \`.s-articles-cols-01\`
2. **Container** - \`.s-articles-cols-01__container\`
3. **Rangees** - \`.s-articles-cols-01__row\`
4. **Colonne titre** - \`.s-articles-cols-01__col--title\`
5. **Colonne article** - \`.s-articles-cols-01__col--article\`

### Accessibilite
- Conserver une hierarchie de titres coherente selon le contexte de page.
- Fournir des libelles de liens explicites (eviter les liens generiques).
- Marquer les icones decoratives avec \`aria-hidden="true"\`.
`}}}},e={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version standard de la section multicolonne."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderArticleCols01,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version standard de la section multicolonne."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const t=["Default"];export{e as Default,t as __namedExportsOrder,r as default};
