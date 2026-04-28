const r={title:"Forms/Radio",decorators:[o=>`<div style="max-width: 800px; margin: 0 auto;">${o()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `radio` permet de proposer un choix exclusif au sein d\'un groupe d\'options.\n\n### Anatomie\n1. **Conteneur** - `.form-check` entoure chaque option.\n2. **Contrôle** - `<input class="form-check-input" type="radio">`.\n3. **Libellé** - `<label class="form-check-label">` `<li>`é via `for` / `id`.\n4. **Groupe** - Les options `<li>`ées sont regroupées dans un `<fieldset>` avec un `<legend>`.\n\n### États\n| État | Description |\n|------|-------------|\n| Défaut | Option non sélectionnée |\n| Sélectionné | Option active dans le groupe |\n| Désactivé | Option non interactive |\n| Désactivé sélectionné | Option active mais verrouillée |\n\n### Tailles\n- Taille standard unique dans le thème.\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.form-check` | Conteneur principal d\'une option |\n| `.form-check-input` | Contrôle radio |\n| `.form-check-label` | Libellé associé au contrôle |\n| `.form-text` | Texte d\'aide complémentaire pour le groupe |\n\n### Accessibilité\n- Toujours associer le libellé au contrôle avec `for` et `id`.\n- Les boutons radio d\'un même groupe doivent partager la même valeur de `name`.\n- Grouper les boutons radio `<li>`és dans un `<fieldset>` avec un `<legend>` explicite.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios" target="_blank" rel="noopener noreferrer" class="has-external-link">Radios</a>\n'}}}},a=({helpText:o,disabled:n})=>`
<fieldset>
  <legend>Mode de contact préféré</legend>

  <div class="form-check">
    <input class="form-check-input" type="radio" name="contact-preference" id="radio-email" value="email" checked ${n?"disabled":""}>
    <label class="form-check-label" for="radio-email">E-mail</label>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="radio" name="contact-preference" id="radio-phone" value="phone" ${n?"disabled":""}>
    <label class="form-check-label" for="radio-phone">Téléphone</label>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="radio" name="contact-preference" id="radio-none" value="none" ${n?"disabled":""}>
    <label class="form-check-label" for="radio-none">Je ne souhaite pas être contacté</label>
  </div>

  ${o?'<div class="form-text">Une seule option peut être sélectionnée dans ce groupe.</div>':""}
</fieldset>
  `.trim(),e={render:a,argTypes:{disabled:{control:"boolean",description:"Désactive l'ensemble du groupe radio"},helpText:{control:"boolean",description:"Affiche un texte d'aide sous le groupe"}},parameters:{docs:{description:{story:"Groupe de boutons radio présenté dans un `fieldset` avec `legend`, pour illustrer un choix exclusif accessible."}}},args:{disabled:!1,helpText:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderRadio,
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Désactive l'ensemble du groupe radio"
    },
    helpText: {
      control: "boolean",
      description: "Affiche un texte d'aide sous le groupe"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Groupe de boutons radio présenté dans un \`fieldset\` avec \`legend\`, pour illustrer un choix exclusif accessible."
      }
    }
  },
  args: {
    disabled: false,
    helpText: true
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,r as default};
