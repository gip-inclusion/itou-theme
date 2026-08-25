import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t={title:`Utilities/Grid`,decorators:[e=>`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Documentation des conteneurs, breakpoints, grilles.

### Anatomie
1. **Container** — Le conteneur structure la largeur du contenu suivant les breakpoints.
2. **Row / Col** — Le système de grille Flex repose sur \`.row\` et les classes \`.col-*\`.
3. **CSS Grid** — Alternative via \`.grid\` et \`.g-col-*\`.

**Documentation Bootstrap** :
- <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints/" target="_blank" rel="noopener noreferrer" class="has-external-link">Breakpoints</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/containers/" target="_blank" rel="noopener noreferrer" class="has-external-link">Containers</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank" rel="noopener noreferrer" class="has-external-link">Grid (Flex)</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/css-grid/" target="_blank" rel="noopener noreferrer" class="has-external-link">CSS Grid</a>
`}}}},n=[{name:`xs`,value:`0`},{name:`sm`,value:`560px`},{name:`md`,value:`768px`},{name:`lg`,value:`1024px`},{name:`xl`,value:`1280px`},{name:`xxl`,value:`1640px`},{name:`xxxl`,value:`2220px`}],r=[{breakpoint:`sm`,value:`560px`},{breakpoint:`md`,value:`768px`},{breakpoint:`lg`,value:`1024px`},{breakpoint:`xl`,value:`1280px`},{breakpoint:`xxl`,value:`1640px`},{breakpoint:`xxxl`,value:`2220px`}],i=[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`,`xxxl`],a=[{className:`.container`,startsAt:`sm`},{className:`.container-sm`,startsAt:`sm`},{className:`.container-md`,startsAt:`md`},{className:`.container-lg`,startsAt:`lg`},{className:`.container-xl`,startsAt:`xl`},{className:`.container-xxl`,startsAt:`xxl`},{className:`.container-xxxl`,startsAt:`xxxl`},{className:`.container-fluid`,startsAt:`fluid`}],o=(e,t)=>{if(e===`fluid`)return`100%`;let n=i.indexOf(e);if(i.indexOf(t)<n)return`100%`;let a=r.find(({breakpoint:e})=>e===t);return a?a.value:`100%`},s=()=>`
<div class="row g-3">
  <div class="col-12 col-lg-6">
    <div class="card h-100">
      <div class="card-header"><strong>$grid-breakpoints</strong></div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-sm mb-0">
            <thead>
              <tr><th>Clé</th><th>Valeur</th></tr>
            </thead>
            <tbody>${n.map(({name:e,value:t})=>`<tr><td><code>${e}</code></td><td>${t}</td></tr>`).join(``)}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-lg-6">
    <div class="card h-100">
      <div class="card-header"><strong>$container-max-widths</strong></div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-sm mb-0">
            <thead>
              <tr><th>Breakpoint</th><th>Max-width</th></tr>
            </thead>
            <tbody>${r.map(({breakpoint:e,value:t})=>`<tr><td><code>${e}</code></td><td>${t}</td></tr>`).join(``)}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  `,c=()=>`
<div class="card">
  <div class="card-header"><strong>Table des containers</strong></div>
  <div class="card-body p-0">
    <div class="table-responsive">
      <table class="table table-sm table-bordered mb-0 align-middle">
        <thead>
          <tr>
            <th>Classe</th>
            ${i.map(e=>`<th class="text-center"><code>${e}</code></th>`).join(``)}
          </tr>
        </thead>
        <tbody>
          ${a.map(({className:e,startsAt:t})=>`
        <tr>
          <th scope="row" class="text-nowrap"><code>${e}</code></th>
          ${i.map(e=>`<td class="text-center">${o(t,e)}</td>`).join(``)}
        </tr>
      `).join(``)}
        </tbody>
      </table>
    </div>
  </div>
</div>
  `,l=()=>`
<div class="container border rounded p-3">
  <p class="mb-2"><strong>Flex Grid</strong> — <code>.row</code> + <code>.col-*</code></p>
  <div class="row g-3">
    ${Array.from({length:12},(e,t)=>`
    <div class="col-6 col-md-3 col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${t+1}/12</div>
    </div>
  `).join(``)}
  </div>
</div>
  `,u=()=>`
<div class="container border rounded p-3">
  <p class="mb-2"><strong>CSS Grid</strong> — <code>.grid</code> + <code>.g-col-*</code></p>
  <div class="grid gap-3">
    ${Array.from({length:12},(e,t)=>`
    <div class="g-col-6 g-col-md-3 g-col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${t+1}/12</div>
    </div>
  `).join(``)}
  </div>
</div>
  `,d=()=>`
<section class="vstack gap-4">
  ${s()}
  ${c()}
  ${l()}
  ${u()}
</section>
  `,f={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Référence des maps de layout et démos de grilles/container.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        story: "Référence des maps de layout et démos de grilles/container."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`]})))()}m();export{f as Default,p as __namedExportsOrder,t as default};