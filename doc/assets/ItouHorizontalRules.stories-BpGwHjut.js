const l={title:"Utilities/Horizontal Rules",decorators:[a=>`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLe composant HTML `<hr>` permet de séparer visuellement deux blocs de contenu.\n\nDans le thème Itou, la règle horizontale repose sur l'élément natif `<hr>` et sur les utilitaires d'espacement Bootstrap pour ajuster ses marges verticales.\nUne variante permet également d'afficher un mot ou un court libellé au centre avec l'attribut `data-it-text`.\n\n### Anatomie\n1. **Ligne** - Élément natif `<hr>`\n2. **Espacement** - Géré avec les utilitaires de marge, par exemple `.my-3` ou `.my-5`\n3. **Texte central** (optionnel) - Injecté via l'attribut `data-it-text`\n\n### Classes et attributs utiles\n| Élément | Description |\n|--------|-------------|\n| `<hr>` | Séparateur horizontal natif |\n| `.my-3` | Espacement vertical standard |\n| `.my-5` | Espacement vertical renforcé |\n| `data-it-text` | Affiche un mot ou une expression courte au centre |\n\n### Bonnes pratiques\n- Utiliser `<hr>` pour marquer une séparation thématique entre blocs de contenu.\n- Utiliser un texte central uniquement si cela aide réellement à comprendre la structure, par exemple “ou”.\n- Garder un libellé très court dans `data-it-text`.\n"}}}},s=()=>`
  <p class="mb-0">Avant le &lt;hr&gt; standard</p>
  <hr>
  <p class="mb-0">Après le &lt;hr&gt; standard</p>
`,n=()=>`
  <p class="mb-0">Avant le &lt;hr&gt; avec marges augmentées</p>
  <hr class="my-5">
  <p class="mb-0">Après le &lt;hr&gt; avec marges augmentées</p>
`,o=()=>`
  <p class="mb-0 text-center"><strong>Faire ceci</strong></p>
  <hr class="my-5" data-it-text="ou">
  <p class="mb-0 text-center"><strong>Faire cela</strong></p>
`,e={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"La règle horizontale standard."}}}},t={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"la règle horizontale avec marges personnalisées."}}}},r={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"la règle horizontale en variante avec texte central."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderDefault,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "La règle horizontale standard."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderCustomMargin,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "la règle horizontale avec marges personnalisées."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderWithText,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "la règle horizontale en variante avec texte central."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const i=["Default","CustomMargin","WithText"];export{t as CustomMargin,e as Default,r as WithText,i as __namedExportsOrder,l as default};
