import React, { useState, useEffect, useRef, useMemo } from 'react';

import isMobile from 'utils/isMobile';

import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';
import { getCaretPosition, getChar } from 'components/inputs/utils';

import { InputDigitalProps } from './types';
import { formatDigitalValue, deformatDigitalValue } from './utils';
import { StyledInputDigital } from './style';

const InputDigital: React.FC<InputDigitalProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    label,
    width = '100%',
    autoFocus = false,
    success = false,
    clearable = false,
    textAlign = 'left',
    autoComplete = false,
    maxLength,
    format = formatDigitalValue,
    deformat = deformatDigitalValue,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef(null);

  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    setCaretPosition(null);
    onBlur({ id, value, formattedValue });
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>,
  ) => {
    const eValue = e.currentTarget.value;

    const fValue = format(eValue, maxLength);
    const dfValue = deformat(fValue);

    const beforeCaretPosValue = deformat(eValue.substring(0, e.currentTarget.selectionEnd));
    setCaretPosition(getCaretPosition(fValue, beforeCaretPosValue, 0));
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleClear = () => {
    const fValue = format('', maxLength);
    const dfValue = deformat(fValue);
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCaretPosition(null);
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 90) e.preventDefault(); // disable ctrl-z
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = getChar(e);
    if (!e.ctrlKey && !e.altKey && !e.metaKey && char !== null && (char < '0' || char > '9')) {
      e.preventDefault();
    }
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
    if (autoFocus) inputNode.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled]);

  useEffect(() => {
    if (value !== prevValue) {
      setFormattedValue(format(value, maxLength));
      setPrevValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (caretPosition !== null) {
      inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  });

  const smallLabel = useMemo(() => focused || !!value, [focused, value]);
  const successIcon = useMemo(() => success && !disabled && !focused, [success, disabled, focused]);
  const clearableIcon = useMemo(
    () => clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const withIcon = useMemo(() => successIcon || clearableIcon, [successIcon, clearableIcon]);

  return (
    <StyledInput sWidth={width}>
      <StyledInputDigital
        ref={inputNode}
        as="input"
        pattern={isMobile() ? '[0-9]*' : null}
        inputMode="numeric"
        id={id}
        value={formattedValue}
        maxLength={maxLength}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        sSize={size}
        sTextAlign={textAlign}
        sAutoComplete={autoComplete}
        sDisabled={disabled}
        sFocused={focused}
        sError={error}
        sWithLabel={!!label && smallLabel}
        sWithIcon={withIcon}
      />
      {label && (
        <StyledInputLabel
          sSize={size}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
        >
          {label}
        </StyledInputLabel>
      )}
      {successIcon && (
        <StyledInputIcon sSize={size}>
          <IconStatusSuccess display="block" color="success" size={size} />
        </StyledInputIcon>
      )}
      {clearableIcon && (
        <StyledInputIcon
          sSize={size}
          sClickable
          sDisabled={disabled}
          onMouseDown={disallowBlur}
          onMouseUp={allowBlur}
          onClick={handleClear}
        >
          <IconActionClear display="block" size={size} />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputDigital;
