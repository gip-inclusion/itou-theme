const basicItems = [
  "An item",
  "A second item",
  "A third item",
];

export default {
  title: "Components/List group",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.list-group\` est un composant flexible pour afficher une serie de contenus.
Le thème itou ajoute des variantes supplementaires: \`.list-group-sm\`, \`.list-group-link\`, \`.list-group-collapse\` et \`.list-group-form\`.

### Anatomie
1. **Zone titre** (optionnelle) - Intitule principal de l'item
2. **Badge principal** (optionnel) - Statut ou volume associe
3. **Conteneur** - Element \`<li class="list-group-item">\` ou lien actionnable
4. **Badges secondaires** (optionnels) - Meta-informations (contrat, duree, etc.)
5. **Icone** (optionnelle) - Renforce la compréhension
6. **Informations secondaires** (optionnelles) - Localisation, details contextuels

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.list-group\` | Groupe de liste de base |
| \`.list-group-item\` | Element de liste |
| \`.list-group-sm\` | Variante compacte (padding reduit) |
| \`.list-group-flush\` | Variante sans bordures externes |
| \`.list-group-item-action\` | Item actionnable (hover/focus/active) |
| \`.list-group-link\` | Variante itou avec lien global et chevron |
| \`.list-group-collapse\` | Variante itou avec sous-contenu repliable |
| \`.list-group-form\` | Variante itou pour un rendu proche des champs de formulaire |

### Accessibilité
- Utiliser \`aria-current="true"\` sur l'item actif des listes de navigation.
- Pour les liens desactives, ajouter \`.disabled\` et \`aria-disabled="true"\`.
- En version collapse, relier le bouton et le panneau via \`aria-controls\` et \`id\`.
- En version lien global, conserver un libellé de lien explicite (ou un \`aria-label\` si nécessaire).

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/list-group/#basic-example" target="_blank" rel="noopener noreferrer" class="has-external-link">List group</a>
`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "sm"],
      description: "Taille de la liste",
    },
    flush: {
      control: "boolean",
      description: "Supprime les bordures externes via `.list-group-flush`",
    },
    actionable: {
      control: "boolean",
      description: "Utilise des liens avec `.list-group-item-action`",
    },
    activeIndex: {
      control: { type: "select" },
      options: [-1, 0, 1, 2],
      description: "Index de l'item actif (-1 pour aucun)",
    },
  },
};

const renderBasic = ({ size, flush, actionable, activeIndex }) => {
  const classes = ["list-group"];
  if (size === "sm") {
    classes.push("list-group-sm");
  }
  if (flush) {
    classes.push("list-group-flush");
  }

  if (actionable) {
    const items = basicItems
      .map((label, index) => {
        const isActive = index === activeIndex;
        const attrs = isActive ? ' class="list-group-item list-group-item-action active" aria-current="true"' : ' class="list-group-item list-group-item-action"';
        return `<a href=""${attrs}>${label}</a>`;
      })
      .join("\n");

    return `<div class="${classes.join(" ")}">\n${items}\n</div>`;
  }

  const items = basicItems
    .map((label, index) => {
      const isActive = index === activeIndex;
      const classesItem = ["list-group-item"];
      const ariaCurrent = isActive ? ' aria-current="true"' : "";
      if (isActive) {
        classesItem.push("active");
      }
      return `<li class="${classesItem.join(" ")}"${ariaCurrent}>${label}</li>`;
    })
    .join("\n");

  return `<ul class="${classes.join(" ")}">\n${items}\n</ul>`;
};

const renderGlobalLink = () => `
<ul class="list-group list-group-flush list-group-link">
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Preparateur/preparatrice de commande</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Le Bouscat - 33</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Charge(e) d'affaires commerciales et marketing operationnel</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Beychac-et-Caillau - 72</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Preparateur/preparatrice de commande</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Belves-de-Castillon - 33</span>
    </div>
  </li>
</ul>`.trim();

const renderCollapse = ({ asForm, idPrefix }) => `
<ul class="list-group list-group-collapse${asForm ? " list-group-form" : ""}">
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="w-100 fw-bold"
      data-bs-toggle="collapse"
      data-bs-target="#${idPrefix}-01"
      aria-expanded="false"
      aria-controls="${idPrefix}-01"
    >
      Hygiene et proprete
    </button>
    <div class="collapse" id="${idPrefix}-01">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-01">
            <label class="form-check-label" for="${idPrefix}-check-01">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-02">
            <label class="form-check-label" for="${idPrefix}-check-02">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-03">
            <label class="form-check-label" for="${idPrefix}-check-03">Check this custom checkbox</label>
          </div>
        </li>
      </ul>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="w-100 fw-bold"
      data-bs-toggle="collapse"
      data-bs-target="#${idPrefix}-02"
      aria-expanded="false"
      aria-controls="${idPrefix}-02"
    >
      Batiment et travaux publics
    </button>
    <div class="collapse" id="${idPrefix}-02">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-04">
            <label class="form-check-label" for="${idPrefix}-check-04">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-05">
            <label class="form-check-label" for="${idPrefix}-check-05">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${idPrefix}-check-06">
            <label class="form-check-label" for="${idPrefix}-check-06">Check this custom checkbox</label>
          </div>
        </li>
      </ul>
    </div>
  </li>
</ul>`.trim();

const renderRichContent = () => `
<ul class="list-group list-group-flush list-group-link">
  <li class="list-group-item list-group-item-action">
    <div>
      <a href="" class="fw-bold text-decoration-none stretched-link">Aide macon/maconne voirie</a>
      <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
        <i class="ri-group-line me-1" aria-hidden="true"></i>
        20+<span class="ms-1">candidatures</span>
      </span>
      <p class="fs-sm mb-0 mt-1">
        <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
        Le Bouscat - 33
      </p>
    </div>
    <div class="badge-group d-flex flex-column align-items-end">
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">CDI</span>
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">26h/semaine</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div>
      <a href="" class="fw-bold text-decoration-none stretched-link">Aide macon/maconne voirie</a>
      <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
        <i class="ri-group-line me-1" aria-hidden="true"></i>
        20+<span class="ms-1">candidatures</span>
      </span>
      <p class="fs-sm mb-0 mt-1">
        <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
        Le Bouscat - 33
      </p>
    </div>
    <div class="badge-group d-flex flex-column align-items-end">
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">CDI</span>
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">26h/semaine</span>
    </div>
  </li>
</ul>`.trim();

export const Default = {
  render: renderBasic,
  parameters: {
    docs: {
      description: {
        story: "List group basique configurable (taille, flush, mode actionnable et item actif).",
      },
    },
  },
  args: {
    size: "default",
    flush: false,
    actionable: false,
    activeIndex: -1,
  },
};

export const GlobalLink = {
  render: renderGlobalLink,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou `.list-group-link` avec `.stretched-link` pour rendre tout l'item cliquable.",
      },
    },
  },
};

export const Collapse = {
  render: () => renderCollapse({ asForm: false, idPrefix: "story-listgroup-collapse" }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante itou `.list-group-collapse` avec contenu repliable.",
      },
    },
  },
};

export const CollapseForm = {
  render: () => renderCollapse({ asForm: true, idPrefix: "story-listgroup-collapse-form" }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante `.list-group-collapse.list-group-form` pour un rendu proche des champs de formulaire.",
      },
    },
  },
};

export const RichContent = {
  render: renderRichContent,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple charge de `.list-group.list-group-flush.list-group-link` avec badges et meta-informations.",
      },
    },
  },
};
