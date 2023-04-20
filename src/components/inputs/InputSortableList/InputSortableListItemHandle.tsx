import React, { forwardRef } from 'react';

import IconDraggable from 'components/icons/IconDraggable';

import { InputSortableListItemHandleProps } from './types';
import { StyledInputSortableListItemHandle } from './style';

const InputSortableListItemHandle = forwardRef<HTMLDivElement, InputSortableListItemHandleProps>(
  function InputSortableListItemHandle(props, ref): JSX.Element {
    const { size, disabled } = props;

    return (
      <StyledInputSortableListItemHandle ref={ref} sDisabled={disabled}>
        <IconDraggable size={size} color="neutral60" />
      </StyledInputSortableListItemHandle>
    );
  },
);

export default InputSortableListItemHandle;
