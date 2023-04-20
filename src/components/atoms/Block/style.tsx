import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledBlockProps } from './types';
import theme from './theme';

function getFontFamily(props: StyledBlockProps) {
  if (!props.sFont) return 'inherit';
  return theme.font[props.sFont];
}

function getColor(props: StyledBlockProps) {
  if (!props.sColor) return 'inherit';
  return theme.color[props.sColor];
}

function getTextAlign(props: StyledBlockProps) {
  if (!props.sTextAlign) return 'inherit';
  return theme.textAlign[props.sTextAlign];
}

function getFontSize(props: StyledBlockProps, mediaSize: string) {
  if (!props.sSize) return 'inherit';
  return `${theme.size[mediaSize][props.sSize]}px`;
}

function getLineHeight(props: StyledBlockProps, mediaSize: string) {
  if (!props.sSize) return 'inherit';
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

function getFontWeight(props: StyledBlockProps) {
  if (!props.sFontWeight) return 'inherit';
  return theme.fontWeight[props.sFontWeight];
}

function getFontStyle(props: StyledBlockProps) {
  if (!props.sFontStyle) return 'inherit';
  return theme.fontStyle[props.sFontStyle];
}

function getMargin(props: StyledBlockProps) {
  return props.sMargin ? `${theme.margin[props.sMargin]}px 0` : '0';
}

function getPadding(props: StyledBlockProps) {
  const vPadding = props.sVPadding || props.sPadding;
  const hPadding = props.sHPadding || props.sPadding;
  return `${vPadding ? theme.padding[vPadding] : 0}px ${hPadding ? theme.padding[hPadding] : 0}px`;
}

export const StyledTypography = styled.div`
  font-family: ${getFontFamily({ sFont: 'primary' })};
  font-style: ${getFontStyle({ sFontStyle: 'normal' })};
  font-weight: ${getFontWeight({ sFontWeight: 'regular' })};
  text-align: ${getTextAlign({ sTextAlign: 'left' })};
  font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.s)};
  line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.s)};

  @media (${media.tablet}) {
    font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.m)};
    line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.l)};
    line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.l)};
  }
`;

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-family: ${(props) => getFontFamily(props)};
  color: ${(props) => getColor(props)};
  font-style: ${(props) => getFontStyle(props)};
  font-weight: ${(props) => getFontWeight(props)};
  text-align: ${(props) => getTextAlign(props)};
  margin: ${(props) => getMargin(props)};
  padding: ${(props) => getPadding(props)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  word-break: break-word;

  @media (${media.tablet}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
  }

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
