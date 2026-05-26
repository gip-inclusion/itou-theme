const w={title:"Components/Box Results",decorators:[c=>`<div style="max-width: 1000px; margin: 0 auto;">${c()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Cette story présente la variante métier <code>.c-box--results</code> utilisée pour afficher des résultats (structures, offres, candidatures).

### Anatomie
1. **Header** - zone d'identification et de statut
2. **Body** (optionnel) - zone de contenu métier principal
3. **Footer** (optionnel) - zone d'actions contextuelles
4. **Collapse** (optionnel) - affichage progressif des éléments secondaires

### Contenu possible par zone

#### <code>.c-box--results__header</code>
- Bloc résumé <code>.c-box--results__summary</code> avec icône, sur-titre, titre, et parfois sous-informations.
- Informations de contexte: distance, adresse, émetteur, date, type d'organisation.
- Badges d'état ou de qualification: priorité RQTH, candidature en attente, résultat positif/négatif, etc.
- Actions de premier niveau quand nécessaire (ex: voir la fiche).

#### <code>.c-box--results__body</code>
- Listes de résultats: offres, métiers, candidatures, éléments détaillés.
- Données structurées: listes de critères, PASS IAE, dates, statuts détaillés.
- Blocs d'information complémentaires: alertes, encarts info, badges source, contenus descriptifs.
- Contenus dépliables (<code>collapse</code>) pour éviter de surcharger la carte.

#### <code>.c-box--results__footer</code>
- Actions principales et secondaires selon le contexte métier.
- Boutons simples ou groupés: voir, modifier, notifier, postuler, désactiver, etc.
- Boutons de bascule pour afficher/masquer du contenu additionnel.
- Liens externes ou actions orientées workflow (ex: traitement, contrôle, notification).

### Classes CSS principales
| Classe | Description |
|--------|-------------|
| <code>.c-box</code> | Structure de base de la box |
| <code>.c-box--results</code> | Variante visuelle "résultats" |
| <code>.c-box--results__summary</code> | Bloc de résumé (icône + titre) |
| <code>.c-box--results__list-contact</code> | Liste d'informations de contact |
| <code>.c-box--results__body</code> | Zone de contenu principal |
| <code>.c-box--results__footer</code> | Zone d'actions |

### Accessibilité
- Les boutons de collapse doivent exposer <code>aria-expanded</code> et <code>aria-controls</code>.
- Les icônes décoratives doivent rester masquées avec <code>aria-hidden="true"</code>.
- Les liens d'action doivent avoir un libellé explicite dans leur contexte.
`}}}},u=()=>`
<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
        <h3>Une nouvelle chance</h3>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-md-end gap-md-3">
      <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
        <li>
          <i class="ri-navigation-line font-weight-normal me-1"></i>
          à <strong class="text-info mx-1">2,7 km</strong> de votre lieu de recherche
        </li>
        <li>
          <i class="ri-map-pin-2-line font-weight-normal me-1"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
        </li>
      </ul>
      <div>
        <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap">Voir la fiche de l'entreprise</a>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-group list-group-flush list-group-link">
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Aide maçon/maçonne Voirie et réseaux divers
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">Aide maçon/maçonne voirie</a>
          <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
            <i class="ri-group-line me-1" aria-hidden="true"></i>
            20+<span class="ms-1">candidatures</span>
          </span>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Agent / Agente de service cantine dans les écoles et collèges
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Meurchin - 62
          </p>
        </div>
      </li>
    </ul>
    <ul class="list-group list-group-flush list-group-link collapse" id="collapseExampleListGroup01">
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Agent / Agente d'entretien des espaces verts
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Manutentionnaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Plonge en restauration scolaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Auxiliaire de puériculture
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Meurchin - 62
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="c-box--results__footer">
    <button class="btn btn-link has-collapse-caret btn-block" type="button" data-it-collapse-text-show="Voir" data-it-collapse-text-hide="Masquer" data-bs-toggle="collapse" data-bs-target="#collapseExampleListGroup01" aria-expanded="false" aria-controls="collapseExampleListGroup01" aria-label="Voir ou masquer les 4 autres métiers">
      les 4 autres métiers
    </button>
  </div>
</div>

<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-01-lightest text-accent-01">Priorité aux bénéficiaire du RQTH</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-md-end gap-md-3">
      <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
        <li>
          <i class="ri-navigation-line font-weight-normal me-1"></i>
          à <strong class="text-info mx-1">2,7 km</strong> de votre lieu de recherche
        </li>
        <li>
          <i class="ri-map-pin-2-line font-weight-normal me-1"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
        </li>
      </ul>
      <div>
        <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap">Voir la fiche de l'entreprise</a>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-group list-group-flush list-group-link">
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Aide maçon/maçonne Voirie et réseaux divers
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Plonge en restauration scolaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Agent / Agente de service cantine dans les écoles et collèges
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Meurchin - 62
          </p>
        </div>
      </li>
    </ul>
    <ul class="list-group list-group-flush list-group-link collapse" id="collapseExampleListGroup02">
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Agent / Agente d'entretien des espaces verts
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Manutentionnaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Plonge en restauration scolaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Auxiliaire de puériculture
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Meurchin - 62
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="c-box--results__footer">
    <button class="btn btn-link has-collapse-caret btn-block" type="button" data-it-collapse-text-show="Voir" data-it-collapse-text-hide="Masquer" data-bs-toggle="collapse" data-bs-target="#collapseExampleListGroup02" aria-expanded="false" aria-controls="collapseExampleListGroup02" aria-label="Voir ou masquer les 4 autres métiers">
      les 4 autres métiers
    </button>
  </div>
</div>

<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
        <h3>Une nouvelle chance</h3>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-md-end gap-md-3">
      <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
        <li>
          <i class="ri-navigation-line font-weight-normal me-1"></i>
          à <strong class="text-info mx-1">2,7 km</strong> de votre lieu de recherche
        </li>
        <li>
          <i class="ri-map-pin-2-line font-weight-normal me-1"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
        </li>
      </ul>
      <div>
        <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap">Voir la fiche de l'entreprise</a>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-group list-group-flush list-group-link">
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Aide maçon/maçonne Voirie et réseaux divers
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
      <li class="list-group-item list-group-item-action">
        <div>
          <a href="" class="font-weight-bold text-decoration-none stretched-link">
            Plonge en restauration scolaire
          </a>
          <p class="fs-sm mb-0 mt-1">
            <i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i>
            Viroflay - 78
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
        <h3>Une nouvelle chance</h3>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-md-end gap-md-3">
      <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
        <li>
          <i class="ri-navigation-line font-weight-normal me-1"></i>
          à <strong class="text-info mx-1">2,7 km</strong> de votre lieu de recherche
        </li>
        <li>
          <i class="ri-map-pin-2-line font-weight-normal me-1"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
        </li>
      </ul>
      <div>
        <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap">Voir la fiche de l'entreprise</a>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
      <p class="mb-3 mb-md-0">Cette structure vous intéresse ?</p>
      <a class="btn btn-ico btn-primary" href="" aria-label="Postuler auprès de l'employeur solidaire Mission locale du territoire de belfort">
        <i class="ri ri-draft-line" aria-hidden="true"></i>
        <span>Postuler</span>
      </a>
    </div>
  </div>
</div>
`,s={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` avec les variations de contenu spécifique possible pour une carte de résultat de recherche employeurs"}}}},m=()=>`
<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="flex-grow-1">
        <a class="btn-ico btn-link" href="">
          <i class="ri-community-line fw-medium" aria-hidden="true"></i>
          <span>ACI - ACI Travailleurs pairs</span>
        </a>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-01-lightest text-accent-01">Priorité aux bénéficiaires de la RQTH</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-group list-group-flush list-group-link">
      <li class="list-group-item list-group-item-action">
        <div class="d-flex flex-column flex-md-row justify-content-md-between">
          <div class="order-2 order-md-1">
            <a href="" class="fw-bold text-decoration-none stretched-link">Aide maçon/maçonne voirie</a>
            <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
              <i class="ri-group-line me-1" aria-hidden="true"></i>
              20+<span class="ms-1">candidatures</span>
            </span>
            <ul class="c-box--results__list-contact flex-md-grow-1 mt-1">
              <li class="d-block d-md-inline-flex">
                <i class="ri-navigation-line fw-normal me-1"></i>
                à <strong class="text-info mx-1">1,8&nbsp;km</strong> de votre lieu de recherche
              </li>
              <li class="d-block d-md-inline-flex">
                <i class="ri-map-pin-2-line fw-normal me-1"></i>
                <address class="d-inline m-0">
                  Lille - 59
                </address>
              </li>
            </ul>
            <p class="d-sm-flex align-items-sm-center fs-sm mb-0 mt-1 gap-2">
              <span>Offre proposée et gérée par <span class="visually-hidden">France Travail</span></span>
              <img height="35" src="https://emplois.inclusion.beta.gouv.fr/static/img/logo-france-travail.svg" alt="Logo France Travail">
            </p>
          </div>
          <div class="badge-group d-md-flex flex-md-column align-items-md-end order-1 order-md-2 mb-1 mb-md-0">
            <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">Contrat de mission intérimaire</span>
            <span class="badge badge-xs rounded-pill bg-accent-02-light text-primary">20h/semaine</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="c-info mt-2">
      <span class="c-info__summary">Réservé au public éligible au contrat PEC</span>
    </div>
  </div>
</div>
`,e={render:m,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` pour les postes ouverts au recrutement"}}}},p=()=>`
<div class="c-box c-box--results has-one-link-inside">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-home-smile-2-line" aria-hidden="true"></i>
      <div>
        <span>Organisation délégataire d'un Conseil Départemental (Orientation et suivi BRSA)</span>
        <h3>AJD AIDE</h3>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-md-end gap-md-3">
      <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
        <li>
          <i class="ri-navigation-line fw-normal me-2"></i>
          à <strong class="text-info mx-1">2,7 km</strong> de votre lieu de recherche
        </li>
        <li>
          <i class="ri-map-pin-2-line fw-normal me-2"></i>
          <address class="m-0">513 Rue Sans Souci, 69760 Limonest</address>
        </li>
      </ul>
      <div>
        <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap stretched-link">Voir ce prescripteur</a>
      </div>
    </div>
  </div>
</div>
`,i={render:p,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` avec le contenu spécifique  pour une carte de résultat de recherche prescripteurs"}}}},v=()=>`
<div class="c-box c-box--results has-links-inside my-md-4">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-1 gap-lg-3 mb-3">
      <p class="fs-sm mb-0 flex-grow-1">
        Emise le 06 octobre 2022 par <strong>Mission locale du territoire de Belfort</strong>
        <i class="ri-home-smile-2-line" aria-hidden="true"></i> Prescripteur habilité
      </p>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
          Candidature à l'étude
        </span>
      </div>
    </div>
    <div class="c-box--results__summary">
      <i class="ri-user-line" aria-hidden="true"></i>
      <div>
        <h3>Jean-Pierre de la Pateliere</h3>
        <div class="d-flex flex-column flex-md-row align-items-start align-items-md-end gap-1 gap-md-2">
          <span>
            <i class="ri-map-pin-2-line fw-normal me-1" aria-hidden="true"></i>
            Viroflay - 78
          </span>
          <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
            <i class="ri-check-line" aria-hidden="true"></i>
            Éligible à l'IAE
          </span>
        </div>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <p class="h5">Critères administratifs</p>
      <ul>
        <li>Bénéficiaire du RSA</li>
        <li>Personne sans hébergement / hébergée / ayant un parcours de rue</li>
        <li>Réfugié statutaire, protégé subsidiaire ou demandeurs d'asile</li>
      </ul>
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleCandidates01" aria-expanded="false" aria-controls="collapseInfoExampleCandidates01">
          <span>4 postes recherchés</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleCandidates01">
          <ul class="list-unstyled">
            <li class="d-flex gap-2">
              <span class="flex-grow-1 has-ellipsis">Aide maçon voirie et réseaux</span>
              <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Meurchon - 68</span>
            </li>
            <li class="d-flex gap-2">
              <span class="flex-grow-1 has-ellipsis">Naturopathe, programmeur en voirie et réseaux sociaux genre tiquetoque</span>
              <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Courrières - 62</span>
            </li>
            <li class="d-flex gap-2">
              <span class="flex-grow-1 has-ellipsis">Candidature spontanée</span>
              <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Viroflay - 78</span>
            </li>
            <li class="d-flex gap-2">
              <span class="flex-grow-1 has-ellipsis">Aide maçon voirie et réseaux</span>
              <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Givenchy en Gohelle - 62</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex justify-content-end">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="" aria-label="Voir la candidature de Pierre de la Pateliere">
        Voir sa candidature
      </a>
    </div>
  </div>
</div>

<div class="c-box c-box--results has-one-link-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-1 gap-lg-3 mb-3">
      <p class="fs-sm mb-0 flex-grow-1">
        Émise le 14 novembre 2021 par <strong>Vous</strong>
        <i class="ri-user-line" aria-hidden="true"></i> Candidat
      </p>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">
          Candidature en attente
        </span>
      </div>
    </div>
    <div class="c-box--results__summary">
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
        <h3>Une nouvelle chance</h3>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <p class="h5">Postes recherchés</p>
      <ul class="list-unstyled">
        <li class="d-flex gap-2">
          <span class="flex-grow-1 has-ellipsis">Aide maçon voirie et réseaux</span>
          <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Meurchon - 68</span>
        </li>
        <li class="d-flex gap-2">
          <span class="flex-grow-1 has-ellipsis">Naturopathe, programmeur en voirie et réseaux sociaux genre tiquetoque</span>
          <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Courrières - 62</span>
        </li>
        <li class="d-flex gap-2">
          <span class="flex-grow-1 has-ellipsis">Candidature spontanée</span>
          <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Viroflay - 78</span>
        </li>
        <li class="d-flex gap-2">
          <span class="flex-grow-1 has-ellipsis">Aide maçon voirie et réseaux</span>
          <span class="text-nowrap"><i class="ri-map-pin-2-line ri-sm" aria-hidden="true"></i> Givenchy en Gohelle - 62</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex justify-content-end">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto stretched-link" href="" aria-label="Voir ma fiche candidature">
        Voir ma candidature
      </a>
    </div>
  </div>
</div>
`,a={render:v,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` avec le contenu spécifique pour une carte de candidat sous la vue employeur / prescripteur puis sous la vue du candidat"}}}},b=()=>`
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-user-line" aria-hidden="true"></i>
        <div>
          <h3>Jean-Pierre de la Pateliere</h3>
          <div class="d-flex flex-column flex-md-row align-items-start align-items-md-end gap-1 gap-md-2">
            <span>
              <i class="ri-map-pin-2-line fw-normal me-1" aria-hidden="true"></i>
              Viroflay - 78
            </span>
            <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
              <i class="ri-check-line" aria-hidden="true"></i>
              Éligible à l'IAE
            </span>
          </div>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Integrée par l'ASP le 10 oct. 2023 à 10:30</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-data list-data__two-column-md">
      <li>
        <small>Numéro de PASS IAE</small>
        <strong><span class="ms-1">45645</span><span class="ms-1">64</span><span class="ms-1">56456</span></strong>
        <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Copié!" data-bs-trigger="manual" data-bs-title="Copié!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="456456456456"><i class="ri-file-copy-line"></i></button>
      </li>
      <li>
        <small>Date de début</small>
        <strong>24/03/2020</strong>
      </li>
      <li>
        <small>
          Date prévisionnelle de fin
          <i class="ri-error-warning-line text-info" aria-hidden="true"></i>
        </small>
        <strong>02/06/2023</strong>
      </li>
    </ul>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Désactiver
      </a>
      <a class="btn btn-primary btn-block w-100 w-md-auto" href="">
        Voir le détail
      </a>
    </div>
  </div>
</div>

<div class="c-box c-box--results has-links-inside my-3 my-md-4">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-user-line" aria-hidden="true"></i>
        <div>
          <h3>Jean-Pierre de la Pateliere</h3>
          <div class="d-flex flex-column flex-md-row align-items-start align-items-md-end gap-1 gap-md-2">
            <span>
              <i class="ri-map-pin-2-line fw-normal me-1" aria-hidden="true"></i>
              Viroflay - 78
            </span>
            <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
              <i class="ri-check-line" aria-hidden="true"></i>
              Éligible à l'IAE
            </span>
          </div>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Integrée par l'ASP le 10 oct. 2023 à 10:30</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="alert alert-warning alert-dismissible fade show" role="status">
      <div class="row">
        <div class="col-auto pe-0">
          <i class="ri-information-line ri-xl text-warning"></i>
        </div>
        <div class="col">
          <strong class="mb-0">Information sur l'erreur de traitement</strong>
          <p class="mb-0">Erreur 0012 : JSON invalide</p>
        </div>
      </div>
    </div>
    <ul class="list-data list-data__two-column-md">
      <li>
        <small>Numéro de PASS IAE</small>
        <strong><span class="ms-1">45645</span><span class="ms-1">64</span><span class="ms-1">56456</span></strong>
        <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Copié!" data-bs-trigger="manual" data-bs-title="Copié!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="456456456456"><i class="ri-file-copy-line"></i></button>
      </li>
      <li>
        <small>Date de début</small>
        <strong>24/03/2020</strong>
      </li>
      <li>
        <small>
          Date prévisionnelle de fin
          <i class="ri-error-warning-line text-info" aria-hidden="true"></i>
        </small>
        <strong>02/06/2023</strong>
      </li>
    </ul>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Désactiver
      </a>
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir la fiche salarié
      </a>
      <a class="btn btn-primary btn-block w-100 w-md-auto" href="">
        Modifier
      </a>
    </div>
  </div>
</div>
`,l={render:b,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` avec le contenu spécifique pour une carte de fiches salariés ASP"}}}},f=()=>`
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-user-line" aria-hidden="true"></i>
      <div>
        <h3>Jean-Pierre de la Pateliere</h3>
        <div class="d-flex flex-column flex-md-row align-items-start align-items-md-end gap-1 gap-md-2">
          <span>
            <i class="ri-map-pin-2-line fw-normal me-1" aria-hidden="true"></i>
            Viroflay - 78
          </span>
          <span class="badge badge-xs rounded-pill bg-success-lighter text-success">
            <i class="ri-check-line" aria-hidden="true"></i>
            Éligible à l'IAE
          </span>
        </div>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <ul class="list-data list-data__two-column-md">
      <li>
        <small>Numéro de PASS IAE</small>
        <strong><span class="ms-1">45645</span><span class="ms-1">64</span><span class="ms-1">56456</span></strong>
        <button class="btn-link" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Copié!" data-bs-trigger="manual" data-bs-title="Copié!" data-it-clipboard-button="copy" data-it-copy-to-clipboard="456456456456"><i class="ri-file-copy-line"></i></button>
      </li>
      <li>
        <small>Durée de validité</small>
        <strong class="text-success">12 mois, 4 semaines, 5 jours</strong>
      </li>
    </ul>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex justify-content-md-end">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir la fiche salarié
      </a>
    </div>
  </div>
</div>
`,t={render:f,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple de `.c-box.c-box--results` avec le contenu spécifique pour une carte de fiches salariés et PASS IAE"}}}},x=()=>`
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-info text-white">En attente</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">A traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Contrôler cette SIAE
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Résultat positif</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir le résultat
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-danger-lighter text-danger">Phase contradictoire</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Wording ?
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Phase contradictoire - À traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir la notification de sanction
      </a>
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir le résultat
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Notification à faire</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir le résultat
      </a>
      <a class="btn btn-primary btn-block w-100 w-md-auto" href="">
        Notifier la sanction
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-community-line" aria-hidden="true"></i>
        <div>
          <span>ETTI - Entreprise de Travail Temporaire d'Insertion</span>
          <h3>Une nouvelle chance</h3>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-danger text-white">Résultat négatif</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir la notification de sanction
      </a>
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Voir le résultat
      </a>
    </div>
  </div>
</div>
`,r={render:x,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` pour le controle a posteriori - vue DDETS - carte SIAE"}}}},g=()=>`
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-info text-white">En attente</span>
      </div>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">À traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Contrôler cette auto-prescription
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Validé</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-danger text-white">Problème constaté</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-info text-white">Phase contradictoire - en attente</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Justificatifs téléversés</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Nouveaux justificatifs à traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Validé</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-emploi-light text-primary">Justificatifs non contrôlés</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-danger text-white">Non téléversés</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-warning text-white">Téléversement incomplet</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Revoir ses justificatifs
      </a>
    </div>
  </div>
</div>
`,n={render:g,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` pour le controle a posteriori - vue DDETS - carte auto-prescription"}}}},h=()=>`
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">À traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Sélectionner les critères
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">À traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription01" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription01">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription01">
          <ul class="list-unstyled">
            <li>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-ico btn-primary">Modifier le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-ico btn-primary">Modifier le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Modifier les critères
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Traité</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription02" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription02">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription02">
          <ul class="list-unstyled">
            <li>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Modifier les critères
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success-lighter text-success">Transmis</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription03" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription03">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription03">
          <ul class="list-unstyled">
            <li>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a class="btn btn-outline-primary btn-block w-100 w-md-auto" href="">
        Modifier les critères
      </a>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-success text-white">Validé</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription04" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription04">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription04">
          <ul class="list-unstyled">
            <li>
              <strong class="text-success"><i class="ri-check-line"></i> Validé</strong><br>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="text-success"><i class="ri-check-line"></i> Validé</strong><br>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="text-success"><i class="ri-check-line"></i> Validé</strong><br>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-accent-03 text-primary">Nouveaux justificatifs à traiter</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription05" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription05">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription05">
          <ul class="list-unstyled">
            <li>
              <strong class="text-success"><i class="ri-check-line"></i> Validé</strong><br>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="text-danger"><i class="ri-close-line"></i> Refusé</strong><br>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-ico btn-primary">Modifier le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="text-danger"><i class="ri-close-line"></i> Refusé</strong><br>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-ico btn-primary">Modifier le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-warning text-white">Téléversement incomplet</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription06" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription06">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription06">
          <ul class="list-unstyled">
            <li>
              <strong class="text-success"><i class="ri-check-line"></i> Validé</strong><br>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="text-danger"><i class="ri-close-line"></i> Refusé</strong><br>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-ico btn-primary">Modifier le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<br>
<div class="c-box c-box--results has-links-inside">
  <div class="c-box--results__header">
    <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
      <div class="c-box--results__summary flex-grow-1">
        <i class="ri-pass-valid-line" aria-hidden="true"></i>
        <div>
          <h3>Pass IAE XXXXX 21 00064 délivré le XX/XX/XXXX</h3>
          <span>Jacques HENRY</span>
        </div>
      </div>
      <div>
        <span class="badge badge-sm rounded-pill bg-emploi-light text-primary">Justificatifs non contrôlés</span>
      </div>
    </div>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <div class="c-box--results__list-data">
      <div class="c-info c-info--borderless mt-3">
        <button class="c-info__summary" data-bs-toggle="collapse" data-bs-target="#collapseInfoExampleSIAEAutoPrescription07" aria-expanded="false" aria-controls="collapseInfoExampleSIAEAutoPrescription07">
          <span>3 justificatifs</span>
        </button>
        <div class="c-info__detail collapse" id="collapseInfoExampleSIAEAutoPrescription07">
          <ul class="list-unstyled">
            <li>
              <strong class="fs-sm">Niveau d'étude 3 (CAP, BEP) ou infra</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Diplôme et/ou attestation sur l'honneur</li>
                <li class="m-0">Durée de validité du justificatif : Attestation sur l'honneur datant de moins de 3 mois avant la date de délivrance du PASS IAE <a href="" target="_blank" class="has-external-link">https://www.service-public.fr/particuliers/vosdroits/F199</a></li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">DELD (Demandeur d'Emploi de Longue Durée)</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Attestation France Travail (ex pôle emploi)</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 3 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
              <hr class="my-3">
            </li>
            <li>
              <strong class="fs-sm">Sortant de détention ou personne placée sous main de justice</strong><br>
              <ul class="fs-sm">
                <li class="m-0">Pièce justificative : Billet de sortie ou attestation du juge d'application des peines</li>
                <li class="m-0">Durée de validité du justificatif : Datant de moins de 6 mois avant la date de délivrance du PASS IAE</li>
              </ul>
              <div class="text-md-end mt-2">
                <a href="" class="btn btn-sm btn-link">Voir le justificatif</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`,d={render:h,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de `.c-box.c-box--results` pour le controle a posteriori - vue SIAE - carte auto-prescription"}}}},_=()=>`
