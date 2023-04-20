import React from 'react';

import { SliderTracksItemProps } from '../types';
import SliderContext from '../context';
import { getOffset } from '../util';
import { StyledSliderTracksItem } from '../style';

const SliderTracksItem: React.FC<SliderTracksItemProps> = (props) => {
  const { start, end, onStartMove } = props;
  const { min, max, disabled } = React.useContext(SliderContext);

  const offsetStart = getOffset(start, min, max);
  const offsetEnd = getOffset(end, min, max);

  // ============================ Events ============================
  const onInternalStartMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  };

  // ============================ Render ============================
  const positionStyle: React.CSSProperties = {};
  positionStyle.left = `${offsetStart * 100}%`;
  positionStyle.width = `${offsetEnd * 100 - offsetStart * 100}%`;

  return (
    <StyledSliderTracksItem
      sDisabled={disabled}
      style={positionStyle}
      onMouseDown={onInternalStartMove}
      onTouchStart={onInternalStartMove}
    />
  );
};

export default SliderTracksItem;
