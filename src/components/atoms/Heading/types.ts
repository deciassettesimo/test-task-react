import React from 'react';

import { Size, Font, Color, FontWeight, FontStyle, TextAlign } from 'components/types';

export type HeadingProps = Readonly<{
  font?: Font;
  color?: Color;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textAlign?: TextAlign;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledHeadingProps = Readonly<{
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sTextAlign?: TextAlign;
  sFontWeight?: FontWeight;
  sFontStyle?: FontStyle;
}>;
