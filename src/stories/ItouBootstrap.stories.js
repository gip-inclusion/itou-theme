export default {
  title: "Utilities/Bootstrap",
  decorators: [(Story) => `<div style="max-width: 1200px; margin: 0 auto;">${Story()}</div>`],
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Quelques classes utilitaires de Bootstrap que nous utilisions régulièrement dans le projet.

**Documentation Bootstrap** :
- <a href="https://getbootstrap.com/docs/5.3/utilities/display/" target="_blank" rel="noopener noreferrer" class="has-external-link">Display property</a>
- <a href="https://getbootstrap.com/docs/5.3/utilities/flex/" target="_blank" rel="noopener noreferrer" class="has-external-link">Flex</a>
- <a href="https://getbootstrap.com/docs/5.3/utilities/overflow/" target="_blank" rel="noopener noreferrer" class="has-external-link">Overflow</a>
- <a href="https://getbootstrap.com/docs/5.3/utilities/stretched-link/" target="_blank" rel="noopener noreferrer" class="has-external-link">Stretched link</a>
`,
      },
    },
  },
};

const render = () => {
  return ``;
};

export const Default = {
  render,
  parameters: {
    controls: { disable: true },
    docs: {
      controls: { disable: true },
    },
  },
};
