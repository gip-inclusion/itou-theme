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

function initSelect2(scope = document) {
  if (typeof window.$ === "undefined" || typeof window.$.fn.select2 === "undefined") {
    return;
  }

  const selects = scope.querySelectorAll("[data-it-select2]");
  selects.forEach((el) => {
    const $el = window.$(el);
    if ($el.hasClass("select2-hidden-accessible")) {
      $el.select2("destroy");
    }
    const options = {
      theme: "bootstrap-5",
      width: $el.data("width") ? $el.data("width") : $el.hasClass("w-100") ? "100%" : "style",
      placeholder: $el.data("placeholder"),
    };
    if ($el.data("allow-clear")) {
      options.allowClear = true;
    }
    if ($el.data("multiple")) {
      options.closeOnSelect = false;
    }
    $el.select2(options);
  });

  // AJAX example
  const $ajax = window.$("#select2-ajax-story");
  if ($ajax.length) {
    if ($ajax.hasClass("select2-hidden-accessible")) {
      $ajax.select2("destroy");
    }
    $ajax.select2({
      theme: "bootstrap-5",
      width: "style",
      placeholder: "Rechercher un dépôt GitHub",
      minimumInputLength: 2,
      ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: "json",
        delay: 350,
        data(params) {
          return { q: params.term, page: params.page };
        },
        processResults(data, params) {
          params.page = params.page || 1;
          return {
            results: data.items.map((item) => ({ id: item.id, text: item.full_name })),
            pagination: { more: params.page * 10 < data.total_count },
          };
        },
        cache: true,
      },
    });
  }
}

export default {
  title: "Libraries/Select2",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        loadScript(
          "https://code.jquery.com/jquery-3.7.1.min.js",
          "itou-jquery-loader"
        )
          .then(() =>
            loadScript(
              "https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js",
              "itou-select2-loader"
            )
          )
          .then(() => initSelect2(document))
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
Integration de <a href="https://select2.org/" target="_blank" rel="noopener noreferrer" class="has-external-link">Select2 4.0.x</a> avec son <a href="https://apalfrey.github.io/select2-bootstrap-5-theme/" target="_blank" rel="noopener noreferrer" class="has-external-link">thème Bootstrap 5</a>.

Pour l'utiliser, inclure jQuery et Select2 via CDN :

<pre>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"</script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"</script>
</pre>

Les styles Select2 et son thème Bootstrap 5 sont pris en charge par le theme Itou.
`,
      },
    },
  },
};

const OPTIONS = ["Reactive", "Solution", "Conglomeration", "Algorithm", "Holistic"];
const optionsHtml = OPTIONS.map((o) => `<option>${o}</option>`).join("\n              ");

const render = () => {
  return `
    <article class="row py-3 g-4">

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-single-story">Sélection simple</label>
          <select class="form-select" id="select2-single-story"
            data-it-select2 data-placeholder="Choisir une valeur">
            <option></option>
            ${optionsHtml}
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-optgroup-story">Sélection avec groupes</label>
          <select class="form-select" id="select2-optgroup-story"
            data-it-select2 data-placeholder="Choisir une valeur">
            <option></option>
            <optgroup label="Groupe 1">
              <option>Reactive</option>
              <option>Solution</option>
              <option>Conglomeration</option>
            </optgroup>
            <optgroup label="Groupe 2">
              <option>Algorithm</option>
              <option>Holistic</option>
              <option>Innovation</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-clear-story">Sélection simple avec effacement</label>
          <select class="form-select" id="select2-clear-story"
            data-it-select2 data-placeholder="Choisir une valeur" data-allow-clear="true">
            <option></option>
            ${optionsHtml}
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-disabled-story">Sélection désactivée</label>
          <select class="form-select" id="select2-disabled-story"
            data-it-select2 data-placeholder="Choisir une valeur" disabled>
            <option></option>
            ${optionsHtml}
          </select>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <label for="select2-multiple-story">Sélection multiple avec effacement</label>
          <select class="form-select" id="select2-multiple-story"
            data-it-select2 data-placeholder="Choisir des valeurs" data-allow-clear="true" data-multiple="true" multiple>
            ${optionsHtml}
          </select>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <label for="select2-ajax-story">Recherche AJAX (dépôts GitHub)</label>
          <select class="form-select" id="select2-ajax-story"></select>
        </div>
      </div>

    </article>
  `;
};

export const Default = {
  render,
};
