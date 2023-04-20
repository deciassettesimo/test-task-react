import React from 'react';

import Block from 'components/atoms/Block';
import { H2, H3 } from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import Grid, { Item } from 'components/atoms/Grid';

import { LayoutNavProps, LayoutNavigationItem } from '../types';

const LayoutNav: React.FC<LayoutNavProps> = (props) => {
  const { location, navigation, onItemClick, side } = props;

  const { pathname } = location;

  const renderItemLink = (item: LayoutNavigationItem, side?: boolean, level?: number) => {
    let Element = Block;
    if (!level) Element = side ? H3 : H2;
    const size = side ? 's' : 'm';

    if (pathname === item.path) {
      return (
        <Element color="secondary" size={size}>
          {item.title}
        </Element>
      );
    }

    if (pathname.match(new RegExp(`^${item.path}`))) {
      return (
        <Element size={size}>
          <Link href={item.path} id={item.id} underline active onClick={onItemClick}>
            {item.title}
          </Link>
        </Element>
      );
    }

    return (
      <Element size={size}>
        <Link href={item.path} id={item.id} underline onClick={onItemClick}>
          {item.title}
        </Link>
      </Element>
    );
  };

  return (
    <Grid spacing="m" size={6}>
      {navigation.items.map((item) => (
        <Item key={item.id} size={6} tablet={side ? 6 : 3} desktop={side ? 6 : 2}>
          <Block>{renderItemLink(item, side, 0)}</Block>
          <Block padding="s">
            {item.items &&
              item.items.map((i) => (
                <Block margin="xs" key={i.id}>
                  {renderItemLink(i, side, 1)}
                </Block>
              ))}
          </Block>
        </Item>
      ))}
    </Grid>
  );
};

export default LayoutNav;
