import { createContext } from 'react';

export const LayoutContext = createContext({
  home: null,
  navModalOpened: false,
  navModalDisabled: false,
  onNavModalOpen: () => {},
  onNavModalClose: () => {},
});
