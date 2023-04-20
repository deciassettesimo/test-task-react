import React, { useContext } from 'react';

import Link from 'components/atoms/Link';
import IconMenu from 'components/icons/IconMenu';
import Logo from 'components/molecules/Logo';

import { LayoutSideProps } from '../types';
import { LayoutContext } from '../context';
import {
  StyledLayoutSide,
  StyledLayoutSideInner,
  StyledLayoutSection,
  StyledLayoutSideLogo,
  StyledLayoutSideNavButton,
  StyledLayoutSideNavContent,
} from '../style';

import LayoutNav from './LayoutNav';
import LayoutUser from './LayoutUser';

const LayoutSide: React.FC<LayoutSideProps> = (props) => {
  const { location, navigation, user, onSignOut } = props;

  const { pathname } = location;

  const { navModalDisabled, onNavModalOpen } = useContext(LayoutContext);

  return (
    <StyledLayoutSide data-component="LayoutSide">
      <StyledLayoutSideInner>
        <StyledLayoutSection sSide>
          <StyledLayoutSideLogo>
            {pathname !== navigation.home.path && (
              <Link href={navigation.home.path} block title={navigation.home.title}>
                <Logo />
              </Link>
            )}
            {pathname === navigation.home.path && <Logo />}
          </StyledLayoutSideLogo>
        </StyledLayoutSection>
        <StyledLayoutSection sSide sGrow>
          {!navModalDisabled && (
            <>
              <StyledLayoutSideNavButton>
                <Link color="onBackground" block onClick={onNavModalOpen}>
                  <IconMenu display="block" />
                </Link>
              </StyledLayoutSideNavButton>
              <StyledLayoutSideNavContent>
                <LayoutNav location={location} navigation={navigation} side />
              </StyledLayoutSideNavContent>
            </>
          )}
        </StyledLayoutSection>
        {user && (
          <StyledLayoutSection sSide>
            <LayoutUser user={user} onSignOut={onSignOut} side />
          </StyledLayoutSection>
        )}
      </StyledLayoutSideInner>
    </StyledLayoutSide>
  );
};

export default LayoutSide;
