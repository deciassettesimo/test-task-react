import React from 'react';

import { Size, Font, Color, FontWeight, FontStyle, TextAlign } from 'components/types';

export type BlockProps = Readonly<{
  size?: Size;
  font?: Font;
  color?: Color;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textAlign?: TextAlign;
  margin?: Size;
  padding?: Size;
  vPadding?: Size;
  hPadding?: Size;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'div'>;

export type StyledBlockProps = Readonly<{
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sFontWeight?: FontWeight;
  sFontStyle?: FontStyle;
  sTextAlign?: TextAlign;
  sMargin?: Size;
  sPadding?: Size;
  sVPadding?: Size;
  sHPadding?: Size;
}>;
