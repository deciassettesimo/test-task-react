import React from 'react';

import { Size, Font, Color, FontWeight, FontStyle } from 'components/types';

export type SpanProps = Readonly<{
  size?: Size;
  font?: Font;
  color?: Color;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  digital?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'span'>;

export type StyledSpanProps = Readonly<{
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sFontWeight?: FontWeight;
  sFontStyle?: FontStyle;
  sDigital?: boolean;
}>;
