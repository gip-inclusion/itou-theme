export default {
  title: "Itou-Componnents/Info",
  decorators: [(Story) => `<div style="max-width: 800px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.c-info\` sert à mettre une information en avant. Il peut être utilisé notamment dans des formulaires ou dans des sections afin d'apporter plus d'informations à l'utilisateur.

### Anatomie
1. **Icône** - Indicateur visuel (automatique via CSS)
2. **Titre** - Information principale
3. **Dropdown** (optionnel) - Permet d'afficher/masquer le détail
4. **Description** (optionnelle) - Contenu détaillé

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-info\` | Conteneur principal |
| \`.c-info__summary\` | Titre/résumé de l'info |
| \`.c-info__detail\` | Contenu détaillé (avec collapse) |
| \`.c-info--secondary\` | Variante sans icône |

### Comportement
- Sans \`data-bs-toggle="collapse"\` : affichage simple
- Avec \`data-bs-toggle="collapse"\` : affichage avec dropdown
`,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Titre de l'info",
    },
    collapsed: {
      control: "boolean",
      description: "État initial du collapse (true = fermé, false = ouvert)",
    },
    secondary: {
      control: "boolean",
      description: "Variante sans icône",
    },
  },
};

const render = ({ title, collapsed, secondary }) => {
  const infoClass = secondary ? "c-info c-info--secondary" : "c-info";
  const collapseId = "collapseInfoDemo";
  const buttonClass = collapsed ? "c-info__summary collapsed" : "c-info__summary";
  const collapseClass = collapsed ? "c-info__detail collapse" : "c-info__detail collapse show";
  const ariaExpanded = collapsed ? "false" : "true";

  return `
<div class="${infoClass}">
  <button class="${buttonClass}" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${ariaExpanded}" aria-controls="${collapseId}">
    <span>${title}</span>
  </button>
  <div class="${collapseClass}" id="${collapseId}">
    <p>Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation.</p>
  </div>
</div>`;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Info simple avec titre uniquement, sans dropdown.",
      },
    },
  },
  args: {
    title: "Réservé au public éligible au contrat PEC",
    collapsed: true,
    secondary: false,
  },
};

export const Secondary = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Variante secondaire sans icône et sans bordures, utilisée pour des informations moins importantes.",
      },
    },
  },
  args: {
    title: "Réservé au public éligible au contrat PEC",
    collapsed: true,
    secondary: true,
  },
};

const renderWithoutDropdown = () => {
  return `
<div class="c-info">
  <button class="c-info__summary">
    <span>Comment gérer mes suspensions ?</span>
  </button>
  <div class="c-info__detail">
    <p>
      Retrouvez toutes les informations sur le fonctionnement des suspensions sur notre documentation :<br>
      <a href="#" class="has-external-link">https://aide.emplois.inclusion.beta.gouv.fr/hc/fr/articles/...</a>
    </p>
  </div>
</div>`;
};

export const WithoutDropdown = {
  render: renderWithoutDropdown,
  parameters: {
    docs: {
      description: {
        story: "Sans dropdown avec le contenu toujours visible.",
      },
    },
  },
};
