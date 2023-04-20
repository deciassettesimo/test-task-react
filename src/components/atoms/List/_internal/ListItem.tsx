import React from 'react';

import { ListItemProps } from '../types';

import {
  StyledListItem,
  StyledListItemInner,
  StyledListItemCell,
  StyledListItemCellLabel,
  StyledListItemCellValue,
} from '../style';

const ListItem: React.FC<ListItemProps> = (props) => {
  const { id, data, columns, rowRenderer, cellRenderer, actions, onClick } = props;

  const handleClick = () => {
    if (onClick) onClick(id);
  };

  const renderRow = () => (
    <StyledListItemInner onClick={handleClick} sClickable={!!onClick}>
      {columns.map((column) => (
        <StyledListItemCell
          data-component="ListItemCell"
          data-columnt-id={column.id}
          key={column.id}
        >
          {column.label && (
            <StyledListItemCellLabel data-component="ListItemCellLabel">
              {column.label}
            </StyledListItemCellLabel>
          )}
          <StyledListItemCellValue data-component="ListItemCellValue">
            {cellRenderer ? cellRenderer({ id: column.id, data, actions }) : data[column.id]}
          </StyledListItemCellValue>
        </StyledListItemCell>
      ))}
    </StyledListItemInner>
  );

  return (
    <StyledListItem data-component="ListItem" data-id={id}>
      <>{rowRenderer ? rowRenderer({ id, children: renderRow() }) : renderRow()}</>
    </StyledListItem>
  );
};

export default ListItem;
