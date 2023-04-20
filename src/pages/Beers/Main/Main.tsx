import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import useLazyLoadOnScroll from 'utils/useLazyLoadOnScroll';
import PageLoader from 'components/molecules/PageLoader';
import { Header, Content, Error } from 'components/molecules/Layout';
import Block from 'components/atoms/Block';
import Loader from 'components/atoms/Loader';

import BeersList from '../modules/BeersList';

import { ComponentProps } from './types';

const Main: React.FC<ComponentProps> = (props) => {
  const { store } = props;
  const {
    mounted,
    mount,
    unmount,
    loading,
    lazyLoading,
    error,
    captions,
    breadCrumbs,
    items,
    lazyLoad,
  } = store;

  const lazyLoadOnScroll = useLazyLoadOnScroll(mounted && !loading && !lazyLoading);

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  useEffect(() => {
    if (lazyLoadOnScroll) lazyLoad();
  }, [lazyLoadOnScroll]);

  if (!mounted) return null;

  if (loading) return <PageLoader />;

  if (error) return <Error>{captions.error}</Error>;

  return (
    <>
      <Header title={captions.title} breadCrumbs={breadCrumbs} />
      <Content>
        {!!items.length && (
          <Block margin="m">
            <BeersList items={items} />
          </Block>
        )}
      </Content>
      {lazyLoading && (
        <Block margin="m" textAlign="center">
          <Loader display="inline" type="dots" size="s" />
        </Block>
      )}
    </>
  );
};

export default observer(Main);
