import styled from 'styled-components';

export const StyledBreadCrumbs = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledBreadCrumbsItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;
