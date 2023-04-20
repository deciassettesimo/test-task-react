import React from 'react';

import { SliderHandlesProps, SliderHandlesRef } from '../types';

import SliderHandlersItem from './SliderHandlersItem';

const SliderHandlers = React.forwardRef(
  (props: SliderHandlesProps, ref: React.Ref<SliderHandlesRef>) => {
    const { onStartMove, onOffsetChange, values, draggingIndex, ...restProps } = props;
    const handlesRef = React.useRef<Record<number, HTMLDivElement>>({});

    React.useImperativeHandle(ref, () => ({
      focus: (index: number) => {
        if (handlesRef.current[index]) handlesRef.current[index].focus();
      },
    }));

    return (
      <>
        {values.map((value, index) => (
          <SliderHandlersItem
            ref={(node) => {
              if (!node) {
                delete handlesRef.current[index];
              } else {
                handlesRef.current[index] = node;
              }
            }}
            dragging={draggingIndex === index}
            key={index}
            value={value}
            valueIndex={index}
            onStartMove={onStartMove}
            onOffsetChange={onOffsetChange}
            {...restProps}
          />
        ))}
      </>
    );
  },
);

export default SliderHandlers;
