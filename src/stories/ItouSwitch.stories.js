export default {
  title: "Forms/Switch",
  decorators: [(Story) => `<div style="max-width: 800px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`switch\` permet de représenter un état binaire activé / désactivé sous forme d'interrupteur.

### Anatomie
1. **Conteneur** - \`.form-check.form-switch\` entoure le composant.
2. **Contrôle** - \`<input class="form-check-input" type="checkbox" role="switch">\`.
3. **Libellé** - \`<label class="form-check-label">\` \`<li>\`é via \`for\` / \`id\`.
4. **État textuel** (optionnel) - Variante \`.has-state-label\` avec \`data-it-state-label-off\` et \`data-it-state-label-on\`.

### États
| État | Description |
|------|-------------|
| Défaut | Interrupteur non activé |
| Activé | Interrupteur actif |
| Désactivé | Interrupteur non interactif |
| Désactivé activé | Interrupteur actif mais verrouillé |

### Tailles
- Taille standard avec \`.form-switch\`
- Grande taille avec \`.form-switch-lg\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.form-check\` | Conteneur principal |
| \`.form-switch\` | Active le rendu switch |
| \`.form-check-input\` | Contrôle checkbox stylisé en switch |
| \`.form-check-label\` | Libellé associé |
| \`.form-switch-lg\` | Variante grand format |
| \`.form-check-reverse\` | Place le switch à droite du libellé |
| \`.has-state-label\` | Affiche un libellé dynamique selon l'état |

### Accessibilité
- Ajouter \`role="switch"\` sur le contrôle pour exposer correctement le comportement.
- Toujours associer le libellé au contrôle avec \`for\` et \`id\`.
- Si le switch n'a pas de texte visible suffisant, compléter avec un libellé explicite.
- Les libellés d'état visuels ne remplacent pas le nom accessible du contrôle.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches" target="_blank" rel="noopener noreferrer" class="has-external-link">Switches</a>
`,
      },
    },
  },
};

const sizeClass = (size) => (size === "lg" ? " form-switch-lg" : "");

const renderSwitch = ({ checked, disabled, reverse, size, withStateLabel }) => {
  const id = "story-switch";
  const stateLabelClass = withStateLabel ? " has-state-label" : "";
  const reverseClass = reverse ? " form-check-reverse" : "";
  const labelText = "Recevoir les notifications";
  const hideLabelText = withStateLabel && size === "default";

  return `
<div class="form-check form-switch${sizeClass(size)}${reverseClass}${stateLabelClass}">
  <input
    class="form-check-input"
    type="checkbox"
    role="switch"
    id="${id}"
    ${checked ? "checked" : ""}
    ${disabled ? "disabled" : ""}
  >
  <label
    class="form-check-label"
    for="${id}"
    ${withStateLabel ? 'data-it-state-label-off="Désactivé" data-it-state-label-on="Activé"' : ""}
  >
    <span class="${hideLabelText ? "visually-hidden" : ""}">${labelText}</span>
  </label>
</div>
  `.trim();
};

export const Default = {
  render: renderSwitch,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Active le switch",
    },
    disabled: {
      control: "boolean",
      description: "Désactive l'interaction",
    },
    reverse: {
      control: "boolean",
      description: "Place le switch à droite avec `.form-check-reverse`",
    },
    size: {
      control: { type: "select" },
      options: ["default", "lg"],
      description: "Taille du switch : standard ou grande avec `.form-switch-lg`",
    },
    withStateLabel: {
      control: "boolean",
      description: "Affiche les libellés d'état avec `.has-state-label`",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Switch paramétrable pour explorer les états activé, désactivé, inversé, grand format et libellés d'état.",
      },
    },
  },
  args: {
    checked: false,
    disabled: false,
    reverse: false,
    size: "default",
    withStateLabel: false,
  },
};

export const StateLabel = {
  render: () => `
<div class="d-flex flex-column gap-4">
  <div class="form-check form-switch has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-default">
    <label class="form-check-label" for="switch-state-label-default" data-it-state-label-off="Fermé" data-it-state-label-on="Ouvert"></label>
  </div>

  <div class="form-check form-switch form-switch-lg has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-lg">
    <label class="form-check-label" for="switch-state-label-lg" data-it-state-label-off="Désactivé" data-it-state-label-on="Activé">Notifications de compte</label>
  </div>
</div>
  `.trim(),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante `.has-state-label` pour afficher un libellé visuel dépendant de l'état du switch, en standard ou en grand format.",
      },
    },
  },
};
