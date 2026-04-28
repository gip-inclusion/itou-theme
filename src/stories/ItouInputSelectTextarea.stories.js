const autoExpendableTextarea = () => {
  const textareaExpandableList = document.querySelectorAll("[data-it-expandable=true]");
  for (let i = 0, ii = textareaExpandableList.length; i < ii; i += 1) {
    const thisTextarea = textareaExpandableList[i];

    if (thisTextarea.dataset.itExpandableInitialized === "true") {
      continue;
    }

    const expandTextarea = function () {
      if (thisTextarea.scrollHeight !== 0) {
        thisTextarea.style.removeProperty("height");
        thisTextarea.style.height = `${this.scrollHeight + 3}px`;
      }
    };

    thisTextarea.addEventListener("input", expandTextarea, false);
    thisTextarea.addEventListener("focus", expandTextarea, false);
    thisTextarea.dataset.itExpandableInitialized = "true";
    expandTextarea.call(thisTextarea);
  }
};

function loadStyle(href, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    link.addEventListener("load", () => resolve(), { once: true });
    link.addEventListener("error", () => reject(new Error(`Failed to load: ${href}`)), { once: true });
    document.head.appendChild(link);
  });
}

function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load: ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

const initEasyMDETextarea = (scope = document) => {
  if (typeof window.EasyMDE === "undefined") {
    return;
  }

  const textareaList = scope.querySelectorAll("[data-it-easymde=true]");
  for (let i = 0, ii = textareaList.length; i < ii; i += 1) {
    const textarea = textareaList[i];

    if (textarea.dataset.itEasyMdeInitialized === "true") {
      continue;
    }

    new window.EasyMDE({
      element: textarea,
      status: false,
    });
    textarea.dataset.itEasyMdeInitialized = "true";
  }
};

export default {
  title: "Forms/Input Select Textarea",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        autoExpendableTextarea();
        loadStyle(
          "https://unpkg.com/easymde/dist/easymde.min.css",
          "itou-easymde-style-loader"
        )
          .then(() =>
            loadScript(
              "https://unpkg.com/easymde/dist/easymde.min.js",
              "itou-easymde-script-loader"
            )
          )
          .then(() => initEasyMDETextarea(document))
          .catch(console.error);
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
Les éléments \`<input>\`, \`<textarea>\` et \`<select>\` permettent de créer des contrôles interactifs dans un formulaire web pour la saisie de données.

### Anatomie
1. **Conteneur de champ** - \`.form-group\` avec \`.form-group-required\` pour les champs obligatoires (affiche le marqueur \`*\`)
2. **Étiquette** - \`<label class="form-label">\` associée via \`for\`/\`id\`
3. **Contrôle** - \`<input>\`, \`<textarea>\` ou \`<select>\` avec la classe \`.form-control\` (ou \`.form-select\`)
4. **Texte d'aide** - \`<div class="form-text">\` sous le contrôle

### États
| État | Description |
|------|-------------|
| Défaut | Champ saisissable classique |
| Désactivé | Attribut \`disabled\` — non interactif, visuellement grisé |
| Lecture seule | Attribut \`readonly\` — valeur non modifiable |

### Tailles
- \`.form-control-sm\` / \`.form-select-sm\`
- Taille par défaut
- \`.form-control-lg\` / \`.form-select-lg\`
- \`.form-control-xl\` / \`.form-select-xl\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.form-group\` | Conteneur principal du champ |
| \`.form-group-required\` | Marque le champ comme obligatoire (affiche \`*\` sur le label) |
| \`.form-label\` | Étiquette du champ |
| \`.form-control\` | Classe de base pour \`<input>\` et \`<textarea>\` |
| \`.form-select\` | Classe de base pour \`<select>\` |
| \`.form-text\` | Texte d'aide sous le champ |
| \`.form-control-sm/lg/xl\` | Variantes de taille pour les inputs |
| \`.form-select-sm/lg/xl\` | Variantes de taille pour les selects |
| \`.form-control-plaintext\` | Valeur affichée comme du texte brut (readonly) |

### Accessibilité
- Toujours associer un \`<label>\` via \`for\`/\`id\`
- Ne pas utiliser de \`placeholder\` , privilégier le texte d'aide.
- Pour un champ obligatoire, ajouter \`required\` sur le contrôle ET \`aria-required="true"\` si le contexte le nécessite.
- Utiliser \`aria-describedby\` pour lier les textes d'aide au contrôle.
- Préférer \`<fieldset>\` + \`<legend>\` pour regrouper des champs \`<li>\`és.

**Documentation Bootstrap** :
- <a href="https://getbootstrap.com/docs/5.3/forms/form-control/" target="_blank" rel="noopener noreferrer" class="has-external-link">Form Control</a>
- <a href="https://getbootstrap.com/docs/5.3/forms/select/" target="_blank" rel="noopener noreferrer" class="has-external-link">Select</a>
`,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "search", "tel", "url", "file"],
      description: "Type d'input HTML",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "xl"],
      description: "Taille du contrôle : `sm` (32px), défaut (40px), `lg` (48px), `xl` (56px)",
    },
    state: {
      control: { type: "select" },
      options: ["default", "disabled", "readonly"],
      description: "État du champ de saisie",
    },
    required: {
      control: "boolean",
      description: "Marque le champ comme obligatoire avec `.form-group-required`",
    },
    helpText: {
      control: "boolean",
      description: "Affiche un texte d'aide sous le champ avec `.form-text`",
    },
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const sizeClass = (size, prefix = "form-control") =>
  size === "default" ? "" : ` ${prefix}-${size}`;

