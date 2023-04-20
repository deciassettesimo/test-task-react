import React from 'react';

import { HeadingProps } from './types';
import { StyledHeader } from './style';

const H1: React.FC<HeadingProps> = (props) => {
  const { font, color, fontWeight, fontStyle, textAlign, children } = props;
  return (
    <StyledHeader
      data-component="H1"
      as="h1"
      sSize="xl"
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sTextAlign={textAlign}
    >
      {children}
    </StyledHeader>
  );
};

const H2: React.FC<HeadingProps> = (props) => {
  const { font, color, fontWeight, fontStyle, textAlign, children } = props;
  return (
    <StyledHeader
      data-component="H2"
      as="h2"
      sSize="l"
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sTextAlign={textAlign}
    >
      {children}
    </StyledHeader>
  );
};

const H3: React.FC<HeadingProps> = (props) => {
  const { font, color, fontWeight, fontStyle, textAlign, children } = props;
  return (
    <StyledHeader
      data-component="H3"
      as="h3"
      sSize="m"
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sTextAlign={textAlign}
    >
      {children}
    </StyledHeader>
  );
};

const H4: React.FC<HeadingProps> = (props) => {
  const { font, color, fontWeight, fontStyle, textAlign, children } = props;
  return (
    <StyledHeader
      data-component="H4"
      as="h4"
      sSize="s"
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sTextAlign={textAlign}
    >
      {children}
    </StyledHeader>
  );
};

const H5: React.FC<HeadingProps> = (props) => {
  const { font, color, fontWeight, fontStyle, textAlign, children } = props;
  return (
    <StyledHeader
      data-component="H5"
      as="h5"
      sSize="xs"
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sTextAlign={textAlign}
    >
      {children}
    </StyledHeader>
  );
};

export default { H1, H2, H3, H4, H5 };
