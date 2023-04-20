import React, { useEffect, useContext, useRef } from 'react';

import { PopupOpenerProps } from './types';
import { PopupContext } from './context';
import { StyledPopupOpener } from './style';

const PopupOpener: React.FC<PopupOpenerProps> = (props) => {
  const { display = 'inline', children } = props;

  const openerNode = useRef(null);

  const { setOpenerNode, onOpen } = useContext(PopupContext);

  useEffect(() => {
    setOpenerNode(openerNode);
  }, [setOpenerNode, openerNode]);

  return (
    <StyledPopupOpener
      data-component="PopupOpener"
      ref={openerNode}
      sDisplay={display}
      onClick={onOpen}
    >
      {children}
    </StyledPopupOpener>
  );
};

export default PopupOpener;
