import React, { useContext } from 'react';

import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';

import { LayoutErrorProps } from './types';
import { StyledLayoutError, StyledLayoutSection } from './style';
import { LayoutContext } from './context';

const LayoutError: React.FC<LayoutErrorProps> = (props) => {
  const { children } = props;

  const { home } = useContext(LayoutContext);

  return (
    <StyledLayoutError data-component="LayoutError">
      <StyledLayoutSection>{children}</StyledLayoutSection>
      <StyledLayoutSection>
        <Link href={home.path} id={home.id}>
          <Button type="primary">{home.goTo || home.title}</Button>
        </Link>
      </StyledLayoutSection>
    </StyledLayoutError>
  );
};

export default LayoutError;
