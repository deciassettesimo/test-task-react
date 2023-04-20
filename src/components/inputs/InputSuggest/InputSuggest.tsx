import React, { useState, useEffect, useRef, useMemo } from 'react';

import Popup, { Box, Opener } from 'components/atoms/Popup';
import IconActionClear from 'components/icons/IconActionClear';
import IconStatusSuccess from 'components/icons/IconStatusSuccess';
import InputOptions from 'components/inputs/InputOptions';
import { getCaretPosition } from 'components/inputs/utils';
import { formatTextValue, deformatTextValue } from 'components/inputs/InputText/utils';
import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';
import { Option } from 'components/inputs/types';

import { InputSuggestProps } from './types';
import {
  StyledInputSuggest,
  StyledInputSuggestField,
  StyledInputSuggestFieldAutosize,
} from './style';

const InputSuggest: React.FC<InputSuggestProps> = (props) => {
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
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    autosize = false,
    options = [],
    onSearch = () => null,
    optionRenderer = (params) => params?.option?.title,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [caretPosition, setCaretPosition] = useState(null);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);
  const [opened, setOpened] = useState(false);

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

  const handleSearch = (eValue: string) => {
    onSearch({ id, value: eValue || '' });
  };

  const handleClear = () => {
    const fValue = format('', maxLength);
    const dfValue = deformat(fValue);
    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
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

  const handleInputOptionsChange = (params: Option) => {
    setCaretPosition(null);

    const eValue = params.title;

    const fValue = format(eValue, maxLength);
    const dfValue = deformat(fValue);

    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue, option: params });
    handleSearch(params.title);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleInputElementFocus = () => {
    if (!focused && !disabled) {
      handleFocus();
      handleOpen();
      handleSearch(value);
    }
  };

  const handleInputElementBlur = () => {
    if (disallowBlurFlag) return;
    handleClose();
    handleBlur();
  };

  const handleInputElementChange = (
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
    handleOpen();
    handleSearch(fValue);
  };

  const handleInputElementKeyDown = () => {
    setCaretPosition(null);
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
  const successIcon = useMemo(() => success && !focused, [success, focused]);
  const clearableIcon = useMemo(
    () => clearable && !!value && focused && !disabled,
    [clearable, value, focused, disabled],
  );
  const withIcon = useMemo(() => successIcon || clearableIcon, [successIcon, clearableIcon]);
  const selected = useMemo(() => options.find((item) => item.value === value), [options, value]);

  return (
    <StyledInput sWidth={width}>
      <StyledInputSuggest>
        <Popup opened={opened}>
          <Opener display="block">
            {!autosize && (
              <StyledInputSuggestField
                ref={inputNode}
                as="input"
                id={id}
                value={formattedValue}
                maxLength={maxLength}
                disabled={disabled}
                onFocus={handleInputElementFocus}
                onBlur={handleInputElementBlur}
                onChange={handleInputElementChange}
                onKeyDown={handleInputElementKeyDown}
                sSize={size}
                sDisabled={disabled}
                sFocused={focused}
                sError={error}
                sWithLabel={!!label && smallLabel}
                sWithIcon={withIcon}
              />
            )}
            {autosize && (
              <StyledInputSuggestFieldAutosize
                ref={inputNode}
                id={id}
                value={formattedValue}
                maxLength={maxLength}
                disabled={disabled}
                onFocus={handleInputElementFocus}
                onBlur={handleInputElementBlur}
                onChange={handleInputElementChange}
                onKeyDown={handleInputElementKeyDown}
                sSize={size}
                sDisabled={disabled}
                sFocused={focused}
                sError={error}
                sWithLabel={!!label && smallLabel}
                sWithIcon={withIcon}
              />
            )}
          </Opener>
          <Box width="100%">
            {!!options?.length && (
              <InputOptions
                inputId={id}
                inputFocused={focused}
                inputOpened={opened}
                options={options}
                selected={selected?.value}
                optionRenderer={optionRenderer}
                onMouseDown={disallowBlur}
                onMouseUp={allowBlur}
                onChange={handleInputOptionsChange}
                onClose={handleClose}
              />
            )}
          </Box>
        </Popup>
      </StyledInputSuggest>
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
          <IconStatusSuccess display="block" color="success" />
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
          <IconActionClear display="block" />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputSuggest;