const stateAttrs = (state) => {
  if (state === "disabled") return " disabled";
  if (state === "readonly") return " readonly";
  return "";
};

// ─── Input ────────────────────────────────────────────────────────────────────

const renderInput = ({ type, size, state, required, helpText }) => {
  const id = "story-input";
  const groupRequired = required ? " form-group-required" : "";
  const controlClass = `form-control${sizeClass(size)}`;
  const attrs = stateAttrs(state);
  const help = helpText
    ? `<div id="${id}-help" class="form-text">Texte d'aide pour ce champ.</div>`
    : "";
  const describedBy = helpText ? ` aria-describedby="${id}-help"` : "";

  return `
<div class="form-group${groupRequired}">
  <label class="form-label" for="${id}">Libellé du champ</label>
  <input
    type="${type}"
    id="${id}"
    class="${controlClass}"
    ${required ? "required" : ""}
    ${describedBy}
    ${attrs}
  >
  ${help}
</div>
  `.trim();
};

export const Input = {
  render: renderInput,
  parameters: {
    docs: {
      description: {
        story: "Champ `<input>` basique. Jouez avec les contrôles pour explorer les types, tailles et états disponibles.",
      },
    },
  },
  args: {
    type: "text",
    size: "default",
    state: "default",
    required: false,
    helpText: true,
  },
};

// ─── Tous les états ───────────────────────────────────────────────────────────

export const AllStates = {
  render: () => `
<div class="d-flex flex-column gap-4">

  <div class="form-group">
    <label class="form-label" for="state-default">Défaut</label>
    <input type="text" id="state-default" class="form-control">
    <div class="form-text">Texte d'aide optionnel.</div>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-disabled">Désactivé</label>
    <input type="text" id="state-disabled" class="form-control" disabled>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-readonly">Lecture seule</label>
    <input type="text" id="state-readonly" class="form-control" value="Valeur en lecture seule" readonly>
  </div>

  <div class="form-group form-group-required">
    <label class="form-label" for="state-required">Obligatoire</label>
    <input type="text" id="state-required" class="form-control" required>
  </div>

</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Aperçu de tous les états disponibles : défaut, désactivé, lecture seule et obligatoire.",
      },
    },
  },
};

// ─── Toutes les tailles ───────────────────────────────────────────────────────

export const AllSizes = {
  render: () => `
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="size-sm">Petit — <code>form-control-sm</code></label>
    <input type="text" id="size-sm" class="form-control form-control-sm">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-default">Taille par défaut</label>
    <input type="text" id="size-default" class="form-control">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-lg">Grand — <code>form-control-lg</code></label>
    <input type="text" id="size-lg" class="form-control form-control-lg">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-xl">Extra-grand — <code>form-control-xl</code></label>
    <input type="text" id="size-xl" class="form-control form-control-xl">
  </div>

</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Les quatre tailles disponibles pour les champs de saisie : `sm`, défaut, `lg` et `xl`.",
      },
    },
  },
};

// ─── Textarea ─────────────────────────────────────────────────────────────────

