import styled from 'styled-components';

import {
  StyledProgressProps,
  StyledProgressSvgProps,
  StyledProgressPathProps,
  StyledProgressTrackProps,
  StyledProgressContentProps,
} from './types';
import theme from './theme';

function getCircleTrackStrokeDasharray(props: StyledProgressTrackProps) {
  const l = 2 * 3.14 * (props.sSize / 2 - props.sPathSize / 2);
  return `${(props.sValue / props.sFinal) * l}px ${l}px`;
}

export const StyledProgress = styled.div<StyledProgressProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: ${(props) => props.sSize}px;
  height: ${(props) => props.sSize}px;
`;

export const StyledProgressSvg = styled.svg.attrs<StyledProgressSvgProps>((props) => ({
  transform: 'rotate(-90)',
  viewBox: `0 0 ${props.sSize} ${props.sSize}`,
}))<StyledProgressSvgProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const StyledProgressPath = styled.circle.attrs<StyledProgressPathProps>((props) => ({
  cx: props.sSize / 2,
  cy: props.sSize / 2,
  r: props.sSize / 2 - props.sPathSize / 2,
  strokeLinecap: 'round',
  strokeWidth: props.sPathSize,
  fillOpacity: 0,
}))<StyledProgressPathProps>``;

export const StyledProgressRail = styled(StyledProgressPath).attrs(() => ({
  stroke: theme.railColor,
}))``;

export const StyledProgressTrack = styled(StyledProgressPath).attrs<StyledProgressTrackProps>(
  (props) => ({
    stroke: theme.trackColor,
    strokeDashoffset: 0,
    strokeDasharray: getCircleTrackStrokeDasharray(props),
  }),
)<StyledProgressTrackProps>``;

export const StyledProgressContent = styled.div<StyledProgressContentProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  border-radius: 50%;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.sSize - props.sPathSize * 4}px;
  height: ${(props) => props.sSize - props.sPathSize * 4}px;
  color: ${theme.contentColor};
`;
