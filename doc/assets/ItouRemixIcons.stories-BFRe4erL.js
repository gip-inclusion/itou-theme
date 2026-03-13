const s={title:"Libraries/Remix Icons",decorators:[i=>`<div style="max-width: 1000px; margin: 0 auto;">${i()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Les icones <a href="https://remixicon.com" target="_blank" rel="noopener noreferrer" class="has-external-link">Remix Icons 4.7</a> sont incluses dans le theme Itou — aucun CDN externe n'est nécessaire.

La classe de base s'utilise avec le préfixe <code>ri-</code> suivi du nom de l'icone. Les modificateurs de taille disponibles sont :
<code>ri-xs</code>, <code>ri-sm</code>, <code>ri-lg</code>, <code>ri-xl</code>, <code>ri-xxl</code>.

Les suffixes <code>-line</code> (contour) et <code>-fill</code> (plein) permettent de choisir le style de l'icone.
`}}}},r=()=>`
    <article class="row py-3">
      <div class="col-12">

        <h3 class="h5 mb-3">Tailles</h3>
        <div class="d-flex align-items-end gap-3 mb-4">
          <i class="ri-target-fill ri-xs fw-medium" aria-hidden="true"></i>
          <i class="ri-target-fill ri-sm fw-medium" aria-hidden="true"></i>
          <i class="ri-target-fill fw-medium" aria-hidden="true"></i>
          <i class="ri-target-fill ri-lg fw-medium" aria-hidden="true"></i>
          <i class="ri-target-fill ri-xl fw-medium" aria-hidden="true"></i>
          <i class="ri-target-fill ri-xxl fw-medium" aria-hidden="true"></i>
        </div>

        <h3 class="h5 mb-3">Styles (line / fill)</h3>
        <div class="d-flex align-items-center gap-3 mb-4">
          <i class="ri-star-line ri-xxl text-warning fw-medium" aria-hidden="true"></i>
          <i class="ri-star-fill ri-xxl text-warning fw-medium" aria-hidden="true"></i>
        </div>
      </div>
    </article>
  `,e={render:r};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render
}`,...e.parameters?.docs?.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,s as default};
