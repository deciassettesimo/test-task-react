import React from 'react';

import { SliderStepsProps } from '../types';
import SliderContext from '../context';
import { StyledSliderSteps } from '../style';

import SliderStepsItem from './SliderStepsItem';

const SliderSteps: React.FC<SliderStepsProps> = (props) => {
  const { marks, dots } = props;
  const { min, max, step } = React.useContext(SliderContext);

  const stepDots = React.useMemo(() => {
    const dotSet = new Set<number>();

    // Add marks
    marks.forEach((mark) => {
      dotSet.add(mark.value);
    });

    // Fill dots
    if (dots && step !== null) {
      let current = min;
      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }

    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);

  return (
    <StyledSliderSteps>
      {stepDots.map((dotValue) => (
        <SliderStepsItem key={dotValue} value={dotValue} />
      ))}
    </StyledSliderSteps>
  );
};

export default SliderSteps;
