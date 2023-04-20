import React from 'react';

import { InputProps, StyledInputElementProps } from 'components/inputs/types';

export type InputRadioGroupProps = Readonly<{
  value?: string;
  children?: React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type InputRadioGroupItemProps = Readonly<{
  value: string;
  block?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledInputRadioGroupItemProps = Readonly<{
  sBlock?: boolean;
  sChecked?: boolean;
}> &
  StyledInputElementProps;
