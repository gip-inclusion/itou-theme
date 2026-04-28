function initOnglets() {
  const commentairesBtn = document.querySelector("#commentaires-btn");
  const commentairesTab = document.querySelector("#commentaires-tab");

  commentairesBtn.addEventListener("click", function () {
    bootstrap.Tab.getOrCreateInstance(commentairesTab).show();
  });
}

export default {
  title: "Templates/Page Detail",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1600px; margin: 0 auto;">${Story()}</div>`;
      setTimeout(() => {
        initOnglets();
      }, 0);
      return html;
    },
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Différents exemples de "Fiche Détail" reprenant les règles UX/UI de mise en forme.

### Règles d'intégration
- Pour chaque "sous-page" en onglet, ajouter un titre en \`<h2>\` afin de répéter le libellé d'onglet et de laisser de l'espace à droite pour un cta d'action principale.
- Pour chaque page sans onglet, conserver un titre en \`<h2>\` mais le masquer avec \`.visually-hidden\` afin de maintenir une hiérarchie de titre cohérente.
- Dans chaque \`.c-box\`, ajouter systématiquement un titre en \`<h3>\`.
- Privilégier la séparation des contenus en plusieurs \`.c-box\`.
- N'utiliser un séparateur \`<hr>\` de séparation de contenu uniquement quand la séparation par \`.c-box\` n'est pas possible ou pas pertinente.
- Dans une \`.c-box\`, pour une action principale, placer un lien \`.btn-outline-primary\` à droite du titre \`<h3>\`.
- Dans une \`.c-box\`, pour une action complémentaire, utiliser \`.btn-link\` pour un lien simple et \`.btn-secondary\` pour une action de type bouton.
- Utiliser \`.c-info\` pour une information toujours visible.
- Utiliser \`.alert\` pour une information conditionnelle (type d'utilisateur, étape en cours, nouvelle règle de gestion).
`,
      },
    },
  },
};

