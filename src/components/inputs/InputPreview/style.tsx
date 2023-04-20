import styled from 'styled-components';

import { StyledInputElement } from 'components/inputs/style';

import theme from './theme';

export const StyledInputPreview = styled(StyledInputElement)`
  height: auto;
  color: ${theme.color};
  background-color: ${theme.backgroundColor};
  border-color: ${theme.borderColor};
  word-break: break-word;
`;
