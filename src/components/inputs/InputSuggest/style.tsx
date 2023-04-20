import styled from 'styled-components';

import { StyledInputElement } from 'components/inputs/style';
import InputAutosize from 'components/inputs/InputAutosize';

import { StyledInputSuggestFieldProps } from './types';

export const StyledInputSuggest = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-grow: 1;
`;

export const StyledInputSuggestField = styled(StyledInputElement)<StyledInputSuggestFieldProps>``;

export const StyledInputSuggestFieldAutosize = styled(
  InputAutosize,
)<StyledInputSuggestFieldProps>``;
