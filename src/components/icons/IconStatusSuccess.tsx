import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconStatusSuccess: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M24,12 C24,18.6274 18.6274,24 12,24 C5.37258,24 -5.32907052e-15,18.6274 -5.32907052e-15,12 C-5.32907052e-15,5.37258 5.37258,0 12,0 C18.6274,0 24,5.37258 24,12 Z M22,12 C22,6.47715 17.5228,2 12,2 C6.47715,2 2,6.47715 2,12 C2,17.5228 6.47715,22 12,22 C17.5228,22 22,17.5228 22,12 Z M16.9546,10.2829 L11.2428,15.9947 C10.8523,16.3852 10.2192,16.3852 9.82864,15.9947 L6.97278,13.1388 C6.58225,12.7483 6.58225,12.1151 6.97278,11.7246 C7.3633,11.3341 7.99647,11.3341 8.38699,11.7246 L10.5357,13.8733 L15.5404,8.86872 C15.9309,8.4782 16.564,8.4782 16.9546,8.86872 C17.3451,9.25925 17.3451,9.89241 16.9546,10.2829 Z" />
    </IconPrimitive>
  );
};

export default IconStatusSuccess;