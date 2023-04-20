import React from 'react';

export type SortingDirection = 1 | 0 | -1;

export type OnSortingChangeParams = Readonly<{
  sorting: {
    id: string;
    direction: SortingDirection;
  };
}>;

export type ListColumn = Readonly<{
  id: string;
  label?: string;
  sortable?: boolean;
  sorting?: SortingDirection;
}>;

export type ListItemData = Record<string, any>;

export type ListItemActions = Record<string, any>;

export type ListItem = Readonly<{
  id: string;
  data?: ListItemData;
}>;

export type ListCaptions = Readonly<{
  sorting: string;
}>;

export type ListRowRendererParams = Readonly<{
  id: string;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type ListCellRendererParams = Readonly<{
  id: string;
  data?: ListItemData;
  actions?: ListItemActions;
}>;

export type ListProps = Readonly<{
  columns: ListColumn[];
  items: ListItem[];
  captions?: ListCaptions;
  sortable?: boolean;
  rowRenderer?: (params: ListRowRendererParams) => void;
  cellRenderer?: (params: ListCellRendererParams) => void;
  actions?: ListItemActions;
  onItemClick?: (id: string) => void;
  onSortingChange?: (params: OnSortingChangeParams) => void;
}>;

export type ListItemProps = Readonly<{
  columns: ListColumn[];
  rowRenderer?: (params: ListRowRendererParams) => void;
  cellRenderer?: (params: ListCellRendererParams) => void;
  actions?: ListItemActions;
  onClick?: (id: string) => void;
}> &
  ListItem;

export type StyledListItemInnerProps = Readonly<{
  sClickable: boolean;
}>;
