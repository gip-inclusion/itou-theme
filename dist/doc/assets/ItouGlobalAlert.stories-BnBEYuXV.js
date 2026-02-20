const b={title:"Itou-Componnents/Global Alert",tags:["autodocs"],parameters:{layout:"fullwidth",docs:{description:{component:`
L'**alerte globale** est une alerte en haut de page, placée directement à la racine du \`<body>\` ou dans le container \`<div class="global-messages-container">\`.

Elle affiche une information concernant **l'ensemble du site** et pas seulement une page ou un formulaire.

### Recommandations
- Essayer de toujours mettre le texte sur **une seule ligne**
- Utiliser pour les annonces importantes, maintenances, événements

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.alert\` | Conteneur principal |
| \`.alert-danger\` | Alerte critique (rouge) |
| \`.alert-warning\` | Alerte avertissement (orange) |
| \`.alert-info\` | Alerte informative (bleue) |
| \`.alert-primary\` | Alerte procédure en cours (violet) |
| \`.alert-dismissible\` | Permet de fermer l'alerte |
| \`.has-external-link\` | Style pour les liens externes |

### Accessibilité
- Utiliser \`role="status"\` pour les annonces informatives
- Utiliser \`role="alert"\` pour les messages critiques
`}}},argTypes:{variant:{control:{type:"select"},options:["danger","warning","info"],description:"Variante de couleur de l'alerte"},date:{control:"text",description:"Date de l'événement ou de l'annonce"},message:{control:"text",description:"Message de l'alerte"},linkText:{control:"text",description:"Texte du lien d'action"},linkUrl:{control:"text",description:"URL du lien d'action"},dismissible:{control:"boolean",description:"Affiche un bouton de fermeture"}}},a=({variant:i,date:e,message:o,linkText:l,linkUrl:c,dismissible:u})=>{const d=u?" alert-dismissible fade show":"",p=u?'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>':"",m=l&&c?` <a href="${c}" class="has-external-link">${l}</a>`:"";return`
<div class="global-messages-container">
  <div class="alert alert-${i}${d}" role="status">
    ${p}
    <p class="mb-0"><strong>${e}</strong> : ${o}${m}</p>
  </div>
</div>`},n={render:a,parameters:{docs:{description:{story:"Alerte globale critique pour les annonces urgentes ou les maintenances."}}},args:{variant:"danger",date:"Jeudi 01 février 2024",message:"les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",linkText:"S'inscrire",linkUrl:"#",dismissible:!0}},r={render:a,parameters:{docs:{description:{story:"Alerte globale d'avertissement pour les informations importantes."}}},args:{variant:"warning",date:"Jeudi 01 février 2024",message:"les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",linkText:"S'inscrire",linkUrl:"#",dismissible:!0}},t={render:a,parameters:{docs:{description:{story:"Alerte globale informative pour les annonces générales."}}},args:{variant:"info",date:"Jeudi 01 février 2024",message:"les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",linkText:"S'inscrire",linkUrl:"#",dismissible:!0}},g=({title:i,exitLabel:e,exitUrl:o})=>`
<div class="global-messages-container">
  <div class="alert alert-primary fade show" role="status">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <p class="mb-0 text-start">
        <i class="ri-arrow-right-line fw-bold pe-2" aria-hidden="true"></i>
        <strong>${i}</strong>
      </p>
      <a href="${o}" class="btn-link-white btn-ico align-items-center" aria-label="${e}">
        <i class="ri-close-line ri-xl fw-medium me-1" aria-hidden="true"></i>
        <span class="fs-sm fw-medium">${e}</span>
      </a>
    </div>
  </div>
</div>`,s={render:g,parameters:{docs:{description:{story:`
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \`.alert-primary\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
`}}},args:{title:"Vous postulez actuellement pour Machin",exitLabel:"Quitter",exitUrl:"#"},argTypes:{title:{control:"text",description:"Titre de la procédure en cours"},exitLabel:{control:"text",description:"Libellé du bouton de sortie"},exitUrl:{control:"text",description:"URL de sortie de la procédure"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale critique pour les annonces urgentes ou les maintenances."
      }
    }
  },
  args: {
    variant: "danger",
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale d'avertissement pour les informations importantes."
      }
    }
  },
  args: {
    variant: "warning",
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Alerte globale informative pour les annonces générales."
      }
    }
  },
  args: {
    variant: "info",
    date: "Jeudi 01 février 2024",
    message: "les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    linkText: "S'inscrire",
    linkUrl: "#",
    dismissible: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderProcedure,
  parameters: {
    docs: {
      description: {
        story: \`
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \\\`.alert-primary\\\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
\`
      }
    }
  },
  args: {
    title: "Vous postulez actuellement pour Machin",
    exitLabel: "Quitter",
    exitUrl: "#"
  },
  argTypes: {
    title: {
      control: "text",
      description: "Titre de la procédure en cours"
    },
    exitLabel: {
      control: "text",
      description: "Libellé du bouton de sortie"
    },
    exitUrl: {
      control: "text",
      description: "URL de sortie de la procédure"
    }
  }
}`,...s.parameters?.docs?.source}}};const x=["Danger","Warning","Info","ProcedureEnCours"];export{n as Danger,t as Info,s as ProcedureEnCours,r as Warning,x as __namedExportsOrder,b as default};
