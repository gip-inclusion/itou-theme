import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t={title:`Components/Alerts`,decorators:[e=>{let t=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{document.querySelectorAll(`.alert-dismissible-once:not([data-it-initialized])`).forEach(e=>{let t=e.getAttribute(`id`),n=e.querySelector(`.btn-close`);e.setAttribute(`data-it-initialized`,`true`),localStorage.getItem(t)===null&&e.classList.remove(`d-none`),n?.addEventListener(`click`,()=>{localStorage.setItem(t,`seen`),e.classList.add(`d-none`)})})},0),t}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Le composant \`.alert\` est utilisé pour mettre en avant une information ou fournir des messages de retour contextuels pour les actions utilisateur. Il peut être utilisé dans des formulaires, des sections ou la zone de titre. Le message peut ne concerner qu'un petit groupe d'utilisateurs ou avoir une durée de vie limitée.

### Anatomie
1. **Bordure** - Indicateur visuel de la variante
2. **Icône** (optionnel) - Renforce le message
3. **Titre** - Message principal
4. **Description** (optionnel) - Détails supplémentaires
5. **Bouton** (optionnel) - Action associée
6. **Fermer** (optionnel) - Permet de masquer l'alerte

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.alert\` | Conteneur principal |
| \`.alert-info\` | Variante informative (bleue) |
| \`.alert-success\` | Variante succès (verte) |
| \`.alert-warning\` | Variante avertissement (orange) |
| \`.alert-danger\` | Variante erreur (rouge) |
| \`.alert-important\` | Variante importante (violette) |
| \`.alert-dismissible\` | Permet de fermer l'alerte |
| \`.alert-dismissible-once\` | Fermeture mémorisée dans localStorage |

### Accessibilité
- Utiliser \`role="status"\` pour les messages informatifs
- Utiliser \`role="alert"\` pour les erreurs critiques

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank" rel="noopener noreferrer" class="has-external-link">Alerts</a>
`}}},argTypes:{variant:{control:{type:`select`},options:[`info`,`success`,`warning`,`danger`,`important`],description:`Variante de couleur de l'alerte`},customIcon:{control:`text`,description:`Classe d'une icône Remixicon spécifique à afficher à la place de l'icône par défaut (ex: ri-file-warning-line)`},role:{control:{type:`select`},options:[`status`,`alert`],description:`Rôle ARIA : 'status' pour info, 'alert' pour erreurs critiques`},dismissible:{control:`boolean`,description:`Affiche un bouton de fermeture`},withIcon:{control:`boolean`,description:`Affiche une icône correspondant à la variante`},withTitle:{control:`boolean`,description:`Affiche un titre en plus du message`},withAction:{control:`boolean`,description:`Affiche un bouton d'action`}}},n={info:`ri-information-line`,success:`ri-checkbox-circle-line`,warning:`ri-error-warning-line`,danger:`ri-close-circle-line`,important:`ri-alert-line`},r={info:`text-info`,success:`text-success`,warning:`text-warning`,danger:`text-danger`,important:`text-important`},i=({variant:e,customIcon:t,role:i,dismissible:a,withIcon:o,withTitle:s,withAction:c})=>{let l=a?` alert-dismissible fade show`:``,u=a?`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>`:``,d=(t||``).trim(),f=(d?d.startsWith(`ri-`)?d:`ri-${d}`:``)||n[e],p=o;return!p&&!c?`
<div class="alert alert-${e}${l}" role="${i}">
  ${u}
  ${s?`<p class="mb-2"><strong>Titre de l'alerte</strong></p> : `:``}<p class="mb-0">Ceci est un message d'information simple.</p>
</div>`:`
<div class="alert alert-${e}${l}" role="${i}">
  ${u}
  <div class="row">
    ${p?`
        <div class="col-auto pe-0">
          <i class="${f} ri-xl ${r[e]}" aria-hidden="true"></i>
        </div>`:``}
    <div class="col">
      ${s?`<p class="mb-2"><strong>Titre de l'alerte</strong></p>`:``}
      <p class="mb-0">Ceci est un message d'information simple.</p>
    </div>
    ${c?`
        <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-sm btn-primary">Action</button>
        </div>`:``}
  </div>
</div>`},a={render:i,parameters:{docs:{description:{story:`Alerte simple avec un message texte uniquement.`}}},args:{variant:`info`,customIcon:``,role:`status`,dismissible:!1,withIcon:!1,withTitle:!1,withAction:!1}},o={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte avec une icône pour renforcer visuellement le type de message.`}}},args:{variant:`info`,customIcon:``,role:`status`,dismissible:!1,withIcon:!0,withTitle:!0,withAction:!1}},s={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir.`}}},args:{variant:`important`,customIcon:``,role:`status`,dismissible:!0,withIcon:!0,withTitle:!0,withAction:!0}},c={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte de succès pour confirmer une action réussie.`}}},args:{variant:`success`,customIcon:``,role:`status`,dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},l={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte d'erreur pour signaler un problème critique. Utiliser \`role="alert"\` pour l'accessibilité.`}}},args:{variant:`danger`,customIcon:``,role:`alert`,dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},u={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer.`}}},args:{variant:`warning`,customIcon:``,role:`alert`,dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},d=({variant:e})=>{let t=`alertDismissibleOnceDemo`;return`
<div class="alert alert-${e} alert-dismissible-once d-none" role="status" id="${t}">
  <button type="button" class="btn-close" aria-label="Fermer"></button>
  <p class="mb-2"><strong>Information importante</strong></p>
  <p class="mb-0">Ce message ne s'affichera qu'une seule fois. Une fois fermé, il ne réapparaîtra plus.</p>
</div>
<hr />
<button type="button" class="btn btn-ico btn-link btn-sm" onclick="localStorage.removeItem('${t}'); location.reload();">
  <i class="ri-refresh-line" aria-hidden="true"></i>
  <span>Réinitialiser la démo</span>
</button>
<p class="text-muted small mt-3">
  <em>Note : Cette alerte utilise la classe <code>.alert-dismissible-once</code> avec un <code>id</code> unique.
  Une fois fermée, elle ne réapparaîtra plus grâce au <code>localStorage</code>.</em>
</p>`},f={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \`localStorage\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

#### Implémentation
- Ajouter la classe \`.alert-dismissible-once\` et \`.d-none\`
- Ajouter un \`id\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
`}}},args:{variant:`info`,customIcon:``},argTypes:{variant:{control:{type:`select`},options:[`info`,`success`,`warning`,`danger`,`important`],description:`Variante de couleur de l'alerte affichée une seule fois`},customIcon:{control:`text`,description:`Nom d'une icône Remixicon spécifique à afficher à la place de l'icône par défaut`}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte simple avec un message texte uniquement."
      }
    }
  },
  args: {
    variant: "info",
    customIcon: "",
    role: "status",
    dismissible: false,
    withIcon: false,
    withTitle: false,
    withAction: false
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
        story: "Alerte avec une icône pour renforcer visuellement le type de message."
      }
    }
  },
  args: {
    variant: "info",
    customIcon: "",
    role: "status",
    dismissible: false,
    withIcon: true,
    withTitle: true,
    withAction: false
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
        story: "Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir."
      }
    }
  },
  args: {
    variant: "important",
    customIcon: "",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        story: "Alerte de succès pour confirmer une action réussie."
      }
    }
  },
  args: {
    variant: "success",
    customIcon: "",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        story: "Alerte d'erreur pour signaler un problème critique. Utiliser \`role=\\"alert\\"\` pour l'accessibilité."
      }
    }
  },
  args: {
    variant: "danger",
    customIcon: "",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        story: "Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer."
      }
    }
  },
  args: {
    variant: "warning",
    customIcon: "",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false
  }
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: renderDismissibleOnce,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: \`
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \\\`localStorage\\\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

#### Implémentation
- Ajouter la classe \\\`.alert-dismissible-once\\\` et \\\`.d-none\\\`
- Ajouter un \\\`id\\\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
\`
      }
    }
  },
  args: {
    variant: "info",
    customIcon: ""
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["info", "success", "warning", "danger", "important"],
      description: "Variante de couleur de l'alerte affichée une seule fois"
    },
    customIcon: {
      control: "text",
      description: "Nom d'une icône Remixicon spécifique à afficher à la place de l'icône par défaut"
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithIcon`,`WithAction`,`Success`,`Danger`,`Dismissible`,`DismissibleOnce`]})))()}m();export{l as Danger,a as Default,u as Dismissible,f as DismissibleOnce,c as Success,s as WithAction,o as WithIcon,p as __namedExportsOrder,t as default};