<div class="c-box c-box--results has-one-link-inside">
  <div class="c-box--results__header">
    <div class="c-box--results__summary">
      <i class="ri-community-line" aria-hidden="true"></i>
      <div>
        <span>SOLIDARITES NOUVELLES FACE AU CHOMAGE SNC</span>
        <h3>Accompagnement individuel par un binôme de bénévoles formés</h3>
      </div>
    </div>
    <ul class="c-box--results__list-contact flex-md-grow-1 mt-2 mb-2 mb-md-0">
      <li>
        <i class="ri-map-pin-2-line fw-normal me-1" aria-hidden="true"></i>
        <address class="m-0">
          75001 Paris
        </address>
      </li>
    </ul>
  </div>
  <hr class="m-0">
  <div class="c-box--results__body">
    <p class="mb-2">
      La fréquence des rencontres entre la personne accompagnée et son binôme varie selon les besoins et disponibilités de chacun.e. Les rencontres ont lieu dans des lieux publics conviviaux (cafés, médiathèques ...)
      Des activités collectives sont également proposées aux chercheurs d'emploi pour renforcer leur projet professionnel et développer des liens avec d'autres chercheurs d'emploi.
    </p>
    <span class="badge badge-xs rounded-pill bg-light text-primary">Source : dora, via data·inclusion</span>
  </div>
  <div class="c-box--results__footer">
    <div class="d-flex flex-column flex-md-row justify-content-md-end gap-3">
      <a href="" class="btn btn-outline-primary btn-block w-100 w-md-auto white-space-nowrap stretched-link" target="_blank" rel="noopener" aria-label="Voir la fiche sur DORA (ouverture dans un nouvel onglet)">
        <span>Voir la fiche détaillée</span>
        <i class="ri-external-link-line fw-normal ms-2" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>
