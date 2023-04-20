import { InputProps, Option, Size } from 'components/inputs/types';

export type InputCheckboxListProps = Readonly<{
  value?: string[];
  options?: Option[];
}> &
  InputProps;

export type InputCheckboxListItemProps = Readonly<{
  id?: string;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (params: { id: string; value: boolean }) => void;
  checked: boolean;
  value: string;
  title?: string;
  disallowBlur: () => void;
  allowBlur: () => void;
}>;

export type StyledInputCheckboxListItemProps = Readonly<{
  sChecked: boolean;
}>;
