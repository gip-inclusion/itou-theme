export default {
  title: "Utilities/Logos",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Les logos officiels de l'écosystème de la plateforme de l'inclusion.

### Variantes disponibles
| Variante | Usage |
|--------|-------|
| **Texte** (\`-simple\`) | Logo horizontal avec texte uniquement |
| **Monogramme** (\`-mono\`) | Pictogramme seul, sans texte |
| **Graphique** (sans suffixe) | Logo complet avec icône et texte |
| **Light** (\`-light\`) | Version claire pour fonds sombres |
| **Dark** (\`-dark\`) | Version sombre pour fonds clairs |

### Accessibilité
- Toujours renseigner l'attribut \`alt\` avec le nom de la plateforme.
- Pour les logos décoratifs (doublons avec un titre), utiliser \`alt=""\`.
`,
      },
    },
  },
};

const renderMinistere = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Ministère</strong></div>
  <div class="card-body">
    <div class="d-flex flex-column flex-lg-row align-items-center gap-4">
      <div><img src="./images/logo-republique-francaise.svg" height="120" alt="République Française"></div>
      <div><img src="./images/logo-ministere-emploi.svg" height="120" alt="Ministère du travail, du plein emploi et de l'insertion"></div>
      <div><img src="./images/logo-beta-gouv.svg" height="40" alt="Beta.gouv.fr"></div>
      <div><img src="./images/logo-accelere-betagouv.svg" alt="Accéléré par Beta.gouv.fr"></div>
    </div>
  </div>
</div>`;

const renderTexte = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Logo texte</strong></div>
  <div class="card-body">
    <div class="d-flex flex-column flex-lg-row flex-wrap gap-3">
      <div><img src="./images/logo-plateforme-inclusion-simple.svg" height="33" alt="La plateforme de l'inclusion"></div>
      <div><img src="./images/logo-inclusion-connect-simple.svg" height="33" alt="Inclusion Connect"></div>
      <div><img src="./images/logo-emploi-inclusion-simple.svg" height="33" alt="Les emplois de l'inclusion"></div>
      <div><img src="./images/logo-communaute-inclusion-simple.svg" height="33" alt="La communauté de l'inclusion"></div>
      <div><img src="./images/logo-pilotage-inclusion-simple.svg" height="33" alt="Le pilotage de l'inclusion"></div>
      <div><img src="./images/logo-marche-inclusion-simple.svg" height="33" alt="Le marché de l'inclusion"></div>
    </div>
  </div>
</div>`;

const renderMonogramme = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Logo monogramme</strong></div>
  <div class="card-body">
    <div class="d-flex flex-wrap gap-3">
      <div><img src="./images/logo-plateforme-inclusion-mono.svg" height="53" alt="La plateforme de l'inclusion"></div>
      <div><img src="./images/logo-inclusion-connect-mono.svg" height="53" alt="Inclusion Connect"></div>
      <div><img src="./images/logo-emploi-inclusion-mono.svg" height="53" alt="Les emplois de l'inclusion"></div>
      <div><img src="./images/logo-communaute-inclusion-mono.svg" height="53" alt="La communauté de l'inclusion"></div>
      <div><img src="./images/logo-pilotage-inclusion-mono.svg" height="53" alt="Le pilotage de l'inclusion"></div>
      <div><img src="./images/logo-marche-inclusion-mono.svg" height="53" alt="Le marché de l'inclusion"></div>
    </div>
  </div>
</div>`;

const renderGraphique = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Logo graphique</strong></div>
  <div class="card-body">
    <div class="d-flex flex-column flex-lg-row flex-wrap gap-3">
      <div><img src="./images/logo-plateforme-inclusion.svg" height="53" alt="La plateforme de l'inclusion"></div>
      <div><img src="./images/logo-inclusion-connect.svg" height="53" alt="Inclusion Connect"></div>
      <div><img src="./images/logo-emploi-inclusion.svg" height="53" alt="Les emplois de l'inclusion"></div>
      <div><img src="./images/logo-communaute-inclusion.svg" height="53" alt="La communauté de l'inclusion"></div>
      <div><img src="./images/logo-pilotage-inclusion.svg" height="53" alt="Le pilotage de l'inclusion"></div>
      <div><img src="./images/logo-marche-inclusion.svg" height="53" alt="Le marché de l'inclusion"></div>
    </div>
  </div>
</div>`;

const renderLight = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Logo light (sur fond sombre)</strong></div>
  <div class="card-body bg-primary p-4">
    <div class="d-flex flex-column flex-lg-row flex-wrap gap-3">
      <div><img src="./images/logo-plateforme-inclusion-light.svg" height="53" alt="La plateforme de l'inclusion"></div>
      <div><img src="./images/logo-inclusion-connect-light.svg" height="53" alt="Inclusion Connect"></div>
      <div><img src="./images/logo-emploi-inclusion-light.svg" height="53" alt="Les emplois de l'inclusion"></div>
      <div><img src="./images/logo-communaute-inclusion-light.svg" height="53" alt="La communauté de l'inclusion"></div>
      <div><img src="./images/logo-pilotage-inclusion-light.svg" height="53" alt="Le pilotage de l'inclusion"></div>
      <div><img src="./images/logo-marche-inclusion-light.svg" height="53" alt="Le marché de l'inclusion"></div>
    </div>
  </div>
</div>`;

const renderDark = () => `
<div class="card mb-4">
  <div class="card-header"><strong>Logo dark</strong></div>
  <div class="card-body">
    <div class="d-flex flex-column flex-lg-row flex-wrap gap-3">
      <div><img src="./images/logo-plateforme-inclusion-dark.svg" height="53" alt="La plateforme de l'inclusion"></div>
      <div><img src="./images/logo-inclusion-connect-dark.svg" height="53" alt="Inclusion Connect"></div>
      <div><img src="./images/logo-emploi-inclusion-dark.svg" height="53" alt="Les emplois de l'inclusion"></div>
      <div><img src="./images/logo-communaute-inclusion-dark.svg" height="53" alt="La communauté de l'inclusion"></div>
      <div><img src="./images/logo-pilotage-inclusion-dark.svg" height="53" alt="Le pilotage de l'inclusion"></div>
      <div><img src="./images/logo-marche-inclusion-dark.svg" height="53" alt="Le marché de l'inclusion"></div>
    </div>
  </div>
</div>`;

const renderShowcase = () => `
<section class="vstack gap-0">
  ${renderMinistere()}
  ${renderTexte()}
  ${renderMonogramme()}
  ${renderGraphique()}
  ${renderLight()}
  ${renderDark()}
</section>`;

export const Default = {
  render: renderShowcase,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Présentation complète de tous les logos de l'écosystème de la plateforme de l'inclusion.",
      },
    },
  },
};

export const Ministere = {
  render: renderMinistere,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos officiels du Ministère du travail, Beta.gouv et République Française.",
      },
    },
  },
};

export const Texte = {
  render: renderTexte,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos texte des différentes plateformes de l'inclusion (variante simple).",
      },
    },
  },
};

export const Monogramme = {
  render: renderMonogramme,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos monogramme (pictogramme seul, sans texte) des plateformes de l'inclusion.",
      },
    },
  },
};

export const Graphique = {
  render: renderGraphique,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos graphiques complets (icône + texte) des plateformes de l'inclusion.",
      },
    },
  },
};

export const Light = {
  render: renderLight,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos en version claire, à utiliser sur des fonds sombres (ex : fond bg-primary).",
      },
    },
  },
};

export const Dark = {
  render: renderDark,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Logos en version sombre, à utiliser sur des fonds clairs.",
      },
    },
  },
};
