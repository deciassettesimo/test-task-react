import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';

import { StyledIcon } from 'components/icons/style';

import { StyledButtonProps, StyledButtonInnerProps } from './types';
import theme from './theme';

function getDisplay(props: StyledButtonProps) {
  return theme.display[props.sDisplay];
}

function getWidth(props: StyledButtonProps) {
  if (typeof props.sWidth === 'number') return `${props.sWidth}px`;
  return props.sWidth || (props.sDisplay === 'block' ? '100%' : 'auto');
}

function getColor(props: StyledButtonProps, sPressed: boolean, sHovered: boolean) {
  if (props.sDisabled) return theme[props.sType].colors.disabled;
  if (sPressed) return theme[props.sType].colors.pressed;
  if (sHovered) return theme[props.sType].colors.hovered;
  if (props.sFocused) return theme[props.sType].colors.focused;
  return theme[props.sType].colors.normal;
}

function getBackgroundColor(props: StyledButtonProps, sPressed: boolean, sHovered: boolean) {
  if (props.sDisabled) return theme[props.sType].backgroundColors.disabled;
  if (sPressed) return theme[props.sType].backgroundColors.pressed;
  if (sHovered) return theme[props.sType].backgroundColors.hovered;
  if (props.sFocused) return theme[props.sType].backgroundColors.focused;
  return theme[props.sType].backgroundColors.normal;
}

function getBorderColor(props: StyledButtonProps, sPressed: boolean, sHovered: boolean) {
  if (props.sDisabled) return theme[props.sType].borderColors.disabled;
  if (sPressed) return theme[props.sType].borderColors.pressed;
  if (sHovered) return theme[props.sType].borderColors.hovered;
  if (props.sFocused) return theme[props.sType].borderColors.focused;
  return theme[props.sType].borderColors.normal;
}

function getFontSize(props: StyledButtonProps, mediaSize: string) {
  return `${theme.fontSize[mediaSize][props.sSize]}px`;
}

function getFontWeight(props: StyledButtonProps) {
  return theme.fontWeight[props.sSize];
}

function getLineHeight(props: StyledButtonProps, mediaSize: string) {
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

function getHeight(props: StyledButtonProps, mediaSize: string) {
  return `${theme.height[mediaSize][props.sSize]}px`;
}

function getBorderRadius(props: StyledButtonProps, mediaSize: string) {
  if (props.sRounded) return `${theme.borderRadius.rounded[mediaSize][props.sSize]}px`;
  return `${theme.borderRadius.normal[mediaSize][props.sSize]}px`;
}

function getPadding(props: StyledButtonProps, mediaSize: string) {
  const padding = theme.padding[mediaSize][props.sSize];
  return `${padding[0]}px ${padding[1]}px`;
}

export const StyledButton = styled.button.attrs({ type: 'button' })<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: ${(props) => getDisplay(props)};
  vertical-align: middle;
  max-width: 100%;
  font-family: ${theme.fontFamily};
  font-weight: ${(props) => getFontWeight(props)};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.32s ease-out;
  outline: 0 none;
  cursor: ${(props) => (props.sDisabled ? 'not-allowed' : 'pointer')};
  width: ${(props) => getWidth(props)};
  color: ${(props) => getColor(props, false, false)};
  background: ${(props) => getBackgroundColor(props, false, false)};
  border: 1px solid ${(props) => getBorderColor(props, false, false)};
  border-radius: ${(props) => getBorderRadius(props, mediaSizes.s)};
  height: ${(props) => getHeight(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};

  ${StyledIcon} {
    margin: 0 8px;
    top: -3px;

    :first-child {
      margin-left: -4px;
    }

    :last-child {
      margin-right: -4px;
    }
  }

  :hover {
    color: ${(props) => getColor(props, false, true)};
    background: ${(props) => getBackgroundColor(props, false, true)};
    border-color: ${(props) => getBorderColor(props, false, true)};
  }

  :active {
    color: ${(props) => getColor(props, true, true)};
    background: ${(props) => getBackgroundColor(props, true, true)};
    border-color: ${(props) => getBorderColor(props, true, true)};
  }

  @media (${media.tablet}) {
    border-radius: ${(props) => getBorderRadius(props, mediaSizes.m)};
    height: ${(props) => getHeight(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
    padding: ${(props) => getPadding(props, mediaSizes.m)};
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    border-radius: ${(props) => getBorderRadius(props, mediaSizes.l)};
    height: ${(props) => getHeight(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
    padding: ${(props) => getPadding(props, mediaSizes.l)};
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
  }
`;

export const StyledButtonInner = styled.div<StyledButtonInnerProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  opacity: ${(props) => (props.sLoading ? 0 : 1)};
`;

export const StyledButtonLoading = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
