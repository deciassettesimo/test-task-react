import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconPlus: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M11,17 C11,17.5523 11.4477,18 12,18 C12.5523,18 13,17.5523 13,17 L13,13 L17,13 C17.5523,13 18,12.5523 18,12 C18,11.4477 17.5523,11 17,11 L13,11 L13,7 C13,6.4477 12.5523,6 12,6 C11.4477,6 11,6.4477 11,7 L11,11 L7,11 C6.4477,11 6,11.4477 6,12 C6,12.5523 6.4477,13 7,13 L11,13 L11,17 Z" />
    </IconPrimitive>
  );
};

export default IconPlus;
