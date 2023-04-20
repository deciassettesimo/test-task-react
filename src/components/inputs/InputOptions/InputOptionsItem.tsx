import React, { forwardRef } from 'react';

import { InputOptionsItemProps } from './types';
import { StyledInputOptionsItem } from './style';

const InputOptionsItem = forwardRef<HTMLDivElement, InputOptionsItemProps>(
  function InputSelectCustom(props, ref): JSX.Element {
    const {
      value,
      title,
      data,
      inputId,
      selected,
      active,
      renderer,
      onClick,
      onMouseEnter,
      onMouseLeave,
    } = props;

    const handleOnClick = () => {
      onClick({ value, title, data });
    };

    const handleOnMouseEnter = () => {
      onMouseEnter(value);
    };

    const handleOnMouseLeave = () => {
      onMouseLeave();
    };

    return (
      <StyledInputOptionsItem
        data-component="InputOptionsItem"
        data-input-id={inputId}
        data-input-value={value}
        ref={ref}
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        sSelected={selected}
        sActive={active}
      >
        {renderer({ id: inputId, option: { value, title, data } })}
      </StyledInputOptionsItem>
    );
  },
);

export default InputOptionsItem;
