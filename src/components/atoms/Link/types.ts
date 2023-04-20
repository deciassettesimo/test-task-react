import React from 'react';

export type Color = 'onBackground' | 'onPrimary' | 'onSecondary';

export type LinkProps = Readonly<{
  block?: boolean;
  underline?: boolean;
  active?: boolean;
  external?: boolean;
  disabled?: boolean;
  color?: Color;
  href?: string;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'a'>;

export type StyledLinkProps = Readonly<{
  sBlock?: boolean;
  sUnderline?: boolean;
  sActive?: boolean;
  sDisabled?: boolean;
  sColor?: Color;
}>;
