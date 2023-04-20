import { TextAlign } from 'components/types';

import { InputProps } from 'components/inputs/types';

export type InputNumberIntProps = Readonly<{
  value?: number;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  maxLength?: number;
  formatted?: boolean;
  negative?: boolean;
  units?: string;
}> &
  InputProps;
