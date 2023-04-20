import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import theme from './theme';

export const StyledForm = styled.form.attrs({
  autoComplete: 'off',
})`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledFormInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledFormField = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledFormFieldLabel = styled.label`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: ${theme.field.label.fontSize}px;
  line-height: ${theme.field.label.lineHeight}px;
  color: ${theme.field.label.color};
  padding: ${theme.field.label.padding};
`;

export const StyledFormFieldInput = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledFormFieldDescription = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: ${theme.field.description.fontSize}px;
  line-height: ${theme.field.description.lineHeight}px;
  color: ${theme.field.description.color};
  padding: ${theme.field.description.padding};
`;

export const StyledFormFieldError = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

export const StyledFormFieldErrorInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  font-size: ${theme.field.error.fontSize}px;
  line-height: ${theme.field.error.lineHeight}px;
  color: ${theme.field.error.color};
  background: ${theme.field.error.backgroundColor};
  border-radius: ${theme.field.error.borderRadius};
  margin: ${theme.field.error.margin[mediaSizes.s]};
  padding: ${theme.field.error.padding[mediaSizes.s]};

  @media (${media.desktop}) {
    margin: ${theme.field.error.margin[mediaSizes.m]};
    padding: ${theme.field.error.padding[mediaSizes.m]};
  }

  @media (${media.desktop}) {
    margin: ${theme.field.error.margin[mediaSizes.l]};
    padding: ${theme.field.error.padding[mediaSizes.l]};
  }
`;

export const StyledFormSubmitButton = styled.button.attrs({
  type: 'submit',
  tabIndex: -1,
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  border: none;
  background: transparent;
  outline: none;
  opacity: 0;
  z-index: -1;
`;
