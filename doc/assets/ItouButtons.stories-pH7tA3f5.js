import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t={title:`Forms/Buttons`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'L’élément `.btn` représente un bouton ou lien cliquable.\n\n### Anatomie\nUn bouton peut contenir :\n\n1. **Conteneur bouton/lien**\n   Élément HTML `<button>` (recommandé) ou `<a>` avec la classe `.btn`.\n\n2. **Style visuel (variant)**\n   Une classe de variante : `.btn-primary`, `.btn-secondary`, `.btn-outline-primary`, etc.\n\n3. **Taille (optionnelle)**\n   `.btn-sm` ou `.btn-lg`.\n\n4. **Largeur (optionnelle)**\n   `.btn-block` pour occuper toute la largeur disponible.\n\n5. **Icône (optionnelle)**\n   Ajouter `.btn-ico` sur le bouton, avec une icône décorative `aria-hidden="true"` et un texte dans un `<span>`.\n\n6. **État désactivé (optionnel)**\n   Attribut `disabled` sur `<button>` (et classe `.disabled` pour `<a>` si besoin visuel).\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.btn` | Classe de base obligatoire |\n| `.btn-{variant}` | Variante visuelle du bouton |\n| `.btn-sm` / `.btn-lg` | Tailles alternatives |\n| `.btn-block` | Bouton pleine largeur |\n| `.btn-ico` | Bouton avec icône + texte |\n| `.btn-ico-only` | Bouton icône seule (avec `aria-label` obligatoire) |\n\n### Accessibilité\n- Les icônes doivent posséder `aria-hidden="true"` si elles sont décoratives.\n- Pour un bouton icône seule, ajouter un `aria-label` explicite.\n- Si le libellé visible est trop court, ajouter un `aria-label` plus descriptif.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noopener noreferrer" class="has-external-link">Buttons</a>\n'}}},argTypes:{element:{control:{type:`select`},options:[`button`,`link`],description:`Type d'élément HTML rendu : bouton natif ou lien stylisé`},variant:{control:{type:`select`},options:[`primary`,`outline-primary`,`secondary`,`success`,`danger`,`link`,`white`,`outline-white`,`link-white`],description:`Variante visuelle du bouton`},size:{control:{type:`select`},options:[`default`,`sm`,`lg`],description:`Taille du bouton : standard, petit ou grand`},width:{control:{type:`select`},options:[`inline`,`block`],description:"Largeur du bouton : inline ou pleine largeur avec `.btn-block`"},withIcon:{control:`boolean`,description:`Affiche une icône décorative à gauche du libellé`},disabled:{control:`boolean`,description:`Désactive l'interaction du bouton (ou applique l'état visuel disabled sur un lien)`}}},n=({element:e,variant:t,size:n,width:r,withIcon:i,disabled:a})=>{let o=[`btn`,`btn-${t}`,n==="default"?``:`btn-${n}`,r===`inline`?``:`btn-block`,i?`btn-ico`:``].filter(Boolean).join(` `),s=a?` disabled`:``,c=[`white`,`outline-white`,`link-white`].includes(t)?`bg-button`:``,l=i?`<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>button</span>`:`button`,u=i?`<i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i><span>link</span>`:`link`,d=`<div class="p-3 ${c}"><button type="button" class="${o}"${s}>${l}</button></div>`,f=`<div class="p-3 ${c}"><a href="" class="${o}${a?` disabled`:``}">${u}</a></div>`;return e===`button`?d:f},r={render:n,parameters:{docs:{description:{story:`Exemple standard du bouton principal.`}}},args:{element:`button`,variant:`primary`,size:`default`,width:`inline`,withIcon:!1,disabled:!1}},i=()=>`
<button type="button" class="btn btn-ico btn-primary" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">button disabled + spinner</span>
</button>
  `,a={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Exemple du bouton disabled avec son spinner d'attente.`}}},args:{}},o=()=>`
<button class="btn btn-ico btn-primary">
  <i class="ri-zoom-in-line font-weight-medium" aria-hidden="true"></i>
  <span>.button</span>
</button>
  `,s={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Créez des boutons avec une icône et du texte en `.btn-ico` et en enrobant le texte dans un `<span>`. Les icônes sont généralement à la gauche du texte."}}},args:{}},c=({size:e})=>`
  <button class="btn ${e==="default"?``:`btn-${e}`} btn-ico-only btn-primary" aria-label="ici le label A11Y du bouton">
    <i class="ri-eye-2-line font-weight-medium"></i>
  </button>
  `,l={render:c,parameters:{controls:{exclude:[`variant`,`element`,`width`,`withIcon`,`disabled`]},docs:{controls:{exclude:[`variant`,`element`,`width`,`withIcon`,`disabled`]},description:{story:"Pour des boutons avec seulement une icône, ajoutez la classe `.btn-ico-only`. <br>Il sera aussi nécessaire d'ajouter un `aria-label` avec la description de l'action du bouton."}}},args:{size:`default`}},u=({size:e})=>`
  <div class="dropdown">
    <button class="btn ${e==="default"?``:`btn-${e}`} btn-secondary btn-ico dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="ri-download-line ri-sm fw-medium" aria-hidden="true"></i>
      <span>Exporter</spa>
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
  `,d={render:u,decorators:[e=>`<div style="min-height: 180px;">${e()}</div>`],parameters:{controls:{exclude:[`variant`,`element`,`width`,`withIcon`,`disabled`]},docs:{controls:{exclude:[`variant`,`element`,`width`,`withIcon`,`disabled`]},description:{story:"Les boutons dropdown contiennent l'icône avec la classe `dropdown-toggle` ."}}},args:{size:`default`}},f=()=>`
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
  `,p={render:f,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Palette complète des variantes disponibles pour les boutons.`}}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        story: "Créez des boutons avec une icône et du texte en \`.btn-ico\` et en enrobant le texte dans un \`<span>\`. Les icônes sont généralement à la gauche du texte."
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        story: "Les boutons dropdown contiennent l'icône avec la classe \`dropdown-toggle\` ."
      }
    }
  },
  args: {
    size: "default"
  }
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`DisabledWithSpinner`,`WithIcon`,`IconOnly`,`WithDropdown`,`AllVersions`]})))()}h();export{p as AllVersions,r as Default,a as DisabledWithSpinner,l as IconOnly,d as WithDropdown,s as WithIcon,m as __namedExportsOrder,t as default};