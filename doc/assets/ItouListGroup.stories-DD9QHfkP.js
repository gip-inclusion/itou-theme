import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t=[`An item`,`A second item`,`A third item`],n={title:`Components/List group`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nLe composant `.list-group` est un composant flexible pour afficher une serie de contenus.\nLe thème itou ajoute des variantes supplementaires: `.list-group-sm`, `.list-group-link`, `.list-group-collapse` et `.list-group-form`.\n\n### Anatomie\n1. **Zone titre** (optionnelle) - Intitule principal de l\'item\n2. **Badge principal** (optionnel) - Statut ou volume associe\n3. **Conteneur** - Element `<li class="list-group-item">` ou lien actionnable\n4. **Badges secondaires** (optionnels) - Meta-informations (contrat, duree, etc.)\n5. **Icone** (optionnelle) - Renforce la compréhension\n6. **Informations secondaires** (optionnelles) - Localisation, details contextuels\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.list-group` | Groupe de liste de base |\n| `.list-group-item` | Element de liste |\n| `.list-group-sm` | Variante compacte (padding reduit) |\n| `.list-group-flush` | Variante sans bordures externes |\n| `.list-group-item-action` | Item actionnable (hover/focus/active) |\n| `.list-group-link` | Variante itou avec lien global et chevron |\n| `.list-group-collapse` | Variante itou avec sous-contenu repliable |\n| `.list-group-form` | Variante itou pour un rendu proche des champs de formulaire |\n\n### Accessibilité\n- Utiliser `aria-current="true"` sur l\'item actif des listes de navigation.\n- Pour les liens desactives, ajouter `.disabled` et `aria-disabled="true"`.\n- En version collapse, relier le bouton et le panneau via `aria-controls` et `id`.\n- En version lien global, conserver un libellé de lien explicite (ou un `aria-label` si nécessaire).\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/list-group/#basic-example" target="_blank" rel="noopener noreferrer" class="has-external-link">List group</a>\n'}}},argTypes:{size:{control:{type:`select`},options:[`default`,`sm`],description:`Taille de la liste`},flush:{control:`boolean`,description:"Supprime les bordures externes via `.list-group-flush`"},actionable:{control:`boolean`,description:"Utilise des liens avec `.list-group-item-action`"},activeIndex:{control:{type:`select`},options:[-1,0,1,2],description:`Index de l'item actif (-1 pour aucun)`}}},r=({size:e,flush:n,actionable:r,activeIndex:i})=>{let a=[`list-group`];if(e===`sm`&&a.push(`list-group-sm`),n&&a.push(`list-group-flush`),r){let e=t.map((e,t)=>`<a href=""${t===i?` class="list-group-item list-group-item-action active" aria-current="true"`:` class="list-group-item list-group-item-action"`}>${e}</a>`).join(`
`);return`<div class="${a.join(` `)}">\n${e}\n</div>`}let o=t.map((e,t)=>{let n=t===i,r=[`list-group-item`],a=n?` aria-current="true"`:``;return n&&r.push(`active`),`<li class="${r.join(` `)}"${a}>${e}</li>`}).join(`
`);return`<ul class="${a.join(` `)}">\n${o}\n</ul>`},i=()=>`<ul class="list-group list-group-flush list-group-link">
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
</ul>`,a=({asForm:e,idPrefix:t})=>`
<ul class="list-group list-group-collapse${e?` list-group-form`:``}">
  <li class="list-group-item list-group-item-action">
    <button
      type="button"
      class="w-100 fw-bold"
      data-bs-toggle="collapse"
      data-bs-target="#${t}-01"
      aria-expanded="false"
      aria-controls="${t}-01"
    >
      Hygiene et proprete
    </button>
    <div class="collapse" id="${t}-01">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-01">
            <label class="form-check-label" for="${t}-check-01">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-02">
            <label class="form-check-label" for="${t}-check-02">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-03">
            <label class="form-check-label" for="${t}-check-03">Check this custom checkbox</label>
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
      data-bs-target="#${t}-02"
      aria-expanded="false"
      aria-controls="${t}-02"
    >
      Batiment et travaux publics
    </button>
    <div class="collapse" id="${t}-02">
      <ul>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-04">
            <label class="form-check-label" for="${t}-check-04">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-05">
            <label class="form-check-label" for="${t}-check-05">Check this custom checkbox</label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="${t}-check-06">
            <label class="form-check-label" for="${t}-check-06">Check this custom checkbox</label>
          </div>
        </li>
      </ul>
    </div>
  </li>
</ul>`.trim(),o=()=>`<ul class="list-group list-group-flush list-group-link">
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
</ul>`,s={render:r,parameters:{docs:{description:{story:`List group basique configurable (taille, flush, mode actionnable et item actif).`}}},args:{size:`default`,flush:!1,actionable:!1,activeIndex:-1}},c={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `.list-group-link` avec `.stretched-link` pour rendre tout l'item cliquable."}}}},l={render:()=>a({asForm:!1,idPrefix:`story-listgroup-collapse`}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `.list-group-collapse` avec contenu repliable."}}}},u={render:()=>a({asForm:!0,idPrefix:`story-listgroup-collapse-form`}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante `.list-group-collapse.list-group-form` pour un rendu proche des champs de formulaire."}}}},d={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple charge de `.list-group.list-group-flush.list-group-link` avec badges et meta-informations."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`GlobalLink`,`Collapse`,`CollapseForm`,`RichContent`]})))()}p();export{l as Collapse,u as CollapseForm,s as Default,c as GlobalLink,d as RichContent,f as __namedExportsOrder,n as default};