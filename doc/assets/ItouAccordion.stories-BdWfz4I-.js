const b={title:"Components/Accordion",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nAccordéons rétractables verticalement basés sur Bootstrap.\nL\'accordéon utilise le composant `collapse` pour le rendre pliable.\n\n### Anatomie\n1. **Conteneur** - Bloc parent `.accordion`\n2. **Item** - Élément `.accordion-item` regroupant un bouton et un panneau\n3. **Déclencheur** - Bouton `.accordion-button` qui ouvre/ferme le panneau\n4. **Panneau** - Zone de contenu `.accordion-collapse` contenant `.accordion-body`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.accordion` | Conteneur principal |\n| `.accordion-flush` | Supprime les bordures et coins arrondis |\n| `.accordion-item` | Élément individuel |\n| `.accordion-button` | Bouton déclencheur |\n| `.accordion-body` | Contenu de l\'accordéon |\n\n### Accessibilité\n- Associer chaque bouton à son panneau via `aria-controls` et `id`.\n- Maintenir `aria-expanded` à jour selon l\'état ouvert/fermé.\n- Utiliser des libellés de boutons explicites pour décrire le contenu de chaque section.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noopener noreferrer" class="has-external-link">Accordion</a>\n'}}},argTypes:{flush:{control:"boolean",description:"Supprime les bordures et coins arrondis pour un rendu bord à bord avec le conteneur parent"},defaultOpenIndex:{control:{type:"number",min:-1,max:9},description:"Index de l'élément ouvert par défaut (-1 pour aucun)"},alwaysOpen:{control:"boolean",description:"Permet d'ouvrir plusieurs éléments simultanément (omit data-bs-parent)"}}},p=(e,o,a,s)=>{const t=`collapse${a}Item${e}`,i=o?"accordion-button":"accordion-button collapsed",r=o?"accordion-collapse collapse show":"accordion-collapse collapse",n=s?"":`data-bs-parent="#${a}"`;return`
    <div class="accordion-item">
      <button class="${i}" type="button" data-bs-toggle="collapse" data-bs-target="#${t}" aria-expanded="${o}" aria-controls="${t}">
        Accordion Item #${e+1}
      </button>
      <div id="${t}" class="${r}" ${n}>
        <div class="accordion-body">
          <strong>This is the item #${e+1} accordion body.</strong> It is ${o?"shown":"hidden"} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  `},u=({flush:e,defaultOpenIndex:o,alwaysOpen:a})=>{const s=`accordionExample${Math.random().toString(36).substr(2,9)}`,t=e?" accordion-flush":"",i=3;let r="";for(let n=0;n<i;n++)r+=p(n,n===o,s,a);return`
    <div class="accordion${t}" id="${s}">
      ${r}
    </div>
  `},c={render:u,parameters:{docs:{description:{story:"Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois."}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!1}},l={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Accordéon avec tous les éléments fermés par défaut."}}},args:{flush:!1,defaultOpenIndex:-1,alwaysOpen:!1}},d={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut `data-bs-parent`."}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois."
      }
    }
  },
  args: {
    flush: false,
    defaultOpenIndex: 0,
    alwaysOpen: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Accordéon avec tous les éléments fermés par défaut."
      }
    }
  },
  args: {
    flush: false,
    defaultOpenIndex: -1,
    alwaysOpen: false
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut \`data-bs-parent\`."
      }
    }
  },
  args: {
    flush: false,
    defaultOpenIndex: 0,
    alwaysOpen: true
  }
}`,...d.parameters?.docs?.source}}};const f=["Default","AllClosed","AlwaysOpen"];export{l as AllClosed,d as AlwaysOpen,c as Default,f as __namedExportsOrder,b as default};
