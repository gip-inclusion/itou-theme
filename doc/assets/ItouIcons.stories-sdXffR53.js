const c={title:"Utilities/Icons",decorators:[n=>`<div style="max-width: 1200px; margin: 0 auto;">${n()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLes icônes "utilitaires" sont issues de la bibliothèque <a href="http://remixicon.com/" target="_blank" rel="noopener noreferrer" class="has-external-link">Remixicon</a>.\n\nElles sont à utiliser généralement en 16px (par défaut) et en 18px dans les boutons avec la classe `.ri-lg`.\n\n### Anatomie\n1. **Élément** - Balise `<i>` avec classe `.ri-{nom-icône}`\n2. **Poids** - Contrôlé par `.fw-normal`, `.fw-medium`, `.fw-bold` sur le parent ou l\'icône\n3. **Taille** - Contrôlée par les classes `.ri-xs`, `.ri-sm`, `.ri-lg`, `.ri-xl`, `.ri-xxl`, `.ri-2x`\n4. **Animation** (optionnel) - Classe `.ri-spinner` pour les icônes de rotation\n\n### Classes de taille\n| Classe | Taille | Équivalent |\n|--------|--------|-----------|\n| `.ri-xs` | 12px | extra-`<small>` |\n| `.ri-sm` | 14px | `<small>` |\n| (aucune) | 16px | default |\n| `.ri-lg` | 18px | large |\n| `.ri-xl` | 20px | extra-large |\n| `.ri-xxl` | 24px | 2x-large |\n| `.ri-2x` | 2rem (32px) | 2x |\n\n### Poids des icônes\nAppliquez le poids du parent ou directement sur l\'icône :\n- `.fw-normal` - Poids normal\n- `.fw-medium` - Poids moyen\n- `.fw-bold` - Poids gras (rarememt)\n\n### Animation\nUtilisez `.ri-spinner` pour animer une icône de rotation :\n`<i class="ri-restart-line ri-lg ri-spinner"></i>`\n\n### Accessibilité\n- Les icônes décoratives doivent avoir `aria-hidden="true"`\n- Les icônes fonctionnelles doivent avoir un libellé texte ou `aria-label`\n'}}}},a=()=>`
<div class="card mb-4">
  <div class="card-header pb-3"><strong>Icônes - Poids (fw-normal, fw-medium, fw-bold)</strong></div>
  <div class="card-body bg-light p-3">
    <div class="d-flex flex-column flex-lg-row fs-lg mb-3">
      <div class="p-3 fw-normal"><i class="ri-mail-send-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-search-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-arrow-right-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-arrow-right-up-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-map-pin-user-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-map-pin-2-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-file-list-2-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-refresh-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-arrow-up-s-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-normal"><i class="ri-arrow-down-s-fill" aria-hidden="true"></i></div>
    </div>
    <small class="text-muted">fw-normal</small>
    <div class="d-flex flex-column flex-lg-row fs-lg mb-3">
      <div class="p-3 fw-medium"><i class="ri-mail-send-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-search-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-arrow-right-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-arrow-right-up-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-map-pin-user-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-map-pin-2-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-file-list-2-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-refresh-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-arrow-up-s-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-medium"><i class="ri-arrow-down-s-fill" aria-hidden="true"></i></div>
    </div>
    <small class="text-muted">fw-medium</small>
    <div class="d-flex flex-column flex-lg-row fs-lg">
      <div class="p-3 fw-bold"><i class="ri-mail-send-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-search-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-arrow-right-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-arrow-right-up-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-map-pin-user-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-map-pin-2-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-file-list-2-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-refresh-line" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-arrow-up-s-fill" aria-hidden="true"></i></div>
      <div class="p-3 fw-bold"><i class="ri-arrow-down-s-fill" aria-hidden="true"></i></div>
    </div>
    <small class="text-muted">fw-bold</small>
  </div>
</div>`,l=()=>`
<div class="card mb-4">
  <div class="card-header pb-3"><strong>Tailles d'icônes</strong></div>
  <div class="card-body bg-light p-3">
    <div class="d-flex flex-column flex-lg-row">
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-xs" aria-hidden="true"></i>
        <code>.ri-xs (12px)</code>
      </div>
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-sm" aria-hidden="true"></i>
        <code>.ri-sm (14px)</code>
      </div>
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line" aria-hidden="true"></i>
        <span>(16px - défaut)</span>
      </div>
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-lg" aria-hidden="true"></i>
        <code>.ri-lg (18px)</code>
      </div>
    </div>
    <div class="d-flex flex-column flex-lg-row">
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-xl" aria-hidden="true"></i>
        <code>.ri-xl (20px)</code>
      </div>
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-xxl" aria-hidden="true"></i>
        <code>.ri-xxl (24px)</code>
      </div>
      <div class="p-3 d-flex align-items-center gap-2">
        <i class="ri-mail-send-line ri-2x" aria-hidden="true"></i>
        <code>.ri-2x (2rem soit 32px)</code>
      </div>
    </div>
  </div>
</div>`,d=()=>`
<div class="card">
  <div class="card-header pb-3"><strong>Animation Spinner</strong></div>
  <div class="card-body bg-light p-3">
    <div class="d-flex flex-column flex-lg-row">
      <div class="p-3">
        <p class="mb-2">Faire tourner une icône avec <code>.ri-spinner</code> :</p>
        <i class="ri-reset-right-line ri-lg ri-spinner" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div>`,t=()=>`
<section class="vstack gap-4">
  ${a()}
  ${l()}
  ${d()}
</section>`,i={render:t,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Présentation complète des icônes Remixicon : poids, tailles et animation spinner."}}}},e={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Icônes avec différents poids : normal, medium et bold."}}}},s={render:l,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Icônes avec différentes tailles disponibles, de xs à 2x."}}}},r={render:d,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Icônes animées avec la classe .ri-spinner pour les états de chargement ou d'attente."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: renderShowcase,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Présentation complète des icônes Remixicon : poids, tailles et animation spinner."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderWeights,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Icônes avec différents poids : normal, medium et bold."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderSizes,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Icônes avec différentes tailles disponibles, de xs à 2x."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderAnimation,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Icônes animées avec la classe .ri-spinner pour les états de chargement ou d'attente."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const o=["Default","Weights","Sizes","Spinner"];export{i as Default,s as Sizes,r as Spinner,e as Weights,o as __namedExportsOrder,c as default};
