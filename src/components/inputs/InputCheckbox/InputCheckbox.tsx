import React, { useEffect, useRef, useState, useMemo } from 'react';

import IconCheckMark from 'components/icons/IconCheckMark';

import { InputCheckboxProps } from './types';
import {
  StyledInputCheckbox,
  StyledInputCheckboxInner,
  StyledInputCheckboxHtmlInput,
  StyledInputCheckboxIcon,
  StyledInputCheckboxLabel,
} from './style';

const InputCheckbox: React.FC<InputCheckboxProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value = false,
    block = false,
    children,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef(null);

  const handleFocus = () => {
    if (!focused) {
      setFocused(true);
      onFocus({ id, value });
    }
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    onBlur({ id, value });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange({ id, value: e.currentTarget.checked });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
      inputNode.current.focus();
    }
  };

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled]);

  const checked = useMemo(() => !!value, [value]);

  return (
    <StyledInputCheckbox
      htmlFor={id}
      data-checked={checked}
      sSize={size}
      sDisabled={disabled}
      sChecked={checked}
      sFocused={focused}
      sError={error}
      sBlock={block}
      onMouseDown={disallowBlur}
      onMouseUp={allowBlur}
    >
      <StyledInputCheckboxInner>
        <StyledInputCheckboxHtmlInput
          ref={inputNode}
          id={id}
          checked={checked}
          data-checked={checked}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <StyledInputCheckboxIcon>
          {checked && <IconCheckMark display="block" size={size} />}
        </StyledInputCheckboxIcon>
        {children && <StyledInputCheckboxLabel>{children}</StyledInputCheckboxLabel>}
      </StyledInputCheckboxInner>
    </StyledInputCheckbox>
  );
};

export default InputCheckbox;
