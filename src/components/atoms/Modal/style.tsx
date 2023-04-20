import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledModalProps, StyledModalInnerProps, StyledModalBlockProps } from './types';
import theme from './theme';

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${(props) => props.sZIndex};
  background: ${theme.fadeBackgroundColor};
`;

function getInnerWidth(props: StyledModalInnerProps) {
  if (typeof props.sWidth === 'number') return `${props.sWidth}px`;
  return props.sWidth || 'auto';
}

function getInnerMaxWidth(props: StyledModalInnerProps) {
  if (typeof props.sMaxWidth === 'number') return `${props.sMaxWidth}px`;
  return '100%';
}

function getInnerMinWidth(props: StyledModalInnerProps) {
  if (typeof props.sMinWidth === 'number') return `${props.sMinWidth}px`;
  return 'auto';
}

function getInnerHeight(props: StyledModalInnerProps) {
  if (typeof props.sHeight === 'number') return `${props.sHeight}px`;
  return props.sHeight || 'auto';
}

function getFontFamily(props: StyledModalInnerProps) {
  if (!props.sFont) return 'inherit';
  return theme.font[props.sFont];
}

function getFontSize(props: StyledModalInnerProps, mediaSize: string) {
  if (!props.sSize) return 'inherit';
  return `${theme.size[mediaSize][props.sSize]}px`;
}

function getLineHeight(props: StyledModalInnerProps, mediaSize: string) {
  if (!props.sSize) return 'inherit';
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

function getColor(props: StyledModalBlockProps) {
  return props.sColor ? theme.colors[props.sColor] : 'inherit';
}

function getBackgroundColor(props: StyledModalInnerProps) {
  return props.sBackgroundColor
    ? theme.backgroundColors[props.sBackgroundColor]
    : theme.backgroundColors.background;
}

function getBlockBackgroundColor(props: StyledModalBlockProps) {
  return props.sBackgroundColor
    ? theme.backgroundColors[props.sBackgroundColor]
    : theme.backgroundColors.transparent;
}

function getBorderRadius(props: StyledModalInnerProps) {
  return props.sBorderRadius || theme.inner.borderRadius;
}

export const StyledModalInner = styled.div<StyledModalInnerProps>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  width: ${(props) => getInnerWidth(props)};
  max-width: ${(props) => getInnerMaxWidth(props)};
  min-width: ${(props) => getInnerMinWidth(props)};
  height: ${(props) => getInnerHeight(props)};
  max-height: 100%;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${(props) => getBorderRadius(props)};
  font-family: ${(props) => getFontFamily(props)};
  color: ${(props) => getColor(props)};
  background: ${(props) => getBackgroundColor(props)};

  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};

  @media (${media.tablet}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }
`;

export const StyledModalHeader = styled.div<StyledModalBlockProps>`
  position: sticky;
  box-sizing: border-box;
  display: block;
  flex-shrink: 0;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props) => (props.sWithoutSpacing ? 0 : theme.header.padding)};
  z-index: 2;
  color: ${(props) => getColor(props)};
  background: ${(props) => getBlockBackgroundColor(props)};
`;

export const StyledModalTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  min-height: 24px;
`;

export const StyledModalClose = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: ${theme.close.top}px;
  right: ${theme.close.right}px;
  cursor: pointer;
`;

export const StyledModalContent = styled.div<StyledModalBlockProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  padding: ${(props) => (props.sWithoutSpacing ? 0 : theme.content.padding)};
  z-index: 1;
  color: ${(props) => getColor(props)};
  background: ${(props) => getBlockBackgroundColor(props)};
`;
