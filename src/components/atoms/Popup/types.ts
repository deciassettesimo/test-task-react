import React from 'react';

import { Display } from 'components/types';

export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type Align = 'start' | 'center' | 'end';

export type PopupProps = Readonly<{
  opened?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closingOnOutClick?: boolean;
  closingOnEscPress?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type PopupOpenerProps = Readonly<{
  display?: Display;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledPopupOpenerProps = Readonly<{
  sDisplay?: Display;
}>;

export type PopupBoxProps = Readonly<{
  placement?: Placement;
  align?: Align;
  width?: string | number;
  height?: string | number;
  zIndex?: number;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledPopupBoxProps = Readonly<{
  sPlacement?: Placement;
  sOpened?: boolean;
  sAlign?: Align;
  sWidth?: string | number;
  sHeight?: string | number;
  sZIndex?: number;
  sOpenerNodeBCRect?: DOMRect | null;
  sInnerNodeBCRect?: DOMRect | null;
}>;
