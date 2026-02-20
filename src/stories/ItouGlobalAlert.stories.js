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
    date: {
      control: "text",
      description: "Date de l'événement ou de l'annonce",
    },
    message: {
      control: "text",
      description: "Message de l'alerte",
    },
    linkText: {
      control: "text",
      description: "Texte du lien d'action",
    },
    linkUrl: {
      control: "text",
      description: "URL du lien d'action",
    },
    dismissible: {
      control: "boolean",
      description: "Affiche un bouton de fermeture",
    },
  },
};

const render = ({ variant, date, message, linkText, linkUrl, dismissible }) => {
  const dismissibleClass = dismissible ? " alert-dismissible fade show" : "";
  const closeButton = dismissible ? `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>` : "";

  const linkBlock = linkText && linkUrl ? ` <a href="${linkUrl}" class="has-external-link">${linkText}</a>` : "";

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
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true,
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
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true,
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
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true,
  },
};

// Render spécifique pour la variante procédure en cours
const renderProcedure = ({ title, exitLabel, exitUrl }) => {
  return `
<div class="global-messages-container">
  <div class="alert alert-primary fade show" role="status">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <p class="mb-0 text-start">
        <i class="ri-arrow-right-line fw-bold pe-2" aria-hidden="true"></i>
        <strong>${title}</strong>
      </p>
      <a href="${exitUrl}" class="btn-link-white btn-ico align-items-center" aria-label="${exitLabel}">
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
    title: "Vous postulez actuellement pour Machin",
    exitLabel: "Quitter",
    exitUrl: "#",
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
    exitUrl: {
      control: "text",
      description: "URL de sortie de la procédure",
    },
  },
};
