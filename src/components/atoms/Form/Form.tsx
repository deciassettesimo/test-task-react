import React from 'react';

import { FormProps } from './types';
import { StyledForm, StyledFormInner, StyledFormSubmitButton } from './style';

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, children } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSubmit) onSubmit();
  };

  return (
    <StyledForm data-component="Form" onSubmit={handleSubmit}>
      <StyledFormInner>{children}</StyledFormInner>
      <StyledFormSubmitButton />
    </StyledForm>
  );
};

export default Form;
