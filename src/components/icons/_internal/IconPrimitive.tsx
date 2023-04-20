import React from 'react';

import { IconPrimitiveProps } from '../types';
import { StyledIcon, StyledIconSvg } from '../style';

const IconPrimitive: React.FC<IconPrimitiveProps> = (props) => {
  const { size = 'm', display = 'inline', color, viewBox, children } = props;

  return (
    <StyledIcon data-component="Icon" sSize={size} sDisplay={display}>
      <StyledIconSvg viewBox={`0 0 ${viewBox} ${viewBox}`} focusable="false" sColor={color}>
        {children}
      </StyledIconSvg>
    </StyledIcon>
  );
};

export default IconPrimitive;
