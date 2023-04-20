import React, { forwardRef } from 'react';

import { InputSelectNativeProps } from './types';
import { StyledInputSelectNative } from './style';

const InputSelectNative = forwardRef<HTMLSelectElement, InputSelectNativeProps>(
  function InputSelectNative(props, ref): JSX.Element {
    const {
      id,
      value,
      size = 'm',
      error = false,
      disabled = false,
      onFocus = () => null,
      onBlur = () => null,
      onChange = () => null,
      focused = false,
      withLabel = false,
      options,
    } = props;

    return (
      <StyledInputSelectNative
        as="select"
        ref={ref}
        id={id}
        value={value || ''}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        sSize={size}
        sDisabled={disabled}
        sFocused={focused}
        sError={error}
        sWithLabel={withLabel}
        sWithIcon
      >
        <option value="" />
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </StyledInputSelectNative>
    );
  },
);

export default InputSelectNative;
