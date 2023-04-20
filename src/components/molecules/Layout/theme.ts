import { mediaSizes, colors, fonts } from 'components/constants';

export default {
  font: fonts.primary,
  backgroundColor: colors.background,
  color: colors.onBackground,

  side: {
    width: {
      small: '88px',
      large: '268px',
    },
    backgroundColor: colors.primary95,
    color: colors.onBackground,
  },

  main: {
    backgroundColor: colors.background,
    color: colors.onBackground,
  },

  header: {
    backgroundColor: colors.primary30,
    color: colors.onPrimary,
    minHeight: '88px',
    nav: {
      padding: {
        [mediaSizes.s]: '0 0 0 40px',
        [mediaSizes.m]: '0 0 0 56px',
      },
    },
    content: {
      backgroundColor: colors.primary50,
      color: colors.onPrimary,
    },
  },

  content: {
    backgroundColor: colors.background,
    color: colors.onBackground,
  },

  section: {
    width: { s: '960px', m: '1200px', l: '1440px' },
    padding: {
      main: {
        [mediaSizes.s]: '16px 16px',
        [mediaSizes.m]: '16px 32px',
        [mediaSizes.l]: '16px 64px',
      },
      side: {
        [mediaSizes.s]: '16px',
        [mediaSizes.m]: '16px',
        [mediaSizes.l]: '16px',
      },
    },
  },

  error: {
    backgroundColor: colors.background,
    color: colors.error,
  },
};
