export default {
  title: "Components/Collapse",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.collapse\` permet d'afficher/masquer du contenu a la demande via Bootstrap.
Le theme itou ajoute la classe utilitaire \`.has-collapse-caret\` pour afficher un chevron qui change d'etat selon \`aria-expanded\`.

### Anatomie
1. **Declencheur** - \`<button>\` (recommande) ou \`<a role="button">\` avec \`data-bs-toggle="collapse"\`
2. **Cible** - Bloc \`<div class="collapse">\` associe via \`id\`
3. **Etat** - \`aria-expanded\` et classes dynamiques appliquees par Bootstrap

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.collapse\` | Contenu masque par defaut |
| \`.collapsing\` | Etat transitoire pendant l'animation |
| \`.collapse.show\` | Contenu visible |
| \`.has-collapse-caret\` | Chevron itou auto (ferme/ouvert) |

### Accessibilite
- Associer le declencheur et le panneau via \`aria-controls\` et \`id\`.
- Laisser Bootstrap maintenir \`aria-expanded\` sur le declencheur.
- Sur un lien, ajouter \`role="button"\` pour expliciter l'intention.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/collapse/#how-it-works" target="_blank" rel="noopener noreferrer" class="has-external-link">Collapse</a>
`,
      },
    },
  },
  argTypes: {
    triggerType: {
      control: { type: "select" },
      options: ["button", "link"],
      description: "Type de declencheur utilise pour ouvrir/fermer le panneau",
    },
  },
};

const render = ({
  triggerType = "button",
  withCaret = false,
  caretPosition = "inline",
  defaultOpen = false,
}) => {
  const collapseId = `collapse-${Math.random().toString(36).slice(2, 10)}`;
  const triggerClasses = ["fw-bold"];

  if (triggerType === "link") {
    triggerClasses.push("text-decoration-none");
  }

  if (withCaret) {
    triggerClasses.push("has-collapse-caret");
    if (caretPosition === "right") {
      triggerClasses.push("d-flex", "justify-content-between");
    }
  }

  const collapseClasses = defaultOpen ? "collapse show mt-3" : "collapse mt-3";

  const trigger =
    triggerType === "button"
      ? `<button
          type="button"
          class="btn btn-outline-primary ${triggerClasses.join(" ")}"
          data-bs-toggle="collapse"
          data-bs-target="#${collapseId}"
          aria-expanded="${defaultOpen}"
          aria-controls="${collapseId}"
        >
          ${withCaret && caretPosition === "right" ? "Button with data-bs-target on right" : "Button with data-bs-target"}
        </button>`
      : `<a
          class="btn btn-outline-primary ${triggerClasses.join(" ")}"
          data-bs-toggle="collapse"
          href="#${collapseId}"
          role="button"
          aria-expanded="${defaultOpen}"
          aria-controls="${collapseId}"
        >
          ${withCaret && caretPosition === "right" ? "Lien avec caret a droite" : withCaret ? "Link with has-collapse-caret" : "Link with href"}
        </a>`;

  return `
    <p>${trigger}</p>
    <div class="${collapseClasses}" id="${collapseId}">
      <p class="mb-0">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </p>
    </div>
  `;
};

const renderShowMore = () => {
  const collapseToken = `collapse-showmore-${Math.random().toString(36).slice(2, 10)}`;

  return `
    <blockquote class="blockquote mb-0">
      <div class="collapse show ${collapseToken} has-no-transition">
        <p class="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente libero laboriosam veniam doloribus, quos expedita.
        </p>
        <button
          class="btn-link d-inline-block mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".${collapseToken}"
          aria-expanded="false"
          aria-controls="${collapseToken}"
        >
          Voir +
        </button>
      </div>
      <div class="collapse ${collapseToken} has-no-transition">
        <p class="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente libero laboriosam veniam doloribus, quos expedita.
        </p>
        <p class="mb-0">
          Inventore neque placeat eos libero aliquam assumenda exercitationem sunt, molestiae soluta architecto, quis odio veniam hic eaque explicabo tempore! Laborum, accusamus facilis.
        </p>
      </div>
    </blockquote>
  `;
};

export const Default = {
  render,
  args: {
    triggerType: "button",
  },
  parameters: {
    docs: {
      description: {
        story: "Exemple de base configurable avec bouton ou lien, et panneau `collapse` associe.",
      },
    },
  },
};

export const WithCaret = {
  render,
  args: {
    triggerType: "link",
    withCaret: true,
    caretPosition: "inline",
    defaultOpen: false,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou avec `.has-collapse-caret` en position inline (caret juste apres le texte).",
      },
    },
  },
};

export const WithCaretRight = {
  render,
  args: {
    triggerType: "link",
    withCaret: true,
    caretPosition: "right",
    defaultOpen: false,
  },
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou avec `.d-flex.justify-content-between.has-collapse-caret` pour aligner le caret a droite.",
      },
    },
  },
};

export const ShowMore = {
  render: renderShowMore,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Pattern `show more` : un extrait est visible par defaut, puis la version complete est affichee apres interaction.",
      },
    },
  },
};
