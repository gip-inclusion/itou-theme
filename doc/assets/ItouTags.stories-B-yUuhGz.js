import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t={title:`Components/Tags`,decorators:[e=>`<div style="max-width: 800px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Le composant \`.tag\` est utilisé pour indiquer un statut ou un état. Il peut être cliquable et ainsi utilisé comme filtre.

### Anatomie
1. **Icône** (optionnel) - Renforce la compréhension
2. **Label** - Texte du tag
3. **Conteneur** - Fond coloré arrondi, texte en majuscules

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.tag\` | Conteneur principal |
| \`.tag-lg\` | Variante grande taille |
| \`.tag-group\` | Groupe de tags avec espacement automatique |

### Accessibilité
- Si le tag est cliquable (\`<a>\`), s'assurer que le contenu du lien est explicite ou le rendre expliciete avec un \`aria-label\`
- Les icônes décoratives doivent avoir \`aria-hidden="true"\`
`}}},argTypes:{label:{control:`text`,description:`Texte du tag`},variant:{control:{type:`select`},options:[`info`,`important`,`accent-01`],description:`Variante de couleur`},size:{control:{type:`select`},options:[`default`,`lg`],description:`Taille du tag`},withIcon:{control:`boolean`,description:`Affiche une icône`},clickable:{control:`boolean`,description:`Tag cliquable (utilise une balise <a>)`}}},n={info:[`bg-info-lighter`,`text-info`],important:[`bg-important-lighter`,`text-important`],"accent-01":[`bg-accent-01-lighter`,`text-accent-01`]},r=({label:e,variant:t,size:r,withIcon:i,clickable:a})=>{let o=a?`a`:`span`,s=a?` href=""`:``,c=r===`lg`?` tag-lg`:``,[l,u]=n[t]??n.info;return`<${o}${s} class="tag${c} ${l} ${u}">${i?`<i class="ri-check-line ri-xs" aria-hidden="true"></i>`:``}${e}</${o}>`},i={render:r,parameters:{docs:{description:{story:`Tag standard avec couleur info.`}}},args:{label:`Prescripteur`,variant:`info`,size:`default`,withIcon:!1,clickable:!1}},a={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Tag avec icône pour renforcer visuellement le statut.`}}},args:{label:`Éligible`,variant:`info`,size:`default`,withIcon:!0,clickable:!1}},o={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Tag cliquable (balise `<a>`) pour une utilisation en tant que filtre."}}},args:{label:`Filtre actif`,variant:`accent-01`,size:`default`,withIcon:!1,clickable:!0}},s={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Tag grande taille avec la classe `.tag-lg`."}}},args:{label:`Important`,variant:`important`,size:`lg`,withIcon:!1,clickable:!1}},c=()=>`<div class="tag-group">
  <span class="tag bg-info-lighter text-info">info</span>
  <span class="tag bg-info-lighter text-info"><i class="ri-check-line ri-xs" aria-hidden="true"></i>info + ico</span>
  <a href="" class="tag bg-info-lighter text-info">info cliquable</a>
  <a href="" class="tag bg-info-lighter text-info"><i class="ri-check-line ri-xs" aria-hidden="true"></i>info cliquable + ico</a>
</div>
<div class="tag-group">
  <span class="tag bg-important-lighter text-important">important</span>
  <span class="tag bg-important-lighter text-important"><i class="ri-check-line ri-xs" aria-hidden="true"></i>important + ico</span>
  <a href="" class="tag bg-important-lighter text-important">important cliquable</a>
  <a href="" class="tag bg-important-lighter text-important"><i class="ri-check-line ri-xs" aria-hidden="true"></i>important cliquable + ico</a>
</div>
<div class="tag-group">
  <span class="tag bg-accent-01-lighter text-accent-01">accent-01</span>
  <span class="tag bg-accent-01-lighter text-accent-01"><i class="ri-check-line ri-xs" aria-hidden="true"></i>accent-01 + ico</span>
  <a href="" class="tag bg-accent-01-lighter text-accent-01">accent-01 cliquable</a>
  <a href="" class="tag bg-accent-01-lighter text-accent-01"><i class="ri-check-line ri-xs" aria-hidden="true"></i>accent-01 cliquable + ico</a>
</div>`,l={render:c,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Les 3 couleurs disponibles, avec et sans icône, en version statique et cliquable.`}}}},u=()=>`<div class="tag-group">
  <span class="tag bg-info-lighter text-info">Prescripteur</span><span class="tag bg-info-lighter text-info">Orienteur</span><span class="tag bg-info-lighter text-info">Employeur</span><span class="tag bg-important-lighter text-important">Prioritaire</span><span class="tag bg-accent-01-lighter text-accent-01">IAE</span>
</div>`,d={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Groupe de tags avec la classe `.tag-group` qui gère automatiquement les espacements."}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Tag standard avec couleur info."
      }
    }
  },
  args: {
    label: "Prescripteur",
    variant: "info",
    size: "default",
    withIcon: false,
    clickable: false
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
        story: "Tag avec icône pour renforcer visuellement le statut."
      }
    }
  },
  args: {
    label: "Éligible",
    variant: "info",
    size: "default",
    withIcon: true,
    clickable: false
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
        story: "Tag cliquable (balise \`<a>\`) pour une utilisation en tant que filtre."
      }
    }
  },
  args: {
    label: "Filtre actif",
    variant: "accent-01",
    size: "default",
    withIcon: false,
    clickable: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        story: "Tag grande taille avec la classe \`.tag-lg\`."
      }
    }
  },
  args: {
    label: "Important",
    variant: "important",
    size: "lg",
    withIcon: false,
    clickable: false
  }
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderAllVariants,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Les 3 couleurs disponibles, avec et sans icône, en version statique et cliquable."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderTagGroup,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Groupe de tags avec la classe \`.tag-group\` qui gère automatiquement les espacements."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithIcon`,`Clickable`,`Large`,`AllVariants`,`TagGroup`]})))()}p();export{l as AllVariants,o as Clickable,i as Default,s as Large,d as TagGroup,a as WithIcon,f as __namedExportsOrder,t as default};