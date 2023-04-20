import React from 'react';

import { injectStore, useStore } from 'application/store';

import Component from './Main';
import { create as createStore } from './store';

injectStore('beers', createStore());

const Page: React.FC = () => {
  const store = useStore();
  const { containers } = store;
  const { beers: componentStore } = containers;

  return <Component store={componentStore} />;
};

export default Page;
