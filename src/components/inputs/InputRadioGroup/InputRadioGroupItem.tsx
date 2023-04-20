import React, { useState, useEffect, useContext, useRef, useMemo } from 'react';

import IconRadioChecked from 'components/icons/IconCheckCircle';

import { InputRadioGroupItemProps } from './types';
import InputRadioGroupContext from './context';
import {
  StyledInputRadioGroupItem,
  StyledInputRadioGroupItemInner,
  StyledInputRadioGroupItemHtmlInput,
  StyledInputRadioGroupItemIcon,
  StyledInputRadioGroupItemLabel,
} from './style';

const InputRadioGroupItem: React.FC<InputRadioGroupItemProps> = (props) => {
  const { value, children, block = false } = props;

  const {
    id: group,
    value: parentValue,
    size = 'm',
    disabled,
    error,
    onFocus,
    onBlur,
    onChange,
    disallowBlur: groupDisallowBlur,
    allowBlur: groupAllowBlur,
  } = useContext(InputRadioGroupContext);

  const checked = useMemo(() => parentValue === value, [parentValue, value]);

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef(null);

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

  const handleChange = () => {
    onChange({ value });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
    groupDisallowBlur();
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
      groupAllowBlur();
      inputNode.current.focus();
    }
  };

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled]);

  return (
    <StyledInputRadioGroupItem
      htmlFor={`${group}_${value}`}
      data-checked={checked}
      sSize={size}
      sChecked={checked}
      sDisabled={disabled}
      sFocused={focused}
      sError={error}
      sBlock={block}
      onMouseDown={disallowBlur}
      onMouseUp={allowBlur}
    >
      <StyledInputRadioGroupItemInner>
        <StyledInputRadioGroupItemHtmlInput
          ref={inputNode}
          id={`${group}_${value}`}
          value={value}
          name={group}
          checked={checked}
          data-checked={checked}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <StyledInputRadioGroupItemIcon>
          {checked && <IconRadioChecked size={size} />}
        </StyledInputRadioGroupItemIcon>
        {children && <StyledInputRadioGroupItemLabel>{children}</StyledInputRadioGroupItemLabel>}
      </StyledInputRadioGroupItemInner>
    </StyledInputRadioGroupItem>
  );
};

export default InputRadioGroupItem;
