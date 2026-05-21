const T={title:"Components/Alerts",decorators:[e=>{const r=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{document.querySelectorAll(".alert-dismissible-once:not([data-it-initialized])").forEach(t=>{const s=t.getAttribute("id"),p=t.querySelector(".btn-close");t.setAttribute("data-it-initialized","true"),localStorage.getItem(s)===null&&t.classList.remove("d-none"),p?.addEventListener("click",()=>{localStorage.setItem(s,"seen"),t.classList.add("d-none")})})},0),r}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
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
`}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger","important"],description:"Variante de couleur de l'alerte"},customIcon:{control:"text",description:"Classe d'une icône Remixicon spécifique à afficher à la place de l'icône par défaut (ex: ri-file-warning-line)"},role:{control:{type:"select"},options:["status","alert"],description:"Rôle ARIA : 'status' pour info, 'alert' pour erreurs critiques"},dismissible:{control:"boolean",description:"Affiche un bouton de fermeture"},withIcon:{control:"boolean",description:"Affiche une icône correspondant à la variante"},withTitle:{control:"boolean",description:"Affiche un titre en plus du message"},withAction:{control:"boolean",description:"Affiche un bouton d'action"}}},I={info:"ri-information-line",success:"ri-checkbox-circle-line",warning:"ri-error-warning-line",danger:"ri-close-circle-line",important:"ri-alert-line"},A={info:"text-info",success:"text-success",warning:"text-warning",danger:"text-danger",important:"text-important"},n=({variant:e,customIcon:r,role:t,dismissible:s,withIcon:p,withTitle:f,withAction:b})=>{const g=s?" alert-dismissible fade show":"",h=s?'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>':"",i=(r||"").trim(),w=(i?i.startsWith("ri-")?i:`ri-${i}`:"")||I[e],v=p;if(!v&&!b)return`
<div class="alert alert-${e}${g}" role="${t}">
  ${h}
  ${f?`<p class="mb-2"><strong>Titre de l'alerte</strong></p> : `:""}<p class="mb-0">Ceci est un message d'information simple.</p>
</div>`;const x=v?`
        <div class="col-auto pe-0">
          <i class="${w} ri-xl ${A[e]}" aria-hidden="true"></i>
        </div>`:"";return`
<div class="alert alert-${e}${g}" role="${t}">
  ${h}
  <div class="row">
    ${x}
    <div class="col">
      ${f?`<p class="mb-2"><strong>Titre de l'alerte</strong></p>`:""}
      <p class="mb-0">Ceci est un message d'information simple.</p>
    </div>
    ${b?`
        <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-sm btn-primary">Action</button>
        </div>`:""}
  </div>
</div>`},o={render:n,parameters:{docs:{description:{story:"Alerte simple avec un message texte uniquement."}}},args:{variant:"info",customIcon:"",role:"status",dismissible:!1,withIcon:!1,withTitle:!1,withAction:!1}},a={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte avec une icône pour renforcer visuellement le type de message."}}},args:{variant:"info",customIcon:"",role:"status",dismissible:!1,withIcon:!0,withTitle:!0,withAction:!1}},l={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir."}}},args:{variant:"important",customIcon:"",role:"status",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!0}},c={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte de succès pour confirmer une action réussie."}}},args:{variant:"success",customIcon:"",role:"status",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},u={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte d'erreur pour signaler un problème critique. Utiliser `role=\"alert\"` pour l'accessibilité."}}},args:{variant:"danger",customIcon:"",role:"alert",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},d={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer."}}},args:{variant:"warning",customIcon:"",role:"alert",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1}},y=({variant:e})=>{const r="alertDismissibleOnceDemo";return`
<div class="alert alert-${e} alert-dismissible-once d-none" role="status" id="${r}">
  <button type="button" class="btn-close" aria-label="Fermer"></button>
  <p class="mb-2"><strong>Information importante</strong></p>
  <p class="mb-0">Ce message ne s'affichera qu'une seule fois. Une fois fermé, il ne réapparaîtra plus.</p>
</div>
<hr />
<button type="button" class="btn btn-ico btn-link btn-sm" onclick="localStorage.removeItem('${r}'); location.reload();">
  <i class="ri-refresh-line" aria-hidden="true"></i>
  <span>Réinitialiser la démo</span>
</button>
<p class="text-muted small mt-3">
  <em>Note : Cette alerte utilise la classe <code>.alert-dismissible-once</code> avec un <code>id</code> unique.
  Une fois fermée, elle ne réapparaîtra plus grâce au <code>localStorage</code>.</em>
</p>`},m={render:y,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \`localStorage\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

#### Implémentation
- Ajouter la classe \`.alert-dismissible-once\` et \`.d-none\`
- Ajouter un \`id\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
`}}},args:{variant:"info",customIcon:""},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger","important"],description:"Variante de couleur de l'alerte affichée une seule fois"},customIcon:{control:"text",description:"Nom d'une icône Remixicon spécifique à afficher à la place de l'icône par défaut"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const $=["Default","WithIcon","WithAction","Success","Danger","Dismissible","DismissibleOnce"];export{u as Danger,o as Default,d as Dismissible,m as DismissibleOnce,c as Success,l as WithAction,a as WithIcon,$ as __namedExportsOrder,T as default};