const renderSansOngletsMultiBox = () => `
<main class="s-main" role="main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-prevstep">
            <a href="/approvals/list" class="btn btn-ico btn-link ps-0" aria-label="Retour à la liste">
              <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
              <span>
                Retour
                à la liste
              </span>
            </a>
          </div>
          <div class="c-title">
            <div class="c-title__main">
              <h1>Salarié&nbsp;: DALLEAU Demba</h1>
              <p id="copy_public_id">
                Copier l'ID du candidat
                <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_public_id" data-it-clipboard-button="copy" data-it-copy-to-clipboard="710f2736-501f-4eef-967c-e43096d834fc" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                  <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                  <span class="visually-hidden">Copier</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="s-section">
    <div class="s-section__container container">
      <div class="s-section__row row">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9 order-3 order-xxl-2">
          <h2 class="visually-hidden">Informations générales du Salarié&nbsp;: DALLEAU Demba</h2>
          <div class="c-box mb-3 mb-md-4">
            <div class="row mb-3">
              <div class="col-12 col-sm">
                <h3 class="mb-0">Informations personnelles</h3>
              </div>
              <div class="col-12 col-sm-auto mt-2 mt-sm-0 d-flex align-items-center">
                <a href="" class="btn btn-ico btn-outline-primary" data-matomo-event="true" data-matomo-category="salaries" data-matomo-action="clic" data-matomo-option="edit_jobseeker_infos" aria-label="Modifier les informations personnelles de DALLEAU Demba">
                  <i class="ri-pencil-line fw-medium" aria-hidden="true"></i>
                  <span>Modifier</span>
                </a>
              </div>
            </div>
            <ul class="list-data">
              <li>
                <small>Prénom</small>
                <strong>Demba</strong>
              </li>
              <li>
                <small>Nom</small>
                <strong>DALLEAU</strong>
              </li>
              <li>
                <small>Téléphone</small>
                <i class="text-disabled">Non renseigné</i>
              </li>
              <li>
                <small>Adresse e-mail</small>
                <strong>dkzjafkhzakfh@gmail.com</strong>
                <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="dkzjafkhzakfh@gmail.com" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                  <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                  <span class="visually-hidden">Copier</span>
                </button>
              </li>
              <li>
                <small>Date de naissance</small>
                <strong>01/01/1999</strong>
              </li>
              <li>
                <small>Adresse</small>
                <address>Promenade des Anglais, 06200 Nice</address>
              </li>
              <li>
                <small>Numéro de sécurité sociale</small>
                <strong><span>2</span><span class="ms-1">99</span><span class="ms-1">01</span><span class="ms-1">80</span><span class="ms-1">782</span><span class="ms-1">002</span><span class="ms-1">95</span></strong>
                <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="299018078200295" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
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
          </div>
          <div class="c-box mb-3 mb-md-4">
            <div class="row">
              <div class="col-12 col-sm">
                <h3 class="mb-2 mb-md-0">Éligibilité à l'IAE</h3>
              </div>
              <div class="col-12 col-sm-auto">
                <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                  <i class="ri-pass-valid-line" aria-hidden="true"></i>
                  PASS&nbsp;IAE valide (non démarré)
                </span>
              </div>
            </div>
            <p class="fs-sm text-success mb-3">
              Confirmée le 28/04/2026 par
              DELAVIGNE Daphnée
              (ETTI Une nouvelle chance).
            </p>
            <ul class="list-data">
              <li>
                <small>Durée de validité du diagnostic</small>
                <strong>du 28/04/2026 au 27/04/2028</strong>
              </li>
              <li>
                <small>
                  Critères administratifs
                  <i class="ri-information-line text-info" data-bs-toggle="tooltip" data-bs-title="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic ayant permis la délivrance d’un PASS IAE, elle a peut-être changé depuis cette date." aria-label="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic, elle a peut-être changé depuis cette date." role="button" tabindex="0"></i>
                </small>
                <ul>
                  <li>
                    Niveau d'étude 3 (CAP, BEP) ou infra
                  </li>
                  <li>
                    DELD (12-24 mois)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-xxl-4 col-xxxl-3 order-2 order-xxl-3">
          <div class="c-box c-box--pass bg-success-lightest border-success mb-3 mb-md-4">
            <div class="mb-3 mb-md-4">
              <span class="badge badge-base rounded-pill bg-success text-white">
                <i class="ri-pass-valid-line" aria-hidden="true"></i>
                PASS&nbsp;IAE valide (non démarré)
              </span>
            </div>
            <ul class="list-data">
              <li>
                <small>Numéro de PASS&nbsp;IAE</small>
                <strong><span>99999</span><span class="ms-1">94</span><span class="ms-1">36646</span></strong>
              </li>
              <li>
                <small>Date de début</small>
                <strong>29/04/2026</strong>
              </li>
              <li>
                <small>Date de fin prévisionnelle
                  <i class="ri-information-line ri-xl text-info" aria-label="Cette date de fin est susceptible d’évoluer avec les éventuelles suspensions et prolongations du PASS&nbsp;IAE." data-bs-toggle="tooltip" data-bs-title="Cette date de fin est susceptible d’évoluer avec les éventuelles suspensions et prolongations du PASS&nbsp;IAE." role="button" tabindex="0">
                  </i>
                </small>
                <strong>27/04/2028</strong>
              </li>
              <li>
                <small>
                  Durée de validité
                  <i class="ri-information-line ri-xl text-info" aria-label="La durée de validité est calculée sur la base d’un nombre de jours calendaires. Si le PASS&nbsp;IAE n’est pas suspendu, elle décroît donc tous les jours (samedi, dimanche et jours fériés compris)." data-bs-toggle="tooltip" data-bs-title="La durée de validité est calculée sur la base d’un nombre de jours calendaires. Si le PASS&nbsp;IAE n’est pas suspendu, elle décroît donc tous les jours (samedi, dimanche et jours fériés compris)." role="button" tabindex="0">
                  </i>
                </small>
                <strong class="text-success">
                  730 jours (Environ 1&nbsp;an et 11&nbsp;mois)
                  <br>
                  <a href="" class="btn-link has-external-link" target="_blank">Comment est calculée cette durée ?</a>
                </strong>
              </li>
            </ul>
            <a href="" class="btn btn-outline-primary btn-block btn-ico bg-white mt-3">
              <i class="ri-eye-line font-weight-medium" aria-hidden="true"></i>
              <span>Afficher le PASS&nbsp;IAE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

const renderSansOngletsMonoBox = () => `
<main class="s-main" role="main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-prevstep">
            <a href="" class="btn btn-ico btn-link ps-0" aria-label="Retour à la liste">
              <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
              <span>
                Retour
                à la liste
              </span>
            </a>
          </div>
          <div class="c-title">
            <div class="c-title__main">
              <h1>
                Fiche salarié ASP : FOOTSALL Djordan
                <span class="badge rounded-pill badge-base text-nowrap bg-emploi">Nouvelle à compléter</span>
              </h1>
            </div>
          </div>
          <div class="c-box c-box--action">
            <div class="form-row align-items-center gx-3">
              <div class="form-group col-12 col-lg-auto">
                <a href="/employee_record/create/ba960978-d4fe-4e69-ba49-39e1d7720f5a?from_status=NEW" class="btn btn-lg btn-white btn-block btn-ico">
                  <i class="ri-file-edit-line font-weight-medium" aria-hidden="true"></i>
                  <span>Compléter</span>
                </a>
              </div>
              <div class="form-group col-12 col-lg-auto">
                <a href="/employee_record/disable/5" class="btn btn-lg btn-outline-white btn-block btn-ico">
                  <i class="ri-file-close-line font-weight-medium" aria-hidden="true"></i>
                  <span>Désactiver</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="s-section">
    <div class="s-section__container container">
      <div class="s-section__row row">
        <div class="s-section__col col-12 col-xxl-8 col-xxxl-9 order-3 order-xxl-2">
          <h2 class="visually-hidden">Informations de la Fiche salarié ASP : FOOTSALL Djordan</h2>
          <div class="c-box mb-3 mb-md-4">
            <h3>Etat civil</h3>
            <ul class="list-data">
              <li>
                <small>Prénom</small>
                <strong>DJAMILA</strong>
              </li>
              <li>
                <small>Nom</small>
                <strong>FOTSO TAGATIO</strong>
              </li>
              <li>
                <small>Date de naissance</small>
                <strong>1 juin 1998</strong>
              </li>
              <li>
                <small>Lieu de naissance</small>
                <strong>MAMOUDZOU (985)</strong>
              </li>
              <li>
                <small>Pays de naissance</small>
                <strong>FRANCE</strong>
              </li>
              <li>
                <small>Numéro de sécurité sociale</small>
                <strong><span>2</span><span class="ms-1">98</span><span class="ms-1">06</span><span class="ms-1">98</span><span class="ms-1">511</span><span class="ms-1">071</span><span class="ms-1">39</span></strong>
              </li>
            </ul>
            <hr class="my-4">
            <h3>Domiciliation</h3>
            <ul class="list-data">
              <li>
                <small>Adresse</small>
                <address>Promenade des Anglais - 06200 NICE</address>
              </li>
            </ul>
            <hr class="my-4">
            <h3>Situation du salarié</h3>
            <ul class="mb-0 fs-sm">
              <li>Pas de formation au-delà de la scolarité obligatoire</li>
              <li>Le salarié ne dispose d'aucune ressource</li>
              <li>
                Salarié sans emploi depuis moins de 6 mois
              </li>
              <li>Titulaire de la RQTH</li>
            </ul>
            <hr class="my-4">
            <h3>Annexe financière</h3>
            <p class="mb-0 fs-sm">
              ETTI656320221A2M2 (validée)
            </p>
            <p class="mb-0 fs-sm">
              L’annexe financière n’est pas transmise à l’Extranet IAE 2.0 de l’ASP.
              Elle est destinée uniquement aux logiciels de gestion des salariés.
            </p>
          </div>
        </div>
        <div class="col-12 col-xxl-4 col-xxxl-3 order-2 order-xxl-3">
          <div class="c-box bg-info-lightest border-info mb-3 mb-md-4">
            <ul class="list-data">
              <li>
                <small>PASS&nbsp;IAE</small>
                <strong><span>99999</span><span class="ms-1">99</span><span class="ms-1">33333</span></strong>
              </li>
              <li>
                <small>SIRET (mesure)</small>
                <strong>500 XXX 616 00000</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

