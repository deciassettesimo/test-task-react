import styled, { keyframes } from 'styled-components';

import { StyledAlertsItemProps, StyledAlertsItemContentProps } from './types';
import theme from './theme';

const left = keyframes`
  0%  {
    opacity: 0;
    right: 300px;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;

const right = keyframes`
  0%  {
    opacity: 0;
    left: 300px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

const end = keyframes`
  0%  {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 0;
    margin-bottom: 0;
  }
`;

export const StyledAlertsItem = styled.div<StyledAlertsItemProps>`
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 0 16px;
  height: ${({ sHeight }) => (sHeight !== undefined ? `${sHeight}px` : 'auto')};

  &.s-alerts-item-m-left {
    right: 300px;
    animation: ${500}ms ease ${left} forwards;
  }

  &.s-alerts-item-m-right {
    left: 300px;
    animation: ${500}ms ease ${right} forwards;
  }

  &.s-alerts-item-s-removing {
    animation: ${500}ms ease ${end} forwards;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const StyledAlerts = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
`;

export const StyledAlertsContainer = styled.div`
  position: fixed;
  z-index: 9001;
`;

export const StyledAlertsContainerTopCenter = styled(StyledAlertsContainer)`
  transform: translateX(-50%);
  top: 16px;
  left: 50%;
`;

export const StyledAlertsContainerBottomCenter = styled(StyledAlertsContainer)`
  transform: translateX(-50%);
  bottom: 16px;
  left: 50%;
`;

export const StyledAlertsContainerTopLeft = styled(StyledAlertsContainer)`
  top: 16px;
  left: 16px;
`;

export const StyledAlertsContainerTopRight = styled(StyledAlertsContainer)`
  top: 16px;
  right: 16px;
`;

export const StyledAlertsContainerBottomLeft = styled(StyledAlertsContainer)`
  bottom: 16px;
  left: 16px;
`;

export const StyledAlertsContainerBottomRight = styled(StyledAlertsContainer)`
  bottom: 16px;
  right: 16px;
`;

export const StyledAlertsContainerMobile = styled(StyledAlertsContainer)`
  right: 16px;
  left: 16px;

  ${StyledAlertsItem} {
    max-width: 100%;
    width: 100%;
  }
`;

export const StyledAlertsContainerMobileTop = styled(StyledAlertsContainerMobile)`
  top: 16px;
`;

export const StyledAlertsContainerMobileBottom = styled(StyledAlertsContainerMobile)`
  bottom: 16px;
`;

function getAlertsItemColor(props: StyledAlertsItemContentProps) {
  return theme.item[props.sType].color;
}

function getAlertsItemBorderColor(props: StyledAlertsItemContentProps) {
  return theme.item[props.sType].borderColor;
}

function getAlertsItemBackgroundColor(props: StyledAlertsItemContentProps) {
  return theme.item[props.sType].backgroundColor;
}

export const StyledAlertsItemContent = styled.div<StyledAlertsItemContentProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  border-radius: 8px;
  padding: 16px 32px 16px 16px;
  color: ${(props) => getAlertsItemColor(props)};
  border: 1px solid ${(props) => getAlertsItemBorderColor(props)};
  background: ${(props) => getAlertsItemBackgroundColor(props)};
`;

export const StyledAlertsItemMessage = styled.div`
  box-sizing: border-box;
`;

export const StyledAlertsItemClose = styled.div`
  position: absolute;
  right: 0;
  top: 12px;
  box-sizing: border-box;
  padding: 4px;
  cursor: pointer;
`;
