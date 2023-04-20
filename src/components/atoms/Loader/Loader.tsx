import React from 'react';

import { LoaderProps } from './types';
import { StyledLoaderWrapper, StyledLoader, StyledLoaderCircle, StyledLoaderDots } from './style';

const Loader: React.FC<LoaderProps> = (props) => {
  const { size = 'm', display = 'block', type = 'circle', centered } = props;

  const renderLoaderCircle = () => (
    <StyledLoaderCircle>
      <div />
    </StyledLoaderCircle>
  );

  const renderLoaderDots = () => (
    <StyledLoaderDots>
      <div />
      <div />
      <div />
      <div />
    </StyledLoaderDots>
  );

  if (centered) {
    return (
      <StyledLoaderWrapper>
        <StyledLoader data-component="Loader" sSize={size} sType={type} sDisplay={display}>
          {type === 'circle' && renderLoaderCircle()}
          {type === 'dots' && renderLoaderDots()}
        </StyledLoader>
      </StyledLoaderWrapper>
    );
  }

  return (
    <StyledLoader data-component="Loader" sSize={size} sType={type} sDisplay={display}>
      {type === 'circle' && renderLoaderCircle()}
      {type === 'dots' && renderLoaderDots()}
    </StyledLoader>
  );
};

export default Loader;
