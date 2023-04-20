import React from 'react';

import { LayoutContentProps } from './types';
import { StyledLayoutContent, StyledLayoutSection } from './style';

const LayoutContent: React.FC<LayoutContentProps> = (props) => {
  const { width, children } = props;

  return (
    <StyledLayoutContent data-component="LayoutContent">
      <StyledLayoutSection sGrow sWidth={width}>
        {children}
      </StyledLayoutSection>
    </StyledLayoutContent>
  );
};

export default LayoutContent;
