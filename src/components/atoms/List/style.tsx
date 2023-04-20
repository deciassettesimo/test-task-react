import styled from 'styled-components';

import { StyledListItemInnerProps } from './types';
import theme from './theme';

export const StyledList = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledListHead = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-bottom: 8px;
`;

export const StyledListBody = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
`;

export const StyledListSorting = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  min-width: 240px;
`;

export const StyledListItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 100%;

  & * {
    height: 100%;
  }
`;

export const StyledListItemInner = styled.div<StyledListItemInnerProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 100%;
  color: ${theme.item.color};
  background: ${theme.item.backgroundColor};
  border: 1px solid ${theme.item.borderColor};
  border-radius: ${theme.item.borderRadius};
  cursor: ${(props) => (props.sClickable ? 'pointer' : 'inherit')};
  padding: ${theme.item.padding};

  & * {
    height: initial;
  }
`;

export const StyledListItemCell = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: ${theme.item.cell.padding};
`;

export const StyledListItemCellLabel = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.item.cell.label.color};
`;

export const StyledListItemCellValue = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;
