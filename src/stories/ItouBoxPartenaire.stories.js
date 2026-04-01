export default {
  title: "Components/Box Partenaire",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Cette story presente la variante metier \`.c-box--promo-partenaire\` pour mettre en avant un partenariat ou une campagne ponctuelle.

### Anatomie
1. **Conteneur** - \`.c-box.c-box--promo-partenaire\`
2. **Zone texte** - titre, accroche, description
3. **Action** - bouton principal (souvent lien externe)
4. **Illustration** - visuel decoratif affiche sur desktop

### Classes CSS principales
| Classe | Description |
|--------|-------------|
| \`.c-box\` | Structure de base de la box |
| \`.c-box--promo-partenaire\` | Variante visuelle de promotion partenaire |
| \`.has-external-link\` | Marqueur visuel de lien externe |

### Accessibilite
- Fournir un libelle explicite pour le bouton d'action (\`aria-label\`).
- Conserver \`aria-hidden="true"\` sur les icones purement decoratives.
`,
      },
    },
  },
};

const render = () => `
  <div class="c-box c-box--promo-partenaire">
    <div class="row g-0">
      <div class="col-12 col-md pe-3 pe-md-4 py-3 py-md-4">
        <h3 class="text-tertiary">Un suivi clair pour vos beneficiaires</h3>
        <p><strong>Equipez vos beneficiaires maintenant et simplifiez vos prochains entretiens</strong></p>
        <p class="fs-sm mb-4">Mon Recap est un carnet papier qui aide vos beneficiaires a suivre leurs demarches, preparer leurs rendez-vous et gagner en autonomie dans leur parcours d'insertion.</p>
        <a href="#" rel="noopener noreferrer" target="_blank" class="btn btn-block w-100 w-md-auto btn-outline-primary has-external-link" aria-label="Commander des carnets (ouverture dans un nouvel onglet)">
          Commander des carnets
        </a>
      </div>
      <div class="d-none d-md-inline-flex col-md-auto align-self-end">
        <div>
          <img src="./images/illustration-mon-recap.png" class="img-fluid" alt="" aria-hidden="true">
        </div>
      </div>
    </div>
  </div>
`;

export const Default = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: `
Variante avec mise en avant de Mon Recap.
`,
      },
    },
  },
};
