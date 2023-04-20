import React from 'react';

import { TextAlign } from 'components/types';
import { InputEventParams } from 'components/inputs/types';

export type SortingDirection = 1 | 0 | -1;

export type TableColumn = Readonly<{
  id: string;
  width?: number;
  align?: TextAlign;
  label?: string;
  sortable?: boolean;
  sorting?: SortingDirection;
}>;

export type TableItemData = Record<string, any>;

export type TableItemActions = Record<string, any>;

export type TableItem = Readonly<{
  id: string;
  data?: TableItemData;
  selected?: boolean;
}>;

export type TableRowRendererParams = Readonly<{
  id: string;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type TableCellRendererParams = Readonly<{
  id: string;
  data?: TableItemData;
  actions?: TableItemActions;
}>;

export type OnSortingChangeParams = Readonly<{
  sorting: {
    id: string;
    direction: SortingDirection;
  };
}>;

export type OnSelectChangeParams = Readonly<{
  selected: string[];
}>;

export type TableProps = Readonly<{
  columns: TableColumn[];
  items: TableItem[];
  minWidth?: number;
  sortable?: boolean;
  selectable?: boolean;
  headSticky?: boolean;
  rowRenderer?: (params: TableRowRendererParams) => void;
  cellRenderer?: (params: TableCellRendererParams) => void;
  actions?: TableItemActions;
  onItemClick?: (id: string) => void;
  onSortingChange?: (params: OnSortingChangeParams) => void;
  onSelectChange?: (params: OnSelectChangeParams) => void;
}>;

export type TableBodyProps = Readonly<{
  columns: TableColumn[];
  items: TableItem[];
  minWidth?: number;
  selectable?: boolean;
  rowRenderer?: (params: TableRowRendererParams) => void;
  cellRenderer?: (params: TableCellRendererParams) => void;
  actions?: TableItemActions;
  onItemClick?: (id: string) => void;
  onSelectChange?: (params: InputEventParams) => void;
}>;

export type TableHeadProps = Readonly<{
  sticky?: boolean;
  bodyScrollWidth: number;
  columns: TableColumn[];
  minWidth?: number;
  allSelected?: boolean;
  sortable?: boolean;
  selectable?: boolean;
  onSortingChange?: (id: string) => void;
  onSelectChange?: (params: InputEventParams) => void;
}>;

export type TableItemProps = Readonly<{
  index: number;
  columns: TableColumn[];
  selectable?: boolean;
  rowRenderer?: (params: TableRowRendererParams) => void;
  cellRenderer?: (params: TableCellRendererParams) => void;
  actions?: TableItemActions;
  onClick?: (id: string) => void;
  onSelectChange?: (params: InputEventParams) => void;
}> &
  TableItem;

export type TableContainerProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledTableHeadProps = Readonly<{
  sMarginRight: number;
  sSticky: boolean;
}>;

export type StyledTableHeadContentProps = Readonly<{
  sMinWidth: number;
  sSelectable: boolean;
}>;

export type StyledTableHeadCellProps = Readonly<{
  sWidth: number;
  sAlign: TextAlign;
  sWithSorting: boolean;
  sSorted: boolean;
}>;

export type StyledTableBodyContentProps = Readonly<{
  sMinWidth: number;
}>;

export type StyledTableItemProps = Readonly<{
  sSelectable: boolean;
}>;

export type StyledTableItemRowProps = Readonly<{
  sIndex: number;
  sClickable: boolean;
}>;

export type StyledTableItemCellProps = Readonly<{
  sWidth: number;
  sAlign: TextAlign;
}>;
