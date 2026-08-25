import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t={title:`Components/Tabs`,decorators:[e=>`<div style="max-width: 1000px; margin: 0 auto;">${e()}</div>`],tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'\nLe composant `.nav-tabs` permet d\'afficher des onglets de navigation et, si besoin, de piloter des panneaux de contenu via le plugin JavaScript Bootstrap.\n\n### Anatomie\n1. **Conteneur d\'onglets** - `<ul class="nav nav-tabs">`\n2. **Item** - `<li class="nav-item">`\n3. **Lien/Bouton d\'onglet** - `.nav-link` (+ `.active` / `.disabled`)\n4. **Panneaux (optionnel)** - `.tab-content > .tab-pane` avec `data-bs-toggle="tab"`\n\n### Classes CSS\n| Classe | Description |\n|--------|-------------|\n| `.nav` | Base navigation Bootstrap |\n| `.nav-tabs` | Style onglets |\n| `.nav-link` | Lien/bouton d\'onglet |\n| `.active` | Onglet actif |\n| `.disabled` | Onglet inactif |\n\n### Accessibilité\n- Utiliser `aria-current="page"` ou `.active` de maniere cohérente pour l\'etat actif.\n- Sur un onglet inactif, conserver `aria-disabled="true"` et `tabindex="-1"`.\n- En mode panneaux dynamiques (plugin tabs), ajouter `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-controls` et `aria-labelledby`.\n\n**Documentation Bootstrap** : <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs" target="_blank" rel="noopener noreferrer" class="has-external-link">Navs and Tabs</a>\n'}}}},n=()=>`
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span>Item menu with badge</span>
        <span class="badge badge-sm rounded-pill ms-2">1279</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="ri-briefcase-4-line fw-normal me-1" aria-hidden="true"></i>
        <span>Item menu with icon</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
`,r=()=>{let e=Math.random().toString(36).slice(2,10);return`
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab-${e}" data-bs-toggle="tab" data-bs-target="#home-pane-${e}" type="button" role="tab" aria-controls="home-pane-${e}" aria-selected="true">
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab-${e}" data-bs-toggle="tab" data-bs-target="#profile-pane-${e}" type="button" role="tab" aria-controls="profile-pane-${e}" aria-selected="false">
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab-${e}" data-bs-toggle="tab" data-bs-target="#contact-pane-${e}" type="button" role="tab" aria-controls="contact-pane-${e}" aria-selected="false">
          Contact
        </button>
      </li>
    </ul>

    <div class="tab-content p-3" style="min-height: 140px;">
      <div class="tab-pane fade show active" id="home-pane-${e}" role="tabpanel" aria-labelledby="home-tab-${e}" tabindex="0">
        Contenu de l'onglet Home.
      </div>
      <div class="tab-pane fade" id="profile-pane-${e}" role="tabpanel" aria-labelledby="profile-tab-${e}" tabindex="0">
        Contenu de l'onglet Profile.
      </div>
      <div class="tab-pane fade" id="contact-pane-${e}" role="tabpanel" aria-labelledby="contact-tab-${e}" tabindex="0">
        Contenu de l'onglet Contact.
      </div>
    </div>
  `},i=()=>`
  <ul class="nav nav-tabs flex-column" style="max-width: 420px;">
    <li class="nav-item">
      <a href="#" class="nav-link">Les prescripteurs habilites</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link active">Liste des prescripteurs habilites</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Les differents types de SIAE</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Les criteres d'eligibilite de l'IAE</a>
    </li>
  </ul>
`,a=()=>`
  <ol class="nav nav-tabs nav-tabs-sm flex-column" style="max-width: 520px;">
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette premiere partie de votre formulaire</span>
        <span class="badge badge-xs bg-warning-lighter text-warning rounded-pill ms-2">0/7</span>
      </a>
    </li>
    <li class="nav-item">
      <span class="nav-link active" aria-current="page">
        <span>Cette deuxieme partie de votre formulaire</span>
        <span class="badge badge-xs bg-info-lighter text-info rounded-pill ms-2">2/6</span>
      </span>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette troisieme partie de votre formulaire</span>
        <span class="badge badge-xs bg-success-lighter text-success rounded-pill ms-2">8/8</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <span>Cette derniere partie de votre formulaire</span>
        <small class="ms-2 text-muted">3/8 champs remplis</small>
      </a>
    </li>
  </ol>
`,o={render:n,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Version issue de `components.html` avec onglet actif, item avec badge, item avec icône et item désactivé."}}}},s={render:r,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:'Exemple Bootstrap complet avec `data-bs-toggle="tab"` et panneaux `.tab-pane` relies en ARIA.'}}}},c={render:i,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante verticale avec `.flex-column`, conforme à la doc HTML du theme."}}}},l={render:a,parameters:{controls:{disable:!0},docs:{controls:{disable:!0},description:{story:"Variante verticale ordonnee sur `ol` avec `.nav-tabs-sm` et badges d'avancement."}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: renderBasic,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Version issue de \`components.html\` avec onglet actif, item avec badge, item avec icône et item désactivé."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderWithPanels,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Exemple Bootstrap complet avec \`data-bs-toggle=\\"tab\\"\` et panneaux \`.tab-pane\` relies en ARIA."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: renderVertical,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante verticale avec \`.flex-column\`, conforme à la doc HTML du theme."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: renderOrderedVertical,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: "Variante verticale ordonnee sur \`ol\` avec \`.nav-tabs-sm\` et badges d'avancement."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithPanels`,`Vertical`,`OrderedVertical`]})))()}d();export{o as Default,l as OrderedVertical,c as Vertical,s as WithPanels,u as __namedExportsOrder,t as default};