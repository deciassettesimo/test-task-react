import React from 'react';

import { SliderStepsItemProps } from '../types';
import { getPositionStyle } from '../util';
import SliderContext from '../context';
import { StyledSliderStepsItem } from '../style';

const SliderStepsItem: React.FC<SliderStepsItemProps> = (props) => {
  const { value } = props;
  const { min, max, includedStart, includedEnd, disabled } = React.useContext(SliderContext);

  const active = React.useMemo(
    () => includedStart <= value && value <= includedEnd,
    [includedStart, includedEnd, value],
  );

  // ============================ Offset ============================
  const style = React.useMemo(() => getPositionStyle(value, min, max), [value, min, max]);

  return <StyledSliderStepsItem sActive={active} sDisabled={disabled} style={style} />;
};

export default SliderStepsItem;
