export default {
  title: "Components/Dropdown",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.dropdown\` permet d'afficher un menu contextuel declenche par un bouton.
Il repose sur le plugin JavaScript Bootstrap (Popper) pour la gestion du positionnement et de l'ouverture/fermeture.

### Anatomie
1. **Conteneur** - Bloc parent \`.dropdown\`
2. **Declencheur** - \`<button class="dropdown-toggle">\` avec \`data-bs-toggle="dropdown"\`
3. **Menu** - \`.dropdown-menu\` associe au declencheur
4. **Items** - \`.dropdown-item\` (liens, boutons, contenus custom)

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.dropdown\` | Conteneur principal |
| \`.dropdown-toggle\` | Bouton de declenchement |
| \`.dropdown-menu\` | Panneau du menu |
| \`.dropdown-item\` | Entree actionnable |
| \`.dropdown-header\` | Titre de section |
| \`.dropdown-divider\` | Separateur visuel |
| \`.dropdown-organization\` | Variante itou pour les listes de structures |

### Accessibilite
- Conserver \`aria-expanded\` sur le declencheur (mis a jour par Bootstrap).
- Relier le bouton et le menu via \`aria-controls\` ou \`aria-labelledby\`.
- Sur les icones decoratives, utiliser \`aria-hidden="true"\`.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/" target="_blank" rel="noopener noreferrer" class="has-external-link">Dropdowns</a>
`,
      },
    },
  },
  argTypes: {
    triggerVariant: {
      control: { type: "select" },
      options: ["btn-primary", "btn-outline-primary", "btn-link"],
      description: "Style visuel du bouton declencheur",
    },
    triggerLabel: {
      control: "text",
      description: "Libelle du bouton declencheur",
    },
  },
};

const renderBasic = ({ triggerVariant, triggerLabel }) => {
  const dropdownId = `dropdown-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div class="dropdown" style="min-height: 220px;">
      <button class="btn ${triggerVariant} dropdown-toggle" type="button" id="${dropdownId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${triggerLabel}
      </button>
      <div class="dropdown-menu" aria-labelledby="${dropdownId}">
        <a class="dropdown-item active" href="">Action active</a>
        <a class="dropdown-item" href="">Another action</a>
        <a class="dropdown-item" href="">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="">Separated link</a>
      </div>
    </div>
  `;
};

const renderWithHeaderAndDivider = () => {
  const dropdownId = `dropdown-header-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div class="dropdown" style="min-height: 260px;">
      <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-controls="${dropdownId}" aria-expanded="false">
        Dropdown + header + divider
      </button>
      <div class="dropdown-menu" id="${dropdownId}">
        <ul class="list-unstyled mb-0">
          <li>
            <span class="dropdown-header"><i class="ri-dashboard-line me-2" aria-hidden="true"></i>Mise en situation professionnelle</span>
          </li>
          <li><a class="dropdown-item" href="">Dispositif regional ou sectoriel</a></li>
          <li><a class="dropdown-item" href="">POE</a></li>
          <li class="dropdown-divider" aria-hidden="true"></li>
          <li>
            <span class="dropdown-header"><i class="ri-archive-line me-2" aria-hidden="true"></i>Pre-qualification</span>
          </li>
          <li><a class="dropdown-item" href="">Dispositif regional ou sectoriel</a></li>
          <li><a class="dropdown-item" href="">POE</a></li>
        </ul>
      </div>
    </div>
  `;
};

