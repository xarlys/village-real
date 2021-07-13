import background from './assets/background.svg';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  primary: '#152144',
  secondary: '#b27138',
  tertiary: '#F1b978',
  quaternary: '#39A39A',
  error: '#EB5757',
  success: '#27AE60',
  gray: ['#152144', '#b27138', '#A79FA1', '#D3CFD0', '#EAE8E9', '#F4F3F4', '#FAF9F9', '#FFFFFF'],
  gradients: {
    primary: 'linear-gradient(165.57deg, #152144 22.12%, #152144 77.88%)',
    secondary: 'linear-gradient(165.57deg, #b27138 22.32%, #b27138 77.88%)',
    tertiary: 'linear-gradient(165.57deg, #F1b978 22.12%, #F1b978 77.88%)',
    quaternary: 'linear-gradient(165.57deg, #39A39A 22.12%, #39A39A 77.88%)',
  },
  svgGradients: {
    primary: {
      from: '#152340',
      to: '#536FA6'
    },
    secondary: {
      from: '#3CA692',
      to: '#032F40'
    },
    tertiary: {
      from: '#2F5928',
      to: '#182614'
    },
    quaternary: {
      from: '#FEBB75',
      to: '#F2CAC8'
    },
  }
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  fontFamily: 'Roboto, Sarabun, sans-serif',
  color: colors.gray[0],
  sizes: {
    base: 18,
  },
};

export const body = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundColor: colors.gray[7],
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[0],
};

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 8,
  normal: 12,
  large: 15,
  xLarge: 25,
};

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