const renderTextarea = ({ size, state, required, helpText }) => {
  const id = "story-textarea";
  const groupRequired = required ? " form-group-required" : "";
  const controlClass = `form-control${sizeClass(size)}`;
  const attrs = stateAttrs(state);
  const help = helpText
    ? `<div id="${id}-help" class="form-text">Texte d'aide pour ce champ.</div>`
    : "";
  const describedBy = helpText ? ` aria-describedby="${id}-help"` : "";

  return `
<div class="form-group${groupRequired}">
  <label class="form-label" for="${id}">Contenu du message</label>
  <textarea
    id="${id}"
    class="${controlClass}"
    rows="4"
    ${required ? "required" : ""}
    ${describedBy}
    ${attrs}
  ></textarea>
  ${help}
</div>
  `.trim();
};

export const Textarea = {
  render: renderTextarea,
  parameters: {
    docs: {
      description: {
        story:
          "Champ `<textarea>` multi-lignes. Partage les mêmes classes d'état et de taille que les `<input>`. Ajouter `data-it-expandable=\"true\"` pour un redimensionnement automatique à la saisie.",
      },
    },
  },
  argTypes: {
    type: { table: { disable: true } },
  },
  args: {
    size: "default",
    state: "default",
    required: false,
    helpText: true,
  },
};

export const TextareaExpandable = {
  render: () => `
<div class="form-group">
  <label class="form-label" for="textarea-expandable">Textarea auto-extensible <code>data-it-expandable</code></label>
  <textarea
    id="textarea-expandable"
    class="form-control"
    rows="3"
    data-it-expandable="true"
  ></textarea>
  <div class="form-text">Le champ s'étend verticalement au fur et à mesure de la saisie.</div>
</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Textarea avec l'attribut `data-it-expandable=\"true\"` : la hauteur s'adapte automatiquement au contenu saisi.",
      },
    },
  },
};

export const TextareaEasyMDE = {
  render: () => `
<div class="form-group">
  <label class="form-label" for="textarea-easymde">Textarea avec EasyMDE</label>
  <textarea
    class="form-control"
    id="textarea-easymde"
    rows="3"
    data-it-easymde="true"
  ></textarea>
  <div class="form-text">Exemple d'intégration d'un éditeur Markdown EasyMDE sur un textarea.</div>
</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Textarea initialisé avec EasyMDE, comme sur la page de démonstration des formulaires.",
      },
    },
  },
};

// ─── Select ───────────────────────────────────────────────────────────────────

const renderSelect = ({ size, state, required, helpText }) => {
  const id = "story-select";
  const groupRequired = required ? " form-group-required" : "";
  const controlClass = `form-select${sizeClass(size, "form-select")}`;
  const attrs = stateAttrs(state);
  const help = helpText
    ? `<div id="${id}-help" class="form-text">Texte d'aide pour ce champ.</div>`
    : "";
  const describedBy = helpText ? ` aria-describedby="${id}-help"` : "";

  return `
<div class="form-group${groupRequired}">
  <label class="form-label" for="${id}">Choisissez une option</label>
  <select
    id="${id}"
    class="${controlClass}"
    ${required ? "required" : ""}
    ${describedBy}
    ${attrs}
  >
    <option value="">— Sélectionnez —</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  ${help}
</div>
  `.trim();
};

export const Select = {
  render: renderSelect,
  parameters: {
    docs: {
      description: {
        story:
          "Champ `<select>` avec la classe `.form-select`. Supporte les mêmes états et tailles que les inputs.",
      },
    },
  },
  argTypes: {
    type: { table: { disable: true } },
  },
  args: {
    size: "default",
    state: "default",
    required: false,
    helpText: true,
  },
};

export const SelectSizes = {
  render: () => `
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="select-sm">Petit — <code>form-select-sm</code></label>
    <select id="select-sm" class="form-select form-select-sm">
      <option>form-select-sm (32px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-default">Taille par défaut</label>
    <select id="select-default" class="form-select">
      <option>form-select (40px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-lg">Grand — <code>form-select-lg</code></label>
    <select id="select-lg" class="form-select form-select-lg">
      <option>form-select-lg (48px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-xl">Extra-grand — <code>form-select-xl</code></label>
    <select id="select-xl" class="form-select form-select-xl">
      <option>form-select-xl (56px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Les quatre tailles disponibles pour les selects : `sm`, défaut, `lg` et `xl`.",
      },
    },
  },
};
