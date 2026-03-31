const o={title:"Components/Cards",decorators:[a=>`<div style="max-width: 1000px; margin: 0 auto;">${a()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `.card` fournit un conteneur de contenu flexible et extensible.\nIl permet de combiner image, titre, sous-titre, texte, liens, listes et zones d\'actions, selon les besoins.\n\n### Anatomie\n1. **Conteneur** - `.card`\n2. **Image (optionnel)** - `.card-img-top` ou `.card-img-bottom`\n3. **Corps** - `.card-body` (titre, texte, liens, boutons)\n4. **Liste (optionnel)** - `.list-group.list-group-flush`\n5. **En-tete / pied (optionnel)** - `.card-header` / `.card-footer`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.card` | Conteneur principal |\n| `.card-body` | Zone de contenu principal |\n| `.card-title` | Titre |\n| `.card-subtitle` | Sous-titre |\n| `.card-text` | Texte descriptif |\n| `.card-link` | Liens d\'action textuels |\n| `.card-header` | En-tete de carte |\n| `.card-footer` | Pied de carte |\n\n### Accessibilite\n- Fournir un attribut `alt` pertinent pour les images informatives.\n- Ne pas porter une information uniquement par la couleur.\n- Conserver un ordre de lecture logique (titre puis contenu puis actions).\n- Utiliser des labels explicites pour les boutons et liens.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/card/" target="_blank" rel="noopener noreferrer" class="has-external-link">Cards</a>\n'}}}},n=()=>`
  <div class="card" style="width: 18rem;">
    <img src="./images/banner-01-illu.png" class="card-img-top" alt="Image d'illustration de la carte">
    <div class="card-body">
      <h5 class="card-title">Titre de la carte</h5>
      <p class="card-text">Texte descriptif de la carte pour presenter le contenu principal de maniere concise.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Un element</li>
      <li class="list-group-item">Un deuxieme element</li>
      <li class="list-group-item">Un troisieme element</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Lien de la carte</a>
      <a href="#" class="card-link">Autre lien</a>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-sm btn-primary">Voir le detail</a>
    </div>
  </div>
`,t=()=>`
  <div class="row row-cols-1 row-cols-md-2 row-cols-xxl-3 row-cols-xxxl-4 mt-3 mt-md-4">
    <div class="col mb-3 mb-md-4">
      <div class="card h-100">
        <img src="./images/home-title-01-illu-card-01.png" class="card-img-top" alt="Illustration 1">
        <div class="card-body">
          <h5 class="card-title">Titre de la carte</h5>
          <p class="card-text">Une carte plus longue avec un texte d'accompagnement pour decrire le contenu.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Mis a jour il y a 3 min</small>
        </div>
      </div>
    </div>
    <div class="col mb-3 mb-md-4">
      <div class="card h-100">
        <img src="./images/home-title-01-illu-card-02.png" class="card-img-top" alt="Illustration 2">
        <div class="card-body">
          <h5 class="card-title">Titre de la carte</h5>
          <p class="card-text">Cette carte contient un texte d'accompagnement plus court.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Mis a jour il y a 8 min</small>
        </div>
      </div>
    </div>
    <div class="col mb-3 mb-md-4">
      <div class="card h-100">
        <img src="./images/home-title-01-illu-card-03.png" class="card-img-top" alt="Illustration 3">
        <div class="card-body">
          <h5 class="card-title">Titre de la carte</h5>
          <p class="card-text">Une carte avec un descriptif intermediaire pour illustrer l'equilibrage des hauteurs.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Mis a jour il y a 15 min</small>
        </div>
      </div>
    </div>
  </div>
`,d=()=>`
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div class="col mb-3 mb-md-5">
      <div class="card c-card has-one-link-inside h-100 w-100">
        <div class="card-header">
          <img src="./images/logo-marche-inclusion.svg" height="53" alt="Les marches de l'inclusion">
        </div>
        <div class="card-body">
          <p>
            Les emplois de l'inclusion est un service numerique de delivrance des PASS IAE et de mise en relation
            d'employeurs solidaires avec des candidats eloignes de l'emploi.
          </p>
        </div>
        <div class="card-footer text-end">
          <a href="#" class="btn btn-sm btn-ico btn-link stretched-link">
            <span>Voir le service</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="col mb-3 mb-md-5">
      <div class="card c-card has-one-link-inside h-100 w-100">
        <div class="card-header">
          <img src="./images/logo-plateforme-inclusion.svg" height="53" alt="La plateforme de l'inclusion">
        </div>
        <div class="card-body">
          <p>
            Les emplois de l'inclusion est un service numerique de delivrance des PASS IAE et de mise en relation
            d'employeurs solidaires avec des candidats eloignes de l'emploi.
          </p>
        </div>
        <div class="card-footer text-end">
          <a href="#" class="btn btn-sm btn-ico btn-link stretched-link">
            <span>Voir le service</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
`,l=()=>`
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div class="col mb-3 mb-md-5">
      <div class="card c-card has-links-inside h-100 w-100">
        <div class="card-header">
          <img src="./images/logo-marche-inclusion.svg" height="53" alt="Les marches de l'inclusion">
        </div>
        <div class="card-body">
          <p>
            Les emplois de l'inclusion est un service numerique de delivrance des PASS IAE et de mise en relation
            d'employeurs solidaires avec des candidats eloignes de l'emploi.
          </p>
        </div>
        <div class="card-footer text-end">
          <a href="#" class="btn btn-sm btn-ico btn-link">
            <span>Lien 01</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
          <a href="#" class="btn btn-sm btn-ico btn-link">
            <span>Lien 02</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="col mb-3 mb-md-5">
      <div class="card c-card has-links-inside h-100 w-100">
        <div class="card-header">
          <img src="./images/logo-plateforme-inclusion.svg" height="53" alt="La plateforme de l'inclusion">
        </div>
        <div class="card-body">
          <p>
            Les emplois de l'inclusion est un service numerique de delivrance des PASS IAE et de mise en relation
            d'employeurs solidaires avec des candidats eloignes de l'emploi.
          </p>
        </div>
        <div class="card-footer text-end">
          <a href="#" class="btn btn-sm btn-ico btn-link">
            <span>Lien 01</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
          <a href="#" class="btn btn-sm btn-ico btn-link">
            <span>Lien 02</span>
            <i class="ri-arrow-right-up-line ri-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
`,e={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version kitchen sink alignee sur la structure presente dans components.html (image, body, list-group, liens, footer)."}}}},s={render:t,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemple de layout Bootstrap avec row-cols et cartes en hauteur uniforme via h-100."}}}},r={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `c-card has-one-link-inside` avec un seul lien en `stretched-link` et une bordure bleu au survol."}}}},i={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante itou `c-card has-links-inside` avec plusieurs liens et une bordure grise au survol."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderKitchenSink,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version kitchen sink alignee sur la structure presente dans components.html (image, body, list-group, liens, footer)."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderGridCards,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple de layout Bootstrap avec row-cols et cartes en hauteur uniforme via h-100."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderHasOneLinkInside,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou \`c-card has-one-link-inside\` avec un seul lien en \`stretched-link\` et une bordure bleu au survol."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderHasLinksInside,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante itou \`c-card has-links-inside\` avec plusieurs liens et une bordure grise au survol."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const c=["Default","GridCards","HasOneLinkInside","HasLinksInside"];export{e as Default,s as GridCards,i as HasLinksInside,r as HasOneLinkInside,c as __namedExportsOrder,o as default};
