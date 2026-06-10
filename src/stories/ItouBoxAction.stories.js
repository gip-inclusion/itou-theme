export default {
  title: "Components/Box Action",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
La box <code>.c-box--action</code> est utilisée comme barre d'actions pricipales sur une page.

### Quand l'utiliser
- Pour proposer des actions principales sur un objet métier (accepter, décliner, traiter).
- Pour regrouper des actions secondaires dans un menu en dropdown (transfert, historique, mise en attente).

### Structure recommandée
1. Un conteneur <code>.c-box.c-box--action</code>
2. Un titre masqué (ex: <code>h2.visually-hidden</code>) pour le contexte a11y
3. Une grille d'actions avec boutons largeur complète sur mobile

### Accessibilité
- Conserver un libellé explicite sur chaque action.
- Garder les icônes décoratives en <code>aria-hidden="true"</code>.
- Vérifier l'ordre de tabulation dans les groupes d'actions et dropdowns.
`,
      },
    },
  },
};

const renderBarreActionStandard = () => `
<div class="c-box c-box--action">
  <h2 class="visually-hidden">Actions rapides</h2>
  <div class="form-row align-items-center gx-3">
    <div class="form-group col-12 col-lg-auto">
      <a href="#" class="btn btn-lg btn-white btn-block btn-ico">
        <i class="ri-check-line fw-medium" aria-hidden="true"></i>
        <span>Accepter</span>
      </a>
    </div>
    <div class="form-group col-12 col-lg-auto">
      <a href="#" class="btn btn-lg btn-outline-white btn-block btn-ico">
        <i class="ri-close-line fw-medium" aria-hidden="true"></i>
        <span>Décliner</span>
      </a>
    </div>
    <div class="form-group col-12 col-lg d-lg-flex justify-content-lg-end">
      <div class="dropdown">
        <button id="box-action-transfer-standard" class="btn btn-lg btn-link-white btn-block w-lg-auto dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
          Transférer vers
        </button>
        <div class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="box-action-transfer-standard">
          <a class="dropdown-item" href="#">
            <div>
              <span class="badge badge-xs rounded-pill bg-primary">EI</span>
              <span class="ms-1">Garage Martinet Nord</span>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div>
              <span class="badge badge-xs rounded-pill bg-primary">ACI</span>
              <span class="ms-1">Atelier Solidaire Centre</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const BarreActionStandard = {
  render: renderBarreActionStandard,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Barre d'action standard avec 2 actions principales et un dropdown de transfert.",
      },
    },
  },
};

