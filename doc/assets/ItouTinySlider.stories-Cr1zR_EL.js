function a(i,e){return new Promise((o,n)=>{if(document.getElementById(e)){o();return}const t=document.createElement("script");t.id=e,t.src=i,t.addEventListener("load",()=>o(),{once:!0}),t.addEventListener("error",()=>n(new Error(`Failed to load: ${i}`)),{once:!0}),document.head.appendChild(t)})}let s=null;function c(i=document){const e=i.querySelector(".tnsDemo");!e||typeof tns>"u"||(s&&(s.destroy(),s=null),s=tns({container:e,items:1,autoplay:!1,autoplayHoverPause:!0,autoplayTimeout:3500,autoplayText:['<i class="ri-play-fill" aria-hidden="true"></i>','<i class="ri-pause-fill" aria-hidden="true"></i>'],gutter:32,controlsText:["précédent","suivant"],navPosition:"bottom",nav:!0,controls:!1,responsive:{768:{items:2},992:{items:3},1200:{nav:!1,controls:!0}}}))}const d={title:"Libraries/Tiny Slider",decorators:[i=>{const e=`<div style="max-width: 1000px; margin: 0 auto;">${i()}</div>`;return setTimeout(()=>{a("https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js","itou-tinyslider-loader").then(()=>c(document)).catch(console.error)},0),e}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
Intégration de <a href="https://github.com/ganlanyuan/tiny-slider" target="_blank" rel="noopener noreferrer" class="has-external-link">Tiny Slider 2.9.4</a> avec le thème Itou.

Pour l'utiliser, inclure le script via CDN :

<pre><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js"><\/script></pre>

Puis instancier <code>tns({ container: '\`.mon-slider\`', ... })</code>.

Les styles Tiny Slider sont pris en charge par le thème Itou.
`}}}},l=()=>`
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
  `,r={render:l};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render
}`,...r.parameters?.docs?.source}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,d as default};
