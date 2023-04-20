import React from 'react';

import { Size, Font, Color } from 'components/types';

export type ModalProps = Readonly<{
  zIndex?: number;
  width?: number | string;
  maxWidth?: number;
  minWidth?: number;
  height?: number | string;
  size?: Size;
  font?: Font;
  color?: Color;
  backgroundColor?: Color;
  headerColor?: Color;
  headerBackgroundColor?: Color;
  contentColor?: Color;
  contentBackgroundColor?: Color;
  borderRadius?: string;
  onClose?: () => void;
  closingOnOutClick?: boolean;
  closingOnEscPress?: boolean;
  withoutSpacing?: boolean;
  title?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledModalProps = Readonly<{
  sZIndex?: number;
}>;

export type StyledModalInnerProps = Readonly<{
  sWidth?: number | string;
  sMaxWidth?: number;
  sMinWidth?: number;
  sHeight?: number | string;
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sBackgroundColor?: Color;
  sBorderRadius?: string;
}>;

export type StyledModalBlockProps = Readonly<{
  sColor?: Color;
  sBackgroundColor?: Color;
  sWithoutSpacing?: boolean;
}>;
