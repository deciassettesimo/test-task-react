import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import IconClose from 'components/icons/IconClose';

import { ModalProps } from './types';
import {
  StyledModal,
  StyledModalInner,
  StyledModalHeader,
  StyledModalContent,
  StyledModalTitle,
  StyledModalClose,
} from './style';

const Modal: React.FC<ModalProps> = (props) => {
  const {
    zIndex = 10,
    width,
    maxWidth,
    minWidth,
    height,
    size,
    font,
    color,
    backgroundColor,
    headerColor,
    headerBackgroundColor,
    contentColor,
    contentBackgroundColor,
    borderRadius,
    onClose,
    closingOnOutClick = false,
    closingOnEscPress = false,
    withoutSpacing = false,
    title,
    children,
  } = props;

  const innerNode = useRef(null);
  const bodyNode = document.querySelector('body');

  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (closingOnOutClick && onClose && !innerNode.current.contains(e.target)) {
      e.preventDefault();
      onClose();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (closingOnEscPress && onClose && e.which === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('touchend', handleClick, true);
    document.addEventListener('keydown', handleKeyPress);
    bodyNode.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('touchend', handleClick, true);
      document.removeEventListener('keypress', handleKeyPress);
      bodyNode.style.overflow = '';
    };
  }, []);

  return createPortal(
    <StyledModal data-component="Modal" sZIndex={zIndex}>
      <StyledModalInner
        ref={innerNode}
        sWidth={width}
        sMaxWidth={maxWidth}
        sMinWidth={minWidth}
        sHeight={height}
        sSize={size}
        sFont={font}
        sColor={color}
        sBackgroundColor={backgroundColor}
        sBorderRadius={borderRadius}
      >
        {(!!title || !!onClose) && (
          <StyledModalHeader
            sColor={headerColor}
            sBackgroundColor={headerBackgroundColor}
            sWithoutSpacing={withoutSpacing}
          >
            <StyledModalTitle>{title}</StyledModalTitle>
            {onClose && (
              <StyledModalClose onClick={onClose}>
                <IconClose display="block" />
              </StyledModalClose>
            )}
          </StyledModalHeader>
        )}
        <StyledModalContent
          sColor={contentColor}
          sBackgroundColor={contentBackgroundColor}
          sWithoutSpacing={withoutSpacing}
        >
          {children}
        </StyledModalContent>
      </StyledModalInner>
    </StyledModal>,
    bodyNode,
  );
};

export default Modal;
