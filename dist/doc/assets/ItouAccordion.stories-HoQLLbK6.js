const b={title:"Itou-Componnents/Accordion",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Accordéons rétractables verticalement basés sur Bootstrap. L'accordéon utilise le composant `collapse` pour le rendre pliable.\n\n**Documentation**: [Bootstrap Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)"}}},argTypes:{flush:{control:"boolean",description:"Supprime les bordures et coins arrondis pour un rendu bord à bord avec le conteneur parent"},numberOfItems:{control:{type:"number",min:1,max:10},description:"Nombre d'éléments dans l'accordéon"},defaultOpenIndex:{control:{type:"number",min:-1,max:9},description:"Index de l'élément ouvert par défaut (-1 pour aucun)"},alwaysOpen:{control:"boolean",description:"Permet d'ouvrir plusieurs éléments simultanément (omit data-bs-parent)"}}},m=(n,e,o,u)=>{const s=`collapse${o}Item${n}`,p=e?"accordion-button":"accordion-button collapsed",t=e?"accordion-collapse collapse show":"accordion-collapse collapse",r=u?"":`data-bs-parent="#${o}"`;return`
    <div class="accordion-item">
      <button class="${p}" type="button" data-bs-toggle="collapse" data-bs-target="#${s}" aria-expanded="${e}" aria-controls="${s}">
        Accordion Item #${n+1}
      </button>
      <div id="${s}" class="${t}" ${r}>
        <div class="accordion-body">
          <strong>This is the item #${n+1} accordion body.</strong> It is ${e?"shown":"hidden"} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  `},i=({flush:n,numberOfItems:e,defaultOpenIndex:o,alwaysOpen:u})=>{const s=`accordionExample${Math.random().toString(36).substr(2,9)}`,p=n?" accordion-flush":"";let t="";for(let r=0;r<e;r++)t+=m(r,r===o,s,u);return`
    <div class="accordion${p}" id="${s}">
      ${t}
    </div>
  `},a={render:i,parameters:{docs:{description:{story:"Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois."}}},args:{flush:!1,numberOfItems:3,defaultOpenIndex:0,alwaysOpen:!1}},c={render:i,parameters:{docs:{description:{story:"Ajoutez `.accordion-flush` pour supprimer certaines bordures et coins arrondis afin de restituer les accordéons bord à bord avec leur conteneur parent."}}},args:{flush:!0,numberOfItems:3,defaultOpenIndex:0,alwaysOpen:!1}},d={render:i,parameters:{docs:{description:{story:"Accordéon avec tous les éléments fermés par défaut."}}},args:{flush:!1,numberOfItems:3,defaultOpenIndex:-1,alwaysOpen:!1}},l={render:i,parameters:{docs:{description:{story:"Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut `data-bs-parent`."}}},args:{flush:!1,numberOfItems:3,defaultOpenIndex:0,alwaysOpen:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois.'
      }
    }
  },
  args: {
    flush: false,
    numberOfItems: 3,
    defaultOpenIndex: 0,
    alwaysOpen: false
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Ajoutez \`.accordion-flush\` pour supprimer certaines bordures et coins arrondis afin de restituer les accordéons bord à bord avec leur conteneur parent.'
      }
    }
  },
  args: {
    flush: true,
    numberOfItems: 3,
    defaultOpenIndex: 0,
    alwaysOpen: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Accordéon avec tous les éléments fermés par défaut.'
      }
    }
  },
  args: {
    flush: false,
    numberOfItems: 3,
    defaultOpenIndex: -1,
    alwaysOpen: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Accordéon permettant d\\'ouvrir plusieurs éléments simultanément en omettant l\\'attribut \`data-bs-parent\`.'
      }
    }
  },
  args: {
    flush: false,
    numberOfItems: 3,
    defaultOpenIndex: 0,
    alwaysOpen: true
  }
}`,...l.parameters?.docs?.source}}};const h=["Default","Flush","AllClosed","AlwaysOpen"];export{d as AllClosed,l as AlwaysOpen,a as Default,c as Flush,h as __namedExportsOrder,b as default};
