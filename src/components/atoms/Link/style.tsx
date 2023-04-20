import styled from 'styled-components';

import { StyledLinkProps } from './types';
import theme from './theme';

function getColor(props: StyledLinkProps, hover?: boolean) {
  if (props.sDisabled) {
    return theme.colors.disabled;
  }

  if (props.sActive) {
    if (hover) {
      if (!props.sColor) return theme.colors.activeHover.onBackground;
      return theme.colors.activeHover[props.sColor];
    }
    if (!props.sColor) return theme.colors.active.onBackground;
    return theme.colors.active[props.sColor];
  }

  if (hover) {
    if (!props.sColor) return theme.colors.hover.onBackground;
    return theme.colors.hover[props.sColor];
  }
  if (!props.sColor) return theme.colors.normal.onBackground;
  return theme.colors.normal[props.sColor];
}

function getUnderline(props: StyledLinkProps, hover?: boolean) {
  if (!props.sUnderline || props.sDisabled) return '';
  const color = getColor(props, hover);
  return `background: linear-gradient(to left, ${color}, ${color} 100%) repeat-x 0 100%; background-size: 100% 0.5px;`;
}

export const StyledExternalLink = styled.a<StyledLinkProps>`
  display: ${(props) => (props.sBlock ? 'block' : 'inline')};
  color: ${(props) => getColor(props)};
  transition: color 200ms ease-out;
  text-decoration: none;
  ${(props) => getUnderline(props)}
  cursor: ${(props) => (props.sDisabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${(props) => getColor(props, true)};
    ${(props) => getUnderline(props, true)}
  }
`;

export const StyledLink = styled.span<StyledLinkProps>`
  position: relative;
  box-sizing: border-box;
  display: ${(props) => (props.sBlock ? 'block' : 'inline')};

  & a {
    display: ${(props) => (props.sBlock ? 'block' : 'inline')};
    color: ${(props) => getColor(props)};
    transition: color 200ms ease-out;
    text-decoration: none;
    ${(props) => getUnderline(props)}
    cursor: ${(props) => (props.sDisabled ? 'not-allowed' : 'pointer')};

    &:hover {
      color: ${(props) => getColor(props, true)};
      ${(props) => getUnderline(props, true)}
    }
  }
`;
