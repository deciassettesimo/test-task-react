import React from 'react';

import { InputEventParams } from 'components/inputs/types';
import InputCheckbox from 'components/inputs/InputCheckbox';

import { TableItemProps } from '../types';

import {
  StyledTableItem,
  StyledTableItemSelect,
  StyledTableItemRow,
  StyledTableItemCell,
  StyledTableItemCellValue,
} from '../style';

const TableItem: React.FC<TableItemProps> = (props) => {
  const {
    id,
    selected,
    data,
    index,
    columns,
    selectable,
    rowRenderer,
    cellRenderer,
    actions,
    onClick,
    onSelectChange,
  } = props;

  const handleClick = () => {
    if (onClick) onClick(id);
  };

  const handleSelectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSelectChange = (params: InputEventParams) => {
    onSelectChange({ ...params });
  };

  const renderRow = () => (
    <StyledTableItemRow
      data-component="TableItemRow"
      sClickable={!!onClick}
      onClick={handleClick}
      sIndex={index}
    >
      {columns.map((column) => (
        <StyledTableItemCell
          data-component="TableItemCell"
          data-column-id={column.id}
          key={column.id}
          sWidth={column.width}
          sAlign={column.align || 'left'}
        >
          <StyledTableItemCellValue data-component="TableItemCellValue">
            {cellRenderer ? cellRenderer({ id: column.id, data, actions }) : data[column.id]}
          </StyledTableItemCellValue>
        </StyledTableItemCell>
      ))}
    </StyledTableItemRow>
  );

  return (
    <StyledTableItem data-component="TableItem" data-id={id} sSelectable={selectable}>
      <>
        {selectable && (
          <StyledTableItemSelect onClick={handleSelectClick}>
            <InputCheckbox id={id} size="s" value={selected} onChange={handleSelectChange} />
          </StyledTableItemSelect>
        )}
        {rowRenderer ? rowRenderer({ id, children: renderRow() }) : renderRow()}
      </>
    </StyledTableItem>
  );
};

export default TableItem;
