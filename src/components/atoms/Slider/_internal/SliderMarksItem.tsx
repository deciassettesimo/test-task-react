import React from 'react';

import { SliderMarksItemProps } from '../types';
import SliderContext from '../context';
import { getMarkPositionStyle } from '../util';
import { StyledSliderMarksItem } from '../style';

const SliderMarksItem: React.FC<SliderMarksItemProps> = (props) => {
  const { label, value, onClick } = props;

  const { min, max, disabled } = React.useContext(SliderContext);

  const positionStyle = getMarkPositionStyle(value, min, max);

  return (
    <StyledSliderMarksItem
      sDisabled={disabled}
      style={positionStyle}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onClick={() => {
        onClick(value);
      }}
    >
      {label}
    </StyledSliderMarksItem>
  );
};

export default SliderMarksItem;
