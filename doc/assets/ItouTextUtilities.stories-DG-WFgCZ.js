const a={title:"Utilities/Text Utilities",decorators:[t=>`<div style="max-width: 1000px; margin: 0 auto;">${t()}</div>`],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nDocumentation et exemples des utilitaires de type texte, basée sur Bootstrap 5.3 et les classes custom du thème itou.\n\n### Anatomie\n1. **Utilitaire Bootstrap** — Appliquer une classe utilitaire pour l\'alignement, la casse, le style ou le wrapping.\n2. **Contrainte de conteneur** — Certains utilitaires nécessitent une largeur contrainte (ex: `.text-break`, `.text-nowrap`).\n3. **Utilitaire custom itou** — Compléter avec les classes thème pour les besoins spécifiques (`.text-decoration-dashed` etc.).\n4. **Accessibilité** — Conserver un contraste lisible et éviter la perte d\'information en cas de troncature.\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.text-start`, `.text-center`, `.text-end` | Alignement du texte |\n| `.text-lowercase`, `.text-uppercase`, `.text-capitalize` | Transformation de casse |\n| `.text-wrap`, `.text-nowrap`, `.text-break` | Gestion des retours à la ligne |\n| `.fst-italic`, `.fst-normal` | Style italique/normal |\n| `.text-decoration-underline`, `.text-decoration-line-through` | Décoration du texte |\n| `.text-decoration-dashed` | Soulignement pointillé custom itou |\n| `.text-muted`, `.text-disabled` | États visuels du texte |\n| `.white-space-nowrap`, `.white-space-normal` | White-space custom itou |\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/utilities/text/" target="_blank" rel="noopener noreferrer" class="has-external-link">Text utilities</a>\n'}}}},s=()=>`
<section class="vstack gap-3">
  <p class="mb-0 text-start"><code>.text-start</code> — alignement à gauche</p>
  <p class="mb-0 text-center"><code>.text-center</code> — alignement centré</p>
  <p class="mb-0 text-end"><code>.text-end</code> — alignement à droite</p>
  <p class="mb-0 text-md-end"><code>.text-md-end</code> — alignement responsive (dès md)</p>

  <hr>

  <p class="mb-0 text-lowercase"><code>.text-lowercase</code> — TEXTE EN MINUSCULES</p>
  <p class="mb-0 text-uppercase"><code>.text-uppercase</code> — texte en majuscules</p>
  <p class="mb-0 text-capitalize"><code>.text-capitalize</code> — texte capitalisé</p>

  <hr>

  <p class="mb-0 fst-italic"><code>.fst-italic</code> — style italique</p>
  <p class="mb-0 fst-normal"><code>.fst-normal</code> — style normal</p>
  <p class="mb-0 text-decoration-underline"><code>.text-decoration-underline</code> — soulignement</p>
  <p class="mb-0 text-decoration-line-through"><code>.text-decoration-line-through</code> — barré</p>

  <hr>

  <p class="mb-0 text-decoration-dashed"><code>.text-decoration-dashed</code> — utilitaire custom itou</p>
  <p class="mb-0 text-muted"><code>.text-muted</code> — utilitaire de couleur atténuée</p>
  <p class="mb-0 text-disabled"><code>.text-disabled</code> — utilitaire d'état désactivé</p>
  <p class="mb-0 white-space-nowrap"><code>.white-space-nowrap</code> — utilitaire custom itou (nowrap)</p>
  <p class="mb-0 white-space-normal"><code>.white-space-normal</code> — utilitaire custom itou (normal)</p>

  <hr>

  <p class="mb-0 text-primary"><code>.text-primary</code> — La couleur par défaut</p>
  <p class="mb-0 text-secondary"><code>.text-secondary</code> — La couleur secondaire de texte</p>
  <p class="mb-0 text-info"><code>.text-info</code> — La couleur pour texte informatif</p>
  <p class="mb-0 text-important"><code>.text-important</code> — La couleur pour texte important</p>
  <p class="mb-0 text-success"><code>.text-success</code> — La couleur pour texte success</p>
  <p class="mb-0 text-warning"><code>.text-warning</code> — La couleur pour texte warning</p>
  <p class="mb-0 text-danger"><code>.text-danger</code> — La couleur pour texte danger</p>
  <p class="mb-0 text-muted"><code>.text-muted</code> — La couleur pour texte muted</p>
  <p class="mb-0 text-disabled"><code>.text-disabled</code> — La couleur pour texte disabled</p>
</section>
  `,e={render:s,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Utilitaires texte : alignement, casse, retour à la ligne, style et états (Bootstrap + custom itou)."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderTextUtilities,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Utilitaires texte : alignement, casse, retour à la ligne, style et états (Bootstrap + custom itou)."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const o=["Default"];export{e as Default,o as __namedExportsOrder,a as default};
