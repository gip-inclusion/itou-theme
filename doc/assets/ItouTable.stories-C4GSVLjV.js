const T={title:"Components/Table",decorators:[r=>`<div style="max-width: 1000px; margin: 0 auto;">${r()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant HTML `<table>` permet de representer des donnees tabulaires.\n\n### Anatomie\n1. **Table** - Balise `<table class="table">` (base)\n2. **Caption** - Légende concise du tableau (recommandée en accessibilité)\n3. **En-tete** - Colonnes dans `<thead>` avec `scope="col"`\n4. **Corps** - Lignes de donnees dans `<tbody>` avec `scope="row"` sur la premiere cellule\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.table` | Style de base du tableau |\n| `.table-sm` | Version compacte |\n| `.table-striped` | Lignes zebrees |\n| `.table-hover` | Effet au survol des lignes |\n| `.table-bordered` | Bordures sur le tableau et les cellules |\n| `.table-sortable` | Style du mode triable |\n\n### Accessibilité\n- Ajouter un `<caption>` explicite pour decrire le contenu.\n- Utiliser `scope` sur les cellules d\'en-tête.\n- En mode triable, utiliser `aria-sort` et des boutons avec libelles explicites.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/content/tables/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tables</a>\n'}}},argTypes:{compact:{control:"boolean",description:"Ajoute `.table-sm` pour un affichage plus compact"},striped:{control:"boolean",description:"Ajoute `.table-striped`"},hover:{control:"boolean",description:"Ajoute `.table-hover`"},bordered:{control:"boolean",description:"Ajoute `.table-bordered`"},responsive:{control:"boolean",description:"Enrobe le tableau dans un conteneur responsive"},responsiveBreakpoint:{control:"select",options:["all","sm","md","lg","xl","xxl"],description:"Breakpoint de la version responsive (ignore si `responsive` est false)"},sortable:{control:"boolean",description:"Affiche une variante triable avec `.table-sortable`"}}},b=[{name:"NAGAMA Maxime",status:"PASS IAE valide",passNumber:"99999 99 03402",validity:"730 jours (Environ 1 an et 11 mois)"},{name:"NAILO Emi",status:"PASS IAE valide (non demarre)",passNumber:"99999 99 03401",validity:"730 jours (Environ 1 an et 11 mois)"},{name:"BIOR Tristan",status:"PASS IAE valide",passNumber:"99999 77 27894",validity:"685 jours (Environ 1 an et 10 mois)"}],E=r=>r==="all"?"table-responsive":`table-responsive-${r}`,a=({compact:r,striped:u,hover:m,bordered:v,responsive:c,responsiveBreakpoint:f,sortable:t})=>{const s=["table"];r&&s.push("table-sm"),u&&s.push("table-striped"),m&&s.push("table-hover"),v&&s.push("table-bordered"),t&&s.push("table-sortable");const h=c?`<div class="${E(f)}">`:"",g=c?"</div>":"",A=t?' data-bs-table="sortable"':"",S=t?`
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
      </thead>`:`
      <thead>
        <tr>
          <th scope="col">Nom Prenom</th>
          <th scope="col">Statut du PASS IAE</th>
          <th scope="col">Numero de PASS IAE</th>
          <th scope="col">Duree de validite</th>
          <th scope="col" class="text-end w-100px"></th>
        </tr>
      </thead>`,y=t?b.map(e=>`
        <tr>
          <td>${e.passNumber}</td>
          <td>${e.validity}</td>
          <td>${e.status}</td>
        </tr>`).join(""):b.map((e,p)=>`
        <tr>
          <th scope="row"><a href="#" class="btn-link">${e.name}</a></th>
          <td>${e.status}</td>
          <td>${e.passNumber}</td>
          <td>${e.validity}</td>
          <td class="text-end w-100px">
            <div class="btn-group btn-group-sm" role="group" aria-label="Actions rapides sur le candidat">
              <a class="btn btn-link btn-ico-only" href="" data-bs-toggle="tooltip" data-bs-title="Postuler pour ce candidat">
                <i class="ri-draft-line" aria-label="Postuler pour BARACUS Boris"></i>
              </a>
              <button class="btn btn-link btn-ico-only" type="button" id="dropdown_${p}_action_menu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Plus d'actions">
                <i class="ri-more-2-fill" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu" aria-labeledby="dropdown_${p}_action_menu">
                <a href="" class="dropdown-item">
                  Valider son éligibilité IAE
                </a>
                <a href="" class="dropdown-item">
                  Invalider son éligibilité IAE
                </a>
              </div>
            </div>
          </td>
        </tr>`).join("");return`
${h}
<table class="${s.join(" ")}"${A}>
  <caption>Liste des salaries et PASS IAE</caption>
  ${S}
  <tbody>
    ${y}
  </tbody>
</table>
${g}`},o={render:a,parameters:{docs:{description:{story:"Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable)."}}},args:{compact:!1,striped:!1,hover:!1,bordered:!1,responsive:!1,responsiveBreakpoint:"all",sortable:!1}},n={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variation compacte avec `.table-sm`."}}},args:{compact:!0,striped:!1,hover:!1,bordered:!1,responsive:!1,responsiveBreakpoint:"all",sortable:!1}},l={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Cas d'usage avec lignes zebrees et survol des lignes."}}},args:{compact:!1,striped:!0,hover:!0,bordered:!1,responsive:!1,responsiveBreakpoint:"all",sortable:!1}},i={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Table avec conteneur responsive (scroll horizontal sur petits écrans)."}}},args:{compact:!1,striped:!1,hover:!1,bordered:!1,responsive:!0,responsiveBreakpoint:"all",sortable:!1}},d={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Version triable avec `.table-sortable` et attribut `data-bs-table="sortable"`.'}}},args:{compact:!1,striped:!1,hover:!0,bordered:!1,responsive:!1,responsiveBreakpoint:"all",sortable:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    docs: {
      description: {
        story: "Table de base paramétrée par args (compacte, zebra, hover, bordures, responsive, triable)."
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variation compacte avec \`.table-sm\`."
      }
    }
  },
  args: {
    compact: true,
    striped: false,
    hover: false,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Cas d'usage avec lignes zebrees et survol des lignes."
      }
    }
  },
  args: {
    compact: false,
    striped: true,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Table avec conteneur responsive (scroll horizontal sur petits écrans)."
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: false,
    bordered: false,
    responsive: true,
    responsiveBreakpoint: "all",
    sortable: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderTable,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: 'Version triable avec \`.table-sortable\` et attribut \`data-bs-table="sortable"\`.'
      }
    }
  },
  args: {
    compact: false,
    striped: false,
    hover: true,
    bordered: false,
    responsive: false,
    responsiveBreakpoint: "all",
    sortable: true
  }
}`,...d.parameters?.docs?.source}}};const x=["Default","Compact","StripedAndHover","Responsive","Sortable"];export{n as Compact,o as Default,i as Responsive,d as Sortable,l as StripedAndHover,x as __namedExportsOrder,T as default};
