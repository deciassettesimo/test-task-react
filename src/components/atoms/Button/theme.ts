import { mediaSizes, colors, fonts, display } from 'components/constants';

export default {
  display: { ...display },
  fontFamily: fonts.primary,
  fontWeight: { s: 400, m: 500, l: 500 },
  height: {
    [mediaSizes.s]: { s: 40, m: 56, l: 64 },
    [mediaSizes.m]: { s: 40, m: 56, l: 64 },
    [mediaSizes.l]: { s: 40, m: 56, l: 64 },
  },
  lineHeight: {
    [mediaSizes.s]: { s: 16, m: 24, l: 32 },
    [mediaSizes.m]: { s: 16, m: 24, l: 32 },
    [mediaSizes.l]: { s: 16, m: 24, l: 32 },
  },
  fontSize: {
    [mediaSizes.s]: { s: 14, m: 16, l: 18 },
    [mediaSizes.m]: { s: 14, m: 16, l: 18 },
    [mediaSizes.l]: { s: 14, m: 16, l: 18 },
  },
  borderRadius: {
    rounded: {
      [mediaSizes.s]: { s: 20, m: 28, l: 32 },
      [mediaSizes.m]: { s: 20, m: 28, l: 32 },
      [mediaSizes.l]: { s: 20, m: 28, l: 32 },
    },
    normal: {
      [mediaSizes.s]: { s: 4, m: 4, l: 4 },
      [mediaSizes.m]: { s: 4, m: 4, l: 4 },
      [mediaSizes.l]: { s: 4, m: 4, l: 4 },
    },
  },
  padding: {
    [mediaSizes.s]: { s: [11, 15], m: [15, 19], l: [15, 19] },
    [mediaSizes.m]: { s: [11, 15], m: [15, 19], l: [15, 19] },
    [mediaSizes.l]: { s: [11, 15], m: [15, 19], l: [15, 19] },
  },

  primary: {
    backgroundColors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.primary50,
      pressed: colors.primary35,
      disabled: colors.neutral90,
    },
    borderColors: {
      normal: colors.transparent,
      focused: colors.transparent,
      hovered: colors.transparent,
      pressed: colors.transparent,
      disabled: colors.transparent,
    },
    colors: {
      normal: colors.onPrimary,
      focused: colors.onPrimary,
      hovered: colors.onPrimary,
      pressed: colors.onPrimary,
      disabled: colors.neutral60,
    },
  },
  secondary: {
    backgroundColors: {
      normal: colors.secondary,
      focused: colors.secondary35,
      hovered: colors.secondary50,
      pressed: colors.secondary35,
      disabled: colors.neutral90,
    },
    borderColors: {
      normal: colors.transparent,
      focused: colors.transparent,
      hovered: colors.transparent,
      pressed: colors.transparent,
      disabled: colors.transparent,
    },
    colors: {
      normal: colors.onSecondary,
      focused: colors.onSecondary,
      hovered: colors.onSecondary,
      pressed: colors.onSecondary,
      disabled: colors.neutral60,
    },
  },
  outline: {
    backgroundColors: {
      normal: colors.transparent,
      focused: colors.transparent,
      hovered: colors.primary50,
      pressed: colors.primary35,
      disabled: colors.transparent,
    },
    borderColors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.primary50,
      pressed: colors.primary35,
      disabled: colors.neutral90,
    },
    colors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.onPrimary,
      pressed: colors.onPrimary,
      disabled: colors.neutral60,
    },
  },
  link: {
    backgroundColors: {
      normal: colors.transparent,
      focused: colors.transparent,
      hovered: colors.transparent,
      pressed: colors.transparent,
      disabled: colors.transparent,
    },
    borderColors: {
      normal: colors.transparent,
      focused: colors.transparent,
      hovered: colors.transparent,
      pressed: colors.transparent,
      disabled: colors.transparent,
    },
    colors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.primary50,
      pressed: colors.primary35,
      disabled: colors.neutral60,
    },
  },
  danger: {
    backgroundColors: {
      normal: colors.error100,
      focused: colors.error100,
      hovered: colors.error50,
      pressed: colors.error35,
      disabled: colors.transparent,
    },
    borderColors: {
      normal: colors.error,
      focused: colors.error35,
      hovered: colors.error50,
      pressed: colors.error35,
      disabled: colors.neutral90,
    },
    colors: {
      normal: colors.error,
      focused: colors.error35,
      hovered: colors.onError,
      pressed: colors.onError,
      disabled: colors.neutral60,
    },
  },
  onPrimary: {
    backgroundColors: {
      normal: colors.primary100,
      focused: colors.primary100,
      hovered: colors.primary30,
      pressed: colors.primary30,
      disabled: colors.neutral90,
    },
    borderColors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.primary30,
      pressed: colors.primary30,
      disabled: colors.neutral90,
    },
    colors: {
      normal: colors.primary,
      focused: colors.primary35,
      hovered: colors.onPrimary,
      pressed: colors.onPrimary,
      disabled: colors.neutral60,
    },
  },

  loading: {
    color: colors.primary,
  },
};
