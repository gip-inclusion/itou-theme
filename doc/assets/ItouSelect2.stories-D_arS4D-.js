function i(o,r){return new Promise((l,t)=>{if(document.getElementById(r)){l();return}const e=document.createElement("script");e.id=r,e.src=o,e.addEventListener("load",()=>l(),{once:!0}),e.addEventListener("error",()=>t(new Error(`Failed to load: ${o}`)),{once:!0}),document.head.appendChild(e)})}function n(o=document){if(typeof window.$>"u"||typeof window.$.fn.select2>"u")return;o.querySelectorAll("[data-it-select2]").forEach(t=>{const e=window.$(t);e.hasClass("select2-hidden-accessible")&&e.select2("destroy");const s={theme:"bootstrap-5",width:e.data("width")?e.data("width"):e.hasClass("w-100")?"100%":"style",placeholder:e.data("placeholder")};e.data("allow-clear")&&(s.allowClear=!0),e.data("multiple")&&(s.closeOnSelect=!1),e.select2(s)});const l=window.$("#select2-ajax-story");l.length&&(l.hasClass("select2-hidden-accessible")&&l.select2("destroy"),l.select2({theme:"bootstrap-5",width:"style",placeholder:"Rechercher un dépôt GitHub",minimumInputLength:2,ajax:{url:"https://api.github.com/search/repositories",dataType:"json",delay:350,data(t){return{q:t.term,page:t.page}},processResults(t,e){return e.page=e.page||1,{results:t.items.map(s=>({id:s.id,text:s.full_name})),pagination:{more:e.page*10<t.total_count}}},cache:!0}}))}const u={title:"Libraries/Select2",decorators:[o=>{const r=`<div style="max-width: 1000px; margin: 0 auto;">${o()}</div>`;return setTimeout(()=>{i("https://code.jquery.com/jquery-3.7.1.min.js","itou-jquery-loader").then(()=>i("https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js","itou-select2-loader")).then(()=>n(document)).catch(console.error)},0),r}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Intégration de <a href="https://select2.org/" target="_blank" rel="noopener noreferrer" class="has-external-link">Select2 4.0.x</a> avec son <a href="https://apalfrey.github.io/select2-bootstrap-5-theme/" target="_blank" rel="noopener noreferrer" class="has-external-link">thème Bootstrap 5</a>.

Pour l'utiliser, inclure jQuery et Select2 via CDN :

<pre>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"<\/script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"<\/script>
</pre>

Les styles Select2 et son thème Bootstrap 5 sont pris en charge par le thème Itou.
`}}}},d=["Reactive","Solution","Conglomeration","Algorithm","Holistic"],a=d.map(o=>`<option>${o}</option>`).join(`
              `),p=()=>`
    <article class="row py-3 g-4">

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-single-story">Sélection simple</label>
          <select class="form-select" id="select2-single-story"
            data-it-select2 data-placeholder="Choisir une valeur">
            <option></option>
            ${a}
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
            ${a}
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-disabled-story">Sélection désactivée</label>
          <select class="form-select" id="select2-disabled-story"
            data-it-select2 data-placeholder="Choisir une valeur" disabled>
            <option></option>
            ${a}
          </select>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <label for="select2-multiple-story">Sélection multiple avec effacement</label>
          <select class="form-select" id="select2-multiple-story"
            data-it-select2 data-placeholder="Choisir des valeurs" data-allow-clear="true" data-multiple="true" multiple>
            ${a}
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
  `,c={render:p};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render
}`,...c.parameters?.docs?.source}}};const m=["Default"];export{c as Default,m as __namedExportsOrder,u as default};
