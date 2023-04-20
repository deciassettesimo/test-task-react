import { TextAlign } from 'components/types';

import { InputProps } from 'components/inputs/types';

export type InputDateProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
}> &
  InputProps;
