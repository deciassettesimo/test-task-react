import React, { useEffect, useRef, useState, useMemo } from 'react';

import IconCheckMark from 'components/icons/IconCheckMark';
import IconCheckLock from 'components/icons/IconCheckLock';

import { InputSwitcherProps } from './types';
import {
  StyledInputSwitcher,
  StyledInputSwitcherInner,
  StyledInputSwitcherHtmlInput,
  StyledInputSwitcherIcon,
  StyledInputSwitcherIconInner,
  StyledInputSwitcherLabel,
} from './style';

const InputSwitcher: React.FC<InputSwitcherProps> = (props) => {
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
    lock = false,
    preview = false,
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
    <StyledInputSwitcher
      htmlFor={id}
      data-checked={checked}
      sSize={size}
      sDisabled={disabled}
      sChecked={checked}
      sFocused={focused}
      sError={error}
      sBlock={block}
      sPreview={preview}
      onMouseDown={disallowBlur}
      onMouseUp={allowBlur}
    >
      <StyledInputSwitcherInner>
        <StyledInputSwitcherHtmlInput
          ref={inputNode}
          id={id}
          checked={checked}
          data-checked={checked}
          disabled={disabled || preview}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <StyledInputSwitcherIcon>
          <StyledInputSwitcherIconInner>
            {!lock && checked && <IconCheckMark display="block" size={size} />}
            {lock && <IconCheckLock display="block" />}
          </StyledInputSwitcherIconInner>
        </StyledInputSwitcherIcon>
        {children && <StyledInputSwitcherLabel>{children}</StyledInputSwitcherLabel>}
      </StyledInputSwitcherInner>
    </StyledInputSwitcher>
  );
};

export default InputSwitcher;
