import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s;function c(){return(c=e((()=>{t={title:`Components/Accordion`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nAccordéons rétractables verticalement basés sur Bootstrap.\nL\'accordéon utilise le composant `collapse` pour le rendre pliable.\n\n### Anatomie\n1. **Conteneur** - Bloc parent `.accordion`\n2. **Item** - Élément `.accordion-item` regroupant un bouton et un panneau\n3. **Déclencheur** - Bouton `.accordion-button` qui ouvre/ferme le panneau\n4. **Panneau** - Zone de contenu `.accordion-collapse` contenant `.accordion-body`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.accordion` | Conteneur principal |\n| `.accordion-flush` | Supprime les bordures et coins arrondis |\n| `.accordion-item` | Élément individuel |\n| `.accordion-button` | Bouton déclencheur |\n| `.accordion-body` | Contenu de l\'accordéon |\n\n### Accessibilité\n- Associer chaque bouton à son panneau via `aria-controls` et `id`.\n- Maintenir `aria-expanded` à jour selon l\'état ouvert/fermé.\n- Utiliser des libellés de boutons explicites pour décrire le contenu de chaque `<section>`.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noopener noreferrer" class="has-external-link">Accordion</a>\n'}}},argTypes:{flush:{control:`boolean`,description:`Supprime les bordures et coins arrondis pour un rendu bord à bord avec le conteneur parent`},defaultOpenIndex:{control:{type:`number`,min:-1,max:9},description:`Index de l'élément ouvert par défaut (-1 pour aucun)`},alwaysOpen:{control:`boolean`,description:`Permet d'ouvrir plusieurs éléments simultanément (omit data-bs-parent)`}}},n=(e,t,n,r)=>{let i=`collapse${n}Item${e}`,a=t?`accordion-button`:`accordion-button collapsed`,o=t?`accordion-collapse collapse show`:`accordion-collapse collapse`,s=r?``:`data-bs-parent="#${n}"`;return`
    <div class="accordion-item">
      <button class="${a}" type="button" data-bs-toggle="collapse" data-bs-target="#${i}" aria-expanded="${t}" aria-controls="${i}">
        Accordion Item #${e+1}
      </button>
      <div id="${i}" class="${o}" ${s}>
        <div class="accordion-body">
          <strong>This is the item #${e+1} accordion body.</strong> It is ${t?`shown`:`hidden`} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  `},r=({flush:e,defaultOpenIndex:t,alwaysOpen:r})=>{let i=`accordionExample${Math.random().toString(36).substr(2,9)}`,a=e?` accordion-flush`:``,o=``;for(let e=0;e<3;e++)o+=n(e,e===t,i,r);return`
    <div class="accordion${a}" id="${i}">
      ${o}
    </div>
  `},i={render:r,parameters:{docs:{description:{story:`Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois.`}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!1}},a={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Accordéon avec tous les éléments fermés par défaut.`}}},args:{flush:!1,defaultOpenIndex:-1,alwaysOpen:!1}},o={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut `data-bs-parent`."}}},args:{flush:!1,defaultOpenIndex:0,alwaysOpen:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Default`,`AllClosed`,`AlwaysOpen`]})))()}c();export{a as AllClosed,o as AlwaysOpen,i as Default,s as __namedExportsOrder,t as default};