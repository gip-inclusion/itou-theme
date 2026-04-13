const t=({modifier:e=""})=>`
<section class="s-article-picture-01 ${e}">
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
`,l=({modifier:e=""})=>`
<section class="s-article-picture-01 ${e}">
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
              <span>Acceder aux emplois</span>
              <i class="ri-arrow-right-line ri-lg" aria-hidden="true"></i>
            </a>
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
`,c={title:"Sections/ArticlePicture01",decorators:[e=>`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLa section `.s-article-picture-01` met en forme un contenu editorial en deux colonnes, avec une zone media (`.s-article-picture-01__col--picture` ou `.s-article-picture-01__col--figure`) et une zone article.\n\n### Variations\n1. **Default** : structure standard.\n2. **Modifieur** `.s-article-picture-01--ltr` : inverse l\'ordre visuel des colonnes a partir du breakpoint `lg`.\n\n### Anatomie\n1. **Section** - `.s-article-picture-01`\n2. **Container** - `.s-article-picture-01__container`\n3. **Rangee** - `.s-article-picture-01__row`\n4. **Colonne media** - `.s-article-picture-01__col--picture` ou `.s-article-picture-01__col--figure`\n5. **Colonne article** - `.s-article-picture-01__col--article`\n6. **CTA** - `.s-article-picture-01__col--article__cta`\n\n### Accessibilite\n- Renseigner un texte alternatif pertinent pour les images informatives.\n- Conserver un ordre de titres coherent selon le niveau de page.\n- Marquer les icones decoratives avec `aria-hidden="true"`.\n'}}}},i={render:()=>`
    <div class="vstack gap-5">
      ${t({})}
      ${l({})}
    </div>
  `,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple par defaut."}}}},r={render:()=>`
    <div class="vstack gap-5">
      ${t({modifier:"s-article-picture-01--ltr"})}
      ${l({modifier:"s-article-picture-01--ltr"})}
    </div>
  `,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Meme contenu avec le modifieur `--ltr`."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="vstack gap-5">
      \${renderPictureBlock({})}
      \${renderFigureBlock({})}
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple par defaut."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="vstack gap-5">
      \${renderPictureBlock({
    modifier: "s-article-picture-01--ltr"
  })}
      \${renderFigureBlock({
    modifier: "s-article-picture-01--ltr"
  })}
    </div>
  \`,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Meme contenu avec le modifieur \`--ltr\`."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const s=["Default","LTR"];export{i as Default,r as LTR,s as __namedExportsOrder,c as default};
