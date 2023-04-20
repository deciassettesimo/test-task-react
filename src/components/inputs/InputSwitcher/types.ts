import React from 'react';

import { InputProps, StyledInputElementProps } from 'components/inputs/types';

export type InputSwitcherProps = Readonly<{
  value?: boolean;
  block?: boolean;
  lock?: boolean;
  preview?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type StyledInputSwitcherProps = Readonly<{
  sBlock?: boolean;
  sChecked?: boolean;
  sPreview?: boolean;
}> &
  StyledInputElementProps;
