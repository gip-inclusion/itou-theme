export default {
  title: 'Itou-Componnents/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Boutons itou bases sur Bootstrap. Utiliser element="link" pour les actions de navigation, et element="button" pour les actions locales.',
      },
    },
  },
  argTypes: {
    element: {
      control: { type: 'select' },
      options: ['button', 'link'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'link'],
    },
    outline: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

const render = ({ element, variant, outline, size, disabled }) => {
  const kind = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size === 'default' ? '' : `btn-${size}`;
  const classes = ['btn', kind, sizeClass].filter(Boolean).join(' ');
  const disabledAttrs = disabled ? ' disabled' : '';

  const elButton = `<button type="button" class="${classes}"${disabledAttrs}>Button</button>`;
  const elLink = `<a href="" class="${classes}"${disabledAttrs}>Link</a>`;

  if (element === 'button') {
    return elButton;
  } else {
    return elLink;
  }
};

export const Principal = {
  render,
  parameters: {
    docs: {
      description: {
        story: 'Exemple standard du bouton principal. Ajuster variant, outline et size selon le contexte.',
      },
    },
  },
  args: {
    element: 'button',
    variant: 'primary',
    outline: false,
    size: 'default',
    disabled: false,
  },
};
