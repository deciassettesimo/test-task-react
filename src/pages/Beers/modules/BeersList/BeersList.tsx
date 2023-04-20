import React from 'react';

import List from 'components/atoms/List';

import { ListProps } from './types';
import { columns } from './constants';
import cellRenderer from './cellRenderer';

const BeersList: React.FC<ListProps> = (props) => {
  const { items } = props;

  return <List columns={columns} items={items} cellRenderer={cellRenderer} />;
};

export default BeersList;
