import React, { useMemo } from 'react';

import Block from 'components/atoms/Block';
import Span from 'components/atoms/Span';
import Grid, { Item } from 'components/atoms/Grid';
import Link from 'components/atoms/Link';
import IconSorting from 'components/icons/IconSorting';
import IconSortingAsc from 'components/icons/IconSortingAsc';
import IconSortingDesc from 'components/icons/IconSortingDesc';

import { ListProps, SortingDirection } from './types';
import { StyledList, StyledListHead, StyledListBody, StyledListSorting } from './style';

import ListItem from './_internal/ListItem';

const List: React.FC<ListProps> = (props) => {
  const {
    items,
    columns,
    sortable = false,
    captions,
    rowRenderer,
    cellRenderer,
    actions,
    onItemClick,
    onSortingChange = () => {},
    ...rest
  } = props;

  const itemProps = { columns, rowRenderer, cellRenderer, actions, onClick: onItemClick };

  const handleSortingChange = (id: string, sorting: number) => {
    onSortingChange({ sorting: { id, direction: (sorting === -1 ? 1 : -1) as SortingDirection } });
  };

  const sortingItems = useMemo(() => columns.filter((item) => item.sortable), [columns]);

  return (
    <StyledList data-component="List" {...rest}>
      {sortable && (
        <StyledListHead data-component="ListHead">
          {sortable && (
            <StyledListSorting data-component="ListSorting">
              <Block size="s" color="neutral40">
                <Grid spacing="xs" alignItems="center" justifyContent="end">
                  <Item>{captions.sorting}</Item>
                  {sortingItems.map((item) => (
                    <Item key={item.id}>
                      <Link
                        onClick={() => handleSortingChange(item.id, item.sorting)}
                        active={!!item.sorting}
                      >
                        <Span>{item.label}</Span>
                        {item.sorting === 0 && <IconSorting size="s" />}
                        {item.sorting === 1 && <IconSortingAsc size="s" />}
                        {item.sorting === -1 && <IconSortingDesc size="s" />}
                      </Link>
                    </Item>
                  ))}
                </Grid>
              </Block>
            </StyledListSorting>
          )}
        </StyledListHead>
      )}
      <StyledListBody data-component="ListBody">
        <Grid size={12} spacing="s" alignItems="stretch">
          {items.map((item) => (
            <Item key={item.id} size={12} largePhone={6} tablet={4} desktop={3}>
              <ListItem {...item} {...itemProps} />
            </Item>
          ))}
        </Grid>
      </StyledListBody>
    </StyledList>
  );
};

export default List;
