import React from 'react';

import { Option } from 'components/inputs/types';

export type OptionRendererParams = Readonly<{
  id?: string;
  option?: Option;
}>;

export type InputOptionsProps = Readonly<{
  inputId?: string;
  inputFocused?: boolean;
  inputOpened?: boolean;
  options?: Option[];
  selected?: string;
  optionRenderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onChange?: (params: Option) => void;
  onClose?: () => void;
}>;

export type InputOptionsItemProps = Readonly<{
  inputId?: string;
  selected?: boolean;
  active?: boolean;
  renderer?: (params: OptionRendererParams) => React.ReactNode | React.ReactNode[];
  onClick?: (params: Option) => void;
  onMouseEnter?: (value?: string) => void;
  onMouseLeave?: () => void;
}> &
  Option;

export type StyledInputOptionsProps = Readonly<{
  sSize?: string;
}>;

export type StyledInputOptionsItemProps = Readonly<{
  sSelected?: boolean;
  sActive?: boolean;
}>;
