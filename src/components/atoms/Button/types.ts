import React from 'react';

import { Display } from 'components/types';

export type Type = 'primary' | 'secondary' | 'outline' | 'link' | 'danger' | 'onPrimary';

export type Size = 's' | 'm' | 'l';

export type ButtonClickEventParams = Readonly<{
  id?: string;
}>;

export type ButtonProps = Readonly<{
  id?: string;
  type?: Type;
  size?: Size;
  width?: number | string;
  display?: Display;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  onClick?: (params: ButtonClickEventParams) => void;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledButtonProps = Readonly<{
  sType?: Type;
  sSize?: Size;
  sDisplay?: Display;
  sWidth?: number | string;
  sDisabled?: boolean;
  sRounded?: boolean;
  sFocused?: boolean;
}>;

export type StyledButtonInnerProps = Readonly<{
  sLoading?: boolean;
}>;
