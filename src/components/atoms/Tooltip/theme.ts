import { colors } from 'components/constants';

export default {
  icon: {
    padding: '4px',
    colors: {
      normal: colors.secondary70,
      hover: colors.secondary,
    },
  },
  box: {
    color: colors.secondary0,
    backgroundColor: colors.secondary95,
    borderColor: colors.secondary90,
    borderRadius: '2px',
    boxShadow: `4px 4px 12px ${colors.black30}`,
    padding: '8px 20px 8px 16px',
  },
  close: {
    padding: '2px',
    colors: {
      normal: colors.secondary60,
      hover: colors.secondary40,
    },
  },
};
