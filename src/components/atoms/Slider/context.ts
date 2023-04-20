import React from 'react';

export interface SliderContextProps {
  min: number;
  max: number;
  includedStart: number;
  includedEnd: number;
  disabled?: boolean;
  step: number | null;
  range?: boolean;
}

const SliderContext = React.createContext<SliderContextProps>({
  min: 0,
  max: 0,
  step: 1,
  includedStart: 0,
  includedEnd: 0,
});

export default SliderContext;
