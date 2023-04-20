import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const IconDraggable: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <path d="M7,7 L17,7 C17.5523,7 18,7.44772 18,8 C18,8.55228 17.5523,9 17,9 L7,9 C6.44772,9 6,8.55228 6,8 C6,7.44772 6.44772,7 7,7 Z M6,12 C6,11.4477 6.44772,11 7,11 L17,11 C17.5523,11 18,11.4477 18,12 C18,12.5523 17.5523,13 17,13 L7,13 C6.44772,13 6,12.5523 6,12 Z M6,16 C6,15.4477 6.44772,15 7,15 L17,15 C17.5523,15 18,15.4477 18,16 C18,16.5523 17.5523,17 17,17 L7,17 C6.44772,17 6,16.5523 6,16 Z" />
    </IconPrimitive>
  );
};

export default IconDraggable;
