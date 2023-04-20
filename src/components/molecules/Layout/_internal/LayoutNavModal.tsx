import React, { useContext } from 'react';

import Modal from 'components/atoms/Modal';
import Link from 'components/atoms/Link';
import Logo from 'components/molecules/Logo';

import { LayoutNavModalProps } from '../types';
import { LayoutContext } from '../context';
import { StyledLayoutNavModal, StyledLayoutContent, StyledLayoutSection } from '../style';

import LayoutNav from './LayoutNav';
import LayoutUser from './LayoutUser';

const LayoutNavModal: React.FC<LayoutNavModalProps> = (props) => {
  const { location, navigation, user, onSignOut } = props;

  const { pathname } = location;

  const { onNavModalClose } = useContext(LayoutContext);

  const renderModalTitle = () => {
    if (pathname !== navigation.home.path) {
      return (
        <Link
          href={navigation.home.path}
          block
          title={navigation.home.title}
          onClick={onNavModalClose}
        >
          <Logo />
        </Link>
      );
    }

    return <Logo />;
  };

  return (
    <Modal
      width="100%"
      height="100%"
      zIndex={20}
      color="onBackground"
      backgroundColor="background"
      onClose={onNavModalClose}
      font="primary"
      closingOnEscPress
      withoutSpacing
      title={<StyledLayoutSection sSide>{renderModalTitle()}</StyledLayoutSection>}
    >
      <StyledLayoutNavModal>
        <StyledLayoutContent>
          <StyledLayoutSection sGrow>
            <LayoutNav location={location} navigation={navigation} onItemClick={onNavModalClose} />
          </StyledLayoutSection>
          {user && (
            <StyledLayoutSection>
              <LayoutUser user={user} onSignOut={onSignOut} />
            </StyledLayoutSection>
          )}
        </StyledLayoutContent>
      </StyledLayoutNavModal>
    </Modal>
  );
};

export default LayoutNavModal;
