import { create } from 'storybook/theming';

export default create({
  base: 'light',

  // Couleurs de la marque Itou / Plateforme de l'inclusion
  colorPrimary: '#3C12C4',
  colorSecondary: '#274BC8',

  // UI
  appBg: '#F5F5FE',
  appContentBg: '#FFFFFF',
  appBorderColor: '#f8f8f8',
  appBorderRadius: 4,

  // Texte
  textColor: '#161616',
  textInverseColor: '#FFFFFF',

  // Barre d'outils
  barTextColor: '#666666',
  barSelectedColor: '#3C12C4',
  barHoverColor: '#274BC8',
  barBg: '#FFFFFF',

  // Formulaires
  inputBg: '#FFFFFF',
  inputBorder: '#CECECE',
  inputTextColor: '#161616',
  inputBorderRadius: 4,

  // Branding
  brandTitle: 'Itou Theme',
  brandUrl: 'https://emplois.inclusion.beta.gouv.fr/',
  brandImage: '/images/logo-emploi-inclusion.svg',
  brandTarget: '_blank',
});
