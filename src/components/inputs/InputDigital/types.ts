import { TextAlign } from 'components/types';

import { InputProps, StyledInputBaseProps } from 'components/inputs/types';

export type InputDigitalProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
}> &
  InputProps;

export type StyledInputTextProps = StyledInputBaseProps;
