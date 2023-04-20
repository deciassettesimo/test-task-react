import {
  mediaSizes,
  fonts,
  colors,
  fontWeights,
  fontStyles,
  textAligns,
} from 'components/constants';

export default {
  font: { ...fonts },
  color: { ...colors },
  fontWeight: { ...fontWeights },
  fontStyle: { ...fontStyles },
  textAlign: { ...textAligns },
  size: {
    [mediaSizes.s]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.m]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
    [mediaSizes.l]: { xs: 12, s: 14, m: 16, l: 18, xl: 20 },
  },
  lineHeight: {
    [mediaSizes.s]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.m]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
    [mediaSizes.l]: { xs: 16, s: 20, m: 24, l: 28, xl: 32 },
  },
  margin: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
  padding: { xs: 8, s: 16, m: 24, l: 32, xl: 40 },
};
