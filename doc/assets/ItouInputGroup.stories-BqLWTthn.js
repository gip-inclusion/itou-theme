import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e=document){let t=e.querySelectorAll(`[data-it-clipboard=copy]`);for(let e=0,n=t.length;e<n;e+=1){let n=t[e];if(n.dataset.itStoryClipboardInitialized===`true`)continue;let r=n.closest(`.input-group`),i=r?r.querySelector(`.form-control`):null,a=typeof bootstrap<`u`?bootstrap.Tooltip.getOrCreateInstance(n):null;i&&(n.addEventListener(`click`,()=>{let e=i.value||``;!e||!navigator.clipboard||(navigator.clipboard.writeText(e).catch(()=>{}),a&&a.show())}),n.addEventListener(`blur`,()=>{a&&a.hide()}),n.dataset.itStoryClipboardInitialized=`true`)}let n=e.querySelectorAll(`[data-it-story-password=toggle]`);for(let e=0,t=n.length;e<t;e+=1){let t=n[e];if(t.dataset.itStoryPasswordInitialized===`true`)continue;let r=t.closest(`.input-group`),i=r?r.querySelector(`.form-control`):null,a=t.querySelector(`i`),o=t.querySelector(`span`);!i||!a||!o||(t.addEventListener(`click`,()=>{let e=a.classList.contains(`ri-eye-line`);a.classList.toggle(`ri-eye-line`,!e),a.classList.toggle(`ri-eye-off-line`,e),i.setAttribute(`type`,e?`text`:`password`),o.textContent=e?`Masquer`:`Afficher`}),t.dataset.itStoryPasswordInitialized=`true`)}}var n,r,i,a,o,s,c;function l(){return(l=e((()=>{n={title:`Forms/InputGroup`,decorators:[e=>{let n=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t(document)},0),n}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Le composant Input Group permet d'ajouter des actions ou des informations contextuelles autour d'un champ de saisie.

### Anatomie
1. Conteneur principal : \`.input-group\`
2. Champ : input.form-control ou select.form-select
3. Addon : \`.input-group-text\` (texte, symbole, bouton)
4. Variante : tailles \`.input-group-sm\`, \`.input-group-lg\`, \`.input-group-xl\`

### Cas d'usage
- Préfixe/suffixe textuel (ex: @, URL, devise)
- Action avec bouton (recherche, copier, afficher/masquer)
- Champ de recherche avec bouton intégré

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.input-group\` | Conteneur principal |
| \`.input-group-text\` | Addon texte/bouton |
| \`.input-group-sm\`/lg/xl | Tailles disponibles |
| \`.input-group-search\` | Variante de recherche du thème |

### Accessibilité
- Garder les labels hors du \`.input-group\`.
- Les boutons icône seule doivent inclure un texte lisible ou un aria-label.
- Les icônes décoratives doivent utiliser aria-hidden="true".

Documentation Bootstrap : <a href="https://getbootstrap.com/docs/5.3/forms/input-group/" target="_blank" rel="noopener noreferrer" class="has-external-link">Input group</a>
`}}}},r={render:()=>`<div class="d-flex flex-column gap-3">
  <div>
    <label class="form-label" for="ig-basic-username">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="ig-basic-addon">@</span>
      <input type="text" class="form-control" id="ig-basic-username" aria-describedby="ig-basic-addon">
    </div>
  </div>

  <div>
    <label class="form-label" for="ig-basic-url">Your vanity URL</label>
    <div class="input-group">
      <span class="input-group-text" id="ig-url-addon">https://example.com/users/</span>
      <input type="text" class="form-control" id="ig-basic-url" aria-describedby="ig-url-addon">
    </div>
  </div>
</div>`,parameters:{controls:{disable:!0},docs:{description:{story:`Cas de base avec préfixe et suffixe textuels autour de l'input.`}}}},i={render:()=>`<div class="d-flex flex-column gap-3">
  <div>
    <label class="form-label" for="ig-btn-left">Bouton à gauche</label>
    <div class="input-group">
      <button class="btn btn-primary" type="button" id="ig-button-addon-left">Button</button>
      <input type="text" class="form-control" id="ig-btn-left" aria-describedby="ig-button-addon-left">
    </div>
  </div>

  <div>
    <label class="form-label" for="ig-btn-right">Bouton à droite</label>
    <div class="input-group">
      <input type="text" class="form-control" id="ig-btn-right" aria-describedby="ig-button-addon-right">
      <button class="btn btn-primary" type="button" id="ig-button-addon-right">Button</button>
    </div>
  </div>
</div>`,parameters:{controls:{disable:!0},docs:{description:{story:`Exemples de bouton addon à gauche et à droite du champ.`}}}},a={render:()=>`<div class="form-group">
  <label class="form-label" for="ig-copy-input">Copiez le lien</label>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      id="ig-copy-input"
      value="https://communaute-experimentation.inclusion.beta.gouv.fr/forum"
      aria-describedby="ig-copy-addon"
      readonly
    >
    <div class="input-group-text p-0 border-start-0">
      <button
        class="btn btn-sm btn-link btn-ico"
        type="button"
        id="ig-copy-addon"
        data-it-clipboard="copy"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="manual"
        title="Lien copié!"
      >
        <i class="ri-file-copy-line" aria-hidden="true"></i>
        <span>Copier</span>
      </button>
    </div>
  </div>
</div>`,parameters:{controls:{disable:!0},docs:{description:{story:`Exemple bouton copier dans l'addon droit de l'input-group.`}}}},o={render:()=>`<div class="form-group form-group-input-w-md-50">
  <label class="form-label" for="ig-password-input">Mot de passe</label>
  <div class="input-group">
    <input type="password" class="form-control" id="ig-password-input" value="azerty">
    <div class="input-group-text p-0">
      <button class="btn btn-sm btn-link btn-ico" type="button" data-it-story-password="toggle">
        <i class="ri-eye-line" aria-hidden="true"></i>
        <span>Afficher</span>
      </button>
    </div>
  </div>
</div>`,parameters:{controls:{disable:!0},docs:{description:{story:`Exemple d'affichage/masquage de mot de passe dans un input-group.`}}}},s={render:()=>`<div class="d-flex flex-column gap-3">
  <div class="input-group input-group-search">
    <input type="text" class="form-control" placeholder="Rechercher" aria-label="Champ de recherche" aria-describedby="ig-search-btn-default">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-default">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>

  <div class="input-group input-group-lg input-group-search">
    <input type="text" class="form-control" placeholder="Recherche grande taille" aria-label="Champ de recherche taille lg" aria-describedby="ig-search-btn-lg">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-lg">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>

  <div class="input-group input-group-xl input-group-search">
    <input type="text" class="form-control" placeholder="Recherche extra grande" aria-label="Champ de recherche taille xl" aria-describedby="ig-search-btn-xl">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-xl">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>
</div>`,parameters:{controls:{disable:!0},docs:{description:{story:`Variantes input-group-search en tailles par défaut, lg et xl.`}}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-3">
  <div>
    <label class="form-label" for="ig-basic-username">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="ig-basic-addon">@</span>
      <input type="text" class="form-control" id="ig-basic-username" aria-describedby="ig-basic-addon">
    </div>
  </div>

  <div>
    <label class="form-label" for="ig-basic-url">Your vanity URL</label>
    <div class="input-group">
      <span class="input-group-text" id="ig-url-addon">https://example.com/users/</span>
      <input type="text" class="form-control" id="ig-basic-url" aria-describedby="ig-url-addon">
    </div>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Cas de base avec préfixe et suffixe textuels autour de l'input."
      }
    }
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-3">
  <div>
    <label class="form-label" for="ig-btn-left">Bouton à gauche</label>
    <div class="input-group">
      <button class="btn btn-primary" type="button" id="ig-button-addon-left">Button</button>
      <input type="text" class="form-control" id="ig-btn-left" aria-describedby="ig-button-addon-left">
    </div>
  </div>

  <div>
    <label class="form-label" for="ig-btn-right">Bouton à droite</label>
    <div class="input-group">
      <input type="text" class="form-control" id="ig-btn-right" aria-describedby="ig-button-addon-right">
      <button class="btn btn-primary" type="button" id="ig-button-addon-right">Button</button>
    </div>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Exemples de bouton addon à gauche et à droite du champ."
      }
    }
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="form-group">
  <label class="form-label" for="ig-copy-input">Copiez le lien</label>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      id="ig-copy-input"
      value="https://communaute-experimentation.inclusion.beta.gouv.fr/forum"
      aria-describedby="ig-copy-addon"
      readonly
    >
    <div class="input-group-text p-0 border-start-0">
      <button
        class="btn btn-sm btn-link btn-ico"
        type="button"
        id="ig-copy-addon"
        data-it-clipboard="copy"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="manual"
        title="Lien copié!"
      >
        <i class="ri-file-copy-line" aria-hidden="true"></i>
        <span>Copier</span>
      </button>
    </div>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Exemple bouton copier dans l'addon droit de l'input-group."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="form-group form-group-input-w-md-50">
  <label class="form-label" for="ig-password-input">Mot de passe</label>
  <div class="input-group">
    <input type="password" class="form-control" id="ig-password-input" value="azerty">
    <div class="input-group-text p-0">
      <button class="btn btn-sm btn-link btn-ico" type="button" data-it-story-password="toggle">
        <i class="ri-eye-line" aria-hidden="true"></i>
        <span>Afficher</span>
      </button>
    </div>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Exemple d'affichage/masquage de mot de passe dans un input-group."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
<div class="d-flex flex-column gap-3">
  <div class="input-group input-group-search">
    <input type="text" class="form-control" placeholder="Rechercher" aria-label="Champ de recherche" aria-describedby="ig-search-btn-default">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-default">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>

  <div class="input-group input-group-lg input-group-search">
    <input type="text" class="form-control" placeholder="Recherche grande taille" aria-label="Champ de recherche taille lg" aria-describedby="ig-search-btn-lg">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-lg">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>

  <div class="input-group input-group-xl input-group-search">
    <input type="text" class="form-control" placeholder="Recherche extra grande" aria-label="Champ de recherche taille xl" aria-describedby="ig-search-btn-xl">
    <div class="input-group-text p-0">
      <button class="btn btn-link btn-ico" type="button" id="ig-search-btn-xl">
        <i class="ri-search-line fw-bold" aria-hidden="true"></i>
        <span>Rechercher</span>
      </button>
    </div>
  </div>
</div>
  \`.trim(),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Variantes input-group-search en tailles par défaut, lg et xl."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`ButtonAddons`,`CopyValue`,`PasswordToggle`,`Search`]})))()}l();export{i as ButtonAddons,a as CopyValue,r as Default,o as PasswordToggle,s as Search,c as __namedExportsOrder,n as default};