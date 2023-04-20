import { colors } from 'components/constants';

export default {
  borderColor: colors.neutral60,
  backgroundColor: colors.background,
  boxShadow: `4px 4px 24px ${colors.neutral50}`,
  borderRadius: '4px',

  item: {
    padding: '12px 16px',
    colors: {
      selectedActive: colors.onPrimary,
      selected: colors.onPrimary,
      active: colors.primary10,
      normal: colors.onBackground,
    },
    backgroundColors: {
      selectedActive: colors.primary60,
      selected: colors.primary60,
      active: colors.primary95,
      normal: colors.background,
    },
  },
};
