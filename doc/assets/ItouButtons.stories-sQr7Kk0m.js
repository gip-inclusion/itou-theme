const b={title:"Components/Buttons",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'L’élément `.btn` représente un bouton cliquable, utilisé pour soumettre des formulaires.\nLes classes `.btn` sont conçues pour être utilisées avec l’élément `<button>`.\nCependant, vous pouvez également utiliser ces classes sur `<a>`.\n\n\n### Accessibilité\n- Les icônes doivent posséder un attribut `aria-hidden:true` ou un `aria-label` si elles sont seules dans le button.\n- Si le texte à l\'intérieur est trop court et pas assez explicite sur l\'action qu\'il produit, il faut ajouter un `aria-label` avec une description plus complete.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noopener noreferrer">Buttons</a>\n'}}},argTypes:{element:{control:{type:"select"},options:["button","link"]},variant:{control:{type:"select"},options:["primary","outline-primary","secondary","success","danger","link","white","outline-white","link-white"]},size:{control:{type:"select"},options:["default","sm","lg"]},disabled:{control:"boolean"}}},p=({element:e,variant:s,size:n,disabled:i})=>{const l=`btn-${s}`,u=n==="default"?"":`btn-${n}`,o=["btn",l,u].filter(Boolean).join(" "),a=i?" disabled":"",r=["white","outline-white","link-white"].includes(s)?"bg-button":"",c=`<div class="p-3 ${r}"><button type="button" class="${o}"${a}>Button</button></div>`,d=`<div class="p-3 ${r}"><a href="" class="${o} ${a}">Link</a></div>`;return e==="button"?c:d},t={render:p,parameters:{docs:{description:{story:"Exemple standard du bouton principal."}}},args:{element:"button",variant:"primary",size:"default",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Exemple standard du bouton principal.'
      }
    }
  },
  args: {
    element: 'button',
    variant: 'primary',
    size: 'default',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,b as default};
