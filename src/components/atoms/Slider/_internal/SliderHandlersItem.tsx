import React from 'react';

import { SliderHandlesItemProps } from '../types';
import SliderContext from '../context';
import { getPositionStyle } from '../util';
import { StyledSliderHandlesItem } from '../style';

const SliderHandlersItem = React.forwardRef(
  (props: SliderHandlesItemProps, ref: React.Ref<HTMLDivElement>) => {
    const { value, valueIndex, onStartMove, style, dragging, onOffsetChange, ...restProps } = props;
    const { min, max, disabled } = React.useContext(SliderContext);

    // ============================ Events ============================
    const onInternalStartMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (!disabled) {
        onStartMove(e, valueIndex);
      }
    };

    // =========================== Keyboard ===========================
    const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
      if (!disabled) {
        let offset: number | 'min' | 'max' = null;

        // Change the value
        switch (e.which || e.keyCode) {
          case 37: // left
            offset = -1;
            break;

          case 39: // right
            offset = 1;
            break;
        }

        if (offset !== null) {
          e.preventDefault();
          onOffsetChange(offset, valueIndex);
        }
      }
    };

    const positionStyle = React.useMemo(() => getPositionStyle(value, min, max), [value, min, max]);

    return (
      <StyledSliderHandlesItem
        ref={ref}
        sDragging={dragging}
        sDisabled={disabled}
        style={{
          ...positionStyle,
          ...style,
        }}
        onMouseDown={onInternalStartMove}
        onTouchStart={onInternalStartMove}
        onKeyDown={onKeyDown}
        tabIndex={disabled ? undefined : 0}
        role="slider"
        {...restProps}
      />
    );
  },
);

export default SliderHandlersItem;
