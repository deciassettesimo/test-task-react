import { colors } from 'components/constants';

export default {
  head: {
    color: colors.neutral60,
    background: colors.background,
    borderColor: colors.neutral80,
    padding: {
      normal: '4px 0',
      selectable: '4px 0 4px 56px',
    },

    row: {
      height: 32,
      padding: '8px 4px',
    },

    cell: {
      padding: '0 8px',
      colors: {
        normal: colors.neutral60,
        sorting: colors.neutral60,
        sorted: colors.onBackground,
      },
    },
  },
  item: {
    color: colors.onBackground,
    padding: {
      normal: '0',
      selectable: '4px 0 4px 56px',
    },

    row: {
      background: {
        first: colors.neutral95,
        second: colors.neutral99,
      },
      height: 40,
      padding: '8px 4px',
    },

    cell: {
      padding: '0 8px',
    },
  },
};
