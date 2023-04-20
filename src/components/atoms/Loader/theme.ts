import { mediaSizes, colors, display } from 'components/constants';

export default {
  display: { ...display },

  circle: {
    width: {
      [mediaSizes.s]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
      [mediaSizes.m]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
      [mediaSizes.l]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
    },

    height: {
      [mediaSizes.s]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
      [mediaSizes.m]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
      [mediaSizes.l]: { xs: 16, s: 24, m: 32, l: 40, xl: 48 },
    },

    icon: {
      colors: {
        main: colors.transparent,
        primary: colors.primary,
        secondary: colors.secondary,
      },

      borderWidth: {
        [mediaSizes.s]: { xs: 2, s: 2, m: 2, l: 2, xl: 2 },
        [mediaSizes.m]: { xs: 2, s: 2, m: 2, l: 2, xl: 2 },
        [mediaSizes.l]: { xs: 2, s: 2, m: 2, l: 2, xl: 2 },
      },
    },
  },

  dots: {
    width: {
      [mediaSizes.s]: { xs: 40, s: 60, m: 80, l: 100, xl: 120 },
      [mediaSizes.m]: { xs: 40, s: 60, m: 80, l: 100, xl: 120 },
      [mediaSizes.l]: { xs: 40, s: 60, m: 80, l: 100, xl: 120 },
    },

    height: {
      [mediaSizes.s]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
      [mediaSizes.m]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
      [mediaSizes.l]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
    },
    icon: {
      color: colors.primary,
      size: {
        [mediaSizes.s]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
        [mediaSizes.m]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
        [mediaSizes.l]: { xs: 8, s: 12, m: 16, l: 20, xl: 24 },
      },
    },
  },
};
