function l(){const t=document.getElementById("liveToastBtn");!t||t.dataset.itToastBound==="true"||(t.addEventListener("click",function(){const e=document.querySelector(".toast-container");if(!e)return;[].slice.call(e.querySelectorAll(".toast")).map(function(s){return new bootstrap.Toast(s)}).forEach(s=>s.show())}),t.dataset.itToastBound="true")}const p={title:"Components/Toasts",decorators:[t=>{const e=`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`;return setTimeout(()=>{l()},0),e}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `.toast` permet d\'afficher des notifications legeres et non bloquantes.\nDans le theme itou, des variantes de couleur sont disponibles via `.toast--info`, `.toast--warning`, `.toast--danger` et `.toast--success`.\nPour le positionnement et le staking des Toasts il faut placer les `.toast` dans le wrapper `.toast-container`.\n\n### Anatomie\n1. **Conteneur de stack** - `.toast-container` pour gerer le positionnement et l\'empilement\n2. **Toast** - Bloc `.toast` avec role ARIA adapte\n3. **Header** - `.toast-header` avec titre et bouton de fermeture\n4. **Body** - `.toast-body` avec le message\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.toast` | Toast de base Bootstrap |\n| `.toast-container` | Wrapper de positionnement/stacking |\n| `.toast--info` | Variante information |\n| `.toast--warning` | Variante avertissement |\n| `.toast--danger` | Variante erreur |\n| `.toast--success` | Variante succes |\n\n### Accessibilite\n- Placer les toasts dans une region live existante en amont de l\'affichage.\n- Utiliser `role="status" aria-live="polite"` pour les messages non critiques.\n- Utiliser `role="alert" aria-live="assertive"` pour les messages importants.\n- Si `autohide` est desactive, fournir un bouton de fermeture explicite.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/toasts/" target="_blank" rel="noopener noreferrer" class="has-external-link">Toasts</a>\n'}}}},d=({variant:t,polite:e,delay:i,autohide:n})=>`
    <div class="toast show${t==="default"?"":` toast--${t}`}" role="${e?"status":"alert"}" aria-live="${e?"polite":"assertive"}" aria-atomic="true" data-bs-delay="${i}" data-bs-autohide="${n}">
      <div class="toast-header">
        <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
        <strong class="me-auto">${t==="default"?"Default":t.charAt(0).toUpperCase()+t.slice(1)} Toast</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  `,c=()=>`
    <div class="d-flex flex-column gap-3">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Default Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--info show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Info Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--danger show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Danger Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--success show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Success Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>

      <div class="toast toast--warning show" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Warning Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  `,u=()=>`
    <button type="button" class="btn btn-sm btn-primary mb-3" id="liveToastBtn">
      Show live toast
    </button>

    <div class="toast-container">
      <div id="liveToast" class="toast toast--success" role="status" aria-live="polite" aria-atomic="true" data-bs-delay="2000">
        <div class="toast-header">
          <i class="ri-check-line ri-lg me-1" aria-hidden="true"></i>
          <strong class="me-auto">Live Toast</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fermer"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
          <button class="btn btn-block btn-outline-primary mt-3 d-block d-sm-none" data-bs-dismiss="toast" aria-label="Fermer">
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  `,a={render:d,args:{variant:"default",polite:!0,delay:5e3,autohide:!0},parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Toast unitaire avec variantes structurelles (`aria-live`, `autohide`, `delay`) fixees dans la story."}}}},o={render:c,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variantes etat du theme itou: `default`, `info`, `danger`, `success`, `warning`."}}}},r={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple de declenchement JS d'un toast via `#liveToastBtn`, en reprenant le pattern de `components.html` (query du `.toast-container`, creation des instances Bootstrap, puis `show()`)."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderToast,
  args: {
    variant: "default",
    polite: true,
    delay: 5000,
    autohide: true
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
        story: "Toast unitaire avec variantes structurelles (\`aria-live\`, \`autohide\`, \`delay\`) fixees dans la story."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderStates,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variantes etat du theme itou: \`default\`, \`info\`, \`danger\`, \`success\`, \`warning\`."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderLive,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple de declenchement JS d'un toast via \`#liveToastBtn\`, en reprenant le pattern de \`components.html\` (query du \`.toast-container\`, creation des instances Bootstrap, puis \`show()\`)."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","States","LiveExample"];export{a as Default,r as LiveExample,o as States,v as __namedExportsOrder,p as default};
