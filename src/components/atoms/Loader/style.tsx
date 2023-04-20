import styled, { keyframes } from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledLoaderProps } from './types';
import theme from './theme';

const animateCircle = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

const animateDots1 = keyframes`from { transform: scale(0) } to { transform: scale(1) }`;
const animateDots2 = keyframes`from { transform: translate(0, 0); } to { transform: translate(200%, 0) }`;
const animateDots3 = keyframes`from { transform: scale(1) } to { transform: scale(0) }`;

function getDisplay(props: StyledLoaderProps) {
  return theme.display[props.sDisplay];
}

export function getWidth(props: StyledLoaderProps, mediaSize: string) {
  return `${theme[props.sType].width[mediaSize][props.sSize]}px`;
}

export function getHeight(props: StyledLoaderProps, mediaSize: string) {
  return `${theme[props.sType].height[mediaSize][props.sSize]}px`;
}

export function getDotsIconSize(props: StyledLoaderProps, mediaSize: string) {
  return `${theme.dots.icon.size[mediaSize][props.sSize]}px`;
}

export function getCircleIconBorderWidth(props: StyledLoaderProps, mediaSize: string) {
  return `${theme.circle.icon.borderWidth[mediaSize][props.sSize]}px`;
}

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledLoaderCircle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  height: 100%;
  width: 100%;

  & div {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border-style: solid;
    border-color: ${theme.circle.icon.colors.main};
    border-left-color: ${theme.circle.icon.colors.primary};
    border-bottom-color: ${theme.circle.icon.colors.primary};
    border-top-color: ${theme.circle.icon.colors.secondary};
    border-radius: 50%;
    animation: ${animateCircle} 1.2s linear infinite;
  }
`;

export const StyledLoaderDots = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;

  & div {
    position: absolute;
    top: 0;
    border-radius: 50%;
    background: ${theme.dots.icon.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & div:nth-child(1) {
    left: 0;
    animation: ${animateDots1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 0;
    animation: ${animateDots2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 40%;
    animation: ${animateDots2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 80%;
    animation: ${animateDots3} 0.6s infinite;
  }
`;

export const StyledLoader = styled.div<StyledLoaderProps>`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: ${(props) => getDisplay(props)};
  width: ${(props) => getWidth(props, mediaSizes.s)};
  height: ${(props) => getHeight(props, mediaSizes.s)};

  ${StyledLoaderCircle} {
    & div {
      border-width: ${(props) => getCircleIconBorderWidth(props, mediaSizes.s)} solid;
    }
  }

  ${StyledLoaderDots} {
    & div {
      width: ${(props) => getDotsIconSize(props, mediaSizes.s)};
      height: ${(props) => getDotsIconSize(props, mediaSizes.s)};
    }
  }

  @media (${media.tablet}) {
    width: ${(props) => getWidth(props, mediaSizes.m)};
    height: ${(props) => getHeight(props, mediaSizes.m)};

    ${StyledLoaderCircle} {
      & div {
        border-width: ${(props) => getCircleIconBorderWidth(props, mediaSizes.m)};
      }
    }

    ${StyledLoaderDots} {
      & div {
        width: ${(props) => getDotsIconSize(props, mediaSizes.m)};
        height: ${(props) => getDotsIconSize(props, mediaSizes.m)};
      }
    }
  }

  @media (${media.desktop}) {
    width: ${(props) => getWidth(props, mediaSizes.l)};
    height: ${(props) => getHeight(props, mediaSizes.l)};

    ${StyledLoaderCircle} {
      & div {
        border-width: ${(props) => getCircleIconBorderWidth(props, mediaSizes.l)};
      }
    }

    ${StyledLoaderDots} {
      & div {
        width: ${(props) => getDotsIconSize(props, mediaSizes.l)};
        height: ${(props) => getDotsIconSize(props, mediaSizes.l)};
      }
    }
  }
`;
