import React from 'react';

import { InfoCardListProps } from './types';
import { StyledInfoCardList } from './style';

const InfoCardList: React.FC<InfoCardListProps> = (props) => {
  const { children } = props;

  return <StyledInfoCardList data-component="InfoCardList">{children}</StyledInfoCardList>;
};

export default InfoCardList;
