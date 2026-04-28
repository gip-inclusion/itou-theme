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

let tnsInstance = null;

function initTinySlider(scope = document) {
  const container = scope.querySelector(".tnsDemo");
  if (!container || typeof tns === "undefined") {
    return;
  }

  if (tnsInstance) {
    tnsInstance.destroy();
    tnsInstance = null;
  }

  tnsInstance = tns({
    container,
    items: 1,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 3500,
    autoplayText: [
      '<i class="ri-play-fill" aria-hidden="true"></i>',
      '<i class="ri-pause-fill" aria-hidden="true"></i>',
    ],
    gutter: 32,
    controlsText: ["précédent", "suivant"],
    navPosition: "bottom",
    nav: true,
    controls: false,
    responsive: {
      768: { items: 2 },
      992: { items: 3 },
      1200: { nav: false, controls: true },
    },
  });
}

export default {
  title: "Libraries/Tiny Slider",
  decorators: [
    (Story) => {
      const html = `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`;

      setTimeout(() => {
        loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js",
          "itou-tinyslider-loader"
        )
          .then(() => initTinySlider(document))
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
Intégration de <a href="https://github.com/ganlanyuan/tiny-slider" target="_blank" rel="noopener noreferrer" class="has-external-link">Tiny Slider 2.9.4</a> avec le thème Itou.

Pour l'utiliser, inclure le script via CDN :

<pre><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js"></script></pre>

Puis instancier <code>tns({ container: '\`.mon-slider\`', ... })</code>.

Les styles Tiny Slider sont pris en charge par le thème Itou.
`,
      },
    },
  },
};

const render = () => {
  return `
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
  `;
};

export const Default = {
  render,
};