const renderBarreActionTraitement = () => `
<div class="c-box c-box--action">
  <h2 class="visually-hidden">Actions de traitement de candidature</h2>
  <div class="form-row align-items-center gx-3">
    <div class="form-group col-12 col-lg-auto">
      <button class="btn btn-lg btn-white btn-block btn-ico" type="button">
        <i class="ri-file-search-line fw-medium" aria-hidden="true"></i>
        <span>Étudier</span>
      </button>
    </div>
    <div class="form-group col-12 col-lg-auto">
      <a href="#" class="btn btn-lg btn-outline-white btn-block btn-ico">
        <i class="ri-close-line fw-medium" aria-hidden="true"></i>
        <span>Décliner</span>
      </a>
    </div>
    <div class="form-group col-12 col-lg d-lg-flex justify-content-lg-end">
      <div class="dropdown dropdown-organization">
        <button id="box-action-transfer-processing" class="btn btn-lg btn-link-white btn-block w-lg-auto dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
          Transférer la candidature
        </button>
        <div class="dropdown-menu w-100" aria-labelledby="box-action-transfer-processing">
          <a class="dropdown-item dropdown-item__summary" href="#">
            <i class="ri-community-line" aria-hidden="true"></i>
            <span>EI</span>
            <strong>El Garage Martinet Nord</strong>
          </a>
          <a class="dropdown-item dropdown-item__summary" href="#">
            <i class="ri-community-line" aria-hidden="true"></i>
            <span>EI</span>
            <strong>Garage Martinet Ouest</strong>
          </a>
          <hr class="m-0">
          <div class="dropdown-item disabled">
            <i class="ri-home-smile-line" aria-hidden="true"></i>
            <strong>Une autre structure</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const BarreActionTraitement = {
  render: renderBarreActionTraitement,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante orientée traitement de candidature, inspirée des écrans métier historiques.",
      },
    },
  },
};

const renderBarreActionLegacy = () => `
<div class="c-box c-box--action">
	<h2 class="visually-hidden">Actions rapides</h2>
	<div class="form-row align-items-center gx-3">
		<div class="form-group col-12 col-lg-auto">
			<a href="" class="btn btn-lg btn-link-white btn-block btn-ico">
				<i class="ri-check-line fw-medium" aria-hidden="true"></i>
				<span>Accepter</span>
			</a>
		</div>
		<div class="form-group col-12 col-lg-auto">
			<a href="" class="btn btn-lg btn-link-white btn-block btn-ico">
				<i class="ri-close-line fw-medium" aria-hidden="true"></i>
				<span>Décliner</span>
			</a>
		</div>
		<div class="form-group col-12 col-lg d-lg-flex justify-content-lg-end">
			<div class="dropdown">
				<button id="other_actions" class="btn btn-lg btn-link-white btn-block w-lg-auto dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
					Autres actions
					<span class="badge badge-base rounded-pill bg-info text-white ms-2">3</span>
				</button>
				<div class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="other_actions">
					<form method="post" action="">
							<button class="btn btn-ico justify-content-start dropdown-item">
							<i class="ri-eye-line fw-medium" aria-hidden="true"></i>
							<span>Étudier</span>
						</button>
					</form>
					<a href="" class="btn btn-ico justify-content-start dropdown-item">
						<i class="ri-history-line fw-medium" aria-hidden="true"></i>
						<span>Mettre en attente</span>
					</a>
					<hr class="dropdown-divider m-0">
					<button type="button" class="btn btn-ico justify-content-start dropdown-item" id="transfer_to_button" aria-haspopup="true" data-bs-toggle="modal" data-bs-target="#transfer_confirmation_modal">
						<i class="ri-arrow-left-right-line  fw-medium" aria-hidden="true"></i>
						<span>Transférer vers</span>
					</button>
          <button type="button" class="btn btn-ico justify-content-start dropdown-item" disabled="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="c-box--action-tooltip" data-bs-title="Seules les candidatures au statut « Declinee », « Embauche ailleurs » et « Embauche annulee » peuvent etre archivees.">
						<i class="ri-archive-line fw-medium" aria-hidden="true"></i>
						<span>Archiver</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

`;

export const BarreActionLegacy = {
  render: renderBarreActionLegacy,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Variante avec un compteur d'actions possibles dans le dropdown.",
      },
    },
  },
};

const renderBarreActionOrientation = () => `
<div class="c-box c-box--action">
  <h2 class="visually-hidden">Actions rapides</h2>
  <div class="form-row align-items-center gx-3">
    <div class="form-group col-12 col-lg-auto">
      <a class="btn btn-lg btn-white btn-block justify-content-center" href="#">Orienter le bénéficiaire</a>
    </div>
    <div class="form-group col-12 col-lg-auto">
      <button class="btn btn-lg btn-outline-white btn-block justify-content-center" type="button" data-bs-toggle="modal" data-bs-target="#js-contact-modal">
        Voir les coordonnées de contact du service
      </button>
    </div>
    <div class="form-group col-12 col-lg d-lg-flex justify-content-lg-end">
      <div class="dropdown">
        <button id="other_actions_orientation" class="btn btn-lg btn-link-white btn-block w-lg-auto pe-0" type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
          <i class="ri-more-2-fill fw-medium" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="other_actions_orientation">
          <button class="btn btn-ico justify-content-start dropdown-item" type="button">
            Copier le lien de cette page
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const BarreActionOrientation = {
  render: renderBarreActionOrientation,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Exemple avec actions d'orientation de candidatures et menu dropdown compact.",
      },
    },
  },
};
