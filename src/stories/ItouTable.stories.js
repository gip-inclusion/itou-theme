export default {
  title: "Components/Table",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Le composant HTML \`<table>\` permet de representer des donnees tabulaires.

### Anatomie
1. **Table** - Balise \`<table class="table">\` (base)
2. **Caption** - Légende concise du tableau (recommandée en accessibilité)
3. **En-tete** - Colonnes dans \`<thead>\` avec \`scope="col"\`
4. **Corps** - Lignes de donnees dans \`<tbody>\` avec \`scope="row"\` sur la premiere cellule

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.table\` | Style de base du tableau |
| \`.table-sm\` | Version compacte |
| \`.table-striped\` | Lignes zebrees |
| \`.table-hover\` | Effet au survol des lignes |
| \`.table-bordered\` | Bordures sur le tableau et les cellules |
| \`.table-sortable\` | Style du mode triable |

### Accessibilité
- Ajouter un \`<caption>\` explicite pour decrire le contenu.
- Utiliser \`scope\` sur les cellules d'en-tête.
- En mode triable, utiliser \`aria-sort\` et des boutons avec libelles explicites.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/content/tables/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tables</a>
`,
      },
    },
  },
  argTypes: {
    compact: {
      control: "boolean",
      description: "Ajoute `.table-sm` pour un affichage plus compact",
    },
    striped: {
      control: "boolean",
      description: "Ajoute `.table-striped`",
    },
    hover: {
      control: "boolean",
      description: "Ajoute `.table-hover`",
    },
    bordered: {
      control: "boolean",
      description: "Ajoute `.table-bordered`",
    },
    responsive: {
      control: "boolean",
      description: "Enrobe le tableau dans un conteneur responsive",
    },
    responsiveBreakpoint: {
      control: "select",
      options: ["all", "sm", "md", "lg", "xl", "xxl"],
      description: "Breakpoint de la version responsive (ignore si `responsive` est false)",
    },
    sortable: {
      control: "boolean",
      description: "Affiche une variante triable avec `.table-sortable`",
    },
  },
};

const rows = [
  {
    name: "NAGAMA Maxime",
    status: "PASS IAE valide",
    passNumber: "99999 99 03402",
    validity: "730 jours (Environ 1 an et 11 mois)",
  },
  {
    name: "NAILO Emi",
    status: "PASS IAE valide (non demarre)",
    passNumber: "99999 99 03401",
    validity: "730 jours (Environ 1 an et 11 mois)",
  },
  {
    name: "BIOR Tristan",
    status: "PASS IAE valide",
    passNumber: "99999 77 27894",
    validity: "685 jours (Environ 1 an et 10 mois)",
  },
];

const getResponsiveClass = (responsiveBreakpoint) => {
  if (responsiveBreakpoint === "all") {
    return "table-responsive";
  }

  return `table-responsive-${responsiveBreakpoint}`;
};

const renderTable = ({ compact, striped, hover, bordered, responsive, responsiveBreakpoint, sortable }) => {
  const tableClasses = ["table"];
  if (compact) {
    tableClasses.push("table-sm");
  }
  if (striped) {
    tableClasses.push("table-striped");
  }
  if (hover) {
    tableClasses.push("table-hover");
  }
  if (bordered) {
    tableClasses.push("table-bordered");
  }
  if (sortable) {
    tableClasses.push("table-sortable");
  }

  const wrapperStart = responsive ? `<div class="${getResponsiveClass(responsiveBreakpoint)}">` : "";
  const wrapperEnd = responsive ? "</div>" : "";
  const sortableAttr = sortable ? ' data-bs-table="sortable"' : "";

  const head = sortable
    ? `
      <thead>
        <tr>
          <th aria-sort="descending">
            <button type="button" aria-label="Trier par numero de PASS IAE">Numero de PASS IAE</button>
          </th>
          <th aria-sort="none">
            <button type="button" aria-label="Trier par duree de validite">Duree de validite</button>
          </th>
          <th aria-sort="none">
            <button type="button" aria-label="Trier par statut">Statut</button>
          </th>
        </tr>
      </thead>`
    : `
      <thead>
        <tr>
          <th scope="col">Nom Prenom</th>
          <th scope="col">Statut du PASS IAE</th>
          <th scope="col">Numero de PASS IAE</th>
          <th scope="col">Duree de validite</th>
          <th scope="col" class="text-end w-100px"></th>
        </tr>
      </thead>`;

  const body = sortable
    ? rows
        .map(
          (row) => `
        <tr>
          <td>${row.passNumber}</td>
          <td>${row.validity}</td>
          <td>${row.status}</td>
        </tr>`,
        )
        .join("")
    : rows
        .map(
          (row, index) => `
        <tr>
          <th scope="row"><a href="#" class="btn-link">${row.name}</a></th>
          <td>${row.status}</td>
          <td>${row.passNumber}</td>
          <td>${row.validity}</td>
          <td class="text-end w-100px">
            <div class="btn-group btn-group-sm" role="group" aria-label="Actions rapides sur le candidat">
              <a class="btn btn-link btn-ico-only" href="" data-bs-toggle="tooltip" data-bs-title="Postuler pour ce candidat">
                <i class="ri-draft-line" aria-label="Postuler pour BARACUS Boris"></i>
              </a>
              <button class="btn btn-link btn-ico-only" type="button" id="dropdown_${index}_action_menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Plus d'actions">
                <i class="ri-more-2-fill" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu" aria-labeledby="dropdown_${index}_action_menu">
                <a href="" class="dropdown-item">
                  Valider son éligibilité IAE
                </a>
                <a href="" class="dropdown-item">
                  Invalider son éligibilité IAE
                </a>
              </div>
            </div>
          </td>
        </tr>`,
        )
        .join("");

  return `
${wrapperStart}
<table class="${tableClasses.join(" ")}"${sortableAttr}>
  <caption>Liste des salaries et PASS IAE</caption>
  ${head}
  <tbody>
    ${body}
  </tbody>
</table>
${wrapperEnd}`;
};

export const Default = {
  render: renderTable,
  parameters: {
    docs: {
      description: {
        story: "Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable).",
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Compact = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variation compacte avec `.table-sm`.",
      },
    },
  },
  args: {
    compact: true,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const StripedAndHover = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Cas d'usage avec lignes zebrees et survol des lignes.",
      },
    },
  },
  args: {
    compact: false,
    striped: true,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Responsive = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Table avec conteneur responsive (scroll horizontal sur petits écrans).",
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: true,
    responsiveBreakpoint: "all",
    sortable: false,
  },
};

export const Sortable = {
  render: renderTable,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: 'Version triable avec `.table-sortable` et attribut `data-bs-table="sortable"`.',
      },
    },
  },
  args: {
    compact: false,
    striped: false,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: true,
  },
};
