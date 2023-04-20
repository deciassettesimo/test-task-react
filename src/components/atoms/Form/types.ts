import React from 'react';

export type FormProps = Readonly<{
  onSubmit?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type FormFiledProps = Readonly<{
  id?: string;
  label?: string;
  description?: string;
  error?: string;
  children?: React.ReactNode | React.ReactNode[];
}>;
