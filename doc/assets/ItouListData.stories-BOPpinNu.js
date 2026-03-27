function p(){const e=document.querySelectorAll("[data-it-clipboard-button=copy]");for(let s=0,a=e.length;s<a;s+=1){const t=e[s],c=t.dataset.itCopyToClipboard,r=bootstrap.Tooltip.getOrCreateInstance(t);t.addEventListener("click",function(){t.hasAttribute("aria-describedby")||(r.show(),navigator.clipboard.writeText(c).then(()=>{}).catch(()=>{}))}),t.addEventListener("blur",function(){r.hide()})}}const d=({withCopyButtons:e=!0,withWebsiteLink:s=!0,withMissingValues:a,withLongText:t})=>`
<ul class="list-data">
  <li>
    <small>Prenom</small>
    <strong>Jean</strong>
  </li>
  <li>
    <small>Nom</small>
    <strong>Dupont</strong>
  </li>
  <li>
    <small>Numero de securite sociale</small>
    <strong><span>2</span><span class="ms-1">81</span><span class="ms-1">02</span><span class="ms-1">22</span><span class="ms-1">250</span><span class="ms-1">031</span><span class="ms-1">08</span></strong>
    ${e?`
      <button class="btn-link" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="281022225003108" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>`:""}
  </li>
  <li>
    <small>Date de naissance</small>
    <strong>05/11/1997</strong>
  </li>
  <li>
    <small>Adresse e-mail</small>
    <strong>jean.dupont@email.fr</strong>
    ${e?`
      <button class="btn-link" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="jean.dupont@email.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>`:""}
  </li>
  <li>
    <small>Site internet</small>
    ${s?'<a href="" class="btn-link has-external-link">siteweb.com</a>':"<strong>siteweb.com</strong>"}
  </li>
  <li>
    <small>Telephone</small>
    ${a?'<i class="text-disabled">Non renseigne</i>':"<strong>01 23 45 67 89</strong>"}
  </li>
  <li>
    <small>Adresse</small>
    <address>10 rue des maisons, 59000 Lille</address>
  </li>
  <li>
    <small>Identifiant Pole emploi</small>
    ${a?'<i class="text-disabled">Non renseigne</i>':"<strong>1234567A</strong>"}
  </li>
  <li>
    <small>CV</small>
    ${a?'<i class="text-disabled">Non renseigne</i>':'<a class="btn-link has-downloadable-file" href="" download="cv.pdf">CV_Jean_Dupont.pdf</a>'}
  </li>${t?`
    <li class="has-forced-line-break">
      <small>Traitement de la demande</small>
      <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, reiciendis natus soluta eveniet quis in consectetur odio est magnam iure tenetur at.</strong>
    </li>
    <li>
      <small>Traitement de la demande</small>
      <ul>
        <li>Machin truc 01</li>
        <li>Machin truc 02</li>
        <li>Machin truc 03</li>
      </ul>
    </li>`:""}
</ul>`.trim(),u=()=>`
<div class="list-data-group">
  <ul class="list-data">
    <li>
      <small>Prenom</small>
      <strong>David</strong>
    </li>
    <li>
      <small>Numero de securite sociale</small>
      <strong><span>2</span><span class="ms-1">81</span><span class="ms-1">02</span><span class="ms-1">22</span><span class="ms-1">250</span><span class="ms-1">031</span><span class="ms-1">08</span></strong>
      <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !" data-it-clipboard-button="copy" data-it-copy-to-clipboard="281022225003108">
        <i class="ri-file-copy-line" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <small>Adresse e-mail</small>
      <strong>david@email.fr</strong>
      <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !" data-it-clipboard-button="copy" data-it-copy-to-clipboard="david@email.fr">
        <i class="ri-file-copy-line" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>
    </li>
    <li>
      <small>Telephone</small>
      <i class="text-disabled">Non renseigne</i>
    </li>
    <li>
      <small>Identifiant Pole emploi</small>
      <i class="text-disabled">Non renseigne</i>
    </li>
  </ul>
  <ul class="list-data">
    <li>
      <small>Nom</small>
      <strong>Harmony</strong>
    </li>
    <li>
      <small>Date de naissance</small>
      <strong>05/11/1997</strong>
    </li>
    <li>
      <small>Site internet</small>
      <a href="" class="btn-link has-external-link">siteweb.com</a>
    </li>
    <li>
      <small>Adresse</small>
      <address>10 rue des maisons, 59000 Lille</address>
    </li>
    <li>
      <small>CV</small>
      <i class="text-disabled">Non renseigne</i>
    </li>
  </ul>
