export default {
  title: "Components/Tooltips",
  decorators: [(Story) => {
    const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

    // Initialiser les tooltips
    setTimeout(() => {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
    }, 0);

    return html;
  }],
  tags: ["autodocs"],
  parameters: {
    layout: "padded", // 'centered', 'fullscreen', ou 'padded'
    docs: {
      description: {
        component: `
Le composant \`.tooltip\` est un composant d'interface. Il affiche au survol ou au focus clavier un petit texte d'information complémentaire. Le texte doit être court et descriptif, idéalement moins de 80 caractères.

### Anatomie

Une infobulle se compose des éléments suivants :

- **Élément déclencheur** : bouton, lien ou icône portant les attributs \`data-bs-toggle="tooltip"\` et \`data-bs-title="…"\`.
- **Bulle** : conteneur généré par Bootstrap (balise \`div.tooltip\`) positionné dynamiquement via Popper.js.

La position par défaut est \`top\`. Les valeurs possibles pour \`data-bs-placement\` sont : \`top\`, \`right\`, \`bottom\`, \`left\`.

### Accessibilité

- **Icône seule** : ajouter \`role="button"\`, \`tabindex="0"\` et un \`aria-label\` décrivant la **fonction** du déclencheur (ex. : "Afficher une information complémentaire"). Bootstrap lie automatiquement le contenu du tooltip via \`aria-describedby\`.
- **Bouton \`disabled\`** : l'attribut HTML natif \`disabled\` retire l'élément de l'ordre de tabulation. Pour rendre le tooltip accessible, envelopper le bouton dans un \`<span tabindex="0">\` portant les attributs \`data-bs-toggle\` et \`data-bs-title\`.
- **Lien \`.disabled\`** : la classe Bootstrap n'est que visuelle. Ajouter \`aria-disabled="true"\` pour informer les technologies d'assistance.
- **Contenu descriptif** : le texte de l'infobulle doit être court, informatif et non redondant avec le texte visible de l'élément déclencheur.
- **Navigation clavier** : les tooltips se déclenchent au focus (\`Tab\`) et se ferment avec \`Escape\`.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/tooltips/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tooltips</a>
`,
      },
    },
  },
};

const render = () => {
  return `
<div class="d-flex gap-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip sur un bouton">
    Tooltip sur un bouton
  </button>
  <button type="button" disabled class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip sur un bouton disabled">
    Tooltip sur un bouton disabled
  </button>
</div>
<hr />
<div class="d-flex gap-3">
  <a href="#" class="btn btn-link" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un lien">Tooltip sur un lien</a>
  <a href="#" class="btn btn-link disabled" aria-disabled="true" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un lien disabled">
    Tooltip sur un lien disabled
  </a>
</div>
<hr />
<p>Tooltip sur un icône
  <i class="ri-information-line ri-xl text-info" aria-label="Afficher une information complémentaire" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un icône" role="button" tabindex="0"></i>
</p>
`;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "L'infobulle peut être affichée sur un bouton, un lien ou une icône (sur une icone il faut rendre le texte du tooltip accessible avec un aria-labe et un tabindex).",
      },
    },
  },
};


const renderDirections = () => {
  return `
  <div class="d-flex gap-3">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip en haut">
      Tooltip en haut
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip a droite">
      Tooltip a droite
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip en bas">
      Tooltip en bas
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip a gauche">
      Tooltip a gauche
    </button>
  </div>
`;
};

export const Directions = {
  render: renderDirections,
  parameters: {
    docs: {
      description: {
        story: "L'infobulle peut être affichée dans plusieurs directions : haut, droite, bas et gauche.",
      },
    },
  },
};
