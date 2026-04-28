const DUET_MODULE_SRC = "https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js";
const DUET_NOMODULE_SRC = "https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js";
const DATE_FORMAT = /^(\d{2})\/(\d{2})\/(\d{4})$/;

function ensureDuetDatePickerLoaded() {
  if (customElements.get("duet-date-picker")) {
    return Promise.resolve();
  }

  if (window.__itouDuetDatePickerLoaderPromise) {
    return window.__itouDuetDatePickerLoaderPromise;
  }

  window.__itouDuetDatePickerLoaderPromise = new Promise((resolve, reject) => {
    const existingModuleScript = document.querySelector('script[data-itou-duet-loader="module"]');

    if (existingModuleScript) {
      existingModuleScript.addEventListener("load", () => resolve(), { once: true });
      existingModuleScript.addEventListener("error", () => reject(new Error("Duet Date Picker module script failed to load")), { once: true });
      return;
    }

    const moduleScript = document.createElement("script");
    moduleScript.type = "module";
    moduleScript.src = DUET_MODULE_SRC;
    moduleScript.dataset.itouDuetLoader = "module";

    const noModuleScript = document.createElement("script");
    noModuleScript.noModule = true;
    noModuleScript.src = DUET_NOMODULE_SRC;
    noModuleScript.dataset.itouDuetLoader = "nomodule";

    moduleScript.addEventListener("load", () => resolve(), { once: true });
    moduleScript.addEventListener("error", () => reject(new Error("Duet Date Picker module script failed to load")), { once: true });

    document.head.appendChild(moduleScript);
    document.head.appendChild(noModuleScript);
  })
    .then(() => customElements.whenDefined("duet-date-picker"))
    .catch((error) => {
      delete window.__itouDuetDatePickerLoaderPromise;
      throw error;
    });

  return window.__itouDuetDatePickerLoaderPromise;
}

function configureDatePickerInstance(pickerInstance) {
  if (pickerInstance.dataset.itouConfigured === "true") {
    return;
  }

  // Keep toggle background consistent across Duet render modes.
  pickerInstance.style.setProperty("--duet-color-button", "var(--bs-white)");

  pickerInstance.dateAdapter = {
    parse(value = "", createDate) {
      const matches = value.match(DATE_FORMAT);
      if (matches) {
        return createDate(matches[3], matches[2], matches[1]);
      }
      return undefined;
    },

    format(date) {
      const day = (`0${date.getDate()}`).slice(-2);
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      return `${day}/${month}/${date.getFullYear()}`;
    },
  };

  pickerInstance.addEventListener("keyup", (event) => {
    if (event.key === "Backspace") {
      return;
    }

    const input = event.target;
    if (!input || typeof input.value !== "string") {
      return;
    }

    const numChars = input.value.length;
    if (numChars === 2 || numChars === 5) {
      input.value = `${input.value}/`;
    }
  });

  pickerInstance.localization = {
    buttonLabel: "Choisir une date",
    placeholder: "JJ/MM/AAAA",
    selectedDateMessage: "La date selectionnee est",
    prevMonthLabel: "Mois precedent",
    nextMonthLabel: "Mois suivant",
    monthSelectLabel: "Mois",
    yearSelectLabel: "Annee",
    closeLabel: "Fermer la fenêtre",
    calendarHeading: "Choisir une date",
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    monthNames: [
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Aout",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre",
    ],
    monthNamesShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    locale: "fr-FR",
  };

  pickerInstance.dataset.itouConfigured = "true";
}

function initializeDuetDatePickers(scope = document) {
  const pickers = scope.querySelectorAll("duet-date-picker");
  pickers.forEach((pickerInstance) => configureDatePickerInstance(pickerInstance));
}

export default {
  title: "Libraries/Duet Date Picker",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; height: 500px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        ensureDuetDatePickerLoaded()
          .then(() => initializeDuetDatePickers(document))
          .catch((error) => {
            // Keep Storybook interactive if CDN loading fails.
            console.error(error);
          });
      }, 0);

      return html;
    },
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Intégration de <a href="https://github.com/duetds/date-picker" target="_blank" rel="noopener noreferrer" class="has-external-link">Duet Date Picker 1.4.0</a> avec le thème Itou.

Les styles Duet ne sont pas charges car le thème Itou couvre déjà le rendu visuel.
`,
      },
    },
  },
};

const render = () => {
  return `
    <article class="row py-3" id="ddp-story">
      <div class="col-12">
        <div class="form-group form-group-input-w-md-50">
          <label for="duet-date-picker-story">Choisir une date</label>
          <duet-date-picker identifier="duet-date-picker-story" data-it-duet="true"></duet-date-picker>
        </div>
      </div>
    </article>
  `;
};

export const Default = {
  render,
};
