export const paths = {
  home: '/',
  notFound: '/*',
  beers: {
    main: '/beers',
  },
};

export const captions = {
  pages: {
    home: 'Home',
    notFound: 'Page not found',
    beers: {
      main: 'Beers',
    },
  },
  goTo: {
    home: 'Go to Home page',
  },
  errors: {
    default:
      'An error has occurred. We are most likely already working on a fix. You can check with the support service.',
    404: 'The resource you are looking for was not found',
  },
};

export const pages = {
  home: {
    id: 'home',
    path: paths.home,
    title: captions.pages.home,
    goTo: captions.goTo.home,
  },
  notFound: {
    id: 'notFound',
    path: paths.notFound,
    title: captions.pages.notFound,
  },
  beers: {
    main: {
      id: 'beers',
      path: paths.beers.main,
      title: captions.pages.beers.main,
    },
  },
};

export default {
  paths,
  captions,
  pages,
};
