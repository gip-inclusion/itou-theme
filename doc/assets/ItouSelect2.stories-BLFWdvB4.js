import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t){return new Promise((n,r)=>{if(document.getElementById(t)){n();return}let i=document.createElement(`script`);i.id=t,i.src=e,i.addEventListener(`load`,()=>n(),{once:!0}),i.addEventListener(`error`,()=>r(Error(`Failed to load: ${e}`)),{once:!0}),document.head.appendChild(i)})}function n(e=document){if(window.$===void 0||window.$.fn.select2===void 0)return;e.querySelectorAll(`[data-it-select2]`).forEach(e=>{let t=window.$(e);t.hasClass(`select2-hidden-accessible`)&&t.select2(`destroy`);let n={theme:`bootstrap-5`,width:t.data(`width`)?t.data(`width`):t.hasClass(`w-100`)?`100%`:`style`,placeholder:t.data(`placeholder`)};t.data(`allow-clear`)&&(n.allowClear=!0),t.data(`multiple`)&&(n.closeOnSelect=!1),t.select2(n)});let t=window.$(`#select2-ajax-story`);t.length&&(t.hasClass(`select2-hidden-accessible`)&&t.select2(`destroy`),t.select2({theme:`bootstrap-5`,width:`style`,placeholder:`Rechercher un dépôt GitHub`,minimumInputLength:2,ajax:{url:`https://api.github.com/search/repositories`,dataType:`json`,delay:350,data(e){return{q:e.term,page:e.page}},processResults(e,t){return t.page=t.page||1,{results:e.items.map(e=>({id:e.id,text:e.full_name})),pagination:{more:t.page*10<e.total_count}}},cache:!0}}))}var r,i,a,o,s;function c(){return(c=e((()=>{r={title:`Libraries/Select2`,decorators:[e=>{let r=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t(`https://code.jquery.com/jquery-3.7.1.min.js`,`itou-jquery-loader`).then(()=>t(`https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js`,`itou-select2-loader`)).then(()=>n(document)).catch(console.error)},0),r}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Intégration de <a href="https://select2.org/" target="_blank" rel="noopener noreferrer" class="has-external-link">Select2 4.0.x</a> avec son <a href="https://apalfrey.github.io/select2-bootstrap-5-theme/" target="_blank" rel="noopener noreferrer" class="has-external-link">thème Bootstrap 5</a>.

Pour l'utiliser, inclure jQuery et Select2 via CDN :

<pre>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"<\/script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"<\/script>
</pre>

Les styles Select2 et son thème Bootstrap 5 sont pris en charge par le thème Itou.
`}}}},i=[`Reactive`,`Solution`,`Conglomeration`,`Algorithm`,`Holistic`].map(e=>`<option>${e}</option>`).join(`
              `),a=()=>`
    <article class="row py-3 g-4">

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-single-story">Sélection simple</label>
          <select class="form-select" id="select2-single-story"
            data-it-select2 data-placeholder="Choisir une valeur">
            <option></option>
            ${i}
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
            ${i}
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="form-group">
          <label for="select2-disabled-story">Sélection désactivée</label>
          <select class="form-select" id="select2-disabled-story"
            data-it-select2 data-placeholder="Choisir une valeur" disabled>
            <option></option>
            ${i}
          </select>
        </div>
      </div>

      <div class="col-12">
        <div class="form-group">
          <label for="select2-multiple-story">Sélection multiple avec effacement</label>
          <select class="form-select" id="select2-multiple-story"
            data-it-select2 data-placeholder="Choisir des valeurs" data-allow-clear="true" data-multiple="true" multiple>
            ${i}
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
  `,o={render:a},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render
}`,...o.parameters?.docs?.source}}},s=[`Default`]})))()}c();export{o as Default,s as __namedExportsOrder,r as default};