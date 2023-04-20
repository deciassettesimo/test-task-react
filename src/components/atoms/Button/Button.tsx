import React, { useState, useEffect } from 'react';

import Loader from 'components/atoms//Loader';

import { ButtonProps } from './types';
import { StyledButton, StyledButtonInner, StyledButtonLoading } from './style';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    id,
    type = 'primary',
    size = 'm',
    width,
    display = 'inline',
    disabled = false,
    loading = false,
    rounded = false,
    onClick = () => null,
    children,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    if (!disabled && !loading) onClick({ id });
  };

  useEffect(() => {
    if ((disabled || loading) && isFocused) handleBlur();
  }, [disabled, loading]);

  return (
    <StyledButton
      data-component="Button"
      id={id}
      disabled={disabled || loading}
      sType={type}
      sSize={size}
      sWidth={width}
      sDisplay={display}
      sFocused={isFocused}
      sDisabled={disabled || loading}
      sRounded={rounded}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <StyledButtonInner sLoading={loading}>{children}</StyledButtonInner>
      {loading && (
        <StyledButtonLoading>
          <Loader type={rounded ? 'circle' : 'dots'} size={size} />
        </StyledButtonLoading>
      )}
    </StyledButton>
  );
};

export default Button;
