import { colors, mediaSizes } from 'components/constants';

export default {
  field: {
    label: {
      color: colors.neutral40,
      fontSize: 16,
      lineHeight: 24,
      padding: '0 0 4px',
    },
    description: {
      color: colors.neutral40,
      fontSize: 14,
      lineHeight: 18,
      padding: '0 0 4px',
    },
    error: {
      color: colors.onError,
      backgroundColor: colors.error50,
      fontSize: 14,
      lineHeight: 18,
      borderRadius: '0 4px 4px 4px',
      padding: {
        [mediaSizes.s]: '4px 8px',
        [mediaSizes.m]: '4px 8px',
        [mediaSizes.l]: '4px 8px',
      },
      margin: {
        [mediaSizes.s]: '2px 0 0',
        [mediaSizes.m]: '2px 0 0',
        [mediaSizes.l]: '2px 0 0',
      },
    },
  },
};
