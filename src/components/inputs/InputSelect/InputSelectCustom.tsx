import React, { forwardRef, useState } from 'react';

import Popup, { Box, Opener } from 'components/atoms/Popup';
import InputOptions from 'components/inputs/InputOptions';
import { Option } from 'components/inputs/types';

import { InputSelectCustomProps } from './types';
import { StyledInputSelect, StyledInputSelectCustom } from './style';

const InputSelectCustom = forwardRef<HTMLAnchorElement, InputSelectCustomProps>(
  function InputSelectCustom(props, ref): JSX.Element {
    const {
      id,
      selected,
      size = 'm',
      error = false,
      disabled = false,
      onFocus = () => null,
      onBlur = () => null,
      onChange = () => null,
      focused = false,
      withLabel = false,
      options,
      valueRenderer,
      optionRenderer,
    } = props;

    const [opened, setOpened] = useState(false);
    const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

    const handleOpen = () => {
      setOpened(true);
    };

    const handleClose = () => {
      setOpened(false);
    };

    const handleChange = (params: Option) => {
      onChange(params);
    };

    const onInputElementClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (disabled) return;
      if (opened) handleClose();
      else handleOpen();
    };

    const onInputElementFocus = () => {
      if (!focused && !disabled) onFocus();
    };

    const onInputElementBlur = () => {
      if (disallowBlurFlag) return;
      handleClose();
      onBlur();
    };

    const disallowBlur = () => {
      setDisallowBlurFlag(true);
    };

    const allowBlur = () => {
      if (disallowBlurFlag) {
        setDisallowBlurFlag(false);
        // @ts-ignore
        ref.current.focus();
      }
    };

    return (
      <StyledInputSelect>
        <Popup opened={opened}>
          <Opener display="block">
            <StyledInputSelectCustom
              as="a"
              ref={ref}
              id={id}
              onFocus={onInputElementFocus}
              onBlur={onInputElementBlur}
              onClick={onInputElementClick}
              sSize={size}
              sDisabled={disabled}
              sFocused={focused}
              sError={error}
              sWithLabel={withLabel}
              sWithIcon
            >
              {valueRenderer({ id, option: selected })}
            </StyledInputSelectCustom>
          </Opener>
          <Box width="100%">
            <InputOptions
              inputId={id}
              inputFocused={focused}
              inputOpened={opened}
              options={options}
              selected={selected?.value}
              optionRenderer={optionRenderer}
              onMouseDown={disallowBlur}
              onMouseUp={allowBlur}
              onChange={handleChange}
              onClose={handleClose}
            />
          </Box>
        </Popup>
      </StyledInputSelect>
    );
  },
);

export default InputSelectCustom;
