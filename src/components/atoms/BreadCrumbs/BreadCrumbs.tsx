import React from 'react';

import Block from 'components/atoms/Block';
import Link from 'components/atoms/Link';
import Span from 'components/atoms/Span';

import { BreadCrumbsProps } from './types';
import { StyledBreadCrumbs, StyledBreadCrumbsItem } from './style';

const BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  const { items, title, color } = props;

  return (
    <StyledBreadCrumbs data-component="BreadCrumbs">
      {items.map((item) => (
        <StyledBreadCrumbsItem key={item.id} data-component="BreadCrumbsItem" data-id={item.id}>
          <Block size="s">
            <Link href={item.path} color={color} underline id={item.id}>
              {item.title}
            </Link>
            <Span size="xs">  /  </Span>
          </Block>
        </StyledBreadCrumbsItem>
      ))}
      {title && (
        <StyledBreadCrumbsItem data-component="BreadCrumbsTitle">
          <Block size="s">{title}</Block>
        </StyledBreadCrumbsItem>
      )}
    </StyledBreadCrumbs>
  );
};

export default BreadCrumbs;
