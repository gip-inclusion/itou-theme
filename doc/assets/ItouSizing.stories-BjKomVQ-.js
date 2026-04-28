const m={title:"Utilities/Sizing",decorators:[d=>`<div style="max-width: 1200px; margin: 0 auto;">${d()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Classes utilitaires de dimensionnement (largeur et hauteurs max).

### Anatomie
1. **Width** — Classes \`.w-*\` pour définir la largeur.
2. **Max-width** — Classes \`.mw-*\` pour borner la largeur maximale.
3. **Max-height** — Classes \`.mh-*\` pour borner la hauteur maximale.
4. **Responsive** — Variantes disponibles par breakpoint (<code>-sm-</code>, <code>-md-</code>, <code>-lg-</code>, <code>-xl-</code>, <code>-xxl-</code>, <code>-xxxl-</code>).

### Notation
- \`.w-{value}\`
- \`.mw-{value}\`
- \`.mh-{value}\`
- Version responsive : \`.w-md-50\`, \`.mw-lg-75\`, \`.mh-xl-50vh\`, etc.

### Valeurs custom ajoutées dans l'API Utilities
- <code>width</code> : <code>25</code>, <code>33</code>, <code>40</code>, <code>50</code>, <code>66</code>, <code>75</code>, <code>50px</code>, <code>100px</code>, <code>200px</code>, <code>300px</code>, <code>400px</code>
- <code>max-width</code> : <code>25</code>, <code>33</code>, <code>50</code>, <code>66</code>, <code>75</code>
- <code>max-height</code> : <code>25</code>, <code>33</code>, <code>50</code>, <code>66</code>, <code>75</code>, <code>25vh</code>, <code>33vh</code>, <code>50vh</code>, <code>66vh</code>, <code>75vh</code>, <code>100vh</code>

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/utilities/sizing/" target="_blank" rel="noopener noreferrer" class="has-external-link">Sizing</a>
`}}}},a=[{token:"25",css:"25%"},{token:"33",css:"33%"},{token:"40",css:"40%"},{token:"50",css:"50%"},{token:"66",css:"66%"},{token:"75",css:"75%"},{token:"50px",css:"50px"},{token:"100px",css:"100px"},{token:"200px",css:"200px"},{token:"300px",css:"300px"},{token:"400px",css:"400px"}],l=[{token:"25",css:"25%"},{token:"33",css:"33%"},{token:"50",css:"50%"},{token:"66",css:"66%"},{token:"75",css:"75%"}],n=[{token:"25",css:"25%"},{token:"33",css:"33%"},{token:"50",css:"50%"},{token:"66",css:"66%"},{token:"75",css:"75%"},{token:"25vh",css:"25vh"},{token:"33vh",css:"33vh"},{token:"50vh",css:"50vh"},{token:"66vh",css:"66vh"},{token:"75vh",css:"75vh"},{token:"100vh",css:"100vh"}],s=(d,o,r)=>{const t=r.map(({token:c,css:i})=>`<tr><td><code>.${o}-${c}</code></td><td>${i}</td></tr>`).join("");return`
<div class="col-12 col-lg-4">
  <div class="card h-100">
    <div class="card-header"><strong>${d}</strong></div>
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-sm mb-0">
          <thead>
            <tr><th>Classe</th><th>Valeur CSS</th></tr>
          </thead>
          <tbody>${t}</tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  `},v=()=>`
<div class="row g-3">
  ${s("Width","w",a)}
  ${s("Max-width","mw",l)}
  ${s("Max-height","mh",n)}
</div>
  `,h=()=>`
<div class="card">
  <div class="card-header"><strong>Exemples width (.w-*)</strong></div>
  <div class="card-body vstack gap-2">
    <div class="w-25 bg-light border rounded p-2">.w-25</div>
    <div class="w-33 bg-light border rounded p-2">.w-33</div>
    <div class="w-50 bg-light border rounded p-2">.w-50</div>
    <div class="w-66 bg-light border rounded p-2">.w-66</div>
    <div class="w-75 bg-light border rounded p-2">.w-75</div>
    <div class="w-200px bg-light border rounded p-2">.w-200px</div>
    <div class="w-md-50 w-lg-33 bg-light border rounded p-2">.w-md-50 .w-lg-33 (responsive)</div>
  </div>
</div>
  `,p=()=>`
<div class="card">
  <div class="card-header"><strong>Exemples max-width (.mw-*)</strong></div>
  <div class="card-body vstack gap-3">
    <div class="bg-light border rounded p-2">
      <div class="mw-25 bg-button-lightest border rounded p-2">.mw-25</div>
    </div>
    <div class="bg-light border rounded p-2">
      <div class="mw-50 bg-button-lightest border rounded p-2">.mw-50</div>
    </div>
    <div class="bg-light border rounded p-2">
      <div class="mw-75 bg-button-lightest border rounded p-2">.mw-75</div>
    </div>
  </div>
</div>
  `,b=()=>`
<div class="card">
  <div class="card-header"><strong>Exemples max-height (.mh-*)</strong></div>
  <div class="card-body">
    <div class="row g-3">
      <div class="col-12 col-md-6 col-xl-4">
        <div class="border rounded p-2" style="height: 220px;">
          <div class="mh-25 bg-light border rounded p-2 overflow-auto">.mh-25<br><br>Contenu<br>long<br>pour<br>visualiser<br>la<br>limite.</div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="border rounded p-2" style="height: 220px;">
          <div class="mh-50 bg-light border rounded p-2 overflow-auto">.mh-50<br><br>Contenu<br>long<br>pour<br>visualiser<br>la<br>limite.</div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-4">
        <div class="border rounded p-2" style="height: 220px;">
          <div class="mh-50vh bg-light border rounded p-2 overflow-auto">.mh-50vh<br><br>Contenu<br>long<br>pour<br>visualiser<br>la<br>limite.</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,u=()=>`
<section class="vstack gap-4">
  ${v()}
  ${h()}
  ${p()}
  ${b()}
</section>
  `,e={render:u,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Référence des utilitaires de dimensionnement et exemples visuels (`w-*`, `mw-*`, `mh-*`)."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        story: "Référence des utilitaires de dimensionnement et exemples visuels (\`w-*\`, \`mw-*\`, \`mh-*\`)."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,m as default};
