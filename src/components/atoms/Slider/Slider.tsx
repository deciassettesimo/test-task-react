import React, { useState, useRef, useMemo, useEffect } from 'react';

import { SliderProps, SliderHandlesRef, OnStartMove } from './types';
import SliderContext from './context';
import useDrag from './useDrag';
import useOffset from './useOffset';

import SliderHandlers from './_internal/SliderHandlers';
import SliderMarks from './_internal/SliderMarks';
import SliderSteps from './_internal/SliderSteps';
import SliderTracks from './_internal/SliderTracks';

import { StyledSlider, StyledSliderRail } from './style';

const Slider: React.FC<SliderProps> = (props) => {
  const {
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    range = false,
    draggableTrack = false,
    disabled = false,
    onFocus,
    onBlur,
    onChange,
    dots,
    marks,
  } = props;

  const handlesRef = useRef<SliderHandlesRef>();
  const containerRef = useRef(null);

  // ============================ Range =============================
  const mergedMin = useMemo(() => (isFinite(min) ? min : 0), [min]);
  const mergedMax = useMemo(() => (isFinite(max) ? max : 100), [max]);

  // ============================= Step =============================
  const mergedStep = useMemo(() => (step !== null && step <= 0 ? 1 : step), [step]);

  // ============================ Marks =============================
  const markList = useMemo(() => {
    const keys = Object.keys(marks || {});

    return keys
      .map((key) => ({
        value: Number(key),
        label: marks[key],
      }))
      .sort((a, b) => a.value - b.value);
  }, [marks]);

  // ============================ Format ============================
  const [formatValue, offsetValues] = useOffset(mergedMin, mergedMax, mergedStep, markList);

  // ============================ Values ============================
  const [prevValue, setValue] = useState(value);

  const rawValues = useMemo(() => {
    const valueList =
      prevValue === null || prevValue === undefined
        ? []
        : Array.isArray(prevValue)
        ? prevValue
        : [prevValue];

    const [val0 = mergedMin] = valueList;
    let returnValues = prevValue === null ? [] : [val0];

    // Format as range
    if (range) {
      returnValues = [...valueList];

      if (prevValue === undefined) {
        returnValues = returnValues.slice(0, 2);

        while (returnValues.length < 2) {
          returnValues.push(returnValues[returnValues.length - 1] ?? mergedMin);
        }
      }
      returnValues.sort((a, b) => a - b);
    }

    // Align in range
    returnValues.forEach((val, index) => {
      returnValues[index] = formatValue(val);
    });

    return returnValues;
  }, [prevValue, range, mergedMin, formatValue]);

  // =========================== onChange ===========================
  const rawValuesRef = useRef(rawValues);
  rawValuesRef.current = rawValues;

  const getTriggerValue = (triggerValues: number[]) => (range ? triggerValues : triggerValues[0]);

  const triggerChange = (nextValues: number[]) => {
    // Order first
    const cloneNextValues = [...nextValues].sort((a, b) => a - b);

    // Trigger event if needed
    if (onChange) {
      onChange(getTriggerValue(cloneNextValues));
    }

    // We set this later since it will re-render component immediately
    setValue(cloneNextValues);
  };

  const changeToCloseValue = (newValue: number) => {
    if (!disabled) {
      let valueIndex = 0;
      let valueDist = mergedMax - mergedMin;

      rawValues.forEach((val, index) => {
        const dist = Math.abs(newValue - val);
        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      });

      // Create new values
      const cloneNextValues = [...rawValues];

      cloneNextValues[valueIndex] = newValue;

      if (range && !rawValues.length) {
        cloneNextValues.push(newValue);
      }

      triggerChange(cloneNextValues);
    }
  };

  // ============================ Click =============================
  const onSliderMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    const { width, left } = containerRef.current.getBoundingClientRect();
    const { clientX } = e;

    const nextValue = mergedMin + ((clientX - left) / width) * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  };

  // =========================== Keyboard ===========================
  const [keyboardValue, setKeyboardValue] = useState<number>(null);

  const onHandleOffsetChange = (offset: number | 'min' | 'max', valueIndex: number) => {
    if (!disabled) {
      const next = offsetValues(rawValues, offset, valueIndex);

      triggerChange(next.values);

      setKeyboardValue(next.value);
    }
  };

  useEffect(() => {
    if (keyboardValue !== null) {
      const valueIndex = rawValues.indexOf(keyboardValue);
      if (valueIndex >= 0) {
        handlesRef.current.focus(valueIndex);
      }
    }

    setKeyboardValue(null);
  }, [keyboardValue]);

  // ============================= Drag =============================
  const mergedDraggableTrack = useMemo(() => {
    if (draggableTrack && mergedStep === null) return false;
    return draggableTrack;
  }, [draggableTrack, mergedStep]);

  const [draggingIndex, draggingValue, cacheValues, onStartDrag] = useDrag(
    containerRef,
    rawValues,
    mergedMin,
    mergedMax,
    formatValue,
    triggerChange,
    offsetValues,
  );

  const onStartMove: OnStartMove = (e, valueIndex) => {
    onStartDrag(e, valueIndex);
  };

  useEffect(() => {
    if (value !== prevValue) setValue(value);
  }, [value]);

  // Auto focus for updated handle
  const dragging = draggingIndex !== -1;

  useEffect(() => {
    if (!dragging) {
      const valueIndex = rawValues.lastIndexOf(draggingValue);
      handlesRef.current.focus(valueIndex);
    }
  }, [dragging]);

  const sortedCacheValues = useMemo(() => [...cacheValues].sort((a, b) => a - b), [cacheValues]);

  const [includedStart, includedEnd] = useMemo(() => {
    if (!range) {
      return [mergedMin, sortedCacheValues[0]];
    }

    return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
  }, [sortedCacheValues, range, mergedMin]);

  const context = useMemo(
    () => ({
      min: mergedMin,
      max: mergedMax,
      disabled,
      step: mergedStep,
      includedStart,
      includedEnd,
      range,
    }),
    [mergedMin, mergedMax, disabled, mergedStep, includedStart, includedEnd, range],
  );

  return (
    <SliderContext.Provider value={context}>
      <StyledSlider
        data-component="Slider"
        ref={containerRef}
        onMouseDown={onSliderMouseDown}
        sDisabled={disabled}
        sWithMarks={!!markList.length}
      >
        <StyledSliderRail />

        <SliderTracks
          values={sortedCacheValues}
          onStartMove={mergedDraggableTrack ? onStartMove : null}
        />

        <SliderSteps marks={markList} dots={dots} />

        <SliderHandlers
          ref={handlesRef}
          values={cacheValues}
          draggingIndex={draggingIndex}
          onStartMove={onStartMove}
          onOffsetChange={onHandleOffsetChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <SliderMarks marks={markList} onClick={changeToCloseValue} />
      </StyledSlider>
    </SliderContext.Provider>
  );
};

export default Slider;
