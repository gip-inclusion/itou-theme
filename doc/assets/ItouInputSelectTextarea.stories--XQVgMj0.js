const $={title:"Forms/Input Select Textarea",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLes éléments `<input>`, `<textarea>` et `<select>` permettent de créer des contrôles interactifs dans un formulaire web pour la saisie de données.\n\n### Anatomie\n1. **Conteneur de champ** - `.form-group` avec `.form-group-required` pour les champs obligatoires (affiche le marqueur `*`)\n2. **Étiquette** - `<label class="form-label">` associée via `for`/`id`\n3. **Contrôle** - `<input>`, `<textarea>` ou `<select>` avec la classe `.form-control` (ou `.form-select`)\n4. **Texte d\'aide** - `<div class="form-text">` sous le contrôle\n\n### États\n| État | Description |\n|------|-------------|\n| Défaut | Champ saisissable classique |\n| Désactivé | Attribut `disabled` — non interactif, visuellement grisé |\n| Lecture seule | Attribut `readonly` — valeur non modifiable |\n\n### Tailles\n- `.form-control-sm` / `.form-select-sm`\n- Taille par défaut\n- `.form-control-lg` / `.form-select-lg`\n- `.form-control-xl` / `.form-select-xl`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.form-group` | Conteneur principal du champ |\n| `.form-group-required` | Marque le champ comme obligatoire (affiche `*` sur le label) |\n| `.form-label` | Étiquette du champ |\n| `.form-control` | Classe de base pour `<input>` et `<textarea>` |\n| `.form-select` | Classe de base pour `<select>` |\n| `.form-text` | Texte d\'aide sous le champ |\n| `.form-control-sm/lg/xl` | Variantes de taille pour les inputs |\n| `.form-select-sm/lg/xl` | Variantes de taille pour les selects |\n| `.form-control-plaintext` | Valeur affichée comme du texte brut (readonly) |\n\n### Accessibilité\n- Toujours associer un `<label>` via `for`/`id`\n- Ne pas utiliser de `placeholder` , privilégier le texte d\'aide.\n- Pour un champ obligatoire, ajouter `required` sur le contrôle ET `aria-required="true"` si le contexte le nécessite.\n- Utiliser `aria-describedby` pour lier les textes d\'aide au contrôle.\n- Préférer `<fieldset>` + `<legend>` pour regrouper des champs liés.\n\n**Documentation Bootstrap** :\n- <a href="https://getbootstrap.com/docs/5.3/forms/form-control/" target="_blank" rel="noopener noreferrer" class="has-external-link">Form Control</a>\n- <a href="https://getbootstrap.com/docs/5.3/forms/select/" target="_blank" rel="noopener noreferrer" class="has-external-link">Select</a>\n'}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","search","tel","url","file"],description:"Type d'input HTML"},size:{control:{type:"select"},options:["sm","default","lg","xl"],description:"Taille du contrôle : `sm` (32px), défaut (40px), `lg` (48px), `xl` (56px)"},state:{control:{type:"select"},options:["default","disabled","readonly"],description:"État du champ de saisie"},required:{control:"boolean",description:"Marque le champ comme obligatoire avec `.form-group-required`"},helpText:{control:"boolean",description:"Affiche un texte d'aide sous le champ avec `.form-text`"}}},v=(e,r="form-control")=>e==="default"?"":` ${r}-${e}`,g=e=>e==="disabled"?" disabled":e==="readonly"?" readonly":"",h=({type:e,size:r,state:a,required:l,helpText:t})=>{const s="story-input",o=l?" form-group-required":"",n=`form-control${v(r)}`,i=g(a),c=t?`<div id="${s}-help" class="form-text">Texte d'aide pour ce champ.</div>`:"",y=t?` aria-describedby="${s}-help"`:"";return`
<div class="form-group${o}">
  <label class="form-label" for="${s}">Libellé du champ</label>
  <input
    type="${e}"
    id="${s}"
    class="${n}"
    ${l?"required":""}
    ${y}
    ${i}
  >
  ${c}
</div>
  `.trim()},d={render:h,parameters:{docs:{description:{story:"Champ `<input>` basique. Jouez avec les contrôles pour explorer les types, tailles et états disponibles."}}},args:{type:"text",size:"default",state:"default",required:!1,helpText:!0}},p={render:()=>`
<div class="d-flex flex-column gap-4">

  <div class="form-group">
    <label class="form-label" for="state-default">Défaut</label>
    <input type="text" id="state-default" class="form-control">
    <div class="form-text">Texte d'aide optionnel.</div>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-disabled">Désactivé</label>
    <input type="text" id="state-disabled" class="form-control" disabled>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-readonly">Lecture seule</label>
    <input type="text" id="state-readonly" class="form-control" value="Valeur en lecture seule" readonly>
  </div>

  <div class="form-group form-group-required">
    <label class="form-label" for="state-required">Obligatoire</label>
    <input type="text" id="state-required" class="form-control" required>
  </div>

</div>
  `.trim(),parameters:{controls:{disable:!0},docs:{description:{story:"Aperçu de tous les états disponibles : défaut, désactivé, lecture seule et obligatoire."}}}},u={render:()=>`
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="size-sm">Petit — <code>form-control-sm</code></label>
    <input type="text" id="size-sm" class="form-control form-control-sm">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-default">Taille par défaut</label>
    <input type="text" id="size-default" class="form-control">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-lg">Grand — <code>form-control-lg</code></label>
    <input type="text" id="size-lg" class="form-control form-control-lg">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-xl">Extra-grand — <code>form-control-xl</code></label>
    <input type="text" id="size-xl" class="form-control form-control-xl">
  </div>

</div>
  `.trim(),parameters:{controls:{disable:!0},docs:{description:{story:"Les quatre tailles disponibles pour les champs de saisie : `sm`, défaut, `lg` et `xl`."}}}},q=({size:e,state:r,required:a,helpText:l})=>{const t="story-textarea",s=a?" form-group-required":"",o=`form-control${v(e)}`,n=g(r),i=l?`<div id="${t}-help" class="form-text">Texte d'aide pour ce champ.</div>`:"",c=l?` aria-describedby="${t}-help"`:"";return`
<div class="form-group${s}">
  <label class="form-label" for="${t}">Contenu du message</label>
  <textarea
    id="${t}"
    class="${o}"
    rows="4"
    ${a?"required":""}
    ${c}
    ${n}
  ></textarea>
  ${i}
</div>
  `.trim()},m={render:q,parameters:{docs:{description:{story:'Champ `<textarea>` multi-lignes. Partage les mêmes classes d\'état et de taille que les `<input>`. Ajouter `data-it-expandable="true"` pour un redimensionnement automatique à la saisie.'}}},argTypes:{type:{table:{disable:!0}}},args:{size:"default",state:"default",required:!1,helpText:!0}},f={render:()=>`
<div class="form-group">
  <label class="form-label" for="textarea-expandable">Textarea auto-extensible <code>data-it-expandable</code></label>
  <textarea
    id="textarea-expandable"
    class="form-control"
    rows="3"
    data-it-expandable="true"
  ></textarea>
  <div class="form-text">Le champ s'étend verticalement au fur et à mesure de la saisie.</div>
</div>
  `.trim(),parameters:{controls:{disable:!0},docs:{description:{story:"Textarea avec l'attribut `data-it-expandable=\"true\"` : la hauteur s'adapte automatiquement au contenu saisi."}}}},T=({size:e,state:r,required:a,helpText:l})=>{const t="story-select",s=a?" form-group-required":"",o=`form-select${v(e,"form-select")}`,n=g(r),i=l?`<div id="${t}-help" class="form-text">Texte d'aide pour ce champ.</div>`:"",c=l?` aria-describedby="${t}-help"`:"";return`
<div class="form-group${s}">
  <label class="form-label" for="${t}">Choisissez une option</label>
  <select
    id="${t}"
    class="${o}"
    ${a?"required":""}
    ${c}
    ${n}
  >
    <option value="">— Sélectionnez —</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  ${i}
</div>
  `.trim()},b={render:T,parameters:{docs:{description:{story:"Champ `<select>` avec la classe `.form-select`. Supporte les mêmes états et tailles que les inputs."}}},argTypes:{type:{table:{disable:!0}}},args:{size:"default",state:"default",required:!1,helpText:!0}},x={render:()=>`
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="select-sm">Petit — <code>form-select-sm</code></label>
    <select id="select-sm" class="form-select form-select-sm">
      <option>form-select-sm (32px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-default">Taille par défaut</label>
    <select id="select-default" class="form-select">
      <option>form-select (40px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-lg">Grand — <code>form-select-lg</code></label>
    <select id="select-lg" class="form-select form-select-lg">
      <option>form-select-lg (48px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-xl">Extra-grand — <code>form-select-xl</code></label>
    <select id="select-xl" class="form-select form-select-xl">
      <option>form-select-xl (56px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

</div>
  `.trim(),parameters:{controls:{disable:!0},docs:{description:{story:"Les quatre tailles disponibles pour les selects : `sm`, défaut, `lg` et `xl`."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderInput,
  parameters: {
    docs: {
      description: {
        story: "Champ \`<input>\` basique. Jouez avec les contrôles pour explorer les types, tailles et états disponibles."
      }
    }
  },
  args: {
    type: "text",
    size: "default",
    state: "default",
    required: false,
    helpText: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-4">

  <div class="form-group">
    <label class="form-label" for="state-default">Défaut</label>
    <input type="text" id="state-default" class="form-control">
    <div class="form-text">Texte d'aide optionnel.</div>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-disabled">Désactivé</label>
    <input type="text" id="state-disabled" class="form-control" disabled>
  </div>

  <div class="form-group">
    <label class="form-label" for="state-readonly">Lecture seule</label>
    <input type="text" id="state-readonly" class="form-control" value="Valeur en lecture seule" readonly>
  </div>

  <div class="form-group form-group-required">
    <label class="form-label" for="state-required">Obligatoire</label>
    <input type="text" id="state-required" class="form-control" required>
  </div>

</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Aperçu de tous les états disponibles : défaut, désactivé, lecture seule et obligatoire."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="size-sm">Petit — <code>form-control-sm</code></label>
    <input type="text" id="size-sm" class="form-control form-control-sm">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-default">Taille par défaut</label>
    <input type="text" id="size-default" class="form-control">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-lg">Grand — <code>form-control-lg</code></label>
    <input type="text" id="size-lg" class="form-control form-control-lg">
  </div>

  <div class="form-group">
    <label class="form-label" for="size-xl">Extra-grand — <code>form-control-xl</code></label>
    <input type="text" id="size-xl" class="form-control form-control-xl">
  </div>

</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Les quatre tailles disponibles pour les champs de saisie : \`sm\`, défaut, \`lg\` et \`xl\`."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: renderTextarea,
  parameters: {
    docs: {
      description: {
        story: "Champ \`<textarea>\` multi-lignes. Partage les mêmes classes d'état et de taille que les \`<input>\`. Ajouter \`data-it-expandable=\\"true\\"\` pour un redimensionnement automatique à la saisie."
      }
    }
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {
    size: "default",
    state: "default",
    required: false,
    helpText: true
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="form-group">
  <label class="form-label" for="textarea-expandable">Textarea auto-extensible <code>data-it-expandable</code></label>
  <textarea
    id="textarea-expandable"
    class="form-control"
    rows="3"
    data-it-expandable="true"
  ></textarea>
  <div class="form-text">Le champ s'étend verticalement au fur et à mesure de la saisie.</div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Textarea avec l'attribut \`data-it-expandable=\\"true\\"\` : la hauteur s'adapte automatiquement au contenu saisi."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: renderSelect,
  parameters: {
    docs: {
      description: {
        story: "Champ \`<select>\` avec la classe \`.form-select\`. Supporte les mêmes états et tailles que les inputs."
      }
    }
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {
    size: "default",
    state: "default",
    required: false,
    helpText: true
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-3">

  <div class="form-group">
    <label class="form-label" for="select-sm">Petit — <code>form-select-sm</code></label>
    <select id="select-sm" class="form-select form-select-sm">
      <option>form-select-sm (32px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-default">Taille par défaut</label>
    <select id="select-default" class="form-select">
      <option>form-select (40px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-lg">Grand — <code>form-select-lg</code></label>
    <select id="select-lg" class="form-select form-select-lg">
      <option>form-select-lg (48px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label" for="select-xl">Extra-grand — <code>form-select-xl</code></label>
    <select id="select-xl" class="form-select form-select-xl">
      <option>form-select-xl (56px)</option>
      <option value="1">Option 1</option>
    </select>
  </div>

</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Les quatre tailles disponibles pour les selects : \`sm\`, défaut, \`lg\` et \`xl\`."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const z=["Input","AllStates","AllSizes","Textarea","TextareaExpandable","Select","SelectSizes"];export{u as AllSizes,p as AllStates,d as Input,b as Select,x as SelectSizes,m as Textarea,f as TextareaExpandable,z as __namedExportsOrder,$ as default};
