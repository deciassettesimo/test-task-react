import React from 'react';

import { OnStartMove } from './types';
import { OffsetValues } from './useOffset';

function getPosition(e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) {
  const obj = 'touches' in e ? e.touches[0] : e;

  return { pageX: obj.pageX, pageY: obj.pageY };
}

export default function useDrag(
  containerRef: React.RefObject<HTMLDivElement>,
  rawValues: number[],
  min: number,
  max: number,
  formatValue: (value: number) => number,
  triggerChange: (values: number[]) => void,
  offsetValues: OffsetValues,
): [number, number, number[], OnStartMove] {
  const [draggingValue, setDraggingValue] = React.useState(null);
  const [draggingIndex, setDraggingIndex] = React.useState(-1);
  const [cacheValues, setCacheValues] = React.useState(rawValues);
  const [originValues, setOriginValues] = React.useState(rawValues);

  const mouseMoveEventRef = React.useRef<(event: MouseEvent) => void>(null);
  const mouseUpEventRef = React.useRef<(event: MouseEvent) => void>(null);

  React.useEffect(() => {
    if (draggingIndex === -1) {
      setCacheValues(rawValues);
    }
  }, [rawValues, draggingIndex]);

  // Clean up event
  React.useEffect(
    () => () => {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      // @ts-ignore
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      // @ts-ignore
      document.removeEventListener('touchend', mouseUpEventRef.current);
    },
    [],
  );

  const flushValues = (nextValues: number[], nextValue?: number) => {
    // Perf: Only update state when value changed
    if (cacheValues.some((val, i) => val !== nextValues[i])) {
      if (nextValue !== undefined) {
        setDraggingValue(nextValue);
      }
      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };

  const updateCacheValue = (valueIndex: number, offsetPercent: number) => {
    // Basic point offset

    if (valueIndex === -1) {
      // >>>> Dragging on the track
      const startValue = originValues[0];
      const endValue = originValues[originValues.length - 1];
      const maxStartOffset = min - startValue;
      const maxEndOffset = max - endValue;

      // Get valid offset
      let offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset);

      // Use first value to revert back of valid offset (like steps marks)
      const formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      const cloneCacheValues = originValues.map((val) => val + offset);
      flushValues(cloneCacheValues);
    } else {
      // >>>> Dragging on the handle
      const offsetDist = (max - min) * offsetPercent;

      // Always start with the valueIndex origin value
      const cloneValues = [...cacheValues];
      cloneValues[valueIndex] = originValues[valueIndex];

      const next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');

      flushValues(next.values, next.value);
    }
  };

  // Resolve closure
  const updateCacheValueRef = React.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;

  const onStartMove: OnStartMove = (e, valueIndex) => {
    e.stopPropagation();

    const originValue = rawValues[valueIndex];

    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);

    const { pageX: startX } = getPosition(e);

    // Moving
    const onMouseMove = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();

      const { pageX: moveX } = getPosition(event);
      const offsetX = moveX - startX;

      const { width } = containerRef.current.getBoundingClientRect();

      updateCacheValueRef.current(valueIndex, offsetX / width);
    };

    // End
    const onMouseUp = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();

      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;

      setDraggingIndex(-1);
    };

    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  };

  // Only return cache value when it mapping with rawValues
  const returnValues = React.useMemo(() => {
    const sourceValues = [...rawValues].sort((a, b) => a - b);
    const targetValues = [...cacheValues].sort((a, b) => a - b);

    return sourceValues.every((val, index) => val === targetValues[index])
      ? cacheValues
      : rawValues;
  }, [rawValues, cacheValues]);

  return [draggingIndex, draggingValue, returnValues, onStartMove];
}
