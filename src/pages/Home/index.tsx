import React from 'react';

import { injectStore, useStore } from 'application/store';

import Component from './Home';
import { create as createStore } from './store';

injectStore('home', createStore());

const Page: React.FC = () => {
  const store = useStore();
  const { containers } = store;
  const { home: componentStore } = containers;

  return <Component store={componentStore} />;
};

export default Page;