const renderOrganizationHeaderMenu = () => {
  const dropdownId = `dropdown-org-header-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div style="max-width: 520px; min-height: 360px;">
      <div class="dropdown dropdown-organization dropdown-header-menu">
        <button type="button" class="btn btn-outline-primary btn-ico bg-white dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-controls="${dropdownId}" aria-expanded="false">
          <i class="ri-community-line" aria-hidden="true"></i>
          <span>ETTI - Une nouvelle chance</span>
        </button>
        <div class="dropdown-menu w-100" id="${dropdownId}">
          <form action="" method="post">
            <ul class="list-unstyled mb-0">
              <li>
                <button class="dropdown-item dropdown-item__summary" name="organization_id" value="3853">
                  <i class="ri-community-line" aria-hidden="true"></i>
                  <span>EI</span>
                  <strong>El Garage Martinet Nord</strong>
                </button>
              </li>
              <li>
                <button class="dropdown-item dropdown-item__summary" name="organization_id" value="3854">
                  <i class="ri-community-line" aria-hidden="true"></i>
                  <span>EI</span>
                  <strong>Garage Martinet Ouest</strong>
                </button>
              </li>
              <li>
                <button class="dropdown-item dropdown-item__summary active" name="organization_id" value="2653">
                  <i class="ri-community-line" aria-hidden="true"></i>
                  <span>ETTI</span>
                  <strong>Une nouvelle chance</strong>
                </button>
              </li>
            </ul>
          </form>
          <a href="" class="dropdown-item dropdown-item__summary is-last-sticky">
            <i class="ri-add-line" aria-hidden="true"></i>
            <span>Creer ou rejoindre</span>
            <strong>une nouvelle structure</strong>
          </a>
        </div>
      </div>
    </div>
  `;
};

