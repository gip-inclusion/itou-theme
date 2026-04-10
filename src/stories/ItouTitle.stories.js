export default {
  title: "Components/Title",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.c-title\` structure la zone de titre principale d'une page.

Il est concu pour etre utilise dans \`.s-title-02\`.

### Contraintes du composant slippers
1. \`.c-title__main\` est obligatoire et doit contenir un \`<h1>\` (eventuellement badge et paragraphe de contexte).
2. \`.c-title__cta\` est optionnel et devrait contenir 1 a 2 actions.
3. \`.c-title__secondary\` est optionnel et devrait contenir des \`<h2>/<h3>\` et/ou paragraphes.

### Anatomie
1. **Bloc principal** - \`.c-title__main\`
2. **Bloc actions** (optionnel) - \`.c-title__cta\`
3. **Bloc secondaire** (optionnel) - \`.c-title__secondary\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-title\` | Conteneur global |
| \`.c-title__main\` | Titre principal (obligatoire) |
| \`.c-title__cta\` | Zone d'actions (optionnelle) |
| \`.c-title__secondary\` | Zone de contexte/intro (optionnelle) |

### Accessibilite
- Respecter la hierarchie des titres (\`h1\` puis \`h2\`/\`h3\`).
- Donner un \`aria-label\` explicite a \`.c-title__cta\` quand des actions sont presentes.
- Marquer les icones decoratives avec \`aria-hidden="true"\`.
`,
      },
    },
  },
  argTypes: {
    hasBadge: {
      control: "boolean",
      description: "Affiche un badge de statut dans le titre principal.",
    },
    hasSubtitle: {
      control: "boolean",
      description: "Affiche un paragraphe de contexte sous le H1 dans c-title__main.",
    },
    hasCta: {
      control: "boolean",
      description: "Affiche la zone c-title__cta.",
    },
    ctaCount: {
      control: { type: "select" },
      options: [1, 2],
      description: "Nombre d'actions affichees dans c-title__cta.",
      if: { arg: "hasCta", truthy: true },
    },
    hasSecondary: {
      control: "boolean",
      description: "Affiche la zone c-title__secondary.",
    },
  },
};

const render = ({ hasBadge, hasSubtitle, hasCta, ctaCount, hasSecondary }) => {
  const badge = hasBadge
    ? '<span class="badge rounded-pill badge-base bg-success">Candidature acceptee</span>'
    : "";

  const subtitle = hasSubtitle ? "<p>ETTI - SIRET 500 109 616 00027</p>" : "";

  const cta = hasCta
    ? `
      <div class="c-title__cta" role="group" aria-label="Actions sur les groupes de suivi">
        ${ctaCount === 2
          ? `<a href="#" class="btn btn-lg btn-outline-primary btn-ico">
          <i class="ri-user-unfollow-line fw-medium" aria-hidden="true"></i>
          <span>Action secondaire</span>
        </a>`
          : ""
        }
        <a href="#" class="btn btn-lg btn-primary btn-ico">
          <i class="ri-bear-smile-line fw-medium" aria-hidden="true"></i>
          <span>Action principale</span>
        </a>
      </div>
    `
    : "";

  const secondary = hasSecondary
    ? `
      <div class="c-title__secondary">
        <h2>Un exemple avec des niveaux de titres</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
      </div>
    `
    : "";

  return `
    <div class="c-title">
      <div class="c-title__main">
        <h1>
          Candidature de Gustave de la Loiseau des grosses motos
          ${badge}
        </h1>
        ${subtitle}
      </div>
      ${cta}
      ${secondary}
    </div>
  `;
};

const renderSimple = () => `
  <div class="c-title">
    <div class="c-title__main">
      <h1>Titre de page</h1>
    </div>
    <div class="c-title__secondary">
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    </div>
  </div>
`;

const renderWithCta = () => `
  <div class="c-title">
    <div class="c-title__main">
      <h1 class="m-0">Titre de page</h1>
    </div>
    <div class="c-title__cta" role="group" aria-label="Actions sur les groupes de suivi">
      <a href="#" class="btn btn-lg btn-primary btn-ico">
        <i class="ri-bear-smile-line fw-medium" aria-hidden="true"></i>
        <span>Action principale</span>
      </a>
    </div>
    <div class="c-title__secondary">
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    </div>
  </div>
`;

export const Default = {
  render,
  args: {
    hasBadge: false,
    hasSubtitle: false,
    hasCta: false,
    ctaCount: 1,
    hasSecondary: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Version parametrable du composant `c-title` (badge, paragraphe de contexte, CTA, contenu secondaire).",
      },
    },
  },
};

export const Simple = {
  render: renderSimple,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante simple avec `c-title__main` + `c-title__secondary`, sans actions.",
      },
    },
  },
};

export const WitheCta = {
  render: renderWithCta,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante avec une action principale dans `c-title__cta`, conforme aux exemples de `title-02`.",
      },
    },
  },
};
