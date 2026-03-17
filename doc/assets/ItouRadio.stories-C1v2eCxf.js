const r={title:"Forms/Radio",decorators:[o=>`<div style="max-width: 800px; margin: 0 auto;">${o()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`radio\` permet de proposer un choix exclusif au sein d'un groupe d'options.

### Anatomie
1. **Conteneur** - \`.form-check\` entoure chaque option.
2. **Contrôle** - \`<input class="form-check-input" type="radio">\`.
3. **Libellé** - \`<label class="form-check-label">\` lié via \`for\` / \`id\`.
4. **Groupe** - Les options liées sont regroupées dans un \`<fieldset>\` avec un \`<legend>\`.

### États
| État | Description |
|------|-------------|
| Défaut | Option non sélectionnée |
| Sélectionné | Option active dans le groupe |
| Désactivé | Option non interactive |
| Désactivé sélectionné | Option active mais verrouillée |

### Tailles
- Taille standard unique dans le thème.

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.form-check\` | Conteneur principal d'une option |
| \`.form-check-input\` | Contrôle radio |
| \`.form-check-label\` | Libellé associé au contrôle |
| \`.form-text\` | Texte d'aide complémentaire pour le groupe |

### Accessibilité
- Toujours associer le libellé au contrôle avec \`for\` et \`id\`.
- Les boutons radio d'un même groupe doivent partager la même valeur de \`name\`.
- Grouper les boutons radio liés dans un \`<fieldset>\` avec un \`<legend>\` explicite.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios" target="_blank" rel="noopener noreferrer" class="has-external-link">Radios</a>
`}}}},a=({helpText:o,disabled:n})=>`
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
