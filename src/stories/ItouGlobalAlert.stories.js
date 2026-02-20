export default {
  title: "Itou-Componnents/Global Alert",
  tags: ["autodocs"],
  parameters: {
    layout: "fullwidth",
    docs: {
      description: {
        component: `
L'**alerte globale** est une alerte en haut de page, placée directement à la racine du \`<body>\` ou dans le container \`<div class="global-messages-container">\`.

Elle affiche une information concernant **l'ensemble du site** et pas seulement une page ou un formulaire.

### Recommandations
- Essayer de toujours mettre le texte sur **une seule ligne**
- Utiliser pour les annonces importantes, maintenances, événements

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.alert\` | Conteneur principal |
| \`.alert-danger\` | Alerte critique (rouge) |
| \`.alert-warning\` | Alerte avertissement (orange) |
| \`.alert-info\` | Alerte informative (bleue) |
| \`.alert-primary\` | Alerte procédure en cours (violet) |
| \`.alert-dismissible\` | Permet de fermer l'alerte |
| \`.has-external-link\` | Style pour les liens externes |

### Accessibilité
- Utiliser \`role="status"\` pour les annonces informatives
- Utiliser \`role="alert"\` pour les messages critiques
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["danger", "warning", "info"],
      description: "Variante de couleur de l'alerte",
    },
    // date supprimé, la date est désormais en dur dans le render
    // message et linkText supprimés, ils sont désormais en dur dans le render
    dismissible: {
      control: "boolean",
      description: "Affiche un bouton de fermeture",
    },
  },
};

const render = ({ variant, dismissible }) => {
  const dismissibleClass = dismissible ? " alert-dismissible fade show" : "";
  const closeButton = dismissible ? `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>` : "";
  const date = "Jeudi 01 février 2024";
  const message = "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.";
  const linkText = "S'inscrire";
  const linkBlock = linkText ? ` <a href="#" class="has-external-link">${linkText}</a>` : "";
  return `
<div class="global-messages-container">
  <div class="alert alert-${variant}${dismissibleClass}" role="status">
    ${closeButton}
    <p class="mb-0"><strong>${date}</strong> : ${message}${linkBlock}</p>
  </div>
</div>`;
};

export const Danger = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale critique pour les annonces urgentes ou les maintenances.",
      },
    },
  },
  args: {
    variant: "danger",
    dismissible: true,
    // message, linkText et date supprimés
  },
};

export const Warning = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale d'avertissement pour les informations importantes.",
      },
    },
  },
  args: {
    variant: "warning",
    dismissible: true,
    // message, linkText et date supprimés
  },
};

export const Info = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale informative pour les annonces générales.",
      },
    },
  },
  args: {
    variant: "info",
    dismissible: true,
    // message, linkText et date supprimés
  },
};

// Render spécifique pour la variante procédure en cours
const renderProcedure = ({ title, exitLabel }) => {
  return `
<div class="global-messages-container">
  <div class="alert alert-primary fade show" role="status">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <p class="mb-0 text-start">
        <i class="ri-arrow-right-line fw-bold pe-2" aria-hidden="true"></i>
        <strong>${title}</strong>
      </p>
      <a href="#" class="btn-link-white btn-ico align-items-center" aria-label="${exitLabel}">
        <i class="ri-close-line ri-xl fw-medium me-1" aria-hidden="true"></i>
        <span class="fs-sm fw-medium">${exitLabel}</span>
      </a>
    </div>
  </div>
</div>`;
};

export const ProcedureEnCours = {
  render: renderProcedure,
  parameters: {
    docs: {
      description: {
        story: `
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \`.alert-primary\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
`,
      },
    },
  },
  args: {
    title: "Vous postulez actuellement pour Monsieur Machin",
    exitLabel: "Quitter",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Titre de la procédure en cours",
    },
    exitLabel: {
      control: "text",
      description: "Libellé du bouton de sortie",
    },
  },
};
