export default {
  title: "Itou-Componnents/Accordion",
  decorators: [
    (Story) => `<div style="max-width: 1000px; margin: 0 auto;">${Story()}</div>`,
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "padded", // 'centered', 'fullscreen', ou 'padded'
    docs: {
      description: {
        component: `
Accordéons rétractables verticalement basés sur Bootstrap.
L'accordéon utilise le composant \`collapse\` pour le rendre pliable.

### Classes CSS
| Classe | Description |
|--------|-------------|
| \`.accordion\` | Conteneur principal |
| \`.accordion-flush\` | Supprime les bordures et coins arrondis |
| \`.accordion-item\` | Élément individuel |
| \`.accordion-button\` | Bouton déclencheur |
| \`.accordion-body\` | Contenu de l'accordéon |
**Documentation Bootstrap**: <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noopener noreferrer" class="has-external-link">Accordion</a>
`,
      },
    },
  },
  argTypes: {
    flush: {
      control: "boolean",
      description: "Supprime les bordures et coins arrondis pour un rendu bord à bord avec le conteneur parent",
    },
    defaultOpenIndex: {
      control: { type: "number", min: -1, max: 9 },
      description: "Index de l'élément ouvert par défaut (-1 pour aucun)",
    },
    alwaysOpen: {
      control: "boolean",
      description: "Permet d'ouvrir plusieurs éléments simultanément (omit data-bs-parent)",
    },
  },
};

const generateAccordionItem = (index, isOpen, accordionId, alwaysOpen) => {
  const collapseId = `collapse${accordionId}Item${index}`;
  const buttonClass = isOpen ? "accordion-button" : "accordion-button collapsed";
  const collapseClass = isOpen ? "accordion-collapse collapse show" : "accordion-collapse collapse";
  const parentAttr = alwaysOpen ? "" : `data-bs-parent="#${accordionId}"`;

  return `
    <div class="accordion-item">
      <button class="${buttonClass}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isOpen}" aria-controls="${collapseId}">
        Accordion Item #${index + 1}
      </button>
      <div id="${collapseId}" class="${collapseClass}" ${parentAttr}>
        <div class="accordion-body">
          <strong>This is the item #${index + 1} accordion body.</strong> It is ${isOpen ? "shown" : "hidden"} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  `;
};

const render = ({ flush, defaultOpenIndex, alwaysOpen }) => {
  const accordionId = `accordionExample${Math.random().toString(36).substr(2, 9)}`;
  const flushClass = flush ? " accordion-flush" : "";
  const numberOfItems = 3;

  let items = "";
  for (let i = 0; i < numberOfItems; i++) {
    const isOpen = i === defaultOpenIndex;
    items += generateAccordionItem(i, isOpen, accordionId, alwaysOpen);
  }

  return `
    <div class="accordion${flushClass}" id="${accordionId}">
      ${items}
    </div>
  `;
};

export const Default = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Accordéon standard avec bordures et coins arrondis. Un seul élément peut être ouvert à la fois.",
      },
    },
  },
  args: {
    flush: false,
    defaultOpenIndex: 0,
    alwaysOpen: false,
  },
};

export const Flush = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Ajoutez `.accordion-flush` pour supprimer certaines bordures et coins arrondis afin de restituer les accordéons bord à bord avec leur conteneur parent.",
      },
    },
  },
  args: {
    flush: true,
    defaultOpenIndex: 0,
    alwaysOpen: false,
  },
};

export const AllClosed = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Accordéon avec tous les éléments fermés par défaut.",
      },
    },
  },
  args: {
    flush: false,
    defaultOpenIndex: -1,
    alwaysOpen: false,
  },
};

export const AlwaysOpen = {
  render,
  parameters: {
    docs: {
      description: {
        story: "Accordéon permettant d'ouvrir plusieurs éléments simultanément en omettant l'attribut `data-bs-parent`.",
      },
    },
  },
  args: {
    flush: false,
    defaultOpenIndex: 0,
    alwaysOpen: true,
  },
};
