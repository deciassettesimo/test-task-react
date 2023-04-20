import React, { useEffect, useRef, useState, useMemo } from 'react';

import isMobile from 'utils/isMobile';
import getBrowser from 'utils/getBrowser';

import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import {
  StyledInput,
  StyledInputBase,
  StyledInputLabel,
  StyledInputIcon,
} from 'components/inputs/style';
import {
  getChar,
  getCaretPosition,
  getNumberDisplayedValue,
  getNumberPureValue,
} from 'components/inputs/utils';

import { InputNumberDecProps } from './types';
import { formatNumberDecValue, deformatNumberDecValue } from './utils';

const InputNumberDec: React.FC<InputNumberDecProps> = (props) => {
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
    maxLength = 14,
    formatted = false,
    negative = false,
    units,
    decimals = 2,
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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const eValue = e.currentTarget.value;

    const pureValue = getNumberPureValue(eValue, units);
    const fValue = formatNumberDecValue(pureValue, negative, formatted, maxLength, decimals, false);
    const dfValue = deformatNumberDecValue(fValue);

    const beforeCaretPosValue = pureValue
      .substring(0, e.currentTarget.selectionEnd)
      .replace(',', '.')
      .replace(/[^-\d\\.]/g, '');

    setCaretPosition(getCaretPosition(fValue, beforeCaretPosValue, 0));
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  const handleClear = () => {
    const fValue = formatNumberDecValue(null, negative, formatted, maxLength, decimals, false);
    const dfValue = deformatNumberDecValue(fValue);
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
      ((char !== null && (char < '0' || char > '9') && !['-', '.', ','].includes(char)) ||
        (char === '-' && e.currentTarget.value.indexOf('-') > -1) ||
        (['.', ','].includes(char) && e.currentTarget.value.indexOf(',') > -1))
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
      setFormattedValue(
        formatNumberDecValue(value, negative, formatted, maxLength, decimals, !focused),
      );
    }
  }, [value]);

  useEffect(() => {
    setFormattedValue(
      formatNumberDecValue(value, negative, formatted, maxLength, decimals, !focused),
    );
  }, [focused]);

  useEffect(() => {
    if (caretPosition !== null) {
      inputNode.current.setSelectionRange(caretPosition, caretPosition);
    }
  });

  const successIcon = useMemo(() => success && !disabled && !focused, [success, disabled, focused]);
  const clearableIcon = useMemo(
    () => clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const withIcon = useMemo(() => successIcon || clearableIcon, [successIcon, clearableIcon]);
  const displayedValue = useMemo(
    () => getNumberDisplayedValue(formattedValue, units),
    [formattedValue, units],
  );
  const smallLabel = useMemo(() => focused || !!displayedValue, [focused, displayedValue]);
  const formattedMaxLength = useMemo(
    () =>
      maxLength +
      (formatted ? Math.floor(maxLength / 3) : 0) +
      (negative ? 1 : 0) +
      (units ? units.length + 1 : 0) +
      decimals +
      1,
    [maxLength, formatted, negative, units, decimals],
  );

  return (
    <StyledInput sWidth={width}>
      <StyledInputBase
        as="input"
        ref={inputNode}
        pattern={isMobile() ? '[0-9,.-]*' : null}
        inputMode={negative || getBrowser() === 'Safari' ? undefined : 'decimal'}
        onInvalid={(e: React.FormEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
        id={id}
        value={displayedValue}
        maxLength={formattedMaxLength}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        sSize={size}
        sTextAlign={textAlign}
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

export default InputNumberDec;
