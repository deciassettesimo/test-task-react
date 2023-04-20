import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledGridProps, StyledGridItemProps } from './types';
import theme from './theme';

function getMargin(props: StyledGridProps, mediaSize: string) {
  if (!props.sSpacing) return '0';
  return `-${theme.spacing[mediaSize][props.sSpacing]}px`;
}

function getItemPadding(props: StyledGridItemProps, mediaSize: string) {
  if (!props.sGridSpacing) return '0';
  return `${theme.spacing[mediaSize][props.sGridSpacing]}px`;
}

function getItemWidth(props: StyledGridItemProps) {
  let computedSize = props.sSize;
  if (props.sLargePhone) computedSize = props.sLargePhone;
  if (props.sTablet) computedSize = props.sTablet;
  if (props.sSmallDesktop) computedSize = props.sSmallDesktop;
  if (props.sDesktop) computedSize = props.sDesktop;
  if (props.sLargeDesktop) computedSize = props.sLargeDesktop;
  if (computedSize === 'auto') return 'auto';
  return props.sGridSize && computedSize ? `${(computedSize / props.sGridSize) * 100}%` : 'auto';
}

export const StyledGrid = styled.div<StyledGridProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row ${(props) => (props.sNoWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => theme.justifyContent[props.sJustifyContent]};
  align-items: ${(props) => theme.alignItems[props.sAlignItems]};
  flex-direction: ${(props) => theme.flexDirection[props.sFlexDirection]};
  margin: ${(props) => getMargin(props, mediaSizes.s)};

  @media (${media.tablet}) {
    margin: ${(props) => getMargin(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    margin: ${(props) => getMargin(props, mediaSizes.l)};
  }
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
  display: block;
  position: relative;
  box-sizing: border-box;
  flex-grow: ${(props) => (props.sGrow ? 1 : 'initial')};
  padding: ${(props) => getItemPadding(props, mediaSizes.s)};
  width: ${(props) =>
    getItemWidth({
      ...props,
      sLargePhone: null,
      sTablet: null,
      sSmallDesktop: null,
      sDesktop: null,
      sLargeDesktop: null,
    })};

  @media (${media.largePhone}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.m)};
    width: ${(props) =>
      getItemWidth({
        ...props,
        sTablet: null,
        sSmallDesktop: null,
        sDesktop: null,
        sLargeDesktop: null,
      })};
  }

  @media (${media.tablet}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.m)};
    width: ${(props) =>
      getItemWidth({ ...props, sSmallDesktop: null, sDesktop: null, sLargeDesktop: null })};
  }

  @media (${media.smallDesktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth({ ...props, sDesktop: null, sLargeDesktop: null })};
  }

  @media (${media.desktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth({ ...props, sLargeDesktop: null })};
  }

  @media (${media.largeDesktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth(props)};
  }
`;
