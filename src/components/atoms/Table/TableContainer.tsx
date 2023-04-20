import React from 'react';

import { TableContainerProps } from './types';
import { StyledTableContainer, StyledTableContainerInner } from './style';

const TableContainer: React.FC<TableContainerProps> = (props) => {
  const { children } = props;

  return (
    <StyledTableContainer data-component="TableContainer">
      <StyledTableContainerInner>{children}</StyledTableContainerInner>
    </StyledTableContainer>
  );
};

export default TableContainer;
