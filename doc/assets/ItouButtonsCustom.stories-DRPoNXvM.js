import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(){let e=document.querySelectorAll(`[data-it-clipboard-button=copy]`);for(let t=0,n=e.length;t<n;t+=1){let n=e[t],r=n.dataset.itCopyToClipboard,i=bootstrap.Tooltip.getOrCreateInstance(n);n.addEventListener(`click`,function(){n.hasAttribute(`aria-describedby`)||(i.show(),navigator.clipboard.writeText(r).then(()=>{}).catch(()=>{}))}),n.addEventListener(`blur`,function(){i.hide()})}}var n,r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n={title:`Forms/Buttons Custom`,decorators:[e=>{let n=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t()},0),n}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Composants de boutons et liens spécifiques au thème Itou pour des usages métiers (partenaire, copie, filtres dropdown).

### Anatomie
1. **Conteneur** - Bouton ou lien principal selon le cas d'usage
2. **Libellé** - Texte d'action explicite
3. **Icône** (optionnelle) - Renforce la compréhension de l'action
4. **Comportement JS** (optionnel) - Tooltip et copie presse-papiers, ouverture de dropdown
5. **Regroupement** (optionnel) - Groupe de filtres avec alignement automatique

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.btn-partner\` | Bouton partenaire pour rediriger vers un service externe |
| \`.btn-partner--diagoriente\` | Variante partenaire Diagoriente |
| \`.btn-link\` | Bouton/lien texte discret |
| \`.btn-dropdown-filter\` | Bouton dropdown utilisé pour les filtres |
| \`.btn-dropdown-filter-group\` | Conteneur de plusieurs filtres avec espacements gérés |
| \`.btn-ico\` | Bouton avec icône et texte |

### Accessibilité
- Les icônes décoratives doivent être marquées avec \`aria-hidden="true"\`.
- Les boutons dropdown doivent exposer l'état via \`aria-expanded\`.
- Les actions de copie doivent conserver un retour utilisateur non bloquant (tooltip/texte) et un focus clavier cohérent.
- Vérifier que les libellés des filtres et options restent explicites pour les lecteurs d'écran.
`}}},argTypes:{}},r=()=>`
  <a href="" target="_blank" class="btn btn-partner btn-partner--diagoriente">
    Créer un CV avec Diagoriente
  </a>
  `,i={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Un bouton qui permet de copier du contenu en mémoire. À utiliser à la manière des "List data". <br>Le JS est pris en charge par le thème.`}}},args:{}},a=()=>`
    <strong><span>05/11/1997</span></strong>
    <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Copié!" data-bs-trigger="manual" data-bs-title="Copié!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="05/11/1997"><i class="ri-file-copy-line"></i></button>
  `,o={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le `.btn-partner` et ses variations (.btn-partner--diagoriente pour l'instant)"}}},args:{}},s=()=>`
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
  `,c={render:s,decorators:[e=>`<div style="min-height: 180px;">${e()}</div>`],parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Le `.btn-dropdown-filter` permets d'afficher des filtres en dropdown. Généralement utilisé pour filtrer les listes de résultats."}}},args:{}},l=()=>`
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
  `,u={render:l,decorators:[e=>`<div style="min-height: 380px;">${e()}</div>`],parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Pour afficher plusieurs filtres, il est recommandé de les englober dans un div `.btn-dropdown-filter-group` afin de gérer automatiquement les espacements et alignements entre `.btn-dropdown-filter`"}}},args:{}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        story: 'Un bouton qui permet de copier du contenu en mémoire. À utiliser à la manière des "List data". <br>Le JS est pris en charge par le thème.'
      }
    }
  },
  args: {} // explicite: pas d'args pour cette story
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Partner`,`CopyToClipboard`,`DropdownFilter`,`DropdownFilterGroup`]})))()}f();export{o as CopyToClipboard,c as DropdownFilter,u as DropdownFilterGroup,i as Partner,d as __namedExportsOrder,n as default};