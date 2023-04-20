import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconCheckMark: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M18.6091,6.20695 C19.0471,6.54335 19.1295,7.17113 18.7931,7.60915 L11.4674,17.1478 C10.9081,17.876 9.83165,17.9353 9.19572,17.2729 L5.27861,13.1926 C4.89614,12.7942 4.90906,12.1611 5.30747,11.7787 C5.70588,11.3962 6.33891,11.4091 6.72139,11.8075 L10.2356,15.4682 L17.2069,6.39095 C17.5433,5.95294 18.1711,5.87056 18.6091,6.20695 Z" />
    </IconPrimitive>
  );
};

export default IconCheckMark;
