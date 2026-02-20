const S={title:"Itou-Componnents/Alerts",decorators:[t=>{const n=`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`;return setTimeout(()=>{document.querySelectorAll(".alert-dismissible-once:not([data-it-initialized])").forEach(e=>{const r=e.getAttribute("id"),i=e.querySelector(".btn-close");e.setAttribute("data-it-initialized","true"),localStorage.getItem(r)===null&&e.classList.remove("d-none"),i?.addEventListener("click",()=>{localStorage.setItem(r,"seen"),e.classList.add("d-none")})})},0),n}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.alert\` est utilisé pour mettre en avant une information ou fournir des messages de retour contextuels pour les actions utilisateur.

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

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank" rel="noopener noreferrer">Alerts</a>
`}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger","important"],description:"Variante de couleur de l'alerte"},role:{control:{type:"select"},options:["status","alert"],description:"Rôle ARIA : 'status' pour info, 'alert' pour erreurs critiques"},dismissible:{control:"boolean",description:"Affiche un bouton de fermeture"},withIcon:{control:"boolean",description:"Affiche une icône correspondant à la variante"},withTitle:{control:"boolean",description:"Affiche un titre en plus du message"},withAction:{control:"boolean",description:"Affiche un bouton d'action"},title:{control:"text",description:"Titre de l'alerte"},message:{control:"text",description:"Message de l'alerte"},actionLabel:{control:"text",description:"Libellé du bouton d'action"}}},E={info:"ri-information-line",success:"ri-checkbox-circle-line",warning:"ri-error-warning-line",danger:"ri-close-circle-line",important:"ri-alert-line"},y={info:"text-info",success:"text-success",warning:"text-warning",danger:"text-danger",important:"text-important"},s=({variant:t,role:n,dismissible:e,withIcon:r,withTitle:i,withAction:p,title:f,message:g,actionLabel:h})=>{const b=e?" alert-dismissible fade show":"",v=e?'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>':"";if(!r&&!p)return`
<div class="alert alert-${t}${b}" role="${n}">
  ${v}
  ${i?`<p class="mb-2"><strong>${f}</strong></p> : `:""}<p class="mb-0">${g}</p>
</div>`;const x=r?`
        <div class="col-auto pe-0">
          <i class="${E[t]} ri-xl ${y[t]}" aria-hidden="true"></i>
        </div>`:"",A=p?`
        <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-sm btn-primary">${h}</button>
        </div>`:"",w=i?`<p class="mb-2"><strong>${f}</strong></p>`:"";return`
<div class="alert alert-${t}${b}" role="${n}">
  ${v}
  <div class="row">
    ${x}
    <div class="col">
      ${w}
      <p class="mb-0">${g}</p>
    </div>
    ${A}
  </div>
</div>`},a={render:s,parameters:{docs:{description:{story:"Alerte simple avec un message texte uniquement."}}},args:{variant:"info",role:"status",dismissible:!1,withIcon:!1,withTitle:!1,withAction:!1,title:"Titre de l'alerte",message:"Ceci est un message d'information simple.",actionLabel:"Action"}},o={render:s,parameters:{docs:{description:{story:"Alerte avec une icône pour renforcer visuellement le type de message."}}},args:{variant:"info",role:"status",dismissible:!1,withIcon:!0,withTitle:!0,withAction:!1,title:"Information",message:"Voici un message informatif avec une icône pour attirer l'attention.",actionLabel:"Action"}},l={render:s,parameters:{docs:{description:{story:"Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir."}}},args:{variant:"important",role:"status",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!0,title:"Nouvelle fonctionnalité",message:"Une nouvelle fonctionnalité est disponible. Découvrez-la maintenant car elle trop top de chez top !",actionLabel:"Découvrir"}},c={render:s,parameters:{docs:{description:{story:"Alerte de succès pour confirmer une action réussie."}}},args:{variant:"success",role:"status",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1,title:"Succès",message:"Votre action a été effectuée avec succès.",actionLabel:"Action"}},u={render:s,parameters:{docs:{description:{story:"Alerte d'erreur pour signaler un problème critique. Utiliser `role=\"alert\"` pour l'accessibilité."}}},args:{variant:"danger",role:"alert",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1,title:"Erreur",message:"Une erreur s'est produite. Veuillez réessayer ultérieurement.",actionLabel:"Action"}},m={render:s,parameters:{docs:{description:{story:"Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer."}}},args:{variant:"warning",role:"alert",dismissible:!0,withIcon:!0,withTitle:!0,withAction:!1,title:"Attention",message:"Cette alerte peut être fermée en cliquant sur le bouton ×.",actionLabel:"Action"}},I=({variant:t,title:n,message:e})=>{const r="alertDismissibleOnceDemo";return`
<div class="alert alert-${t} alert-dismissible-once d-none" role="status" id="${r}">
  <button type="button" class="btn-close" aria-label="Fermer"></button>
  <p class="mb-2"><strong>${n}</strong></p>
  <p class="mb-0">${e}</p>
</div>
<hr />
<button type="button" class="btn btn-ico btn-link btn-sm" onclick="localStorage.removeItem('${r}'); location.reload();">
  <i class="ri-refresh-line" aria-hidden="true"></i>
  <span>Réinitialiser la démo</span>
</button>
<p class="text-muted small mt-3">
  <em>Note : Cette alerte utilise la classe <code>.alert-dismissible-once</code> avec un <code>id</code> unique.
  Une fois fermée, elle ne réapparaîtra plus grâce au <code>localStorage</code>.</em>
</p>`},d={render:I,parameters:{docs:{description:{story:`
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \`localStorage\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

### Implémentation
- Ajouter la classe \`.alert-dismissible-once\` et \`.d-none\`
- Ajouter un \`id\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
`}}},args:{variant:"info",title:"Information importante",message:"Ce message ne s'affichera qu'une seule fois. Une fois fermé, il ne réapparaîtra plus."},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger","important"]},title:{control:"text"},message:{control:"text"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    role: "status",
    dismissible: false,
    withIcon: false,
    withTitle: false,
    withAction: false,
    title: "Titre de l'alerte",
    message: "Ceci est un message d'information simple.",
    actionLabel: "Action"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec une icône pour renforcer visuellement le type de message."
      }
    }
  },
  args: {
    variant: "info",
    role: "status",
    dismissible: false,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Information",
    message: "Voici un message informatif avec une icône pour attirer l'attention.",
    actionLabel: "Action"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec un bouton d'action pour permettre à l'utilisateur d'interagir."
      }
    }
  },
  args: {
    variant: "important",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: true,
    title: "Nouvelle fonctionnalité",
    message: "Une nouvelle fonctionnalité est disponible. Découvrez-la maintenant car elle trop top de chez top !",
    actionLabel: "Découvrir"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte de succès pour confirmer une action réussie."
      }
    }
  },
  args: {
    variant: "success",
    role: "status",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Succès",
    message: "Votre action a été effectuée avec succès.",
    actionLabel: "Action"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte d'erreur pour signaler un problème critique. Utiliser \`role=\\"alert\\"\` pour l'accessibilité."
      }
    }
  },
  args: {
    variant: "danger",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Erreur",
    message: "Une erreur s'est produite. Veuillez réessayer ultérieurement.",
    actionLabel: "Action"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte avec bouton de fermeture permettant à l'utilisateur de la masquer."
      }
    }
  },
  args: {
    variant: "warning",
    role: "alert",
    dismissible: true,
    withIcon: true,
    withTitle: true,
    withAction: false,
    title: "Attention",
    message: "Cette alerte peut être fermée en cliquant sur le bouton ×.",
    actionLabel: "Action"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderDismissibleOnce,
  parameters: {
    docs: {
      description: {
        story: \`
**Rejetable définitivement** : L'état de fermeture est mémorisé dans le \\\`localStorage\\\`.

Une fois fermée par l'utilisateur, l'alerte ne réapparaîtra plus lors des visites suivantes.

### Implémentation
- Ajouter la classe \\\`.alert-dismissible-once\\\` et \\\`.d-none\\\`
- Ajouter un \\\`id\\\` unique sur l'alerte
- Le JavaScript affiche l'alerte au chargement si elle n'a jamais été fermée
\`
      }
    }
  },
  args: {
    variant: "info",
    title: "Information importante",
    message: "Ce message ne s'affichera qu'une seule fois. Une fois fermé, il ne réapparaîtra plus."
  },
  argTypes: {
    variant: {
      control: {
        type: "select"
      },
      options: ["info", "success", "warning", "danger", "important"]
    },
    title: {
      control: "text"
    },
    message: {
      control: "text"
    }
  }
}`,...d.parameters?.docs?.source}}};const $=["Simple","WithIcon","WithAction","Success","Danger","Dismissible","DismissibleOnce"];export{u as Danger,m as Dismissible,d as DismissibleOnce,a as Simple,c as Success,l as WithAction,o as WithIcon,$ as __namedExportsOrder,S as default};
