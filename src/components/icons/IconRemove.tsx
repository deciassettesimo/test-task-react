import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconRemove: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M17 8C17.5523 8 18 8.44772 18 9V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V9C6 8.44772 6.44772 8 7 8H17ZM16 10H8V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V10ZM10.5 3C10.5 2.44772 10.9477 2 11.5 2L12.5 2C13.0523 2 13.5 2.44772 13.5 3V4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H10.5V3Z" />
    </IconPrimitive>
  );
};

export default IconRemove;
