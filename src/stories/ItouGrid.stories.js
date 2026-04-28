export default {
  title: "Utilities/Grid",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
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
`,
      },
    },
  },
};

const breakpoints = [
  { name: "xs", value: "0" },
  { name: "sm", value: "560px" },
  { name: "md", value: "768px" },
  { name: "lg", value: "1024px" },
  { name: "xl", value: "1280px" },
  { name: "xxl", value: "1640px" },
  { name: "xxxl", value: "2220px" },
];

const containerMaxWidths = [
  { breakpoint: "sm", value: "560px" },
  { breakpoint: "md", value: "768px" },
  { breakpoint: "lg", value: "1024px" },
  { breakpoint: "xl", value: "1280px" },
  { breakpoint: "xxl", value: "1640px" },
  { breakpoint: "xxxl", value: "2220px" },
];

const containerBreakpoints = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];

const containerClassRows = [
  { className: ".container", startsAt: "sm" },
  { className: ".container-sm", startsAt: "sm" },
  { className: ".container-md", startsAt: "md" },
  { className: ".container-lg", startsAt: "lg" },
  { className: ".container-xl", startsAt: "xl" },
  { className: ".container-xxl", startsAt: "xxl" },
  { className: ".container-xxxl", startsAt: "xxxl" },
  { className: ".container-fluid", startsAt: "fluid" },
];

const getContainerWidthAtBreakpoint = (startsAt, currentBreakpoint) => {
  if (startsAt === "fluid") {
    return "100%";
  }

  const startIndex = containerBreakpoints.indexOf(startsAt);
  const currentIndex = containerBreakpoints.indexOf(currentBreakpoint);

  if (currentIndex < startIndex) {
    return "100%";
  }

  const maxWidth = containerMaxWidths.find(({ breakpoint }) => breakpoint === currentBreakpoint);
  return maxWidth ? maxWidth.value : "100%";
};

const renderValuesTables = () => {
  const breakpointsRows = breakpoints
    .map(({ name, value }) => `<tr><td><code>${name}</code></td><td>${value}</td></tr>`)
    .join("");

  const containerRows = containerMaxWidths
    .map(({ breakpoint, value }) => `<tr><td><code>${breakpoint}</code></td><td>${value}</td></tr>`)
    .join("");

  return `
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
            <tbody>${breakpointsRows}</tbody>
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
            <tbody>${containerRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
};

const renderContainerMatrix = () => {
  const headerCells = containerBreakpoints
    .map((breakpoint) => `<th class="text-center"><code>${breakpoint}</code></th>`)
    .join("");

  const rows = containerClassRows
    .map(({ className, startsAt }) => {
      const cells = containerBreakpoints
        .map((breakpoint) => `<td class="text-center">${getContainerWidthAtBreakpoint(startsAt, breakpoint)}</td>`)
        .join("");

      return `
        <tr>
          <th scope="row" class="text-nowrap"><code>${className}</code></th>
          ${cells}
        </tr>
      `;
    })
    .join("");

  return `
<div class="card">
  <div class="card-header"><strong>Table des containers</strong></div>
  <div class="card-body p-0">
    <div class="table-responsive">
      <table class="table table-sm table-bordered mb-0 align-middle">
        <thead>
          <tr>
            <th>Classe</th>
            ${headerCells}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  </div>
</div>
  `;
};

const renderFlexGrid = () => {
  const cells = Array.from({ length: 12 }, (_, index) => `
    <div class="col-6 col-md-3 col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${index + 1}/12</div>
    </div>
  `).join("");

  return `
<div class="container border rounded p-3">
  <p class="mb-2"><strong>Flex Grid</strong> — <code>.row</code> + <code>.col-*</code></p>
  <div class="row g-3">
    ${cells}
  </div>
</div>
  `;
};

const renderCssGrid = () => {
  const cells = Array.from({ length: 12 }, (_, index) => `
    <div class="g-col-6 g-col-md-3 g-col-lg-1">
      <div class="text-center p-2 bg-light border rounded fs-xs">${index + 1}/12</div>
    </div>
  `).join("");

  return `
<div class="container border rounded p-3">
  <p class="mb-2"><strong>CSS Grid</strong> — <code>.grid</code> + <code>.g-col-*</code></p>
  <div class="grid gap-3">
    ${cells}
  </div>
</div>
  `;
};

const render = () => {
  return `
<section class="vstack gap-4">
  ${renderValuesTables()}
  ${renderContainerMatrix()}
  ${renderFlexGrid()}
  ${renderCssGrid()}
</section>
  `;
};

export const Default = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Référence des maps de layout et démos de grilles/container.",
      },
    },
  },
};
