export default {
  title: "Forms/ButtonsGroup",
  decorators: [(Story) => {
    const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

    // Initialiser les tooltips
    setTimeout(() => {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 0);

    return html;
  }],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Le composant \`.btn-group\` permet de regrouper une série de boutons sur une seule ligne.

### Anatomie
1. **Conteneur de groupe** - Élément parent \`.btn-group\`
2. **Actions** - Boutons ou liens adjacents stylés en groupe
3. **Taille** (optionnelle) - Modificateur \`.btn-group-sm\` ou \`.btn-group-lg\`
4. **Variante action** (optionnelle) - \`.btn-group-action\` pour les actions rapides

### Types
Selon l'usage, les associations recommandées sont :
- **Primary outline + Primary** : par exemple \`Modifier / Confirmer\`
- **Link + Primary** : par exemple \`Retour / Suivant\`
- **Link + Danger** : par exemple \`Retour / Supprimer\`

### Tailles
Les tailles suivent les mêmes règles que les boutons :
- \`.btn-group-lg\`
- taille par défaut
- \`.btn-group-sm\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.btn-group\` | Conteneur principal du groupe de boutons |
| \`.btn-group-sm\` | Variante de petite taille |
| \`.btn-group-lg\` | Variante de grande taille |
| \`.btn-group-action\` | Variante Itou pour actions rapides (souvent icône seule) |
| \`.btn-ico-only\` | Bouton icône seule utilisé dans les groupes d'actions |

### Accessibilité
- Ajouter un \`role="group"\` sur le conteneur.
- Fournir un \`aria-label\` explicite pour décrire le groupe.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/button-group/" target="_blank" rel="noopener noreferrer" class="has-external-link">Button group</a>
`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "Taille du groupe de boutons : standard, petit (`btn-group-sm`) ou grand (`btn-group-lg`)",
    },
  },
};

const render = ({ size }) => {
  const sizeClass = size === "default" ? "" : `btn-group-${size}`;
  return `
  <div class="btn-group ${sizeClass}">
    <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
    <a href="#" class="btn btn-primary">Link</a>
    <a href="#" class="btn btn-secondary">Link</a>
  </div>
  <hr />
  <div class="btn-group ${sizeClass}" role="group" aria-label="Actions rapides sur le candidat">
    <a class="btn btn-link btn-ico-only" href="" data-bs-toggle="tooltip" data-bs-title="Postuler pour ce candidat">
      <i class="ri-draft-line" aria-label="Postuler pour BARACUS Boris"></i>
    </a>
    <button class="btn btn-link btn-ico-only" type="button" id="dropdown_3_action_menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Plus d'actions">
      <i class="ri-more-2-fill" aria-hidden="true"></i>
    </button>
    <div class="dropdown-menu" aria-labeledby="dropdown_3_action_menu">
      <a href="" class="dropdown-item">
        Valider son éligibilité IAE
      </a>
      <a href="" class="dropdown-item">
        Invalider son éligibilité IAE
      </a>
    </div>
  </div>
  `;
};

export const Default = {
  render: render,
  parameters: {
    docs: {
      description: {
        story: "Démonstration des tailles `.btn-group-lg`, défaut et `.btn-group-sm` et un exemple de `.btn-group` présent dans les tablaux de résultats.",
      },
    },
  },
  args: {
    size: "sm",
  },
};

const renderActionGroup = ({ size }) => {
    const sizeClass = size === "default" ? "" : `btn-group-${size}`;
  return `
  <div class="btn-group btn-group-action ${sizeClass}" role="group" aria-label="Actions rapides">
    <button type="button" class="btn btn-success btn-ico-only" aria-label="Voir les détails">
      <i class="ri-eye-2-line ri-lg fw-normal" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-warning btn-ico-only" aria-label="Modifier l'élément">
      <i class="ri-edit-line ri-lg fw-normal" aria-hidden="true"></i>
    </button>
    <button type="button" class="btn btn-danger btn-ico-only" aria-label="Supprimer l'élément">
      <i class="ri-delete-bin-line ri-lg fw-normal" aria-hidden="true"></i>
    </button>
  </div>
  `;
};

export const ActionGroup = {
  render: renderActionGroup,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variation Itou avec `.btn-group-action` pour des actions rapides icône seule.",
      },
    },
  },
  args: {
    size: "sm",
  },
};
