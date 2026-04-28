const g=["An item","A second item","A third item"],y={title:"Components/List group",decorators:[s=>`<div style="max-width: 1000px; margin: 0 auto;">${s()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `.list-group` est un composant flexible pour afficher une serie de contenus.\nLe thème itou ajoute des variantes supplementaires: `.list-group-sm`, `.list-group-link`, `.list-group-collapse` et `.list-group-form`.\n\n### Anatomie\n1. **Zone titre** (optionnelle) - Intitule principal de l\'item\n2. **Badge principal** (optionnel) - Statut ou volume associe\n3. **Conteneur** - Element `<li class="list-group-item">` ou lien actionnable\n4. **Badges secondaires** (optionnels) - Meta-informations (contrat, duree, etc.)\n5. **Icone** (optionnelle) - Renforce la compréhension\n6. **Informations secondaires** (optionnelles) - Localisation, details contextuels\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.list-group` | Groupe de liste de base |\n| `.list-group-item` | Element de liste |\n| `.list-group-sm` | Variante compacte (padding reduit) |\n| `.list-group-flush` | Variante sans bordures externes |\n| `.list-group-item-action` | Item actionnable (hover/focus/active) |\n| `.list-group-link` | Variante itou avec lien global et chevron |\n| `.list-group-collapse` | Variante itou avec sous-contenu repliable |\n| `.list-group-form` | Variante itou pour un rendu proche des champs de formulaire |\n\n### Accessibilité\n- Utiliser `aria-current="true"` sur l\'item actif des listes de navigation.\n- Pour les liens desactives, ajouter `.disabled` et `aria-disabled="true"`.\n- En version collapse, relier le bouton et le panneau via `aria-controls` et `id`.\n- En version lien global, conserver un libellé de lien explicite (ou un `aria-label` si nécessaire).\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/list-group/#basic-example" target="_blank" rel="noopener noreferrer" class="has-external-link">List group</a>\n'}}},argTypes:{size:{control:{type:"select"},options:["default","sm"],description:"Taille de la liste"},flush:{control:"boolean",description:"Supprime les bordures externes via `.list-group-flush`"},actionable:{control:"boolean",description:"Utilise des liens avec `.list-group-item-action`"},activeIndex:{control:{type:"select"},options:[-1,0,1,2],description:"Index de l'item actif (-1 pour aucun)"}}},k=({size:s,flush:e,actionable:h,activeIndex:d})=>{const t=["list-group"];if(s==="sm"&&t.push("list-group-sm"),e&&t.push("list-group-flush"),h){const c=g.map((p,a)=>`<a href=""${a===d?' class="list-group-item list-group-item-action active" aria-current="true"':' class="list-group-item list-group-item-action"'}>${p}</a>`).join(`
`);return`<div class="${t.join(" ")}">
${c}
</div>`}const f=g.map((c,p)=>{const a=p===d,u=["list-group-item"],m=a?' aria-current="true"':"";return a&&u.push("active"),`<li class="${u.join(" ")}"${m}>${c}</li>`}).join(`
`);return`<ul class="${t.join(" ")}">
${f}
</ul>`},v=()=>`
<ul class="list-group list-group-flush list-group-link">
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Preparateur/preparatrice de commande</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Le Bouscat - 33</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Charge(e) d'affaires commerciales et marketing operationnel</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Beychac-et-Caillau - 72</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div class="d-flex flex-column flex-lg-row">
      <span class="d-flex align-items-center">
        <i class="ri-checkbox-blank-circle-fill ri-xs me-2 text-success" aria-hidden="true"></i>
        <a href="" class="fw-bold text-decoration-none stretched-link">Preparateur/preparatrice de commande</a>
      </span>
      <span class="fs-sm mt-1 mt-lg-0 ms-lg-auto d-flex align-items-center"><i class="ri-map-pin-2-line ri-sm me-1" aria-hidden="true"></i>Belves-de-Castillon - 33</span>
    </div>
  </li>
</ul>`.trim(),b=({asForm:s,idPrefix:e})=>`
<ul class="list-group list-group-collapse${s?" list-group-form":""}">
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="w-100 fw-bold"
      data-bs-toggle="collapse"
      data-bs-target="#${e}-01"
      aria-expanded="false"
      aria-controls="${e}-01"
    >
      Hygiene et proprete
    </button>
    <div class="collapse" id="${e}-01">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-01">
            <label class="form-check-label" for="${e}-check-01">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-02">
            <label class="form-check-label" for="${e}-check-02">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-03">
            <label class="form-check-label" for="${e}-check-03">Check this custom checkbox</label>
          </div>
        </li>
      </ul>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="w-100 fw-bold"
      data-bs-toggle="collapse"
      data-bs-target="#${e}-02"
      aria-expanded="false"
      aria-controls="${e}-02"
    >
      Batiment et travaux publics
    </button>
    <div class="collapse" id="${e}-02">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-04">
            <label class="form-check-label" for="${e}-check-04">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-05">
            <label class="form-check-label" for="${e}-check-05">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${e}-check-06">
            <label class="form-check-label" for="${e}-check-06">Check this custom checkbox</label>
          </div>
        </li>
      </ul>
    </div>
  </li>
</ul>`.trim(),x=()=>`
<ul class="list-group list-group-flush list-group-link">
  <li class="list-group-item list-group-item-action">
    <div>
      <a href="" class="fw-bold text-decoration-none stretched-link">Aide macon/maconne voirie</a>
      <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
        <i class="ri-group-line me-1" aria-hidden="true"></i>
        20+<span class="ms-1">candidatures</span>
      </span>
      <p class="fs-sm mb-0 mt-1">
        <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
        Le Bouscat - 33
      </p>
    </div>
    <div class="badge-group d-flex flex-column align-items-end">
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">CDI</span>
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">26h/semaine</span>
    </div>
  </li>
  <li class="list-group-item list-group-item-action">
    <div>
      <a href="" class="fw-bold text-decoration-none stretched-link">Aide macon/maconne voirie</a>
      <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
        <i class="ri-group-line me-1" aria-hidden="true"></i>
        20+<span class="ms-1">candidatures</span>
      </span>
      <p class="fs-sm mb-0 mt-1">
        <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
        Le Bouscat - 33
      </p>
    </div>
    <div class="badge-group d-flex flex-column align-items-end">
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">CDI</span>
      <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">26h/semaine</span>
    </div>
  </li>
</ul>`.trim(),i={render:k,parameters:{docs:{description:{story:"List group basique configurable (taille, flush, mode actionnable et item actif)."}}},args:{size:"default",flush:!1,actionable:!1,activeIndex:-1}},l={render:v,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `.list-group-link` avec `.stretched-link` pour rendre tout l'item cliquable."}}}},r={render:()=>b({asForm:!1,idPrefix:"story-listgroup-collapse"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `.list-group-collapse` avec contenu repliable."}}}},o={render:()=>b({asForm:!0,idPrefix:"story-listgroup-collapse-form"}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante `.list-group-collapse.list-group-form` pour un rendu proche des champs de formulaire."}}}},n={render:x,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple charge de `.list-group.list-group-flush.list-group-link` avec badges et meta-informations."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderBasic,
  parameters: {
    docs: {
      description: {
        story: "List group basique configurable (taille, flush, mode actionnable et item actif)."
      }
    }
  },
  args: {
    size: "default",
    flush: false,
    actionable: false,
    activeIndex: -1
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderGlobalLink,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou \`.list-group-link\` avec \`.stretched-link\` pour rendre tout l'item cliquable."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderCollapse({
    asForm: false,
    idPrefix: "story-listgroup-collapse"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou \`.list-group-collapse\` avec contenu repliable."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => renderCollapse({
    asForm: true,
    idPrefix: "story-listgroup-collapse-form"
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante \`.list-group-collapse.list-group-form\` pour un rendu proche des champs de formulaire."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderRichContent,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple charge de \`.list-group.list-group-flush.list-group-link\` avec badges et meta-informations."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const $=["Default","GlobalLink","Collapse","CollapseForm","RichContent"];export{r as Collapse,o as CollapseForm,i as Default,l as GlobalLink,n as RichContent,$ as __namedExportsOrder,y as default};
