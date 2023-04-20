import styled from 'styled-components';

import {
  StyledSliderProps,
  StyledSliderHandlesItemProps,
  StyledSliderMarksItemProps,
  StyledSliderStepsItemProps,
  StyledSliderTracksItemProps,
} from './types';
import theme from './theme';

export const StyledSlider = styled.div<StyledSliderProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${theme.size + theme.space * 2}px;
  padding: ${theme.space}px 0;
  margin-bottom: ${(props) => (props.sWithMarks ? `${theme.marks.height}px` : '0')};
  touch-action: none;
`;

export const StyledSliderRail = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${theme.size}px;
  background-color: ${theme.rail.backgroundColor};
`;

export const StyledSliderTracksItem = styled.div<StyledSliderTracksItemProps>`
  position: absolute;
  box-sizing: border-box;
  display: block;
  height: ${theme.size}px;
  background-color: ${(props) =>
    props.sDisabled
      ? theme.tracks.backgroundColors.disabled
      : theme.tracks.backgroundColors.normal};
`;

function getSliderHandlesItemBackgroundColor(
  props: StyledSliderHandlesItemProps,
  focused?: boolean,
) {
  if (props.sDisabled) return theme.handles.backgroundColors.disabled;
  if (props.sDragging) return theme.handles.backgroundColors.dragging;
  if (focused) return theme.handles.backgroundColors.focused;
  return theme.handles.backgroundColors.normal;
}

function getSliderHandlesItemBorderColor(props: StyledSliderHandlesItemProps, focused?: boolean) {
  if (props.sDisabled) return theme.handles.borderColors.disabled;
  if (props.sDragging) return theme.handles.borderColors.dragging;
  if (focused) return theme.handles.borderColors.focused;
  return theme.handles.borderColors.normal;
}

function getSliderHandlesItemBoxShadow(props: StyledSliderHandlesItemProps, focused?: boolean) {
  if (props.sDisabled) return theme.handles.boxShadow.disabled;
  if (props.sDragging) return theme.handles.boxShadow.dragging;
  if (focused) return theme.handles.boxShadow.focused;
  return theme.handles.boxShadow.normal;
}

export const StyledSliderHandlesItem = styled.div<StyledSliderHandlesItemProps>`
  position: absolute;
  box-sizing: border-box;
  display: block;
  width: ${theme.size + theme.space * 2}px;
  height: ${theme.size + theme.space * 2}px;
  margin-top: -${theme.space}px;
  border-radius: 50%;
  touch-action: pan-x;
  cursor: ${(props) => (props.sDisabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => getSliderHandlesItemBackgroundColor(props)};
  border: solid 1px ${(props) => getSliderHandlesItemBorderColor(props)};
  box-shadow: ${(props) => getSliderHandlesItemBoxShadow(props)};
  outline: none;

  &:focus,
  &:active {
    background-color: ${(props) => getSliderHandlesItemBackgroundColor(props, true)};
    border-color: ${(props) => getSliderHandlesItemBorderColor(props, true)};
    box-shadow: ${(props) => getSliderHandlesItemBoxShadow(props, true)};
  }
`;

export const StyledSliderMarks = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  height: ${theme.marks.height}px;
  line-height: ${theme.marks.height}px;
  font-size: ${theme.marks.fontSize}px;
  top: ${theme.size + theme.space * 2}px;
  left: 0;
  width: 100%;
`;

export const StyledSliderMarksItem = styled.span<StyledSliderMarksItemProps>`
  position: absolute;
  box-sizing: border-box;
  display: inline-block;
  color: ${(props) => (props.sDisabled ? theme.marks.colors.disabled : theme.marks.colors.normal)};
  text-align: center;
  vertical-align: middle;
  cursor: ${(props) => (props.sDisabled ? 'not-allowed' : 'pointer')};
`;

export const StyledSliderSteps = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 50%;
  height: ${theme.steps.size}px;
  transform: translateY(-50%);
  background: transparent;
  pointer-events: none;
`;

function getSliderStepsItemBackgroundColor(props: StyledSliderStepsItemProps) {
  if (props.sDisabled) return theme.steps.backgroundColors.disabled;
  if (props.sActive) return theme.steps.backgroundColors.active;
  return theme.steps.backgroundColors.normal;
}

function getSliderStepsItemBorderColor(props: StyledSliderStepsItemProps) {
  if (props.sDisabled) return theme.steps.borderColors.disabled;
  if (props.sActive) return theme.steps.borderColors.active;
  return theme.steps.borderColors.normal;
}

export const StyledSliderStepsItem = styled.span<StyledSliderStepsItemProps>`
  position: absolute;
  box-sizing: border-box;
  display: inline-block;
  width: ${theme.steps.size}px;
  height: ${theme.steps.size}px;
  vertical-align: middle;
  border-radius: 50%;
  background-color: ${(props) => getSliderStepsItemBackgroundColor(props)};
  border: solid 1px ${(props) => getSliderStepsItemBorderColor(props)};
`;
