import React, { forwardRef } from 'react';

import { TableBodyProps } from '../types';
import { StyledTableBody, StyledTableBodyInner, StyledTableBodyContent } from '../style';

import TableItem from './TableItem';

const TableBody = forwardRef<HTMLDivElement, TableBodyProps>(function TableBody(
  props,
  ref,
): JSX.Element {
  const {
    minWidth,
    items,
    columns,
    selectable,
    rowRenderer,
    cellRenderer,
    actions,
    onSelectChange,
    onItemClick,
  } = props;

  const itemProps = {
    columns,
    selectable,
    rowRenderer,
    cellRenderer,
    actions,
    onSelectChange,
    onClick: onItemClick,
  };

  return (
    <StyledTableBody data-component="TableBody" ref={ref}>
      <StyledTableBodyInner>
        <StyledTableBodyContent sMinWidth={minWidth}>
          {items.map((item, index) => (
            <TableItem key={item.id} {...item} index={index} {...itemProps} />
          ))}
        </StyledTableBodyContent>
      </StyledTableBodyInner>
    </StyledTableBody>
  );
});

export default TableBody;
