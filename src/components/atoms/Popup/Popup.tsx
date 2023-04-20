import React, { useState, useMemo } from 'react';

import { PopupProps } from './types';
import { PopupContext } from './context';

const Popup: React.FC<PopupProps> = (props) => {
  const {
    opened = false,
    onOpen,
    onClose,
    closingOnOutClick = false,
    closingOnEscPress = false,
    children,
  } = props;

  const [opener, setOpener] = useState(null);

  const setOpenerNode = (node: React.RefObject<HTMLElement>) => {
    setOpener(node);
  };

  const context = useMemo(
    () => ({
      opened,
      opener,
      onOpen,
      onClose,
      closingOnOutClick,
      closingOnEscPress,
      setOpenerNode,
    }),
    [opened, opener, onOpen, onClose, closingOnOutClick, closingOnEscPress],
  );

  return <PopupContext.Provider value={context}>{children}</PopupContext.Provider>;
};

export default Popup;
