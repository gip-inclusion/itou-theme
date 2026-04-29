export default {
  title: "Components/Stepper",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.c-stepper\` est utile pour afficher la progression dans un formulaire multi-etapes.

### Anatomie
1. **Conteneur** - Bloc principal \`.c-stepper\`
2. **Barre de progression** - Composant Bootstrap \`.progress\` + \`.progress-bar\`
3. **Texte d'étape** - Résumé de l'étape courante

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-stepper\` | Conteneur principal |
| \`.progress\` | Barre de progression Bootstrap |
| \`.progress-bar\` | Niveau de progression |

### Accessibilité
Le \`role="progressbar"\` et les attributs \`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\` sont indispensables.
Le texte de l'étape est relié a la barre via \`aria-labelledby\`.
`,
      },
    },
  },
  argTypes: {
    progressPercent: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "Pourcentage de progression libre (0 a 100)",
    },
  },
};

const render = ({ progressPercent }) => {
  return `
<div class="c-stepper">
  <div class="progress progress--emploi">
    <div class="progress-bar" role="progressbar" style="width: ${progressPercent}%" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100" aria-labelledby="informationsEntreprise"></div>
  </div>
  <p id="informationsEntreprise"><strong>Étape 1</strong>/3 : Informations entreprise</p>
</div>`;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Version par défaut avec pourcentage libre configurable via l'arg `progressPercent`.",
      },
    },
  },
  args: {
    progressPercent: 28,
  },
};
