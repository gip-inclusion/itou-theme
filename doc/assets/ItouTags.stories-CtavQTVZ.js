const T={title:"Components/Tags",decorators:[o=>`<div style="max-width: 800px; margin: 0 auto;">${o()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
`}}},argTypes:{label:{control:"text",description:"Texte du tag"},variant:{control:{type:"select"},options:["info","important","accent-01"],description:"Variante de couleur"},size:{control:{type:"select"},options:["default","lg"],description:"Taille du tag"},withIcon:{control:"boolean",description:"Affiche une icône"},clickable:{control:"boolean",description:"Tag cliquable (utilise une balise <a>)"}}},u={info:["bg-info-lighter","text-info"],important:["bg-important-lighter","text-important"],"accent-01":["bg-accent-01-lighter","text-accent-01"]},i=({label:o,variant:p,size:d,withIcon:g,clickable:c})=>{const l=c?"a":"span",b=c?' href=""':"",m=d==="lg"?" tag-lg":"",[f,h]=u[p]??u.info;return`<${l}${b} class="tag${m} ${f} ${h}">${g?'<i class="ri-check-line ri-xs" aria-hidden="true"></i>':""}${o}</${l}>`},e={render:i,parameters:{docs:{description:{story:"Tag standard avec couleur info."}}},args:{label:"Prescripteur",variant:"info",size:"default",withIcon:!1,clickable:!1}},a={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Tag avec icône pour renforcer visuellement le statut."}}},args:{label:"Éligible",variant:"info",size:"default",withIcon:!0,clickable:!1}},t={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Tag cliquable (balise `<a>`) pour une utilisation en tant que filtre."}}},args:{label:"Filtre actif",variant:"accent-01",size:"default",withIcon:!1,clickable:!0}},n={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Tag grande taille avec la classe `.tag-lg`."}}},args:{label:"Important",variant:"important",size:"lg",withIcon:!1,clickable:!1}},x=()=>`
<div class="tag-group">
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
</div>`.trim(),r={render:x,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Les 3 couleurs disponibles, avec et sans icône, en version statique et cliquable."}}}},v=()=>`
<div class="tag-group">
  <span class="tag bg-info-lighter text-info">Prescripteur</span><span class="tag bg-info-lighter text-info">Orienteur</span><span class="tag bg-info-lighter text-info">Employeur</span><span class="tag bg-important-lighter text-important">Prioritaire</span><span class="tag bg-accent-01-lighter text-accent-01">IAE</span>
</div>`.trim(),s={render:v,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Groupe de tags avec la classe `.tag-group` qui gère automatiquement les espacements."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["Default","WithIcon","Clickable","Large","AllVariants","TagGroup"];export{r as AllVariants,t as Clickable,e as Default,n as Large,s as TagGroup,a as WithIcon,y as __namedExportsOrder,T as default};
