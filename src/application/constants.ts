import globals from 'application/globals';

export const navigation = {
  home: globals.pages.home,
  items: [
    {
      ...globals.pages.beers.main,
    },
  ],
};
