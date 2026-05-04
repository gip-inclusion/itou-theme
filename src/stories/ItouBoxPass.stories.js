const renderPassBox = ({
  boxClasses,
  badgeClasses,
  badgeIcon,
  badgeLabel,
  endDateClass = "",
  validityClass = "",
  extraBlock = "",
  validiteLabel = "Duree de validite",
  validiteValue = "721 jours (environ 1 an, 2 mois, 12 jours)",
}) => `
<div class="c-box c-box--pass ${boxClasses}">
  <div class="mb-3 mb-md-4">
    <span class="badge badge-base rounded-pill ${badgeClasses}">
      <i class="${badgeIcon}" aria-hidden="true"></i>
      ${badgeLabel}
    </span>
  </div>

  <ul class="list-data mb-3 mb-md-4">
    <li>
      <small>Numero de PASS IAE</small>
      <strong><span>99999</span><span class="ms-1">99</span><span class="ms-1">99999</span></strong>
    </li>
    <li>
      <small>Date de debut</small>
      <strong>05/07/2024</strong>
    </li>
    <li>
      <small>
        Date de fin previsionnelle
        <i class="ri-information-line ri-xl text-info" data-bs-toggle="tooltip" aria-label="Cette date de fin est susceptible de changer." data-bs-title="Cette date de fin est susceptible de changer."></i>
      </small>
      <strong class="${endDateClass}">04/07/2026</strong>
    </li>
    <li>
      <small>
        ${validiteLabel}
        <i class="ri-information-line ri-xl text-info" data-bs-toggle="tooltip" aria-label="Cette duree depend de la situation du PASS." data-bs-title="Cette duree depend de la situation du PASS."></i>
      </small>
      <strong class="${validityClass}">${validiteValue}</strong>
    </li>
  </ul>

  ${extraBlock}

  <a href="#" class="btn btn-outline-primary btn-block btn-ico bg-white">
    <i class="ri-eye-line fw-medium" aria-hidden="true"></i>
    <span>Afficher le PASS IAE</span>
  </a>
</div>
`;

export default {
  title: "Components/Box PASS",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La variante \`.c-box--pass\` présente les informations d'un PASS IAE et son état métier.

### États courants
1. PASS IAE valide (non démarré ou en cours)
2. PASS IAE valide (suspendu)
3. PASS IAE expiré

### Anatomie
1. **Conteneur** - \`.c-box.c-box--pass\`
2. **Statut** - badge en tête avec icône d'état
3. **Données clés** - liste \`.list-data\` (numéro, dates, validité)
4. **Bloc contextuel optionnel** - suspension ou demande de prolongation
5. **Action** - bouton "Afficher le PASS IAE"

### Accessibilité
- Marquer les icônes décoratives avec \`aria-hidden="true"\`.
- Fournir des \`aria-label\` explicites pour les pictogrammes d'information (tooltips).
- Vérifier le contraste entre badge de statut et texte.
`,
      },
    },
  },
};

const renderAllStates = () => `
  <div class="vstack gap-4">
    ${renderPassBox({
      boxClasses: "bg-success-lightest border-success",
      badgeClasses: "bg-success text-white",
      badgeIcon: "ri-pass-valid-line",
      badgeLabel: "PASS IAE valide (non demarre)",
      validityClass: "text-success",
    })}

    ${renderPassBox({
      boxClasses: "bg-success-lightest border-success",
      badgeClasses: "bg-success text-white",
      badgeIcon: "ri-pass-valid-line",
      badgeLabel: "PASS IAE valide",
      validityClass: "text-success",
      extraBlock: `
        <hr class="my-3 my-md-4">
        <ul class="list-data mb-3 mb-md-4">
          <li>
            <small>Demande de prolongation (en attente)</small>
            <strong>du 07/06/2023 au 22/06/2023</strong>
          </li>
        </ul>
      `,
    })}

    ${renderPassBox({
      boxClasses: "bg-info-lightest border-info",
      badgeClasses: "bg-info text-white",
      badgeIcon: "ri-pass-pending-line",
      badgeLabel: "PASS IAE valide (suspendu)",
      extraBlock: `
        <hr class="my-3 my-md-4">
        <ul class="list-data mb-3 mb-md-4">
          <li>
            <small>Suspension en cours</small>
            <strong class="text-info">du 07/06/2023 au 22/06/2023</strong>
          </li>
        </ul>
      `,
    })}

    <div class="c-box c-box--pass bg-danger-lightest border-danger">
      <div class="mb-3 mb-md-4">
        <span class="badge badge-base rounded-pill bg-danger text-white">
          <i class="ri-pass-expired-line" aria-hidden="true"></i>
          PASS IAE expire
        </span>
      </div>

      <ul class="list-data mb-3 mb-md-4">
        <li>
          <small>Numero de PASS IAE</small>
          <strong><span>99999</span><span class="ms-1">99</span><span class="ms-1">99999</span></strong>
        </li>
        <li>
          <small>A expire le</small>
          <strong class="text-danger">06/06/2023 (depuis 1 jour, 16 heures)</strong>
        </li>
      </ul>

      <a href="#" class="btn btn-outline-primary btn-block btn-ico bg-white">
        <i class="ri-eye-line fw-medium" aria-hidden="true"></i>
        <span>Afficher le PASS IAE</span>
      </a>
    </div>
  </div>
`;

export const AllStates = {
  render: renderAllStates,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Vue de référence regroupant les états métier les plus courants de `.c-box--pass`.",
      },
    },
  },
};
