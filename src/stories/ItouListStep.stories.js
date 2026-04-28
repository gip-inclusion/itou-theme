const defaultItems = [
  {
    datetime: "2022-06-13T11:10:00",
    label: "Le 13 juin 2022 a 11:10",
    event: "Passee en \"Candidature declinee\" par Victor Lacoste",
  },
  {
    datetime: "2022-06-12T16:45:00",
    label: "Le 12 juin 2022 a 16:45",
    event: "Passee en \"Candidature a l'etude\" par Victor Lacoste",
  },
  {
    datetime: "2022-06-10T09:20:00",
    label: "Le 10 juin 2022 a 09:20",
    event: "Candidature recue par la structure",
  },
];

export default {
  title: "Components/List step",
  decorators: [(Story) => `<div style="max-width: 800px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant \`.list-step\` permet d'afficher une liste d'evenements chronologiques.
Le premier element de la liste (souvent le plus recent) est mis en avant par une bordure et un texte plus affirmes.

### Anatomie
1. **Conteneur** - Liste \`<ul class="list-step">\`
2. **Date/heure** - Balise sémantique \`<time datetime="...">\`
3. **Événement** - Description de l'étape dans un \`<span>\`
4. **Mise en avant** - Le premier \`<li>\` est visuellement prioritaire

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.list-step\` | Liste chronologique |
| \`.list-step > li\` | Étape individuelle avec bordure latérale |
| \`.list-step > li:first-of-type\` | Étape la plus récente mise en avant |

### Accessibilité
- Renseigner systématiquement l'attribut \`datetime\` du \`<time>\`.
- Conserver un texte d'événement explicite et compréhensible hors contexte visuel.
- Respecter l'ordre chronologique affiche pour limiter l'ambiguite de lecture.
`,
      },
    },
  },
};

const formatLabel = (label, withSeconds) => {
  if (!withSeconds) {
    return label;
  }

  return `${label}:00`;
};

const renderListStep = ({ showSeconds, items = defaultItems }) => {
  return `
<ul class="list-step">
  ${items
    .map(
      (item) => `
    <li>
      <time datetime="${item.datetime}">${formatLabel(item.label, showSeconds)}</time>
      <span>${item.event}</span>
    </li>`,
    )
    .join("")}
</ul>`.trim();
};

export const Default = {
  render: renderListStep,
  parameters: {
    docs: {
      description: {
        story: "Liste chronologique standard avec mise en avant du premier événement.",
      },
    },
  },
  args: {
    showSeconds: false,
  },
};

export const LongContent = {
  render: () =>
    renderListStep({
      showSeconds: false,
      items: [
        {
          datetime: "2025-09-02T14:35:00",
          label: "Le 02 septembre 2025 a 14:35",
          event: "Validation finale du dossier par la structure d'insertion apres verification complete des criteres administratifs et des justificatifs transmis.",
        },
        {
          datetime: "2025-09-01T10:05:00",
          label: "Le 01 septembre 2025 a 10:05",
          event: "Demande de pieces complementaires envoyee au prescripteur pour finaliser l'instruction.",
        },
        {
          datetime: "2025-08-29T08:50:00",
          label: "Le 29 aout 2025 a 08:50",
          event: "Creation de la candidature et rattachement a l'offre cible.",
        },
      ],
    }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple avec libelles plus longs pour verifier le comportement des retours a la ligne.",
      },
    },
  },
};
