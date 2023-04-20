import { colors } from 'components/constants';

export default {
  size: 1,
  space: 12,

  rail: {
    backgroundColor: colors.neutral20,
  },

  marks: {
    height: 24,
    fontSize: 12,
    colors: {
      normal: colors.primary,
      disabled: colors.neutral40,
    },
  },

  tracks: {
    backgroundColors: {
      normal: colors.primary,
      disabled: colors.neutral40,
    },
  },

  handles: {
    backgroundColors: {
      normal: colors.onPrimary,
      focused: colors.onPrimary,
      dragging: colors.onPrimary,
      disabled: colors.onPrimary,
    },
    borderColors: {
      normal: colors.primary,
      focused: colors.primary,
      dragging: colors.primary,
      disabled: colors.neutral40,
    },
    boxShadow: {
      normal: 'none',
      focused: `0 0 0 2px ${colors.primary80}`,
      dragging: `0 0 0 2px ${colors.primary80}`,
      disabled: 'none',
    },
  },

  steps: {
    size: 5,
    backgroundColors: {
      normal: colors.onTertiary,
      active: colors.onTertiary,
      disabled: colors.neutral80,
    },
    borderColors: {
      normal: colors.tertiary,
      active: colors.tertiary20,
      disabled: colors.neutral40,
    },
  },
};
