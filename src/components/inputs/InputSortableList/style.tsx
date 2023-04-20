import styled from 'styled-components';

import { StyledInputSortableListItemProps, StyledInputSortableListItemHandleProps } from './types';
import theme from './theme';

export const StyledInputSortableList = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding: ${theme.padding};
  background: ${theme.backgroundColor};
`;

export const StyledInputSortableListContainer = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 1px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const StyledInputSortableListItem = styled.div<StyledInputSortableListItemProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 1px 0;
  background: ${(props) =>
    props.sChecked ? theme.item.backgroundColors.checked : theme.item.backgroundColors.normal};
  padding: ${theme.item.padding};
  user-select: none;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const StyledInputSortableListItemHandle = styled.div<StyledInputSortableListItemHandleProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${theme.item.handle.padding};
  cursor: ${(props) => (props.sDisabled ? 'normal' : 'move')};
  opacity: ${(props) => (props.sDisabled ? 0 : 1)};
`;

export const StyledInputSortableListItemInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${theme.item.inner.padding};
`;
