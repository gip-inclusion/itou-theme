import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i;function a(){return(a=e((()=>{t={title:`Forms/Checkbox`,decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Le composant \`checkbox\` permet de proposer un choix binaire indépendant dans un formulaire.

### Anatomie
1. **Conteneur** - \`.form-check\` entoure l'option.
2. **Contrôle** - \`<input class="form-check-input" type="checkbox">\`.
3. **Libellé** - \`<label class="form-check-label">\` \`<li>\`é via \`for\` / \`id\`.
4. **Texte d'aide** (optionnel) - \`<div class="form-text">\` après le libellé.

### États
| État | Description |
|------|-------------|
| Défaut | Option non sélectionnée |
| Coché | Option active |
| Désactivé | Option non interactive |
| Désactivé coché | Option active mais verrouillée |

### Tailles
- Taille standard unique dans le thème.

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.form-check\` | Conteneur principal d'une option |
| \`.form-check-input\` | Contrôle checkbox |
| \`.form-check-label\` | Libellé associé au contrôle |
| \`.form-check-reverse\` | Place la case à droite du libellé |
| \`.form-text\` | Texte d'aide complémentaire |

### Accessibilité
- Toujours associer le libellé au contrôle avec \`for\` et \`id\`.
- Ne pas utiliser la seule apparence visuelle pour transmettre l'état coché.
- Si plusieurs checkbox forment un ensemble logique, les regrouper dans un \`<fieldset>\` avec un \`<legend>\`.

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks" target="_blank" rel="noopener noreferrer" class="has-external-link">Checks</a>
`}}}},n=({checked:e,disabled:t,reverse:n})=>{let r=`story-checkbox`;return`
<div class="form-check${n?` form-check-reverse`:``}">
  <input
    class="form-check-input"
    type="checkbox"
    value="newsletter"
    id="${r}"
    ${e?`checked`:``}
    ${t?`disabled`:``}
  >
  <label class="form-check-label" for="${r}">
    Recevoir les actualités du service
  </label>
</div>
  `.trim()},r={render:n,argTypes:{checked:{control:`boolean`,description:`Coche la case`},disabled:{control:`boolean`,description:`Désactive l'interaction`},reverse:{control:`boolean`,description:"Place la case à droite avec `.form-check-reverse`"}},parameters:{docs:{description:{story:`Checkbox simple avec options de démonstration pour l'état coché, désactivé, inversé et le texte d'aide.`}}},args:{checked:!1,disabled:!1,reverse:!1}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderCheckbox,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Coche la case"
    },
    disabled: {
      control: "boolean",
      description: "Désactive l'interaction"
    },
    reverse: {
      control: "boolean",
      description: "Place la case à droite avec \`.form-check-reverse\`"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox simple avec options de démonstration pour l'état coché, désactivé, inversé et le texte d'aide."
      }
    }
  },
  args: {
    checked: false,
    disabled: false,
    reverse: false
  }
}`,...r.parameters?.docs?.source}}},i=[`Default`]})))()}a();export{r as Default,i as __namedExportsOrder,t as default};