const g={title:"Utilities/Grid",decorators:[t=>`<div style="max-width: 1200px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Documentation des conteneurs, breakpoints, grilles.

### Anatomie
1. **Container** — Le conteneur structure la largeur du contenu suivant les breakpoints.
2. **Row / Col** — Le système de grille Flex repose sur <code>.row</code> et les classes <code>.col-*</code>.
3. **CSS Grid** — Alternative via <code>.grid</code> et <code>.g-col-*</code>.

**Documentation Bootstrap** :
- <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints/" target="_blank" rel="noopener noreferrer" class="has-external-link">Breakpoints</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/containers/" target="_blank" rel="noopener noreferrer" class="has-external-link">Containers</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank" rel="noopener noreferrer" class="has-external-link">Grid (Flex)</a>
- <a href="https://getbootstrap.com/docs/5.3/layout/css-grid/" target="_blank" rel="noopener noreferrer" class="has-external-link">CSS Grid</a>
`}}}},c=[{name:"xs",value:"0"},{name:"sm",value:"560px"},{name:"md",value:"768px"},{name:"lg",value:"1024px"},{name:"xl",value:"1280px"},{name:"xxl",value:"1640px"},{name:"xxxl",value:"2220px"}],l=[{breakpoint:"sm",value:"560px"},{breakpoint:"md",value:"768px"},{breakpoint:"lg",value:"1024px"},{breakpoint:"xl",value:"1280px"},{breakpoint:"xxl",value:"1640px"},{breakpoint:"xxxl",value:"2220px"}],n=["xs","sm","md","lg","xl","xxl","xxxl"],i=[{className:".container",startsAt:"sm"},{className:".container-sm",startsAt:"sm"},{className:".container-md",startsAt:"md"},{className:".container-lg",startsAt:"lg"},{className:".container-xl",startsAt:"xl"},{className:".container-xxl",startsAt:"xxl"},{className:".container-xxxl",startsAt:"xxxl"},{className:".container-fluid",startsAt:"fluid"}],p=(t,s)=>{if(t==="fluid")return"100%";const e=n.indexOf(t);if(n.indexOf(s)<e)return"100%";const a=l.find(({breakpoint:d})=>d===s);return a?a.value:"100%"},x=()=>{const t=c.map(({name:e,value:r})=>`<tr><td><code>${e}</code></td><td>${r}</td></tr>`).join(""),s=l.map(({breakpoint:e,value:r})=>`<tr><td><code>${e}</code></td><td>${r}</td></tr>`).join("");return`
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
            <tbody>${t}</tbody>
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
            <tbody>${s}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  `},m=()=>{const t=n.map(e=>`<th class="text-center"><code>${e}</code></th>`).join(""),s=i.map(({className:e,startsAt:r})=>{const a=n.map(d=>`<td class="text-center">${p(r,d)}</td>`).join("");return`
        <tr>
          <th scope="row" class="text-nowrap"><code>${e}</code></th>
          ${a}
        </tr>
      `}).join("");return`
<div class="card">
  <div class="card-header"><strong>Table des containers</strong></div>
  <div class="card-body p-0">
    <div class="table-responsive">
      <table class="table table-sm table-bordered mb-0 align-middle">
        <thead>
          <tr>
            <th>Classe</th>
            ${t}
          </tr>
        </thead>
        <tbody>
          ${s}
        </tbody>
      </table>
    </div>
  </div>
</div>
  `},v=()=>`
<div class="container border rounded p-3">
  <p class="mb-2"><strong>Flex Grid</strong> — <code>.row</code> + <code>.col-*</code></p>
  <div class="row g-3">
    ${Array.from({length:12},(s,e)=>`
    <div class="col-6 col-md-3 col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${e+1}/12</div>
    </div>
  `).join("")}
  </div>
</div>
  `,u=()=>`
<div class="container border rounded p-3">
  <p class="mb-2"><strong>CSS Grid</strong> — <code>.grid</code> + <code>.g-col-*</code></p>
  <div class="grid gap-3">
    ${Array.from({length:12},(s,e)=>`
    <div class="g-col-6 g-col-md-3 g-col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${e+1}/12</div>
    </div>
  `).join("")}
  </div>
</div>
  `,b=()=>`
<section class="vstack gap-4">
  ${x()}
  ${m()}
  ${v()}
  ${u()}
</section>
  `,o={render:b,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Référence des maps de layout et démos de grilles/container."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,g as default};
