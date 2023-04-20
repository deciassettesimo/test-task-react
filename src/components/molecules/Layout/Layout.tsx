import React, { useState, useMemo } from 'react';

import { LayoutProps } from './types';
import { StyledLayout } from './style';
import { LayoutContext } from './context';

import LayoutSide from './_internal/LayoutSide';
import LayoutMain from './_internal/LayoutMain';
import LayoutNavModal from './_internal/LayoutNavModal';

const Layout: React.FC<LayoutProps> = (props) => {
  const { location, navigation, user, onSignOut, children } = props;

  const [navModalOpened, setNavModalOpened] = useState(false);

  const onNavModalOpen = () => {
    setNavModalOpened(true);
  };

  const onNavModalClose = () => {
    setNavModalOpened(false);
  };

  const navModalDisabled = useMemo(() => !navigation.items.length, [navigation.items.length]);

  const context = useMemo(
    () => ({
      home: navigation.home,
      navModalOpened,
      navModalDisabled,
      onNavModalOpen,
      onNavModalClose,
    }),
    [navModalOpened, navModalDisabled],
  );

  return (
    <StyledLayout data-component="Layout">
      <LayoutContext.Provider value={context}>
        <LayoutSide location={location} navigation={navigation} user={user} onSignOut={onSignOut} />
        <LayoutMain>{children}</LayoutMain>
        {navModalOpened && (
          <LayoutNavModal
            location={location}
            navigation={navigation}
            user={user}
            onSignOut={onSignOut}
          />
        )}
      </LayoutContext.Provider>
    </StyledLayout>
  );
};

export default Layout;
