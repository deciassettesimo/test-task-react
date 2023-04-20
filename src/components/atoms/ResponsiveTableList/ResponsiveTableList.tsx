import React from 'react';

import useWindowDimension from 'utils/useWindowDimension';
import { mediaBreakpoints } from 'components/constants';
import Table from 'components/atoms/Table';
import List from 'components/atoms/List';

import { ResponsiveTableListProps } from './types';

const ResponsiveTableList: React.FC<ResponsiveTableListProps> = (props) => {
  const {
    columns,
    items,
    rowRenderer,
    cellRenderer,
    sortable = false,
    onSortingChange,
    actions,
    tableHeadSticky = false,
    listCaptions,
    ...rest
  } = props;

  const { width: windowWidth } = useWindowDimension();

  if (windowWidth >= mediaBreakpoints.desktop) {
    return (
      <Table
        columns={columns}
        items={items}
        rowRenderer={rowRenderer}
        cellRenderer={cellRenderer}
        sortable={sortable}
        onSortingChange={onSortingChange}
        actions={actions}
        headSticky={tableHeadSticky}
        {...rest}
      />
    );
  }

  return (
    <List
      columns={columns}
      items={items}
      rowRenderer={rowRenderer}
      cellRenderer={cellRenderer}
      sortable={sortable}
      onSortingChange={onSortingChange}
      actions={actions}
      captions={listCaptions}
      {...rest}
    />
  );
};

export default ResponsiveTableList;
