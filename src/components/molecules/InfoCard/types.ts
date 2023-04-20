import React from 'react';

export type InfoCardType = 'normal' | 'error';

export type InfoCardProps = Readonly<{
  type?: InfoCardType;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type InfoCardListProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledInfoCardProps = Readonly<{
  sType?: InfoCardType;
}>;
