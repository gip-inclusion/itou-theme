const x={title:"Itou-Componnents/Alerts",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'Alertes itou basees sur Bootstrap. Choisir role="status" pour les messages informatifs et role="alert" pour les erreurs critiques.'}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"]},role:{control:{type:"select"},options:["status","alert"]},dismissible:{control:"boolean"},withIcon:{control:"boolean"},withAction:{control:"boolean"},title:{control:"text"},message:{control:"text"},actionLabel:{control:"text"}}},f={info:"ri-information-line",success:"ri-checkbox-circle-line",warning:"ri-error-warning-line",danger:"ri-close-circle-line"},v={info:"text-info",success:"text-success",warning:"text-warning",danger:"text-danger"},o=({variant:e,role:r,dismissible:i,withIcon:a,withAction:l,title:c,message:u,actionLabel:p})=>{const d=i?" alert-dismissible fade show":"",m=i?'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>':"";if(!a&&!l)return`
      <div class="global-messages-container" style="max-width: 960px; margin: 0 auto;">
        <div class="alert alert-${e}${d}" role="${r}">
          ${m}
          <p class="mb-0"><strong>${c}</strong> : ${u}</p>
        </div>
      </div>
    `;const b=a?`
      <div class="col-auto pe-0">
        <i class="${f[e]} ri-xl ${v[e]}" aria-hidden="true"></i>
      </div>
    `:"",g=l?`
      <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-sm btn-primary">${p}</button>
      </div>
    `:"";return`
    <div style="max-width: 960px; margin: 0 auto;">
      <div class="alert alert-${e}${d}" role="${r}">
        ${m}
        <div class="row">
          ${b}
          <div class="col">
            <p class="mb-2"><strong>${c}</strong></p>
            <p class="mb-0">${u}</p>
          </div>
          ${g}
        </div>
      </div>
    </div>
  `},s={render:o,parameters:{docs:{description:{story:"Alerte simple sans icone ni action, ideale pour un message global."}}},args:{variant:"danger",role:"status",dismissible:!1,withIcon:!1,withAction:!1,title:"Jeudi 01 février 2024",message:"Les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",actionLabel:"S’inscrire"}},n={render:o,parameters:{docs:{description:{story:"Alerte refermable pour les informations transitoires."}}},args:{variant:"info",role:"status",dismissible:!0,withIcon:!1,withAction:!1,title:"Information",message:"Votre demande a bien été prise en compte.",actionLabel:"Voir"}},t={render:o,parameters:{docs:{description:{story:"Alerte enrichie avec icone et bouton d’action."}}},args:{variant:"info",role:"status",dismissible:!0,withIcon:!0,withAction:!0,title:"Mobiliser la solution",message:"Vous pouvez passer à l’étape suivante ou revenir sur ce choix plus tard.",actionLabel:"Continuer"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte simple sans icone ni action, ideale pour un message global.'
      }
    }
  },
  args: {
    variant: 'danger',
    role: 'status',
    dismissible: false,
    withIcon: false,
    withAction: false,
    title: 'Jeudi 01 février 2024',
    message: "Les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    actionLabel: 'S’inscrire'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte refermable pour les informations transitoires.'
      }
    }
  },
  args: {
    variant: 'info',
    role: 'status',
    dismissible: true,
    withIcon: false,
    withAction: false,
    title: 'Information',
    message: 'Votre demande a bien été prise en compte.',
    actionLabel: 'Voir'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte enrichie avec icone et bouton d’action.'
      }
    }
  },
  args: {
    variant: 'info',
    role: 'status',
    dismissible: true,
    withIcon: true,
    withAction: true,
    title: 'Mobiliser la solution',
    message: 'Vous pouvez passer à l’étape suivante ou revenir sur ce choix plus tard.',
    actionLabel: 'Continuer'
  }
}`,...t.parameters?.docs?.source}}};const h=["Simple","Dismissible","AvecIconeEtAction"];export{t as AvecIconeEtAction,n as Dismissible,s as Simple,h as __namedExportsOrder,x as default};
