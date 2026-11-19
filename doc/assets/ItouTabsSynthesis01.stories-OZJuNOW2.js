import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t){return new Promise((n,r)=>{if(document.getElementById(t)){n();return}let i=document.createElement(`script`);i.id=t,i.src=e,i.addEventListener(`load`,()=>n(),{once:!0}),i.addEventListener(`error`,()=>r(Error(`Failed to load: ${e}`)),{once:!0}),document.head.appendChild(i)})}function n(e=document){typeof tns<`u`&&e.querySelectorAll(`[data-it-sliding-tabs="true"]`).forEach(e=>{e.classList.contains(`tns-slider`)||e.dataset.itSlidingTabsReady===`true`||(tns({container:e,slideBy:`page`,autoWidth:!0,arrowKeys:!0,loop:!1,mouseDrag:!0,swipeAngle:!1,speed:300,nav:!1,controls:!0,startIndex:0}),e.dataset.itSlidingTabsReady=`true`)})}var r,i,a,o;function s(){return(s=e((()=>{r=()=>{let e=Math.random().toString(36).slice(2,10);return`
<section class="s-tabs-synthesis-01">
  <div class="s-tabs-synthesis-01__container container">
    <div class="s-tabs-synthesis-01__row row">
      <div class="s-tabs-synthesis-01__col col-12">
        <div class="s-tabs-synthesis-01__wrapper">
          <ul class="s-tabs-synthesis-01__nav nav nav-tabs" role="tablist" data-it-sliding-tabs="true">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="emploi-tab-${e}" data-bs-toggle="tab" href="#emploi-${e}" role="tab" aria-controls="emploi-${e}" aria-selected="true">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Emploi & PASS IAE</span>
                  <hr>
                  <strong class="mb-1">Contrat terminé</strong>
                  <span class="text-muted fs-sm lh-sm">Envoyée le 20/02/2026 par Sophie MARTIN · a mené au contrat terminé le 31/10/2026.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-between">
                  <span class="badge badge-sm rounded-pill bg-warning-lighter text-warning">Action attendue</span>
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="diagnostic-tab-${e}" data-bs-toggle="tab" href="#diagnostic-${e}" role="tab" aria-controls="diagnostic-${e}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Diagnostic, freins et orientation</span>
                  <hr>
                  <strong class="mb-1 d-flex align-items-center gap-1">Freins identifiés<span class="badge rounded-pill badge-sm bg-info-lighter text-info">3</span></strong>
                  <span class="text-muted fs-sm lh-sm">Mobilité · Logement · le 02/05/2026.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="accompagnement-tab-${e}" data-bs-toggle="tab" href="#accompagnement-${e}" role="tab" aria-controls="accompagnement-${e}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Accompagnement</span>
                  <hr>
                  <strong class="mb-1 d-flex align-items-center gap-1">Intervenants<span class="badge rounded-pill badge-sm bg-info-lighter text-info">2</span></strong>
                  <span class="text-muted fs-sm lh-sm">dont Sophie MARTIN · 04 72 10 20 30.</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="informations-tab-${e}" data-bs-toggle="tab" href="#informations-${e}" role="tab" aria-controls="informations-${e}" aria-selected="false" tabindex="-1">
                <div class="flex-grow-1">
                  <span class="h4 mb-0">Informations personnelles</span>
                  <hr>
                  <strong>06 12 34 56 78</strong>
                  <span class="text-muted fs-sm lh-sm text-break">karima.benali@exemple.fr</span>
                </div>
                <div class="mt-3 mt-md-4 d-flex justify-content-end">
                  <i class="ri-arrow-down-line ri-xl" aria-hidden="true"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="emploi-${e}" role="tabpanel" aria-labelledby="emploi-tab-${e}">
            <div class="c-box">
              <p>Contenu de l'onglet Emploi & PASS IAE...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="diagnostic-${e}" role="tabpanel" aria-labelledby="diagnostic-tab-${e}">
            <div class="c-box">
              <p>Contenu de l'onglet Diagnostic, freins et orientation...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="accompagnement-${e}" role="tabpanel" aria-labelledby="accompagnement-tab-${e}">
            <div class="c-box">
              <p>Contenu de l'onglet Accompagnement...</p>
            </div>
          </div>
          <div class="tab-pane fade" id="informations-${e}" role="tabpanel" aria-labelledby="informations-tab-${e}">
            <div class="c-box">
              <p>Contenu de l'onglet Informations personnelles...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`},i={title:`Sections/TabsSynthesis01`,decorators:[e=>{let r=`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t(`https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js`,`itou-tinyslider-loader`).then(()=>n(document)).catch(console.error)},0),r}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"\nLa `<section>` `.s-tabs-synthesis-01` présente une navigation par onglets dont chaque bouton d'onglet contient une **une synthèse** du contenu de son panneau.\n\nContrairement à `.s-tabs-01`, le libellé de l'onglet n'est plus seul : il est complété par un bloc de synthèse (information clé, état, badge d'alerte ou compteur) qui permet à l'utilisateur de comparer les onglets sans les ouvrir.\n\n### Comportement responsive (sliding tabs)\nQuand la largeur disponible ne permet plus d'afficher tous les onglets sur une ligne, la navigation bascule en mode slider horizontal grâce à **tiny-slider.js**.\nCe comportement est activé via l'attribut `data-it-sliding-tabs=\"true\"`.\n\n### Anatomie\n1. **Section** - `.s-tabs-synthesis-01`\n2. **Container** - `.s-tabs-synthesis-01__container`\n3. **Wrapper de navigation** - `.s-tabs-synthesis-01__wrapper`\n4. **Navigation** - `.s-tabs-synthesis-01__nav.nav.nav-tabs`\n5. **Lien d'onglet enrichi** - `.nav-item > .nav-link` contenant :\n   - le titre (`.h4`), puis un `<hr>`\n   - la synthèse (`<strong>` pour l'information clé, `.text-muted.fs-sm` pour le détail)\n   - un pied avec un badge optionnel et l'icône `.ri-arrow-down-line`\n6. **Contenus** - `.tab-content > .tab-pane`\n\n### Accessibilité\n- Associer chaque onglet à son panneau via `aria-controls` et `aria-labelledby`.\n- Conserver `role=\"tablist\"`, `role=\"tab\"` et `role=\"tabpanel\"`.\n- Marquer les icônes décoratives avec `aria-hidden=\"true\"`.\n- Les badges de synthèse ne doivent pas être le seul moyen de transmettre une information : le détail reste accessible dans le panneau.\n"}}}},a={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Version de base : chaque onglet affiche son titre, une synthèse de son contenu et un badge optionnel.`}}}},o=[`Default`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderTabsSynthesis01,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version de base : chaque onglet affiche son titre, une synthèse de son contenu et un badge optionnel."
      }
    }
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Default,o as __namedExportsOrder,i as default};