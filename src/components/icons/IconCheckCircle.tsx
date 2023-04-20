import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconCheckCircle: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <circle cx="12" cy="12" r="7" />
    </IconPrimitive>
  );
};

export default IconCheckCircle;
