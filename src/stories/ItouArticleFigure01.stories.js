const renderArticleFigure01 = ({ modifier = "", hasCta = false }) => `
<section class="s-article-figure-01 ${modifier}">
  <div class="s-article-figure-01__container container container-max-lg">
    <div class="s-article-figure-01__row row">
      <div class="s-article-figure-01__col s-article-figure-01__col--figure col-12 col-md-3 col-lg-4 d-flex align-items-center justify-content-center">
        <figure class="w-50 w-md-100">
          <img src="https://placehold.co/800x800" class="img-fluid img-fitcover" alt="Illustration decorative de la section">
        </figure>
      </div>
      <div class="s-article-figure-01__col s-article-figure-01__col--article col-12 col-md-9 col-lg-8 d-flex align-items-center">
        <article>
          <h3 class="h1 text-tertiary">Article + Figure 01</h3>
          <p class="fs-lg">Ce service facilite la mise en relation des personnes les plus eloignees de l'emploi avec les employeurs solidaires (SIAE, GEIQ, EA et EATT) et les accompagnants (orienteurs et prescripteurs habilites).</p>
          <p>Il offre aux utilisateurs un outil numerique mutualise pour simplifier les procedures, fluidifier les parcours d'insertion entre professionnels et renforcer la qualite de l'accompagnement des personnes.</p>
          ${hasCta ? '<a href="#" class="btn btn-outline-primary w-100 w-md-auto">En savoir plus</a>' : ""}
        </article>
      </div>
    </div>
  </div>
</section>
`;

export default {
  title: "Sections/ArticleFigure01",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La \`<section>\` \`.s-article-figure-01\` met en page un bloc editorial compose d'une illustration et d'un article associe.

### Variations
1. **Par défaut** : image à gauche, texte à droite.
2. **Modifieur** \`.s-article-figure-01--ltr\` : inverse visuellement les colonnes à partir du breakpoint \`md\`.

### Anatomie
1. **Section** - \`.s-article-figure-01\`
2. **Container** - \`.s-article-figure-01__container\`
3. **Figure** - \`.s-article-figure-01__col--figure\`
4. **Article** - \`.s-article-figure-01__col--article\`

### Accessibilité
- Ajouter un texte alternatif pertinent si l'image est informative.
- Conserver une hiérarchie de titres cohérente selon le contexte de page.
- Verifier l'ordre de lecture et la navigation clavier sur mobile et desktop.
`,
      },
    },
  },
};

export const Default = {
  render: () => renderArticleFigure01({ hasCta: false }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version par défaut sans CTA, conforme à la structure de base de la section.",
      },
    },
  },
};

export const LTRWithCta = {
  render: () => renderArticleFigure01({ modifier: "s-article-figure-01--ltr", hasCta: true }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante avec modifieur `--ltr`.",
      },
    },
  },
};
