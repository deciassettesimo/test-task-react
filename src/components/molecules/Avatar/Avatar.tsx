import React, { useMemo } from 'react';

import Block from 'components/atoms/Block';

import { AvatarProps } from './types';
import {
  StyledAvatar,
  StyledAvatarInner,
  StyledAvatarImage,
  StyledAvatarName,
  StyledAvatarEmpty,
} from './style';

const Avatar: React.FC<AvatarProps> = (props) => {
  const { size = 'm', src, name } = props;

  const initials = useMemo(
    () =>
      name
        ?.split(' ')
        .map((word) => word[0])
        .join(''),
    [name],
  );

  return (
    <StyledAvatar sSize={size} sEmpty={!src} title={name}>
      <StyledAvatarInner>
        {src && <StyledAvatarImage src={src} />}
        {!src && name && (
          <StyledAvatarName>
            <Block size={size} color="primary">
              {initials}
            </Block>
          </StyledAvatarName>
        )}
        {!src && !name && (
          <StyledAvatarEmpty>
            <path d="M0,0 L90,0 L90,90 L0,90 L0,0 Z M45,13.4569 C36.7812,13.4569 30.1179,20.1221 30.1179,28.341 C30.1179,36.5618 36.7812,43.225 45,43.225 C53.2228,43.225 59.886,36.5618 59.886,28.341 C59.886,20.1221 53.2228,13.4569 45,13.4569 Z M44.9901,78.2331 C53.1931,78.2331 60.7063,75.2465 66.4978,70.3009 C67.9111,69.0971 68.7215,67.336 68.7215,65.4819 C68.7215,57.1464 62.001,50.4753 53.6616,50.4753 L36.3424,50.4753 C28.0049,50.4753 21.2587,57.1464 21.2587,65.4819 C21.2587,67.334 22.073,69.0991 23.4844,70.3029 C29.2779,75.2464 36.7891,78.2331 44.9901,78.2331 Z" />
          </StyledAvatarEmpty>
        )}
      </StyledAvatarInner>
    </StyledAvatar>
  );
};

export default Avatar;
