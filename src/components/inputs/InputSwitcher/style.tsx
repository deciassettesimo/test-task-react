import styled from 'styled-components';

import { media, mediaSizes } from 'components/constants';
import { StyledIcon } from 'components/icons/style';
import { StyledInputHtmlInput } from 'components/inputs/style';

import { StyledInputSwitcherProps } from './types';
import theme from './theme';

function getCursor(props: StyledInputSwitcherProps) {
  if (props.sDisabled) return 'not-allowed';
  if (props.sPreview) return 'initial';
  return 'pointer';
}

function getColor(props: StyledInputSwitcherProps, sHovered: boolean, sPressed: boolean) {
  const colors = props.sChecked ? theme.colors.checked : theme.colors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sPreview) return colors.normal;
  if (props.sError) return colors.error;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  return colors.normal;
}

function getPadding(props: StyledInputSwitcherProps, mediaSize: string) {
  const padding = theme.padding[mediaSize][props.sSize];
  return `${padding[0]}px ${padding[1]}px`;
}

function getFontWeight(props: StyledInputSwitcherProps) {
  return theme.fontWeight[props.sSize];
}

function getLineHeight(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.lineHeight[mediaSize][props.sSize]}px`;
}

function getFontSize(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.fontSize[mediaSize][props.sSize]}px`;
}

function getIconWidth(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.icon.width[mediaSize][props.sSize]}px`;
}

function getIconBorderRadius(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.icon.borderRadius[mediaSize][props.sSize]}px`;
}

function getIconHeight(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.icon.height[mediaSize][props.sSize]}px`;
}

function getIconBackgroundColor(
  props: StyledInputSwitcherProps,
  sHovered: boolean,
  sPressed: boolean,
) {
  const colors = props.sChecked
    ? theme.icon.backgroundColors.checked
    : theme.icon.backgroundColors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sPreview) return colors.normal;
  if (props.sError) return colors.error;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  return colors.normal;
}

function getIconInnerSize(props: StyledInputSwitcherProps, mediaSize: string) {
  return `${theme.icon.inner.size[mediaSize][props.sSize]}px`;
}

function getIconInnerColor(props: StyledInputSwitcherProps, sHovered: boolean, sPressed: boolean) {
  const colors = props.sChecked ? theme.icon.inner.colors.checked : theme.icon.inner.colors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sPreview) return colors.normal;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  if (props.sError) return colors.error;
  return colors.normal;
}

function getIconInnerBorderColor(
  props: StyledInputSwitcherProps,
  sHovered: boolean,
  sPressed: boolean,
) {
  const colors = props.sChecked
    ? theme.icon.inner.borderColors.checked
    : theme.icon.inner.borderColors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sPreview) return colors.normal;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  if (props.sError) return colors.error;
  return colors.normal;
}

function getIconInnerBackgroundColor(
  props: StyledInputSwitcherProps,
  sHovered: boolean,
  sPressed: boolean,
) {
  const colors = props.sChecked
    ? theme.icon.inner.backgroundColors.checked
    : theme.icon.inner.backgroundColors.normal;

  if (props.sDisabled) return colors.disabled;
  if (props.sPreview) return colors.normal;
  if (sPressed) return colors.pressed;
  if (sHovered) return colors.hovered;
  if (props.sFocused) return colors.focused;
  if (props.sError) return colors.error;
  return colors.normal;
}

function getLabelPadding(props: StyledInputSwitcherProps, mediaSize: string) {
  const padding = theme.label.padding[mediaSize][props.sSize];
  return `${padding[0]}px ${padding[1]}px ${padding[0]}px ${padding[2]}px`;
}

export const StyledInputSwitcherIcon = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
`;

export const StyledInputSwitcherIconInner = styled.div`
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: block;
    box-sizing: border-box;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: transparent;
    border: 4px solid;
    border-radius: 50%;
  }

  ${StyledIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledInputSwitcherLabel = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
`;

