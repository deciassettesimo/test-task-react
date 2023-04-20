import { TableItem } from './types';

export function getAllSelected(items: TableItem[]) {
  return !!items?.length && !items.filter((item) => !item.selected).length;
}

export function getSelectedItemsIds(items: TableItem[]): string[] {
  return items.filter((item) => item.selected).map((item) => item.id);
}
