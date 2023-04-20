import { types } from 'mobx-state-tree';

import { Store as BeersStore, store as beersStore } from './beers/store';

export const Store = types.model({
  beers: BeersStore,
});

export const store = Store.create({
  beers: beersStore,
});

export default store;