export const StyledInputSwitcher = styled.label<StyledInputSwitcherProps>`
  position: relative;
  box-sizing: border-box;
  display: ${(props) => (props.sBlock ? 'block' : 'inline-block')};
  cursor: ${(props) => getCursor(props)};
  color: ${(props) => getColor(props, false, false)};
  padding: ${(props) => getPadding(props, mediaSizes.s)};
  font-weight: ${(props) => getFontWeight(props)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};

  ${StyledInputSwitcherIcon} {
    border-radius: ${(props) => getIconBorderRadius(props, mediaSizes.s)};
    height: ${(props) => getIconHeight(props, mediaSizes.s)};
    width: ${(props) => getIconWidth(props, mediaSizes.s)};
    background: ${(props) => getIconBackgroundColor(props, false, false)};
  }

  ${StyledInputSwitcherIconInner} {
    left: ${(props) => (props.sChecked ? 'auto' : '4px')};
    right: ${(props) => (props.sChecked ? '4px' : 'auto')};
    height: ${(props) => getIconInnerSize(props, mediaSizes.s)};
    width: ${(props) => getIconInnerSize(props, mediaSizes.s)};
    color: ${(props) => getIconInnerColor(props, false, false)};
    background: ${(props) => getIconInnerBackgroundColor(props, false, false)};

    &:after {
      border-color: ${(props) => getIconInnerBorderColor(props, false, false)};
    }
  }

  ${StyledInputSwitcherLabel} {
    padding: ${(props) => getLabelPadding(props, mediaSizes.s)};
  }

  &:hover {
    color: ${(props) => getColor(props, true, false)};

    ${StyledInputSwitcherIcon} {
      background: ${(props) => getIconBackgroundColor(props, true, false)};
    }

    ${StyledInputSwitcherIconInner} {
      color: ${(props) => getIconInnerColor(props, true, false)};
      background: ${(props) => getIconInnerBackgroundColor(props, true, false)};

      &:after {
        border-color: ${(props) => getIconInnerBorderColor(props, true, false)};
      }
    }
  }

  &:active {
    color: ${(props) => getColor(props, true, true)};

    ${StyledInputSwitcherIcon} {
      background: ${(props) => getIconBackgroundColor(props, true, true)};
    }

    ${StyledInputSwitcherIconInner} {
      color: ${(props) => getIconInnerColor(props, true, true)};
      background: ${(props) => getIconInnerBackgroundColor(props, true, true)};

      &:after {
        border-color: ${(props) => getIconInnerBorderColor(props, true, true)};
      }
    }
  }

  @media (${media.tablet}) {
    padding: ${(props) => getPadding(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};

    ${StyledInputSwitcherIcon} {
      height: ${(props) => getIconHeight(props, mediaSizes.m)};
      width: ${(props) => getIconWidth(props, mediaSizes.m)};
    }

    ${StyledInputSwitcherIconInner} {
      height: ${(props) => getIconInnerSize(props, mediaSizes.m)};
      width: ${(props) => getIconInnerSize(props, mediaSizes.m)};
    }

    ${StyledInputSwitcherLabel} {
      padding: ${(props) => getLabelPadding(props, mediaSizes.m)};
    }
  }

  @media (${media.desktop}) {
    padding: ${(props) => getPadding(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};

    ${StyledInputSwitcherIcon} {
      height: ${(props) => getIconHeight(props, mediaSizes.l)};
      width: ${(props) => getIconWidth(props, mediaSizes.l)};
    }

    ${StyledInputSwitcherIconInner} {
      height: ${(props) => getIconInnerSize(props, mediaSizes.l)};
      width: ${(props) => getIconInnerSize(props, mediaSizes.l)};
    }

    ${StyledInputSwitcherLabel} {
      padding: ${(props) => getLabelPadding(props, mediaSizes.l)};
    }
  }
`;

export const StyledInputSwitcherInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const StyledInputSwitcherHtmlInput = styled(StyledInputHtmlInput).attrs({
  type: 'checkbox',
})``;
