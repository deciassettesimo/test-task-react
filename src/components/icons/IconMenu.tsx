import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconMenu: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M2,18 L22,18 L22,20 L2,20 L2,18 Z M2,4 L22,4 L22,6 L2,6 L2,4 Z M2,11 L22,11 L22,13 L2,13 L2,11 Z" />
    </IconPrimitive>
  );
};

export default IconMenu;
