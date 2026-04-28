const r={title:"Components/Tooltips",decorators:[o=>{const a=`<div style="max-width: 1000px; margin: 0 auto;">${o()}</div>`;return setTimeout(()=>{[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(n=>new bootstrap.Tooltip(n))},0),a}],tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\nLe composant `.tooltip` est un composant d\'interface. Il affiche au survol ou au focus clavier un petit texte d\'information complémentaire. Le texte doit être court et descriptif, idéalement moins de 80 caractères.\n\n### Anatomie\n\nUne infobulle se compose des éléments suivants :\n\n- **Élément déclencheur** : bouton, lien ou icône portant les attributs `data-bs-toggle="tooltip"` et `data-bs-title="…"`.\n- **Bulle** : conteneur généré par Bootstrap (balise `div.tooltip`) positionné dynamiquement via Popper.js.\n\nLa position par défaut est `top`. Les valeurs possibles pour `data-bs-placement` sont : `top`, `right`, `bottom`, `left`.\n\n### Accessibilité\n\n- **Icône seule** : ajouter `role="button"`, `tabindex="0"` et un `aria-label` décrivant la **fonction** du déclencheur (ex. : "Afficher une information complémentaire"). Bootstrap lie automatiquement le contenu du tooltip via `aria-describedby`.\n- **Bouton `disabled`** : l\'attribut HTML natif `disabled` retire l\'élément de l\'ordre de tabulation. Pour rendre le tooltip accessible, envelopper le bouton dans un `<span tabindex="0">` portant les attributs `data-bs-toggle` et `data-bs-title`.\n- **Lien `.disabled`** : la classe Bootstrap n\'est que visuelle. Ajouter `aria-disabled="true"` pour informer les technologies d\'assistance.\n- **Contenu descriptif** : le texte de l\'infobulle doit être court, informatif et non redondant avec le texte visible de l\'élément déclencheur.\n- **Navigation clavier** : les tooltips se déclenchent au focus (`Tab`) et se ferment avec `Escape`.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/tooltips/" target="_blank" rel="noopener noreferrer" class="has-external-link">Tooltips</a>\n'}}}},i=()=>`
<div class="d-flex gap-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip sur un bouton">
    Tooltip sur un bouton
  </button>
  <span tabindex="0" class="btn btn-link disabled" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un lien disabled">
    Tooltip sur un "faux" bouton disabled
  </span>
</div>
<hr />
<div class="d-flex gap-3">
  <a href="#" class="btn btn-link" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un lien">Tooltip sur un lien</a>
  <span tabindex="0" class="btn btn-link disabled" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un lien disabled">
    Tooltip sur un "faux" lien disabled
  </span>
</div>
<hr />
<p>Tooltip sur un icône
  <i class="ri-information-line ri-xl text-info" aria-label="Afficher une information complémentaire" data-bs-toggle="tooltip" data-bs-title="Tooltip sur un icône" role="button" tabindex="0"></i>
</p>
`,t={render:i,parameters:{docs:{description:{story:"L'infobulle peut être affichée sur un bouton, un lien ou une icône (sur une icône il faut rendre le texte du tooltip accessible avec un aria-label et un tabindex)."}}}},s=()=>`
  <div class="d-flex gap-3">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip en haut">
      Tooltip en haut
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip à droite">
      Tooltip à droite
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip en bas">
      Tooltip en bas
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip à gauche">
      Tooltip à gauche
    </button>
  </div>
`,e={render:s,parameters:{docs:{description:{story:"L'infobulle peut être affichée dans plusieurs directions : haut, droite, bas et gauche."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  parameters: {
    docs: {
      description: {
        story: "L'infobulle peut être affichée sur un bouton, un lien ou une icône (sur une icône il faut rendre le texte du tooltip accessible avec un aria-label et un tabindex)."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderDirections,
  parameters: {
    docs: {
      description: {
        story: "L'infobulle peut être affichée dans plusieurs directions : haut, droite, bas et gauche."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const u=["Default","Directions"];export{t as Default,e as Directions,u as __namedExportsOrder,r as default};
