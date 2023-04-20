import styled from 'styled-components';

import { StyledInputElement } from 'components/inputs/style';
import InputAutosize from 'components/inputs/InputAutosize';

import { StyledInputTextProps } from './types';

export const StyledInputText = styled(StyledInputElement)<StyledInputTextProps>``;

export const StyledInputTextAutosize = styled(InputAutosize)<StyledInputTextProps>``;
