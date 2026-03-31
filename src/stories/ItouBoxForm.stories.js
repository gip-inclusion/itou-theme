// Button copy to clipboard
function buttonCopyToClipboard() {
  const clipboardButtonCopyList = document.querySelectorAll("[data-it-clipboard-button=copy]");
  for (let i = 0, ii = clipboardButtonCopyList.length; i < ii; i += 1) {
    const thisClipboardButtonCopy = clipboardButtonCopyList[i];
    const thisClipboardButtonCopyValue = thisClipboardButtonCopy.dataset.itCopyToClipboard;
    const thisTooltip = bootstrap.Tooltip.getOrCreateInstance(thisClipboardButtonCopy);

    thisClipboardButtonCopy.addEventListener("click", function () {
      if (!thisClipboardButtonCopy.hasAttribute("aria-describedby")) {
        thisTooltip.show();
        navigator.clipboard
          .writeText(thisClipboardButtonCopyValue)
          .then(() => {
            // console.log('Ok: ' + thisClipboardButtonCopyValue);
          })
          .catch(() => {
            // console.log('Veillez saisir le texte à copier');
          });
      }
    });

    thisClipboardButtonCopy.addEventListener("blur", function () {
      thisTooltip.hide();
    });
  }
}

export default {
  title: "Components/Box Form",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;
      setTimeout(() => {
        buttonCopyToClipboard();
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
Les composants \`.c-box\` et \`.c-form\` servent a structurer et mettre en valeur du contenu.
\`.c-box\` est un conteneur de lecture (resume, informations, bloc contextuel), alors que \`.c-form\` est dedie a l'encapsulation des formulaires.

### Anatomie
1. **Conteneur** - \`.c-box\` ou \`.c-form\`
2. **Contenu** - paragraphes, listes, composants d'information, actions; formulaire

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.c-box\` | Bloc de contenu generique avec fond, bordure et espacements |
| \`.c-form\` | Variante orientee formulaire avec styles descendants pour les champs |

`,
      },
    },
  },
};

const renderBox = () => `
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

`;

const renderForm = () => `
  <div class="c-form">
    <form method="post">
      <fieldset>
        <legend class="h3">Informations générales</legend>
        <div class="form-group form-group-required"><label class="form-label" for="id_brand">Nom à afficher</label><input type="text" name="brand" maxlength="255" placeholder="" class="form-control" required="" aria-describedby="id_brand_helptext" id="id_brand">
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
                <button type="submit" class="btn btn-block btn-primary" aria-label="Passer à l’étape suivante" data-matomo-event="true" data-matomo-category="employeurs" data-matomo-action="submit" data-matomo-option="maj-contact-structure">
                  <span>Suivant</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
`;



export const Box = {
  render: renderBox,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Le `.c-box` est utilisé pour enrober du contenu et créer une zone délimitée.",
      },
    },
  },
};


export const Form = {
  render: renderForm,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Le `.c-form` est utilisé pour enrober un formulaire, il possède de nombreuses sous-classes et règles descendantes pour les éléments de formulaires qu'il contient.",
      },
    },
  },
};
