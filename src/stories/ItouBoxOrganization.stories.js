export default {
  title: "Components/Box Organization",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Cette story présenté la variante metier \`.c-box--organization\` pour afficher les informations de contact d'une structure.

### Anatomie
1. **Résumé** - icône, type de structure, nom de l'organisation
2. **Bloc details** - liste de contacts (adresse, email, téléphone, site)
3. **Actions contextuelles** - boutons de copie + lien externe
4. **Action finale** - bouton vers la fiche détaillée

### Classes CSS principales
| Classe | Description |
|--------|-------------|
| \`.c-box\` | Structure de base de la box |
| \`.c-box--organization\` | Variante visuelle fiche organisation |
| \`.c-box--organization__summary\` | Entete / résumé de la structure |
| \`.c-box--organization__list-contact\` | Liste des informations de contact |
| \`.c-box--organization__detail\` | Zone repliable de details |
| \`.has-external-link\` | Marqueur visuel de lien externe |

### Accessibilité
- Fournir un libellé explicite pour chaque bouton d'action et de copie (\`aria-label\`).
- Conserver \`aria-hidden="true"\` sur les icônes purement decoratives.
- Dans la version repliable, maintenir la cohérence entre \`aria-expanded\` et l'etat du panneau.
`,
      },
    },
  },
};

const renderOrganization = ({ collapsible }) => {
  const summaryAttributesOpen = collapsible
    ? '<button class="c-box--organization__summary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStructureStorybook" aria-expanded="false" aria-controls="collapseStructureStorybook">'
    : '<div class="c-box--organization__summary">';
  const summaryAttributesClose = collapsible
    ? '</button>'
    : '</div>';
  const detailsOpen = collapsible ? ' class="c-box--organization__detail collapse" id="collapseStructureStorybook"' : ' class="c-box--organization__detail"';

  return `
  <div class="c-box c-box--organization">
    ${summaryAttributesOpen}
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span data-bs-toggle="tooltip" data-bs-title="Entreprise de Travail Temporaire d'Insertion">ETTI</span>
        <span class="d-block h3">Une nouvelle chance</span>
      </div>
    ${summaryAttributesClose}
    <div${detailsOpen}>
      <hr class="my-4">
      <ul class="c-box--organization__list-contact">
        <li>
          <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
          <button class="btn-link fw-medium ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="513 Rue Sans Souci, 69760 Limonest" aria-label="Copier l'adresse">
            <i class="ri-file-copy-line" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <i class="ri-mail-line fw-normal me-2" aria-hidden="true"></i>
          contact+etti@inclusion.beta.gouv.fr
          <button class="btn-link fw-medium ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="contact+etti@inclusion.beta.gouv.fr" aria-label="Copier l'email">
            <i class="ri-file-copy-line" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <i class="ri-phone-line fw-normal me-2" aria-hidden="true"></i>
          05 39 55 97 24
          <button class="btn-link fw-medium ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="05 39 55 97 24" aria-label="Copier le numero de téléphone">
            <i class="ri-file-copy-line" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <i class="ri-global-line fw-normal me-2" aria-hidden="true"></i>
          <a href="" rel="noopener" target="_blank" class="btn-link fw-medium has-external-link" aria-label="Site web (ouverture dans un nouvel onglet)">avenir.etti.com</a>
        </li>
      </ul>
      <a href="#" class="btn btn-secondary btn-block mt-4">Voir la fiche de l'entreprise</a>
    </div>
  </div>
`;
};

export const Default = {
  render: renderOrganization,
  args: {
    collapsible: false,
  },
  argTypes: {
    collapsible: {
      name: "Collapsible",
      control: { type: "boolean" },
      description: "Active la version repliable de la box organization.",
      table: {
        category: "Options",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Version complète de fiche organisation. Passer \`Collapsible\` à \`true\` pour activer l'affichage repliable Bootstrap.
`,
      },
    },
  },
};
