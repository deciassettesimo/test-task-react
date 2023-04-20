import styled from 'styled-components';

import theme from './theme';

export const StyledLogo = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: ${theme.width}px;
  height: ${theme.height}px;
`;

export const StyledLogoSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  fill: ${theme.color};
`;
