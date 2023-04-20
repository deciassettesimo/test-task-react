import React, { forwardRef } from 'react';

import InputCheckbox from 'components/inputs/InputCheckbox';

import IconSorting from 'components/icons/IconSorting';
import IconSortingAsc from 'components/icons/IconSortingAsc';
import IconSortingDesc from 'components/icons/IconSortingDesc';

import { TableHeadProps } from '../types';
import {
  StyledTableHead,
  StyledTableHeadInner,
  StyledTableHeadContent,
  StyledTableHeadSelect,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableHeadCellValue,
  StyledTableHeadCellSorting,
} from '../style';

const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(function TableBody(
  props,
  ref,
): JSX.Element {
  const {
    sticky,
    minWidth,
    bodyScrollWidth,
    allSelected,
    columns,
    selectable,
    onSelectChange,
    sortable,
    onSortingChange,
  } = props;

  return (
    <StyledTableHead
      data-component="TableHead"
      ref={ref}
      sMarginRight={bodyScrollWidth}
      sSticky={sticky}
    >
      <StyledTableHeadInner>
        <StyledTableHeadContent sMinWidth={minWidth} sSelectable={selectable}>
          {selectable && (
            <StyledTableHeadSelect>
              <InputCheckbox size="s" value={allSelected} onChange={onSelectChange} />
            </StyledTableHeadSelect>
          )}
          <StyledTableHeadRow data-component="TableHeadRow">
            {columns.map((column) => (
              <StyledTableHeadCell
                key={column.id}
                data-component="TableHeadCell"
                data-column-id={column.id}
                sWidth={column.width}
                sAlign={column.align || 'left'}
                sWithSorting={sortable && column.sortable}
                sSorted={!!column.sorting}
                onClick={() => {
                  if (sortable && column.sortable && onSortingChange) onSortingChange(column.id);
                }}
              >
                <StyledTableHeadCellValue data-component="TableHeadCellValue" title={column.label}>
                  {column.label}
                </StyledTableHeadCellValue>
                {sortable && column.sortable && (
                  <StyledTableHeadCellSorting>
                    {column.sorting === 0 && <IconSorting size="s" />}
                    {column.sorting === 1 && <IconSortingAsc size="s" />}
                    {column.sorting === -1 && <IconSortingDesc size="s" />}
                  </StyledTableHeadCellSorting>
                )}
              </StyledTableHeadCell>
            ))}
          </StyledTableHeadRow>
        </StyledTableHeadContent>
      </StyledTableHeadInner>
    </StyledTableHead>
  );
});

export default TableHead;
