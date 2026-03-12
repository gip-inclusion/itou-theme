export default {
  title: "Components/Horizontal Rules",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant HTML \`<hr>\` permet de séparer visuellement deux blocs de contenu.

Dans le thème Itou, la règle horizontale repose sur l'élément natif \`<hr>\` et sur les utilitaires d'espacement Bootstrap pour ajuster ses marges verticales.
Une variante permet également d'afficher un mot ou un court libellé au centre avec l'attribut \`data-it-text\`.

### Anatomie
1. **Ligne** - Élément natif \`<hr>\`
2. **Espacement** - Géré avec les utilitaires de marge, par exemple \`.my-3\` ou \`.my-5\`
3. **Texte central** (optionnel) - Injecté via l'attribut \`data-it-text\`

### Classes et attributs utiles
| Élément | Description |
|--------|-------------|
| \`<hr>\` | Séparateur horizontal natif |
| \`.my-3\` | Espacement vertical standard |
| \`.my-5\` | Espacement vertical renforcé |
| \`data-it-text\` | Affiche un mot ou une expression courte au centre |

### Bonnes pratiques
- Utiliser \`<hr>\` pour marquer une séparation thématique entre blocs de contenu.
- Utiliser un texte central uniquement si cela aide réellement à comprendre la structure, par exemple “ou”.
- Garder un libellé très court dans \`data-it-text\`.
`,
      },
    },
  },
};

const renderDefault = () => `
  <p class="mb-0">Avant le &lt;hr&gt; standard</p>
  <hr>
  <p class="mb-0">Après le &lt;hr&gt; standard</p>
`;

const renderCustomMargin = () => `
  <p class="mb-0">Avant le &lt;hr&gt; avec marges augmentées</p>
  <hr class="my-5">
  <p class="mb-0">Après le &lt;hr&gt; avec marges augmentées</p>
`;

const renderWithText = () => `
  <p class="mb-0 text-center"><strong>Faire ceci</strong></p>
  <hr class="my-5" data-it-text="ou">
  <p class="mb-0 text-center"><strong>Faire cela</strong></p>
`;

export const Default = {
  render: renderDefault,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "La règle horizontale standard.",
      },
    },
  },
};

export const CustomMargin = {
  render: renderCustomMargin,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "la règle horizontale avec marges personnalisées.",
      },
    },
  },
};

export const WithText = {
  render: renderWithText,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "la règle horizontale en variante avec texte central.",
      },
    },
  },
};
