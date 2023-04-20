import { mediaSizes, colors, display } from 'components/constants';

export default {
  colors: { ...colors },
  display: { ...display },
  sizes: {
    [mediaSizes.s]: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
    [mediaSizes.m]: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
    [mediaSizes.l]: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
  },
};
