// ToDo
// Ajouter has-ellipsis, les couleurs de texte et autres ?

export default {
  title: "Utilities/Text Utilities",
  decorators: [(Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Documentation et exemples des utilitaires de type texte, basée sur Bootstrap 5.3 et les classes custom du thème itou.

### Anatomie
1. **Utilitaire Bootstrap** — Appliquer une classe utilitaire pour l'alignement, la casse, le style ou le wrapping.
2. **Contrainte de conteneur** — Certains utilitaires nécessitent une largeur contrainte (ex: <code>.text-break</code>, <code>.text-nowrap</code>).
3. **Utilitaire custom itou** — Compléter avec les classes thème pour les besoins spécifiques (<code>.text-decoration-dashed</code> etc.).
4. **Accessibilité** — Conserver un contraste lisible et éviter la perte d'information en cas de troncature.

### Classes CSS
| Classe | Description |
|--------|-------------|
| <code>.text-start</code>, <code>.text-center</code>, <code>.text-end</code> | Alignement du texte |
| <code>.text-lowercase</code>, <code>.text-uppercase</code>, <code>.text-capitalize</code> | Transformation de casse |
| <code>.text-wrap</code>, <code>.text-nowrap</code>, <code>.text-break</code> | Gestion des retours à la ligne |
| <code>.fst-italic</code>, <code>.fst-normal</code> | Style italique/normal |
| <code>.text-decoration-underline</code>, <code>.text-decoration-line-through</code> | Décoration du texte |
| <code>.text-decoration-dashed</code> | Soulignement pointillé custom itou |
| <code>.text-muted</code>, <code>.text-disabled</code> | États visuels du texte |
| <code>.white-space-nowrap</code>, <code>.white-space-normal</code> | White-space custom itou |

**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/utilities/text/" target="_blank" rel="noopener noreferrer">Text utilities</a>
`,
      },
    },
  },
};

const renderTextUtilities = () => {
  return `
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
  `;
};

export const Default = {
  render: renderTextUtilities,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
      description: {
        story: "Utilitaires texte : alignement, casse, retour à la ligne, style et états (Bootstrap + custom itou).",
      },
    },
  },
};
