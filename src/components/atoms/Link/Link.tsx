import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { LinkProps } from './types';
import { StyledExternalLink, StyledLink } from './style';

const Link: React.FC<LinkProps> = (props) => {
  const {
    children,
    id,
    href,
    block = false,
    underline,
    active,
    external,
    disabled,
    color,
    ...rest
  } = props;

  const component = useMemo(() => (disabled || !href ? 'span' : 'a'), [disabled, href]);

  if (external || disabled || !href) {
    return (
      <StyledExternalLink
        data-component="ExternalLink"
        as={component}
        id={id}
        href={href}
        sBlock={block}
        sUnderline={underline}
        sActive={active}
        sColor={color}
        {...rest}
      >
        {children}
      </StyledExternalLink>
    );
  }

  return (
    <StyledLink
      data-component="Link"
      sBlock={block}
      sUnderline={underline}
      sActive={active}
      sColor={color}
      {...rest}
    >
      <RouterLink data-component="RouterLink" id={id} to={href}>
        {children}
      </RouterLink>
    </StyledLink>
  );
};

export default Link;
