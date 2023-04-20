import styled from 'styled-components';

import { StyledInputCheckboxListItemProps } from './types';
import theme from './theme';

export const StyledInputCheckboxList = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
`;

export const StyledInputCheckboxListContainer = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
`;

export const StyledInputCheckboxListItem = styled.div<StyledInputCheckboxListItemProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${theme.item.padding};
  border-radius: ${theme.item.borderRadius};
  background: ${(props) =>
    props.sChecked ? theme.item.backgroundColors.checked : theme.item.backgroundColors.normal};
  border: 1px solid
    ${(props) =>
      props.sChecked ? theme.item.borderColors.checked : theme.item.borderColors.normal};
`;
