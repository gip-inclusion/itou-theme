const u=`
  <button type="button" class="btn btn-ico btn-link ps-0" aria-label="Retour vers la page xxxx / vers la liste de xxx">
    <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
    <span>Retour</span>
  </button>
`,a=({title:t,titleClass:e="",subtitle:i="",cta:d="",secondary:p=""})=>`
  <div class="c-title">
    <div class="c-title__main">
      <h1 class="${e}">${t}</h1>
      ${i}
    </div>
    ${d?`<div class="c-title__cta" role="group" aria-label="Actions sur les groupes de suivi">${d}</div>`:""}
    ${p?`<div class="c-title__secondary">${p}</div>`:""}
  </div>
`,s=({navinfoHtml:t,titleHtml:e,extraHtml:i=""})=>`
<section class="s-title-02">
  <div class="s-title-02__container container">
    <div class="s-title-02__row row">
      <div class="s-title-02__col col-12">
        ${t}
        ${e}
        ${i}
      </div>
    </div>
  </div>
</section>
`,h={title:"Sections/Title02",decorators:[t=>`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
La section .s-title-02 compose un en-tete de page a partir des composants:
- Components/Title pour le bloc .c-title
- Components/Navinfo pour la navigation contextuelle (optionnelle)

### Regles d'integration
1. Afficher Components/Navinfo ou, a minima, un bloc .c-prevstep.
2. Inserer Components/Title avec .c-title__main obligatoire.
3. Ajouter ensuite des blocs contextuels selon le besoin: alert, tabs, c-box--action.

### Accessibilite
- Conserver une hierarchie de titres coherente (h1 puis h2, etc.).
- Renseigner des aria-label explicites sur les actions et la navigation retour.
- Marquer les icones decoratives avec aria-hidden="true".
`}}}},m=()=>{const e=a({title:"Titre de page",secondary:`
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    `});return s({navinfoHtml:"",titleHtml:e})},b=()=>{const t=u,e=a({title:"Titre de page",secondary:`
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    `});return s({navinfoHtml:t,titleHtml:e})},v=()=>{const e=a({title:"Titre de page",secondary:`
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    `});return s({navinfoHtml:"",titleHtml:e,extraHtml:`
    <div class="alert alert-info alert-dismissible fade show" role="status">
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
      <div class="row">
        <div class="col-auto pe-0">
          <i class="ri-information-line ri-xl text-info" aria-hidden="true"></i>
        </div>
        <div class="col">
          <p class="mb-2"><strong>Mobiliser la solution</strong></p>
          <p class="mb-0">Because I want to feel motivated and like I am working hard and doing something good. Working from home but not having work to do is boring.</p>
        </div>
        <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
          <button class="btn btn-sm btn-primary">Label bouton</button>
        </div>
      </div>
    </div>
  `})},f=()=>{const e=a({title:"Titre de page",titleClass:"m-0",cta:`
      <a href="#" class="btn btn-lg btn-primary btn-ico" aria-label="Action principale">
        <i class="ri-bear-smile-line fw-medium" aria-hidden="true"></i>
        <span>Action principale</span>
      </a>
    `,secondary:`
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    `});return s({navinfoHtml:"",titleHtml:e,extraHtml:`
    <ul class="s-tabs-01__nav nav nav-tabs mb-0" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="title02-home-tab" data-bs-toggle="tab" href="#title02-home" role="tab" aria-controls="title02-home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="title02-profile-tab" data-bs-toggle="tab" href="#title02-profile" role="tab" aria-controls="title02-profile" aria-selected="false" tabindex="-1">Profile</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="title02-contact-tab" data-bs-toggle="tab" href="#title02-contact" role="tab" aria-controls="title02-contact" aria-selected="false" tabindex="-1">Contact</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="title02-ex2-tab" data-bs-toggle="tab" href="#title02-ex2" role="tab" aria-controls="title02-ex2" aria-selected="false" tabindex="-1">
          <span>Exemple tab 02</span>
          <span class="badge badge-sm rounded-pill ms-2">1279</span>
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="title02-ex3-tab" data-bs-toggle="tab" href="#title02-ex3" role="tab" aria-controls="title02-ex3" aria-selected="false" tabindex="-1">
          <i class="ri-briefcase-4-line fw-normal me-1" aria-hidden="true"></i>
          <span>Exemple tab 03</span>
        </a>
      </li>
    </ul>
  `})},g=()=>{const e=a({title:"Title 01",secondary:`
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
      <p>Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    `});return s({navinfoHtml:"",titleHtml:e,extraHtml:`
    <div class="c-box c-box--action">
      <div class="form-row align-items-center gx-3">
        <div class="form-group col col-lg-auto">
          <a href="#" class="btn btn-lg btn-white btn-block btn-ico">
            <i class="ri-check-line fw-medium" aria-hidden="true"></i>
            <span>Accepter</span>
          </a>
        </div>
        <div class="form-group col col-lg-auto">
          <a href="#" class="btn btn-lg btn-outline-white btn-block btn-ico">
            <i class="ri-close-line fw-medium" aria-hidden="true"></i>
            <span>Decliner</span>
          </a>
        </div>
        <div class="form-group col-12 col-lg-auto">
          <a href="#" class="btn btn-lg btn-link-white btn-block btn-ico">
            <i class="ri-history-line fw-medium" aria-hidden="true"></i>
            <span>Mettre en liste d'attente</span>
          </a>
        </div>
        <div class="form-group col-12 col-lg d-lg-flex justify-content-lg-end">
          <button id="title02-transfer-to" class="btn btn-lg btn-link-white btn-block w-lg-auto dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
            Transferer vers
          </button>
          <div class="dropdown-menu" aria-labelledby="title02-transfer-to">
            <a class="dropdown-item" href="#">
              <div>
                <span class="badge badge-xs rounded-pill bg-primary">EI</span> <span>Tata auto</span>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div>
                <span class="badge badge-xs rounded-pill bg-primary">EI</span> <span>Garage Martinet Nord</span>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div>
                <span class="badge badge-xs rounded-pill bg-primary">EI</span> <span>Garage Martinet Ouest</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `})},n={render:m,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple simple compose avec Components/Title et sans Components/Navinfo (retour minimal c-prevstep)."}}}},o={render:b,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Meme exemple que Default, mais avec Components/Navinfo active."}}}},r={render:v,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante avec alert informative sous Components/Title."}}}},l={render:f,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante avec action principale dans Components/Title et tabs en pied de section."}}}},c={render:g,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante metier avec c-box--action apres Components/Title."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderDefault,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple simple compose avec Components/Title et sans Components/Navinfo (retour minimal c-prevstep)."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderDefaultWithNavinfo,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Meme exemple que Default, mais avec Components/Navinfo active."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderWithAlert,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante avec alert informative sous Components/Title."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderWithTabs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante avec action principale dans Components/Title et tabs en pied de section."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: renderWithActionBox,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante metier avec c-box--action apres Components/Title."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const x=["Default","DefaultWithNavinfo","WithAlert","WithTabs","WithActionBox"];export{n as Default,o as DefaultWithNavinfo,c as WithActionBox,r as WithAlert,l as WithTabs,x as __namedExportsOrder,h as default};
