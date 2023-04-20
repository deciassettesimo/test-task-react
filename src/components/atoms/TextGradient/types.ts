import React from 'react';

import { Gradient } from 'components/types';

export type TextGradientProps = Readonly<{
  gradient?: Gradient;
  animate?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'span'>;

export type StyledTextGradientProps = Readonly<{
  sGradient?: Gradient;
}>;
