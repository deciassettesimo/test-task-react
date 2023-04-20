import React from 'react';

import { injectStore, useStore } from 'application/store';

import Component from './NotFound';
import { create as createStore } from './store';

injectStore('notFound', createStore());

const Page: React.FC = () => {
  const store = useStore();
  const { containers } = store;
  const { notFound: componentStore } = containers;

  return <Component store={componentStore} />;
};

export default Page;
