import { createContext } from 'react';

export const PopupContext = createContext({
  opened: false,
  opener: null,
  setOpenerNode: (node: React.RefObject<HTMLElement>) => {
    console.log(node); /* eslint-disable-line */
  },
  onClose: () => {},
  onOpen: () => {},
  closingOnOutClick: false,
  closingOnEscPress: false,
});
