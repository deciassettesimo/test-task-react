import React from 'react';

import { TextGradientProps } from './types';
import { StyledTextGradient, StyledTextGradientAnimated } from './style';

const TextGradient: React.FC<TextGradientProps> = (props) => {
  const { gradient, animate, children } = props;

  if (animate) {
    return (
      <StyledTextGradientAnimated data-component="TextGradient" sGradient={gradient}>
        {children}
      </StyledTextGradientAnimated>
    );
  }

  return (
    <StyledTextGradient data-component="TextGradient" sGradient={gradient}>
      {children}
    </StyledTextGradient>
  );
};

export default TextGradient;
