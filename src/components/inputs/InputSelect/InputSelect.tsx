import React, { useState, useEffect, useRef, useMemo } from 'react';

import isMobile from 'utils/isMobile';

import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import IconDropdown from 'components/icons/IconDropdown';
import { Option } from 'components/inputs/types';
import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';

import { InputSelectProps } from './types';

import InputSelectNative from './InputSelectNative';
import InputSelectCustom from './InputSelectCustom';

const InputSelect: React.FC<InputSelectProps> = (props) => {
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
    options = [],
    valueRenderer = (params) => params?.option?.title,
    optionRenderer = (params) => params?.option?.title,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const inputNode = useRef(null);

  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value });
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    onBlur({ id, value });
  };

  const handleNativeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const eValue = e.currentTarget.value;

    const option = options.find((item) => item.value === eValue);

    setPrevValue(eValue);

    onChange({ id, value: eValue || null, option });
  };

  const handleCustomChange = (params: Option) => {
    setPrevValue(params.value);

    onChange({ id, value: params.value, option: params });
  };

  const handleClear = () => {
    setPrevValue('');

    onChange({ id, value: '' });
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
      setPrevValue(value);
    }
  }, [value]);

  const smallLabel = useMemo(() => !!value, [value]);
  const successIcon = useMemo(() => success && !disabled && !focused, [success, disabled, focused]);
  const clearableIcon = useMemo(
    () => !isMobile() && clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const selected = useMemo(() => options.find((item) => item.value === value), [options, value]);

  const inputSelectNativeProps = {
    id,
    value,
    size,
    error,
    disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleNativeChange,
    focused,
    withLabel: !!label && smallLabel,
    options,
  };

  const inputSelectCustomProps = {
    id,
    selected,
    size,
    error,
    disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleCustomChange,
    focused,
    withLabel: !!label && smallLabel,
    options,
    valueRenderer,
    optionRenderer,
  };

  return (
    <StyledInput sWidth={width}>
      {isMobile() && <InputSelectNative {...inputSelectNativeProps} ref={inputNode} />}
      {!isMobile() && <InputSelectCustom {...inputSelectCustomProps} ref={inputNode} />}
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
      {!successIcon && !clearableIcon && (
        <StyledInputIcon
          sSize={size}
          sDisabled={disabled}
          onMouseDown={disallowBlur}
          onMouseUp={allowBlur}
        >
          <IconDropdown display="block" size={size} />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputSelect;
