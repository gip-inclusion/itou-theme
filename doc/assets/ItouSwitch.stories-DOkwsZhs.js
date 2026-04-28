const p={title:"Forms/Switch",decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `switch` permet de représenter un état binaire activé / désactivé sous forme d\'interrupteur.\n\n### Anatomie\n1. **Conteneur** - `.form-check.form-switch` entoure le composant.\n2. **Contrôle** - `<input class="form-check-input" type="checkbox" role="switch">`.\n3. **Libellé** - `<label class="form-check-label">` `<li>`é via `for` / `id`.\n4. **État textuel** (optionnel) - Variante `.has-state-label` avec `data-it-state-label-off` et `data-it-state-label-on`.\n\n### États\n| État | Description |\n|------|-------------|\n| Défaut | Interrupteur non activé |\n| Activé | Interrupteur actif |\n| Désactivé | Interrupteur non interactif |\n| Désactivé activé | Interrupteur actif mais verrouillé |\n\n### Tailles\n- Taille standard avec `.form-switch`\n- Grande taille avec `.form-switch-lg`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.form-check` | Conteneur principal |\n| `.form-switch` | Active le rendu switch |\n| `.form-check-input` | Contrôle checkbox stylisé en switch |\n| `.form-check-label` | Libellé associé |\n| `.form-switch-lg` | Variante grand format |\n| `.form-check-reverse` | Place le switch à droite du libellé |\n| `.has-state-label` | Affiche un libellé dynamique selon l\'état |\n\n### Accessibilité\n- Ajouter `role="switch"` sur le contrôle pour exposer correctement le comportement.\n- Toujours associer le libellé au contrôle avec `for` et `id`.\n- Si le switch n\'a pas de texte visible suffisant, compléter avec un libellé explicite.\n- Les libellés d\'état visuels ne remplacent pas le nom accessible du contrôle.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches" target="_blank" rel="noopener noreferrer" class="has-external-link">Switches</a>\n'}}}},f=e=>e==="lg"?" form-switch-lg":"",b=({checked:e,disabled:r,reverse:i,size:l,withStateLabel:s})=>{const c="story-switch",o=s?" has-state-label":"",n=i?" form-check-reverse":"",d="Recevoir les notifications",h=s&&l==="default";return`
<div class="form-check form-switch${f(l)}${n}${o}">
  <input
    class="form-check-input"
    type="checkbox"
    role="switch"
    id="${c}"
    ${e?"checked":""}
    ${r?"disabled":""}
  >
  <label
    class="form-check-label"
    for="${c}"
    ${s?'data-it-state-label-off="Désactivé" data-it-state-label-on="Activé"':""}
  >
    <span class="${h?"visually-hidden":""}">${d}</span>
  </label>
</div>
  `.trim()},t={render:b,argTypes:{checked:{control:"boolean",description:"Active le switch"},disabled:{control:"boolean",description:"Désactive l'interaction"},reverse:{control:"boolean",description:"Place le switch à droite avec `.form-check-reverse`"},size:{control:{type:"select"},options:["default","lg"],description:"Taille du switch : standard ou grande avec `.form-switch-lg`"},withStateLabel:{control:"boolean",description:"Affiche les libellés d'état avec `.has-state-label`"}},parameters:{docs:{description:{story:"Switch paramétrable pour explorer les états activé, désactivé, inversé, grand format et libellés d'état."}}},args:{checked:!1,disabled:!1,reverse:!1,size:"default",withStateLabel:!1}},a={render:()=>`
<div class="d-flex flex-column gap-4">
  <div class="form-check form-switch has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-default">
    <label class="form-check-label" for="switch-state-label-default" data-it-state-label-off="Fermé" data-it-state-label-on="Ouvert"></label>
  </div>

  <div class="form-check form-switch form-switch-lg has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-lg">
    <label class="form-check-label" for="switch-state-label-lg" data-it-state-label-off="Désactivé" data-it-state-label-on="Activé">Notifications de compte</label>
  </div>
</div>
  `.trim(),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante `.has-state-label` pour afficher un libellé visuel dépendant de l'état du switch, en standard ou en grand format."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderSwitch,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Active le switch"
    },
    disabled: {
      control: "boolean",
      description: "Désactive l'interaction"
    },
    reverse: {
      control: "boolean",
      description: "Place le switch à droite avec \`.form-check-reverse\`"
    },
    size: {
      control: {
        type: "select"
      },
      options: ["default", "lg"],
      description: "Taille du switch : standard ou grande avec \`.form-switch-lg\`"
    },
    withStateLabel: {
      control: "boolean",
      description: "Affiche les libellés d'état avec \`.has-state-label\`"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Switch paramétrable pour explorer les états activé, désactivé, inversé, grand format et libellés d'état."
      }
    }
  },
  args: {
    checked: false,
    disabled: false,
    reverse: false,
    size: "default",
    withStateLabel: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-4">
  <div class="form-check form-switch has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-default">
    <label class="form-check-label" for="switch-state-label-default" data-it-state-label-off="Fermé" data-it-state-label-on="Ouvert"></label>
  </div>

  <div class="form-check form-switch form-switch-lg has-state-label">
    <input class="form-check-input" type="checkbox" role="switch" id="switch-state-label-lg">
    <label class="form-check-label" for="switch-state-label-lg" data-it-state-label-off="Désactivé" data-it-state-label-on="Activé">Notifications de compte</label>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante \`.has-state-label\` pour afficher un libellé visuel dépendant de l'état du switch, en standard ou en grand format."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","StateLabel"];export{t as Default,a as StateLabel,u as __namedExportsOrder,p as default};