</div>`.trim(),y={title:"Components/List data",decorators:[e=>{const s=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{p()},0),s}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLe composant `.list-data` permet d'afficher une liste de donnees utilisateur sous forme de paires label/valeur.\nIl est adapte a la restitution d'informations de profil, de contact ou de suivi administratif.\n\n### Anatomie\n1. **Conteneur** - Liste `<ul class=\"list-data\">`\n2. **Label** - Balise `<small>` pour le nom de la donnee\n3. **Valeur** - Balise `<strong>`, `<p>`, `<address>` ou `<ul>` selon le type de contenu\n4. **Actions** (optionnelles) - Boutons de copie, liens externes, liens de telechargement\n5. **Etat vide** (optionnel) - Texte mute via `.text-disabled`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.list-data` | Liste principale des donnees |\n| `.list-data > li` | Ligne de donnee |\n| `.has-forced-line-break` | Ligne forcee sur toute la largeur pour les contenus longs |\n| `.list-data-group` | Regroupe plusieurs listes `.list-data` cote a cote (responsive) |\n\n### Accessibilite\n- Utiliser des labels explicites et non ambigus dans les balises `<small>`.\n- Conserver un texte lisible pour les actions de copie (icone seule accompagnee d'un texte `.visually-hidden`).\n- Pour les liens externes, garder un libelle comprehensible hors contexte.\n"}}},argTypes:{withMissingValues:{control:"boolean",description:"Affiche des champs non renseignes"},withLongText:{control:"boolean",description:"Ajoute des contenus longs et multilignes"}}},n={render:d,parameters:{docs:{description:{story:"Liste de donnees utilisateur configurable (copie, liens, champs manquants, contenu long)."}}},args:{withMissingValues:!0,withLongText:!1}},i={render:()=>d({withCopyButtons:!0,withWebsiteLink:!0,withMissingValues:!0,withLongText:!0}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple avec contenu long, listes internes et ligne forcee via `.has-forced-line-break`."}}}},l={render:()=>d({withCopyButtons:!1,withWebsiteLink:!1,withMissingValues:!1,withLongText:!1}),parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple avec toutes les donnees renseignees, sans etat vide."}}}},o={name:"List data Group",render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Cas particulier avec `.list-data-group` pour afficher deux listes de donnees cote a cote."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderListData,
  parameters: {
    docs: {
      description: {
        story: "Liste de donnees utilisateur configurable (copie, liens, champs manquants, contenu long)."
      }
    }
  },
  args: {
    withMissingValues: true,
    withLongText: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => renderListData({
    withCopyButtons: true,
    withWebsiteLink: true,
    withMissingValues: true,
    withLongText: true
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple avec contenu long, listes internes et ligne forcee via \`.has-forced-line-break\`."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => renderListData({
    withCopyButtons: false,
    withWebsiteLink: false,
    withMissingValues: false,
    withLongText: false
  }),
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple avec toutes les donnees renseignees, sans etat vide."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "List data Group",
  render: renderListDataGroup,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Cas particulier avec \`.list-data-group\` pour afficher deux listes de donnees cote a cote."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const L=["Default","WithLongContent","CompleteData","ListdataGroup"];export{l as CompleteData,n as Default,o as ListdataGroup,i as WithLongContent,L as __namedExportsOrder,y as default};
