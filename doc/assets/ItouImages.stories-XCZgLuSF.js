const o={title:"Utilities/Images",decorators:[i=>`<div style="max-width: 1000px; margin: 0 auto;">${i()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Documentation et exemples des utilitaires d'image Bootstrap 5.3 et de l'utilitaire custom <code>.img-muted</code> du thème itou.

### Anatomie
1. **Image responsive** — Utiliser <code>.img-fluid</code> pour appliquer <code>max-width: 100%</code> et <code>height: auto</code>.
2. **Object fit** — Utiliser les classes <code>.object-fit-*</code> pour contrôler le recadrage dans un conteneur contraint.
3. **Utilitaire custom itou** — Utiliser <code>.img-muted</code> pour atténuer visuellement une image (niveaux de gris + opacité).
4. **Accessibilité** — Fournir un attribut <code>alt</code> pertinent pour les images informatives.

### Classes CSS
| Classe | Description |
|--------|-------------|
| <code>.img-fluid</code> | Rend l'image responsive |
| <code>.object-fit-contain</code> | Garde toute l'image visible dans son conteneur |
| <code>.object-fit-cover</code> | Remplit le conteneur, avec recadrage possible |
| <code>.object-fit-fill</code> | Étire l'image pour remplir le conteneur |
| <code>.object-fit-scale</code> | Préserve le ratio et limite l'agrandissement |
| <code>.object-fit-none</code> | Aucun ajustement de type object-fit |
| <code>.img-muted</code> | Utilitaire custom itou (grayscale + opacité) |

**Documentation Bootstrap** :
- <a href="https://getbootstrap.com/docs/5.3/content/images/#responsive-images" target="_blank" rel="noopener noreferrer">Responsive images</a>
- <a href="https://getbootstrap.com/docs/5.3/utilities/object-fit/" target="_blank" rel="noopener noreferrer">Object fit</a>
`}}}},e="./images/banner-01-illu.png",s=()=>`
<section class="vstack gap-4">
  <div class="vstack gap-2">
    <h2 class="h4 mb-0">Image responsive</h2>
    <p class="mb-0"><code>.img-fluid</code> adapte l'image à la largeur disponible du conteneur.</p>
    <div class="border rounded p-2" style="max-width: 560px;">
      <img src="${e}" class="img-fluid" alt="Illustration d'exemple en image responsive">
    </div>
  </div>

  <hr class="my-0">

  <div class="vstack gap-3">
    <h2 class="h4 mb-0">Object fit</h2>
    <p class="mb-0">Exemples des classes Bootstrap <code>.object-fit-*</code> dans un conteneur contraint (<code>200 × 120</code>).</p>
    <div class="d-flex flex-wrap gap-3">
      <figure class="mb-0">
        <div class="border rounded overflow-hidden" style="width: 200px; height: 120px;">
          <img src="${e}" class="w-100 h-100 object-fit-contain" alt="Exemple object-fit contain">
        </div>
        <figcaption class="small mt-1"><code>.object-fit-contain</code></figcaption>
      </figure>

      <figure class="mb-0">
        <div class="border rounded overflow-hidden" style="width: 200px; height: 120px;">
          <img src="${e}" class="w-100 h-100 object-fit-cover" alt="Exemple object-fit cover">
        </div>
        <figcaption class="small mt-1"><code>.object-fit-cover</code></figcaption>
      </figure>

      <figure class="mb-0">
        <div class="border rounded overflow-hidden" style="width: 200px; height: 120px;">
          <img src="${e}" class="w-100 h-100 object-fit-fill" alt="Exemple object-fit fill">
        </div>
        <figcaption class="small mt-1"><code>.object-fit-fill</code></figcaption>
      </figure>

      <figure class="mb-0">
        <div class="border rounded overflow-hidden" style="width: 200px; height: 120px;">
          <img src="${e}" class="w-100 h-100 object-fit-scale" alt="Exemple object-fit scale">
        </div>
        <figcaption class="small mt-1"><code>.object-fit-scale</code></figcaption>
      </figure>

      <figure class="mb-0">
        <div class="border rounded overflow-hidden" style="width: 200px; height: 120px;">
          <img src="${e}" class="w-100 h-100 object-fit-none" alt="Exemple object-fit none">
        </div>
        <figcaption class="small mt-1"><code>.object-fit-none</code></figcaption>
      </figure>
    </div>
  </div>

  <hr class="my-0">

  <div class="vstack gap-2">
    <h2 class="h4 mb-0">Image atténuée (custom itou)</h2>
    <p class="mb-0"><code>.img-muted</code> applique un effet niveaux de gris et baisse l'opacité.</p>
    <div class="border rounded p-2" style="max-width: 560px;">
      <img src="${e}" class="img-fluid img-muted" alt="Illustration d'exemple avec style atténué">
    </div>
  </div>
</section>
  `,t={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Exemples de classes Bootstrap pour les images (`.img-fluid`, `.object-fit-*`) et utilitaire custom itou (`.img-muted`)."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: renderImages,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemples de classes Bootstrap pour les images (\`.img-fluid\`, \`.object-fit-*\`) et utilitaire custom itou (\`.img-muted\`)."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,o as default};
