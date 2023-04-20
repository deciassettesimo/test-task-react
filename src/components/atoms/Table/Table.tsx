import React, { useRef, useState, useEffect, useMemo } from 'react';

import { InputEventParams } from 'components/inputs/types';

import { TableItem, TableProps } from './types';
import { StyledTable } from './style';

import TableHead from './_internal/TableHead';
import TableBody from './_internal/TableBody';

import { getAllSelected, getSelectedItemsIds } from './utils';

const Table: React.FC<TableProps> = (props) => {
  const {
    minWidth = 0,
    items,
    columns,
    sortable = false,
    selectable = false,
    headSticky = false,
    rowRenderer,
    cellRenderer,
    actions,
    onItemClick,
    onSortingChange = () => {},
    onSelectChange = () => {},
    ...rest
  } = props;

  const headNode = useRef(null);
  const bodyNode = useRef(null);

  const [bodyScrollWidth, setBodyScrollWidth] = useState(0);

  const syncScroll = () => {
    setBodyScrollWidth(bodyNode.current.offsetWidth - bodyNode.current.clientWidth);
    window.requestAnimationFrame(() => {
      if (headNode.current && bodyNode.current)
        headNode.current.scrollLeft = bodyNode.current.scrollLeft;
    });
  };

  useEffect(() => {
    bodyNode.current.addEventListener('scroll', syncScroll);
    syncScroll();

    return () => {
      if (bodyNode.current) bodyNode.current.removeEventListener('scroll', syncScroll);
    };
  });

  const handleSortingChange = (id: string) => {
    const direction = columns.find((column) => column.id === id).sorting === 1 ? -1 : 1;
    onSortingChange({ sorting: { id, direction } });
  };

  const handleSelectAll = ({ value }: InputEventParams) => {
    const selectedItems = items.map((item) => ({ ...item, selected: value })) as TableItem[];
    onSelectChange({ selected: getSelectedItemsIds(selectedItems) });
  };

  const handleSelectChange = ({ id, value }: InputEventParams) => {
    const selectedItems = items.map((item) =>
      item.id === id ? { ...item, selected: value } : item,
    ) as TableItem[];
    onSelectChange({ selected: getSelectedItemsIds(selectedItems) });
  };

  const allSelected = useMemo(() => {
    return getAllSelected(items);
  }, [items]);

  return (
    <StyledTable data-component="Table" {...rest}>
      <TableHead
        ref={headNode}
        sticky={headSticky}
        minWidth={minWidth}
        allSelected={allSelected}
        columns={columns}
        sortable={sortable}
        onSortingChange={handleSortingChange}
        selectable={selectable}
        onSelectChange={handleSelectAll}
        bodyScrollWidth={bodyScrollWidth}
      />
      <TableBody
        ref={bodyNode}
        minWidth={minWidth}
        items={items}
        columns={columns}
        rowRenderer={rowRenderer}
        cellRenderer={cellRenderer}
        actions={actions}
        onItemClick={onItemClick}
        selectable={selectable}
        onSelectChange={handleSelectChange}
      />
    </StyledTable>
  );
};

export default Table;
