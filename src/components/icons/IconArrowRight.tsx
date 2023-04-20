import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconArrowRight: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M10.241 17.2545C9.88861 16.8815 9.88829 16.2982 10.2403 15.9248L13.9399 12L10.2403 8.07521C9.88829 7.70175 9.88861 7.11855 10.241 6.74547C10.6233 6.3408 11.2672 6.3408 11.6495 6.74547L15.9646 11.3133C16.3287 11.6987 16.3287 12.3013 15.9646 12.6867L11.6495 17.2545C11.2672 17.6592 10.6233 17.6592 10.241 17.2545Z" />
    </IconPrimitive>
  );
};

export default IconArrowRight;
