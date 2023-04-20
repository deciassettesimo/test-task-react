import { colors, fonts, mediaSizes } from 'components/constants';

export default {
  font: { ...fonts },
  colors: { ...colors },
  backgroundColors: { ...colors },

  size: {
    [mediaSizes.s]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.m]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.l]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
  },
  lineHeight: {
    [mediaSizes.s]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.m]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.l]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
  },

  fadeBackgroundColor: colors.black40,

  inner: {
    borderRadius: '0',
  },

  header: {
    padding: '16px 56px 16px 16px',
  },

  close: {
    top: 16,
    right: 16,
  },

  content: {
    padding: '16px',
  },
};
