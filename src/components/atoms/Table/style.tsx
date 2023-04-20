import styled from 'styled-components';

import {
  StyledTableHeadProps,
  StyledTableHeadContentProps,
  StyledTableHeadCellProps,
  StyledTableBodyContentProps,
  StyledTableItemProps,
  StyledTableItemRowProps,
  StyledTableItemCellProps,
} from './types';
import theme from './theme';

export const StyledTableContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

export const StyledTableContainerInner = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const StyledTable = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
`;

export const StyledTableHead = styled.div<StyledTableHeadProps>`
  position: ${(props) => (props.sSticky ? 'sticky' : 'relative')};
  top: 0;
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  margin-right: ${(props) => props.sMarginRight}px;
  z-index: 1;
  border-bottom: 1px solid ${theme.head.borderColor};
`;

export const StyledTableHeadInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  min-width: 100%;
  font-size: 0;
  line-height: 0;
`;

export const StyledTableHeadContent = styled.div<StyledTableHeadContentProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  white-space: normal;
  font-size: 12px;
  line-height: 16px;
  min-width: ${(props) => props.sMinWidth}px;
  color: ${theme.head.color};
  background: ${theme.head.background};
  padding: ${(props) =>
    props.sSelectable ? theme.head.padding.selectable : theme.head.padding.normal};
`;

export const StyledTableHeadSelect = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 8px;
  width: 30px;
  overflow: hidden;
  cursor: default;
  transform: translateY(-50%);
`;

export const StyledTableHeadRow = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: ${theme.head.row.height}px;
  padding: ${theme.head.row.padding};
`;

function getTableHeadCellColor(props: StyledTableHeadCellProps) {
  if (props.sSorted) return theme.head.cell.colors.sorted;
  if (props.sWithSorting) return theme.head.cell.colors.sorting;
  return theme.head.cell.colors.normal;
}

export const StyledTableHeadCell = styled.div.attrs<StyledTableHeadCellProps>((props) => ({
  style: { width: `${props.sWidth}%` },
}))<StyledTableHeadCellProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-align: ${(props) => props.sAlign};
  padding: ${theme.head.cell.padding};
  cursor: ${(props) => (props.sWithSorting ? 'pointer' : 'inherit')};
  color: ${(props) => getTableHeadCellColor(props)};
`;

export const StyledTableHeadCellValue = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 0;
`;

export const StyledTableHeadCellSorting = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-left: 4px;
`;

export const StyledTableBody = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  overflow: auto;
`;

export const StyledTableBodyInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  min-width: 100%;
  font-size: 0;
  line-height: 0;
`;

export const StyledTableBodyContent = styled.div<StyledTableBodyContentProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  white-space: normal;
  font-size: 14px;
  line-height: 20px;
  min-width: ${(props) => props.sMinWidth}px;
`;

export const StyledTableItem = styled.div<StyledTableItemProps>`
  position: relative;
  box-sizing: border-box;
  color: ${theme.item.color};
  padding: ${(props) =>
    props.sSelectable ? theme.item.padding.selectable : theme.item.padding.normal};
`;

export const StyledTableItemSelect = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 8px;
  width: 30px;
  overflow: hidden;
  cursor: default;
  transform: translateY(-50%);
`;

export const StyledTableItemRow = styled.div<StyledTableItemRowProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: ${(props) =>
    props.sIndex % 2 === 0 ? theme.item.row.background.first : theme.item.row.background.second};
  min-height: ${theme.item.row.height}px;
  padding: ${theme.item.row.padding};
  cursor: ${(props) => (props.sClickable ? 'pointer' : 'inherit')};
  overflow: hidden;
`;

export const StyledTableItemCell = styled.div.attrs<StyledTableItemCellProps>((props) => ({
  style: { width: `${props.sWidth}%` },
}))<StyledTableItemCellProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-align: ${(props) => props.sAlign};
  padding: ${theme.item.cell.padding};
`;

export const StyledTableItemCellValue = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
