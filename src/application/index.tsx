import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useStore } from 'application/store';

import Component from './Application';

const Application: React.FC = () => {
  const store = useStore();

  return (
    <BrowserRouter>
      <Component store={store} />
    </BrowserRouter>
  );
};

export default Application;
