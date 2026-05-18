export default {
  title: "Pages/Form Detail",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1600px; margin: 0 auto;">${Story()}</div>`;
      return html;
    },
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Exemple de mise en forme d'une page "Formulaire".

### Règles d'intégration
- Conserver un titre en \`<h2>\` et le masquer avec \`.visually-hidden\` afin de préserver une hiérarchie de titres cohérente et d'éviter les erreurs d'accessibilité.
- Dans chaque \`.c-form\`, regrouper les champs dans un ou plusieurs couples \`<fieldset>\` + \`<legend class="h3">\`.
- Le titre du formulaire doit toujours être porté par ce \`legend.h3\`.
- Pour une action complémentaire dans un \`.c-form\`, utiliser \`.btn-link\` pour un lien simple et \`.btn-secondary\` pour une action portée par un bouton.
- Utiliser \`.c-info\` pour une information toujours visible.
- Utiliser \`.alert\` pour une information conditionnelle, liée par exemple au type d'utilisateur, à l'étape en cours ou à une nouvelle règle de gestion.
`,
      },
    },
  },
};

const render = () => `
<main class="s-main" role="main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-title">
            <div class="c-title__main">
              <h1>Modifier les informations de ma structure</h1>
              <p>SIRET 50010961600027</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s-section">
    <div class="s-section__container container">
      <div class="s-section__row row">
        <div class="s-section__col col-12">
          <h2 class="visually-hidden">Modifier les informations generales</h2>
          <div class="c-stepper mb-3 mb-md-4">
            <div class="progress">
              <div class="progress-bar progress-bar-33" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" aria-labelledby="currentProgressState"></div>
            </div>
            <p id="currentProgressState">
              <strong>Etape 1</strong>/3 : Informations generales
            </p>
          </div>
        </div>
      </div>
      <div class="s-section__row row">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9 order-2 order-xxl-1">
          <div class="c-form">
            <form method="post" class="js-prevent-multiple-submit">
              <fieldset>
                <legend class="h3">Informations generales</legend>
                <div class="form-group form-group-required"><label class="form-label" for="id_brand">Nom a afficher</label><input type="text" name="brand" value="ETTI Une nouvelle chance" maxlength="255" placeholder="" class="form-control" required="" aria-describedby="id_brand_helptext" id="id_brand">
                  <div id="id_brand_helptext" class="form-text">Nom present sur la fiche et dans les resultats de recherche.</div>
                </div>
                <div class="form-group form-group-required"><label class="form-label" for="id_address_line_1">Adresse</label><input type="text" name="address_line_1" value="14 Avenue de la Plaine" maxlength="255" placeholder="" class="form-control" required="" aria-describedby="id_address_line_1_helptext" id="id_address_line_1">
                  <div id="id_address_line_1_helptext" class="form-text">Appartement, suite, bloc, batiment, boite postale, etc.</div>
                </div>
                <div class="form-group"><label class="form-label" for="id_address_line_2">Complement d'adresse</label><input type="text" name="address_line_2" maxlength="255" placeholder="" class="form-control" id="id_address_line_2"></div>
                <div class="form-group form-group-input-w-lg-33 form-group-required"><label class="form-label" for="id_post_code">Code postal</label><input type="text" name="post_code" value="30300" maxlength="5" class="form-control" required="" id="id_post_code"></div>
                <div class="form-group form-group-input-w-lg-66 form-group-required"><label class="form-label" for="id_city">Ville</label><input type="text" name="city" value="beaucaire" maxlength="255" class="form-control" required="" id="id_city"></div>
                <div class="form-group form-group-input-w-lg-33"><label class="form-label" for="id_phone">Telephone</label><input type="tel" name="phone" value="0539559724" maxlength="20" class="form-control" id="id_phone"></div>
                <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_email">Adresse e-mail</label><input type="email" name="email" value="contact+etti@inclusion.gouv.fr" maxlength="254" class="form-control" id="id_email"></div>
                <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_website">Site web</label><input type="url" name="website" value="http://avenir.etti.com" maxlength="200" class="form-control" aria-describedby="id_website_helptext" id="id_website">
                  <div id="id_website_helptext" class="form-text">Votre site web doit commencer par http:// ou https://</div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <hr class="mb-3">
                    <small class="d-inline-block mb-3">* champs obligatoires</small>
                    <div class="form-row align-items-center justify-content-end gx-3">
                      <div class="form-group col-12 col-lg order-3 order-lg-1">
                        <a href="" class="btn btn-link btn-ico ps-lg-0 w-100 w-lg-auto" aria-label="Annuler la saisie de ce formulaire">
                          <i class="ri-close-line ri-lg" aria-hidden="true"></i>
                          <span>Annuler</span>
                        </a>
                      </div>
                      <div class="form-group col col-lg-auto order-2 order-lg-3">
                        <button type="submit" class="btn btn-block btn-primary" aria-label="Passer a l'etape suivante">
                          <span>Suivant</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="s-section__col col-12 col-xxl-4 col-xxxl-3 order-1 order-xxl-2">
          <div class="c-box c-box--organization mb-3 mb-md-4">
            <button class="c-box--organization__summary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBoxOrganization" aria-expanded="true" aria-controls="collapseBoxOrganization">
              <i class="ri-community-line" aria-hidden="true"></i>
              <div>
                <span data-bs-toggle="tooltip" data-bs-title="Entreprise de travail temporaire d'insertion">ETTI</span>
                <span class="d-block h3">ETTI Une nouvelle chance</span>
              </div>
            </button>
            <div class="c-box--organization__detail collapse show" id="collapseBoxOrganization">
              <hr class="my-4">
              <ul class="c-box--organization__list-contact">
                <li>
                  <i class="ri-map-pin-2-line fw-normal me-2" aria-hidden="true"></i>
                  <address class="m-0">14 Avenue de la Plaine, 30300 beaucaire</address>
                  <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="14 Avenue de la Plaine, 30300 beaucaire" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
                    <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                    <span class="visually-hidden">Copier</span>
                  </button>
                </li>
                <li>
                  <i class="ri-mail-line fw-normal me-2" aria-hidden="true"></i>
                  <a href="mailto:contact+etti@inclusion.gouv.fr" aria-label="Contact par mail" class="text-break">contact+etti@inclusion.gouv.fr</a>
                  <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="contact+etti@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
                    <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                    <span class="visually-hidden">Copier</span>
                  </button>
                </li>
                <li>
                  <i class="ri-phone-line fw-normal me-2" aria-hidden="true"></i>
                  05 39 55 97 24
                  <button class="btn-link fw-medium ms-1" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="0539559724" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
                    <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                    <span class="visually-hidden">Copier</span>
                  </button>
                </li>
                <li>
                  <i class="ri-global-line fw-normal me-2" aria-hidden="true"></i>
                  <a href="http://avenir.etti.com" rel="noopener" target="_blank" class="btn-link fw-medium has-external-link" aria-label="Site web (ouverture dans un nouvel onglet)">
                    http://avenir.etti.com
                  </a>
                </li>
              </ul>
              <a href="" class="btn btn-secondary btn-block mt-3">Voir la fiche de l'entreprise</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

const renderInformationsPersonnelles = () => `
<main id="main" role="main" class="s-main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-title">
            <div class="c-title__main">
              <h1>Informations personnelles de DUPONT Camille</h1>
            </div>
          </div>
          <div class="alert alert-warning" role="status">
            <p class="mb-2">
              <strong>
                Vous allez modifier des informations sensibles concernant ce candidat ou cette candidate.
              </strong>
            </p>
            <p class="mb-0">
              Tout changement entrainera une modification definitive dans notre base de donnees. <strong>Les informations supprimees seront perdues.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s-section">
    <div class="s-section__container container">
      <div class="s-section__row row">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9">
          <h2 class="visually-hidden">Modifier les informations personnelles</h2>
          <div class="c-form">
            <form method="post">
              <fieldset>
                <legend class="h3">Informations personnelles</legend>
                <div class="form-group form-group-input-w-lg-66 form-group-required"><label class="form-label" for="id_email_personal">Adresse electronique personnelle</label><input type="text" name="email" value="camille.dupont@example.com" autocomplete="off" maxlength="320" class="form-control" required="" id="id_email_personal"></div>
                <div class="form-group form-group-input-w-lg-33 form-group-required"><label class="form-label" for="id_title_personal">Civilite</label><select name="title" class="form-select" required="" id="id_title_personal">
                    <option value="">---------</option>
                    <option value="M" selected="">Monsieur</option>
                    <option value="MME">Madame</option>
                  </select></div>
                <div class="form-group form-group-required"><label class="form-label" for="id_first_name_personal">Prenom</label><input type="text" name="first_name" value="CAMILLE" maxlength="150" class="form-control" required="" id="id_first_name_personal"></div>
                <div class="form-group form-group-required"><label class="form-label" for="id_last_name_personal">Nom</label><input type="text" name="last_name" value="DUPONT" maxlength="150" class="form-control" required="" id="id_last_name_personal"></div>
                <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_nir_personal">Numero de securite sociale</label><input type="text" name="nir" maxlength="21" class="form-control" aria-describedby="id_nir_personal_helptext" id="id_nir_personal" disabled="disabled">
                  <div id="id_nir_personal_helptext" class="form-text">Numero a 15 chiffres. Les numeros d'identification d'attente sont acceptes. Pour ajouter le numero de securite sociale, veuillez decocher la case "Impossible de renseigner le numero de securite sociale".</div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="lack_of_nir" data-disable-target="#id_nir_personal" data-bs-toggle="collapse" data-bs-target="#collapse_lack_of_nir_reason_story" aria-controls="collapse_lack_of_nir_reason_story" aria-expanded="true" class="form-check-input" id="id_lack_of_nir_personal" checked=""><label class="form-check-label" for="id_lack_of_nir_personal">Impossible de renseigner le numero de securite sociale</label></div>
                </div>
                <div id="collapse_lack_of_nir_reason_story" class="ps-3 pb-1 mb-3 border-start border-primary collapse show">
                  <div class="form-group"><label class="form-label" for="id_lack_of_nir_reason_personal">Selectionner un motif</label><select name="lack_of_nir_reason" class="form-select" aria-describedby="id_lack_of_nir_reason_personal_helptext" id="id_lack_of_nir_reason_personal">
                      <option value="">---------</option>
                      <option value="NO_NIR" selected="">Pas de numero de securite sociale</option>
                      <option value="NIR_ASSOCIATED_TO_OTHER">Le numero de securite sociale est associe a quelqu'un d'autre</option>
                    </select>
                    <div id="id_lack_of_nir_reason_personal_helptext" class="form-text">Indiquez la raison de l'absence de NIR.</div>
                  </div>
                </div>
                <div class="form-group"><label class="form-label" for="id_birth_place_personal">Commune de naissance</label><select name="birth_place" lang="fr" data-minimum-input-length="1" data-theme="bootstrap-5" data-allow-clear="true" data-placeholder="Nom de la commune" data-ajax--url="/autocomplete/communes" data-ajax--cache="true" data-ajax--delay="250" data-ajax--type="GET" data-disable-target="#id_birth_country_personal" data-target-value="91" data-select2-link-with-birthdate="id_birthdate_personal" class="form-select django-select2 select2-hidden-accessible" aria-describedby="id_birth_place_personal_helptext" id="id_birth_place_personal" tabindex="-1" aria-hidden="true" data-select2-id="id_birth_place_personal">
                    <option value="" data-select2-id="14"></option>
                    <option value="35238" selected="" data-select2-id="15">RENNES (350)</option>
                  </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="13" style="width: 963.333px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_birth_place_personal-container"><span class="select2-selection__rendered" id="select2-id_birth_place_personal-container" role="textbox" aria-readonly="true" title="RENNES (350)"><span class="select2-selection__clear" title="Supprimer tous les elements" data-select2-id="16">×</span>RENNES (350)</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  <div id="id_birth_place_personal_helptext" class="form-text">La commune de naissance est obligatoire lorsque le salarie est ne en France. Elle ne doit pas etre renseignee s'il est ne a l'etranger.</div>
                </div>
                <div class="form-group form-group-input-w-lg-33"><label class="form-label" for="id_phone_personal">Telephone</label><input type="tel" name="phone" maxlength="20" class="form-control" aria-describedby="id_phone_personal_helptext" id="id_phone_personal">
                  <div id="id_phone_personal_helptext" class="form-text">L'ajout du numero de telephone permet a l'employeur de vous contacter plus facilement.</div>
                </div>
                <div class="form-group form-group-required"><label class="form-label" for="id_address_for_autocomplete_personal">Adresse actuelle</label><select name="address_for_autocomplete" lang="fr" data-minimum-input-length="3" data-theme="bootstrap-5" data-allow-clear="false" class="form-select django-select2 select2-hidden-accessible" aria-describedby="id_address_for_autocomplete_personal_helptext" id="id_address_for_autocomplete_personal" data-ajax--url="https://data.geopf.fr/geocodage/search/" data-placeholder="Ex. 102 Quai de Jemmapes 75010 Paris" tabindex="-1" aria-hidden="true" data-select2-id="id_address_for_autocomplete_personal">
                    <option value="0" selected="" data-select2-id="18">Rennes, 35000 Rennes</option>
                  </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="17" style="width: 963.333px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_address_for_autocomplete_personal-container"><span class="select2-selection__rendered" id="select2-id_address_for_autocomplete_personal-container" role="textbox" aria-readonly="true" title="Rennes, 35000 Rennes">Rennes, 35000 Rennes</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  <div id="id_address_for_autocomplete_personal_helptext" class="form-text">Si votre adresse ne s'affiche pas, merci de renseigner votre ville uniquement en utilisant votre code postal et d'utiliser le Complement d'adresse pour renseigner vos numero et nom de rue.</div>
                </div>
                <div class="form-group d-none"><label class="form-label" for="id_address_line_1_personal">Adresse</label><input type="text" name="address_line_1" value="Rennes" class="form-control js-address-line-1" aria-describedby="id_address_line_1_personal_helptext" id="id_address_line_1_personal">
                  <div id="id_address_line_1_personal_helptext" class="form-text">Par exemple : 102 Quai de Jemmapes</div>
                </div>
                <div class="form-group"><label class="form-label" for="id_address_line_2_personal">Complement d'adresse</label><input type="text" name="address_line_2" class="form-control js-address-line-2" aria-describedby="id_address_line_2_personal_helptext" id="id_address_line_2_personal">
                  <div id="id_address_line_2_personal_helptext" class="form-text">Par exemple : Appartement 16</div>
                </div>
                <div class="form-group form-group-input-w-lg-33 d-none"><label class="form-label" for="id_post_code_personal">Code postal</label><input type="text" name="post_code" value="35000" class="form-control js-post-code" aria-describedby="id_post_code_personal_helptext" id="id_post_code_personal">
                  <div id="id_post_code_personal_helptext" class="form-text">Par exemple : 75010</div>
                </div>
                <div class="form-group d-none"><label class="form-label" for="id_city_personal">Ville</label><input type="text" name="city" value="Rennes" maxlength="255" class="form-control js-city" id="id_city_personal"></div>
                <input type="hidden" name="insee_code" class="js-insee-code" id="id_insee_code_personal">
                <input type="hidden" name="ban_api_resolved_address" value="Rennes" class="js-ban-api-resolved-address" id="id_ban_api_resolved_address_personal">
                <input type="hidden" name="fill_mode" id="id_fill_mode_personal">
                <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_pole_emploi_id_personal">Identifiant France Travail</label><input type="text" name="pole_emploi_id" maxlength="11" class="form-control" aria-describedby="id_pole_emploi_id_personal_helptext" id="id_pole_emploi_id_personal">
                  <div id="id_pole_emploi_id_personal_helptext" class="form-text">L'identifiant doit respecter l'un des deux formats autorises : 8 caracteres (7 chiffres suivis d'une lettre ou d'un chiffre) ou 11 chiffres.</div>
                </div>
                <div class="form-group"><label class="form-label" for="id_lack_of_pole_emploi_id_reason_personal">Pas d'identifiant France Travail ?</label><select name="lack_of_pole_emploi_id_reason" class="form-select" aria-describedby="id_lack_of_pole_emploi_id_reason_personal_helptext" id="id_lack_of_pole_emploi_id_reason_personal">
                    <option value="">---------</option>
                    <option value="FORGOTTEN">Identifiant France Travail oublie</option>
                    <option value="NOT_REGISTERED" selected="">Non inscrit aupres de France Travail</option>
                  </select>
                  <div id="id_lack_of_pole_emploi_id_reason_personal_helptext" class="form-text">Indiquez la raison de l'absence d'identifiant France Travail.<br>Renseigner l'identifiant France Travail des candidats inscrits permet d'instruire instantanement votre demande.<br>Dans le cas contraire un delai de deux jours est necessaire pour effectuer manuellement les verifications d'usage.</div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <hr class="mb-3">
                    <small class="d-inline-block mb-3">* champs obligatoires</small>
                    <div class="form-row align-items-center justify-content-end gx-3">
                      <div class="form-group col-12 col-lg order-3 order-lg-1">
                        <a href="/job-seekers/details/00000000-0000-4000-8000-000000000000?back_url=/job-seekers/list" class="btn btn-link btn-ico ps-lg-0 w-100 w-lg-auto" aria-label="Annuler la saisie de ce formulaire">
                          <i class="ri-close-line ri-lg" aria-hidden="true"></i>
                          <span>Annuler</span>
                        </a>
                      </div>
                      <div class="form-group col col-lg-auto order-2 order-lg-3">
                        <button type="submit" class="btn btn-block btn-primary" aria-label="Passer a l'etape suivante" data-matomo-event="true" data-matomo-category="salaries" data-matomo-action="submit" data-matomo-option="edit_jobseeker_infos_submit">
                          <span>Mettre a jour</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

