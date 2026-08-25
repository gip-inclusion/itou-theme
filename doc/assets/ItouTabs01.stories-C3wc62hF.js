import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t){return new Promise((n,r)=>{if(document.getElementById(t)){n();return}let i=document.createElement(`script`);i.id=t,i.src=e,i.addEventListener(`load`,()=>n(),{once:!0}),i.addEventListener(`error`,()=>r(Error(`Failed to load: ${e}`)),{once:!0}),document.head.appendChild(i)})}function n(e=document){typeof tns>`u`||e.querySelectorAll(`[data-it-sliding-tabs="true"]`).forEach(e=>{if(e.classList.contains(`tns-slider`)||e.dataset.itSlidingTabsReady===`true`)return;let t=Number.parseInt(e.getAttribute(`data-it-sliding-tabs-startindex`),10)||0;tns({container:e,slideBy:`page`,autoWidth:!0,arrowKeys:!0,loop:!1,mouseDrag:!0,swipeAngle:!1,speed:300,nav:!1,controls:!0,startIndex:t}),e.dataset.itSlidingTabsReady=`true`})}var r,i,a,o;function s(){return(s=e((()=>{r=()=>{let e=Math.random().toString(36).slice(2,10);return`
<section class="s-tabs-01">
  <div class="s-tabs-01__container container">
    <div class="s-tabs-01__row row">
      <div class="s-tabs-01__col col-12">
        <ul class="s-tabs-01__nav nav nav-tabs" role="tablist" data-it-sliding-tabs="true">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab-${e}" data-bs-toggle="tab" href="#home-${e}" role="tab" aria-controls="home-${e}" aria-selected="true">Home</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab-${e}" data-bs-toggle="tab" href="#profile-${e}" role="tab" aria-controls="profile-${e}" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="contact-tab-${e}" data-bs-toggle="tab" href="#contact-${e}" role="tab" aria-controls="contact-${e}" aria-selected="false">Contact</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-01-tab-${e}" data-bs-toggle="tab" href="#exemple-01-${e}" role="tab" aria-controls="exemple-01-${e}" aria-selected="false">Exemple tab 01</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-02-tab-${e}" data-bs-toggle="tab" href="#exemple-02-${e}" role="tab" aria-controls="exemple-02-${e}" aria-selected="false">
              <span>Exemple tab 02</span>
              <span class="badge badge-sm rounded-pill ms-2">1279</span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="exemple-03-tab-${e}" data-bs-toggle="tab" href="#exemple-03-${e}" role="tab" aria-controls="exemple-03-${e}" aria-selected="false">
              <i class="ri-briefcase-4-line fw-normal me-1" aria-hidden="true"></i>
              <span>Exemple tab 03</span>
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="home-${e}" role="tabpanel" aria-labelledby="home-tab-${e}">
            <p>home-tab content ...</p>
          </div>
          <div class="tab-pane fade" id="profile-${e}" role="tabpanel" aria-labelledby="profile-tab-${e}">
            <p>profile-tab content...</p>
          </div>
          <div class="tab-pane fade" id="contact-${e}" role="tabpanel" aria-labelledby="contact-tab-${e}">
            <p>contact-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-01-${e}" role="tabpanel" aria-labelledby="exemple-01-tab-${e}">
            <p>exemple-01-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-02-${e}" role="tabpanel" aria-labelledby="exemple-02-tab-${e}">
            <p>exemple-02-tab content...</p>
          </div>
          <div class="tab-pane fade" id="exemple-03-${e}" role="tabpanel" aria-labelledby="exemple-03-tab-${e}">
            <p>exemple-03-tab content...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`},i={title:`Sections/Tabs01`,decorators:[e=>{let r=`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t(`https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js`,`itou-tinyslider-loader`).then(()=>n(document)).catch(console.error)},0),r}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nLa `<section>` `.s-tabs-01` structure une navigation par onglets et le contenu associe dans des panneaux `.tab-pane`.\n\n### Comportement responsive (sliding tabs)\nQuand la largeur disponible ne permet plus d\'afficher tous les onglets sur une ligne, la navigation bascule en mode slider horizontal grace a **tiny-slider.js**.\nCe comportement est active sur la liste d\'onglets via l\'attribut `data-it-sliding-tabs="true"`.\nL\'initialisation reprend la configuration de la maquette HTML (`autoWidth`, `slideBy: "page"`, `controls: true`, etc.) pour conserver la meme experience mobile/tablette.\n\n### Variations\n1. **Default** : version standard avec onglets, badge et icône.\n\n### Anatomie\n1. **Section** - `.s-tabs-01`\n2. **Container** - `.s-tabs-01__container`\n3. **Navigation** - `.s-tabs-01__nav.nav.nav-tabs`\n4. **Elements d\'onglets** - `.nav-item > .nav-link`\n5. **Contenus** - `.tab-content > .tab-pane`\n\n### Accessibilité\n- Associer chaque onglet a son panneau via `aria-controls` et `aria-labelledby`.\n- Conserver `role="tablist"`, `role="tab"` et `role="tabpanel"`.\n- Marquer les icônes decoratives avec `aria-hidden="true"`.\n'}}}},a={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:`Version de base.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: renderTabs01,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version de base."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o=[`Default`]})))()}s();export{a as Default,o as __namedExportsOrder,i as default};