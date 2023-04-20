import {
  sizes,
  fonts,
  colors,
  gradients,
  textAligns,
  fontWeights,
  fontStyles,
  display,
} from './constants';

export type Size = keyof typeof sizes;

export type Font = keyof typeof fonts;

export type Color = keyof typeof colors;

export type Gradient = keyof typeof gradients;

export type TextAlign = keyof typeof textAligns;

export type FontWeight = keyof typeof fontWeights;

export type FontStyle = keyof typeof fontStyles;

export type Display = keyof typeof display;
