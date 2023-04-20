import { colors } from 'components/constants';

export default {
  colors: {
    disabled: colors.neutral40,
    normal: {
      onBackground: colors.primary50,
      onPrimary: colors.primary80,
      onSecondary: colors.onSecondary,
    },
    hover: {
      onBackground: colors.primary70,
      onPrimary: colors.primary100,
      onSecondary: colors.secondary100,
    },
    active: {
      onBackground: colors.secondary50,
      onPrimary: colors.secondary80,
      onSecondary: colors.onSecondary,
    },
    activeHover: {
      onBackground: colors.primary80,
      onPrimary: colors.primary100,
      onSecondary: colors.secondary100,
    },
  },
};
