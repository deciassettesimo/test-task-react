import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledIconProps, StyledIconSvgProps } from './types';
import theme from './theme';

function getDisplay(props: StyledIconProps) {
  return theme.display[props.sDisplay];
}

function getSize(props: StyledIconProps, mediaSize: string) {
  return `${theme.sizes[mediaSize][props.sSize]}px`;
}

function getColor(props: StyledIconSvgProps) {
  if (!props.sColor) return 'currentColor';
  return theme.colors[props.sColor];
}

export const StyledIcon = styled.div<StyledIconProps>`
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
  display: ${(props) => getDisplay(props)};
  height: ${(props) => getSize(props, mediaSizes.s)};
  width: ${(props) => getSize(props, mediaSizes.s)};

  @media (${media.tablet}) {
    height: ${(props) => getSize(props, mediaSizes.m)};
    width: ${(props) => getSize(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    height: ${(props) => getSize(props, mediaSizes.l)};
    width: ${(props) => getSize(props, mediaSizes.l)};
  }
`;

export const StyledIconSvg = styled.svg<StyledIconSvgProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  fill: ${(props) => getColor(props)};
  transition: fill 0.32s ease-out;
`;
