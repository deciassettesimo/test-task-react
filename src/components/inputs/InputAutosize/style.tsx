import styled from 'styled-components';

import { StyledInputBaseProps } from 'components/inputs/types';
import { StyledInputElement } from 'components/inputs/style';

export const StyledInputAutosize = styled(StyledInputElement).attrs<StyledInputBaseProps>(
  (props) => ({
    spellCheck: 'false',
    autoCorrect: 'off',
    autoComplete: props.sAutoComplete ? 'on' : 'off',
  }),
)<StyledInputBaseProps>`
  appearance: none;

  &::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`;
