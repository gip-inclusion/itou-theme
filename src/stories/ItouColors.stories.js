export default {
  title: "Utilities/Colors",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Documentation et exemples des couleurs du thème itou, basées sur la map <code>$theme-colors</code>.

### Anatomie
1. **Nom de couleur** — Nom de la clé dans <code>$theme-colors</code>.
2. **Aperçu visuel** — Carte avec la couleur en arrière-plan.
3. **Valeur hexa** — Code couleur affiché dans la carte.

### Source
Les couleurs affichées correspondent aux valeurs déclarées dans <code>src/stylesheets/base/_variables.scss</code>.
`,
      },
    },
  },
};

const themeColors = [
  { name: "primary", hex: "#000638" },
  { name: "secondary", hex: "#333860" },
  { name: "tertiary", hex: "#000091" },
  { name: "light", hex: "#f8f8f8" },
  { name: "button", hex: "#000091" },
  { name: "button-light", hex: "#2323ff" },
  { name: "button-lighter", hex: "#daedff" },
  { name: "button-lightest", hex: "#edf6ff" },
  { name: "success", hex: "#18753c" },
  { name: "success-light", hex: "#ceefdb" },
  { name: "success-lighter", hex: "#e0f7e9" },
  { name: "success-lightest", hex: "#f3fff8" },
  { name: "warning", hex: "#b34000" },
  { name: "warning-light", hex: "#ffe7c0" },
  { name: "warning-lighter", hex: "#fff3df" },
  { name: "warning-lightest", hex: "#fffbf3" },
  { name: "danger", hex: "#ce0500" },
  { name: "danger-light", hex: "#ffcfcd" },
  { name: "danger-lighter", hex: "#ffe1e0" },
  { name: "danger-lightest", hex: "#fff3f2" },
  { name: "info", hex: "#0063cb" },
  { name: "info-light", hex: "#dde4ff" },
  { name: "info-lighter", hex: "#e8edff" },
  { name: "info-lightest", hex: "#f6f8ff" },
  { name: "important", hex: "#6c38d9" },
  { name: "important-light", hex: "#cfbff5" },
  { name: "important-lighter", hex: "#e9dffc" },
  { name: "important-lightest", hex: "#f4f2ff" },
  { name: "accent-01", hex: "#f42ad4" },
  { name: "accent-01-light", hex: "#fdcdf6" },
  { name: "accent-01-lighter", hex: "#fedff9" },
  { name: "accent-01-lightest", hex: "#fff1fd" },
  { name: "accent-02", hex: "#8adcff" },
  { name: "accent-02-light", hex: "#d1f1ff" },
  { name: "accent-02-lighter", hex: "#e2f6ff" },
  { name: "accent-02-lightest", hex: "#ebf9ff" },
  { name: "accent-03", hex: "#ffbe18" },
  { name: "accent-03-light", hex: "#ffe8ad" },
  { name: "accent-03-lighter", hex: "#fff2cf" },
  { name: "accent-03-lightest", hex: "#fffdf9" },
    { name: "nuance-01", hex: "#1a1f4c" },
  { name: "nuance-02", hex: "#333860" },
  { name: "nuance-03", hex: "#4d5174" },
  { name: "nuance-04", hex: "#727492" },
  { name: "nuance-05", hex: "#999baf" },
  { name: "nuance-06", hex: "#b3b4c3" },
  { name: "nuance-07", hex: "#cccdd7" },
  { name: "nuance-08", hex: "#e6e6eb" },
  { name: "nuance-09", hex: "#f2f3f5" },
  { name: "nuance-10", hex: "#f8f8f8" },
  { name: "disabled-color", hex: "#b3b4c3" },
  { name: "disabled-color-light", hex: "#f2f3f5" },
  { name: "muted-color", hex: "#727492" },
];

const getTextClass = (hex) => {
  const cleanedHex = hex.replace("#", "");
  const normalizedHex = cleanedHex.length === 3
    ? cleanedHex.split("").map((char) => `${char}${char}`).join("")
    : cleanedHex;

  const red = parseInt(normalizedHex.substring(0, 2), 16);
  const green = parseInt(normalizedHex.substring(2, 4), 16);
  const blue = parseInt(normalizedHex.substring(4, 6), 16);

  const luminance = (0.299 * red) + (0.587 * green) + (0.114 * blue);
  return luminance > 165 ? "text-dark" : "text-white";
};

const renderColors = () => {
  const cells = themeColors
    .map(({ name, hex }) => {
      const textClass = getTextClass(hex);
      const borderStyle = hex.toLowerCase() === "#ffffff" ? "border: 1px solid #e6e6eb;" : "";

      return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="rounded p-3 h-100 d-flex flex-column justify-content-between ${textClass}" style="background-color: ${hex}; min-height: 120px; ${borderStyle}">
            <div class="fw-bold mb-2">${name}</div>
            <div class="fw-medium">${hex.toUpperCase()}</div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
<section class="vstack gap-3">
  <p class="mb-0">Grille des couleurs issues de la map <code>$theme-colors</code>.</p>
  <div class="row g-3">
    ${cells}
  </div>
</section>
  `;
};

export const Default = {
  render: renderColors,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Aperçu visuel de toutes les couleurs du thème avec leur valeur hexa.",
      },
    },
  },
};
