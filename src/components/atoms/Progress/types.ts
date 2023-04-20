import React from 'react';

export type ProgressProps = Readonly<{
  size?: number;
  pathSize?: number;
  final?: number;
  value?: number;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledProgressProps = Readonly<{
  sSize?: number;
  sPathSize?: number;
}>;

export type StyledProgressSvgProps = Readonly<{
  sSize?: number;
}>;

export type StyledProgressPathProps = Readonly<{
  sSize?: number;
  sPathSize?: number;
}>;

export type StyledProgressTrackProps = Readonly<{
  sSize?: number;
  sPathSize?: number;
  sFinal?: number;
  sValue?: number;
}>;

export type StyledProgressContentProps = Readonly<{
  sSize?: number;
  sPathSize?: number;
}>;
