import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconSignOut: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M14 22C14 21.447 13.553 21 13 21H6C4.897 21 4 20.103 4 19V5C4 3.897 4.897 3 6 3H13C13.553 3 14 2.553 14 2C14 1.447 13.553 1 13 1H6C3.794 1 2 2.794 2 5V19C2 21.206 3.794 23 6 23H13C13.553 23 14 22.553 14 22Z" />
      <path d="M22.923 11.618C22.872 11.495 22.799 11.384 22.706 11.292L17.707 6.29303C17.5168 6.10289 17.2697 6.00521 17.021 6H16.979C16.7303 6.00521 16.4832 6.10289 16.293 6.29303C15.902 6.68403 15.902 7.31597 16.293 7.70697L19.586 11H10C9.447 11 9 11.447 9 12C9 12.553 9.447 13 10 13H19.586L16.293 16.293C15.902 16.684 15.902 17.316 16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707L22.706 12.708C22.799 12.616 22.872 12.505 22.923 12.382C23.025 12.138 23.025 11.862 22.923 11.618Z" />
    </IconPrimitive>
  );
};

export default IconSignOut;
