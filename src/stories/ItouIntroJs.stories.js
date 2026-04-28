function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load: ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

function initIntroJs(scope = document) {
  const btn = scope.querySelector("[data-it-introjs-launch]");
  if (!btn || btn.dataset.itouConfigured === "true") {
    return;
  }
  btn.dataset.itouConfigured = "true";

  btn.addEventListener("click", () => {
    introJs()
      .setOptions({
        disableInteraction: true,
        showProgress: false,
        showBullets: false,
        skipLabel: "",
        nextLabel: "Suivant",
        prevLabel: "Précédent",
        doneLabel: 'J’ai compris',
        steps: [
          {
            title: "Bonjour 👋",
            intro: "Découvrez votre nouvelle box de PASS IAE",
          },
          {
            element: scope.querySelector("#introjsPass01"),
            title: "Votre PASS est valide",
            intro: "Ici l'état actuel de votre PASS est indiqué",
          },
          {
            element: scope.querySelector("#introjsPass02"),
            title: "Valide jusqu'à cette date et ce titre sur 2 lignes",
            intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsa hic sunt voluptas magnam, magni corporis neque quis assumenda.",
          },
          {
            element: scope.querySelector("#introjsPass03"),
            intro: "Vous pouvez l'afficher en cliquant ici",
          },
        ],
      })
      .start();
  });
}

export default {
  title: "Libraries/Intro.js",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        loadScript(
          "https://cdn.jsdelivr.net/npm/intro.js@8.3.2/intro.min.js",
          "itou-introjs-loader"
        )
          .then(() => initIntroJs(document))
          .catch(console.error);
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
Intégration de <a href="https://introjs.com/docs" target="_blank" rel="noopener noreferrer" class="has-external-link">Intro.js 8.3.2</a> avec le thème Itou.

Pour l'utiliser, il suffit d'inclure le script via CDN :

<pre><script src="https://cdn.jsdelivr.net/npm/intro.js@8.3.2/intro.min.js"></script></pre>

Puis d'instancier <code>introJs()\`.setOptions\`({...})\`.start\`()</code>.

Les styles Intro.js sont pris en charge par le thème Itou.
`,
      },
    },
  },
};

const render = () => {
  return `
    <article class="row py-3">
      <div class="col-12">
        <button type="button" class="btn btn-primary mb-4" data-it-introjs-launch>
          Lancer le tour guidé
        </button>

        <div class="c-box c-box--pass bg-success-lightest border-success w-md-33">
          <div class="mb-3 mb-md-4">
            <span class="badge badge-base rounded-pill bg-success text-white" id="introjsPass01">
              <i class="ri-pass-valid-line" aria-hidden="true"></i>
              PASS IAE valide
            </span>
          </div>
          <ul class="list-data mb-3 mb-md-4">
            <li>
              <small>Numéro de PASS IAE</small>
              <strong><span>99999</span><span class="ms-1">99</span><span class="ms-1">99999</span></strong>
            </li>
            <li>
              <small>Date de début</small>
              <strong>05/07/2024</strong>
            </li>
            <li>
              <small>Date de fin prévisionnelle</small>
              <strong id="introjsPass02">04/07/2026</strong>
            </li>
            <li>
              <small>Durée de validité</small>
              <strong class="text-success">721 jours (environ 1 an, 2 mois, 12 jours)</strong>
            </li>
          </ul>
          <a href="#" class="btn btn-outline-primary btn-block btn-ico bg-white" id="introjsPass03">
            <i class="ri-eye-line fw-medium" aria-hidden="true"></i>
            <span>Afficher le PASS IAE</span>
          </a>
        </div>
      </div>
    </article>
  `;
};

export const Default = {
  render,
};
