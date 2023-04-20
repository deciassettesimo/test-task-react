import { lazy } from 'react';

import globals from 'application/globals';

const components = {
  home: lazy(() => import('pages/Home')),
  notFound: lazy(() => import('pages/NotFound')),
  beers: {
    main: lazy(() => import('pages/Beers/Main')),
  },
};

export const routes = [
  {
    ...globals.pages.home,
    component: components.home,
  },

  {
    ...globals.pages.beers.main,
    component: components.beers.main,
  },

  {
    ...globals.pages.notFound,
    component: components.notFound,
  },
];
