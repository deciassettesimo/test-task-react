import React, { useState, useContext, useRef, useEffect } from 'react';

import { PopupBoxProps } from './types';
import { PopupContext } from './context';
import { StyledPopupBox, StyledPopupBoxInner } from './style';

const PopupBox: React.FC<PopupBoxProps> = (props) => {
  const { placement = 'bottom', align = 'start', width, height, zIndex = 10, children } = props;

  const [openerNodeBCRect, setOpenerNodeBCRect] = useState(null);
  const [innerNodeBCRect, setInnerNodeBCRect] = useState(null);

  const node = useRef(null);
  const innerNode = useRef(null);

  const {
    opened,
    opener: openerNode,
    onClose,
    closingOnOutClick,
    closingOnEscPress,
  } = useContext(PopupContext);

  const setOffset = () => {
    if (!openerNode?.current || !innerNode?.current) return;
    setOpenerNodeBCRect(openerNode.current.getBoundingClientRect());
    setInnerNodeBCRect(innerNode.current.getBoundingClientRect());
  };

  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (
      closingOnOutClick &&
      onClose &&
      opened &&
      !node.current?.contains(e.target) &&
      !openerNode.current?.contains(e.target)
    ) {
      e.preventDefault();
      onClose();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (closingOnEscPress && opened && onClose && e.which === 27) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setOffset);
    document.addEventListener('scroll', setOffset, true);
    document.addEventListener('click', handleClick);
    document.addEventListener('touchend', handleClick);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('resize', setOffset);
      document.removeEventListener('scroll', setOffset);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchend', handleClick);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [openerNode, opened]);

  useEffect(() => {
    if (openerNode || opened) {
      setOffset();
    }
  }, [openerNode, opened]);

  return (
    <StyledPopupBox
      data-component="PopupBox"
      ref={node}
      sOpened={opened}
      sPlacement={placement}
      sAlign={align}
      sWidth={width}
      sHeight={height}
      sZIndex={zIndex}
      sOpenerNodeBCRect={openerNodeBCRect}
      sInnerNodeBCRect={innerNodeBCRect}
    >
      <StyledPopupBoxInner ref={innerNode}>{children}</StyledPopupBoxInner>
    </StyledPopupBox>
  );
};

export default PopupBox;
