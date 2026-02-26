const i={title:"Itou-Componnents/Navinfo",decorators:[t=>`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Le composant \`.c-navinfo\` permet de revenir en arrière dans l'historique de navigation, da naviguer entre les fiches candidats.
Il permet accessoirement d'ajouter une information complémentaire (date, auteur, etc)

Il ne peut se situer que dans la section titre \`.s-title-02\` d'un template

### Anatomie
1. **Lien "< Retour" ** — Information principale
3. **Fleches de navigation** (optionnelle) — Navigation entre les fiches
3. **Date, Auteur, Version, ...** (optionnelle) — Information complémentaire

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-navinfo\` | Conteneur principal |
| \`.c-navinfo__prevstep\` | Lien retour |
| \`.c-navinfo__prevnext\` | Liens de navigation entre fiche candidats |
| \`.c-navinfo__info"\` | Information complémentaire |

### Accessibilité
Personnaliser le contenu de l'attribut \`aria-label\` sur le \`<button>\` "< Retour"
`}}},argTypes:{withInformation:{control:"boolean",description:"Affiche l'information complémentaire"},withPrevnext:{control:"boolean",description:"Affiche les liens de navigations"}}},a=({withInformation:t,withPrevnext:n})=>`
<div class="c-navinfo">
  <div class="c-navinfo__prevstep">
    <button type="button" class="btn btn-ico btn-link ps-0" aria-label="Retour vers la page xxxx / vers la liste de xxx">
      <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
      <span>Retour</span>
    </button>
  </div>
  ${n?`  <div class="c-navinfo__prevnext">
    <a href="" class="btn btn-ico-only btn-link disabled" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Candidature précédente">
      <span class="visually-hidden">Candidature précédente</span>
      <i class="ri-arrow-left-circle-line ri-xl fw-medium" aria-hidden="true"></i>
    </a>
    <a href="" class="btn btn-ico-only btn-link" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Candidature suivante">
      <span class="visually-hidden">Candidature suivante</span>
      <i class="ri-arrow-right-circle-line ri-xl fw-medium" aria-hidden="true"></i>
    </a>
  </div>`:""}
  ${t?`<div class="c-navinfo__info">
    Mise a jour le 14/03/25
  </div>`:""}
</div>
`,e={render:a,args:{withInformation:!0,withPrevnext:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    withInformation: true,
    withPrevnext: true
  }
}`,...e.parameters?.docs?.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