const renderOrganizationTransfer = () => {
  const dropdownId = `dropdown-org-transfer-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div style="max-width: 520px; min-height: 320px;">
      <div class="dropdown dropdown-organization">
        <button class="btn btn-link btn-block dropdown-toggle" type="button" id="${dropdownId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Transferer cette candidature vers
        </button>
        <div class="dropdown-menu" aria-labelledby="${dropdownId}">
          <a class="dropdown-item dropdown-item__summary active" href="">
            <i class="ri-community-line" aria-hidden="true"></i>
            <span>ETTI</span>
            <strong>Une nouvelle chance</strong>
          </a>
          <a class="dropdown-item dropdown-item__summary" href="">
            <i class="ri-community-line" aria-hidden="true"></i>
            <span>ETTI</span>
            <strong>Une nouvelle chance un peu trop longue</strong>
          </a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item">
            <a class="btn-link btn-ico fw-medium" href="">
              <i class="ri-home-smile-line" aria-hidden="true"></i>
              <span>Une autre structure</span>
            </a>
          </div>
          <div class="dropdown-item">
            <button class="btn-link btn-ico fw-medium" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Vous devez d'abord decliner la candidature pour pouvoir la transferer a un autre employeur">
              <i class="ri-home-smile-line text-disabled" aria-hidden="true"></i>
              <span class="text-disabled">Une autre structure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};

const renderNexusDefault = () => {
  const dropdownId = `dropdown-nexus-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div style="max-width: 420px; min-height: 420px;">
      <div class="dropdown dropdown-nexus">
        <button class="btn btn-outline-primary btn-block bg-white dropdown-toggle" type="button" id="${dropdownId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Mon portail</span>
        </button>
        <div class="dropdown-menu w-100" aria-labelledby="${dropdownId}">
          <div class="dropdown-item dropdown-item__profil">
            <span>
              <strong>Antoine P.</strong><br>
              <span class="fs-sm lh-sm has-ellipsis d-inline-block w-100">antoine.poindron@inclusion.gouv.fr</span>
            </span>
            <a href="" class="btn btn-block btn-outline-primary">Acceder a mon portail</a>
          </div>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item dropdown-item__service active" href="">
            <img src="./images/logo-emploi-inclusion.svg" height="35" alt="Les emplois de l'inclusion">
            <span class="badge badge-xs rounded-pill bg-info-lighter text-info">
              <i class="ri-check-line" aria-hidden="true"></i>
              Active
            </span>
          </a>
          <a class="dropdown-item dropdown-item__service" href="">
            <img src="./images/logo-dora.svg" height="35" alt="DORA">
            <span class="badge badge-xs rounded-pill bg-info-lighter text-info">
              <i class="ri-check-line" aria-hidden="true"></i>
              Active
            </span>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item dropdown-item__service" href="">
            <img src="./images/logo-communaute-inclusion.svg" height="35" alt="La communaute de l'inclusion">
            <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
              <i class="ri-timer-flash-line" aria-hidden="true"></i>
              Activable en 1 clic
            </span>
          </a>
          <a class="dropdown-item dropdown-item__service" href="">
            <img src="./images/logo-pilotage-inclusion.svg" height="35" alt="Le pilotage de l'inclusion">
            <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
              <i class="ri-timer-flash-line" aria-hidden="true"></i>
              Activable en 1 clic
            </span>
          </a>
          <a class="dropdown-item dropdown-item__service" href="">
            <img src="./images/logo-monrecap.svg" height="35" alt="Mon recap">
          </a>
          <a class="dropdown-item dropdown-item__service" href="">
            <img src="./images/logo-marche-inclusion.svg" height="35" alt="Le marche de l'inclusion">
          </a>
        </div>
      </div>
    </div>
  `;
};

const renderNexusNoProConnect = () => {
  const dropdownId = `dropdown-nexus-nopc-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div style="max-width: 420px; min-height: 420px;">
      <div class="dropdown dropdown-nexus">
        <button class="btn btn-outline-primary btn-block bg-white dropdown-toggle" type="button" id="${dropdownId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Mon portail</span>
        </button>
        <div class="dropdown-menu w-100" aria-labelledby="${dropdownId}">
          <div class="mx-4 mt-3 text-center">
            <img src="./images/logo-nexus.png" class="img-fluid" width="200" alt="Nexus">
          </div>
          <div class="mx-4 my-3 fs-sm lh-sm">
            <p class="fs-base mb-2"><strong>Decouvrez votre nouveau portail unifie.</strong></p>
            <p>Accedez bientot a l'ensemble de votre offre et de vos informations.</p>
            <hr>
            <p>Pour acceder a votre portail, vous devez avoir un compte ProConnect.</p>
          </div>
          <div class="mx-4 mb-3 text-center">
            <a href="" class="proconnect-button">
              <span class="visually-hidden">S'identifier avec ProConnect</span>
            </a>
            <a href="" class="btn-block btn-link text-center has-external-link mt-3">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

const renderNexusNoAccount = () => {
  const dropdownId = `dropdown-nexus-noaccount-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <div style="max-width: 420px; min-height: 420px;">
      <div class="dropdown dropdown-nexus">
        <button class="btn btn-outline-primary btn-block bg-white dropdown-toggle" type="button" id="${dropdownId}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Mon portail</span>
        </button>
        <div class="dropdown-menu w-100" aria-labelledby="${dropdownId}">
          <div class="mx-4 mt-3 text-center">
            <img src="./images/logo-nexus.png" class="img-fluid" width="200" alt="Nexus">
          </div>
          <div class="mx-4 my-3 fs-sm lh-sm">
            <p class="fs-base mb-2"><strong>Decouvrez votre nouveau portail unifie.</strong></p>
            <p>Accedez bientot a l'ensemble de votre offre et de vos informations.</p>
            <hr>
            <p>Pour acceder a votre portail, vous devez avoir un compte ProConnect.</p>
          </div>
          <div class="mx-4 mb-3 text-center">
            <button class="btn btn-primary">S'inscrire aux Emplois de l'inclusion</button>
            <a href="" class="btn-block btn-link text-center has-external-link mt-3">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Default = {
  render: renderBasic,
  args: {
    triggerVariant: "btn-primary",
    triggerLabel: "Dropdown",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemple de base configurable avec menu d'actions, item actif et separateur.",
      },
    },
  },
};

export const WithHeaderAndDivider = {
  render: renderWithHeaderAndDivider,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante avec sections de menu, titres (`.dropdown-header`) et separateur (`.dropdown-divider`).",
      },
    },
  },
};

export const OrganizationHeaderMenu = {
  render: renderOrganizationHeaderMenu,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou `dropdown-organization dropdown-header-menu` utilisee pour le switch de structure dans le header.",
      },
    },
  },
};

export const OrganizationTransferMenu = {
  render: renderOrganizationTransfer,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou `dropdown-organization` utilisee dans le workflow de transfert de candidature.",
      },
    },
  },
};

export const NexusDefault = {
  render: renderNexusDefault,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante `dropdown-nexus` standard avec services actifs et activables.",
      },
    },
  },
};

export const NexusWithoutProConnect = {
  render: renderNexusNoProConnect,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante `dropdown-nexus` quand l'utilisateur n'a pas de compte Pro Connect.",
      },
    },
  },
};

export const NexusWithoutEmploisAccount = {
  render: renderNexusNoAccount,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante `dropdown-nexus` quand l'utilisateur n'a pas encore de compte Emplois de l'inclusion.",
      },
    },
  },
};
