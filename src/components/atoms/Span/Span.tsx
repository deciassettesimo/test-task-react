import React from 'react';

import { SpanProps } from './types';
import { StyledSpan } from './style';

const Span: React.FC<SpanProps> = (props) => {
  const { size, font, color, fontWeight, fontStyle, digital, children, ...rest } = props;

  return (
    <StyledSpan
      data-component="Span"
      {...rest}
      sSize={size}
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sDigital={digital}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
