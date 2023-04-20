import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledHeadingProps } from './types';
import theme from './theme';

function getFontFamily(props: StyledHeadingProps) {
  if (!props.sFont) return 'inherit';
  return theme.font[props.sFont];
}

function getColor(props: StyledHeadingProps) {
  if (!props.sColor) return 'inherit';
  return theme.color[props.sColor];
}

function getFontWeight(props: StyledHeadingProps) {
  if (!props.sFontWeight) return 'inherit';
  return theme.fontWeight[props.sFontWeight];
}

function getFontStyle(props: StyledHeadingProps) {
  if (!props.sFontStyle) return 'inherit';
  return theme.fontStyle[props.sFontStyle];
}

function getTextAlign(props: StyledHeadingProps) {
  if (!props.sTextAlign) return 'inherit';
  return theme.textAlign[props.sTextAlign];
}

function getFontSize(props: StyledHeadingProps, mediaSize: string) {
  return `${theme.size[mediaSize][props.sSize]}px`;
}

function getLineHeight(props: StyledHeadingProps, mediaSize: string) {
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

export const StyledHeader = styled.div<StyledHeadingProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 0;
  font-family: ${(props) => getFontFamily(props)};
  color: ${(props) => getColor(props)};
  font-style: ${(props) => getFontStyle(props)};
  font-weight: ${(props) => getFontWeight(props)};
  text-align: ${(props) => getTextAlign(props)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};

  @media (${media.tablet}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
  }
`;
