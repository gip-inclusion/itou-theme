import{n as e}from"./rolldown-runtime-DkW27tQK.js";function t(e,t){return new Promise((n,r)=>{if(document.getElementById(t)){n();return}let i=document.createElement(`script`);i.id=t,i.src=e,i.addEventListener(`load`,()=>n(),{once:!0}),i.addEventListener(`error`,()=>r(Error(`Failed to load: ${e}`)),{once:!0}),document.head.appendChild(i)})}function n(e=document){let t=e.querySelector(`.tnsDemo`);!t||typeof tns>`u`||(r&&=(r.destroy(),null),r=tns({container:t,items:1,autoplay:!1,autoplayHoverPause:!0,autoplayTimeout:3500,autoplayText:[`<i class="ri-play-fill" aria-hidden="true"></i>`,`<i class="ri-pause-fill" aria-hidden="true"></i>`],gutter:32,controlsText:[`précédent`,`suivant`],navPosition:`bottom`,nav:!0,controls:!1,responsive:{768:{items:2},992:{items:3},1200:{nav:!1,controls:!0}}}))}var r,i,a,o,s;function c(){return(c=e((()=>{r=null,i={title:`Libraries/Tiny Slider`,decorators:[e=>{let r=`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`;return setTimeout(()=>{t(`https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js`,`itou-tinyslider-loader`).then(()=>n(document)).catch(console.error)},0),r}],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Intégration de <a href="https://github.com/ganlanyuan/tiny-slider" target="_blank" rel="noopener noreferrer" class="has-external-link">Tiny Slider 2.9.4</a> avec le thème Itou.

Pour l'utiliser, inclure le script via CDN :

<pre><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js"><\/script></pre>

Puis instancier <code>tns({ container: '\`.mon-slider\`', ... })</code>.

Les styles Tiny Slider sont pris en charge par le thème Itou.
`}}}},a=()=>`
    <article class="row py-3">
      <div class="col-12">
        <div class="tnsDemo">
          <div>
            <figure>
              <img src="https://picsum.photos/seed/itou01/400/300" class="img-fluid img-fitcover" alt="">
              <figcaption class="mt-3">01 Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://picsum.photos/seed/itou02/400/300" class="img-fluid img-fitcover" alt="">
              <figcaption class="mt-3">02 Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://picsum.photos/seed/itou03/400/300" class="img-fluid img-fitcover" alt="">
              <figcaption class="mt-3">03 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente deserunt nobis minima praesentium quaerat dolor eius ipsam perferendis.</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img src="https://picsum.photos/seed/itou04/400/300" class="img-fluid img-fitcover" alt="">
              <figcaption class="mt-3">04 Lorem ipsum dolor sit amet consectetur adipisicing elit.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  `,o={render:a},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render
}`,...o.parameters?.docs?.source}}},s=[`Default`]})))()}c();export{o as Default,s as __namedExportsOrder,i as default};