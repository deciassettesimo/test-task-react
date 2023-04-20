import { mediaSizes, colors } from 'components/constants';

export default {
  fontWeight: { s: 400, m: 400, l: 400 },
  padding: {
    [mediaSizes.s]: { s: [0, 0], m: [0, 0], l: [0, 0] },
    [mediaSizes.m]: { s: [0, 0], m: [0, 0], l: [0, 0] },
    [mediaSizes.l]: { s: [0, 0], m: [0, 0], l: [0, 0] },
  },
  lineHeight: {
    [mediaSizes.s]: { s: 16, m: 18, l: 20 },
    [mediaSizes.m]: { s: 16, m: 18, l: 20 },
    [mediaSizes.l]: { s: 16, m: 18, l: 20 },
  },
  fontSize: {
    [mediaSizes.s]: { s: 12, m: 14, l: 16 },
    [mediaSizes.m]: { s: 12, m: 14, l: 16 },
    [mediaSizes.l]: { s: 12, m: 14, l: 16 },
  },
  colors: {
    checked: {
      disabled: colors.neutral70,
      error: colors.error,
      focused: colors.neutral20,
      hovered: colors.neutral20,
      pressed: colors.neutral20,
      normal: colors.neutral40,
    },
    normal: {
      disabled: colors.neutral70,
      error: colors.error,
      focused: colors.neutral20,
      hovered: colors.neutral20,
      pressed: colors.neutral20,
      normal: colors.neutral40,
    },
  },
  icon: {
    borderRadius: {
      [mediaSizes.s]: { s: 12, m: 16, l: 24 },
      [mediaSizes.m]: { s: 12, m: 16, l: 24 },
      [mediaSizes.l]: { s: 12, m: 16, l: 24 },
    },
    height: {
      [mediaSizes.s]: { s: 24, m: 32, l: 40 },
      [mediaSizes.m]: { s: 24, m: 32, l: 40 },
      [mediaSizes.l]: { s: 24, m: 32, l: 40 },
    },
    width: {
      [mediaSizes.s]: { s: 42, m: 56, l: 72 },
      [mediaSizes.m]: { s: 42, m: 56, l: 72 },
      [mediaSizes.l]: { s: 42, m: 56, l: 72 },
    },
    backgroundColors: {
      checked: {
        disabled: colors.neutral90,
        error: colors.primary,
        focused: colors.primary,
        hovered: colors.primary,
        pressed: colors.primary,
        normal: colors.primary,
      },
      normal: {
        disabled: colors.neutral90,
        error: colors.neutral80,
        focused: colors.neutral80,
        hovered: colors.neutral80,
        pressed: colors.neutral80,
        normal: colors.neutral80,
      },
    },

    inner: {
      size: {
        [mediaSizes.s]: { s: 16, m: 24, l: 32 },
        [mediaSizes.m]: { s: 16, m: 24, l: 32 },
        [mediaSizes.l]: { s: 16, m: 24, l: 32 },
      },
      colors: {
        checked: {
          disabled: colors.neutral80,
          error: colors.primary,
          focused: colors.primary,
          hovered: colors.primary,
          pressed: colors.primary,
          normal: colors.primary,
        },
        normal: {
          disabled: colors.neutral80,
          error: colors.neutral40,
          focused: colors.neutral40,
          hovered: colors.neutral40,
          pressed: colors.neutral40,
          normal: colors.neutral40,
        },
      },
      backgroundColors: {
        checked: {
          disabled: colors.neutral100,
          error: colors.neutral100,
          focused: colors.neutral100,
          hovered: colors.neutral100,
          pressed: colors.neutral100,
          normal: colors.neutral100,
        },
        normal: {
          disabled: colors.neutral100,
          error: colors.neutral100,
          focused: colors.neutral100,
          hovered: colors.neutral100,
          pressed: colors.neutral100,
          normal: colors.neutral100,
        },
      },
      borderColors: {
        checked: {
          disabled: colors.neutral90,
          error: colors.primary,
          focused: colors.primary60,
          hovered: colors.primary60,
          pressed: colors.primary60,
          normal: colors.primary,
        },
        normal: {
          disabled: colors.neutral90,
          error: colors.neutral80,
          focused: colors.neutral90,
          hovered: colors.neutral90,
          pressed: colors.neutral90,
          normal: colors.neutral80,
        },
      },
    },
  },
  label: {
    padding: {
      [mediaSizes.s]: { s: [0, 0, 8], m: [0, 0, 12], l: [0, 0, 16] },
      [mediaSizes.m]: { s: [0, 0, 8], m: [0, 0, 12], l: [0, 0, 16] },
      [mediaSizes.l]: { s: [0, 0, 8], m: [0, 0, 12], l: [0, 0, 16] },
    },
  },
};
