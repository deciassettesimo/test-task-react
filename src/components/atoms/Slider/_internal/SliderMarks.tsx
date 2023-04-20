import React from 'react';

import { SliderMarksProps } from '../types';
import { StyledSliderMarks } from '../style';

import SliderMarksItem from './SliderMarksItem';

const SliderMarks: React.FC<SliderMarksProps> = (props) => {
  const { marks, onClick } = props;

  if (!marks.length) return null;

  return (
    <StyledSliderMarks>
      {marks.map(({ value, label }) => (
        <SliderMarksItem key={value} value={value} label={label} onClick={onClick} />
      ))}
    </StyledSliderMarks>
  );
};

export default SliderMarks;
