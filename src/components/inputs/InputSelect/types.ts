import React from 'react';

import { Size, Option, InputProps, StyledInputElementProps } from 'components/inputs/types';
import { OptionRendererParams } from 'components/inputs/InputOptions/types';

export type InputSelectProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  options?: Option[];
  valueRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
  optionRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type InputSelectNativeProps = Readonly<{
  id?: string;
  value?: string;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void;
  focused?: boolean;
  withLabel?: boolean;
  options: Option[];
}>;

export type InputSelectCustomProps = Readonly<{
  id?: string;
  selected?: Option;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (params?: Option) => void;
  focused?: boolean;
  withLabel?: boolean;
  options: Option[];
  valueRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
  optionRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
}>;

export type StyledInputSelectNativeProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}> &
  StyledInputElementProps;

export type StyledInputSelectCustomProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}> &
  StyledInputElementProps;
