import styled from 'styled-components';

import { StyledPopupOpenerProps, StyledPopupBoxProps } from './types';
import theme from './theme';

function getOpenerDisplay(props: StyledPopupOpenerProps) {
  return theme.opener.display[props.sDisplay];
}

export const StyledPopupOpener = styled.div<StyledPopupOpenerProps>`
  box-sizing: border-box;
  display: ${(props) => getOpenerDisplay(props)};
`;

function popupBoxPositioningVertical(props: StyledPopupBoxProps) {
  if (!props.sOpenerNodeBCRect || !props.sInnerNodeBCRect) return { top: 0 };

  let top: string | number = 'auto';
  let bottom: string | number = 'auto';
  let height: string | number = 'auto';

  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  const { scrollHeight, scrollTop } = document.documentElement;
  const scrollBottom = scrollHeight - scrollTop - viewportHeight;
  const spaceTop = props.sOpenerNodeBCRect.top;
  const spaceBottom = viewportHeight - spaceTop - props.sOpenerNodeBCRect.height;
  const realSpaceTop = scrollTop + spaceTop;
  const realSpaceBottom = scrollBottom + spaceBottom;

  if (props.sPlacement === 'bottom') {
    top = props.sOpenerNodeBCRect.height;
    if (props.sInnerNodeBCRect.height > spaceBottom) {
      if (props.sInnerNodeBCRect.height > realSpaceBottom) {
        height = realSpaceBottom;
      }
      if (spaceBottom < spaceTop) {
        top = 'auto';
        height = 'auto';
        bottom = props.sOpenerNodeBCRect.height;
        if (props.sInnerNodeBCRect.height > realSpaceTop) {
          height = realSpaceTop;
        }
      }
    }
  } else if (props.sPlacement === 'top') {
    bottom = props.sOpenerNodeBCRect.height;
    if (props.sInnerNodeBCRect.height > spaceTop) {
      if (props.sInnerNodeBCRect.height > realSpaceTop) {
        height = realSpaceTop;
      }
      if (spaceTop < spaceBottom) {
        bottom = 'auto';
        height = 'auto';
        top = props.sOpenerNodeBCRect.height;
        if (props.sInnerNodeBCRect.height > realSpaceBottom) {
          height = realSpaceBottom;
        }
      }
    }
  } else if (['right', 'left'].includes(props.sPlacement)) {
    if (props.sInnerNodeBCRect.height > viewportHeight) {
      top = -spaceTop;
      bottom = -spaceBottom;
    } else if (props.sAlign === 'start') {
      top = 0;
      if (props.sInnerNodeBCRect.height > props.sOpenerNodeBCRect.height + spaceBottom) {
        top = 'auto';
        bottom = -spaceBottom;
      }
    } else if (props.sAlign === 'end') {
      bottom = 0;
      if (props.sInnerNodeBCRect.height > spaceTop + props.sOpenerNodeBCRect.height) {
        top = -spaceTop;
        bottom = 'auto';
      }
    } else if (props.sAlign === 'center') {
      const diffHeight = (props.sInnerNodeBCRect.height - props.sOpenerNodeBCRect.height) / 2;
      top = diffHeight > spaceTop ? -spaceTop : -diffHeight;
      if (
        props.sInnerNodeBCRect.height - diffHeight >
        props.sOpenerNodeBCRect.height + spaceBottom
      ) {
        top = 'auto';
        bottom = -spaceBottom;
      }
    }
  }

  if (typeof props.sHeight === 'number') {
    if (typeof height !== 'number' || props.sHeight < height) {
      height = props.sHeight;
    }
  }

  if (typeof props.sHeight === 'string') {
    if (props.sHeight.search('%')) {
      const calcHeight = (props.sOpenerNodeBCRect.height / 100) * parseInt(props.sHeight);
      if (typeof height !== 'number' || calcHeight < height) {
        height = calcHeight;
      }
    }
  }

  return { top, bottom, height };
}

