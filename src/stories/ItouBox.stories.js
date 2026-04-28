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
  title: "Components/Box",
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
Les composants \`.c-box\` sert a structurer et mettre en valeur du contenu.
\`.c-box\` est un conteneur de lecture (résumé, informations, bloc contextuel).

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
