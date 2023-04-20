import React, { useState, useEffect, useRef, useMemo } from 'react';

import isMobile from 'utils/isMobile';
import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import {
  StyledInput,
  StyledInputBase,
  StyledInputLabel,
  StyledInputIcon,
} from 'components/inputs/style';
import { getChar, getCaretPosition } from 'components/inputs/utils';

import { InputDateProps } from './types';
import { getStringFromDayJsValue, formatDateValue, deformatDateValue } from './utils';

const InputDate: React.FC<InputDateProps> = (props) => {
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
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef(null);

  const handleFocus = () => {
    setFocused(true);
    setCaretPosition(null);
    const fValue = formatDateValue(getStringFromDayJsValue(value));
    setFormattedValue(fValue);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    setCaretPosition(null);
    const fValue = formatDateValue(getStringFromDayJsValue(value));
    setFormattedValue(fValue);
    onBlur({ id, value, formattedValue });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const eValue = e.currentTarget.value;

    const fValue = formatDateValue(eValue);
    const dfValue = deformatDateValue(fValue);

    const beforeCaretPosValue = eValue
      .substring(0, e.currentTarget.selectionEnd)
      .replace(/[^\d\\.]/g, '');
    setCaretPosition(getCaretPosition(fValue, beforeCaretPosValue, 0));
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleClear = () => {
    const fValue = formatDateValue(null);
    const dfValue = deformatDateValue(fValue);
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
    if (
      !e.ctrlKey &&
      !e.altKey &&
      !e.metaKey &&
      char !== null &&
      (char < '0' || char > '9') &&
      char !== '.'
    ) {
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
      setFormattedValue(formatDateValue(getStringFromDayJsValue(value)));
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
      <StyledInputBase
        as="input"
        ref={inputNode}
        pattern={isMobile() ? '[0-9]*' : null}
        inputMode="numeric"
        onInvalid={(e: React.FormEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
        id={id}
        value={formattedValue}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        maxLength={10}
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

export default InputDate;
