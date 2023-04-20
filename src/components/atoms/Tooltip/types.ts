import React from 'react';

import { Size } from 'components/types';

export type TooltipProps = Readonly<{
  size?: Size;
  children?: React.ReactNode | React.ReactNode[];
}>;
