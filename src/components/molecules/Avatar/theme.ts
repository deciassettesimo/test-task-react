import { colors, mediaSizes } from 'components/constants';

export default {
  sizes: {
    [mediaSizes.s]: { xs: 32, s: 40, m: 48, l: 56, xl: 72 },
    [mediaSizes.m]: { xs: 32, s: 40, m: 48, l: 56, xl: 72 },
    [mediaSizes.l]: { xs: 32, s: 40, m: 48, l: 56, xl: 72 },
  },
  padding: {
    [mediaSizes.s]: { xxs: 1, xs: 1, s: 1, m: 1, l: 1, xl: 1 },
    [mediaSizes.m]: { xxs: 1, xs: 1, s: 1, m: 1, l: 1, xl: 1 },
    [mediaSizes.l]: { xxs: 1, xs: 1, s: 1, m: 1, l: 1, xl: 1 },
  },
  borderColors: {
    filled: colors.primary,
    empty: colors.primary,
  },
  backgroundColors: {
    filled: colors.primary95,
    empty: colors.primary95,
  },
  innerBackgroundColors: {
    filled: colors.white40,
    empty: colors.white40,
  },
  emptyFill: colors.black10,
};
