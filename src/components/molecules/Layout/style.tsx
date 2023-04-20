import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';
import { StyledTypography } from 'components/atoms/Block/style';

import {
  StyledLayoutHeaderInnerProps,
  StyledLayoutSectionProps,
  StyledLayoutUserProps,
} from './types';
import theme from './theme';

export const StyledLayout = styled(StyledTypography)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  min-height: 100%;
  min-width: 320px;
  font-family: ${theme.font};
  background: ${theme.backgroundColor};
  color: ${theme.color};
`;

export const StyledLayoutSide = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  display: block;
  z-index: 9;
  height: 100%;
  width: 0;
  background: ${theme.side.backgroundColor};
  color: ${theme.side.color};
  transition: width 0.24s ease;

  @media (${media.smallDesktop}) {
    width: ${theme.side.width.small};
  }

  @media (${media.largeDesktop}) {
    width: ${theme.side.width.large};
  }
`;

export const StyledLayoutSideInner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  min-width: ${theme.side.width.small};
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  overflow-y: auto;

  @media (${media.largeDesktop}) {
    min-width: ${theme.side.width.large};
  }
`;

export const StyledLayoutSideLogo = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledLayoutSideNavButton = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (${media.largeDesktop}) {
    display: none;
  }
`;

export const StyledLayoutSideNavContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: none;

  @media (${media.largeDesktop}) {
    display: block;
  }
`;

export const StyledLayoutMain = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  flex-grow: 1;
  background: ${theme.main.backgroundColor};
  color: ${theme.main.color};
  transition: padding 0.24s ease;
  padding-left: 0;
  padding-bottom: 16px;

  @media (${media.smallDesktop}) {
    padding-left: ${theme.side.width.small};
  }

  @media (${media.largeDesktop}) {
    padding-left: ${theme.side.width.large};
  }
`;

export const StyledLayoutHeader = styled.div`
  position: sticky;
  box-sizing: border-box;
  display: block;
  top: 0;
  z-index: 11;
  pointer-events: none;
`;

export const StyledLayoutHeaderInner = styled.div<StyledLayoutHeaderInnerProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  min-height: ${theme.header.minHeight};
  pointer-events: auto;
  background: ${theme.header.backgroundColor};
  color: ${theme.header.color};
  transform: translateY(${(props) => (props.sShow ? '0' : '-100%')});
  transition: transform 0.24s ease;
`;

export const StyledLayoutHeaderNavButton = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  display: block;
  z-index: 1;

  @media (${media.smallDesktop}) {
    display: none;
  }
`;

export const StyledLayoutHeaderNav = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  transition: padding 0.24s ease;
  padding: ${theme.header.nav.padding[mediaSizes.s]};

  @media (${media.tablet}) {
    padding: ${theme.header.nav.padding[mediaSizes.m]};
  }

  @media (${media.smallDesktop}) {
    padding: 0;
  }
`;

export const StyledLayoutHeaderContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: ${theme.header.content.color};
  background: ${theme.header.content.backgroundColor};
`;

export const StyledLayoutContent = styled.div`
  flex-grow: 1;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  background: ${theme.content.backgroundColor};
  color: ${theme.content.color};
`;

function getSectionWidth(props: StyledLayoutSectionProps) {
  if (!props.sWidth) return 'auto';
  return theme.section.width[props.sWidth];
}

function getSectionPadding(props: StyledLayoutSectionProps, mediaSize: string) {
  if (props.sSide) return theme.section.padding.side[mediaSize];
  return theme.section.padding.main[mediaSize];
}

export const StyledLayoutSection = styled.div<StyledLayoutSectionProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  flex-grow: ${(props) => (props.sGrow ? 1 : 0)};
  max-width: ${(props) => getSectionWidth(props)};
  padding: ${(props) => getSectionPadding(props, mediaSizes.s)};

  @media (${media.tablet}) {
    padding: ${(props) => getSectionPadding(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    padding: ${(props) => getSectionPadding(props, mediaSizes.l)};
  }
`;

export const StyledLayoutError = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: ${theme.error.backgroundColor};
  color: ${theme.error.color};
`;

export const StyledLayoutUserAvatar = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;

export const StyledLayoutUserName = styled.div`
  position: relative;
  box-sizing: border-box;
  display: none;
  flex-grow: 1;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledLayoutUserSignOut = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 8px;
`;

export const StyledLayoutUser = styled.div<StyledLayoutUserProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: ${(props) => (props.sSide ? 'column' : 'row')} nowrap;
  align-items: center;
  justify-content: stretch;
  width: 100%;

  & ${StyledLayoutUserName} {
    display: ${(props) => (props.sSide ? 'none' : 'block')};
  }

  @media (${media.largeDesktop}) {
    flex-flow: row nowrap;

    & ${StyledLayoutUserName} {
      display: block;
    }
  }
`;

export const StyledLayoutNavModal = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: stretch;
`;
