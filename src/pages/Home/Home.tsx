import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Header, Content } from 'components/molecules/Layout';
import Block from 'components/atoms/Block';
import Link from 'components/atoms/Link';
import { H2 } from 'components/atoms/Heading';

import { ComponentProps } from './types';

const Home: React.FC<ComponentProps> = (props) => {
  const { store } = props;
  const { mounted, mount, unmount, captions, menu } = store;

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <Header title={captions.title} />
      <Content>
        <Block margin="m">
          <Block>
            <H2>
              <Link href={menu.beers.main.path} id={menu.beers.main.id} underline>
                {menu.beers.main.title}
              </Link>
            </H2>
          </Block>
        </Block>
      </Content>
    </>
  );
};

export default observer(Home);
