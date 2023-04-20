import React, { useState, useEffect } from 'react';

import { InputEventParams } from 'components/inputs/types';
import InputCheckbox from 'components/inputs/InputCheckbox';

import { InputCheckboxListItemProps } from './types';
import { StyledInputCheckboxListItem } from './style';

const InputCheckboxListItem: React.FC<InputCheckboxListItemProps> = (props) => {
  const {
    id: parentId,
    size = 'm',
    error,
    disabled,
    onFocus,
    onBlur,
    onChange,
    checked,
    value,
    title,
    disallowBlur: parentDisallowBlur,
    allowBlur: parentAllowBlur,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const handleFocus = () => {
    if (!focused) {
      setFocused(true);
      onFocus();
    }
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    onBlur();
  };

  const handleChange = ({ value: checkboxValue }: InputEventParams) => {
    onChange({ id: value, value: checkboxValue as boolean });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
    parentDisallowBlur();
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
      parentAllowBlur();
    }
  };

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled]);

  return (
    <StyledInputCheckboxListItem
      data-component="InputCheckboxListItem"
      data-parent-id={parentId}
      data-value={value}
      data-checked={checked}
      onMouseDown={disallowBlur}
      onMouseUp={allowBlur}
      sChecked={checked}
    >
      <InputCheckbox
        value={checked}
        size={size}
        id={`${parentId}_${value}`}
        disabled={disabled}
        error={error}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        block
      >
        {title}
      </InputCheckbox>
    </StyledInputCheckboxListItem>
  );
};

export default InputCheckboxListItem;
