import React from 'react';

import { Size, Color, Display } from 'components/types';

export type IconProps = Readonly<{
  size?: Size;
  color?: Color;
  display?: Display;
}>;

export type StyledIconProps = Readonly<{
  sSize?: Size;
  sColor?: Color;
  sDisplay?: Display;
}>;

export type StyledIconSvgProps = Readonly<{
  sSize?: Size;
  sColor?: Color;
  sDisplay?: Display;
}>;

export type IconPrimitiveProps = Readonly<{
  viewBox: number;
  children?: React.ReactNode | React.ReactNode[];
}> &
  IconProps;
