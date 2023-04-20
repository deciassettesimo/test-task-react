import { TextAlign } from 'components/types';

import { Size } from 'components/inputs/types';

export type InputPreviewProps = Readonly<{
  id?: string;
  value?: string;
  label?: string;
  size?: Size;
  width?: number | string;
  success?: boolean;
  textAlign?: TextAlign;
  format?: (value?: string) => string;
}>;
