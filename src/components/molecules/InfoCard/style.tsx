import styled from 'styled-components';

import { StyledInfoCardProps } from './types';
import theme from './theme';

export const StyledInfoCard = styled.div<StyledInfoCardProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  background: ${(props) => theme[props.sType].backgroundColor};
  color: ${(props) => theme[props.sType].color};
  padding: ${theme.padding};
  border-radius: ${theme.borderRadius};
`;

export const StyledInfoCardList = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: -1px 0;

  & ${StyledInfoCard} {
    margin: 1px 0;
    border-radius: 0;
  }

  & ${StyledInfoCard}:first-child {
    border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
  }

  & ${StyledInfoCard}:last-child {
    border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  }
`;
