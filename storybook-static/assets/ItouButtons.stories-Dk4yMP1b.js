const b={title:"Itou-Componnents/Button",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'Boutons itou bases sur Bootstrap. Utiliser element="link" pour les actions de navigation, et element="button" pour les actions locales.'}}},argTypes:{element:{control:{type:"select"},options:["button","link"]},variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","link"]},outline:{control:"boolean"},size:{control:{type:"select"},options:["default","sm","lg"]},disabled:{control:"boolean"}}},p=({element:a,variant:e,outline:r,size:n,disabled:l})=>{const i=r?`btn-outline-${e}`:`btn-${e}`,c=n==="default"?"":`btn-${n}`,o=["btn",i,c].filter(Boolean).join(" "),s=l?" disabled":"",u=`<button type="button" class="${o}"${s}>Button</button>`,d=`<a href="" class="${o}"${s}>Link</a>`;return a==="button"?u:d},t={render:p,parameters:{docs:{description:{story:"Exemple standard du bouton principal. Ajuster variant, outline et size selon le contexte."}}},args:{element:"button",variant:"primary",outline:!1,size:"default",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Exemple standard du bouton principal. Ajuster variant, outline et size selon le contexte.'
      }
    }
  },
  args: {
    element: 'button',
    variant: 'primary',
    outline: false,
    size: 'default',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};const m=["Principal"];export{t as Principal,m as __namedExportsOrder,b as default};
