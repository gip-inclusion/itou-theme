const o={title:"Components/Form",decorators:[l=>`<div style="max-width: 1000px; margin: 0 auto;">${l()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"\nLe composant `.c-form` structure un formulaire complet avec des styles descendants pour les controles de saisie, les groupes de champs et les actions.\n\n### Anatomie\n1. **Conteneur principal** - `<div class=\"c-form\">`\n2. **Formulaire** - `<form>` et regroupement semantique via `<fieldset>` + `<legend>`\n3. **Groupes de champs** - `.form-group` avec `.form-label`, `.form-control` ou `.form-select`\n4. **Aides a la saisie** - `.form-text` liees via `aria-describedby`\n5. **Actions de fin** - boutons Reset/Submit alignes a droite\n\n### Classes CSS principales\n| Classe | Description |\n|--------|-------------|\n| `.c-form` | Conteneur thematique du formulaire |\n| `.form-group` | Bloc de champ (label + controle + aide) |\n| `.form-group-input-w-lg-50` | Limite la largeur de certains champs sur grand ecran |\n| `.form-label` | Libelle du champ |\n| `.form-control` | Inputs et textarea |\n| `.form-select` | Select natif |\n| `.form-text` | Texte d'aide |\n\n### Accessibilite\n- Associer chaque `label` au controle via `for`/`id`.\n- Utiliser `aria-describedby` pour rattacher les textes d'aide.\n- Conserver `fieldset`/`legend` pour les groupes de champs.\n- Preferer des libelles explicites plutot que de s'appuyer uniquement sur les placeholders.\n- Utiliser les classes `.form-group-input-w-lg-xx` pour adapter la longueur du champ a son contenu attendu et aider l'utilisateur à la saisie.\n"}}}},r=()=>`
<div class="c-form">
  <h3>Exemple de formulaire dans un c-form</h3>
  <form>
    <fieldset>
      <legend class="h4">Informations générales</legend>
      <div class="form-group form-group-required form-group-input-w-lg-50"><label class="form-label" for="id_brand">Nom à afficher</label><input type="text" name="brand" maxlength="255" placeholder="" class="form-control" required="" aria-describedby="id_brand_helptext" id="id_brand">
        <div id="id_brand_helptext" class="form-text">Nom présent sur la fiche et dans les résultats de recherche.</div>
      </div>
      <div class="form-group form-group-required"><label class="form-label" for="id_address_line_1">Adresse</label><input type="text" name="address_line_1" maxlength="255" placeholder="" class="form-control" required="" aria-describedby="id_address_line_1_helptext" id="id_address_line_1">
        <div id="id_address_line_1_helptext" class="form-text">Appartement, suite, bloc, bâtiment, boite postale, etc.</div>
      </div>
      <div class="form-group"><label class="form-label" for="id_address_line_2">Complément d'adresse</label><input type="text" name="address_line_2" maxlength="255" placeholder="" class="form-control" id="id_address_line_2"></div>
      <div class="form-group form-group-input-w-lg-33 form-group-required"><label class="form-label" for="id_post_code">Code postal</label><input type="text" name="post_code" maxlength="5" class="form-control" required="" id="id_post_code"></div>
      <div class="form-group form-group-required"><label class="form-label" for="id_city">Ville</label><input type="text" name="city" maxlength="255" class="form-control" required="" id="id_city"></div>
      <div class="form-group form-group-input-w-lg-33"><label class="form-label" for="id_phone">Téléphone</label><input type="tel" name="phone" maxlength="20" class="form-control" id="id_phone"></div>
      <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_email">Adresse e-mail</label><input type="email" name="email" maxlength="254" class="form-control" id="id_email"></div>
      <div class="form-group"><label class="form-label" for="id_website">Site web</label><input type="url" name="website" maxlength="200" class="form-control" aria-describedby="id_website_helptext" id="id_website">
        <div id="id_website_helptext" class="form-text">Votre site web doit commencer par http:// ou https://</div>
      </div>
    </fieldset>
    <hr class="my-3" />
    <fieldset>
      <legend>Titre de ce fieldset 2 (Optionnel)</legend>
      <div class="form-group form-group-input-w-lg-50">
        <label for="exampleFormControlSelect1">Select</label>
        <select class="form-select" id="exampleFormControlSelect1">
          <option selected>Open this form-select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="">Switches</label>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
      </div>
      <div class="form-group">
        <div>
          <label for="customRange1" class="form-label">Range</label>
          <input type="range" class="form-range" id="customRange1">
        </div>
      </div>
      <div class="form-group">
        <div class="js-display-if-javascript-enabled d-block">
          <div class="c-dropzone dz-clickable" id="logo_form">
            <div class="dz-message">
              <p class="mb-1 text-nuance-06"><i class="ri-upload-cloud-2-line ri-2x"></i></p>
              <p class="mb-2">Glisser vos fichiers ici ou <strong>rechercher</strong> dans vos fichiers</p>
              <div class="btn btn-link btn-sm btn-ico mb-2">
                <i class="ri-folder-line ri-xl"></i>
                <span>Rechercher dans vos fichiers</span>
              </div>
              <p class="small text-nuance-06">Taille maximale : Mo</p>
            </div>
          </div>
          <p class="small text-muted">Type de fichier : PNG, JPEG, SVG, GIF</p>
        </div>
      </div>
      <div class="alert alert-warning" role="status">
        <div class="row">
          <div class="col-auto pe-0">
            <i class="ri-error-warning-line ri-xl text-danger" aria-hidden="true"></i>
          </div>
          <div class="col">
            <p class="mb-2"><strong>Attention</strong></p>
            <p>Le Ministère du Travail (DGEFP) et Pôle emploi traitent vos données personnelles. Ce site est ouvert aux acteurs de l'inclusion et permet de simplifier le recrutement des personnes éligibles aux structures de l'Insertion par l'Activité Économique (IAE). Il est une composante du Pacte ambition IAE.
              Pour plus d'information sur le traitement de vos données personnelles ou pour exercer vos droits, consultez la section Protection des données. En cliquant sur le bouton "Valider la demande", vous acceptez les conditions générales d'utilisation.</p>
            <a href="" class="has-external-link" target="_blank" rel="noopener">Label lien externe</a>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="row">
      <div class="col-12">
        <hr class="mb-3">
        <small class="d-inline-block mb-3" id="fieldRequired">* champs obligatoires</small>
        <div class="form-row align-items-center justify-content-end gx-3">
          <div class="form-group col-12 col-lg order-3 order-lg-1">
            <button type="reset" class="btn btn-link btn-ico ps-lg-0 w-100 w-lg-auto">
              <i class="ri-close-line ri-lg"></i>
              <span>Annuler</span>
            </button>
          </div>
          <div class="form-group col col-lg-auto order-1 order-lg-2">
            <a href="" class="btn btn-block btn-outline-primary" aria-label="Retour à l'étape précédente">
              Retour
            </a>
          </div>
          <div class="form-group col col-lg-auto order-2 order-lg-3">
            <button type="submit" class="btn btn-block btn-primary" aria-label="Passer à l'étape suivante">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
`,e={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple complet du composant `.c-form`, base sur le markup de reference de `forms.html`."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderForm,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple complet du composant \`.c-form\`, base sur le markup de reference de \`forms.html\`."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const t=["Default"];export{e as Default,t as __namedExportsOrder,o as default};
