export default {
  title: "Components/Modal",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.modal\` affiche un dialogue superpose pour presenter un contenu important ou une action de confirmation.
Il est base sur Bootstrap et gere automatiquement l'ouverture, la fermeture et l'isolation visuelle de l'arriere-plan.

### Anatomie
1. **Declencheur** - Bouton/lien avec \`data-bs-toggle="modal"\` et \`data-bs-target\`
2. **Conteneur modal** - \`.modal\` avec \`aria-hidden\` et \`tabindex="-1"\`
3. **Dialogue** - \`.modal-dialog\` (optionnellement \`.modal-dialog-centered\`)
4. **Contenu** - \`.modal-content\` avec \`.modal-header\`, \`.modal-body\`, \`.modal-footer\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.modal\` | Wrapper principal de la modale |
| \`.modal-dialog\` | Cadre de positionnement et dimensions |
| \`.modal-dialog-centered\` | Centrage vertical |
| \`.modal-content\` | Conteneur visuel de la modale |
| \`.modal-header\` | Entete avec titre et bouton fermer |
| \`.modal-body\` | Contenu principal |
| \`.modal-footer\` | Zone d'actions |

### Accessibilite
- Associer le titre au dialogue via \`aria-labelledby\`.
- Conserver un bouton de fermeture explicite avec \`aria-label\`.
- Utiliser des libelles d'actions explicites dans le footer.
- Eviter les contenus trop longs sans structure (titres, listes, paragraphes).

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank" rel="noopener noreferrer" class="has-external-link">Modal</a>
`,
      },
    },
  },
};

const renderDefault = () => {
  const modalId = `modal-default-${Math.random().toString(36).slice(2, 10)}`;
  const titleId = `modal-default-title-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
      Launch example .modal
    </button>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${titleId}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <form action="">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="${titleId}">Modal title in .modal-header</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div class="modal-body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi accusantium sed corrupti a praesentium soluta.</p>
              <p class="mb-0">Voluptatibus, facilis at debitis deleniti animi inventore reprehenderit nostrum.</p>
            </div>
            <div class="modal-footer">
              <a href="" class="btn btn-ico btn-link ps-0 me-auto" aria-label="Retour vers la page precedente">
                <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
                <span>Retour</span>
              </a>
              <button type="button" class="btn btn-sm btn-ico btn-outline-primary" disabled data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Vous devez d'abord decliner la candidature pour pouvoir la transferer a un autre employeur.">
                <i class="ri-home-smile-line" aria-hidden="true"></i>
                <strong>Une autre structure</strong>
              </button>
              <button type="button" class="btn btn-sm btn-primary">Sauvegarder</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `;
};

const renderMarketingModal = () => {
  const modalId = `modal-mini-${Math.random().toString(36).slice(2, 10)}`;
  const titleId = `modal-mini-title-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
      Launch exemple .modal marketing
    </button>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${titleId}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="${titleId}">Profitez du Marche en totalite Titre sur deux lignes</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body home-content-body">
            <p class="mb-4">
              Ce ne sera pas long ! Inscrivez-vous et accedez a toutes les fonctionnalites du marche.
            </p>
            <ul class="list-unstyled mb-5">
              <li class="d-flex mb-2">
                <span class="text-success me-2"><i class="ri-checkbox-circle-fill" aria-hidden="true"></i></span>
                <span class="fw-bold">Telechargez la liste complete des structures figurant sur le marche.</span>
              </li>
              <li class="d-flex mb-2">
                <span class="text-success me-2"><i class="ri-checkbox-circle-fill" aria-hidden="true"></i></span>
                <span class="fw-bold">Creez des listes d'achat et sauvegardez vos structures favorites.</span>
              </li>
              <li class="d-flex mb-2">
                <span class="text-success me-2"><i class="ri-checkbox-circle-fill" aria-hidden="true"></i></span>
                <span class="fw-bold">Accedez aux informations completes des structures pour un sourcing qualifie.</span>
              </li>
              <li class="d-flex mb-2">
                <span class="text-success me-2"><i class="ri-checkbox-circle-fill" aria-hidden="true"></i></span>
                <span class="fw-bold">Accedez aux coordonnees des structures.</span>
              </li>
            </ul>
            <p class="text-center">
              <a href="" class="btn btn-sm btn-primary">Se connecter</a>
            </p>
            <hr class="my-5" data-it-text="ou" />
            <div class="text-center">
              <p class="mb-0">Vous n'avez pas de compte ?</p>
              <a href="" class="btn btn-sm btn-link">Creer un compte</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Default = {
  render: renderDefault,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Modale Bootstrap standard avec centrage vertical.",
      },
    },
  },
};

export const MarketingModal = {
  render: renderMarketingModal,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante de modale orientee contenu marketing (liste de benefices et double CTA).",
      },
    },
  },
};
