import React from 'react';

import { InfoCardProps } from './types';
import { StyledInfoCard } from './style';

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { type, children } = props;

  return (
    <StyledInfoCard data-component="InfoCard" sType={type}>
      {children}
    </StyledInfoCard>
  );
};

export default InfoCard;
