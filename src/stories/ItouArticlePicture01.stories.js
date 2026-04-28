const renderPictureBlock = ({ modifier = "" }) => `
<section class="s-article-picture-01 ${modifier}">
  <div class="s-article-picture-01__container container container-max-lg">
    <div class="s-article-picture-01__row row">
      <div class="s-article-picture-01__col s-article-picture-01__col--picture col-12 col-lg-6 d-flex align-items-center px-lg-4">
        <picture>
          <a href="#" rel="noopener" target="_blank">
            <img src="https://placehold.co/800x800" class="img-fluid" alt="Illustration de presentation du service">
          </a>
        </picture>
      </div>
      <div class="s-article-picture-01__col s-article-picture-01__col--article col-12 col-lg-6 d-flex align-items-center">
        <article>
          <h3 class="s-article-picture-01__col--article__title h1">Article + Picture 01</h3>
          <ol>
            <li>
              <ul>
                <li>item de liste</li>
                <li>item de liste</li>
                <li>item de liste</li>
                <li>item de liste</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>item de liste</li>
                <li>item de liste</li>
                <li>item de liste</li>
                <li>item de liste</li>
              </ul>
            </li>
          </ol>
          <ul>
            <li>item de liste</li>
            <li>item de liste</li>
            <li>item de liste</li>
            <li>item de liste</li>
          </ul>
          <p class="s-article-picture-01__col--article__cta">
            <a href="#" rel="noopener" target="_blank" class="btn btn-primary btn-ico">
              <span>Contactez-nous</span>
              <i class="ri-mail-send-line ri-lg" aria-hidden="true"></i>
            </a>
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
`;

const renderFigureBlock = ({ modifier = "" }) => `
<section class="s-article-picture-01 ${modifier}">
  <div class="s-article-picture-01__container container container-max-lg">
    <div class="s-article-picture-01__row row">
      <div class="s-article-picture-01__col s-article-picture-01__col--figure d-none d-lg-inline-flex col-lg-5 d-lg-flex align-items-center px-lg-4">
        <figure>
          <div>
            <div>
              <span>
                <strong>37 189</strong>
                recrutements
              </span>
            </div>
            <div>
              <span>
                <strong>4 030</strong>
                structures d'insertion
              </span>
            </div>
          </div>
          <img src="https://placehold.co/800x800" class="img-fluid" alt="Illustration avec indicateurs d'impact">
        </figure>
      </div>
      <div class="s-article-picture-01__col s-article-picture-01__col--article col-12 col-lg-7 d-flex align-items-center">
        <article>
          <h3 class="s-article-picture-01__col--article__title h1-hero"><strong>Un exemple</strong></h3>
          <figure class="d-block d-lg-none">
            <div>
              <div>
                <span>
                  <strong>37 189</strong>
                  recrutements
                </span>
              </div>
              <div>
                <span>
                  <strong>4 030</strong>
                  structures d'insertion
                </span>
              </div>
            </div>
            <img src="https://placehold.co/800x800" class="img-fluid" alt="Illustration mobile avec indicateurs d'impact">
          </figure>
          <p>Les emplois de l'inclusion est un service numerique de delivrance des PASS IAE et de mise en relation d'employeurs solidaires avec des candidats eloignes de l'emploi par le biais de tiers ou en autoprescription.</p>
          <p class="s-article-picture-01__col--article__cta">
            <a href="#" rel="noopener" target="_blank" class="btn btn-primary btn-ico">
              <span>Accéder aux emplois</span>
              <i class="ri-arrow-right-line ri-lg" aria-hidden="true"></i>
            </a>
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
`;

export default {
  title: "Sections/ArticlePicture01",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La \`<section>\` \`.s-article-picture-01\` met en forme un contenu editorial en deux colonnes, avec une zone media (\`.s-article-picture-01__col--picture\` ou \`.s-article-picture-01__col--figure\`) et une zone article.

### Variations
1. **Default** : structure standard.
2. **Modifieur** \`.s-article-picture-01--ltr\` : inverse l'ordre visuel des colonnes à partir du breakpoint \`lg\`.

### Anatomie
1. **Section** - \`.s-article-picture-01\`
2. **Container** - \`.s-article-picture-01__container\`
3. **Rangee** - \`.s-article-picture-01__row\`
4. **Colonne media** - \`.s-article-picture-01__col--picture\` ou \`.s-article-picture-01__col--figure\`
5. **Colonne article** - \`.s-article-picture-01__col--article\`
6. **CTA** - \`.s-article-picture-01__col--article__cta\`

### Accessibilité
- Renseigner un texte alternatif pertinent pour les images informatives.
- Conserver un ordre de titres coherent selon le niveau de page.
- Marquer les icônes decoratives avec \`aria-hidden="true"\`.
`,
      },
    },
  },
};

export const Default = {
  render: () => `
    <div class="vstack gap-5">
      ${renderPictureBlock({})}
      ${renderFigureBlock({})}
    </div>
  `,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple par défaut.",
      },
    },
  },
};

export const LTR = {
  render: () => `
    <div class="vstack gap-5">
      ${renderPictureBlock({ modifier: "s-article-picture-01--ltr" })}
      ${renderFigureBlock({ modifier: "s-article-picture-01--ltr" })}
    </div>
  `,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Meme contenu avec le modifieur `--ltr`.",
      },
    },
  },
};
