import React from 'react';

import { LayoutMainProps } from '../types';
import { StyledLayoutMain } from '../style';

const LayoutMain: React.FC<LayoutMainProps> = (props) => {
  const { children } = props;

  return <StyledLayoutMain data-component="LayoutMain">{children}</StyledLayoutMain>;
};

export default LayoutMain;