function popupBoxPositioningHorizontal(props: StyledPopupBoxProps) {
  if (!props.sOpenerNodeBCRect || !props.sInnerNodeBCRect) return { top: 0 };

  let left: string | number = 'auto';
  let right: string | number = 'auto';
  let width: string | number = 'auto';

  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const { scrollWidth, scrollLeft } = document.documentElement;
  const scrollRight = scrollWidth - scrollLeft - viewportWidth;
  const spaceLeft = props.sOpenerNodeBCRect.left;
  const spaceRight = viewportWidth - spaceLeft - props.sOpenerNodeBCRect.width;
  const realSpaceLeft = scrollLeft + spaceLeft;
  const realSpaceRight = scrollRight + spaceRight;

  if (props.sPlacement === 'right') {
    left = props.sOpenerNodeBCRect.width;
    if (props.sInnerNodeBCRect.width > spaceRight) {
      if (props.sInnerNodeBCRect.width > realSpaceRight) {
        width = realSpaceRight;
      }
      if (spaceRight < spaceLeft) {
        left = 'auto';
        width = 'auto';
        right = props.sOpenerNodeBCRect.width;
        if (props.sInnerNodeBCRect.width > realSpaceLeft) {
          width = realSpaceLeft;
        }
      }
    }
  } else if (props.sPlacement === 'left') {
    right = props.sOpenerNodeBCRect.width;
    if (props.sInnerNodeBCRect.width > spaceLeft) {
      if (props.sInnerNodeBCRect.width > realSpaceLeft) {
        width = realSpaceLeft;
      }
      if (spaceLeft < spaceRight) {
        right = 'auto';
        width = 'auto';
        left = props.sOpenerNodeBCRect.width;
        if (props.sInnerNodeBCRect.width > realSpaceRight) {
          width = realSpaceRight;
        }
      }
    }
  } else if (['top', 'bottom'].includes(props.sPlacement)) {
    if (props.sInnerNodeBCRect.width > viewportWidth) {
      left = -spaceLeft;
      right = -spaceRight;
    } else if (props.sAlign === 'start') {
      left = 0;
      if (props.sInnerNodeBCRect.width > props.sOpenerNodeBCRect.width + spaceRight) {
        left = 'auto';
        right = -spaceRight;
      }
    } else if (props.sAlign === 'end') {
      right = 0;
      if (props.sInnerNodeBCRect.width > spaceLeft + props.sOpenerNodeBCRect.width) {
        left = -spaceLeft;
        right = 'auto';
      }
    } else if (props.sAlign === 'center') {
      const diffWidth = (props.sInnerNodeBCRect.width - props.sOpenerNodeBCRect.width) / 2;
      left = diffWidth > spaceLeft ? -spaceLeft : -diffWidth;
      if (props.sInnerNodeBCRect.width - diffWidth > props.sOpenerNodeBCRect.width + spaceRight) {
        left = 'auto';
        right = -spaceRight;
      }
    }
  }

  if (typeof props.sWidth === 'number') {
    if (typeof width !== 'number' || props.sWidth < width) {
      width = props.sWidth;
    }
  }

  if (typeof props.sWidth === 'string') {
    if (props.sWidth.search('%')) {
      const calcWidth = (props.sOpenerNodeBCRect.width / 100) * parseInt(props.sWidth);
      if (typeof width !== 'number' || calcWidth < width) {
        width = calcWidth;
      }
    }
  }

  return { left, right, width };
}

export const StyledPopupBox = styled.div.attrs<StyledPopupBoxProps>((props) => ({
  style: {
    ...popupBoxPositioningVertical(props),
    ...popupBoxPositioningHorizontal(props),
    zIndex: props.sZIndex,
  },
}))<StyledPopupBoxProps>`
  position: absolute;
  box-sizing: border-box;
  display: ${(props) => (props.sOpened ? 'block' : 'none')};
`;

export const StyledPopupBoxInner = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
`;
