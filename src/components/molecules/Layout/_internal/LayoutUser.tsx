import React from 'react';

import Span from 'components/atoms/Span';
import Link from 'components/atoms/Link';
import IconSignOut from 'components/icons/IconSignOut';
import Avatar from 'components/molecules/Avatar';

import { LayoutUserProps } from '../types';
import {
  StyledLayoutUser,
  StyledLayoutUserAvatar,
  StyledLayoutUserName,
  StyledLayoutUserSignOut,
} from '../style';

const LayoutUser: React.FC<LayoutUserProps> = (props) => {
  const { user, onSignOut, side } = props;

  return (
    <StyledLayoutUser sSide={side}>
      <StyledLayoutUserAvatar>
        <Avatar size="l" src={user.avatar} name={user.name} />
      </StyledLayoutUserAvatar>
      <StyledLayoutUserName>
        <Span fontWeight="bold" color="primary">
          {user.name}
        </Span>
      </StyledLayoutUserName>
      <StyledLayoutUserSignOut>
        <Link color="onBackground" block onClick={onSignOut} title={user.signOut}>
          <IconSignOut />
        </Link>
      </StyledLayoutUserSignOut>
    </StyledLayoutUser>
  );
};

export default LayoutUser;
