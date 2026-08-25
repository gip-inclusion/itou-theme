import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c;function l(){return(l=e((()=>{t={title:`Components/Global Alert`,decorators:[e=>`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`fullwidth`,docs:{description:{component:`
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
`}}},argTypes:{variant:{control:{type:`select`},options:[`danger`,`warning`,`info`],description:`Variante de couleur de l'alerte`},dismissible:{control:`boolean`,description:`Affiche un bouton de fermeture`}}},n=({variant:e,dismissible:t})=>`
<div class="global-messages-container">
  <div class="alert alert-${e}${t?` alert-dismissible fade show`:``}" role="status">
    ${t?`<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>`:``}
    <div><strong>Jeudi 01 février 2024</strong> : les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable. <a href="#" class="has-external-link">S'inscrire</a></div>
  </div>
</div>`,r={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte globale critique pour les annonces urgentes ou les maintenances.`}}},args:{variant:`danger`,dismissible:!0}},i={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Alerte globale d'avertissement pour les informations importantes.`}}},args:{variant:`warning`,dismissible:!0}},a={render:n,parameters:{docs:{description:{story:`Alerte globale informative pour les annonces générales.`}}},args:{variant:`info`,dismissible:!0}},o=({title:e,exitLabel:t})=>`
<div class="global-messages-container">
  <div class="alert alert-primary fade show" role="status">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <p class="mb-0 text-start">
        <i class="ri-arrow-right-line fw-bold pe-2" aria-hidden="true"></i>
        <strong>${e}</strong>
      </p>
      <a href="#" class="btn-link-white btn-ico align-items-center" aria-label="${t}">
        <i class="ri-close-line ri-xl fw-medium me-1" aria-hidden="true"></i>
        <span class="fs-sm fw-medium">${t}</span>
      </a>
    </div>
  </div>
</div>`,s={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`
Alerte globale indiquant une **procédure en cours** (ex: candidature, inscription).

Cette variante utilise \`.alert-primary\` et affiche un bouton "Quitter" au lieu d'un bouton de fermeture.
`}}},args:{title:`Vous postulez actuellement pour Monsieur Machin`,exitLabel:`Quitter`},argTypes:{title:{control:`text`,description:`Titre de la procédure en cours`},exitLabel:{control:`text`,description:`Libellé du bouton de sortie`}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Danger`,`Warning`,`Info`,`ProcedureEnCours`]})))()}l();export{r as Danger,a as Info,s as ProcedureEnCours,i as Warning,c as __namedExportsOrder,t as default};