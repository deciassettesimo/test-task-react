import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledAvatarProps } from './types';
import theme from './theme';

function getSize(props: StyledAvatarProps, mediaSize: string) {
  return `${theme.sizes[mediaSize][props.sSize]}px`;
}

function getPadding(props: StyledAvatarProps, mediaSize: string) {
  return `${theme.padding[mediaSize][props.sSize]}px`;
}

function getBorderColor(props: StyledAvatarProps) {
  if (props.sEmpty) return theme.borderColors.empty;
  return theme.borderColors.filled;
}

function getBackgroundColor(props: StyledAvatarProps) {
  if (props.sEmpty) return theme.backgroundColors.empty;
  return theme.backgroundColors.filled;
}

function getInnerBackgroundColor(props: StyledAvatarProps) {
  if (props.sEmpty) return theme.innerBackgroundColors.empty;
  return theme.innerBackgroundColors.filled;
}

export const StyledAvatarInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

export const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  border-radius: 50%;
  border: 1px solid ${(props) => getBorderColor(props)};
  background: ${(props) => getBackgroundColor(props)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  height: ${(props) => getSize(props, mediaSizes.s)};
  width: ${(props) => getSize(props, mediaSizes.s)};

  ${StyledAvatarInner} {
    background-color: ${(props) => getInnerBackgroundColor(props)};
  }

  @media (${media.tablet}) {
    padding: ${(props) => getPadding(props, mediaSizes.m)};
    height: ${(props) => getSize(props, mediaSizes.m)};
    width: ${(props) => getSize(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    padding: ${(props) => getPadding(props, mediaSizes.l)};
    height: ${(props) => getSize(props, mediaSizes.l)};
    width: ${(props) => getSize(props, mediaSizes.l)};
  }
`;

export const StyledAvatarImage = styled.img`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const StyledAvatarName = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const StyledAvatarEmpty = styled.svg.attrs(() => ({
  viewBox: '0 0 90 90',
  focusable: 'false',
}))`
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  fill: ${theme.emptyFill};
`;