const renderAvecOnglets = () => `
<main class="s-main" role="main">
  <section class="s-title-02">
    <div class="s-title-02__container container">
      <div class="s-title-02__row row">
        <div class="s-title-02__col col-12">
          <div class="c-prevstep">
            <a href="" class="btn btn-ico btn-link ps-0" aria-label="Retour à la liste">
              <i class="ri-arrow-drop-left-line ri-xl fw-medium" aria-hidden="true"></i>
              <span>
                Retour
                à la liste
              </span>
            </a>
          </div>
          <div class="c-title">
            <div class="c-title__main">
              <h1>
                Candidature de Truc MUCHE
                <span id="state_d6f63cf6-37f2-4ad7-9c69-5c4fe3afd3df" class="badge rounded-pill text-nowrap badge-base bg-success">Candidature acceptée</span>
              </h1>
            </div>
            <div class="c-title__cta">
              <button class="btn btn-lg btn-ico-only btn-link" type="button" data-it-action="print" aria-label="Imprimer la candidature de Truc MUCHE">
                <i class="ri-printer-line fw-normal" aria-hidden="true"></i>
              </button>
              <button class="btn btn-danger btn-lg btn-ico" data-bs-toggle="modal" data-bs-target="#cancel_hire_modal">
                <i class="ri-arrow-go-back-line fw-medium" aria-hidden="true"></i>
                <span>Annuler l’embauche</span>
              </button>
            </div>
          </div>
          <div class="tns-outer" id="tns1-ow">
            <div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button type="button" data-controls="prev" tabindex="-1" aria-controls="tns1">prev</button><button type="button" data-controls="next" tabindex="-1" aria-controls="tns1">next</button></div>
            <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 2</span> of 2</div>
            <div id="tns1-mw" class="tns-ovh">
              <div class="tns-inner" id="tns1-iw">
                <ul class="s-tabs-01__nav nav nav-tabs mb-0  tns-slider tns-carousel tns-subpixel tns-calc tns-autowidth tns-horizontal" role="tablist" data-it-sliding-tabs="true" id="tns1" style="transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                  <li class="nav-item tns-item tns-slide-active" role="presentation" id="tns1-item0">
                    <a class="nav-link active" id="informations-tab" data-bs-toggle="tab" href="#informations" role="tab" aria-controls="informations" aria-selected="true" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic-onglet" data-matomo-option="informations-generales">Informations générales</a>
                  </li>
                  <li class="nav-item tns-item tns-slide-active" role="presentation" id="tns1-item1">
                    <a class="nav-link" id="commentaires-tab" data-bs-toggle="tab" href="#commentaires" role="tab" aria-controls="commentaires" aria-selected="false" tabindex="-1">Commentaires</a>
                  </li>
                  <li class="nav-item tns-item tns-slide-active" role="presentation" id="tns1-item1">
                    <a class="nav-link" id="historique-tab" data-bs-toggle="tab" href="#historique" role="tab" aria-controls="historique" aria-selected="false" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic-onglet" data-matomo-option="historique" tabindex="-1">Historique</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="s-section">
    <div class="s-section__container container">
      <div class="tab-content">
        <div class="tab-pane fade show active" id="informations" role="tabpanel" aria-labeledby="informations-tab">
          <div class="s-section__row row">
            <div class="s-section__col col-12 col-xxl-12 order-1 order-xxl-1">
              <div class="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-md-between mb-3">
                <h2 class="mb-0">Informations générales</h2>
                <div class="d-flex flex-column flex-md-row gap-2" id="copy_public_id">
                  <button class="btn btn-ico btn-secondary" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_public_id" data-it-clipboard-button="copy" data-it-copy-to-clipboard="46d882ce-39b9-4969-ac33-e8e6db3f2270" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                    <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                    <span>Copier l'ID du candidat</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="s-section__col col-12 col-xxl-8 col-xxxl-9 order-3 order-xxl-2">
              <div class="c-box mb-3 mb-md-4">
                <div class="row mb-3">
                  <div class="col-12 col-sm">
                    <h3 class="mb-0">Informations personnelles</h3>
                  </div>
                  <div class="col-12 col-sm-auto mt-2 mt-sm-0 d-flex align-items-center">
                    <a href="" class="btn btn-ico btn-outline-primary" aria-label="Modifier les informations personnelles de HENRY Jacques">
                      <i class="ri-pencil-line fw-medium" aria-hidden="true"></i>
                      <span>Modifier</span>
                    </a>
                  </div>
                </div>
                <ul class="list-data">
                  <li>
                    <small>Prénom</small>
                    <strong>Jacques</strong>
                  </li>
                  <li>
                    <small>Nom</small>
                    <strong>HENRY</strong>
                  </li>
                  <li>
                    <small>Téléphone</small>
                    <strong>06 00 00 00 00</strong>
                    <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_sender_phone" data-it-clipboard-button="copy" data-it-copy-to-clipboard="0600000000" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                      <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                      <span class="visually-hidden">Copier</span>
                    </button>
                  </li>
                  <li>
                    <small>Adresse e-mail</small>
                    <strong>demo.emplois+de@inclusion.gouv.fr</strong>
                    <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="demo.emplois+de@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                      <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                      <span class="visually-hidden">Copier</span>
                    </button>
                  </li>
                  <li>
                    <small>Date de naissance</small>
                    <strong>13/03/1990</strong>
                  </li>
                  <li>
                    <small>Adresse</small>
                    <address>Route des Plages, 64500 Saint-Jean-de-Luz</address>
                  </li>
                  <li>
                    <small>Numéro de sécurité sociale</small>
                    <strong><span>1</span><span class="ms-1">90</span><span class="ms-1">03</span><span class="ms-1">13</span><span class="ms-1">987</span><span class="ms-1">009</span><span class="ms-1">53</span></strong>
                    <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="190031398700953" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                      <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                      <span class="visually-hidden">Copier</span>
                    </button>
                  </li>
                  <li>
                    <small>Identifiant France Travail</small>
                    <strong>7654321A</strong>
                    <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_jobseeker_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="7654321A" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                      <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                      <span class="visually-hidden">Copier</span>
                    </button>
                  </li>
                  <li>
                    <small>Curriculum vitae</small>
                    <i class="text-disabled">Non renseigné</i>
                  </li>
                </ul>
              </div>
              <div class="c-box mb-3 mb-md-4">
                <div class="row">
                  <div class="col-12 col-sm">
                    <h3 class="mb-2 mb-md-0">Éligibilité à l'IAE</h3>
                  </div>
                  <div class="col-12 col-sm-auto">
                    <span class="badge badge-sm rounded-pill bg-success-lighter text-success">
                      <i class="ri-pass-valid-line" aria-hidden="true"></i>
                      PASS&nbsp;IAE valide
                    </span>
                  </div>
                </div>
                <p class="fs-sm text-success mb-3">
                  Confirmée le 24/07/2025 par
                  DUFOUR André
                  (MISSION LOCALE DU TERRITOIRE).
                </p>
                <ul class="list-data">
                  <li>
                    <small>Durée de validité du diagnostic</small>
                    <strong>du 24/07/2025 au 31/07/2027</strong>
                  </li>
                  <li>
                    <small>
                      Critères administratifs
                      <i class="ri-information-line text-info" data-bs-toggle="tooltip" data-bs-title="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic ayant permis la délivrance d’un PASS IAE, elle a peut-être changé depuis cette date." aria-label="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic, elle a peut-être changé depuis cette date." role="button" tabindex="0"></i>
                    </small>
                    <i class="text-disabled">Le prescripteur habilité n’a pas renseigné de critères.</i>
                  </li>
                </ul>
              </div>
              <div class="c-box mb-3 mb-md-4">
                <h3>Candidature</h3>
                <ul class="list-data mb-3">
                  <li>
                    <small>Émetteur</small>
                    <strong>André DUFOUR</strong>
                  </li>
                  <li>
                    <small>Type</small>
                    <strong>Prescripteur</strong>
                  </li>
                  <li>
                    <small>Organisation</small>
                    <strong>France Travail - ARLES</strong>
                    <span class="badge badge-xs rounded-pill bg-warning">Prescripteur habilité</span>
                  </li>
                  <li>
                    <small>Adresse e-mail</small>
                    <strong>demo.emplois+prescripteur@inclusion.gouv.fr</strong>
                    <button class="btn-link" type="button" data-matomo-event="true" data-matomo-category="candidature" data-matomo-action="clic" data-matomo-option="copied_sender_email" data-it-clipboard-button="copy" data-it-copy-to-clipboard="demo.emplois+prescripteur@inclusion.gouv.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copié !">
                      <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
                      <span class="visually-hidden">Copier</span>
                    </button>
                  </li>
                  <li>
                    <small>Date</small>
                    <strong>Le 27/08/2025</strong>
                  </li>
                  <li class="has-forced-line-break mb-0">
                    <small>Message de candidature</small>
                    <blockquote class="blockquote mt-2 mb-0">
                      <p>Passionné par la mécanique automobile et ayant une bonne expérience en entretien et réparation de véhicules, je suis à la recherche d’un poste dans votre garage. Motivé, sérieux et dynamique, je serais ravi de mettre mes compétences au service de votre équipe.<br>Restant à votre disposition pour un entretien</p>
                    </blockquote>
                  </li>
                </ul>
                <hr class="my-4">
                <ul class="list-data mb-3">
                  <li>
                    <small>Employeur destinataire</small>
                    <a class="btn-link" href="/company/3850/card?back_url=/apply/50adc687-ac2d-4f5a-b95f-e67f87506c65/prescriber/details%3Fback_url%3D/apply/prescriptions/list"><strong>EI Garage Martinet Siège</strong></a>
                  </li>
                </ul>
                <span class="d-block fs-sm">
                  Poste recherché</span>
                <ul class="list-group list-group-flush mt-2">
                  <li class="list-group-item list-group-item-action">
                    <b>Candidature spontanée</b>
                  </li>
                </ul>
              </div>
              <div class="c-box mb-3 mb-md-4">
                <div class="row mb-3">
                  <div class="col-12 col-sm">
                    <h3 class="mb-0">Dernier accompagnateur connu</h3>
                  </div>
                </div>
                <form id="display-contact-info-form">
                  <input type="hidden" name="csrfmiddlewaretoken" value="3xCd6OZ1V6VB65MVA3dMrg4m3KUSKtI8F0hZLhcy9OXNKeJhIZaS9T4egTs6FPgX">
                </form>
                <div class="has-links-inside" id="card-d9e0b843-fc23-4d9c-9909-5c1cb43ef6bf">
                  <ul class="list-data">
                    <li class="d-flex flex-row align-items-center">
                      <small>Accompagnateur</small>
                      <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-2">
                        <strong>Victor LACOSTE</strong>
                      </div>
                    </li>
                    <li>
                      <small>Type</small>
                      <strong>Employeur</strong>
                    </li>
                    <li>
                      <small>Organisation</small>
                      <strong>EI Garage Martinet Siège</strong>
                    </li>
                    <li>
                      <small>Accompagnateur depuis le</small> <strong>24/07/2025</strong>
                    </li>
                    <li>
                      <small>Motif de l’accompagnement</small>
                      <i class="text-disabled">Non renseigné</i>
                    </li>
                    <li>
                      <small>Téléphone</small>
                      <i class="text-disabled">Non renseigné</i>
                    </li>
                    <li>
                      <small>Adresse e-mail</small>
                      <button class="btn-link btn-ico">
                        <div class="stable-text">
                          <i class="ri-mail-line fw-medium" aria-hidden="true"></i>
                          <span>Afficher l'email</span>
                        </div>
                        <div class="loading-text">
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Affichage en cours</span>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="c-info mt-3 mt-md-4">
                  <button class="c-info__summary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfoExample" aria-expanded="false" aria-controls="collapseInfoExample">
                    <span>
                      Découvrez les 2 autres intervenants qui ont accompagné HENRY Jacques
                    </span>
                  </button>
                  <div class="c-info__detail collapse" id="collapseInfoExample">
                    <a href="/gps/groups/1/memberships">Liste des intervenants</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-xxl-4 col-xxxl-3 order-2 order-xxl-3">
              <div class="c-box c-box--pass bg-success-lightest border-success mb-3 mb-md-4">
                <div class="mb-3">
                  <span class="badge badge-base rounded-pill bg-success text-white">
                    <i class="ri-pass-valid-line" aria-hidden="true"></i>
                    PASS&nbsp;IAE valide
                  </span>
                </div>
                <ul class="list-data">
                  <li class="order-1">
                    <small>Numéro de PASS&nbsp;IAE</small>
                    <strong><span>99999</span><span class="ms-1">99</span><span class="ms-1">10810</span></strong>
                  </li>
                  <li>
                    <small>Date de début</small>
                    <strong>12/05/2025</strong>
                  </li>
                  <li>
                    <small>Date de fin prévisionnelle
                      <i class="ri-information-line ri-xl text-info" aria-label="Cette date de fin est susceptible d’évoluer avec les éventuelles suspensions et prolongations du PASS&nbsp;IAE." data-bs-toggle="tooltip" data-bs-title="Cette date de fin est susceptible d’évoluer avec les éventuelles suspensions et prolongations du PASS&nbsp;IAE." role="button" tabindex="0">
                      </i>
                    </small>
                    <strong>11/05/2027</strong>
                  </li>
                  <li>
                    <small>
                      Durée de validité
                      <i class="ri-information-line ri-xl text-info" aria-label="Le reliquat est calculé sur la base d’un nombre de jours calendaires. Si le PASS&nbsp;IAE n’est pas suspendu, il décroît donc tous les jours (samedi, dimanche et jours fériés compris)." data-bs-toggle="tooltip" data-bs-title="Le reliquat est calculé sur la base d’un nombre de jours calendaires. Si le PASS&nbsp;IAE n’est pas suspendu, il décroît donc tous les jours (samedi, dimanche et jours fériés compris)." role="button" tabindex="0">
                      </i>
                    </small>
                    <strong class="text-success">723 jours (Environ 1&nbsp;an et 11&nbsp;mois)</strong>
                  </li>
                </ul>
                <a href="" class="btn btn-outline-primary btn-block btn-ico bg-white mt-3">
                  <i class="ri-eye-line font-weight-medium" aria-hidden="true"></i>
                  <span>Afficher le PASS&nbsp;IAE</span>
                </a>
              </div>
              <div class="c-box c-box--note mb-3 mb-md-4">
                <form>
                  <h3>
                    Ajouter un commentaire
                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Attention à vos propos. La communication de données sensibles sur les usagers et les propos dégradants, sexistes, homophobes ou racistes ne sont pas autorisés.">
                      <i class="ri-information-line ri-xl text-info ms-1" aria-label="Attention à vos propos. La communication de données sensibles sur les usagers et les propos dégradants, sexistes, homophobes ou racistes ne sont pas autorisés."></i>
                    </button>
                  </h3>
                  <div class="form-group is-invalid form-group-required">
                    <label class="visually-hidden" for="id_message">Ajouter un commentaire</label>
                    <textarea name="message" cols="40" rows="10" data-it-expandable="true" class="form-control has-textarea-ratio-16-9" required="" aria-invalid="true" aria-describedby="id_message_helptext id_message_error" id="id_message"></textarea>
                    <div id="id_message_error">
                      <div class="invalid-feedback">Ce champ est obligatoire.</div>
                    </div>
                    <div id="id_message_helptext" class="form-text">Seuls les membres de la structure sont autorisés à consulter les commentaires.</div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <button class="btn btn-outline-primary btn-sm btn-ico-only bg-white" type="reset">
                        <span class="visually-hidden">Annuler l'ajout d'un commentaire partagé avec tous les membres de la structure</span>
                        <i class="ri-close-line" aria-hidden="true"></i>
                      </button>
                      <button class="btn btn-outline-primary btn-sm btn-ico-only bg-white" type="submit">
                        <span class="visually-hidden">Valider l'ajout d'un commentaire partagé avec tous les membres de la structure</span>
                        <i class="ri-check-line" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="c-box mb-3 mb-md-4">
                <h3>Derniers commentaires</h3>
                <ul class="list-note">
                  <li>
                    <time datetime="2025-05-08T08:05:47.219460+00:00">Le 08 mai 2025 à 10:05</time>
                    <strong>Miguel CORTEZ (vous)</strong>
                    <blockquote class="blockquote">
                      <div class="collapse show collapseLastComment has-no-transition">
                        <p class="mb-0">Une citation bien connue, contenue dans un élément blockquote. Lorem ipsum, dolor sit amet consectetur adipisicing ...</p>
                        <button class="btn-link d-inline-block mt-2" type="button" data-bs-toggle="collapse" data-bs-target=".collapseLastComment" aria-expanded="false" aria-controls="collapseLastComment">
                          Voir +
                        </button>
                      </div>
                      <div class="collapse collapseLastComment has-no-transition">
                        <p>Une citation bien connue, contenue dans un élément blockquote. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum totam, corrupti nisi quas minus beatae libero, voluptatem iusto hic perspiciatis vel doloremque minima illum quia dolorem velit mollitia at!</p>
                        <p class="mb-0">Distinctio deserunt, molestias enim odit labore beatae, odio est eveniet illo tempora tempore, accusantium aliquam hic commodi. Explicabo eum minima similique libero.</p>
                      </div>
                    </blockquote>

                    <blockquote class="blockquote">
                      <div class="collapse show collapseComment6 has-no-transition">
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim ducimus aut assumenda nemo porro repellat unde quasi ipsa possimus sunt, sequi accusantium! Corrupti veritatis eos impedit nam distinc…</p>
                        <button class="btn-link d-inline-block mt-2" type="button" data-bs-toggle="collapse" data-bs-target=".collapseComment6" aria-expanded="false" aria-controls="collapseComment6">Voir +</button>
                      </div>
                      <div class="collapse collapseComment6 has-no-transition">
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim ducimus aut assumenda nemo porro repellat unde quasi ipsa possimus sunt, sequi accusantium! Corrupti veritatis eos impedit nam distinctio animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim ducimus aut assumenda nemo porro repellat unde quasi ipsa possimus sunt, sequi accusantium! Corrupti veritatis eos impedit nam distinctio animi!</p>
                      </div>
                    </blockquote>
                  </li>
                  <li>
                    <time datetime="2025-05-07T08:05:47.219460+00:00">Le 07 mai 2025 à 10:05</time>
                    <strong>Micheline DURAND</strong>
                  </li>
                  <li>
                    <time datetime="2025-05-06T08:05:47.219460+00:00">Le 06 mai 2025 à 10:05</time>
                    <strong>Pierre LARTICHAUD</strong>
                  </li>
                </ul>
                <button class="btn btn-outline-primary btn-block bg-white mt-3" id="commentaires-btn">
                  Voir tous les commentaires
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="historique" role="tabpanel" aria-labeledby="historique-tab">
          <div class="s-section__row  row">
            <div class="col-12 col-xxl-8 col-xxxl-9 order-2 order-xxl-1">
              <h2>Historique des modifications</h2>
              <ul class="list-step">
                <li>
                  <time datetime="2025-05-06T08:05:47.219460+00:00">Le 06 mai 2025 à 10:05</time>
                  <span>
                    Passé en "Candidature acceptée"
                    par Daphnée DELAVIGNE
                  </span>
                </li>
                <li>
                  <time datetime="2025-04-14T14:55:25.310932+00:00">Le 14 avril 2025 à 16:55</time>
                  <span>
                    Passé en "Candidature en attente"
                    par Daphnée DELAVIGNE
                  </span>
                </li>
                <li>
                  <time datetime="2025-04-14T14:55:08.727186+00:00">Le 14 avril 2025 à 16:55</time>
                  <span>
                    Passé en "Candidature à l'étude"
                    par Daphnée DELAVIGNE
                  </span>
                </li>
                <li>
                  <time datetime="2025-04-09T06:36:19.351292+00:00">Le 09 avril 2025 à 08:36</time>
                  <span>Nouvelle candidature</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="commentaires" role="tabpanel" aria-labeledby="commentaires-tab">
          <div class="s-section__row  row">
            <div class="col-12 col-xxl-8 col-xxxl-9 order-2 order-xxl-1">
              <h2>Commentaires</h2>
              <div class="c-form mb-3 mb-md-4">
                <div class="form-group">
                  <label class="form-label">Ajouter un commentaire</label>
                  <textarea class="form-control has-textarea-ratio-32-9" data-it-expandable="true"></textarea>
                </div>
                <div class="row">
                  <div class="col-12">
                    <hr class="mb-3">
                    <div class="form-row align-items-center justify-content-end gx-3">
                      <div class="form-group col col-lg-auto order-2 order-lg-3">
                        <button type="submit" class="btn btn-block btn-primary" aria-label="Envoyer votre commentaire">
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Liste des commentaires (3)</h3>
              <ul class="list-note">
                <li class="is-current-user">
                  <i class="ri-user-line"></i>
                  <div>
                    <div class="d-flex justify-content-between align-items-start">
                      <div>
                        <time datetime="2025-05-08T08:05:47.219460+00:00">Le 08 mai 2025 à 10:05</time>
                        <strong>Miguel CORTEZ (vous)</strong>
                      </div>
                      <button class="btn btn-sm btn-link btn-ico-only" type="button">
                        <i class="ri-delete-bin-line" data-bs-toggle="tooltip" data-bs-title="Supprimer" aria-label="Supprimer ce commentaire"></i>
                      </button>
                    </div>
                    <blockquote class="blockquote">
                      <p>Une citation bien connue, contenue dans un élément blockquote. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora minus ipsa quasi porro magni. Explicabo, id non quaerat...</p>
                      <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nihil quae, eos soluta culpa repellendus omnis modi nesciunt accusantium quia sapiente earum dolorem enim inventore ipsam, est placeat consectetur blanditiis!</p>
                    </blockquote>
                  </div>
                </li>
                <li>
                  <i class="ri-user-line"></i>
                  <div>
                    <time datetime="2025-05-07T08:05:47.219460+00:00">Le 07 mai 2025 à 10:05</time>
                    <strong>Micheline DURAND</strong>
                    <blockquote class="blockquote">
                      <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nihil quae, eos soluta culpa repellendus omnis modi nesciunt accusantium quia sapiente earum dolorem enim inventore ipsam, est placeat consectetur blanditiis!</p>
                    </blockquote>
                  </div>
                </li>
                <li>
                  <i class="ri-user-line"></i>
                  <div>
                    <time datetime="2025-05-08T06:05:47.219460+00:00">Le 06 mai 2025 à 10:05</time>
                    <strong>Pierre LARTICHAUD</strong>
                    <blockquote class="blockquote">
                      <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nihil quae, eos soluta culpa repellendus omnis modi nesciunt accusantium quia sapiente earum dolorem enim inventore ipsam, est placeat consectetur blanditiis!</p>
                    </blockquote>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`;

export const SansOngletsMultiBox = {
  render: renderSansOngletsMultiBox,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Démo en page simple, sans onglets et avec plusieurs `.c-box` de contenu séparé.",
      },
    },
  },
};

export const SansOngletsMonoBox = {
  render: renderSansOngletsMonoBox,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Démo en page simple, sans onglets mais avec une seule `.c-box` et du contenu séparé par `<hr>` et titre en `<h3>`.",
      },
    },
  },
};

export const AvecOngletsMultibox = {
  render: renderAvecOnglets,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Démo avec onglets avec plusieurs `.c-box` de contenu séparé.",
      },
    },
  },
};
