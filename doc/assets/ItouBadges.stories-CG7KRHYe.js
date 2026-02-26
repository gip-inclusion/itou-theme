const w={title:"Itou-Componnents/Badges",decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLe composant `.badge` est utile pour le comptage, l'étiquetage et la mise en avant d'une information.\n**Il n'est pas cliquable.**\n\n### Anatomie\n1. **Label** - Texte du badge\n2. **Icône** (optionnel) - Renforce la compréhension\n3. **Conteneur** - Fond coloré arrondi\n\n### Classes CSS - Tailles\n| Classe | Description |\n|--------|-------------|\n| `.badge` | Taille héritée du parent |\n| `.badge-base` | Taille fixe standard |\n| `.badge-sm` | Taille fixe petite |\n| `.badge-xs` | Taille fixe extra-petite |\n\n### Classes CSS - Couleurs\n| Classe | Usage |\n|--------|-------|\n| `.bg-success` | Succès, Valide, Éligible, Accepté |\n| `.bg-warning` | Attention, En cours, En attente |\n| `.bg-danger` | Erreur, Expiré, Annulé, Décliné |\n| `.bg-info` | Information, Nouveau |\n| `.bg-primary` | Multi-usage |\n| `.bg-important` | Mise en avant |\n| `.bg-accent-01` / `.bg-accent-02` / `.bg-accent-03` | Cas spéciaux |\n\n### Accessibilité\nL'icone dans le badge doit posséder un `aria-hidden=true`\n"}}},argTypes:{size:{control:{type:"select"},options:["badge-base","badge-sm","badge-xs"],description:"Taille du badge"},variant:{control:{type:"select"},options:["primary","success","success-lighter","warning","warning-lighter","danger","danger-lighter","info","info-lighter","important","important-lighter","accent-01","accent-01-lighter","accent-02","accent-02-lighter","accent-03","accent-03-lighter"],description:"Variante de couleur"},withIcon:{control:"boolean",description:"Affiche une icône"}}},m=e=>["accent-02","accent-02-lighter","accent-03","accent-03-lighter"].includes(e)?"text-primary":["success-lighter"].includes(e)?"text-success":["warning-lighter"].includes(e)?"text-warning":["danger-lighter"].includes(e)?"text-danger":["info-lighter"].includes(e)?"text-info":["accent-01-lighter"].includes(e)?"text-accent-01":["important-lighter"].includes(e)?"text-important":"text-white",a=({label:e,size:o,variant:p,withIcon:g})=>{const u=`bg-${p}`,b=m(p);return`
<span class="badge ${o} rounded-pill ${u} ${b}">
  ${g?'<i class="ri-global-line" aria-hidden="true"></i> ':""}${e}
</span>`},s={render:a,parameters:{docs:{description:{story:"Badge standard avec couleur primaire."}}},args:{label:"Badge",size:"badge-base",variant:"primary",withIcon:!1}},n={render:a,parameters:{docs:{description:{story:"Badge avec icône pour renforcer visuellement le message."}}},args:{label:"Avec icône",size:"badge-base",variant:"info",withIcon:!0}},r={render:a,parameters:{docs:{description:{story:"Badge succès pour les états valides, éligibles ou acceptés."}}},args:{label:"Candidature acceptée",size:"badge-sm",variant:"success",withIcon:!1}},t={render:a,parameters:{docs:{description:{story:"Badge avertissement pour les états en cours ou en attente."}}},args:{label:"En attente",size:"badge-sm",variant:"warning",withIcon:!1}},i={render:a,parameters:{docs:{description:{story:"Badge danger pour les états expirés, annulés ou déclinés."}}},args:{label:"Candidature déclinée",size:"badge-sm",variant:"danger",withIcon:!1}},x=()=>`
<div class="d-flex flex-column gap-2">
  <p><span class="badge badge-sm rounded-pill bg-info text-white">Nouvelle candidature</span></p>
  <p><span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Candidature à l'étude</span></p>
  <p><span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Candidature en attente</span></p>
  <p><span class="badge badge-sm rounded-pill bg-success text-white">Candidature acceptée</span></p>
  <p><span class="badge badge-sm rounded-pill bg-danger text-white">Candidature déclinée</span></p>
  <p><span class="badge badge-sm rounded-pill bg-primary text-white">Embauché ailleurs</span></p>
  <p><span class="badge badge-sm rounded-pill bg-primary text-white">Embauche annulée</span></p>
</div>`,d={render:x,parameters:{docs:{description:{story:`
**Badges pour les statuts de candidature**

Badges prédéfinis pour les différents statuts d'une candidature dans le parcours utilisateur.
`}}}},h=()=>`
<div class="d-flex flex-column gap-2">
  <p>
    <span class="badge badge-sm rounded-pill bg-accent-02-lighter text-primary">
      <i class="ri-error-warning-line" aria-hidden="true"></i> Éligibilité IAE à valider
    </span>
  </p>
  <p>
    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
      <i class="ri-check-line" aria-hidden="true"></i> Éligible à l'IAE
    </span>
  </p>
  <p>
    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
      <i class="ri-pass-valid-line" aria-hidden="true"></i> PASS IAE valide
    </span>
  </p>
  <p>
    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
      <i class="ri-pass-valid-line" aria-hidden="true"></i> PASS IAE valide (non démarré)
    </span>
  </p>
  <p>
    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
      <i class="ri-pass-pending-line" aria-hidden="true"></i> PASS IAE valide (suspendu)
    </span>
  </p>
  <p>
    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
      <i class="ri-pass-expired-line" aria-hidden="true"></i> PASS IAE expiré
    </span>
  </p>
</div>`,c={render:h,parameters:{docs:{description:{story:`
**Badges pour l'Éligibilité**

Badges prédéfinis pour les différents états d'éligibilité IAE et PASS IAE.
`}}}},f=()=>`
<div class="row">
  <div class="col-6">
    <p class="fw-bold mb-3">Couleurs pleines</p>
    <p><span class="badge badge-base rounded-pill bg-primary text-white">primary</span></p>
    <p><span class="badge badge-base rounded-pill bg-success text-white">success</span></p>
    <p><span class="badge badge-base rounded-pill bg-warning text-white">warning</span></p>
    <p><span class="badge badge-base rounded-pill bg-danger text-white">danger</span></p>
    <p><span class="badge badge-base rounded-pill bg-info text-white">info</span></p>
    <p><span class="badge badge-base rounded-pill bg-important text-white">important</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-01 text-white">accent-01</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-02 text-primary">accent-02</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-03 text-primary">accent-03</span></p>
  </div>
  <div class="col-6">
    <p class="fw-bold mb-3">Couleurs claires</p>
    <p>&nbsp;</p>
    <p><span class="badge badge-base rounded-pill bg-success-lighter text-success">success-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-warning-lighter text-warning">warning-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-danger-lighter text-danger">danger-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-info-lighter text-info">info-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-important-lighter text-important">important-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-01-lighter text-accent-01">accent-01-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-02-lighter text-primary">accent-02-lighter</span></p>
    <p><span class="badge badge-base rounded-pill bg-accent-03-lighter text-primary">accent-03-lighter</span></p>
  </div>
</div>`,l={render:f,parameters:{docs:{description:{story:"Palette complète des couleurs disponibles pour les badges."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Badge standard avec couleur primaire."
      }
    }
  },
  args: {
    label: "Badge",
    size: "badge-base",
    variant: "primary",
    withIcon: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Badge avec icône pour renforcer visuellement le message."
      }
    }
  },
  args: {
    label: "Avec icône",
    size: "badge-base",
    variant: "info",
    withIcon: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Badge succès pour les états valides, éligibles ou acceptés."
      }
    }
  },
  args: {
    label: "Candidature acceptée",
    size: "badge-sm",
    variant: "success",
    withIcon: false
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Badge avertissement pour les états en cours ou en attente."
      }
    }
  },
  args: {
    label: "En attente",
    size: "badge-sm",
    variant: "warning",
    withIcon: false
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "Badge danger pour les états expirés, annulés ou déclinés."
      }
    }
  },
  args: {
    label: "Candidature déclinée",
    size: "badge-sm",
    variant: "danger",
    withIcon: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderCandidatures,
  parameters: {
    docs: {
      description: {
        story: \`
**Badges pour les statuts de candidature**

Badges prédéfinis pour les différents statuts d'une candidature dans le parcours utilisateur.
\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: renderEligibilite,
  parameters: {
    docs: {
      description: {
        story: \`
**Badges pour l'Éligibilité**

Badges prédéfinis pour les différents états d'éligibilité IAE et PASS IAE.
\`
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderAllVersions,
  parameters: {
    docs: {
      description: {
        story: "Palette complète des couleurs disponibles pour les badges."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const v=["Default","WithIcon","Success","Warning","Danger","Candidature","Eligibilite","AllVersions"];export{l as AllVersions,d as Candidature,i as Danger,s as Default,c as Eligibilite,r as Success,t as Warning,n as WithIcon,v as __namedExportsOrder,w as default};
