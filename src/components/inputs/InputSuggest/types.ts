import React from 'react';

import {
  Option,
  InputProps,
  InputEventParams,
  StyledInputBaseProps,
} from 'components/inputs/types';
import { OptionRendererParams } from 'components/inputs/InputOptions/types';

export type InputSuggestProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
  autosize?: boolean;
  options?: Option[];
  onSearch?: (params: InputEventParams) => void;
  optionRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type StyledInputSuggestFieldProps = StyledInputBaseProps;
