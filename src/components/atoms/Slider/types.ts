import React from 'react';

export type OnStartMove = (e: React.MouseEvent | React.TouchEvent, valueIndex: number) => void;

export type Value = number | number[];

export type SliderProps = Readonly<{
  min?: number;
  max?: number;
  step?: number | null;
  value?: Value;
  range?: boolean;
  draggableTrack?: boolean;
  disabled?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onChange?: (value: Value) => void;
  dots?: boolean;
  marks?: Record<number, string>;
}>;

export type InternalMarkObj = Readonly<{
  value: number;
  label: string;
}>;

export type SliderMarksProps = Readonly<{
  marks?: InternalMarkObj[];
  onClick: (value: number) => void;
}>;

export type SliderMarksItemProps = Readonly<{
  label: string;
  value: number;
  onClick: (value: number) => void;
}>;

export type SliderStepsProps = Readonly<{
  marks: InternalMarkObj[];
  dots?: boolean;
}>;

export type SliderStepsItemProps = Readonly<{
  value: number;
}>;

export type SliderTracksProps = Readonly<{
  values: number[];
  onStartMove?: OnStartMove;
}>;

export type SliderTracksItemProps = Readonly<{
  start: number;
  end: number;
  onStartMove?: OnStartMove;
}>;

export type SliderHandlesProps = Readonly<{
  values: number[];
  onStartMove: OnStartMove;
  onOffsetChange: (value: number | 'min' | 'max', valueIndex: number) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  draggingIndex: number;
}>;

export type SliderHandlesRef = Readonly<{
  focus: (index: number) => void;
}>;

export type SliderHandlesItemProps = Readonly<{
  style?: React.CSSProperties;
  value: number;
  valueIndex: number;
  dragging: boolean;
  onStartMove: OnStartMove;
  onOffsetChange: (value: number | 'min' | 'max', valueIndex: number) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
}>;

export type StyledSliderProps = Readonly<{
  sDisabled?: boolean;
  sVertical?: boolean;
  sWithMarks?: boolean;
}>;

export type StyledSliderHandlesItemProps = Readonly<{
  sDisabled?: boolean;
  sDragging?: boolean;
}>;

export type StyledSliderMarksItemProps = Readonly<{
  sDisabled?: boolean;
}>;

export type StyledSliderStepsItemProps = Readonly<{
  sActive?: boolean;
  sDisabled?: boolean;
}>;

export type StyledSliderTracksItemProps = Readonly<{
  sDisabled?: boolean;
}>;
