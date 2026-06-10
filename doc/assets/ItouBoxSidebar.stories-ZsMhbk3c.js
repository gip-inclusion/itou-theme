function u(){const n=document.querySelectorAll("[data-it-clipboard-button=copy]");for(let e=0,c=n.length;e<c;e+=1){const t=n[e],d=t.dataset.itCopyToClipboard,l=bootstrap.Tooltip.getOrCreateInstance(t);t.addEventListener("click",function(){t.hasAttribute("aria-describedby")||(l.show(),navigator.clipboard.writeText(d).then(()=>{}).catch(()=>{}))}),t.addEventListener("blur",function(){l.hide()})}}const h={title:"Components/Box Sidebar",decorators:[n=>{const e=`<div style="max-width: 480px; margin: 0 auto;">${n()}</div>`;return setTimeout(()=>{u()},0),e}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nCes exemples illustrent l'utilisation du composant `.c-box` dans la **sidebar principale du contenu** (colonne de droite).\n\nChaque box de sidebar **doit obligatoirement comporter un titre en `<h3>`** pour structurer l'information.\n\nPar défaut, la box est blanche avec une bordure grise. Elle peut également prendre des variantes colorées selon le contexte :\n- `bg-info-lightest border-info-light` — information ou alerte douce\n- `bg-warning-lightest border-warning-light` — rappel, à faire\n- `bg-success-lightest border-success-light` — réussite\n"}}}},p=()=>`
<div class="c-box mb-3 mb-md-4">
  <h3>Coordonnées</h3>
  <div class="d-flex text-secondary fs-sm">
    <i class="ri-map-pin-2-line me-2" aria-hidden="true"></i>
    <address class="m-0">Route d'Altaves, 13103 Saint-Étienne-du-Grès</address>
  </div>
  <hr class="my-3">
  <ul class="fs-sm list-unstyled mb-0">
    <li>
      <i class="ri-mail-line fw-normal me-2" aria-hidden="true"></i>
      <a href="mailto:contact+ei@inclusion.gouv.fr" aria-label="Contact par mail" class="text-break">contact+ei@inclusion.gouv.fr</a>
      <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="contact+ei@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <i class="ri-phone-line fw-normal me-2" aria-hidden="true"></i>
      +3 3 (0 )1 92 00 69 52
      <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="+33(0)192006952" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <i class="ri-global-line fw-normal me-2" aria-hidden="true"></i>
      <a href="http://www.garage-martinet.com" rel="noopener" target="_blank" class="btn-link fw-medium has-external-link" aria-label="Site web (ouverture dans un nouvel onglet)">
        http://www.garage-martinet.com
      </a>
    </li>
  </ul>
</div>
`,r={render:p,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box de coordonnées avec adresse, email, téléphone et site web."}}}},b=()=>`
<div class="c-box mb-3 mb-md-4">
  <h3>Informations générales</h3>
  <strong>Structures concernées par la convention</strong>
  <br>
  <ul class="fs-sm mt-1 mb-0">
    <li>Siège (19)</li>
  </ul>
  <hr class="my-3">
  <strong>Contact(s) DDETS</strong>
  <br>
  <ul class="fs-sm mt-1 mb-0 list-unstyled">
    <li class="d-flex">
      <i class="ri-mail-line fw-normal me-2" aria-hidden="true"></i>
      <a href="mailto:demo.emplois+ddets19@inclusion.gouv.fr" aria-label="Contact par mail" class="text-break">demo.emplois+ddets19@inclusion.gouv.fr</a>
      <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="demo.emplois+ddets19@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
  </ul>
</div>
`,s={render:b,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box d'informations générales avec structures et contacts DDETS."}}}},m=()=>`
<div class="c-box mb-3 mb-md-4 bg-info-lightest border-info-light">
  <h3>Votre dossier n'est pas encore complet</h3>
  <p class="mb-0">Actions restantes&nbsp;:</p>
  <ul>
    <li>
      <strong>Récupérer le document de synthèse de label</strong>
    </li>
    <li>
      <strong>Récupérer le bilan financier de la structure de label</strong>
    </li>
    <li>
      <strong>Transmettre le bilan financier de l'action</strong>
    </li>
    <li>
      <strong>Détail et sélection des contrats à présenter</strong>
    </li>
    <li>
      <strong>Commentaire</strong>
    </li>
    <li>
      <strong>Envoi du bilan d'exécution</strong>
    </li>
  </ul>
  <button type="button" class="btn btn-primary btn-block" disabled>
    <span>Envoyer le bilan d'exécution</span>
  </button>
</div>
`,o={render:m,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box d'information (variante `bg-info-lightest`) pour signaler un dossier incomplet avec les actions restantes."}}}},g=()=>`
<div class="c-box mb-3 mb-md-4 bg-warning-lightest border-warning-light">
  <h3>Aide sollicitée pour ce contrat</h3>
  <p>La durée du contrat est inférieure à xxx</p>
  <a href="" class="btn btn-primary w-100">
    Justifier la demande d'aide
  </a>
</div>
`,a={render:g,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box d'avertissement (variante `bg-warning-lightest`) pour signaler un point d'attention sur un contrat."}}}},x=()=>`
  <div class="c-box mb-3 mb-md-4 bg-success-lightest border-success-light">
      <h3>Votre dossier a été traité le JJ/MM/AAAA</h3>
      <p>Retrouvez le détail de la décision en cliquant ici.</p>
      <a class="btn btn-primary btn-block" href="">
        Voir le résultat
      </a>
  </div>
`,i={render:x,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Box de succès (variante `bg-success-lightest`) pour signaler que le dossier a été traité avec succès."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderBoxCoordonnees,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box de coordonnées avec adresse, email, téléphone et site web."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderBoxInformations,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box d'informations générales avec structures et contacts DDETS."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderBoxInfo,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box d'information (variante \`bg-info-lightest\`) pour signaler un dossier incomplet avec les actions restantes."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderBoxWarning,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box d'avertissement (variante \`bg-warning-lightest\`) pour signaler un point d'attention sur un contrat."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderBoxSuccess,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Box de succès (variante \`bg-success-lightest\`) pour signaler que le dossier a été traité avec succès."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const f=["BoxCoordonnees","BoxInformations","BoxInfo","BoxWarning","BoxSuccess"];export{r as BoxCoordonnees,o as BoxInfo,s as BoxInformations,i as BoxSuccess,a as BoxWarning,f as __namedExportsOrder,h as default};
