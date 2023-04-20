import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Error } from 'components/molecules/Layout';

import { ComponentProps } from './types';

const NotFound: React.FC<ComponentProps> = (props) => {
  const { store } = props;
  const { mounted, mount, unmount, captions } = store;

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  if (!mounted) return null;

  return <Error>{captions.title}</Error>;
};

export default observer(NotFound);
