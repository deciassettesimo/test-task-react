import React from 'react';

import { FormFiledProps } from './types';
import {
  StyledFormField,
  StyledFormFieldLabel,
  StyledFormFieldInput,
  StyledFormFieldDescription,
  StyledFormFieldError,
  StyledFormFieldErrorInner,
} from './style';

const FormField: React.FC<FormFiledProps> = (props) => {
  const { id, label, description, error, children } = props;

  return (
    <StyledFormField data-component="FormField">
      {label && (
        <StyledFormFieldLabel data-component="FormFieldLabel" htmlFor={id}>
          {label}
        </StyledFormFieldLabel>
      )}
      {description && (
        <StyledFormFieldDescription data-component="FormFieldDescription">
          {description}
        </StyledFormFieldDescription>
      )}
      <StyledFormFieldInput data-component="FormFieldInput">{children}</StyledFormFieldInput>
      {error && (
        <StyledFormFieldError data-component="FormFieldError">
          <StyledFormFieldErrorInner data-component="FormFieldErrorInner">
            {error}
          </StyledFormFieldErrorInner>
        </StyledFormFieldError>
      )}
    </StyledFormField>
  );
};

export default FormField;
