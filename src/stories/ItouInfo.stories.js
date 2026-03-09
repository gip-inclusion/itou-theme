export default {
  title: "Components/Info",
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
| \`.c-info--borderless\` | Variante sans bordure et sans icone |

### Accessibilité
- Le bouton \`.c-info__summary\` doit exposer \`aria-expanded\` et \`aria-controls\` si le détail est repliable.
- Les icônes purement décoratives doivent rester masquées aux lecteurs d'écran avec \`aria-hidden="true"\`.
- Le libellé du résumé doit être explicite, surtout lorsque le détail est masqué par défaut.
`,
      },
    },
  },
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "État initial du collapse (true = fermé, false = ouvert)",
    },
    borderless: {
      control: "boolean",
      description: "Variante borderless (sans icône)",
    },
  },
};

const render = ({ collapsed, borderless }) => {
  const infoClass = borderless ? "c-info c-info--borderless" : "c-info";
  const collapseId = borderless ? "collapseInfoDemoBorderless" : "collapseInfoDemo";
  const buttonClass = collapsed ? "c-info__summary collapsed" : "c-info__summary";
  const collapseClass = collapsed ? "c-info__detail collapse" : "c-info__detail collapse show";
  const ariaExpanded = collapsed ? "false" : "true";

  return `
<div class="${infoClass}">
  <button class="${buttonClass}" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${ariaExpanded}" aria-controls="${collapseId}">
    <span>Réservé au public éligible au contrat PEC</span>
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
    collapsed: true,
    borderless: false,
  },
};

export const Borderless = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante sans bordures. Elle doit être utilisée quand le composant est déjà imbriqué dans un `.c-box` afin d'éviter trop de \"box bordurées\" imbriquées",
      },
    },
  },
  args: {
    collapsed: true,
    borderless: true,
  },
};

const renderWithoutCollapse = () => {
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

export const WithoutCollapse = {
  render: renderWithoutCollapse,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Sans collapse avec le contenu toujours visible.",
      },
    },
  },
};
