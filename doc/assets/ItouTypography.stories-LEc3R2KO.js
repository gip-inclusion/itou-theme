const d={title:"Utilities/Typography",decorators:[r=>`<div style="max-width: 1000px; margin: 0 auto;">${r()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nDocumentation et exemples des classes utilitaires de typographie, basée sur Bootstrap 5.3 et les utilitaires custom du thème itou.\n\n### Anatomie\n1. **Balise sémantique** — Utiliser en priorité les balises HTML (`<h1>`…`<h6>`, `<p>`, `<blockquote>`, `<abbr>`, `<ul>`, `<dl>`, etc.).\n2. **Classe typographique** — Appliquer ensuite les classes utilitaires (`.h1`, `.lead`, `.list-inline`, etc.).\n3. **Utilitaires custom itou** — En complément, utiliser les classes thème (`.fs-xs`, `.ff-extra-01`, `.text-decoration-dashed`, etc.).\n4. **Accessibilité** — Préserver la hiérarchie des titres, un contraste suffisant et des libellés explicites.\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.h1` à `.h6` | Style de titres appliqué sur un élément non-heading |\n| `.lead` | Paragraphe d\'introduction |\n| `.fs-lg`, `.fs-base`, `.fs-sm`, `.fs-xs` | Tailles de police custom itou |\n| `.ff-base`, `.ff-extra-01` | Familles de polices du thème |\n| `.lh-lg`, `.lh-base`, `.lh-sm` | Interlignage custom itou |\n| `.list-unstyled` | Liste sans puces |\n| `.list-inline` + `.list-inline-item` | Liste en ligne |\n| `.blockquote` + `.blockquote-footer` | Citation standard |\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/content/typography/" target="_blank" rel="noopener noreferrer" class="has-external-link">Typography</a>\n'}}}},l=()=>`
<section class="vstack gap-3">
  <h1>h1. Titre sémantique</h1>
  <h2>h2. Titre sémantique</h2>
  <h3>h3. Titre sémantique</h3>
  <h4>h4. Titre sémantique</h4>
  <h5>h5. Titre sémantique</h5>
  <h6>h6. Titre sémantique</h6>
  <hr>
  <p class="h1">.h1 sur un paragraphe</p>
  <p class="h2">.h2 sur un paragraphe</p>
  <p class="h3">.h3 sur un paragraphe</p>
  <p class="h4">.h4 sur un paragraphe</p>
  <p class="h5">.h5 sur un paragraphe</p>
  <p class="h6">.h6 sur un paragraphe</p>
</section>
  `,e={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Titres sémantiques et classes `.h*` Bootstrap."}}}},n=()=>`
<section class="vstack gap-3">
  <p class="lead mb-0">.lead — paragraphe d'introduction</p>
  <p class="fs-lg mb-0">.fs-lg — taille large custom</p>
  <p class="fs-base mb-0">.fs-base — taille de base custom</p>
  <p class="fs-sm mb-0">.fs-sm — petite taille custom</p>
  <p class="fs-xs mb-0">.fs-xs — très petite taille custom</p>
  <hr>
  <p class="fw-light mb-0">.fw-light</p>
  <p class="fw-normal mb-0">.fw-normal</p>
  <p class="fw-medium mb-0">.fw-medium</p>
  <p class="fw-bold mb-0">.fw-bold</p>
  <p class="fw-bolder mb-0">.fw-bolder</p>
  <hr>
  <p class="lh-sm mb-0">.lh-sm — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod.</p>
  <p class="lh-base mb-0">.lh-base — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod.</p>
  <p class="lh-lg mb-0">.lh-lg — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod.</p>
  <hr>
  <p class="ff-base mb-0">.ff-base — police principale du thème</p>
  <p class="ff-extra-01 mb-0">.ff-extra-01 — police illustrative du thème</p>
</section>
  `,s={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de tailles, graissages, interlignage et familles de polices (Bootstrap + custom itou)."}}}},o=()=>`
<section class="vstack gap-3">
  <p class="mb-0">Texte avec <mark>&lt;mark&gt;</mark>, <span class="mark">.mark</span>, <small>&lt;small&gt;</small> et <span class="small">.small</span>.</p>
  <p class="mb-0"><abbr title="attribut">attr</abbr> et <abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
  <hr>
  <ul class="list-unstyled mb-0">
    <li>.list-unstyled — item 1</li>
    <li>.list-unstyled — item 2</li>
  </ul>
  <ul class="list-inline mb-0">
    <li class="list-inline-item">.list-inline-item 1</li>
    <li class="list-inline-item">.list-inline-item 2</li>
    <li class="list-inline-item">.list-inline-item 3</li>
  </ul>
  <dl class="row mb-0">
    <dt class="col-sm-3">Terme</dt>
    <dd class="col-sm-9">Définition en liste descriptive.</dd>
    <dt class="col-sm-3 text-truncate">Terme tronqué en largeur réduite</dt>
    <dd class="col-sm-9">Exemple avec <code>.text-truncate</code>.</dd>
    <dd class="col-sm-6 has-ellipsis"><code>.has-ellipsis</code> — utilitaire custom itou de troncature sur une ligne qui ajoute les 3 points</dd>
  </dl>
</section>
  `,t={render:o,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Éléments inline et formats de listes de la documentation typographique Bootstrap."}}}},c=()=>`
<section class="vstack gap-4">
  <figure class="mb-0">
    <blockquote class="blockquote mb-2">
      <p class="mb-0">Une citation en style standard avec la classe .blockquote.</p>
    </blockquote>
    <figcaption class="blockquote-footer">Quelqu'un de célèbre dans <cite title="Titre de la source">Titre de la source</cite></figcaption>
  </figure>

  <figure class="mb-0">
    <blockquote class="testimonial mb-2">
      <p class="mb-0">Une citation en style témoignage avec la classe custom .testimonial.</p>
    </blockquote>
    <figcaption class="testimonial-footer">Personne interviewée dans <cite title="Retours utilisateurs">Retours utilisateurs</cite></figcaption>
  </figure>

  <p class="mb-0">Exemple de balise <q>citation inline avec guillemets typographiques</q>.</p>
</section>
  `,a={render:c,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Citations Bootstrap (`.blockquote`) et variante custom itou (`.testimonial`)."}}}},p=()=>`
<section class="vstack gap-3">
  <p class="mb-0">Il n'y a besoin d'<a href="#">aucune classe particulière</a> pour les liens simples</p>
  <p class="mb-0">Il faut <code>.has-external-link</code> <a href="#" rel="noopener" target="_blank">pour les liens externes</a></p>
  <p class="mb-0">Il faut <code>.has-downloadable-file</code> <a href="#" class="has-downloadable-file">pour les liens vers des fichiers téléchargeables</a></p>
  <p class="mb-0 position-relative">Il faut <code>.stretched-link</code> (avec un parent <code>.position-relative</code>) <a href="#" class="stretched-link">pour étendre la zone cliquable à tout le bloc</a></p>
  <p class="mb-0">Il faut <code>.btn-link</code> <a href="#" class="btn-link">pour les liens d'action importants</a></p>
</section>
  `,i={render:p,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Type de liens possibles."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderHeadings,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Titres sémantiques et classes \`.h*\` Bootstrap."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderSizesWeightsLineHeight,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de tailles, graissages, interlignage et familles de polices (Bootstrap + custom itou)."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderInlineTextAndLists,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Éléments inline et formats de listes de la documentation typographique Bootstrap."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderQuotes,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Citations Bootstrap (\`.blockquote\`) et variante custom itou (\`.testimonial\`)."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderLinks,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Type de liens possibles."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const u=["Headings","SizesWeightsAndLineHeight","InlineTextAndLists","Quotes","Links"];export{e as Headings,t as InlineTextAndLists,i as Links,a as Quotes,s as SizesWeightsAndLineHeight,u as __namedExportsOrder,d as default};
