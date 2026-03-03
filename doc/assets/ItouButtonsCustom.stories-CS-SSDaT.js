function c(){const e=document.querySelectorAll("[data-it-clipboard-button=copy]");for(let t=0,d=e.length;t<d;t+=1){const r=e[t],l=r.dataset.itCopyToClipboard,i=bootstrap.Tooltip.getOrCreateInstance(r);r.addEventListener("click",function(){r.hasAttribute("aria-describedby")||(i.show(),navigator.clipboard.writeText(l).then(()=>{}).catch(()=>{}))}),r.addEventListener("blur",function(){i.hide()})}}const f={title:"Forms/Buttons Custom",decorators:[e=>{const t=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{c()},0),t}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Quelques autres liens ou boutons à utilisation spécifique"}}},argTypes:{}},p=()=>`
  <a href="" target="_blank" class="btn btn-partner btn-partner--diagoriente">
    Créer un CV avec Diagoriente
  </a>
  `,o={render:p,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Un bouton qui permet de copier du contenu en mémoire. A utiliser à la manière des "List data".  <br>le JS est pris en charge par le thème'}}},args:{}},u=()=>`
    <strong><span>05/11/1997</span></strong>
    <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="05/11/1997"><i class="ri-file-copy-line"></i></button>
  `,s={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le `.btn-partner` et ses variations (.btn-partner--diagoriente pour l'instant)"}}},args:{}},b=()=>`
<div class="dropdown">
  <button type="button" class="btn btn-dropdown-filter dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Distance
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  `,n={render:b,decorators:[e=>`<div style="min-height: 180px;">${e()}</div>`],parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le `.btn-dropdown-filter` permets d'afficher des filtres en dropdown. Généralement utilisé pour filtrer les listes de résultats."}}},args:{}},m=()=>`
<div class="btn-dropdown-filter-group">
  <div class="dropdown">
    <button type="button" class="btn btn-dropdown-filter dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
      Un filtre
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="dropdown">
    <button type="button" class="btn btn-dropdown-filter dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
      Un filtre avec checkbox
    </button>
    <ul class="dropdown-menu">
      <li><strong class="dropdown-header">Eligibilité IAE</strong></li>
      <li class="dropdown-item">
        <div class="form-check">
          <input id="id_states01_0-top" class="form-check-input" name="states01" type="checkbox" value="to_validate">
          <label for="id_states01_0-top" class="form-check-label">
            A valider
          </label>
        </div>
      </li>
      <li class="dropdown-item">
        <div class="form-check">
          <input id="id_states01_1-top" class="form-check-input" name="states01" type="checkbox" value="valid">
          <label for="id_states01_1-top" class="form-check-label">
            Valide
          </label>
        </div>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>
      <li><strong class="dropdown-header">Statut du PASS IAE</strong></li>
      <li class="dropdown-item">
        <div class="form-check">
          <input id="id_states02_0-top" class="form-check-input" name="states02" type="checkbox" value="active">
          <label for="id_states02_0-top" class="form-check-label">
            Actif
          </label>
        </div>
      </li>
      <li class="dropdown-item">
        <div class="form-check">
          <input id="id_states02_1-top" class="form-check-input" name="states02" type="checkbox" value="suspended">
          <label for="id_states02_1-top" class="form-check-label">
            Suspendu
          </label>
        </div>
      </li>
      <li class="dropdown-item">
        <div class="form-check">
          <input id="id_states02_1-top" class="form-check-input" name="states02" type="checkbox" value="expired">
          <label for="id_states02_1-top" class="form-check-label">
            Expiré
          </label>
        </div>
      </li>
    </ul>
  </div>
  <div class="dropdown">
    <button type="button" class="btn btn-ico btn-dropdown-filter">
      <i class="ri-sound-module-fill font-weight-bold" aria-hidden="true"></i>
      <span>Tous les filtres</span>
    </button>
  </div>
  <div class="ms-md-auto">
    <button type="button" class="btn btn-ico btn-dropdown-filter">
      <i class="ri-eraser-line font-weight-bold" aria-hidden="true"></i>
      <span>Effacer tout</span>
    </button>
  </div>
</div>
  `,a={render:m,decorators:[e=>`<div style="min-height: 380px;">${e()}</div>`],parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Pour afficher plusieurs filtres, il est recommandé de les englober dans un div `.btn-dropdown-filter-group` afin de gérer automatiquement les espacements et alignements entre `.btn-dropdown-filter`"}}},args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderPartner,
  parameters: {
    controls: {
      disable: true
    },
    // masque le panneau Controls (Canvas)
    docs: {
      controls: {
        disable: true
      },
      // masque aussi le bloc Controls (Docs)
      description: {
        story: 'Un bouton qui permet de copier du contenu en mémoire. A utiliser à la manière des "List data".  <br>le JS est pris en charge par le thème'
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderCopyToClipboard,
  parameters: {
    controls: {
      disable: true
    },
    // masque le panneau Controls (Canvas)
    docs: {
      controls: {
        disable: true
      },
      // masque aussi le bloc Controls (Docs)
      description: {
        story: "Le \`.btn-partner\` et ses variations (.btn-partner--diagoriente pour l'instant)"
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderDropdownFilter,
  decorators: [Story => \`<div style="min-height: 180px;">\${Story()}</div>\`],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Le \`.btn-dropdown-filter\` permets d'afficher des filtres en dropdown. Généralement utilisé pour filtrer les listes de résultats."
      }
    }
  },
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderDropdownFilterGroup,
  decorators: [Story => \`<div style="min-height: 380px;">\${Story()}</div>\`],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Pour afficher plusieurs filtres, il est recommandé de les englober dans un div \`.btn-dropdown-filter-group\` afin de gérer automatiquement les espacements et alignements entre \`.btn-dropdown-filter\`"
      }
    }
  },
  args: {}
}`,...a.parameters?.docs?.source}}};const h=["Partner","CopyToClipboard","DropdownFilter","DropdownFilterGroup"];export{s as CopyToClipboard,n as DropdownFilter,a as DropdownFilterGroup,o as Partner,h as __namedExportsOrder,f as default};