`,o={render:_,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple de `.c-box.c-box--results` pour DORA"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderEmployeursSIAE,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` avec les variations de contenu spécifique possible pour une carte de résultat de recherche employeurs"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderPostesOuvertsAuRecrutement,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` pour les postes ouverts au recrutement"
      }
    }
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderPrescripteurs,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` avec le contenu spécifique  pour une carte de résultat de recherche prescripteurs"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderCandidats,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` avec le contenu spécifique pour une carte de candidat sous la vue employeur / prescripteur puis sous la vue du candidat"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderSalariesASP,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` avec le contenu spécifique pour une carte de fiches salariés ASP"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderSalariesEtPassIAE,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple de \`.c-box.c-box--results\` avec le contenu spécifique pour une carte de fiches salariés et PASS IAE"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderControleAPosterioriDDETSSiae,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` pour le controle a posteriori - vue DDETS - carte SIAE"
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: renderControleAPosterioriDDETSAutoPrescription,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` pour le controle a posteriori - vue DDETS - carte auto-prescription"
      }
    }
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderControleAPosterioriSIAEAutoPrescription,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de \`.c-box.c-box--results\` pour le controle a posteriori - vue SIAE - carte auto-prescription"
      }
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderDora,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple de \`.c-box.c-box--results\` pour DORA"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const y=["EmployeursSIAE","PostesOuvertsAuRecrutement","Prescripteurs","Candidats","SalariesASP","SalariesEtPassIAE","ControleAPosterioriDDETSSiae","ControleAPosterioriDDETSAutoPrescription","ControleAPosterioriSIAEAutoPrescription","Dora"];export{a as Candidats,n as ControleAPosterioriDDETSAutoPrescription,r as ControleAPosterioriDDETSSiae,d as ControleAPosterioriSIAEAutoPrescription,o as Dora,s as EmployeursSIAE,e as PostesOuvertsAuRecrutement,i as Prescripteurs,l as SalariesASP,t as SalariesEtPassIAE,y as __namedExportsOrder,w as default};
