const h={title:"Itou-Componnents/Accordion",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Accordéons rétractables verticalement basés sur Bootstrap.
L'accordéon utilise le composant \`collapse\` pour le rendre pliable.

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.accordion\` | Conteneur principal |
| \`.accordion-flush\` | Supprime les bordures et coins arrondis |
| \`.accordion-item\` | Élément individuel |
| \`.accordion-button\` | Bouton déclencheur |
| \`.accordion-body\` | Contenu de l'accordéon |
**Documentation Bootstrap**: <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noopener noreferrer" class="has-external-link">Accordion</a>
`}}},argTypes:{flush:{control:"boolean",description:"Supprime les bordures et coins arrondis pour un rendu bord à bord avec le conteneur parent"},defaultOpenIndex:{control:{type:"number",min:-1,max:9},description:"Index de l'élément ouvert par défaut (-1 pour aucun)"},alwaysOpen:{control:"boolean",description:"Permet d'ouvrir plusieurs éléments simultanément (omit data-bs-parent)"}}},m=(e,o,n,a)=>{const s=`collapse${n}Item${e}`,p=o?"accordion-button":"accordion-button collapsed",t=o?"accordion-collapse collapse show":"accordion-collapse collapse",r=a?"":`data-bs-parent="#${n}"`;return`
    <div class="accordion-item">
      <button class="${p}" type="button" data-bs-toggle="collapse" data-bs-target="#${s}" aria-expanded="${o}" aria-controls="${s}">
        Accordion Item #${e+1}
      </button>
      <div id="${s}" class="${t}" ${r}>
        <div class="accordion-body">
          <strong>This is the item #${e+1} accordion body.</strong> It is ${o?"shown":"hidden"} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  `},u=({flush:e,defaultOpenIndex:o,alwaysOpen:n})=>{const a=`accordionExample${Math.random().toString(36).substr(2,9)}`,s=e?" accordion-flush":"",p=3;let t="";for(let r=0;r<p;r++)t+=m(r,r===o,a,n);return`
    <div class="accordion${s}" id="${a}">
      ${t}
    </div>
  `},c={render:u,parameters:{docs:{description:{story:"Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois."}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!1}},d={render:u,parameters:{docs:{description:{story:"Ajoutez `.accordion-flush` pour supprimer certaines bordures et coins arrondis afin de restituer les accordéons bord à bord avec leur conteneur parent."}}},args:{flush:!0,defaultOpenIndex:0,alwaysOpen:!1}},l={render:u,parameters:{docs:{description:{story:"Accordéon avec tous les éléments fermés par défaut."}}},args:{flush:!1,defaultOpenIndex:-1,alwaysOpen:!1}},i={render:u,parameters:{docs:{description:{story:"Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut `data-bs-parent`."}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Ajoutez \`.accordion-flush\` pour supprimer certaines bordures et coins arrondis afin de restituer les accordéons bord à bord avec leur conteneur parent."
      }
    }
  },
  args: {
    flush: true,
    defaultOpenIndex: 0,
    alwaysOpen: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
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
}`,...i.parameters?.docs?.source}}};const b=["Default","Flush","AllClosed","AlwaysOpen"];export{l as AllClosed,i as AlwaysOpen,c as Default,d as Flush,b as __namedExportsOrder,h as default};
