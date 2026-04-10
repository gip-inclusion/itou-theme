const b={title:"Components/Global Alert",decorators:[e=>`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"fullwidth",docs:{description:{component:`
L'**alerte globale** est une alerte en haut de page, placée directement à la racine du \`<body>\` ou dans le container \`<div class="global-messages-container">\`.

Elle affiche une information concernant **l'ensemble du site** et pas seulement une page ou un formulaire.

### Anatomie
1. **Conteneur global** - Bloc \`.global-messages-container\`
2. **Alerte** - Élément \`.alert\` avec variante contextuelle
3. **Message** - Texte principal, éventuellement préfixé par une date
4. **Action de fermeture** (optionnelle) - Bouton \`.btn-close\`
5. **Lien d'action** (optionnel) - Lien contextuel en fin de message

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

### Accessibilité
- Utiliser \`role="status"\` pour les annonces informatives
- Utiliser \`role="alert"\` pour les messages critiques
`}}},argTypes:{variant:{control:{type:"select"},options:["danger","warning","info"],description:"Variante de couleur de l'alerte"},dismissible:{control:"boolean",description:"Affiche un bouton de fermeture"}}},o=({variant:e,dismissible:r})=>`
<div class="global-messages-container">
  <div class="alert alert-${e}${r?" alert-dismissible fade show":""}" role="status">
    ${r?'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>':""}
    <div><strong>Jeudi 01 février 2024</strong> : les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable. <a href="#" class="has-external-link">S'inscrire</a></div>
  </div>
</div>`,n={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte globale critique pour les annonces urgentes ou les maintenances."}}},args:{variant:"danger",dismissible:!0}},t={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Alerte globale d'avertissement pour les informations importantes."}}},args:{variant:"warning",dismissible:!0}},s={render:o,parameters:{docs:{description:{story:"Alerte globale informative pour les annonces générales."}}},args:{variant:"info",dismissible:!0}},i=({title:e,exitLabel:r})=>`
<div class="global-messages-container">
  <div class="alert alert-primary fade show" role="status">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <p class="mb-0 text-start">
        <i class="ri-arrow-right-line fw-bold pe-2" aria-hidden="true"></i>
        <strong>${e}</strong>
      </p>
      <a href="#" class="btn-link-white btn-ico align-items-center" aria-label="${r}">
        <i class="ri-close-line ri-xl fw-medium me-1" aria-hidden="true"></i>
        <span class="fs-sm fw-medium">${r}</span>
      </a>
    </div>
  </div>
</div>`,a={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \`.alert-primary\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
`}}},args:{title:"Vous postulez actuellement pour Monsieur Machin",exitLabel:"Quitter"},argTypes:{title:{control:"text",description:"Titre de la procédure en cours"},exitLabel:{control:"text",description:"Libellé du bouton de sortie"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        story: "Alerte globale critique pour les annonces urgentes ou les maintenances."
      }
    }
  },
  args: {
    variant: "danger",
    dismissible: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
        story: "Alerte globale d'avertissement pour les informations importantes."
      }
    }
  },
  args: {
    variant: "warning",
    dismissible: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    dismissible: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderProcedure,
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
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \\\`.alert-primary\\\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
\`
      }
    }
  },
  args: {
    title: "Vous postulez actuellement pour Monsieur Machin",
    exitLabel: "Quitter"
  },
  argTypes: {
    title: {
      control: "text",
      description: "Titre de la procédure en cours"
    },
    exitLabel: {
      control: "text",
      description: "Libellé du bouton de sortie"
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Danger","Warning","Info","ProcedureEnCours"];export{n as Danger,s as Info,a as ProcedureEnCours,t as Warning,g as __namedExportsOrder,b as default};
