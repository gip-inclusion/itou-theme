export default {
  title: "Components/Tabs",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.nav-tabs\` permet d'afficher des onglets de navigation et, si besoin, de piloter des panneaux de contenu via le plugin JavaScript Bootstrap.

### Anatomie
1. **Conteneur d'onglets** - \`<ul class="nav nav-tabs">\`
2. **Item** - \`<li class="nav-item">\`
3. **Lien/Bouton d'onglet** - \`.nav-link\` (+ \`.active\` / \`.disabled\`)
4. **Panneaux (optionnel)** - \`.tab-content > .tab-pane\` avec \`data-bs-toggle="tab"\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.nav\` | Base navigation Bootstrap |
| \`.nav-tabs\` | Style onglets |
| \`.nav-link\` | Lien/bouton d'onglet |
| \`.active\` | Onglet actif |
| \`.disabled\` | Onglet inactif |

### Accessibilité
- Utiliser \`aria-current="page"\` ou \`.active\` de maniere cohérente pour l'etat actif.
- Sur un onglet inactif, conserver \`aria-disabled="true"\` et \`tabindex="-1"\`.
- En mode panneaux dynamiques (plugin tabs), ajouter \`role="tablist"\`, \`role="tab"\`, \`role="tabpanel"\`, \`aria-controls\` et \`aria-labeledby\`.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs" target="_blank" rel="noopener noreferrer" class="has-external-link">Navs and Tabs</a>
`,
      },
    },
  },
};

const renderBasic = () => `
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span>Item menu with badge</span>
        <span class="badge badge-sm rounded-pill ms-2">1279</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="ri-briefcase-4-line fw-normal me-1" aria-hidden="true"></i>
        <span>Item menu with icon</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
`;

const renderWithPanels = () => {
  const token = Math.random().toString(36).slice(2, 10);

  return `
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab-${token}" data-bs-toggle="tab" data-bs-target="#home-pane-${token}" type="button" role="tab" aria-controls="home-pane-${token}" aria-selected="true">
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab-${token}" data-bs-toggle="tab" data-bs-target="#profile-pane-${token}" type="button" role="tab" aria-controls="profile-pane-${token}" aria-selected="false">
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab-${token}" data-bs-toggle="tab" data-bs-target="#contact-pane-${token}" type="button" role="tab" aria-controls="contact-pane-${token}" aria-selected="false">
          Contact
        </button>
      </li>
    </ul>

    <div class="tab-content p-3" style="min-height: 140px;">
      <div class="tab-pane fade show active" id="home-pane-${token}" role="tabpanel" aria-labeledby="home-tab-${token}" tabindex="0">
        Contenu de l'onglet Home.
      </div>
      <div class="tab-pane fade" id="profile-pane-${token}" role="tabpanel" aria-labeledby="profile-tab-${token}" tabindex="0">
        Contenu de l'onglet Profile.
      </div>
      <div class="tab-pane fade" id="contact-pane-${token}" role="tabpanel" aria-labeledby="contact-tab-${token}" tabindex="0">
        Contenu de l'onglet Contact.
      </div>
    </div>
  `;
};

const renderVertical = () => `
  <ul class="nav nav-tabs flex-column" style="max-width: 420px;">
    <li class="nav-item">
      <a href="#" class="nav-link">Les prescripteurs habilites</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link active">Liste des prescripteurs habilites</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Les differents types de SIAE</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Les criteres d'eligibilite de l'IAE</a>
    </li>
  </ul>
`;

const renderOrderedVertical = () => `
  <ol class="nav nav-tabs nav-tabs-sm flex-column" style="max-width: 520px;">
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette premiere partie de votre formulaire</span>
        <span class="badge badge-xs bg-warning-lighter text-warning rounded-pill ms-2">0/7</span>
      </a>
    </li>
    <li class="nav-item">
      <span class="nav-link active" aria-current="page">
        <span>Cette deuxieme partie de votre formulaire</span>
        <span class="badge badge-xs bg-info-lighter text-info rounded-pill ms-2">2/6</span>
      </span>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette troisieme partie de votre formulaire</span>
        <span class="badge badge-xs bg-success-lighter text-success rounded-pill ms-2">8/8</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette derniere partie de votre formulaire</span>
        <small class="ms-2 text-muted">3/8 champs remplis</small>
      </a>
    </li>
  </ol>
`;

export const Default = {
  render: renderBasic,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version issue de `components.html` avec onglet actif, item avec badge, item avec icône et item désactivé.",
      },
    },
  },
};

export const WithPanels = {
  render: renderWithPanels,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple Bootstrap complet avec `data-bs-toggle=\"tab\"` et panneaux `.tab-pane` relies en ARIA.",
      },
    },
  },
};

export const Vertical = {
  render: renderVertical,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante verticale avec `.flex-column`, conforme à la doc HTML du theme.",
      },
    },
  },
};

export const OrderedVertical = {
  render: renderOrderedVertical,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante verticale ordonnee sur `ol` avec `.nav-tabs-sm` et badges d'avancement.",
      },
    },
  },
};
