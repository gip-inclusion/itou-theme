function buttonLaunchToast() {
  const liveToastBtn = document.getElementById('liveToastBtn');

  if (!liveToastBtn || liveToastBtn.dataset.itToastBound === 'true') {
    return;
  }

  liveToastBtn.addEventListener('click', function () {
    const toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      return;
    }

    const toastElList = [].slice.call(toastContainer.querySelectorAll('.toast'));
    let toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });
    toastList.forEach(toast => toast.show());
  });

  liveToastBtn.dataset.itToastBound = 'true';
}


export default {
  title: "Components/Toasts",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;
      setTimeout(() => {
        buttonLaunchToast();
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
Le composant \`.toast\` permet d'afficher des notifications legeres et non bloquantes.
Dans le theme itou, des variantes de couleur sont disponibles via \`.toast--info\`, \`.toast--warning\`, \`.toast--danger\` et \`.toast--success\`.
Pour le positionnement et le staking des Toasts il faut placer les \`.toast\` dans le wrapper \`.toast-container\`.

### Anatomie
1. **Conteneur de stack** - \`.toast-container\` pour gerer le positionnement et l'empilement
2. **Toast** - Bloc \`.toast\` avec role ARIA adapte
3. **Header** - \`.toast-header\` avec titre et bouton de fermeture
4. **Body** - \`.toast-body\` avec le message

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.toast\` | Toast de base Bootstrap |
| \`.toast-container\` | Wrapper de positionnement/stacking |
| \`.toast--info\` | Variante information |
| \`.toast--warning\` | Variante avertissement |
| \`.toast--danger\` | Variante erreur |
| \`.toast--success\` | Variante succes |

### Accessibilité
- Placer les toasts dans une region live existante en amont de l'affichage.
- Utiliser \`role="status" aria-live="polite"\` pour les messages non critiques.
- Utiliser \`role="alert" aria-live="assertive"\` pour les messages importants.
- Si \`autohide\` est désactivé, fournir un bouton de fermeture explicite.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/toasts/" target="_blank" rel="noopener noreferrer" class="has-external-link">Toasts</a>
`,
      },
    },
  },
};

const renderToast = ({ variant, polite, delay, autohide }) => {
  const variantClass = variant === "default" ? "" : ` toast--${variant}`;
  const ariaRole = polite ? "status" : "alert";
  const ariaLive = polite ? "polite" : "assertive";

  return `
    <div class="toast show${variantClass}" role="${ariaRole}" aria-live="${ariaLive}" aria-atomic="true" data-bs-delay="${delay}" data-bs-autohide="${autohide}">
      <div class="toast-header">
        <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
        <strong class="me-auto">${variant === "default" ? "Default" : variant.charAt(0).toUpperCase() + variant.slice(1)} Toast</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  `;
};

const renderStates = () => {
  return `
    <div class="d-flex flex-column gap-3">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Default Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--info show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Info Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--danger show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Danger Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--success show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Success Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--warning show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Warning Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  `;
};

const renderLive = () => {
  return `
    <button type="button" class="btn btn-sm btn-primary mb-3" id="liveToastBtn">
      Show live toast
    </button>

    <div class="toast-container">
      <div id="liveToast" class="toast toast--success" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Live Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
          <button class="btn btn-block btn-outline-primary mt-3 d-block d-sm-none" data-bs-dismiss="toast" aria-label="Fermer">
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  `;
};

export const Default = {
  render: renderToast,
  args: {
    variant: "default",
    polite: true,
    delay: 5000,
    autohide: true,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Toast unitaire avec variantes structurelles (`aria-live`, `autohide`, `delay`) fixees dans la story.",
      },
    },
  },
};

export const States = {
  render: renderStates,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variantes etat du theme itou: `default`, `info`, `danger`, `success`, `warning`.",
      },
    },
  },
};

export const LiveExample = {
  render: renderLive,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple de declenchement JS d'un toast via `#liveToastBtn`, en reprenant le pattern de `components.html` (query du `.toast-container`, creation des instances Bootstrap, puis `show()`).",
      },
    },
  },
};
