const D={title:"Forms/Buttons",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'L’élément `.btn` représente un bouton ou lien cliquable.\n\n### Anatomie\nUn bouton peut contenir :\n\n1. **Conteneur bouton/lien**\n   Élément HTML `<button>` (recommandé) ou `<a>` avec la classe `.btn`.\n\n2. **Style visuel (variant)**\n   Une classe de variante : `.btn-primary`, `.btn-secondary`, `.btn-outline-primary`, etc.\n\n3. **Taille (optionnelle)**\n   `.btn-sm` ou `.btn-lg`.\n\n4. **Largeur (optionnelle)**\n   `.btn-block` pour occuper toute la largeur disponible.\n\n5. **Icône (optionnelle)**\n   Ajouter `.btn-ico` sur le bouton, avec une icône décorative `aria-hidden="true"` et un texte dans un `<span>`.\n\n6. **État désactivé (optionnel)**\n   Attribut `disabled` sur `<button>` (et classe `.disabled` pour `<a>` si besoin visuel).\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.btn` | Classe de base obligatoire |\n| `.btn-{variant}` | Variante visuelle du bouton |\n| `.btn-sm` / `.btn-lg` | Tailles alternatives |\n| `.btn-block` | Bouton pleine largeur |\n| `.btn-ico` | Bouton avec icône + texte |\n| `.btn-ico-only` | Bouton icône seule (avec `aria-label` obligatoire) |\n\n### Accessibilité\n- Les icônes doivent posséder `aria-hidden="true"` si elles sont décoratives.\n- Pour un bouton icône seule, ajouter un `aria-label` explicite.\n- Si le libellé visible est trop court, ajouter un `aria-label` plus descriptif.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noopener noreferrer">Buttons</a>\n'}}},argTypes:{element:{control:{type:"select"},options:["button","link"],description:"Type d'élément HTML rendu : bouton natif ou lien stylisé"},variant:{control:{type:"select"},options:["primary","outline-primary","secondary","success","danger","link","white","outline-white","link-white"],description:"Variante visuelle du bouton"},size:{control:{type:"select"},options:["default","sm","lg"],description:"Taille du bouton : standard, petit ou grand"},width:{control:{type:"select"},options:["inline","block"],description:"Largeur du bouton : inline ou pleine largeur avec `.btn-block`"},withIcon:{control:"boolean",description:"Affiche une icône décorative à gauche du libellé"},disabled:{control:"boolean",description:"Désactive l'interaction du bouton (ou applique l'état visuel disabled sur un lien)"}}},f=({element:e,variant:n,size:d,width:p,withIcon:l,disabled:c})=>{const m=`btn-${n}`,h=d==="default"?"":`btn-${d}`,u=["btn",m,h,p==="inline"?"":"btn-block",l?"btn-ico":""].filter(Boolean).join(" "),y=c?" disabled":"",b=["white","outline-white","link-white"].includes(n)?"bg-button":"",v=l?'<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>button</span>':"button",g=l?'<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>link</span>':"link",w=`<div class="p-3 ${b}"><button type="button" class="${u}"${y}>${v}</button></div>`,x=`<div class="p-3 ${b}"><a href="" class="${u}${c?" disabled":""}">${g}</a></div>`;return e==="button"?w:x},t={render:f,parameters:{docs:{description:{story:"Exemple standard du bouton principal."}}},args:{element:"button",variant:"primary",size:"default",width:"inline",withIcon:!1,disabled:!1}},C=()=>`
<button type="button" class="btn btn-ico btn-primary" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">button disabled + spinner</span>
</button>
  `,s={render:C,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple du bouton disabled avec son spinner d'attente."}}},args:{}},I=()=>`
<button class="btn btn-ico btn-primary">
  <i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i>
  <span>.button</span>
</button>
  `,o={render:I,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Créez des boutons avec une icone et du texte en `.btn-ico` et en enrobant le texte dans un `<span>`. Les icônes sont généralement à la gauche du texte."}}},args:{}},k=({size:e})=>`
  <button class="btn ${e==="default"?"":`btn-${e}`} btn-ico-only btn-primary" aria-label="ici le label A11Y du bouton">
    <i class="ri-eye-2-line font-weight-medium"></i>
  </button>
  `,r={render:k,parameters:{controls:{exclude:["variant","element","width","withIcon","disabled"]},docs:{controls:{exclude:["variant","element","width","withIcon","disabled"]},description:{story:"Pour des boutons avec seulement une icône, ajoutez la classe `.btn-ico-only`. <br>Il sera aussi nécessaire d'ajouter un `aria-label` avec la description de l'action du bouton."}}},args:{size:"default"}},$=({size:e})=>`
  <div class="dropdown">
    <button class="btn ${e==="default"?"":`btn-${e}`} btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Exporter
    </button>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" href="#">
          <i class="ri-download-line ri-sm fw-medium" aria-hidden="true"></i>
          <span>Exporter tous les contrats</span>
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#">
          <i class="ri-download-line ri-sm fw-medium" aria-hidden="true"></i>
          <span>Exporter seulement certains types de contrats</span>
        </a>
      </li>
    </ul>
  </div>
  `,a={render:$,decorators:[e=>`<div style="min-height: 180px;">${e()}</div>`],parameters:{controls:{exclude:["variant","element","width","withIcon","disabled"]},docs:{controls:{exclude:["variant","element","width","withIcon","disabled"]},description:{story:"Les boutons avec dropdown ne doivent pas contenir d'icône autres que celle qui vient déjà avec la classe `dropdown-toggle` ."}}},args:{size:"default"}},z=()=>`
<div class="d-flex flex-wrap gap-3 align-items-center">
  <button type="button" class="btn btn-primary">.btn-primary</button>
  <button type="button" class="btn btn-outline-primary">.btn-outline-primary</button>
  <button type="button" class="btn btn-secondary">.btn-secondary</button>
  <button type="button" class="btn btn-success">.btn-success</button>
  <button type="button" class="btn btn-danger">.btn-danger</button>
  <button type="button" class="btn btn-link">.btn-link</button>

  <div class="p-3 bg-button d-flex flex-wrap gap-3 align-items-center">
    <button type="button" class="btn btn-white">.btn-white</button>
    <button type="button" class="btn btn-outline-white">.btn-outline-white</button>
    <button type="button" class="btn btn-link-white">.btn-link-white</button>
  </div>
</div>
  `,i={render:z,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Palette complète des variantes disponibles pour les boutons."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Exemple standard du bouton principal."
      }
    }
  },
  args: {
    element: "button",
    variant: "primary",
    size: "default",
    width: "inline",
    withIcon: false,
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderDisabledWithSpinner,
  parameters: {
    controls: {
      disable: true
    },
    // masque le panneau Controls (Canvas)
    docs: {
      controls: {
        disable: true
      },
      // masque aussi le bloc Controls (Docs)
      description: {
        story: "Exemple du bouton disabled avec son spinner d'attente."
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderWithIcon,
  parameters: {
    controls: {
      disable: true
    },
    // masque le panneau Controls (Canvas)
    docs: {
      controls: {
        disable: true
      },
      // masque aussi le bloc Controls (Docs)
      description: {
        story: "Créez des boutons avec une icone et du texte en \`.btn-ico\` et en enrobant le texte dans un \`<span>\`. Les icônes sont généralement à la gauche du texte."
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderIconOnly,
  parameters: {
    controls: {
      exclude: ["variant", "element", "width", "withIcon", "disabled"]
    },
    docs: {
      controls: {
        exclude: ["variant", "element", "width", "withIcon", "disabled"]
      },
      description: {
        story: "Pour des boutons avec seulement une icône, ajoutez la classe \`.btn-ico-only\`. <br>Il sera aussi nécessaire d'ajouter un \`aria-label\` avec la description de l'action du bouton."
      }
    }
  },
  args: {
    size: "default"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderWithDropdown,
  decorators: [Story => \`<div style="min-height: 180px;">\${Story()}</div>\`],
  parameters: {
    controls: {
      exclude: ["variant", "element", "width", "withIcon", "disabled"]
    },
    docs: {
      controls: {
        exclude: ["variant", "element", "width", "withIcon", "disabled"]
      },
      description: {
        story: "Les boutons avec dropdown ne doivent pas contenir d'icône autres que celle qui vient déjà avec la classe \`dropdown-toggle\` ."
      }
    }
  },
  args: {
    size: "default"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderAllVersions,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Palette complète des variantes disponibles pour les boutons."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const W=["Default","DisabledWithSpinner","WithIcon","IconOnly","WithDropdown","AllVersions"];export{i as AllVersions,t as Default,s as DisabledWithSpinner,r as IconOnly,a as WithDropdown,o as WithIcon,W as __namedExportsOrder,D as default};
