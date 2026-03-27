export default {
  title: "Components/Tags",
  decorators: [(Story) => `<div style="max-width: 800px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.tag\` est utilisé pour indiquer un statut ou un état. Il peut être cliquable et ainsi utilisé comme filtre.

### Anatomie
1. **Icône** (optionnel) - Renforce la compréhension
2. **Label** - Texte du tag
3. **Conteneur** - Fond coloré arrondi, texte en majuscules

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.tag\` | Conteneur principal |
| \`.tag-lg\` | Variante grande taille |
| \`.tag-group\` | Groupe de tags avec espacement automatique |

### Accessibilité
- Si le tag est cliquable (\`<a>\`), s'assurer que le contenu du lien est explicite ou le rendre expliciete avec un \`aria-label\`
- Les icônes décoratives doivent avoir \`aria-hidden="true"\`
`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Texte du tag",
    },
    variant: {
      control: { type: "select" },
      options: ["info", "important", "accent-01"],
      description: "Variante de couleur",
    },
    size: {
      control: { type: "select" },
      options: ["default", "lg"],
      description: "Taille du tag",
    },
    withIcon: {
      control: "boolean",
      description: "Affiche une icône",
    },
    clickable: {
      control: "boolean",
      description: "Tag cliquable (utilise une balise <a>)",
    },
  },
};

const variantClasses = {
  info: ["bg-info-lighter", "text-info"],
  important: ["bg-important-lighter", "text-important"],
  "accent-01": ["bg-accent-01-lighter", "text-accent-01"],
};

const render = ({ label, variant, size, withIcon, clickable }) => {
  const tag = clickable ? "a" : "span";
  const href = clickable ? ' href=""' : "";
  const sizeClass = size === "lg" ? " tag-lg" : "";
  const [bgClass, textClass] = variantClasses[variant] ?? variantClasses["info"];
  const iconHtml = withIcon ? `<i class="ri-check-line ri-xs" aria-hidden="true"></i>` : "";
  return `<${tag}${href} class="tag${sizeClass} ${bgClass} ${textClass}">${iconHtml}${label}</${tag}>`;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Tag standard avec couleur info.",
      },
    },
  },
  args: {
    label: "Prescripteur",
    variant: "info",
    size: "default",
    withIcon: false,
    clickable: false,
  },
};

export const WithIcon = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Tag avec icône pour renforcer visuellement le statut.",
      },
    },
  },
  args: {
    label: "Éligible",
    variant: "info",
    size: "default",
    withIcon: true,
    clickable: false,
  },
};

export const Clickable = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Tag cliquable (balise `<a>`) pour une utilisation en tant que filtre.",
      },
    },
  },
  args: {
    label: "Filtre actif",
    variant: "accent-01",
    size: "default",
    withIcon: false,
    clickable: true,
  },
};

export const Large = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Tag grande taille avec la classe `.tag-lg`.",
      },
    },
  },
  args: {
    label: "Important",
    variant: "important",
    size: "lg",
    withIcon: false,
    clickable: false,
  },
};

const renderAllVariants = () => `
<div class="tag-group">
  <span class="tag bg-info-lighter text-info">info</span>
  <span class="tag bg-info-lighter text-info"><i class="ri-check-line ri-xs" aria-hidden="true"></i>info + ico</span>
  <a href="" class="tag bg-info-lighter text-info">info cliquable</a>
  <a href="" class="tag bg-info-lighter text-info"><i class="ri-check-line ri-xs" aria-hidden="true"></i>info cliquable + ico</a>
</div>
<div class="tag-group">
  <span class="tag bg-important-lighter text-important">important</span>
  <span class="tag bg-important-lighter text-important"><i class="ri-check-line ri-xs" aria-hidden="true"></i>important + ico</span>
  <a href="" class="tag bg-important-lighter text-important">important cliquable</a>
  <a href="" class="tag bg-important-lighter text-important"><i class="ri-check-line ri-xs" aria-hidden="true"></i>important cliquable + ico</a>
</div>
<div class="tag-group">
  <span class="tag bg-accent-01-lighter text-accent-01">accent-01</span>
  <span class="tag bg-accent-01-lighter text-accent-01"><i class="ri-check-line ri-xs" aria-hidden="true"></i>accent-01 + ico</span>
  <a href="" class="tag bg-accent-01-lighter text-accent-01">accent-01 cliquable</a>
  <a href="" class="tag bg-accent-01-lighter text-accent-01"><i class="ri-check-line ri-xs" aria-hidden="true"></i>accent-01 cliquable + ico</a>
</div>`.trim();

export const AllVariants = {
  render: renderAllVariants,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Les 3 couleurs disponibles, avec et sans icône, en version statique et cliquable.",
      },
    },
  },
};

const renderTagGroup = () => `
<div class="tag-group">
  <span class="tag bg-info-lighter text-info">Prescripteur</span><span class="tag bg-info-lighter text-info">Orienteur</span><span class="tag bg-info-lighter text-info">Employeur</span><span class="tag bg-important-lighter text-important">Prioritaire</span><span class="tag bg-accent-01-lighter text-accent-01">IAE</span>
</div>`.trim();

export const TagGroup = {
  render: renderTagGroup,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Groupe de tags avec la classe `.tag-group` qui gère automatiquement les espacements.",
      },
    },
  },
};
