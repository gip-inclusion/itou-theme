const p={title:"Utilities/Spacing",decorators:[d=>`<div style="max-width: 1200px; margin: 0 auto;">${d()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Classes utilitaires d'espacement de blocs.

### Notation
- <code>.{property}{sides}-{size}</code> pour tous les breakpoints
- <code>.{property}{sides}-{breakpoint}-{size}</code> pour les variantes responsives

### Property
- <code>m</code> = margin
- <code>p</code> = padding

### Sides
- <code>t</code> = top
- <code>b</code> = bottom
- <code>s</code> = start
- <code>e</code> = end
- <code>x</code> = gauche + droite
- <code>y</code> = haut + bas
- vide = 4 côtés

### Tailles
- <code>0</code> à <code>10</code> selon la map <code>$spacers</code>
- <code>auto</code> pour certaines marges
- marges négatives : préfixe <code>n</code> (ex: \`.mt-n1\`)

### Exemples de notation
- \`.p-3\` → padding sur 4 côtés
- \`.mt-4\` → margin-top
- \`.mx-2\` → margin start + end
- \`.py-lg-5\` → padding vertical à partir de <code>lg</code>
- \`.ms-auto\` → marge auto à gauche (start)
- \`.mt-n1\` → marge négative top

### Valeurs de la map <code>$spacers</code>
- Base : <code>$spacer: 1rem</code> (soit 16px)
- Échelle : <code>0 → 0</code>, <code>1 → .25rem</code>, <code>2 → .5rem</code>, <code>3 → 1rem</code>, …, <code>10 → 8rem</code>

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/" target="_blank" rel="noopener noreferrer" class="has-external-link">Spacing</a>
`}}}},o=[{key:0,formula:"0",rem:"0",px:"0px"},{key:1,formula:"$spacer * 0.25",rem:"0.25rem",px:"4px"},{key:2,formula:"$spacer * 0.5",rem:"0.5rem",px:"8px"},{key:3,formula:"$spacer",rem:"1rem",px:"16px"},{key:4,formula:"$spacer * 1.5",rem:"1.5rem",px:"24px"},{key:5,formula:"$spacer * 2",rem:"2rem",px:"32px"},{key:6,formula:"$spacer * 3",rem:"3rem",px:"48px"},{key:7,formula:"$spacer * 4",rem:"4rem",px:"64px"},{key:8,formula:"$spacer * 5",rem:"5rem",px:"80px"},{key:9,formula:"$spacer * 6",rem:"6rem",px:"96px"},{key:10,formula:"$spacer * 8",rem:"8rem",px:"128px"}],c=()=>`
    <div class="card h-100">
      <div class="card-header"><strong>Valeurs des $spacers</strong></div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-sm mb-0">
            <thead>
              <tr><th>Clé</th><th>Formule</th><th>Valeur rem</th><th>Équivalent px</th></tr>
            </thead>
            <tbody>
              ${o.map(({key:r,formula:s,rem:a,px:t})=>`<tr><td><code>${r}</code></td><td><code>${s}</code></td><td>${a}</td><td>${t}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,i=()=>`
<div class="vstack gap-3">
  <div class="card">
    <div class="card-header"><strong>Padding</strong></div>
    <div class="card-body">
      <div class="bg-light border rounded p-2">.p-2</div>
      <div class="bg-light border rounded p-4 mt-2">.p-4 + .mt-2</div>
      <div class="bg-light border rounded px-5 py-2 mt-2">.px-5 + .py-2</div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><strong>Margin</strong></div>
    <div class="card-body">
      <div class="bg-light border rounded p-2 mb-2">Bloc 1 — .mb-2</div>
      <div class="bg-light border rounded p-2 mb-4">Bloc 2 — .mb-4</div>
      <div class="bg-light border rounded p-2 ms-auto" style="max-width: 280px;">Bloc 3 — .ms-auto</div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><strong>Gap / Gouttières</strong></div>
    <div class="card-body">
      <div class="d-grid gap-2 gap-md-4" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
        <div class="bg-light border rounded p-2 text-center">A</div>
        <div class="bg-light border rounded p-2 text-center">B</div>
        <div class="bg-light border rounded p-2 text-center">C</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><strong>Marge négative</strong></div>
    <div class="card-body">
      <div class="bg-light border rounded p-3">
        <div class="bg-button-lightest border rounded p-2 mt-n1">Exemple avec <code>.mt-n1</code></div>
      </div>
    </div>
  </div>
</div>
  `,l=()=>`
<section class="vstack gap-4">
  ${c()}
  ${i()}
</section>
  `,e={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Notation, échelle et exemples visuels des utilitaires d'espacement."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Notation, échelle et exemples visuels des utilitaires d'espacement."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,p as default};
