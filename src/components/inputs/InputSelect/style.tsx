import styled from 'styled-components';

import { StyledInputElement } from 'components/inputs/style';

import { StyledInputSelectNativeProps, StyledInputSelectCustomProps } from './types';

export const StyledInputSelect = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
`;

export const StyledInputSelectNative = styled(StyledInputElement)<StyledInputSelectNativeProps>`
  appearance: none;
`;

export const StyledInputSelectCustom = styled(
  StyledInputElement,
).attrs<StyledInputSelectCustomProps>((props) => ({
  href: '#',
  tabIndex: props.sDisabled ? '-1' : null,
}))<StyledInputSelectCustomProps>`
  cursor: default;
  text-decoration: none;
`;
