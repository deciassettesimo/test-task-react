import { InputProps, Option, Size } from 'components/inputs/types';

export type InputSortableListProps = Readonly<{
  value?: string[];
  options?: Option[];
}> &
  InputProps;

export type InputSortableListItemProps = Readonly<{
  id?: string;
  size?: Size;
  error?: boolean;
  parentDisabled?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (params: { id: string; value: boolean }) => void;
  parentValue?: string[];
  value: string;
  title?: string;
  disabled?: boolean;
  disallowBlur: () => void;
  allowBlur: () => void;
}>;

export type InputSortableListItemHandleProps = Readonly<{
  size?: Size;
  disabled?: boolean;
}>;

export type StyledInputSortableListItemProps = Readonly<{
  sChecked: boolean;
}>;

export type StyledInputSortableListItemHandleProps = Readonly<{
  sDisabled: boolean;
}>;
