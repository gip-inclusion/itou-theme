const b={title:"Components/Collapse",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `.collapse` permet d\'afficher/masquer du contenu a la demande via Bootstrap.\nLe thème itou ajoute la classe utilitaire `.has-collapse-caret` pour afficher un chevron qui change d\'etat selon `aria-expanded`.\n\n### Anatomie\n1. **Déclencheur** - `<button>` (recommandé) ou `<a role="button">` avec `data-bs-toggle="collapse"`\n2. **Cible** - Bloc `<div class="collapse">` associe via `id`\n3. **Etat** - `aria-expanded` et classes dynamiques appliquees par Bootstrap\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.collapse` | Contenu masque par défaut |\n| `.collapsing` | Etat transitoire pendant l\'animation |\n| `.collapse.show` | Contenu visible |\n| `.has-collapse-caret` | Chevron itou auto (ferme/ouvert) |\n\n### Accessibilité\n- Associer le déclencheur et le panneau via `aria-controls` et `id`.\n- Laisser Bootstrap maintenir `aria-expanded` sur le déclencheur.\n- Sur un lien, ajouter `role="button"` pour expliciter l\'intention.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/collapse/#how-it-works" target="_blank" rel="noopener noreferrer" class="has-external-link">Collapse</a>\n'}}},argTypes:{triggerType:{control:{type:"select"},options:["button","link"],description:"Type de déclencheur utilise pour ouvrir/fermer le panneau"}}},p=({triggerType:e="button",withCaret:o=!1,caretPosition:l="inline",defaultOpen:c=!1})=>{const t=`collapse-${Math.random().toString(36).slice(2,10)}`,a=["fw-bold"];e==="link"&&a.push("text-decoration-none"),o&&(a.push("has-collapse-caret"),l==="right"&&a.push("d-flex","justify-content-between"));const u=c?"collapse show mt-3":"collapse mt-3";return`
    <p>${e==="button"?`<button
          type="button"
          class="btn btn-outline-primary ${a.join(" ")}"
          data-bs-toggle="collapse"
          data-bs-target="#${t}"
          aria-expanded="${c}"
          aria-controls="${t}"
        >
          ${o&&l==="right"?"Button with data-bs-target on right":"Button with data-bs-target"}
        </button>`:`<a
          class="btn btn-outline-primary ${a.join(" ")}"
          data-bs-toggle="collapse"
          href="#${t}"
          role="button"
          aria-expanded="${c}"
          aria-controls="${t}"
        >
          ${o&&l==="right"?"Lien avec caret à droite":o?"Link with has-collapse-caret":"Link with href"}
        </a>`}</p>
    <div class="${u}" id="${t}">
      <p class="mb-0">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </p>
    </div>
  `},d=()=>{const e=`collapse-showmore-${Math.random().toString(36).slice(2,10)}`;return`
    <blockquote class="blockquote mb-0">
      <div class="collapse show ${e} has-no-transition">
        <p class="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente libero laboriosam veniam doloribus, quos expedita.
        </p>
        <button
          class="btn-link d-inline-block mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".${e}"
          aria-expanded="false"
          aria-controls="${e}"
        >
          Voir +
        </button>
      </div>
      <div class="collapse ${e} has-no-transition">
        <p class="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente libero laboriosam veniam doloribus, quos expedita.
        </p>
        <p class="mb-0">
          Inventore neque placeat eos libero aliquam assumenda exercitationem sunt, molestiae soluta architecto, quis odio veniam hic eaque explicabo tempore! Laborum, accusamus facilis.
        </p>
      </div>
    </blockquote>
  `},r={render:p,args:{triggerType:"button"},parameters:{docs:{description:{story:"Exemple de base configurable avec bouton ou lien, et panneau `collapse` associe."}}}},s={render:p,args:{triggerType:"link",withCaret:!0,caretPosition:"inline",defaultOpen:!1},parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou avec `.has-collapse-caret` en position inline (caret juste apres le texte)."}}}},n={render:p,args:{triggerType:"link",withCaret:!0,caretPosition:"right",defaultOpen:!1},parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou avec `.d-flex.justify-content-between.has-collapse-caret` pour aligner le caret à droite."}}}},i={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Pattern `show more` : un extrait est visible par défaut, puis la version complète est affichee apres interaction."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    triggerType: "button"
  },
  parameters: {
    docs: {
      description: {
        story: "Exemple de base configurable avec bouton ou lien, et panneau \`collapse\` associe."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    triggerType: "link",
    withCaret: true,
    caretPosition: "inline",
    defaultOpen: false
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou avec \`.has-collapse-caret\` en position inline (caret juste apres le texte)."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    triggerType: "link",
    withCaret: true,
    caretPosition: "right",
    defaultOpen: false
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou avec \`.d-flex.justify-content-between.has-collapse-caret\` pour aligner le caret à droite."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderShowMore,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Pattern \`show more\` : un extrait est visible par défaut, puis la version complète est affichee apres interaction."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const h=["Default","WithCaret","WithCaretRight","ShowMore"];export{r as Default,i as ShowMore,s as WithCaret,n as WithCaretRight,h as __namedExportsOrder,b as default};
