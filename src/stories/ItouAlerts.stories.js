export default {
  title: "Itou-Componnents/Alerts",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

      // Initialiser les alertes dismissible-once après le rendu
      setTimeout(() => {
        document.querySelectorAll(".alert-dismissible-once:not([data-it-initialized])").forEach((alert) => {
          const id = alert.getAttribute("id");
          const btn = alert.querySelector(".btn-close");

          alert.setAttribute("data-it-initialized", "true");

          if (localStorage.getItem(id) === null) {
            alert.classList.remove("d-none");
          }

          btn?.addEventListener("click", () => {
            localStorage.setItem(id, "seen");
            alert.classList.add("d-none");
          });
        });
      }, 0);

      return html;
    },
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.alert\` est utilisé pour mettre en avant une information ou fournir des messages de retour contextuels pour les actions utilisateur.

### Anatomie
1. **Bordure** - Indicateur visuel de la variante
2. **Icône** (optionnel) - Renforce le message
3. **Titre** - Message principal
4. **Description** (optionnel) - Détails supplémentaires
5. **Bouton** (optionnel) - Action associée
6. **Fermer** (optionnel) - Permet de masquer l'alerte

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.alert\` | Conteneur principal |
| \`.alert-info\` | Variante informative (bleue) |
| \`.alert-success\` | Variante succès (verte) |
| \`.alert-warning\` | Variante avertissement (orange) |
| \`.alert-danger\` | Variante erreur (rouge) |
| \`.alert-important\` | Variante importante (violette) |
| \`.alert-dismissible\` | Permet de fermer l'alerte |
| \`.alert-dismissible-once\` | Fermeture mémorisée dans localStorage |

### Accessibilité
- Utiliser \`role="status"\` pour les messages informatifs
- Utiliser \`role="alert"\` pour les erreurs critiques

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank" rel="noopener noreferrer">Alerts</a>
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "danger", "important"],
      description: "Variante de couleur de l'alerte",
    },
    role: {
      control: { type: "select" },
      options: ["status", "alert"],
      description: "Rôle ARIA : 'status' pour info, 'alert' pour erreurs critiques",
    },
    dismissible: {
      control: "boolean",
      description: "Affiche un bouton de fermeture",
    },
    withIcon: {
      control: "boolean",
      description: "Affiche une icône correspondant à la variante",
    },
    withTitle: {
      control: "boolean",
      description: "Affiche un titre en plus du message",
    },
    withAction: {
      control: "boolean",
      description: "Affiche un bouton d'action",
    },
    title: {
      control: "text",
      description: "Titre de l'alerte",
    },
    message: {
      control: "text",
      description: "Message de l'alerte",
    },
  },
};

const iconByVariant = {
  info: "ri-information-line",
  success: "ri-checkbox-circle-line",
  warning: "ri-error-warning-line",
  danger: "ri-close-circle-line",
  important: "ri-alert-line",
};

const textColorByVariant = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  important: "text-important",
};

const render = ({ variant, role, dismissible, withIcon, withTitle, withAction, title, message }) => {
  const dismissibleClass = dismissible ? " alert-dismissible fade show" : "";
  const closeButton = dismissible
    ? `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>`
    : "";

  // Alerte simple sans icône ni action
  if (!withIcon && !withAction) {
    return `
<div class="alert alert-${variant}${dismissibleClass}" role="${role}">
  ${closeButton}
  ${withTitle ? `<p class="mb-2"><strong>${title}</strong></p> : ` : ""}<p class="mb-0">${message}</p>
</div>`;
  }

  // Alerte avec icône et/ou action
  const iconBlock = withIcon
    ? `
        <div class="col-auto pe-0">
          <i class="${iconByVariant[variant]} ri-xl ${textColorByVariant[variant]}" aria-hidden="true"></i>
        </div>`
    : "";

  const actionBlock = withAction
    ? `
        <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-sm btn-primary">Action</button>
        </div>`
    : "";

  const titleBlock = withTitle ? `<p class="mb-2"><strong>${title}</strong></p>` : "";

  return `
<div class="alert alert-${variant}${dismissibleClass}" role="${role}">
  ${closeButton}
  <div class="row">
    ${iconBlock}
    <div class="col">
      ${titleBlock}
      <p class="mb-0">${message}</p>
    </div>
    ${actionBlock}
  </div>
</div>`;
};

export const Simple = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte simple avec un message texte uniquement.",
      },
    },
  },
  args: {
    variant: "info",
    role: "status",
    dismissible: false,
    withIcon: false,
    withTitle: false,
    withAction: false,
    title: "Titre de l'alerte",
    message: "Ceci est un message d'information simple.",
  },
};

export const WithIcon = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec une icône pour renforcer visuellement le type de message.",
      },
    },
  },
  args: {
    variant: "info",
    role: "status",
    dismissible: false,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Information",
    message: "Voici un message informatif avec une icône pour attirer l'attention.",
  },
};

export const WithAction = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir.",
      },
    },
  },
  args: {
    variant: "important",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: true,
    title: "Nouvelle fonctionnalité",
    message: "Une nouvelle fonctionnalité est disponible. Découvrez-la maintenant car elle trop top de chez top !",
  },
};

export const Success = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte de succès pour confirmer une action réussie.",
      },
    },
  },
  args: {
    variant: "success",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Succès",
    message: "Votre action a été effectuée avec succès.",
  },
};

export const Danger = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte d'erreur pour signaler un problème critique. Utiliser `role=\"alert\"` pour l'accessibilité.",
      },
    },
  },
  args: {
    variant: "danger",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Erreur",
    message: "Une erreur s'est produite. Veuillez réessayer ultérieurement.",
  },
};

export const Dismissible = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer.",
      },
    },
  },
  args: {
    variant: "warning",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Attention",
    message: "Cette alerte peut être fermée en cliquant sur le bouton ×.",
  },
};

// Render spécifique pour DismissibleOnce
const renderDismissibleOnce = ({ variant, title, message }) => {
  const alertId = "alertDismissibleOnceDemo";

  return `
<div class="alert alert-${variant} alert-dismissible-once d-none" role="status" id="${alertId}">
  <button type="button" class="btn-close" aria-label="Fermer"></button>
  <p class="mb-2"><strong>${title}</strong></p>
  <p class="mb-0">${message}</p>
</div>
<hr />
<button type="button" class="btn btn-ico btn-link btn-sm" onclick="localStorage.removeItem('${alertId}'); location.reload();">
  <i class="ri-refresh-line" aria-hidden="true"></i>
  <span>Réinitialiser la démo</span>
</button>
<p class="text-muted small mt-3">
  <em>Note : Cette alerte utilise la classe <code>.alert-dismissible-once</code> avec un <code>id</code> unique.
  Une fois fermée, elle ne réapparaîtra plus grâce au <code>localStorage</code>.</em>
</p>`;
};

export const DismissibleOnce = {
  render: renderDismissibleOnce,
  parameters: {
    docs: {
      description: {
        story: `
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \`localStorage\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

#### Implémentation
- Ajouter la classe \`.alert-dismissible-once\` et \`.d-none\`
- Ajouter un \`id\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
`,
      },
    },
  },
  args: {
    variant: "info",
    title: "Information importante",
    message: "Ce message ne s'affichera qu'une seule fois. Une fois fermé, il ne réapparaîtra plus.",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "danger", "important"],
    },
    title: { control: "text" },
    message: { control: "text" },
  },
};
