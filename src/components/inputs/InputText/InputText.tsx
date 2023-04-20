import React, { useState, useEffect, useRef, useMemo } from 'react';

import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';
import { getCaretPosition } from 'components/inputs/utils';

import { InputTextProps } from './types';
import { formatTextValue, deformatTextValue } from './utils';
import { StyledInputText, StyledInputTextAutosize } from './style';

const InputText: React.FC<InputTextProps> = (props) => {
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
    format = formatTextValue,
    deformat = deformatTextValue,
    autosize = false,
    inputMode = 'text',
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

  const handleKeyDown = () => {
    setCaretPosition(null);
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
      {!autosize && (
        <StyledInputText
          ref={inputNode}
          as="input"
          inputMode={inputMode}
          id={id}
          value={formattedValue}
          maxLength={maxLength}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sSize={size}
          sTextAlign={textAlign}
          sAutoComplete={autoComplete}
          sDisabled={disabled}
          sFocused={focused}
          sError={error}
          sWithLabel={!!label && smallLabel}
          sWithIcon={withIcon}
        />
      )}
      {autosize && (
        <StyledInputTextAutosize
          ref={inputNode}
          inputMode={inputMode}
          id={id}
          value={formattedValue}
          maxLength={maxLength}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sSize={size}
          sTextAlign={textAlign}
          sAutoComplete={autoComplete}
          sDisabled={disabled}
          sFocused={focused}
          sError={error}
          sWithLabel={!!label && smallLabel}
          sWithIcon={withIcon}
        />
      )}
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

export default InputText;
