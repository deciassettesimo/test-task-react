import {
  TableRowRendererParams,
  TableCellRendererParams,
  TableColumn,
  TableItem,
  TableItemActions,
  OnSortingChangeParams,
} from 'components/atoms/Table/types';
import {
  ListRowRendererParams,
  ListCellRendererParams,
  ListColumn,
  ListItem,
  ListItemActions,
  ListCaptions,
} from 'components/atoms/List/types';

export type ResponsiveTableListProps = Readonly<{
  columns: TableColumn[] | ListColumn[];
  items: TableItem[] | ListItem[];
  rowRenderer?: (params: TableRowRendererParams | ListRowRendererParams) => void;
  cellRenderer?: (params: TableCellRendererParams | ListCellRendererParams) => void;
  actions?: TableItemActions | ListItemActions;
  onItemClick?: (id: string) => void;
  sortable?: boolean;
  onSortingChange?: (params: OnSortingChangeParams) => void;
  tableHeadSticky?: boolean;
  listCaptions?: ListCaptions;
}>;