export const Default = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Version detail de la page formulaire avec stepper, formulaire principal et box organization latérale.",
      },
    },
  },
};

export const InformationsPersonnelles = {
  render: renderInformationsPersonnelles,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple de formulaire de modification d'informations personnelles avec alerte contextuelle et champs d'identification.",
      },
    },
  },
};

const renderMultipleFieldsets = () => `
<main id="main" role="main" class="s-main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-title">
            <div class="c-title__main">
              <h1>Fiches salarié ASP : MARTIN Sylvie</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s-section">
    <div class="s-section__container container">
      <div class="s-section__row row mb-3 mb-md-5">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9">
          <div class="c-stepper">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width:60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-labelledby="currentProgressState">
              </div>
            </div>
            <p id="currentProgressState">
              <strong>Étape 3</strong>/5 : Situation
            </p>
          </div>
        </div>
      </div>
      <div class="s-section__row row">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9">
          <h2 class="visually-hidden">Situation du salarié</h2>
          <div class="c-form">
            <form method="post" class="js-prevent-multiple-submit">
              <fieldset>
                <legend class="h3">Qualification et maîtrise du français</legend>
                <div class="form-group form-group-required"><label class="form-label" for="id_education_level">Niveau de formation</label><select name="education_level" class="form-select" required="" id="id_education_level">
                    <option value="" selected="">---------</option>
                    <option value="00">Personne avec qualifications non-certifiantes</option>
                    <option value="01">Jamais scolarisé</option>
                    <option value="10">Troisième cycle ou école d'ingénieur</option>
                    <option value="20">Formation de niveau licence</option>
                    <option value="30">Formation de niveau BTS ou DUT</option>
                    <option value="40">Formation de niveau BAC</option>
                    <option value="41">Brevet de technicien ou baccalauréat professionnel</option>
                    <option value="50">Formation de niveau BEP ou CAP</option>
                    <option value="51">Diplôme obtenu CAP ou BEP</option>
                    <option value="60">Formation courte d'une durée d'un an</option>
                    <option value="70">Pas de formation au-delà de la scolarité obligatoire</option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="low_level_in_french" class="form-check-input" id="id_low_level_in_french"><label class="form-check-label" for="id_low_level_in_french">Maîtrise de la langue française inférieure au niveau A1</label></div>
                </div>
              </fieldset>
              <hr class="mt-2 mb-3">
              <fieldset>
                <legend class="h3">Ressources</legend>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="resourceless" class="form-check-input" id="id_resourceless"><label class="form-check-label" for="id_resourceless">Sans ressource</label></div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="rsa_allocation" data-bs-toggle="collapse" data-bs-target="#collapse_rsa_allocation" aria-controls="collapse_rsa_allocation" aria-expanded="false" class="form-check-input" aria-describedby="id_rsa_allocation_helptext" id="id_rsa_allocation"><label class="form-check-label" for="id_rsa_allocation">Bénéficiaire du RSA</label>
                    <div id="id_rsa_allocation_helptext" class="form-text">Revenu de solidarité active</div>
                  </div>
                </div>
                <div id="collapse_rsa_allocation" class="ps-3 pb-1 mb-3 border-start border-primary collapse">
                  <div class="form-group"><label class="form-label" for="id_rsa_markup">Majoration du RSA</label><select name="rsa_markup" class="form-select" id="id_rsa_markup">
                      <option value="OUI-M">Bénéficiaire du RSA et majoré</option>
                      <option value="OUI-NM">Bénéficiaire du RSA et non-majoré</option>
                    </select></div>
                  <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_rsa_allocation_since">Bénéficiaire du RSA depuis</label><select name="rsa_allocation_since" class="form-select" id="id_rsa_allocation_since">
                      <option value="" selected="">---------</option>
                      <option value="01">Moins de 6 mois</option>
                      <option value="02">De 6 à 11 mois</option>
                      <option value="03">De 12 à 23 mois</option>
                      <option value="04">24 mois et plus</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <hr class="mt-2 mb-3">
              <fieldset>
                <legend class="h3">Situation professionnelle</legend>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="unemployed" data-bs-toggle="collapse" data-bs-target="#collapse_unemployed" aria-controls="collapse_unemployed" aria-expanded="false" class="form-check-input" id="id_unemployed"><label class="form-check-label" for="id_unemployed">Sans emploi à l'embauche</label></div>
                </div>
                <div id="collapse_unemployed" class="ps-3 pb-1 mb-3 border-start border-primary collapse">
                  <div class="form-group form-group-input-w-lg-66"><label class="form-label" for="id_unemployed_since">Sans emploi depuis</label><select name="unemployed_since" class="form-select" id="id_unemployed_since">
                      <option value="" selected="">---------</option>
                      <option value="01">Moins de 6 mois</option>
                      <option value="02">De 6 à 11 mois</option>
                      <option value="03">De 12 à 23 mois</option>
                      <option value="04">24 mois et plus</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <hr class="mt-2 mb-3">
              <fieldset>
                <legend class="h3">Situation de handicap</legend>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="rqth_employee" class="form-check-input" aria-describedby="id_rqth_employee_helptext" id="id_rqth_employee"><label class="form-check-label" for="id_rqth_employee">Titulaire de la RQTH</label>
                    <div id="id_rqth_employee_helptext" class="form-text">Reconnaissance de la qualité de travailleur handicapé</div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="oeth_employee" class="form-check-input" aria-describedby="id_oeth_employee_helptext" id="id_oeth_employee"><label class="form-check-label" for="id_oeth_employee">Bénéficiaire de la loi handicap (OETH)</label>
                    <div id="id_oeth_employee_helptext" class="form-text">L'obligation d'emploi des travailleurs handicapés</div>
                  </div>
                </div>
              </fieldset>
              <hr class="mt-2 mb-3">
              <fieldset>
                <legend class="h3">Situation familiale</legend>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="isolated_parent" class="form-check-input" id="id_isolated_parent"><label class="form-check-label" for="id_isolated_parent">Parent isolé</label></div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="ase_exit" class="form-check-input" id="id_ase_exit"><label class="form-check-label" for="id_ase_exit">Sortant de l'ASE (Aide Sociale à l'Enfance)</label></div>
                </div>
              </fieldset>
              <hr class="mt-2 mb-3">
              <fieldset>
                <legend class="h3">Autres situations</legend>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="housing_issue" class="form-check-input" id="id_housing_issue"><label class="form-check-label" for="id_housing_issue">Personne sans hébergement ou hébergée ou ayant un parcours de rue</label></div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="refugee" class="form-check-input" id="id_refugee"><label class="form-check-label" for="id_refugee">Réfugié statutaire ou bénéficiaire de la protection subsidiaire</label></div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="detention_exit_or_ppsmj" class="form-check-input" id="id_detention_exit_or_ppsmj"><label class="form-check-label" for="id_detention_exit_or_ppsmj">Sortant de détention ou personne placée sous main de justice</label></div>
                </div>
                <div class="form-group">
                  <div class="form-check"><input type="checkbox" name="mobility_issue" class="form-check-input" id="id_mobility_issue"><label class="form-check-label" for="id_mobility_issue">Problème de mobilité</label></div>
                </div>
              </fieldset>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-2 mb-3">
                  <small class="d-inline-block mb-3">* champs obligatoires</small>
                  <div class="form-row align-items-center justify-content-end gx-3">
                    <div class="form-group col-12 col-lg order-3 order-lg-1">
                      <button type="button" class="btn btn-link btn-ico ps-lg-0 w-100 w-lg-auto" aria-label="Annuler la saisie de ce formulaire">
                        <i class="ri-close-line ri-lg" aria-hidden="true"></i>
                        <span>Annuler</span>
                      </button>
                    </div>
                    <div class="form-group col col-lg-auto order-1 order-lg-2">
                      <a href="" class="btn btn-block btn-outline-primary" aria-label="Retourner à l'étape précédente">
                        <span>Retour</span>
                      </a>
                    </div>
                    <div class="form-group col col-lg-auto order-2 order-lg-3">
                      <button type="submit" class="btn btn-block btn-primary" aria-label="Passer à l'étape suivante">
                        <span>Suivant</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

export const AvecPlusieursFieldsets = {
  render: renderMultipleFieldsets,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple avec plusieurs `<fieldset>` séparés par des lignes `<hr>`. Pour les formulaires organisés en sections multiples (Qualification, Ressources, Situation professionnelle, Handicap, etc.).",
      },
    },
  },
};
