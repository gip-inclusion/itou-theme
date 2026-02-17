export default {
  title: 'Itou/Alerts',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Alertes itou basees sur Bootstrap. Choisir role="status" pour les messages informatifs et role="alert" pour les erreurs critiques.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
    },
    role: {
      control: { type: 'select' },
      options: ['status', 'alert'],
    },
    dismissible: { control: 'boolean' },
    withIcon: { control: 'boolean' },
    withAction: { control: 'boolean' },
    title: { control: 'text' },
    message: { control: 'text' },
    actionLabel: { control: 'text' },
  },
};

const iconByVariant = {
  info: 'ri-information-line',
  success: 'ri-checkbox-circle-line',
  warning: 'ri-error-warning-line',
  danger: 'ri-close-circle-line',
};

const textByVariant = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
};

const render = ({ variant, role, dismissible, withIcon, withAction, title, message, actionLabel }) => {
  const dismissibleClasses = dismissible ? ' alert-dismissible fade show' : '';
  const closeButton = dismissible
    ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>'
    : '';

  if (!withIcon && !withAction) {
    return `
      <div class="global-messages-container" style="max-width: 960px; margin: 0 auto;">
        <div class="alert alert-${variant}${dismissibleClasses}" role="${role}">
          ${closeButton}
          <p class="mb-0"><strong>${title}</strong> : ${message}</p>
        </div>
      </div>
    `;
  }

  const iconBlock = withIcon
    ? `
      <div class="col-auto pe-0">
        <i class="${iconByVariant[variant]} ri-xl ${textByVariant[variant]}" aria-hidden="true"></i>
      </div>
    `
    : '';

  const actionBlock = withAction
    ? `
      <div class="col-12 col-md-auto mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-sm btn-primary">${actionLabel}</button>
      </div>
    `
    : '';

  return `
    <div style="max-width: 960px; margin: 0 auto;">
      <div class="alert alert-${variant}${dismissibleClasses}" role="${role}">
        ${closeButton}
        <div class="row">
          ${iconBlock}
          <div class="col">
            <p class="mb-2"><strong>${title}</strong></p>
            <p class="mb-0">${message}</p>
          </div>
          ${actionBlock}
        </div>
      </div>
    </div>
  `;
};

export const Simple = {
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte simple sans icone ni action, ideale pour un message global.',
      },
    },
  },
  args: {
    variant: 'danger',
    role: 'status',
    dismissible: false,
    withIcon: false,
    withAction: false,
    title: 'Jeudi 01 février 2024',
    message: "Les professionnels de l'inclusion ont rendez-vous de 09h à 17h pour un événement en ligne incontournable.",
    actionLabel: 'S’inscrire',
  },
};

export const Dismissible = {
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte refermable pour les informations transitoires.',
      },
    },
  },
  args: {
    variant: 'info',
    role: 'status',
    dismissible: true,
    withIcon: false,
    withAction: false,
    title: 'Information',
    message: 'Votre demande a bien été prise en compte.',
    actionLabel: 'Voir',
  },
};

export const AvecIconeEtAction = {
  render,
  parameters: {
    docs: {
      description: {
        story: 'Alerte enrichie avec icone et bouton d’action.',
      },
    },
  },
  args: {
    variant: 'info',
    role: 'status',
    dismissible: true,
    withIcon: true,
    withAction: true,
    title: 'Mobiliser la solution',
    message: 'Vous pouvez passer à l’étape suivante ou revenir sur ce choix plus tard.',
    actionLabel: 'Continuer',
  },
};
