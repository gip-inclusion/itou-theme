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

const renderListData = ({
  withCopyButtons = true,
  withWebsiteLink = true,
  withMissingValues,
  withLongText,
}) => {
  const websiteValue = withWebsiteLink
    ? '<a href="" class="btn-link has-external-link">siteweb.com</a>'
    : '<strong>siteweb.com</strong>';

  const phoneValue = withMissingValues
    ? '<i class="text-disabled">Non renseigne</i>'
    : '<strong>01 23 45 67 89</strong>';

  const peIdValue = withMissingValues
    ? '<i class="text-disabled">Non renseigne</i>'
    : '<strong>1234567A</strong>';

  const cvValue = withMissingValues
    ? '<i class="text-disabled">Non renseigne</i>'
    : '<a class="btn-link has-downloadable-file" href="" download="cv.pdf">CV_Jean_Dupont.pdf</a>';

  const copyEmailButton = withCopyButtons
    ? `
      <button class="btn-link" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="jean.dupont@email.fr" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>`
    : "";

  const copyNirButton = withCopyButtons
    ? `
      <button class="btn-link" type="button" data-it-clipboard-button="copy" data-it-copy-to-clipboard="281022225003108" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="manual" data-bs-title="Copie !">
        <i class="ri-file-copy-line fw-normal" aria-hidden="true"></i>
        <span class="visually-hidden">Copier</span>
      </button>`
    : "";

  const additionalContent = withLongText
    ? `
    <li>
      <small>
        Critères administratifs
        <i class="ri-information-line text-info" data-bs-toggle="tooltip" data-bs-title="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic ayant permis la délivrance d’un PASS IAE, elle a peut-être changé depuis cette date." aria-label="Ces critères reflètent la situation du candidat lors de l’établissement du diagnostic, elle a peut-être changé depuis cette date." role="button" tabindex="0"></i>
      </small>
      <ul>
        <li>
          Sortant de l'ASE
        </li>
        <li>
          Réfugié statutaire, bénéficiaire d'une protection temporaire, protégé subsidiaire ou demandeur d'asile
        </li>
      </ul>
    </li>
    <li>
      <small>Horaires</small>
      <ul>
        <li>Lundi : 9h00 à 13h45</li>
        <li>Mardi : 9h00 à 13h45</li>
        <li>Mercredi : <i class="text-disabled fw-normal">Fermé</i></li>
        <li>Jeudi : 9h00 à 13h45</li>
      </ul>
    </li>
    <li class="has-forced-line-break">
      <small>Traitement de la demande</small>
      <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo, reiciendis natus soluta eveniet quis in consectetur odio est magnam iure tenetur at.</strong>
    </li>
    `
    : "";

  return `
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
    ${copyNirButton}
  </li>
  <li>
    <small>Date de naissance</small>
    <strong>05/11/1997</strong>
  </li>
  <li>
    <small>Adresse e-mail</small>
    <strong>jean.dupont@email.fr</strong>
    ${copyEmailButton}
  </li>
  <li>
    <small>Site internet</small>
    ${websiteValue}
  </li>
  <li>
    <small>Telephone</small>
    ${phoneValue}
  </li>
  <li>
    <small>Adresse</small>
    <address>10 rue des maisons, 59000 Lille</address>
  </li>
  <li>
    <small>Identifiant Pole emploi</small>
    ${peIdValue}
  </li>
  <li>
    <small>CV</small>
    ${cvValue}
  </li>${additionalContent}
</ul>`.trim();
};

const renderListDataGroup = () => `
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
</div>`.trim();

export default {
  title: "Components/List data",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;
      setTimeout(() => {
        buttonCopyToClipboard();
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
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
Le composant \`.list-data\` permet d'afficher une liste de donnees utilisateur sous forme de paires label/valeur.
Il est adapte a la restitution d'informations de profil, de contact ou de suivi administratif.

### Anatomie
1. **Conteneur** - Liste \`<ul class="list-data">\`
2. **Label** - Balise \`<small>\` pour le nom de la donnee
3. **Valeur** - Balise \`<strong>\`, \`<p>\`, \`<address>\` ou \`<ul>\` selon le type de contenu
4. **Actions** (optionnelles) - Boutons de copie, liens externes, liens de telechargement
5. **Etat vide** (optionnel) - Texte mute via \`.text-disabled\`

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.list-data\` | Liste principale des donnees |
| \`.list-data > li\` | Ligne de donnee |
| \`.has-forced-line-break\` | Ligne forcee sur toute la largeur pour les contenus longs |
| \`.list-data-group\` | Regroupe plusieurs listes \`.list-data\` cote a cote (responsive) |

### Accessibilite
- Utiliser des labels explicites et non ambigus dans les balises \`<small>\`.
- Conserver un texte lisible pour les actions de copie (icone seule accompagnee d'un texte \`.visually-hidden\`).
- Pour les liens externes, garder un libelle comprehensible hors contexte.
`,
      },
    },
  },
  argTypes: {
    withMissingValues: {
      control: "boolean",
      description: "Affiche des champs non renseignes",
    },
    withLongText: {
      control: "boolean",
      description: "Ajoute des contenus longs et multilignes",
    },
  },
};

export const Default = {
  render: renderListData,
  parameters: {
    docs: {
      description: {
        story: "Liste de donnees utilisateur configurable (copie, liens, champs manquants, contenu long).",
      },
    },
  },
  args: {
    withMissingValues: true,
    withLongText: false,
  },
};

export const WithLongContent = {
  render: () =>
    renderListData({
      withCopyButtons: true,
      withWebsiteLink: true,
      withMissingValues: true,
      withLongText: true,
    }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple avec contenu long, listes internes et ligne forcee via `.has-forced-line-break`.",
      },
    },
  },
};

export const CompleteData = {
  render: () =>
    renderListData({
      withCopyButtons: false,
      withWebsiteLink: false,
      withMissingValues: false,
      withLongText: false,
    }),
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple avec toutes les donnees renseignees, sans etat vide.",
      },
    },
  },
};

export const ListdataGroup = {
  name: "List data Group",
  render: renderListDataGroup,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Cas particulier avec `.list-data-group` pour afficher deux listes de donnees cote a cote.",
      },
    },
  },
};
