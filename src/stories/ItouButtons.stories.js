export default {
  title: "Forms/Buttons",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `L’élément \`.btn\` représente un bouton ou lien cliquable.

### Anatomie
Un bouton peut contenir :

1. **Conteneur bouton/lien**
   Élément HTML \`<button>\` (recommandé) ou \`<a>\` avec la classe \`.btn\`.

2. **Style visuel (variant)**
   Une classe de variante : \`.btn-primary\`, \`.btn-secondary\`, \`.btn-outline-primary\`, etc.

3. **Taille (optionnelle)**
   \`.btn-sm\` ou \`.btn-lg\`.

4. **Largeur (optionnelle)**
   \`.btn-block\` pour occuper toute la largeur disponible.

5. **Icône (optionnelle)**
   Ajouter \`.btn-ico\` sur le bouton, avec une icône décorative \`aria-hidden="true"\` et un texte dans un \`<span>\`.

6. **État désactivé (optionnel)**
   Attribut \`disabled\` sur \`<button>\` (et classe \`.disabled\` pour \`<a>\` si besoin visuel).

### Classes CSS
- \`.btn\` : classe de base obligatoire.
- \`.btn-{variant}\` : variante visuelle du bouton.
- \`.btn-sm\` / \`.btn-lg\` : tailles alternatives.
- \`.btn-block\` : bouton pleine largeur.
- \`.btn-ico\` : bouton avec icône + texte.
- \`.btn-ico-only\` : bouton icône seule (avec \`aria-label\` obligatoire).

### Accessibilité
- Les icônes doivent posséder \`aria-hidden="true"\` si elles sont décoratives.
- Pour un bouton icône seule, ajouter un \`aria-label\` explicite.
- Si le libellé visible est trop court, ajouter un \`aria-label\` plus descriptif.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noopener noreferrer">Buttons</a>
`,
      },
    },
  },
  argTypes: {
    element: {
      control: { type: "select" },
      options: ["button", "link"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "outline-primary", "secondary", "success", "danger", "link", "white", "outline-white", "link-white"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    width: {
      control: { type: "select" },
      options: ["inline", "block"],
    },
    withIcon: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const render = ({ element, variant, size, width, withIcon, disabled }) => {
  const kind = `btn-${variant}`;
  const sizeClass = size === "default" ? "" : `btn-${size}`;
  const withClass = width === "inline" ? "" : `btn-block`;
  const iconClass = withIcon ? "btn-ico" : "";
  const classes = ["btn", kind, sizeClass, withClass, iconClass].filter(Boolean).join(" ");
  const disabledAttrs = disabled ? " disabled" : "";
  const bg = ["white", "outline-white", "link-white"].includes(variant) ? "bg-button" : "";

  const buttonContent = withIcon
    ? `<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>button</span>`
    : "button";

  const linkContent = withIcon
    ? `<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>link</span>`
    : "link";

  const elButton = `<div class="p-3 ${bg}"><button type="button" class="${classes}"${disabledAttrs}>${buttonContent}</button></div>`;
  const elLink = `<div class="p-3 ${bg}"><a href="" class="${classes}${disabled ? " disabled" : ""}">${linkContent}</a></div>`;

  return element === "button" ? elButton : elLink;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Exemple standard du bouton principal.",
      },
    },
  },
  args: {
    element: "button",
    variant: "primary",
    size: "default",
    width: "inline",
    withIcon: false,
    disabled: false,
  },
};

const renderDisabledWithSpinner = () => {
  return `
<button type="button" class="btn btn-ico btn-primary" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">button disabled + spinner</span>
</button>
  `;
};

export const DisabledWithSpinner = {
  render: renderDisabledWithSpinner,
  parameters: {
    controls: { disable: true }, // masque le panneau Controls (Canvas)
    docs: {
      controls: { disable: true }, // masque aussi le bloc Controls (Docs)
      description: {
        story: "Exemple du bouton disabled avec son spinner d'attente.",
      },
    },
  },
  args: {}, // explicite: pas d'args pour cette story
};

const renderWithIcon = () => {
  return `
<button class="btn btn-ico btn-primary">
  <i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i>
  <span>.button</span>
</button>
  `;
};

export const WithIcon = {
  render: renderWithIcon,
  parameters: {
    controls: { disable: true }, // masque le panneau Controls (Canvas)
    docs: {
      controls: { disable: true }, // masque aussi le bloc Controls (Docs)
      description: {
        story: "Créez des boutons avec une icone et du texte en `.btn-ico` et en enrobant le texte dans un `<span>`. Les icônes sont généralement à la gauche du texte.",
      },
    },
  },
  args: {}, // explicite: pas d'args pour cette story
};

const renderIconOnly = ({size}) => {
  const sizeClass = size === "default" ? "" : `btn-${size}`;
  return `
  <button class="btn ${sizeClass} btn-ico-only btn-primary" aria-label="ici le label A11Y du bouton">
    <i class="ri-eye-2-line font-weight-medium"></i>
  </button>
  `;
};

export const IconOnly = {
  render: renderIconOnly,
  parameters: {
    controls: { exclude: ["variant", "element", "width", "withIcon", "disabled"] },
    docs: {
      controls: { exclude: ["variant", "element", "width", "withIcon", "disabled"] },
      description: {
        story: "Pour des boutons avec seulement une icône, ajoutez la classe `.btn-ico-only`. <br>Il sera aussi nécessaire d'ajouter un `aria-label` avec la description de l'action du bouton.",
      },
    },
  },
  args: {
    size: "default",
  },
};

const renderAllVersions = () => {
  return `
<div class="d-flex flex-wrap gap-3 align-items-center">
  <button type="button" class="btn btn-primary">.btn-primary</button>
  <button type="button" class="btn btn-outline-primary">.btn-outline-primary</button>
  <button type="button" class="btn btn-secondary">.btn-secondary</button>
  <button type="button" class="btn btn-success">.btn-success</button>
  <button type="button" class="btn btn-danger">.btn-danger</button>
  <button type="button" class="btn btn-link">.btn-link</button>

  <div class="p-3 bg-button d-flex flex-wrap gap-3 align-items-center">
    <button type="button" class="btn btn-white">.btn-white</button>
    <button type="button" class="btn btn-outline-white">.btn-outline-white</button>
    <button type="button" class="btn btn-link-white">.btn-link-white</button>
  </div>
</div>
  `;
};

export const AllVersions = {
  render: renderAllVersions,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Palette complète des variantes disponibles pour les boutons.",
      },
    },
  },
};
