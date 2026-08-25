import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(){let e=document.querySelectorAll(`[data-it-clipboard-button=copy]`);for(let t=0,n=e.length;t<n;t+=1){let n=e[t],r=n.dataset.itCopyToClipboard,i=bootstrap.Tooltip.getOrCreateInstance(n);n.addEventListener(`click`,function(){n.hasAttribute(`aria-describedby`)||(i.show(),navigator.clipboard.writeText(r).then(()=>{}).catch(()=>{}))}),n.addEventListener(`blur`,function(){i.hide()})}}var n,r,i,a,o,s;function c(){return(c=e((()=>{n={title:`Components/Box`,decorators:[e=>{let n=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t()},0),n}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Les composants \`.c-box\` sert a structurer et mettre en valeur du contenu en enrobant le contenu dans une zone délimitée.
\`.c-box\` est un conteneur de lecture (résumé, informations, bloc contextuel).

`}}}},r=()=>`
<div class="c-box">
  <div class="row mb-3">
    <div class="col-12 col-sm">
      <h3 class="mb-0">Informations personnelles</h3>
    </div>
    <div class="col-12 col-sm-auto mt-2 mt-sm-0 d-flex align-items-center">
      <a href="" class="btn btn-sm btn-ico btn-outline-primary" aria-label="Modifier les informations personnelles de NAILO Emi">
        <i class="ri-pencil-line fw-medium" aria-hidden="true"></i>
        <span>Modifier</span>
      </a>
    </div>
  </div>
  <ul class="list-data mb-3">
    <li>
      <small>Prénom</small>
      <strong>Tata</strong>
    </li>
    <li>
      <small>Nom</small>
      <strong>Yoyo</strong>
    </li>
    <li>
      <small>Téléphone</small>
      <strong>00 99 88 77 66</strong>
      <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_sender_phone" data-it-clipboard-button="copy" data-it-copy-to-clipboard="0099887766" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <small>Adresse e-mail</small>
      <strong>demo.emplois+126@inclusion.gouv.fr</strong>
      <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="demo.emplois+126@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <small>Date de naissance</small>
      <strong>15/02/1998</strong>
    </li>
    <li>
      <small>Adresse</small>
      <address>Tarascon, 13150 Tarascon</address>
    </li>
    <li>
      <small>Numéro de sécurité sociale</small>
      <strong>Pas de numéro de sécurité sociale</strong>
      <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="Pas de numéro de sécurité sociale" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <small>Identifiant France Travail</small>
      <i class="text-disabled">Non renseigné</i>
    </li>
    <li>
      <small>Curriculum vitae</small>
      <i class="text-disabled">Non renseigné</i>
    </li>
  </ul>
  <div class="c-info d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 p-3 fs-sm d-print-none">
    <div class="w-100 w-md-50 text-center text-md-start">
      <p class="fw-bold mb-2">Ce candidat n’a pas de CV ?</p>
      <p class="m-0">
        Invitez le prescripteur à en créer un via notre partenaire Diagoriente.
      </p>
    </div>
    <div class="w-100 w-md-50 text-center text-md-end mt-3 mt-md-0">
      <form method="post" action="/apply/5929baf1-f6d6-4750-9842-aed96a4b544c/siae/diagoriente/send_invite">
        <input type="hidden" name="csrfmiddlewaretoken" value="iaQYkxIcYzsbjIGRONs90PJT69dI6xbFDp2YwQN2SWaio9G387keZlNkKHjsiIJF">
        <button class="btn btn-partner btn-partner--diagoriente fs-sm" type="submit">Inviter à créer un CV avec Diagoriente</button>
      </form>
    </div>
  </div>
</div>

`,i={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Un exemple avec une box de type "détail"`}}}},a=()=>`
<div class="c-box">
  <article>
    <h2 class="h3">Son activité</h2>
    <p>La structure à vocation sociale propose des services d'entretien, de réparation et de location de véhicule, à tarifs solidaires, principalement destinés à des publics en difficulté.<br>
      L'objectif est de favoriser la mobilité, condition souvent indispensable pour trouver ou garder un emploi</p>
    <p>Les activités :<br>
      - Réparation et entretien à tarifs solidaires : mécanique générale, contrôle technique, vidanges, freins, pneus, etc.<br>
      - Location de véhicules : courte ou moyenne durée, à tarifs adaptés aux ressources.<br>
      - Accompagnement à la mobilité : aide à la gestion administrative, au financement du permis de conduire, etc.</p>
  </article>
  <hr class="my-4">
  <article>
    <h2 class="h3">L'accompagnement proposé</h2>
    <p>Les postes proposés :<br>
      * Mécanicien(ne) automobile<br>
      * Agent(e) de maintenance de véhicules<br>
      * Magasinier(e), gestionnaire de stock<br>
      * Chargé(e) d'accueil</p>
    <p>Les salariés en insertion sont accompagnés par un encadrant technique qui joue un rôle de formateur et de superviseur.</p>
  </article>
</div>
`,o={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Un exemple avec une box de type "description"`}}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderBox,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Un exemple avec une box de type \\"détail\\""
      }
    }
  }
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderBoxDescription,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Un exemple avec une box de type \\"description\\""
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s=[`BoxDetail`,`BoxDescription`]})))()}c();export{o as BoxDescription,i as BoxDetail,s as __namedExportsOrder,n as default};