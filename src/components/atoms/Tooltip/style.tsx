import styled from 'styled-components';

import theme from './theme';

export const StyledTooltip = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
`;

export const StyledTooltipIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${theme.icon.padding};
  color: ${theme.icon.colors.normal};
  transition: color 200ms ease-out;
  cursor: pointer;

  &:hover {
    color: ${theme.icon.colors.hover};
  }
`;

export const StyledTooltipBox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  min-width: 300px;
  width: 40vw;
  padding: ${theme.box.padding};
  color: ${theme.box.color};
  background: ${theme.box.backgroundColor};
  border: 1px solid ${theme.box.borderColor};
  border-radius: ${theme.box.borderRadius};
  box-shadow: ${theme.box.boxShadow};
`;

export const StyledTooltipContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledTooltipClose = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: ${theme.close.padding};
  color: ${theme.close.colors.normal};
  transition: color 200ms ease-out;

  &:hover {
    color: ${theme.close.colors.hover};
  }
`;
