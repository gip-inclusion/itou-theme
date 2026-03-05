const a={title:"Components/Stepper",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLe composant `.c-stepper` est utile pour afficher la progression dans un formulaire multi-etapes.\n\n### Anatomie\n1. **Conteneur** - Bloc principal `.c-stepper`\n2. **Barre de progression** - Composant Bootstrap `.progress` + `.progress-bar`\n3. **Texte d'etape** - Resume de l'etape courante\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.c-stepper` | Conteneur principal |\n| `.progress` | Barre de progression Bootstrap |\n| `.progress-bar` | Niveau de progression |\n\n### Accessibilite\nLe `role=\"progressbar\"` et les attributs `aria-valuenow`, `aria-valuemin`, `aria-valuemax` sont indispensables.\nLe texte de l'etape est relie a la barre via `aria-labelledby`.\n"}}},argTypes:{progressPercent:{control:{type:"number",min:0,max:100,step:1},description:"Pourcentage de progression libre (0 a 100)"}}},s=({progressPercent:e})=>`
<div class="c-stepper">
  <div class="progress progress--emploi">
    <div class="progress-bar" role="progressbar" style="width: ${e}%" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" aria-labelledby="informationsEntreprise"></div>
  </div>
  <p id="informationsEntreprise"><strong>Etape 1</strong>/3 : Informations entreprise</p>
</div>`,r={render:s,parameters:{docs:{description:{story:"Version par defaut avec pourcentage libre configurable via l'arg `progressPercent`."}}},args:{progressPercent:28}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Version par defaut avec pourcentage libre configurable via l'arg \`progressPercent\`."
      }
    }
  },
  args: {
    progressPercent: 28
  }
}`,...r.parameters?.docs?.source}}};const o=["Default"];export{r as Default,o as __namedExportsOrder,a as default};
