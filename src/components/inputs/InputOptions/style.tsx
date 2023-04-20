import styled from 'styled-components';

import { StyledInputOptionsProps, StyledInputOptionsItemProps } from './types';
import theme from './theme';

export const StyledInputOptions = styled.div<StyledInputOptionsProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  background-color: ${theme.backgroundColor};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  overflow: hidden;
`;

export const StyledInputOptionsInner = styled.div`
  position: relative;
  box-sizing: border-box;
  max-height: 50vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }
`;

function getOptionsItemColor(props: StyledInputOptionsItemProps) {
  if (props.sSelected) {
    if (props.sActive) return theme.item.colors.selectedActive;
    return theme.item.colors.selected;
  }
  if (props.sActive) return theme.item.colors.active;
  return theme.item.colors.normal;
}

function getOptionsItemBackgroundColor(props: StyledInputOptionsItemProps) {
  if (props.sSelected) {
    if (props.sActive) return theme.item.backgroundColors.selectedActive;
    return theme.item.backgroundColors.selected;
  }
  if (props.sActive) return theme.item.backgroundColors.active;
  return theme.item.backgroundColors.normal;
}

export const StyledInputOptionsItem = styled.div<StyledInputOptionsItemProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  color: ${(props) => getOptionsItemColor(props)};
  background-color: ${(props) => getOptionsItemBackgroundColor(props)};
  padding: ${theme.item.padding};
`;
