import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c;function l(){return(l=e((()=>{t={title:`Components/Title`,decorators:[e=>`<div style="max-width: 1200px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"\nLe composant `.c-title` structure la zone de titre principale d'une page.\n\nIl est concu pour être utilise dans `.s-title-02`.\n\n### Contraintes du composant\n1. `.c-title__main` est obligatoire et doit contenir un `<h1>` (éventuellement badge et paragraphe de contexte).\n2. `.c-title__cta` est optionnel et devrait contenir 1 a 2 actions.\n3. `.c-title__secondary` est optionnel et devrait contenir des `<h2>/<h3>` et/ou paragraphes.\n\n### Anatomie\n1. **Bloc principal** - `.c-title__main`\n2. **Bloc actions** (optionnel) - `.c-title__cta`\n3. **Bloc secondaire** (optionnel) - `.c-title__secondary`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.c-title` | Conteneur global |\n| `.c-title__main` | Titre principal (obligatoire) |\n| `.c-title__cta` | Zone d'actions (optionnelle) |\n| `.c-title__secondary` | Zone de contexte/intro (optionnelle) |\n\n### Accessibilité\n- Respecter la hiérarchie des titres (`h1` puis `h2`/`h3`).\n- Donner un `aria-label` explicite a `.c-title__cta` quand des actions sont presentes.\n- Marquer les icônes decoratives avec `aria-hidden=\"true\"`.\n"}}},argTypes:{hasBadge:{control:`boolean`,description:`Affiche un badge de statut dans le titre principal.`},hasSubtitle:{control:`boolean`,description:`Affiche un paragraphe de contexte sous le H1 dans c-title__main.`},hasCta:{control:`boolean`,description:`Affiche la zone c-title__cta.`},ctaCount:{control:{type:`select`},options:[1,2],description:`Nombre d'actions affichees dans c-title__cta.`,if:{arg:`hasCta`,truthy:!0}},hasSecondary:{control:`boolean`,description:`Affiche la zone c-title__secondary.`}}},n=({hasBadge:e,hasSubtitle:t,hasCta:n,ctaCount:r,hasSecondary:i})=>`
    <div class="c-title">
      <div class="c-title__main">
        <h1>
          Candidature de Gustave de la Loiseau des grosses motos
          ${e?`<span class="badge rounded-pill badge-base bg-success">Candidature acceptee</span>`:``}
        </h1>
        ${t?`<p>ETTI - SIRET 500 109 616 00027</p>`:``}
      </div>
      ${n?`
      <div class="c-title__cta" role="group" aria-label="Actions sur les groupes de suivi">
        ${r===2?`<a href="#" class="btn btn-lg btn-outline-primary btn-ico">
          <i class="ri-user-unfollow-line fw-medium" aria-hidden="true"></i>
          <span>Action secondaire</span>
        </a>`:``}
        <a href="#" class="btn btn-lg btn-primary btn-ico">
          <i class="ri-bear-smile-line fw-medium" aria-hidden="true"></i>
          <span>Action principale</span>
        </a>
      </div>
    `:``}
      ${i?`
      <div class="c-title__secondary">
        <h2>Un exemple avec des niveaux de titres</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
      </div>
    `:``}
    </div>
  `,r=()=>`
  <div class="c-title">
    <div class="c-title__main">
      <h1>Titre de page</h1>
    </div>
    <div class="c-title__secondary">
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    </div>
  </div>
`,i=()=>`
  <div class="c-title">
    <div class="c-title__main">
      <h1 class="m-0">Titre de page</h1>
    </div>
    <div class="c-title__cta" role="group" aria-label="Actions sur les groupes de suivi">
      <a href="#" class="btn btn-lg btn-primary btn-ico">
        <i class="ri-bear-smile-line fw-medium" aria-hidden="true"></i>
        <span>Action principale</span>
      </a>
    </div>
    <div class="c-title__secondary">
      <h2>Un exemple avec des niveaux de titres</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia, maiores atque provident soluta nam tenetur cupiditate corrupti quisquam eveniet hic iusto necessitatibus aperiam, rerum ex, quia molestias doloribus officiis.</p>
    </div>
  </div>
`,a={render:n,args:{hasBadge:!1,hasSubtitle:!1,hasCta:!1,ctaCount:1,hasSecondary:!0},parameters:{docs:{description:{story:"Version paramétrable du composant `c-title` (badge, paragraphe de contexte, CTA, contenu secondaire)."}}}},o={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante simple avec `c-title__main` + `c-title__secondary`, sans actions."}}}},s={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante avec une action principale dans `c-title__cta`, conforme aux exemples de `title-02`."}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    hasBadge: false,
    hasSubtitle: false,
    hasCta: false,
    ctaCount: 1,
    hasSecondary: true
  },
  parameters: {
    docs: {
      description: {
        story: "Version paramétrable du composant \`c-title\` (badge, paragraphe de contexte, CTA, contenu secondaire)."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderSimple,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante simple avec \`c-title__main\` + \`c-title__secondary\`, sans actions."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderWithCta,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante avec une action principale dans \`c-title__cta\`, conforme aux exemples de \`title-02\`."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Simple`,`WitheCta`]})))()}l();export{a as Default,o as Simple,s as WitheCta,c as __namedExportsOrder,t as default};